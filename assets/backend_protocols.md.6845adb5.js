import{_ as e,o as t,c as r,X as a}from"./chunks/framework.049a4bb5.js";const h=JSON.parse('{"title":"Протоколы. To REST или не REST?","description":"","frontmatter":{},"headers":[],"relativePath":"backend/protocols.md","filePath":"backend/protocols.md"}'),o={name:"backend/protocols.md"},s=a('<h1 id="протоколы-to-rest-или-не-rest" tabindex="-1">Протоколы. To REST или не REST? <a class="header-anchor" href="#протоколы-to-rest-или-не-rest" aria-label="Permalink to &quot;Протоколы. To REST или не REST?&quot;">​</a></h1><details class="details custom-block"><summary>REST, WebSockets, JSON-RPC</summary><p>Для новичка, конечно, удобнее начинать с <code>REST</code> - запросы на сервер абы как.</p><p>Для более опытных, особенно фулстеков, предлагаю взглянуть на <code>JSON-RPC</code> - после этого общение с бэком уже никогда не будет прежним.</p><p>Вот две мои статьи на эту тему - <a href="https://habr.com/ru/articles/709362/" target="_blank" rel="noreferrer">Популяризация JSON-RPC (часть 1)</a> и <a href="https://habr.com/ru/articles/710652/" target="_blank" rel="noreferrer">Популяризация JSON-RPC (часть 2)</a></p><p>Вариант TypeScript реализации фронтэнд api сервиса на JSON-RPC - <a href="https://github.com/vuesence/utilities/blob/main/src/services/json-rpc/jsonrpc.ts" target="_blank" rel="noreferrer">здесь</a></p><p>При использовании <code>JSON-RPC</code> переход на <code>WebSockets</code> или другие транспортные протоколы не вызовет никаких трудностей из-за унификации формата сообщений.</p><p><code>WebSockets</code> удобен, но требует специального сервера на бэкенде.</p></details><details class="details custom-block"><summary>Как организовать реконнект WebSocket соединения на фронте?</summary><p>Нужна шина, или <code>Еvent bus</code>, которая будет работать как прокси для приходящих сообщений.</p><p>Можно использовать <a href="https://github.com/developit/mitt" target="_blank" rel="noreferrer">mitt</a>.</p></details><details class="details custom-block"><summary>Что такое GraphGQ?</summary><p>Сложная штука, попытка перевести язык запросов SQL для клиент-серверных запросов в интернете.</p><p>Имеет довольно специфичное применение, преимущественно у сторонних поставщиков данных через API.</p><p>Для своего фулстек приложения - на 99% не нужное решение.</p></details>',4),c=[s];function p(l,d,i,n,m,_){return t(),r("div",null,c)}const b=e(o,[["render",p]]);export{h as __pageData,b as default};
