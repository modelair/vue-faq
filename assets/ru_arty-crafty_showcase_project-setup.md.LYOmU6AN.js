import{_ as a,c as s,o as i,U as t}from"./chunks/framework.OCnj_VtR.js";const d="/assets/project-setup.hs31F5ED.png",y=JSON.parse('{"title":"Создание проекта","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty project"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/project-setup.md","filePath":"ru/arty-crafty/showcase/project-setup.md","lastUpdated":1704654181000}'),h={name:"ru/arty-crafty/showcase/project-setup.md"},n=t(`<h1 id="создание-проекта" tabindex="-1" data-v-132fdf19>Создание проекта <a class="header-anchor" href="#создание-проекта" aria-label="Permalink to &quot;Создание проекта&quot;" data-v-132fdf19>​</a></h1><h2 id="репозитории-на-github" tabindex="-1" data-v-132fdf19>Репозиторий на GitHub <a class="header-anchor" href="#репозитории-на-github" aria-label="Permalink to &quot;Репозиторий на GitHub&quot;" data-v-132fdf19>​</a></h2><p data-v-132fdf19>Создаем репозиторий на GitHub, клонируем локально</p><div class="language-sh vp-adaptive-theme" data-v-132fdf19><button title="Copy Code" class="copy" data-v-132fdf19></button><span class="lang" data-v-132fdf19>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-132fdf19><code data-v-132fdf19><span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> https://github.com/vuesence/arty-crafty.git</span></span></code></pre></div><h2 id="vue-webapp" tabindex="-1" data-v-132fdf19>vue-webapp <a class="header-anchor" href="#vue-webapp" aria-label="Permalink to &quot;vue-webapp&quot;" data-v-132fdf19>​</a></h2><p data-v-132fdf19>Используем, естественно, <a href="/ru/vue-webapp/" data-v-132fdf19>vue-webapp</a> для создания скелета проекта со следующими опциями:</p><div class="language-sh vp-adaptive-theme" data-v-132fdf19><button title="Copy Code" class="copy" data-v-132fdf19></button><span class="lang" data-v-132fdf19>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-132fdf19><code data-v-132fdf19><span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> arty-crafty</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> vue-webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> .</span></span>
<span class="line" data-v-132fdf19></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> arty-crafty</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> yes</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-132fdf19> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-132fdf19>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-132fdf19>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-132fdf19> ... yes</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> yes</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> no</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Workflow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Pages?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> yes</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> layout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> MainLayout</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> navigation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> drawer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> TouchSlideoutDrawer</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> navbar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> MantineSimpleNavbar</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> MantineSimpleHeader</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> footer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> MantineSimpleFooter</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> light</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> i18n?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> yes</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> API</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-132fdf19> (REST)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-132fdf19>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-132fdf19> ... yes</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> JSON-RPC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> adapter?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> no</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> empty.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> choose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> how</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> proceed:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> Ignore</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> continue</span></span>
<span class="line" data-v-132fdf19></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>Scaffolding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-132fdf19> \\V</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19>uesence</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-132fdf19>\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19>rty-crafty...</span></span></code></pre></div><p data-v-132fdf19>Запускаем:</p><div class="language-sh vp-adaptive-theme" data-v-132fdf19><button title="Copy Code" class="copy" data-v-132fdf19></button><span class="lang" data-v-132fdf19>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-132fdf19><code data-v-132fdf19><span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> i</span></span>
<span class="line" data-v-132fdf19><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-132fdf19>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-132fdf19> dev</span></span></code></pre></div><p data-v-132fdf19>Работает:</p><p data-v-132fdf19><img src="`+d+'" alt="" data-v-132fdf19></p><p data-v-132fdf19>Теперь ставим <code data-v-132fdf19>base: &quot;/arty-crafty/&quot;</code> в <code data-v-132fdf19>vite.config.ts</code>. Также надо поставить этот префикс перед путями в инъекциях <code data-v-132fdf19>sw.js</code> и <code data-v-132fdf19>splash-screen.html</code>, и в путях к иконкам в <code data-v-132fdf19>manifest.json</code>. При хостинге со своим доменом нужно будет этот префикс убрать.</p><p data-v-132fdf19>Загружаем все на GitHub.</p><p data-v-132fdf19>Далее настраиваем GitHub Pages и получаем наш сайт по адресу: <a href="https://vuesence.github.io/arty-crafty/" target="_blank" rel="noreferrer" data-v-132fdf19>https://vuesence.github.io/arty-crafty/</a></p><p data-v-132fdf19>Сайт задеплоится сам автоматически из-за того, что у нас есть соответствующий GitHub Actions Workflow файл в проекте. Ветка <code data-v-132fdf19>gh-pages</code> тоже создастся автоматически.</p><p data-v-132fdf19>Теперь закомментируем подключение <code data-v-132fdf19>service-worker.js</code> в файле <code data-v-132fdf19>sw.js</code> - во время разработки кэширование сильно мешает. Включим его уже в продакшне.</p>',16),f=[n];function p(k,e,l,F,r,v){return i(),s("div",null,f)}const C=a(h,[["render",p],["__scopeId","data-v-132fdf19"]]);export{y as __pageData,C as default};
