import{_ as a,o as c,c as s,Q as t}from"./chunks/framework.46d06b6e.js";const e="/images/vue-webapp/header-simple.png",n="/images/vue-webapp/header-sliding.gif";const g=JSON.parse('{"title":"Headers","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/options/header.md","filePath":"ru/vue-webapp/options/header.md","lastUpdated":1701068958000}'),l={name:"ru/vue-webapp/options/header.md"},p=t('<h1 id="headers" tabindex="-1" data-v-bc796b0c>Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;" data-v-bc796b0c>​</a></h1><p data-v-bc796b0c>На данный момент можно выбрать из двух видов хедера:</p><h2 id="simpleheader" tabindex="-1" data-v-bc796b0c>SimpleHeader <a class="header-anchor" href="#simpleheader" aria-label="Permalink to &quot;SimpleHeader&quot;" data-v-bc796b0c>​</a></h2><p data-v-bc796b0c><img src="'+e+'" alt="" data-v-bc796b0c></p><p data-v-bc796b0c>Простой <code data-v-bc796b0c>sticky</code> header</p><h2 id="slidingheader" tabindex="-1" data-v-bc796b0c>SlidingHeader <a class="header-anchor" href="#slidingheader" aria-label="Permalink to &quot;SlidingHeader&quot;" data-v-bc796b0c>​</a></h2><p data-v-bc796b0c><img src="'+n+`" alt="" data-v-bc796b0c></p><p data-v-bc796b0c>Может содержать два разных header-а, второй появляется после того, как пользователь проскроллит страницу вниз</p><div class="language-html vp-adaptive-theme" data-v-bc796b0c><button title="Copy Code" class="copy" data-v-bc796b0c></button><span class="lang" data-v-bc796b0c>html</span><pre class="shiki github-dark vp-code-dark" data-v-bc796b0c><code data-v-bc796b0c><span class="line" data-v-bc796b0c><span style="color:#E1E4E8;" data-v-bc796b0c>&lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-bc796b0c>AppHeader</span><span style="color:#E1E4E8;" data-v-bc796b0c> </span><span style="color:#B392F0;" data-v-bc796b0c>:threshold-hide</span><span style="color:#E1E4E8;" data-v-bc796b0c>=</span><span style="color:#9ECBFF;" data-v-bc796b0c>&quot;200&quot;</span><span style="color:#E1E4E8;" data-v-bc796b0c> </span><span style="color:#B392F0;" data-v-bc796b0c>:threshold-open</span><span style="color:#E1E4E8;" data-v-bc796b0c>=</span><span style="color:#9ECBFF;" data-v-bc796b0c>&quot;400&quot;</span><span style="color:#E1E4E8;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#E1E4E8;" data-v-bc796b0c>    &lt;</span><span style="color:#85E89D;" data-v-bc796b0c>template</span><span style="color:#E1E4E8;" data-v-bc796b0c> </span><span style="color:#B392F0;" data-v-bc796b0c>#first-header</span><span style="color:#E1E4E8;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#E1E4E8;" data-v-bc796b0c>        &lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-bc796b0c>AppHeaderFirst</span><span style="color:#E1E4E8;" data-v-bc796b0c> /&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#E1E4E8;" data-v-bc796b0c>    &lt;/</span><span style="color:#85E89D;" data-v-bc796b0c>template</span><span style="color:#E1E4E8;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c></span>
<span class="line" data-v-bc796b0c><span style="color:#E1E4E8;" data-v-bc796b0c>    &lt;</span><span style="color:#85E89D;" data-v-bc796b0c>template</span><span style="color:#E1E4E8;" data-v-bc796b0c> </span><span style="color:#B392F0;" data-v-bc796b0c>#second-header</span><span style="color:#E1E4E8;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#E1E4E8;" data-v-bc796b0c>        &lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-bc796b0c>AppHeaderSecond</span><span style="color:#E1E4E8;" data-v-bc796b0c> /&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#E1E4E8;" data-v-bc796b0c>    &lt;/</span><span style="color:#85E89D;" data-v-bc796b0c>template</span><span style="color:#E1E4E8;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#E1E4E8;" data-v-bc796b0c>&lt;/</span><span style="color:#FDAEB7;font-style:italic;" data-v-bc796b0c>AppHeader</span><span style="color:#E1E4E8;" data-v-bc796b0c>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-bc796b0c><code data-v-bc796b0c><span class="line" data-v-bc796b0c><span style="color:#24292E;" data-v-bc796b0c>&lt;</span><span style="color:#B31D28;font-style:italic;" data-v-bc796b0c>AppHeader</span><span style="color:#24292E;" data-v-bc796b0c> </span><span style="color:#6F42C1;" data-v-bc796b0c>:threshold-hide</span><span style="color:#24292E;" data-v-bc796b0c>=</span><span style="color:#032F62;" data-v-bc796b0c>&quot;200&quot;</span><span style="color:#24292E;" data-v-bc796b0c> </span><span style="color:#6F42C1;" data-v-bc796b0c>:threshold-open</span><span style="color:#24292E;" data-v-bc796b0c>=</span><span style="color:#032F62;" data-v-bc796b0c>&quot;400&quot;</span><span style="color:#24292E;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#24292E;" data-v-bc796b0c>    &lt;</span><span style="color:#22863A;" data-v-bc796b0c>template</span><span style="color:#24292E;" data-v-bc796b0c> </span><span style="color:#6F42C1;" data-v-bc796b0c>#first-header</span><span style="color:#24292E;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#24292E;" data-v-bc796b0c>        &lt;</span><span style="color:#B31D28;font-style:italic;" data-v-bc796b0c>AppHeaderFirst</span><span style="color:#24292E;" data-v-bc796b0c> /&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#24292E;" data-v-bc796b0c>    &lt;/</span><span style="color:#22863A;" data-v-bc796b0c>template</span><span style="color:#24292E;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c></span>
<span class="line" data-v-bc796b0c><span style="color:#24292E;" data-v-bc796b0c>    &lt;</span><span style="color:#22863A;" data-v-bc796b0c>template</span><span style="color:#24292E;" data-v-bc796b0c> </span><span style="color:#6F42C1;" data-v-bc796b0c>#second-header</span><span style="color:#24292E;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#24292E;" data-v-bc796b0c>        &lt;</span><span style="color:#B31D28;font-style:italic;" data-v-bc796b0c>AppHeaderSecond</span><span style="color:#24292E;" data-v-bc796b0c> /&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#24292E;" data-v-bc796b0c>    &lt;/</span><span style="color:#22863A;" data-v-bc796b0c>template</span><span style="color:#24292E;" data-v-bc796b0c>&gt;</span></span>
<span class="line" data-v-bc796b0c><span style="color:#24292E;" data-v-bc796b0c>&lt;/</span><span style="color:#B31D28;font-style:italic;" data-v-bc796b0c>AppHeader</span><span style="color:#24292E;" data-v-bc796b0c>&gt;</span></span></code></pre></div>`,9),b=[p];function o(d,r,v,i,E,y){return c(),s("div",null,b)}const m=a(l,[["render",o],["__scopeId","data-v-bc796b0c"]]);export{g as __pageData,m as default};
