# GSAP (GreenSock Animation Platform) with Trial Bonus Files

⚠️ **DO NOT DEPLOY THESE FILES!** ⚠️ 

[![GSAP - Animate anything](https://gsap.com/GSAP-share-image.png)](http://gsap.com)

This package is only intended for experimentation during development. It contains the public <a href="https://gsap.com">GSAP</a> files plus all bonus plugins which are normally available exclusively to <a href="https://gsap.com/pricing">Club GSAP</a> members, including <a href="https://gsap.com/docs/v3/Plugins/ScrollSmoother">ScrollSmoother</a>, <a href="https://gsap.com/docs/v3/Plugins/DrawSVGPlugin">DrawSVG</a>, <a href="https://gsap.com/docs/v3/Plugins/MorphSVGPlugin">MorphSVG</a>, <a href="https://gsap.com/docs/v3/Plugins/SplitText">SplitText</a>, <a href="https://gsap.com/docs/v3/Plugins/InertiaPlugin">Inertia</a>, and more. The trial plugins only work locally and on certain approved domains like codesandbox.io, codepen.io, stackblitz.com, and jsfiddle.com. Deploying them elsewhere violates the license and will result in a browser redirect! 

Sign up for <a href="https://gsap.com/pricing">Club GSAP</a> to get the **completely unrestricted** files.

No GSAP files (including the trial plugins) implement any tracking whatsoever. No data is collected.

## Docs

View the <a href="https://gsap.com/docs">full documentation here</a>, including an <a href="https://gsap.com/install">installation guide</a>.

## Usage on approved domains

On a whitelisted domain like <a href="https://codesandbox.io">codesandbox.io</a>, you can do this:
```javascript
// typical import
import gsap from "gsap-trial";

// or get other plugins:
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger, DrawSVGPlugin } from "gsap-trial/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin); 
```
The NPM files are ES modules, but there is also a /dist/ directory with <a href="https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/">UMD</a> files for extra compatibility. Some build tools don't understand ES Modules in which case you can import the UMD files by adding /dist/ like:

```javascript
// UMD imports
import gsap from "gsap-trial/dist/gsap";
import MorphSVGPlugin from "gsap-trial/dist/MorphSVGPlugin";
```

### Use an alias to make upgrading simple
Install the package as a "gsap" alias so that when you join <a href="https://gsap.com/pricing">Club GSAP</a> and get the unrestricted files, all you have to do is install those and make zero changes to all your imports!

```javascript
npm install gsap@npm:gsap-trial
```
Now we can simply use "gsap" in place of "gsap-trial", so the imports could look like this:
```javascript
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
```

## How do I get unrestricted files?
Once you're a <a href="https://gsap.com/pricing/">Club GSAP</a> member, download the unrestricted plugins from your gsap.com account and then include them in your own JS payload. There are no "phone home" scripts that track usage and the plugins won't suddenly stop working if/when your membership expires. We treat others the way we'd like to be treated and our entire business model is built on the honor system. Read about it <a href="https://gsap.com/why-license">here</a>. GSAP has a <a href="https://gsap.com/install">private NPM registry</a> for members too. 

Post your questions in our <a href="https://gsap.com/community/">forums</a> and we'd be happy to help.

## Using React?

There's a <a href="https://www.npmjs.com/package/@gsap/react">@gsap/react</a> package that exposes a `useGSAP()` hook which is a drop-in replacement for `useEffect()`/`useLayoutEffect()`, automating cleanup tasks. Please read the <a href="https://gsap.com/react">React guide</a> for details.

## Get Started

[![Get Started with GSAP](http://gsap.com/_img/github/get-started.jpg)](http://gsap.com/get-started)

### ScrollTrigger and ScrollSmoother

If you're looking for scroll-driven animations, GSAP's <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">ScrollTrigger</a> plugin is the new standard. There's a companion <a href="https://gsap.com/docs/v3/Plugins/ScrollSmoother/">ScrollSmoother</a> as well.

[![ScrollTrigger](http://gsap.com/_img/github/scrolltrigger.jpg)](https://gsap.com/docs/v3/Plugins/ScrollTrigger)


### Resources

* <a href="https://gsap.com/">gsap.com</a>
* <a href="https://gsap.com/get-started/">Getting started guide</a>
* <a href="https://gsap.com/docs/">Docs</a>
* <a href="https://gsap.com/resources/demos">Demos &amp; starter templates</a>
* <a href="https://gsap.com/community/">Community forums</a>
* <a href="https://gsap.com/docs/v3/Eases">Ease Visualizer</a>
* <a href="https://gsap.com/showcase">Showcase</a>
* <a href="https://www.youtube.com/@GreenSockLearning">YouTube Channel</a>
* <a href="https://gsap.com/cheatsheet">Cheat sheet</a>
* <a href="https://gsap.com/pricing/">Club GSAP</a> (get access to unrestricted bonus plugins)

### What is Club GSAP?

There are 3 main reasons anyone signs up for <a href="https://gsap.com/pricing">Club GSAP</a>:
* To get access to snazzy <a href="https://gsap.com/pricing">members-only plugins</a> like MorphSVG, SplitText, ScrollSmoother, etc.
* To get the special <a href="https://gsap.com/licensing/">commercial license</a>.
* To support ongoing development efforts and **cheer us on**.

<a href="https://gsap.com/pricing/">Learn more</a>.

## Need help?

The <a href="https://gsap.com/community/">GSAP forums</a> are an excellent place to learn and get your questions answered. Report any bugs there too please (it's also okay to <a href="https://github.com/greensock/GSAP/issues">file an issue on Github</a> if you prefer).

### License

Please do not use any of the bonus plugins without the proper license which comes with Club GSAP memberships. GSAP's standard "no charge" license for the public files can be viewed at <a href="https://gsap.com/standard-license">https://gsap.com/standard-license</a>. <a href="https://gsap.com/pricing/">Club GSAP</a> members are granted additional rights. See <a href="https://gsap.com/licensing/">http://gsap.com/licensing/</a> for details. Why doesn't GSAP use an MIT (or similar) open source license, and why is that a **good** thing? This article explains it all: <a href="https://gsap.com/why-license/" target="_blank">http://gsap.com/why-license/</a>

Copyright (c) 2008-2025, GreenSock. All rights reserved. 