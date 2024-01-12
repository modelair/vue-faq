import{_ as a,c as e,o as s,U as i,ae as t}from"./chunks/framework.lBFuN894.js";const v=JSON.parse('{"title":"Scaffolding a Vue webapp","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"vue-webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp.jpg"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp.jpg"}]]},"headers":[],"relativePath":"en/vue-webapp/index.md","filePath":"en/vue-webapp/index.md","lastUpdated":1705050017000}'),d={name:"en/vue-webapp/index.md"},n=i(`<h1 id="scaffolding-a-vue-webapp" tabindex="-1" data-v-fced1811>Scaffolding a Vue webapp <a class="header-anchor" href="#scaffolding-a-vue-webapp" aria-label="Permalink to &quot;Scaffolding a Vue webapp&quot;" data-v-fced1811>​</a></h1><h2 id="summary" tabindex="-1" data-v-fced1811>Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;" data-v-fced1811>​</a></h2><p data-v-fced1811>Vue 3 website builder/scaffolder (<a href="https://github.com/vuesence/vue-webapp" target="_blank" rel="noreferrer" data-v-fced1811>GitHub</a>) for developers, with a choice of business template (portfolio, blog, store, etc.), layout template, design and functionality (API module, i18n, PWA, splash screen, auth module, themes, etc.), for further convenient customization and content filling.</p><div class="language-sh vp-adaptive-theme" data-v-fced1811><button title="Copy Code" class="copy" data-v-fced1811></button><span class="lang" data-v-fced1811>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-fced1811><code data-v-fced1811><span class="line" data-v-fced1811><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fced1811>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> vue-webapp</span></span>
<span class="line" data-v-fced1811></span>
<span class="line" data-v-fced1811><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fced1811>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> my-vue-project</span></span>
<span class="line" data-v-fced1811><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fced1811>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> yes</span></span>
<span class="line" data-v-fced1811><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fced1811>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fced1811> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fced1811>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fced1811>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fced1811> ... no / yes</span></span>
<span class="line" data-v-fced1811><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fced1811>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> yes</span></span>
<span class="line" data-v-fced1811><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fced1811>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fced1811> yes</span></span>
<span class="line" data-v-fced1811><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fced1811>...</span></span></code></pre></div><h2 id="justification" tabindex="-1" data-v-fced1811>Justification <a class="header-anchor" href="#justification" aria-label="Permalink to &quot;Justification&quot;" data-v-fced1811>​</a></h2><p data-v-fced1811>There are quite a few (mostly specific and quickly becoming obsolete) boilerplate templates for creating a Vue application. Usually it means creating an empty project with certain libraries. In other words, it&#39;s just setting up an environment to start development without, actually, code.</p><p data-v-fced1811>At the same time, many other frontend and backend frameworks have starter-kits that allow you to quickly create a ready-made blog, online store, business card site, portfolio, documentation, etc., which greatly helps in learning the framework itself, relevant technologies and best practices, as well as for solving business tasks.</p><p data-v-fced1811>As a result, it may seem that Vue is a rather low-level framework, and to create web applications quickly, efficiently and conveniently, you need to take some &quot;metaframwork&quot; or other solution - like Nuxt, Astro, VitePress, Vue Storefront - which explicitly position themselves as tools for solving certain (or a wide range of) business tasks.</p><p data-v-fced1811>There is a need for a tool similar to <code data-v-fced1811>create-vue</code>, for scaffolding a ready-to-go web application. On the one hand, a quite workable, adaptive website with the necessary functionality so that a novice developer could familiarize himself with a proven approach to solving the tasks involved. On the other hand, it should be minimalistic enough not to impose unwanted technologies and libraries on an experienced developer and create a skeleton of established best practices for further development of the application.</p><p data-v-fced1811>It is clear that defining one or another &quot;best practice&quot; (fetch or axios?) can be quite controversial, but nevertheless.</p><p data-v-fced1811><img src="`+t+'" alt="" data-v-fced1811></p>',11),l=[n];function h(p,c,r,o,k,f){return s(),e("div",null,l)}const g=a(d,[["render",h],["__scopeId","data-v-fced1811"]]);export{v as __pageData,g as default};
