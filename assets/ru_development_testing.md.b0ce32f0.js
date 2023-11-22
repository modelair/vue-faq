import{_ as e,o as t,c as r,Q as a}from"./chunks/framework.254bf437.js";const u=JSON.parse('{"title":"Тестирование","description":"","frontmatter":{},"headers":[],"relativePath":"ru/development/testing.md","filePath":"ru/development/testing.md","lastUpdated":1700642197000}'),s={name:"ru/development/testing.md"},n=a('<h1 id="тестирование" tabindex="-1">Тестирование <a class="header-anchor" href="#тестирование" aria-label="Permalink to &quot;Тестирование&quot;">​</a></h1><details class="details custom-block"><summary>Нужно ли тестирование на фронтенде?</summary><p>Тесты бывают нескольких типов, среди них - unit тесты и интеграционные (e2e) теcты</p><p>Unit тестированием во Vue занимаются <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, <a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a></p><p>С тестированием на фронте нужно быть аккуратней, так как написание и переписывание тестов зачастую может занять время, сопоставимое с самой разработкой. В то же время, полезность этих тестов будет под большим вопросом. Их целесообразность проявляется на больших проектах с большим количеством разработчиков. Там unit тесты также отнимают время, но снижают вероятность, что кто-то что-то испортит. В то же время на стартапе unit тесты далеко не самый нужный ингридиент для быстрого создания MVP.</p><p>Фронтенд разработка в этом аспекте очень сильно отличается от бэкенд разработки, где unit тесты действительно полезны.</p><p>Хорошая статья на эту тему - <a href="https://250bpm.com/blog:40/" target="_blank" rel="noreferrer">Unit Test Fetish</a></p></details><details class="details custom-block"><summary>Что такое e2e тесты?</summary><p>На фронте, особенно для веб приложения, которое уже в продакшне и должно время от времени обновляться, важны e2e тесты.</p><p>e2e (end-to-end) тестирование — это процесс тестирования программного обеспечения, который имитирует реальные действия пользователей на уровне интерфейса.</p><p>При этом будет запущен браузер (обычно, в headless режиме - без UI), и он по написанным скриптам будет проверять работу сайта - наличие элементов на странице, возможность логина и т.п.</p><p>Основные средства для e2e тестирования - <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">Cypress</a>, <a href="https://webdriver.io/" target="_blank" rel="noreferrer">WebdriverIO</a></p><p>При CI/CD проекта прогон тестов - один из основных моментов наряду с линтингом и билдом.</p></details>',3),o=[n];function p(i,l,d,_,c,m){return t(),r("div",null,o)}const f=e(s,[["render",p]]);export{u as __pageData,f as default};
