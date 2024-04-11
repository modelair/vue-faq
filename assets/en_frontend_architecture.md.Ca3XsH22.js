import{_ as e,o as t,c as a,aa as o}from"./chunks/framework.CybsxytS.js";const f=JSON.parse('{"title":"Frontend application architecture","description":"","frontmatter":{},"headers":[],"relativePath":"en/frontend/architecture.md","filePath":"en/frontend/architecture.md","lastUpdated":1712798980000}'),i={name:"en/frontend/architecture.md"},n=o('<h1 id="frontend-application-architecture" tabindex="-1">Frontend application architecture <a class="header-anchor" href="#frontend-application-architecture" aria-label="Permalink to &quot;Frontend application architecture&quot;">​</a></h1><details class="details custom-block"><summary>What is a good web application architecture</summary><p>There are different theoretical definitions and justifications for this concept, but roughly speaking it is the following.</p><p>Let&#39;s say you are developing a project, already at the final stage. A customer comes to you and says something like: I want to add a shadow to all buttons, I want to change the UI library, we decided to support multiple languages, we decided to replace this module with another, we need to make more detailed adaptability for different resolutions, we decided to add themes, we are changing the provider of payment processing services, we have an increasing number of users / the site is slowing down / need to speed it up, need to increase the level of security of the site, we took a middle programmer, bring him up to speed quickly, and let him add functionality or fix the b</p><p>A good frontend application architecture allows you to accomplish all of this most efficiently with the least amount of effort.</p></details><details class="details custom-block"><summary>OOP on the frontend</summary><p>Many people coming from development in object-oriented languages try to use OOP concepts on the frontend and program with classes, inheritance, polymorphism and other things.</p><p>This is a mistake. The main computations on the front end are related to UI - displaying data, handling user interaction. Class systems and microservices are simply not needed on them. Of course, you can create a basic button, wrap it in two custom components and consider it inheritance, but you can&#39;t do it in code. That&#39;s why you have to learn to think in other categories - components, composable functions, js modules. And use your JavaScript power, not trying to stretch it on OOP.</p><p>At the same time, a good analogy of an object with a global (&quot;static&quot;) and local (&quot;object&quot;) state is a composable function. It can be used in certain situations.</p></details><details class="details custom-block"><summary>Multithreading and asynchronicity</summary><p><strong>Multithreading</strong> is when a programmer can create a separate thread and run his specific code in it. For example, you can create two threads, one in an infinite loop outputs &quot;Thread A&quot; to the console and the other &quot;Thread B&quot;. These strings will alternate in the output. You can prioritize the threads, and then the thread with priority 3 will output messages 3 times more often than the thread with priority 1.</p><p>These two threads should be executed simultaneously, but this is conditional. Because if there are 10 threads and the processor is dual-core with two threads per core, it is physically impossible to execute more than 4 simultaneous threads. That&#39;s why threads are divided into pieces of code and they are executed one by one - this is called concurrency.</p><p>In the JavaScript world, threads can become queued at the JS runtime, OS, CPU level. Common desktop applications (for example, IDEs) can also have good support for parallelization on multi-core processors - and then they use CPUs as efficiently as possible, or load only one core. In the latter case, upgrading to a newer multi-core CPU will do almost nothing if the old and the new one have approximately the same frequency.</p><p><strong>Asynchronicity</strong> is when there is some non-blocking function whose exact execution time is unknown. And the programmer can specify the code to be executed after this function is executed (pass a callback). Promises and async/await are non-trivial but still just convenient wrappers over this logic.</p><p>So, with asynchronicity, there is usually some border function that depends on external circumstances (<code>fetch, nextTick, fs.readdir, setTimeout</code>). Its &quot;pseudo-parallel&quot; execution in one thread together with the main code is provided by the <code>Event Loop</code> mechanism.</p><p>Thus, these are completely different things both in purpose and usage. asynchronicity in JavaScript is realized through promises and async/await, multithreading or its similarity is realized by rantime (<code>Web workers</code>, <code>worker_threads</code>).</p><p>Asynchronicity is needed to communicate with the &quot;outside world&quot;, including browser rendering. Multithreading allows to separate resource-intensive computations (as well as network requests) into separate threads (<code>Web workers</code>), which reduces the load on the main thread, which is responsible for rendering. This has a favorable effect on the responsiveness of your UI.</p></details><details class="details custom-block"><summary>Useful tips</summary><h6 id="avoid-dependencies" tabindex="-1">Avoid dependencies <a class="header-anchor" href="#avoid-dependencies" aria-label="Permalink to &quot;Avoid dependencies&quot;">​</a></h6><p>If there is a possibility not to introduce a new dependency (not to plug in a new npm package) - don&#39;t do it. It may save you a bit of time, but a third-party library will sooner or later become obsolete, no longer supported, and may have a vulnerability. Besides, it increases the size of your bundle, which directly affects the performance of your application. Tree shaking is good in advertising, but it doesn&#39;t always work in reality.</p><p>If you need, for example, the <code>debounce</code> function, don&#39;t hurry to plug it together with some library. Google its implementation and copy 15 lines of code and make your own function.</p><hr><h6 id="use-wrappers-over-components-of-ui-libraries-and-third-party-utilities" tabindex="-1">Use wrappers over components of UI libraries and third-party utilities <a class="header-anchor" href="#use-wrappers-over-components-of-ui-libraries-and-third-party-utilities" aria-label="Permalink to &quot;Use wrappers over components of UI libraries and third-party utilities&quot;">​</a></h6><p>If you use components of some UI library, don&#39;t use them directly - make wrappers for them. For example, <code>BaseButton</code> or <code>BaseInput</code>. This will make styling the components much easier, and will also make it much easier to switch to another library, or replace them with your own components.</p><p>The same goes for utilities.</p><hr><h6 id="regular-refactoring" tabindex="-1">Regular refactoring <a class="header-anchor" href="#regular-refactoring" aria-label="Permalink to &quot;Regular refactoring&quot;">​</a></h6><p>Do code refactoring from time to time, moving components and modules to where they should logically be, renaming them, and structuring and improving the code itself. This is good for both the code and your professional growth.</p><hr><h6 id="use-css3" tabindex="-1">Use CSS3 <a class="header-anchor" href="#use-css3" aria-label="Permalink to &quot;Use CSS3&quot;">​</a></h6><p>Try to use pure CSS3 for adaptability. Do not be tied to columnar models of CSS and UI libraries, unless it is a &quot;done and forgotten, let the customer continue to suffer with it&quot; project.</p><p>Spend a couple of days to learn Flexbox and you will be able to layout on it faster and better than on any Tailwind.</p><hr><h6 id="use-modern-standards-and-language-features" tabindex="-1">Use modern standards and language features <a class="header-anchor" href="#use-modern-standards-and-language-features" aria-label="Permalink to &quot;Use modern standards and language features&quot;">​</a></h6><p>For example, HTML5 semantic elements - aside, header, section, article, details, etc.</p><p>CSS3 - Flexbox and Grid, Container query</p><hr><h6 id="document-the-project" tabindex="-1">Document the project <a class="header-anchor" href="#document-the-project" aria-label="Permalink to &quot;Document the project&quot;">​</a></h6><p>Draw use-case and other diagrams, describe the main functionality of the project and important details of its implementation - this will at least raise your level as a software developer.</p><p>VitePress is a very handy tool for technical documentation.</p></details>',5),r=[n];function s(d,c,l,h,u,p){return t(),a("div",null,r)}const y=e(i,[["render",s]]);export{f as __pageData,y as default};
