import{_ as a,o as e,c as s,a4 as i,ae as t}from"./chunks/framework.B8KxSsRZ.js";const v=JSON.parse('{"title":"Scaffolding a Vue webapp","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"vue-webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"en/vue-webapp/index.md","filePath":"en/vue-webapp/index.md","lastUpdated":1715838813000}'),n={name:"en/vue-webapp/index.md"},l=i(`<h1 id="scaffolding-a-vue-webapp" tabindex="-1" data-v-56e36f1a>Scaffolding a Vue webapp <a class="header-anchor" href="#scaffolding-a-vue-webapp" aria-label="Permalink to &quot;Scaffolding a Vue webapp&quot;" data-v-56e36f1a>​</a></h1><h2 id="summary" tabindex="-1" data-v-56e36f1a>Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;" data-v-56e36f1a>​</a></h2><p data-v-56e36f1a>Vue 3 website builder/scaffolder (<a href="https://github.com/vuesence/vue-webapp" target="_blank" rel="noreferrer" data-v-56e36f1a>GitHub</a>) for developers, with a choice of business template (portfolio, blog, store, etc.), layout template, design and functionality (API module, i18n, PWA, splash screen, auth module, themes, etc.), for further convenient customization and content filling.</p><div class="language-sh vp-adaptive-theme" data-v-56e36f1a><button title="Copy Code" class="copy" data-v-56e36f1a></button><span class="lang" data-v-56e36f1a>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-56e36f1a><code data-v-56e36f1a><span class="line" data-v-56e36f1a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-56e36f1a>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> vue-webapp</span></span>
<span class="line" data-v-56e36f1a></span>
<span class="line" data-v-56e36f1a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-56e36f1a>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> my-vue-project</span></span>
<span class="line" data-v-56e36f1a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-56e36f1a>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> yes</span></span>
<span class="line" data-v-56e36f1a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-56e36f1a>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-56e36f1a> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-56e36f1a>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-56e36f1a>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-56e36f1a> ... no / yes</span></span>
<span class="line" data-v-56e36f1a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-56e36f1a>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> yes</span></span>
<span class="line" data-v-56e36f1a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-56e36f1a>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-56e36f1a> yes</span></span>
<span class="line" data-v-56e36f1a><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-56e36f1a>...</span></span></code></pre></div><h2 id="justification" tabindex="-1" data-v-56e36f1a>Justification <a class="header-anchor" href="#justification" aria-label="Permalink to &quot;Justification&quot;" data-v-56e36f1a>​</a></h2><p data-v-56e36f1a>There are quite a few (mostly specific and quickly becoming obsolete) boilerplate templates for creating a Vue application. Usually it means creating an empty project with certain libraries. In other words, it&#39;s just setting up an environment to start development without, actually, code.</p><p data-v-56e36f1a>At the same time, many other frontend and backend frameworks have starter-kits that allow you to quickly create a ready-made blog, online store, business card site, portfolio, documentation, etc., which greatly helps in learning the framework itself, relevant technologies and best practices, as well as for solving business tasks.</p><p data-v-56e36f1a>As a result, it may seem that Vue is a rather low-level framework, and to create web applications quickly, efficiently and conveniently, you need to take some &quot;metaframwork&quot; or other solution - like Nuxt, Astro, VitePress, Vue Storefront - which explicitly position themselves as tools for solving certain (or a wide range of) business tasks.</p><p data-v-56e36f1a>There is a need for a tool similar to <code data-v-56e36f1a>create-vue</code>, for scaffolding a ready-to-go web application. On the one hand, a quite workable, adaptive website with the necessary functionality so that a novice developer could familiarize himself with a proven approach to solving the tasks involved. On the other hand, it should be minimalistic enough not to impose unwanted technologies and libraries on an experienced developer and create a skeleton of established best practices for further development of the application.</p><p data-v-56e36f1a>It is clear that defining one or another &quot;best practice&quot; (fetch or axios?) can be quite controversial, but nevertheless.</p><p data-v-56e36f1a><img src="`+t+'" alt="image" data-v-56e36f1a></p>',11),h=[l];function d(p,o,r,k,f,F){return e(),s("div",null,h)}const g=a(n,[["render",d],["__scopeId","data-v-56e36f1a"]]);export{v as __pageData,g as default};
