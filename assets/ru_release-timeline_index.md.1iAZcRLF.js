import{_ as e,c as a,o as t,U as i}from"./chunks/framework.P5TqXf0g.js";const r="/assets/rt.rY4-FYSA.jpg",g=JSON.parse('{"title":"Release Timeline","description":"","frontmatter":{"pageClass":"release-timeline","head":[["meta",{"name":"og:site_name","content":"Release timeline - visual component displaying GitHub release timeline"}],["meta",{"name":"og:image","content":"/images/vue-faq-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-faq-logo.png"}]]},"headers":[],"relativePath":"ru/release-timeline/index.md","filePath":"ru/release-timeline/index.md","lastUpdated":1706866884000}'),n={name:"ru/release-timeline/index.md"},l=i('<h1 id="release-timeline" tabindex="-1">Release Timeline <a class="header-anchor" href="#release-timeline" aria-label="Permalink to &quot;Release Timeline&quot;">​</a></h1><h2 id="визуализация-релизов" tabindex="-1">Визуализация релизов <a class="header-anchor" href="#визуализация-релизов" aria-label="Permalink to &quot;Визуализация релизов&quot;">​</a></h2><p>Визуализация релизов любого GitHub репозитория по временной шкале, с информацией о коммитах и пул риквестах.</p><p>Встраивается в VitePress, может быть хорошей заменой <code>changelog</code>-а в технической документации проекта, автоматизируя фиксацию изменений и делая слежение за ними удобным для пользователей.</p><p><img src="'+r+'" alt="image"></p><p>Библиотека написана с использованием Vue 3, не имеет зависимостей, занимает 15Кб в распакованном виде. Адаптирована для работы в VitePress (переключение светлой и темной тем). Может подключаться как <code>web component</code> в не Vue проектах.</p><p>Данные по релизам определенного репозитория берутся через GitHub REST API.</p><p>Public репозитории доступны сразу, для private репозиториев требуется использовать GitHub API токен.</p><h2 id="ссылки" tabindex="-1">Ссылки <a class="header-anchor" href="#ссылки" aria-label="Permalink to &quot;Ссылки&quot;">​</a></h2><ul><li><p><a href="https://github.com/vuesence/release-timeline" target="_blank" rel="noreferrer">GitHub</a></p></li><li><p><a href="https://vuesence.github.io/release-timeline/" target="_blank" rel="noreferrer">Demo</a> (можно задать любой репозиторий через выбор в верхнем левои углу)</p></li><li><p><a href="https://unpkg.com/release-timeline/dist/wc-demo.html" target="_blank" rel="noreferrer">Web component demo</a></p></li></ul>',10),o=[l];function s(m,c,p,d,_,h){return t(),a("div",null,o)}const b=e(n,[["render",s]]);export{g as __pageData,b as default};
