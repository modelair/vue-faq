import{_ as e,o as t,c as i,Q as a}from"./chunks/framework.254bf437.js";const g=JSON.parse('{"title":"Принципы","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.jpg"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.jpg"}]]},"headers":[],"relativePath":"vue-webapp/guidelines.md","filePath":"vue-webapp/guidelines.md"}'),o={name:"vue-webapp/guidelines.md"},l=a('<h1 id="принципы" tabindex="-1">Принципы <a class="header-anchor" href="#принципы" aria-label="Permalink to &quot;Принципы&quot;">​</a></h1><ul><li>Лёгкое эффективное вебприложение с высоким современным UI/UX</li><li>Vue 3, Composition API, script setup синтаксис</li><li>Не использовать сторонние библиотеки без необходимости. Единственная обязательная зависимость - <code>vue-router</code></li><li>Использование чистого и эффективного HTML5 и CSS3 для верстки</li><li>Подключение требуемого функционала только по необходимости</li><li>Высокая кастомизация</li></ul><hr><ul><li><p>Подключение определенной функциональности, например i18n, означает не просто добавление этой библиотеки в <code>package.json</code>, а полноценную минимальную работающую интеграцию - создание соответствующей composable функции, нескольких локалей, и применение t() в шаблоне для иллюстрации с необходимыми комментариями в коде для облегчения последующего использования и кастомизации.</p></li><li><p>Подключение определенной функциональности, использующей стороннюю библиотеку (например, тостер или модальное окно), делается через обёртку, чтобы потом разработчику при желании было легко поменять конкретный пакет, реализующий данный функционал.</p></li><li><p>Для каркаса используется <strong>TypeScript</strong>, однако продолжать писать приложение можно на чистом JavaScript.</p></li><li><p>В качестве CSS препроцессора используется SCSS.</p></li><li><p>Для линтинга и форматирования в ESlint используется <a href="https://github.com/antfu/eslint-config" target="_blank" rel="noreferrer">eslint-config</a> Antony Fu.</p></li></ul>',4),n=[l];function p(r,s,c,_,u,d){return t(),i("div",null,n)}const h=e(o,[["render",p]]);export{g as __pageData,h as default};
