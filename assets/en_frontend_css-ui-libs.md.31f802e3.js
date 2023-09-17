import{_ as e,o as s,c as a,Q as t}from"./chunks/framework.477046d0.js";const m=JSON.parse('{"title":"CSS and UI libraries","description":"","frontmatter":{},"headers":[],"relativePath":"en/frontend/css-ui-libs.md","filePath":"en/frontend/css-ui-libs.md"}'),n={name:"en/frontend/css-ui-libs.md"},o=t(`<h1 id="css-and-ui-libraries" tabindex="-1">CSS and UI libraries <a class="header-anchor" href="#css-and-ui-libraries" aria-label="Permalink to &quot;CSS and UI libraries&quot;">​</a></h1><p>::: What are CSS and UI libraries?</p><p>CSS and UI libraries either provide their own or help you create custom UI components like Button or Select? which can speed up your development.</p><p>CSS libraries do not contain JavaScript code and therefore have limitations for complex components like Select or Dropdown.</p><p>There is a separate type of Headless-UI libraries that offer components without stylized visualization - only component logic and Accessibility requirements. The developer needs to add CSS styles himself.</p><p>:::</p><details class="details custom-block"><summary>Pros and cons of UI libraries?</summary><p>Pros: shortens the development, if you use it on the project as much as possible, brings a unified style to the application</p><p>Cons: as any dependency can become obsolete (Vuetify 2 tragedy), adds weight to the final bundle.</p><p>In <a href="https://habr.com/ru/articles/745012/" target="_blank" rel="noreferrer">this article</a> there is a good comparison of 10 Vue 3 UI libraries.</p><p>:::</p><details class="details custom-block"><summary>How to reduce dependency on foreign libraries?</summary><p>Wrap UI library components in your own.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- BaseButton.vue --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">QButton</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">...</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- BaseButton.vue --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">QButton</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">...</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>and use <code>BaseButton</code> in your code. This way it will be much easier for you to upgrade, replace the library or replace this component with a self-designed one. And even just change the styles of the component.</p><p>:::</p><details class="details custom-block"><summary>Layout and adaptability of pages by means of CSS and UI libraries</summary><p>Using the column system and other functionality of CSS and UI libraries like the popular Tailwind is convenient for small projects and sometimes speeds up layout, but very much worsens the quality of the code as a whole, including its maintainability and extensibility. It&#39;s as if the world went back to the days of IE6, when all styles and JavaScript were also located in tag attributes, and the whole evolution of CSS into a clear, convenient, beautiful hierarchical class model was for nothing, just like the division of the web into document (template), presentation layer (CSS styles) and logic (JavaScript).</p><p>The web is full of articles why an approach like Tailwind is a bad thing. We can only note that with proper skill, layout on pure CSS3 is also fast and much more convenient and pleasant in terms of DX than through CSS and UI libraries.</p><div class="tip custom-block"><p class="custom-block-title">Quote</p><p>Good developers know the reasons why standards, patterns and good practices have become the way they are.</p><p>Bad developers stick to whatever new trend that might save them some learning curve.</p></div></details></details></details>`,7),l=[o];function i(r,p,c,d,h,u){return s(),a("div",null,l)}const b=e(n,[["render",i]]);export{m as __pageData,b as default};
