import{_ as e,o as s,c as a,Q as t}from"./chunks/framework.477046d0.js";const m=JSON.parse('{"title":"CORS","description":"","frontmatter":{},"headers":[],"relativePath":"backend/cors.md","filePath":"backend/cors.md"}'),l={name:"backend/cors.md"},r=t(`<h1 id="cors" tabindex="-1">CORS <a class="header-anchor" href="#cors" aria-label="Permalink to &quot;CORS&quot;">​</a></h1><details class="details custom-block"><summary>Что такое CORS?</summary><p>Грубо говоря, CORS служит для защиты вашего бэкенда от запросов к нему со стороны путем установки специальных HTTP заголовков.</p><p>Более точно, CORS (Cross-Origin Resource Sharing, англ.  «совместное использование ресурсов разных источников») — это стандарт, позволяющий предоставлять веб-страницам доступ к объектам сторонних интернет-ресурсов. Сторонним считается любой интернет-ресурс, который отличается от запрашиваемого протоколом, доменом или портом.</p><p>Доступ предоставляется по специализированным запросам. Интернет-ресурс, принимающий запрос, содержит список доверенных источников, которым разрешен доступ к объектам. Страница-источник запроса получает доступ, если входит в список доверенных источников. Для предоставления доступа всем сторонним интернет-страницам используется маска «*».</p><p>Соответственно, делать всё это может только бэкенд, и настраивается это на нем. Конкретное решение зависит от языка бэкенда, используемого фреймворка и даже вебсервера.</p></details><details class="details custom-block"><summary>Принцип работы CORS</summary><p>При создании перекрестного HTTP-запроса браузер клиента добавляет в него объявление домена веб-страницы, инициирующей запрос. Домен объявляется в разделе Origin.</p><p>Например, страница <a href="https://client-1.ru/page.html" target="_blank" rel="noreferrer">https://client-1.ru/page.html</a> запрашивает данные со страницы <a href="https://server-site.ru/info" target="_blank" rel="noreferrer">https://server-site.ru/info</a>. Пример запроса от браузера клиента, использующего методы CORS, приведен ниже:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET /info HTTP/1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Host: server-site.ru</span></span>
<span class="line"><span style="color:#e1e4e8;">Origin: client-1.ru</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET /info HTTP/1.1</span></span>
<span class="line"><span style="color:#24292e;">Host: server-site.ru</span></span>
<span class="line"><span style="color:#24292e;">Origin: client-1.ru</span></span></code></pre></div><p>В случае, если сервер по адресу www.server-site.ru разрешает странице-источнику запроса доступ к данным с домена, в его ответе на запрос появится строка <code>Access-Control-Allow-Origin</code> с именем объявленного домена:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Access-Control-Allow-Origin: https://client-1.ru</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Access-Control-Allow-Origin: https://client-1.ru</span></span></code></pre></div><p>Если сервер, на который запрошен доступ, не добавит в ответ указанную строку, браузер клиента вместо данных файла info вернет код ошибки.</p><p>Если на сервере разрешен доступ к ресурсу страницам любого стороннего домена, в ответе будет указана маска «*».</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Access-Control-Allow-Origin: *</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Access-Control-Allow-Origin: *</span></span></code></pre></div><p>Если на сервере разрешен доступ не всем, а нескольким сторонним клиентам, ответ сервера содержит имена всех этих доменов, выведенных отдельными строками или разделенных пробелами:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Access-Control-Allow-Origin: https://client-1.ru https://client-2.ru https://client-3.ru</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Access-Control-Allow-Origin: https://client-1.ru https://client-2.ru https://client-3.ru</span></span></code></pre></div><p>В стандарте CORS много нюансов. Вот более подробная <a href="https://habr.com/ru/companies/macloud/articles/553826/" target="_blank" rel="noreferrer">статья по теме CORS</a></p></details><details class="details custom-block"><summary>Проблемы с CORS</summary><p>CORS проблемы могут возникнуть только когда к ресурсу обращается браузер, а не отдельная программа типа Postman или другой бэкенд.</p><p>Как временное решение при разработке могут помочь <a href="https://www.google.com/search?q=CORS+proxy" target="_blank" rel="noreferrer">CORS proxy</a>, которые становятся посредником между фронтендом и бэкендом, или <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf" target="_blank" rel="noreferrer">расширения браузера</a>.</p></details>`,4),n=[r];function o(c,p,i,d,h,u){return s(),a("div",null,n)}const b=e(l,[["render",o]]);export{m as __pageData,b as default};
