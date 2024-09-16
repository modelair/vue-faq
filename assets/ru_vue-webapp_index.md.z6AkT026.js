import{_ as a,o as s,c as i,a4 as t,ae as e}from"./chunks/framework.B8KxSsRZ.js";const o=JSON.parse('{"title":"Vue 3 webapp билдер","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp builder"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/index.md","filePath":"ru/vue-webapp/index.md","lastUpdated":1726474804000}'),n={name:"ru/vue-webapp/index.md"},h=t(`<h1 id="vue-3-webapp-билдер" tabindex="-1" data-v-a7c19219>Vue 3 webapp билдер <a class="header-anchor" href="#vue-3-webapp-билдер" aria-label="Permalink to &quot;Vue 3 webapp билдер&quot;" data-v-a7c19219>​</a></h1><h2 id="краткое-описание" tabindex="-1" data-v-a7c19219>Краткое описание <a class="header-anchor" href="#краткое-описание" aria-label="Permalink to &quot;Краткое описание&quot;" data-v-a7c19219>​</a></h2><p data-v-a7c19219>Vue 3 вебсайт билдер (<a href="https://github.com/vuesence/vue-webapp" target="_blank" rel="noreferrer" data-v-a7c19219>GitHub</a>) позволяет создать каркас будущего веб приложения, с возможностью выбора бизнес-шаблона (портфолио, блог, магазин и .т.д.), макета сайта, дизайна и элементов функционала (API модуль, i18n, PWA, splash screen, auth модуль, темы и т.д.), для дальнейшей кастомизации и наполнения контентом.</p><div class="language-sh vp-adaptive-theme" data-v-a7c19219><button title="Copy Code" class="copy" data-v-a7c19219></button><span class="lang" data-v-a7c19219>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-a7c19219><code data-v-a7c19219><span class="line" data-v-a7c19219><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a7c19219>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> vue-webapp</span></span>
<span class="line" data-v-a7c19219></span>
<span class="line" data-v-a7c19219><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a7c19219>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> my-vue-project</span></span>
<span class="line" data-v-a7c19219><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a7c19219>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> yes</span></span>
<span class="line" data-v-a7c19219><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a7c19219>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a7c19219> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a7c19219>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a7c19219>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a7c19219> ... no / yes</span></span>
<span class="line" data-v-a7c19219><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a7c19219>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> yes</span></span>
<span class="line" data-v-a7c19219><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a7c19219>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a7c19219> yes</span></span>
<span class="line" data-v-a7c19219><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a7c19219>...</span></span></code></pre></div><h2 id="обоснование" tabindex="-1" data-v-a7c19219>Обоснование <a class="header-anchor" href="#обоснование" aria-label="Permalink to &quot;Обоснование&quot;" data-v-a7c19219>​</a></h2><p data-v-a7c19219>Существует довольно много (в основном специфичных и быстро устаревающих) бойлерплейтов для создания Vue приложения. Обычно под этим подразумевается создание пустого проекта с определенными библиотеками. Другими словами, это просто настройка окружения для начала разработки без, непосредственно, кода.</p><p data-v-a7c19219>В то же время, у многих других фронтенд и бэкенд фреймворков есть стартер-киты, позволяющие быстро создать готовый блог, онлайн магазин, сайт-визитку, портфолио, документацию и т.п., что значительно помогает как и в изучении самого фреймворка, соответствующих технологий и лучших практик, так и для решения стоящих перед бизнесом задач.</p><p data-v-a7c19219>В результате может возникнуть впечатление, что Vue - довольно низкоуровневый фреймворк, и чтобы создавать вебприложения быстро, эффективно и удобно, необходимо взять какую-либо надстройку или иное решение - Nuxt, Vue Storefront, Astro, VitePress - которые прямо позиционируют себя как средство для решения определенных (или широкого круга) бизнес задач.</p><p data-v-a7c19219>Появилась идея для создания инструмента, аналогичного <code data-v-a7c19219>create-vue</code>, создающего каркас готового к работе веб приложения. С одной стороны, вполне работоспособного, адаптивного вебсайта с необходимым функционалом, чтобы начинающий разработчик мог ознакомиться с проверенным подходом в решении встающих при этом задач. С другой, достаточно минималистичным, не навязывающим опытному разработчику нежелаемые им зависимости, и создающим скелет из устоявшихся лучших практик для дальнейшего развития приложения.</p><p data-v-a7c19219>Понятно, что определение той или иной &quot;лучшей практики&quot; (fetch или axios?) может быть довольно спорным моментом и зависит от контекста, но тем не менее.</p><p data-v-a7c19219><img src="`+e+'" alt="image" data-v-a7c19219></p>',11),p=[h];function d(k,l,c,F,r,v){return s(),i("div",null,p)}const y=a(n,[["render",d],["__scopeId","data-v-a7c19219"]]);export{o as __pageData,y as default};
