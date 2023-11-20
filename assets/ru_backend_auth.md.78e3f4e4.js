import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.254bf437.js";const h=JSON.parse('{"title":"Аутентификация и авторизация","description":"","frontmatter":{},"headers":[],"relativePath":"ru/backend/auth.md","filePath":"ru/backend/auth.md"}'),o={name:"ru/backend/auth.md"},l=s('<h1 id="аутентификация-и-авторизация" tabindex="-1">Аутентификация и авторизация <a class="header-anchor" href="#аутентификация-и-авторизация" aria-label="Permalink to &quot;Аутентификация и авторизация&quot;">​</a></h1><details class="details custom-block"><summary>Что такое аутентификация и авторизация</summary><p>Грубо говоря:</p><p>Аутентификация - когда система удостоверяется, что в неё залогинился именно Вася Пупкин, например, проверив его логин и пароль</p><p>Авторизация - когда система удостоверяется, что запрашивающий ресурс/действие пользователь имеет право доступа к нему. Например, старший менеджер имеет право удаления товара в админке, а простой менеджер - нет.</p></details><details class="details custom-block"><summary>Как сделать систему аутентификации на сайта</summary><p>Для SPA самый распространенный способ - на JWT токенах. Вариантов это сделать много, в зависимости от требований уровня безопасности (личный блог Васи Пупкина с комментариями гостей и онлайн магазин с депозитами и бонусами - две большие разницы).</p><p>JWT - это стандарт записи небольшого количества информации в строку (токен) и подписывания её (криптография). Делает это бэкенд. Таким образом только бэкенд может удостовериться, что токен выписан им, и в нем действительная информация.</p><p>Стандарта аутентификация на токенах как такового нет, есть лучшие практики.</p><p>Варианты:</p><ol><li>Бэкенд генерит токен (access token - AT) и кладет в httpOnly cookie. Фронтэнд доступа к токену не имеет, браузер просто возвращает куку. Метод незаслужено редко используемый, но вполне надежный. С фронта снимаются все заморочки по манипуляции с АТ.</li></ol><p>Сценарий:</p><ul><li>Фронт логинится, получает данные пользователя с бэка и работает с ними. При получении при любом запросе 401 - направляет пользователя на форму логина, обнуляет данные пользователя.</li><li>Бэк при логине создает httpOnly cookie с токеном с определенным сроком жизни. На каждом запросе проверяет токен, определяет того, кому выписан этот токен и его права, и дальше решает разрешать ли доступ. Если срок жизни токена кончился - возвращает 401.</li></ul><ol start="2"><li><p>Бэкенд генерит токен (access token - AT) и передаёт фронту. Фронт сохраняет его и каждый раз отправляет его обратно. По сути то же самое, что и в первом случае, плюс лишние телодвижения и возможность потерять токен через XSS.</p></li><li><p>Используются два токена - короткоживущий access token (AT) и дольше живущий refresh token (RT) пересылаемый в httpOnly cookie. AT работает как во втором случае. Когда записанный в нем срок его жизни кончается, бэкенд проверяет RT, и если он валиден, обновляет AT. Кончается RT - пользователь направляется на перелогин.</p></li></ol><p>Подробнее по данной теме можно ознакомиться в, например, <a href="https://habr.com/ru/articles/710552/" target="_blank" rel="noreferrer">этой статье</a></p></details><details class="details custom-block"><summary>Где хранить access token на фронте?</summary><p>В 95% случаев в LocalStorage</p></details><details class="details custom-block"><summary>Что такое oAuth и SSO?</summary><p>oAuth - Логин &quot;через Google&quot;. Также когда, например, у пользователь есть возможность на твоем сайте сохранить что-то в Google Drive. Чтобы получить разрешение для твоего сайта работы с Google Drive аккаунтом пользователя, ты просишь его дать через Google разрешения твоему сайту лазить в его аккаунт. Итого у нас есть четыре части - Google (авторизационный центр), сторонний ресурс (Google Drive), твой сайт и пользователь</p><p>SSO - single sign-on - логин пользователя на портал некой компании один раз, и затем прозрачный доступ на разные его сервисы. Например, логин в GMail и доступ в сразу в Google Диск, Google Photo и так далее.</p></details><details class="details custom-block"><summary>Дает ли аутентификация через JWT безопасность?</summary><p>Безопасность - очень комплексное понятие, аутентификация через JWT - всего лишь один из её элементов. Для критичных приложений можно снимать отпечаток системы пользователя (browser fingerprint) и заставлять пользователя перелогиниваться как только он изменился. То же самое с IP. Таким образом можно бороться с кражей АТ. Также ставить очень маленький срок жизни AT, если используется RT. Но основные меры безопасности связаны не с аутентификацией, а с постоянным мониторингом системы на подозрительные действия.</p></details><details class="details custom-block"><summary>Авторизация</summary><p>Если нужно давать пользователям разный уровень доступа к ресурсам сайта, то обычно применяется или RBAC (Role-based access control) или PBA - Policy-Based Authorization (Permission-Based Authorization).</p><p>В первом случае пользователи распределяются по ролям (админ, менеджер, юзер) и уровень доступа определяется ролью.</p><p>Во-втором можно более гранулировано задать разрешение каждому пользователю индивидуально на любое действие.</p><p>Нужно понимать, что на фронте авторизация делается для удобства (пользователь не видит разделы сайта, которые ему запрещены), но за безопасность отвечает бэк - он должен проверять каждый раз, имеет ли пользователь право доступа к запрашиваемому ресурсу, даже если на фронте его как бы видно не должно быть. Сломать фронт - очень несложно.</p></details>',7),i=[l];function r(c,p,n,m,u,d){return a(),t("div",null,i)}const k=e(o,[["render",r]]);export{h as __pageData,k as default};
