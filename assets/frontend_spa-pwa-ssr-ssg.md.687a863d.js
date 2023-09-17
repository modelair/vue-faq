import{_ as e,a}from"./chunks/dynamic-rendering.55387a76.js";import{_ as s,o as r,c as t,Q as o}from"./chunks/framework.477046d0.js";const h=JSON.parse('{"title":"SPA, PWA, SSG, SSR и CEO","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/spa-pwa-ssr-ssg.md","filePath":"frontend/spa-pwa-ssr-ssg.md"}'),p={name:"frontend/spa-pwa-ssr-ssg.md"},l=o('<h1 id="spa-pwa-ssg-ssr-и-ceo" tabindex="-1">SPA, PWA, SSG, SSR и CEO <a class="header-anchor" href="#spa-pwa-ssg-ssr-и-ceo" aria-label="Permalink to &quot;SPA, PWA, SSG, SSR и CEO&quot;">​</a></h1><details class="details custom-block"><summary>Web 1.0 -&gt; Web 2.0</summary><p>Сперва был статичный HTML и браузеры показывали его. Чуть позже придумали немножко JavaScript-а, чтобы обрабатывать формочки и делать небольшую анимацию. Потом появился CSS, и все увидели, что это красиво. После кто-то предложил идею JSON для формата данных, а затем Микрософт подарила миру XMLHttpRequest, и JavaScript-у разрешили отправлять и получать данные с сервера.</p><p>Так родился SPA.</p></details><details class="details custom-block"><summary>SPA</summary><p>SPA (Single Page Application) работает примерно как обычное десктоп/мобильное приложение - при первом обращении на сервер получает програмную оболочку, необходимую для отображения сайта, а затем уже пересылает на/с сервера данные, обычно в JSON формате. Так получается намного эффективней способа, когда с каждым запросом с сервера приходила новая HTML страница с всеми ресурсами.</p><p>Для пользователя UX повышается значительно.</p><p><img src="'+e+'" alt="spa-vs-mpa"></p></details><details class="details custom-block"><summary>PWA</summary><p>PWA (Progressive Web Application) - еще один шаг, чтобы улучшить пользовательский опыт и максимально приблизить веб приложения по ощущениям пользователя к нативным.</p><p>При PWA к SPA добавляются два элемента:</p><ol><li><p><code>Манифест</code>. Текстовый файл со свойствами приложения. Благодаря ему иконка веб-приложения может быть установлена также как и у нативных приложений на домашний экран смартфона. Кроме того, при запуске PWA может не показывать элементы браузера и казаться обычным приложением.</p></li><li><p><code>Service worker</code>. Это прослойка в браузере между сервером и самим браузером, которая позволяет сделать управляемое кэширование. Другими словами, сохранить приложение со всеми ресурсами на смартфоне/компьютере, чтобы при запуске оно сразу запускалось. Если не нужны данные с сервера, то приложение может работать оффлайн (например, Заметки).</p></li></ol><p>Больше о PWA можно прочесть на сайте, созданном командой Chrome - <a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noreferrer">https://web.dev/</a></p><p>Апгрейд SPA до PWA очень небольшой по трудозатратам, но очень значительный по выгоде. Разрабатывать SPA и не делать его PWA - это как снять люксовый номер в гостинице, но лечь спать на его входе в коридоре на коврике, потому что до спальни лень дойти.</p></details><details class="details custom-block"><summary>PWA -&gt; Workbox и vite-plugin-pwa</summary><p><code>Манифест</code> и <code>Service worker</code> настолько просты, что создание обертки над SW - <code>Workbox</code>, и плагина для Vite <code>vite-plugin-pwa</code> логическому объяснению не поддается. Кода получается в несколько раз больше, нужно грузить дополнительные зависимости и разбираться в конфигурациях оберток. Простое сделали сложным.</p><p>Лучше задействовать <code>Манифест</code> и <code>Service worker</code> как они созданы изначально, и написать два этих простых файла по шаблонам из спецификаций.</p></details><details class="details custom-block"><summary>SSG</summary><p>SSG (Static Site Generation) — подход, когда содержимое сайта предварительно генерируется в html-файлы, которые потом раздаются с сервера.</p><p>Сразу подходит для индексации поисковиками.</p></details><details class="details custom-block"><summary>SSR</summary><p>SSR (Server Side Rendering), способ генерации html на стороне сервера, когда генерация происходит в момент обращения. После запроса клиентом странички, сервер на своей стороне выполняет API-запросы, а затем формирует html-страницу. Соответственно, на сервере нужен Node.js сервер, который довольно сильно нагружает &quot;железо&quot;.</p><p>Кроме того, есть множество ограничений при написании кода и использования тех или иных JavaScript и Vue возможностей. Как <a href="https://web.dev/rendering-on-the-web/" target="_blank" rel="noreferrer">пишет Google</a> относительно SSR - <em>&quot;A rehydration problem: one app for the price of two&quot;</em>.</p></details><details class="details custom-block"><summary>CEO оптимизация</summary><p>Для того, чтобы поисковик мог проиндексировать страницу вашего сайта, при обращении к ней он должен получить HTML с контентом (текст, картинки, видео). Со SPA сайтами, в которых контент подгружается динамически JavaScript-ом, такое часто не получается.</p><p>Самым популярным и неэффективным методом для обхода этого является использование SSR (SSG подходит для несложных по структуре сайтов без бэкенда, вроде документаций).</p><p>Google позволяет <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noreferrer">посмотреть</a>, как ваш сайт выглядит/индексируется его кроулером, который как-то всё-таки работает со скриптами, поэтому для начала проверьте, нужно ли вам усложняться вообще.</p><p>Если проблемы обнаружились, то можно воспользоваться <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering" target="_blank" rel="noreferrer">динамической отрисовкой</a></p><p><img src="'+a+'" alt="dynamic-rendering"></p><p>Смысл в том, чтобы обрабатывать запросы обычных пользователей и поисковых ботов по-разному и отдавать им разные страницы. Для пользователей - SPA, для поисковиков - сгенеренные налету либо заранее страницы. Распределение может вести вебсервер или точка входа на ваш сайт (<code>index.php</code> вместо <code>index.html</code>).</p><p>На картинке выше подразумевается некий Prerenderer (которые тоже есть в качестве стороннего сервиса или своего решения), однако в большинстве случаев намного проще генерить HTML страницу для бота напрямую.</p><p>То есть, например, для страницы товара в онлайн магазине это может быть его текстовое описание с картинками и отзывами покупателей в любом HTML форматировании. Для этого достаточно скрипта на PHP/Express/Python и т.д. в 100-200 строк, что намного менее трудозатратней SSR решений, а так же снижает требования в серверному &quot;железу&quot; на порядки (вывод можно закэшировать в статичный HTML файл).</p><p>При совпадении фактического контента (текст, картинки) такой страницы с контентом SPA в браузере, Google не рассматривает упрощенную для его бота версию как обман. Данная метода была еще до появления всяких SSR. Проверено многолетним использованием.</p></details><details class="details custom-block"><summary>PageSpeed и другие тесты производительности</summary><p><a href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer">PageSpeed</a> и подобные инструменты очень полезны в выявлении неоптимизированных мест в вашем веб-приложении, однако для SPA и PWA он не совсем верен.</p><p>Точней, некоторые его метрики не учитывают UX в целом. Нормально сделанный PWA при самой первой загрузке и установке, конечно, проиграет по FCP метрике аналогу на SSR, но после размещения всех своих ресурсов локально на браузере клиента, никакой SSR и близко не сравнится с ним по скорости работы и комфорту для пользователя, не говоря уже о прочих возможностях типа оффлайн работы и установке как нативного приложения.</p><p>SSR может быть, наверное, полезен для каких-то исключительных случаев, но в целом он выглядит тупиковой ветвью во фронтенд разработке.</p></details>',9),c=[l];function i(d,S,m,n,P,u){return r(),t("div",null,c)}const A=s(p,[["render",i]]);export{h as __pageData,A as default};
