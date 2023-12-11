import{_ as s,o as a,c as t,R as i}from"./chunks/framework.UhI7PsQU.js";const m=JSON.parse('{"title":"CSS и UI библиотеки","description":"","frontmatter":{},"headers":[],"relativePath":"ru/frontend/css-ui-libs.md","filePath":"ru/frontend/css-ui-libs.md","lastUpdated":1702297720000}'),e={name:"ru/frontend/css-ui-libs.md"},l=i(`<h1 id="css-и-ui-библиотеки" tabindex="-1">CSS и UI библиотеки <a class="header-anchor" href="#css-и-ui-библиотеки" aria-label="Permalink to &quot;CSS и UI библиотеки&quot;">​</a></h1><details class="details custom-block"><summary>Что такое CSS и UI библиотеки?</summary><p>CSS и UI библиотеки либо предоставляют свои, либо помогают создавать кастомные UI компоненты типа Button или Select? что может значительно ускорить разработку.</p><p>CSS библиотеки не содержат JavaScript кода и, соответственно, имеют ограничения для сложных компонент типа Select или Dropdown.</p><p>Есть отдельный тип Headless-UI библиотек, которые предлагают компоненты без стилизованной визуализации - только логику компонента и Accessibility требования. Разработчику нужно самому добавить CSS стили.</p></details><details class="details custom-block"><summary>Плюсы и минусы UI библиотек?</summary><p>Плюсы: укоряет разработку, если пользоваться ей на проекте максимально, вносит в приложение единый стиль</p><p>Минусы: как и любая зависимость может устареть (трагедия Vuetify 2), добавляет веса в итоговый бандл.</p><p>В <a href="https://habr.com/ru/articles/745012/" target="_blank" rel="noreferrer">этой статье</a> хорошо сравниваются 10 Vue 3 UI библиотек.</p></details><details class="details custom-block"><summary>Как снизить зависимость от чужих библиотек?</summary><p>Оборачивайте компоненты UI библиотеки в свои.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- BaseButton.vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">QButton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>и используйте в своем коде <code>BaseButton</code>. Таким образом в дальнейшем вам будет намного проще проапгрейдиться, заменить библиотеку или заменить данный компонент на самописный. И даже просто изменить у компонента стили.</p></details><details class="details custom-block"><summary>Лэйаут и адаптивность страниц средствами CSS и UI библиотек</summary><p>Использование колоночной системы и иного функционала CSS и UI библиотек типа распространенного Tailwind удобно для небольших проектов и иногда ускоряет верстку, однако очень сильно ухудшает качество кода в целом, включая его поддерживаемость и расширяемость. Как будто мир вновь вернулся во времена IE6, когда все стили и JavaScript также располагались в аттрибутах тэгов, и вся эволюция CSS в понятную, удобную, красивую иерарxичную модель классов была зря, как и разделение веба на документ (шаблон), презентационный слой (CSS стили) и логику (JavaScript).</p><p>В интернете полно статей, почему подход подобный Tailwind это плохо. Можно отметить только, что при должном умении верстать на чистом CSS3 также быстро и намного удобней и приятней в плане DX, чем через средства CSS и UI библиотек.</p><div class="tip custom-block"><p class="custom-block-title">Цитата</p><p>Хорошие разработчики знают причины, по которым стандарты, паттерны и хорошие практики стали таковыми.</p><p>Плохие разработчики придерживаются любой новой тенденции, которая может сэкономить им немного времени на обучение.</p></div></details>`,5),p=[l];function n(c,r,d,o,h,k){return a(),t("div",null,p)}const S=s(e,[["render",n]]);export{m as __pageData,S as default};
