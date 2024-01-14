import{_ as a,c as s,o as i,U as t,ae as e}from"./chunks/framework.P5TqXf0g.js";const g=JSON.parse('{"title":"Scaffolding a Vue webapp","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"vue-webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"en/vue-webapp/index.md","filePath":"en/vue-webapp/index.md","lastUpdated":1705251300000}'),d={name:"en/vue-webapp/index.md"},n=t(`<h1 id="scaffolding-a-vue-webapp" tabindex="-1" data-v-ca3d25aa>Scaffolding a Vue webapp <a class="header-anchor" href="#scaffolding-a-vue-webapp" aria-label="Permalink to &quot;Scaffolding a Vue webapp&quot;" data-v-ca3d25aa>​</a></h1><h2 id="summary" tabindex="-1" data-v-ca3d25aa>Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;" data-v-ca3d25aa>​</a></h2><p data-v-ca3d25aa>Vue 3 website builder/scaffolder (<a href="https://github.com/vuesence/vue-webapp" target="_blank" rel="noreferrer" data-v-ca3d25aa>GitHub</a>) for developers, with a choice of business template (portfolio, blog, store, etc.), layout template, design and functionality (API module, i18n, PWA, splash screen, auth module, themes, etc.), for further convenient customization and content filling.</p><div class="language-sh vp-adaptive-theme" data-v-ca3d25aa><button title="Copy Code" class="copy" data-v-ca3d25aa></button><span class="lang" data-v-ca3d25aa>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-ca3d25aa><code data-v-ca3d25aa><span class="line" data-v-ca3d25aa><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ca3d25aa>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> vue-webapp</span></span>
<span class="line" data-v-ca3d25aa></span>
<span class="line" data-v-ca3d25aa><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ca3d25aa>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> my-vue-project</span></span>
<span class="line" data-v-ca3d25aa><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ca3d25aa>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> yes</span></span>
<span class="line" data-v-ca3d25aa><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ca3d25aa>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ca3d25aa> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ca3d25aa>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ca3d25aa>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ca3d25aa> ... no / yes</span></span>
<span class="line" data-v-ca3d25aa><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ca3d25aa>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> yes</span></span>
<span class="line" data-v-ca3d25aa><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ca3d25aa>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ca3d25aa> yes</span></span>
<span class="line" data-v-ca3d25aa><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ca3d25aa>...</span></span></code></pre></div><h2 id="justification" tabindex="-1" data-v-ca3d25aa>Justification <a class="header-anchor" href="#justification" aria-label="Permalink to &quot;Justification&quot;" data-v-ca3d25aa>​</a></h2><p data-v-ca3d25aa>There are quite a few (mostly specific and quickly becoming obsolete) boilerplate templates for creating a Vue application. Usually it means creating an empty project with certain libraries. In other words, it&#39;s just setting up an environment to start development without, actually, code.</p><p data-v-ca3d25aa>At the same time, many other frontend and backend frameworks have starter-kits that allow you to quickly create a ready-made blog, online store, business card site, portfolio, documentation, etc., which greatly helps in learning the framework itself, relevant technologies and best practices, as well as for solving business tasks.</p><p data-v-ca3d25aa>As a result, it may seem that Vue is a rather low-level framework, and to create web applications quickly, efficiently and conveniently, you need to take some &quot;metaframwork&quot; or other solution - like Nuxt, Astro, VitePress, Vue Storefront - which explicitly position themselves as tools for solving certain (or a wide range of) business tasks.</p><p data-v-ca3d25aa>There is a need for a tool similar to <code data-v-ca3d25aa>create-vue</code>, for scaffolding a ready-to-go web application. On the one hand, a quite workable, adaptive website with the necessary functionality so that a novice developer could familiarize himself with a proven approach to solving the tasks involved. On the other hand, it should be minimalistic enough not to impose unwanted technologies and libraries on an experienced developer and create a skeleton of established best practices for further development of the application.</p><p data-v-ca3d25aa>It is clear that defining one or another &quot;best practice&quot; (fetch or axios?) can be quite controversial, but nevertheless.</p><p data-v-ca3d25aa><img src="`+e+'" alt="image" data-v-ca3d25aa></p>',11),l=[n];function h(p,c,o,r,k,F){return i(),s("div",null,l)}const u=a(d,[["render",h],["__scopeId","data-v-ca3d25aa"]]);export{g as __pageData,u as default};
