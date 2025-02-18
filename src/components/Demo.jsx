import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { copy, linkIcon, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );
    if (articlesFromLocalStorage.length > 0) {
      setAllArticles(articlesFromLocalStorage);
    }

    // Focus input field when the component mounts
    // inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = {
        ...article,
        summary: data.summary,
      };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (text) => {
    setCopied(text);
    navigator.clipboard.writeText(text);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter An Article URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-100 peer-focus:text-gray-100"
          >
            <p className="text-xl">↵</p>
          </button>
        </form>

        {/* Browse URL History */}
        <div
          className="flex flex-col gap-1 max-h-[11rem] overflow-y-auto"
          id="scrollbar"
        >
          {allArticles.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card mr-2"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt="copy_icon"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate link_text">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <span className="loader"></span>
        ) : error ? (
          <p className="font-inter font-bold text-white text-center">
            Well, that was not supposed to happen..
            <br />
            <span className="font-satoshi font-normal text-gray-400">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3 relative">
              <h2 className="font-satoshi font-bold text-gray-300 text-xl">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box relative p-4 bg-gray-800 rounded-lg shadow-md">
                {/* Typing Effect with paragraphs separated by newlines */}
                <p className="font-inter font-medium text-sm text-gray-200 leading-relaxed whitespace-pre-wrap mb-[1em]">
                  <Typewriter
                    words={[article.summary]}
                    loop={1}
                    // cursor
                    // cursorStyle="|"
                    typeSpeed={10}
                    deleteSpeed={10}
                    delaySpeed={500}
                  />
                </p>

                {/* Copy Button for Summary */}
                <div
                  className="copy_btn absolute top-2 right-2"
                  onClick={() => handleCopy(article.summary)}
                >
                  <img
                    src={copied === article.summary ? tick : copy}
                    alt="copy_icon"
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
