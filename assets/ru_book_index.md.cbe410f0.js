import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.46d06b6e.js";const o="/assets/book-face.41e33e05.jpg",g=JSON.parse('{"title":"Vue.js 3 - Шаблоны проектирования и лучшие практики","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue.js 3 - Шаблоны проектирования и лучшие практики"}],["meta",{"name":"og:image","content":"/images/book-face.jpg"}],["meta",{"name":"twitter:image","content":"/images/book-face.jpg"}]]},"headers":[],"relativePath":"ru/book/index.md","filePath":"ru/book/index.md","lastUpdated":1701181141000}'),i={name:"ru/book/index.md"},s=r('<h1 id="vue-js-3-шаблоны-проектирования-и-лучшие-практики" tabindex="-1">Vue.js 3 - Шаблоны проектирования и лучшие практики <a class="header-anchor" href="#vue-js-3-шаблоны-проектирования-и-лучшие-практики" aria-label="Permalink to &quot;Vue.js 3 - Шаблоны проектирования и лучшие практики&quot;">​</a></h1><p>Автор: Pablo Garaguso</p><p><img src="'+o+'" alt=""></p><h2 id="предисловие" tabindex="-1">Предисловие <a class="header-anchor" href="#предисловие" aria-label="Permalink to &quot;Предисловие&quot;">​</a></h2><p>Vue 3 - это последняя и наиболее производительная версия &quot;прогрессивного фреймворка&quot; для создания реактивных и отзывчивых пользовательских интерфейсов. Сам фреймворк представляет новые концепции и подходы к проектированию паттерны, которые могут быть необычными для других библиотек и фреймворков. Изучение основ фреймворка и понимание принципов проектирования и паттернов из области программной инженерии, поможет вам определить компромиссы каждого подхода и построить надежные приложения.</p><p>Книга начинается с базовых концепций, а затем с помощью примеров и сценариев кодирования ведет постепенно к построению более сложных архитектур. Вы начнете с простой страницы и закончите многопоточным приложением, автономным и устанавливаемым <strong>Progressive Web Application</strong> (<strong>PWA</strong>). Также рассматривается использование новых инструментов тестирования, доступных для Vue 3.</p><p>Помимо демонстрации того, как все делается, эта книга поможет вам научиться как &quot;думать&quot; и &quot;подходить&quot; к решению общих проблем, которые уже нашли свое решение в паттернах проектирования. Это позволит вам сэкономить время и сделать ваше программное обеспечение более приспособленным к будущим изменениям.</p><h2 id="для-кого-эта-книга" tabindex="-1">Для кого эта книга <a class="header-anchor" href="#для-кого-эта-книга" aria-label="Permalink to &quot;Для кого эта книга&quot;">​</a></h2><p>Эта книга предназначена для разработчиков Vue, которые заботятся о принципах проектирования фреймворка Vue и использовании часто встречающихся паттернов проектирования при разработке веб-приложений. Вы узнаете, как использовать и настраивать новый бандлер (Vite), Pinia (управление состоянием), Router 4, web workers и другие технологии для создания производительных и надежных приложений.Предварительное знание JavaScirpt и базовые знания Vue будут полезны.</p><h2 id="чтобы-получить-максимальную-пользу-от-этои-книги" tabindex="-1">Чтобы получить максимальную пользу от этой книги <a class="header-anchor" href="#чтобы-получить-максимальную-пользу-от-этои-книги" aria-label="Permalink to &quot;Чтобы получить максимальную пользу от этой книги&quot;">​</a></h2><p>Эта книга предполагает, что вы знакомы с веб-технологиями, такими как JavaScript, HTML и технологиями, такими как JavaScript, HTML и CSS. Разработчики, заинтересованные в расширении своего понимания паттернов проектирования и архитектуры получат максимальную пользу от этой книги. Студенты и новички в мире веб-приложений, могут также следовать этой книге, уделяя пристальное внимание примерам кода и используя предоставленные проекты.</p><table><thead><tr><th><strong>Программное/аппаратное обеспечение, рассматриваемое в книге</strong></th><th><strong>Требования к операционной системе</strong></th></tr></thead><tbody><tr><td>Official Vue 3 ecosystem: <br> <br> • Vue 3 framework <br> • Pinia <br> • Vue Router <br> • Vite <br> • Vitest <br> • Vue Testing Tools</td><td>Windows, macOS, or Linux</td></tr><tr><td>Node.js (any version + v16 LTS)</td><td>Windows, macOS, or Linux</td></tr><tr><td>Web servers: NGINX, Apache</td><td>Windows or Linux</td></tr><tr><td>Visual Studio Code</td><td>Windows, macOS, or Linux</td></tr><tr><td>Chrome browser</td><td>Windows, macOS, or Linux</td></tr></tbody></table><p>Особых требований к аппаратному обеспечению современных компьютеров нет, но рекомендуется иметь, по крайней мере, следующее:</p><ul><li>Intel или AMD CPU на как минимум 1 GHz</li><li>4 GB RAM (больше - лучше)</li><li>Как минимум 10 GB места на диске (для программ и кода)</li></ul><p>Как правило, если на вашем компьютере может работать современный веб-браузер (Chrome/Chromium, Mozilla Firefox или Microsoft Edge), то он должен отвечать всем требованиям для установки и запуска всех инструментов разработчика, упомянутых в этой книге.</p><h2 id="купить-книгу" tabindex="-1">Купить книгу <a class="header-anchor" href="#купить-книгу" aria-label="Permalink to &quot;Купить книгу&quot;">​</a></h2><p>Книга доступна для покупки на сайте <a href="https://www.oreilly.com/library/view/vuejs-3-design/9781803238074/" target="_blank" rel="noreferrer">O&#39;Reilly</a></p><h2 id="скачать-фаилы-кода-примеров" tabindex="-1">Скачать файлы кода примеров <a class="header-anchor" href="#скачать-фаилы-кода-примеров" aria-label="Permalink to &quot;Скачать файлы кода примеров&quot;">​</a></h2><p>Файлы кода примеров этой книги можно загрузить с GitHub по адресу <a href="https://github.com/PacktPublishing/Vue.js-3-Design-Patterns-and-Best-Practices" target="_blank" rel="noreferrer">https://github.com/PacktPublishing/Vue.js-3-Design-Patterns-and-Best-Practices</a>.</p><h2 id="код-в-деиствии" tabindex="-1">Код в действии <a class="header-anchor" href="#код-в-деиствии" aria-label="Permalink to &quot;Код в действии&quot;">​</a></h2><p>Видеоролики <em>Программирование в действии</em> для этой книги можно посмотреть на сайте <a href="https://packt.link/FtCMS" target="_blank" rel="noreferrer">https://packt.link/FtCMS</a>.</p><hr><p><br><br></p><p><em>Я выражаю Вам признательность за преданность этой дисциплине и благодарю за прочтение этой книги. Желаю Вам благополучия и блестящих успехов в дальнейших начинаниях и профессиональной карьере.</em></p><p><em>Искренне,</em></p><p><em>Пабло Давид Гарагусо</em></p><p><a href="http://www.pdgaraguso.com/" target="_blank" rel="noreferrer">www.pdgaraguso.com</a></p>',27),n=[s];function d(l,h,c,p,u,m){return t(),a("div",null,n)}const _=e(i,[["render",d]]);export{g as __pageData,_ as default};
