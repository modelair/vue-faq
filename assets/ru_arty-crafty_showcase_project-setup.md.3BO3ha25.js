import{_ as a,c as s,o as i,U as t}from"./chunks/framework.P5TqXf0g.js";const e="/assets/project-setup.hs31F5ED.png",y=JSON.parse('{"title":"Создание проекта","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/project-setup.md","filePath":"ru/arty-crafty/showcase/project-setup.md","lastUpdated":1706602377000}'),h={name:"ru/arty-crafty/showcase/project-setup.md"},n=t(`<h1 id="создание-проекта" tabindex="-1" data-v-2e31077b>Создание проекта <a class="header-anchor" href="#создание-проекта" aria-label="Permalink to &quot;Создание проекта&quot;" data-v-2e31077b>​</a></h1><h2 id="репозитории-на-github" tabindex="-1" data-v-2e31077b>Репозиторий на GitHub <a class="header-anchor" href="#репозитории-на-github" aria-label="Permalink to &quot;Репозиторий на GitHub&quot;" data-v-2e31077b>​</a></h2><p data-v-2e31077b>Создаем репозиторий на GitHub, клонируем локально</p><div class="language-sh vp-adaptive-theme" data-v-2e31077b><button title="Copy Code" class="copy" data-v-2e31077b></button><span class="lang" data-v-2e31077b>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-2e31077b><code data-v-2e31077b><span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> https://github.com/vuesence/arty-crafty.git</span></span></code></pre></div><h2 id="vue-webapp" tabindex="-1" data-v-2e31077b>vue-webapp <a class="header-anchor" href="#vue-webapp" aria-label="Permalink to &quot;vue-webapp&quot;" data-v-2e31077b>​</a></h2><p data-v-2e31077b>Используем, естественно, <a href="/ru/vue-webapp/" data-v-2e31077b>vue-webapp</a> для создания скелета проекта со следующими опциями:</p><div class="language-sh vp-adaptive-theme" data-v-2e31077b><button title="Copy Code" class="copy" data-v-2e31077b></button><span class="lang" data-v-2e31077b>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-2e31077b><code data-v-2e31077b><span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> arty-crafty</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> vue-webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> .</span></span>
<span class="line" data-v-2e31077b></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> arty-crafty</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> yes</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2e31077b> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2e31077b>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2e31077b>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2e31077b> ... yes</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> yes</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> no</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Workflow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Pages?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> yes</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> layout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> MainLayout</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> navigation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> drawer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> TouchSlideoutDrawer</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> navbar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> MantineSimpleNavbar</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> MantineSimpleHeader</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> footer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> MantineSimpleFooter</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> light</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> i18n?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> yes</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> API</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2e31077b> (REST)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2e31077b>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2e31077b> ... yes</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> JSON-RPC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> adapter?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> no</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> empty.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> choose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> how</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> proceed:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> Ignore</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> continue</span></span>
<span class="line" data-v-2e31077b></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>Scaffolding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2e31077b> \\V</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b>uesence</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2e31077b>\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b>rty-crafty...</span></span></code></pre></div><p data-v-2e31077b>Запускаем:</p><div class="language-sh vp-adaptive-theme" data-v-2e31077b><button title="Copy Code" class="copy" data-v-2e31077b></button><span class="lang" data-v-2e31077b>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-2e31077b><code data-v-2e31077b><span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> i</span></span>
<span class="line" data-v-2e31077b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2e31077b>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2e31077b> dev</span></span></code></pre></div><p data-v-2e31077b>Работает:</p><p data-v-2e31077b><img src="`+e+'" alt="image" data-v-2e31077b></p><p data-v-2e31077b>Теперь ставим <code data-v-2e31077b>base: &quot;/arty-crafty/&quot;</code> в <code data-v-2e31077b>vite.config.ts</code>. Также надо поставить этот префикс перед путями в инъекциях <code data-v-2e31077b>sw.js</code> и <code data-v-2e31077b>splash-screen.html</code>, и в путях к иконкам в <code data-v-2e31077b>manifest.json</code>. При хостинге со своим доменом нужно будет этот префикс убрать.</p><p data-v-2e31077b>Загружаем все на GitHub.</p><p data-v-2e31077b>Далее настраиваем GitHub Pages и получаем наш сайт по адресу: <a href="https://vuesence.github.io/arty-crafty/" target="_blank" rel="noreferrer" data-v-2e31077b>https://vuesence.github.io/arty-crafty/</a></p><p data-v-2e31077b>Сайт задеплоится сам автоматически из-за того, что у нас есть соответствующий GitHub Actions Workflow файл в проекте. Ветка <code data-v-2e31077b>gh-pages</code> тоже создастся автоматически.</p><p data-v-2e31077b>Теперь закомментируем подключение <code data-v-2e31077b>service-worker.js</code> в файле <code data-v-2e31077b>sw.js</code> - во время разработки кэширование сильно мешает. Включим его уже в продакшне.</p>',16),p=[n];function k(d,l,F,r,b,v){return i(),s("div",null,p)}const C=a(h,[["render",k],["__scopeId","data-v-2e31077b"]]);export{y as __pageData,C as default};
