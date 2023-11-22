import{_ as e,a as t}from"./chunks/dynamic-rendering.55387a76.js";import{_ as a,o as s,c as o,Q as i}from"./chunks/framework.254bf437.js";const b=JSON.parse('{"title":"SPA, PWA, SSG, SSR and SEO","description":"","frontmatter":{},"headers":[],"relativePath":"en/frontend/spa-pwa-ssr-ssg.md","filePath":"en/frontend/spa-pwa-ssr-ssg.md","lastUpdated":1700642197000}'),r={name:"en/frontend/spa-pwa-ssr-ssg.md"},n=i('<h1 id="spa-pwa-ssg-ssr-and-seo" tabindex="-1">SPA, PWA, SSG, SSR and SEO <a class="header-anchor" href="#spa-pwa-ssg-ssr-and-seo" aria-label="Permalink to &quot;SPA, PWA, SSG, SSR and SEO&quot;">​</a></h1><details class="details custom-block"><summary>Web 1.0 -&gt; Web 2.0</summary><p>First there was static HTML and browsers showed it. A little bit later a little bit of JavaScript was invented to process forms and do a little animation. Then CSS came along and everyone saw that it was beautiful. Then someone proposed the idea of JSON for data format, and then Microsoft gave the world XMLHttpRequest, and JavaScript was allowed to send and receive data from the server.</p><p>That&#39;s how SPA was born.</p></details><details class="details custom-block"><summary>SPA</summary><p>SPA (Single Page Application) works like a regular desktop/mobile application - when first accessing the server, it receives the shell necessary to display the site, and then sends data to/from the server, usually in JSON format. This is much more efficient than the way when with each request from the server came a new HTML page with all the resources.</p><p>For the user UX increases significantly.</p><p><img src="'+e+'" alt="spa-vs-mpa"></p></details><details class="details custom-block"><summary>PWA</summary><p>PWA (Progressive Web Application) is another step to improve user experience and make web applications as close as possible to native web applications.</p><p>With PWA, two elements are added to the SPA:</p><ol><li><p><code>Manifest</code>. A text file with the properties of the application. With this, the icon of the web application can be set as well as native applications to the home screen of the smartphone. In addition, when PWA is launched, it may not show browser elements and appear to be a normal application.</p></li><li><p><code>Service worker</code>. This is a layer in the browser between the server and the browser itself that allows you to do managed caching. In other words, store the app with all the resources on the smartphone/computer so that when you start it, it will run immediately. If you don&#39;t need data from the server, the app can run offline (e.g. Notes).</p></li></ol><p>You can read more about PWA on the website created by the Chrome team - <a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noreferrer">https://web.dev/</a></p><p>Upgrading SPA to PWA is very small in labor cost, but very significant in benefit. Developing SPA and not making it a PWA is like renting a luxury hotel room but sleeping on a mat at its entrance in the corridor because it&#39;s too lazy to walk to the bedroom.</p></details><details class="details custom-block"><summary>PWA -&gt; Workbox and vite-plugin-pwa</summary><p><code>Manifest</code> and <code>Service worker</code> are so simple that creating a wrapper over SW - <code>Workbox</code>, and a plugin for Vite - <code>vite-plugin-pwa</code> is not logical. You get several times more code, need to load additional dependencies and understand wrapper configurations. Simple things have been made complex.</p><p>It is better to use <code>Manifest</code> and <code>Service worker</code> as they were created originally, and write these two simple files using templates from the specifications.</p></details><details class="details custom-block"><summary>SSG</summary><p>SSG (Static Site Generation) is an approach where the content of a website is pre-generated into html files, which are then distributed from the server.</p><p>Immediately suitable for indexing by search engines.</p></details><details class="details custom-block"><summary>SSR</summary><p>SSR (Server Side Rendering), a way of generating html on the server side, when generation occurs at the moment of request. After the client requests a page, the server executes API requests on its side and then generates the html page. Accordingly, the server needs a Node.js server, which is quite a heavy load on the hardware.</p><p>In addition, there are a lot of restrictions when writing code and using certain JavaScript and Vue features. As <a href="https://web.dev/rendering-on-the-web/" target="_blank" rel="noreferrer">Google writes</a> regarding SSR - <em>&quot;A rehydration problem: one app for the price of two&quot;</em>.</p></details><details class="details custom-block"><summary>SEO optimization</summary><p>In order for a search engine to index a page on your site, it must receive HTML with content (text, images, video) when accessing it. With SPA sites, where content is loaded dynamically by JavaScript, this is often not possible.</p><p>The most popular and inefficient method to bypass this is to use SSR (SSG is suitable for simple structured sites without backend, like documentation).</p><p>Google allows you to <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noreferrer">see</a> how your site looks/indexed by its crawler, which somehow still works with scripts, so first check if you need to get complicated at all.</p><p>If you find problems, you can use <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering" target="_blank" rel="noreferrer">dynamic rendering</a></p><p><img src="'+t+'" alt="dynamic-rendering"></p><p>The point is to handle requests from normal users and search bots differently and give them different pages. For users - SPA, for search bots - pages generated on the fly or in advance. Distribution can be handled by a webserver or an entry point to your site (<code>index.php</code> instead of <code>index.html</code>).</p><p>The above picture implies some kind of Prerenderer (which are also available as a third-party service or their own solution), but in most cases it is much easier to generate HTML page for the bot directly.</p><p>That is, for example, for a product page in an online store it can be its text description with pictures and customer reviews in any HTML formatting. For this purpose it is enough a script on PHP/Express/Python, etc. in 100-200 lines, which is much less labor-intensive than SSR solutions, and also reduces the requirements in the server &quot;hardware&quot; by orders of magnitude (the output can be cached in a static HTML file).</p><p>When the actual content (text, images) of such a page coincides with the content of SPA in the browser, Google does not consider the simplified version for its bot as a deception. This method has been around since before the advent of SSRs. Verified by many years of use.</p></details><details class="details custom-block"><summary>PageSpeed and other performance tests</summary><p><a href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer">PageSpeed</a> and similar tools are very useful in identifying unoptimized places in your web application, but it is not quite right for SPA and PWA.</p><p>More precisely, some of its metrics don&#39;t take into account UX as a whole. A well-built PWA, when first downloaded and installed, will of course lose by FCP metrics to its SSR counterpart, but after placing all its resources locally on the client&#39;s browser, no SSR will come close to it in terms of speed and user comfort, not to mention other features like offline operation and installation as a native application.</p><p>SSR can probably be useful for some exceptional cases, but in general it looks like a dead-end branch in frontend development.</p></details>',9),l=[n];function d(c,p,h,m,u,f){return s(),o("div",null,l)}const S=a(r,[["render",d]]);export{b as __pageData,S as default};
