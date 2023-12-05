import{_ as a}from"./chunks/use-case.b7dbd9d8.js";import{_ as s,o as t,c as d,Q as n}from"./chunks/framework.46d06b6e.js";const C=JSON.parse('{"title":"Vue 3 webapp билдер","description":"","frontmatter":{},"headers":[],"relativePath":"ru/vue-webapp/README.md","filePath":"ru/vue-webapp/README.md","lastUpdated":1701796483000}'),p={name:"ru/vue-webapp/README.md"},o=n(`<h1 id="vue-3-webapp-билдер" tabindex="-1" data-v-93d0a8ab>Vue 3 webapp билдер <a class="header-anchor" href="#vue-3-webapp-билдер" aria-label="Permalink to &quot;Vue 3 webapp билдер&quot;" data-v-93d0a8ab>​</a></h1><h2 id="краткое-описание" tabindex="-1" data-v-93d0a8ab>Краткое описание. <a class="header-anchor" href="#краткое-описание" aria-label="Permalink to &quot;Краткое описание.&quot;" data-v-93d0a8ab>​</a></h2><p data-v-93d0a8ab>Vue 3 вебсайт билдер позволяет создать каркас будущего веб приложения, с возможностью выбора бизнес-шаблона (портфолио, блог, магазин и .т.д.), макета сайта, дизайна и элементов функционала (API модуль, i18n, PWA, splash screen, auth модуль, темы и т.д.), для дальнейшей кастомизации и наполнения контентом.</p><div class="language-sh vp-adaptive-theme" data-v-93d0a8ab><button title="Copy Code" class="copy" data-v-93d0a8ab></button><span class="lang" data-v-93d0a8ab>sh</span><pre class="shiki github-dark vp-code-dark" data-v-93d0a8ab><code data-v-93d0a8ab><span class="line" data-v-93d0a8ab><span style="color:#B392F0;" data-v-93d0a8ab>$</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>pnpm</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>create</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>vue-webapp</span></span>
<span class="line" data-v-93d0a8ab></span>
<span class="line" data-v-93d0a8ab><span style="color:#B392F0;" data-v-93d0a8ab>✔</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Project</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>name:</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>…</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>my-vue-project</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#B392F0;" data-v-93d0a8ab>✔</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Make</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>it</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>PWA</span><span style="color:#E1E4E8;" data-v-93d0a8ab> ( </span><span style="color:#9ECBFF;" data-v-93d0a8ab>adds</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>service</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>worker</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>and</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>manifest</span><span style="color:#E1E4E8;" data-v-93d0a8ab> )</span><span style="color:#F97583;" data-v-93d0a8ab>?</span><span style="color:#E1E4E8;" data-v-93d0a8ab> … yes</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#B392F0;" data-v-93d0a8ab>✔</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Add</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Github</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Action</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Workflow</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>for</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>publishing</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>it</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>on</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>GitHub</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Pages?</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>…</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>no</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#B392F0;" data-v-93d0a8ab>✔</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Select</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>navigation</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>drawer</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>›</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>TouchSlideoutDrawer</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#B392F0;" data-v-93d0a8ab>✔</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Select</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>webapp</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>footer</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>›</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>RichFooter</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#B392F0;" data-v-93d0a8ab>✔</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>Add</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>&#39;BaseIcon&#39;</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>component?</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>…</span><span style="color:#E1E4E8;" data-v-93d0a8ab> </span><span style="color:#9ECBFF;" data-v-93d0a8ab>yes</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#79B8FF;" data-v-93d0a8ab>...</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-93d0a8ab><code data-v-93d0a8ab><span class="line" data-v-93d0a8ab><span style="color:#6F42C1;" data-v-93d0a8ab>$</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>pnpm</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>create</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>vue-webapp</span></span>
<span class="line" data-v-93d0a8ab></span>
<span class="line" data-v-93d0a8ab><span style="color:#6F42C1;" data-v-93d0a8ab>✔</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Project</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>name:</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>…</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>my-vue-project</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#6F42C1;" data-v-93d0a8ab>✔</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Make</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>it</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>PWA</span><span style="color:#24292E;" data-v-93d0a8ab> ( </span><span style="color:#032F62;" data-v-93d0a8ab>adds</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>service</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>worker</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>and</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>manifest</span><span style="color:#24292E;" data-v-93d0a8ab> )</span><span style="color:#D73A49;" data-v-93d0a8ab>?</span><span style="color:#24292E;" data-v-93d0a8ab> … yes</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#6F42C1;" data-v-93d0a8ab>✔</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Add</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Github</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Action</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Workflow</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>for</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>publishing</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>it</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>on</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>GitHub</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Pages?</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>…</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>no</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#6F42C1;" data-v-93d0a8ab>✔</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Select</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>navigation</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>drawer</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>›</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>TouchSlideoutDrawer</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#6F42C1;" data-v-93d0a8ab>✔</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Select</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>webapp</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>footer</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>›</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>RichFooter</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#6F42C1;" data-v-93d0a8ab>✔</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>Add</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>&#39;BaseIcon&#39;</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>component?</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>…</span><span style="color:#24292E;" data-v-93d0a8ab> </span><span style="color:#032F62;" data-v-93d0a8ab>yes</span></span>
<span class="line" data-v-93d0a8ab><span style="color:#005CC5;" data-v-93d0a8ab>...</span></span></code></pre></div><h2 id="обоснование" tabindex="-1" data-v-93d0a8ab>Обоснование <a class="header-anchor" href="#обоснование" aria-label="Permalink to &quot;Обоснование&quot;" data-v-93d0a8ab>​</a></h2><p data-v-93d0a8ab>Существует довольно много (в основном специфичных и быстро устаревающих) бойлерплейтов для создания Vue приложения. Обычно под этим подразумевается создание пустого проекта с определенными библиотеками. Другими словами, это просто настройка окружения для начала разработки без, непосредственно, кода.</p><p data-v-93d0a8ab>В то же время, у многих других фронтенд и бэкенд фреймворков есть стартер-киты, позволяющие быстро создать готовый блог, онлайн магазин, сайт-визитку, портфолио, документацию и т.п., что значительно помогает как и в изучении самого фреймворка, соответствующих технологий и лучших практик, так и для решения стоящих перед бизнесом задач.</p><p data-v-93d0a8ab>В результате может возникнуть впечатление, что Vue - довольно низкоуровневый фреймворк, и чтобы создавать вебприложения быстро, эффективно и удобно, необходимо взять какую-либо надстройку или иное решение - Nuxt, Vue Storefront, Astro, VitePress - которые прямо позиционируют себя как средство для решения определенных (или широкого круга) бизнес задач.</p><p data-v-93d0a8ab>Появилась идея для создания инструмента, аналогичного <code data-v-93d0a8ab>create-vue</code>, создающего каркас готового к работе веб приложения. С одной стороны, вполне работоспособного, адаптивного вебсайта с необходимым функционалом, чтобы начинающий разработчик мог ознакомиться с проверенным подходом в решении встающих при этом задач. С другой, достаточно минималистичным, не навязывающим опытному разработчику нежелаемые им зависимости, и создающим скелет из устоявшихся лучших практик для дальнейшего развития приложения.</p><p data-v-93d0a8ab>Понятно, что определение той или иной &quot;лучшей практики&quot; (fetch или axios?) может быть довольно спорным моментом и зависит от контекста, но тем не менее.</p><p data-v-93d0a8ab><img src="`+a+'" alt="" data-v-93d0a8ab></p>',11),l=[o];function e(c,r,b,v,E,y){return t(),d("div",null,l)}const B=s(p,[["render",e],["__scopeId","data-v-93d0a8ab"]]);export{C as __pageData,B as default};
