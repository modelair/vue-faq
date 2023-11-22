import{_ as a,o as e,c as s,Q as t}from"./chunks/framework.254bf437.js";const n="/images/vue-webapp/header-simple.png",l="/images/vue-webapp/header-sliding.gif";const g=JSON.parse('{"title":"Headers","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/options/header.md","filePath":"ru/vue-webapp/options/header.md","lastUpdated":1700642197000}'),p={name:"ru/vue-webapp/options/header.md"},f=t('<h1 id="headers" tabindex="-1" data-v-e38fef26>Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;" data-v-e38fef26>​</a></h1><p data-v-e38fef26>На данный момент можно выбрать из двух видов хедера:</p><h2 id="simpleheader" tabindex="-1" data-v-e38fef26>SimpleHeader <a class="header-anchor" href="#simpleheader" aria-label="Permalink to &quot;SimpleHeader&quot;" data-v-e38fef26>​</a></h2><p data-v-e38fef26><img src="'+n+'" alt="" data-v-e38fef26></p><p data-v-e38fef26>Простой <code data-v-e38fef26>sticky</code> header</p><h2 id="slidingheader" tabindex="-1" data-v-e38fef26>SlidingHeader <a class="header-anchor" href="#slidingheader" aria-label="Permalink to &quot;SlidingHeader&quot;" data-v-e38fef26>​</a></h2><p data-v-e38fef26><img src="'+l+`" alt="" data-v-e38fef26></p><p data-v-e38fef26>Может содержать два разных header-а, второй появляется после того, как пользователь проскроллит страницу вниз</p><div class="language-html vp-adaptive-theme" data-v-e38fef26><button title="Copy Code" class="copy" data-v-e38fef26></button><span class="lang" data-v-e38fef26>html</span><pre class="shiki github-dark vp-code-dark" data-v-e38fef26><code data-v-e38fef26><span class="line" data-v-e38fef26><span style="color:#E1E4E8;" data-v-e38fef26>&lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-e38fef26>AppHeader</span><span style="color:#E1E4E8;" data-v-e38fef26> </span><span style="color:#B392F0;" data-v-e38fef26>:threshold-hide</span><span style="color:#E1E4E8;" data-v-e38fef26>=</span><span style="color:#9ECBFF;" data-v-e38fef26>&quot;200&quot;</span><span style="color:#E1E4E8;" data-v-e38fef26> </span><span style="color:#B392F0;" data-v-e38fef26>:threshold-open</span><span style="color:#E1E4E8;" data-v-e38fef26>=</span><span style="color:#9ECBFF;" data-v-e38fef26>&quot;400&quot;</span><span style="color:#E1E4E8;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#E1E4E8;" data-v-e38fef26>    &lt;</span><span style="color:#85E89D;" data-v-e38fef26>template</span><span style="color:#E1E4E8;" data-v-e38fef26> </span><span style="color:#B392F0;" data-v-e38fef26>#first-header</span><span style="color:#E1E4E8;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#E1E4E8;" data-v-e38fef26>        &lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-e38fef26>AppHeaderFirst</span><span style="color:#E1E4E8;" data-v-e38fef26> /&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#E1E4E8;" data-v-e38fef26>    &lt;/</span><span style="color:#85E89D;" data-v-e38fef26>template</span><span style="color:#E1E4E8;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26></span>
<span class="line" data-v-e38fef26><span style="color:#E1E4E8;" data-v-e38fef26>    &lt;</span><span style="color:#85E89D;" data-v-e38fef26>template</span><span style="color:#E1E4E8;" data-v-e38fef26> </span><span style="color:#B392F0;" data-v-e38fef26>#second-header</span><span style="color:#E1E4E8;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#E1E4E8;" data-v-e38fef26>        &lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-e38fef26>AppHeaderSecond</span><span style="color:#E1E4E8;" data-v-e38fef26> /&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#E1E4E8;" data-v-e38fef26>    &lt;/</span><span style="color:#85E89D;" data-v-e38fef26>template</span><span style="color:#E1E4E8;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#E1E4E8;" data-v-e38fef26>&lt;/</span><span style="color:#FDAEB7;font-style:italic;" data-v-e38fef26>AppHeader</span><span style="color:#E1E4E8;" data-v-e38fef26>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-e38fef26><code data-v-e38fef26><span class="line" data-v-e38fef26><span style="color:#24292E;" data-v-e38fef26>&lt;</span><span style="color:#B31D28;font-style:italic;" data-v-e38fef26>AppHeader</span><span style="color:#24292E;" data-v-e38fef26> </span><span style="color:#6F42C1;" data-v-e38fef26>:threshold-hide</span><span style="color:#24292E;" data-v-e38fef26>=</span><span style="color:#032F62;" data-v-e38fef26>&quot;200&quot;</span><span style="color:#24292E;" data-v-e38fef26> </span><span style="color:#6F42C1;" data-v-e38fef26>:threshold-open</span><span style="color:#24292E;" data-v-e38fef26>=</span><span style="color:#032F62;" data-v-e38fef26>&quot;400&quot;</span><span style="color:#24292E;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#24292E;" data-v-e38fef26>    &lt;</span><span style="color:#22863A;" data-v-e38fef26>template</span><span style="color:#24292E;" data-v-e38fef26> </span><span style="color:#6F42C1;" data-v-e38fef26>#first-header</span><span style="color:#24292E;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#24292E;" data-v-e38fef26>        &lt;</span><span style="color:#B31D28;font-style:italic;" data-v-e38fef26>AppHeaderFirst</span><span style="color:#24292E;" data-v-e38fef26> /&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#24292E;" data-v-e38fef26>    &lt;/</span><span style="color:#22863A;" data-v-e38fef26>template</span><span style="color:#24292E;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26></span>
<span class="line" data-v-e38fef26><span style="color:#24292E;" data-v-e38fef26>    &lt;</span><span style="color:#22863A;" data-v-e38fef26>template</span><span style="color:#24292E;" data-v-e38fef26> </span><span style="color:#6F42C1;" data-v-e38fef26>#second-header</span><span style="color:#24292E;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#24292E;" data-v-e38fef26>        &lt;</span><span style="color:#B31D28;font-style:italic;" data-v-e38fef26>AppHeaderSecond</span><span style="color:#24292E;" data-v-e38fef26> /&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#24292E;" data-v-e38fef26>    &lt;/</span><span style="color:#22863A;" data-v-e38fef26>template</span><span style="color:#24292E;" data-v-e38fef26>&gt;</span></span>
<span class="line" data-v-e38fef26><span style="color:#24292E;" data-v-e38fef26>&lt;/</span><span style="color:#B31D28;font-style:italic;" data-v-e38fef26>AppHeader</span><span style="color:#24292E;" data-v-e38fef26>&gt;</span></span></code></pre></div>`,9),o=[f];function d(r,c,v,i,E,y){return e(),s("div",null,o)}const m=a(p,[["render",d],["__scopeId","data-v-e38fef26"]]);export{g as __pageData,m as default};
