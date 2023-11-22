import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.254bf437.js";const b=JSON.parse('{"title":"Options to leverage your backend for frontenders","description":"","frontmatter":{},"headers":[],"relativePath":"en/backend/backend.md","filePath":"en/backend/backend.md","lastUpdated":1700642197000}'),s={name:"en/backend/backend.md"},r=o('<h1 id="options-to-leverage-your-backend-for-frontenders" tabindex="-1">Options to leverage your backend for frontenders <a class="header-anchor" href="#options-to-leverage-your-backend-for-frontenders" aria-label="Permalink to &quot;Options to leverage your backend for frontenders&quot;">​</a></h1><details class="details custom-block"><summary>How to test frontend on backend data?</summary><p>There are many services that offer their API with different data for testing or full-fledged work</p><p>For example, <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">jsonplaceholder.typicode.com</a>.</p><p>Google <code>&quot;json placeholder&quot;</code>.</p></details><details class="details custom-block"><summary>Are there any free open APIs with real data?</summary><p>Plenty. For example, <a href="https://github.com/public-apis/public-apis" target="_blank" rel="noreferrer">here</a></p><p>Google <code>public api</code>.</p><p>You can also poke around relevant sites in DevTools / Network for endpoints with data in a suitable format</p></details><details class="details custom-block"><summary>How to make your own backend?</summary><p>If you already know JavaScript, it should not be a problem to install and run Node.js with an HTTP server.</p><p>Node.js is not a very popular server for the Internet, but for a small project will do.</p><p>In absolute terms, it is easiest to install and start working with Nginx and PHP</p><p>Most major cloud providers (Amazon, Google, Oracle, Microsoft) provide free plans with the ability to run a virtual server. By putting what is required there, you can want both a back end and a front end bundle.</p></details><details class="details custom-block"><summary>What is BaaS (Backend as a service)?</summary><p>It is a cloud solution where the backend in the form of a database and its access interface, and possibly the ability to use some logic, is provided by a BaaS provider.</p><p>For example, a NoSQL database and access to it is provided by Google using its Firebase service</p><p>Alternative with PostgreSQL - Supabase</p><p>That is, your frontend will access their specific endpoints and get the services you need - for example, to save and query data in the database.</p><p>Both services provide the ability to do authentication on the site. Thus, a front-end developer can write an application using such a service without writing his own backend code and without placing it somewhere on a server on the Internet.</p><p>These services have free plans with rather large resources.</p></details><details class="details custom-block"><summary>Business logic on BaaS</summary><p>Most BaaS services provide not only CRUD access to their database, but also the ability to write custom logic in the form of Cloud Functions in Firebase, Edge Functions in Supabase, AWS Lambda in Amazon, etc.</p><p>These functions are code in some programming language that will be called when a certain backend endpoint is accessed.</p><p>In case a frontend developer wants to make a full-fledged application, but doesn&#39;t want to bother with a standalone backend, this is a pretty good and very economical solution.</p></details><details class="details custom-block"><summary>How Edge/Cloud/Lamda features work</summary><p>It&#39;s basically a backend in miniature</p><p>Your front end accesses a given endpoint (via the BaaS provider&#39;s BaaS service API gateway) - e.g. <code>/api/somefunc</code></p><p>There lies a script written by you in js or other programming language, which is executed, has access to the database and can do other things (load data from the internet for example).</p><p>Then the script generates a result and returns it to your front end.</p></details>',7),n=[r];function i(d,c,l,p,u,h){return a(),t("div",null,n)}const f=e(s,[["render",i]]);export{b as __pageData,f as default};
