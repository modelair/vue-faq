import{_ as a,o as t,c as s,Q as e}from"./chunks/framework.46d06b6e.js";const n="/images/vue-webapp/header-simple.png",p="/images/vue-webapp/header-simple-mantine.png",l="/images/vue-webapp/header-layered-mantine.png",b="/images/vue-webapp/header-sliding.gif";const g=JSON.parse('{"title":"Headers","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/options/header.md","filePath":"ru/vue-webapp/options/header.md","lastUpdated":1702052295000}'),f={name:"ru/vue-webapp/options/header.md"},o=e('<h1 id="headers" tabindex="-1" data-v-5193bbff>Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;" data-v-5193bbff>​</a></h1><p data-v-5193bbff>Все хедеры адаптивны.</p><h2 id="simpleheader" tabindex="-1" data-v-5193bbff>SimpleHeader <a class="header-anchor" href="#simpleheader" aria-label="Permalink to &quot;SimpleHeader&quot;" data-v-5193bbff>​</a></h2><p data-v-5193bbff><img src="'+n+'" alt="" data-v-5193bbff></p><p data-v-5193bbff>Простой <code data-v-5193bbff>sticky</code> header</p><h2 id="mantinesimpleheader" tabindex="-1" data-v-5193bbff>MantineSimpleHeader <a class="header-anchor" href="#mantinesimpleheader" aria-label="Permalink to &quot;MantineSimpleHeader&quot;" data-v-5193bbff>​</a></h2><p data-v-5193bbff><img src="'+p+'" alt="" data-v-5193bbff></p><p data-v-5193bbff>Простой <code data-v-5193bbff>sticky</code> header в стиле Mantine UI</p><h2 id="mantinelayeredheader" tabindex="-1" data-v-5193bbff>MantineLayeredHeader <a class="header-anchor" href="#mantinelayeredheader" aria-label="Permalink to &quot;MantineLayeredHeader&quot;" data-v-5193bbff>​</a></h2><p data-v-5193bbff><img src="'+l+'" alt="" data-v-5193bbff></p><p data-v-5193bbff><code data-v-5193bbff>sticky</code> header с уровнями в стиле Mantine UI</p><h2 id="slidingheader" tabindex="-1" data-v-5193bbff>SlidingHeader <a class="header-anchor" href="#slidingheader" aria-label="Permalink to &quot;SlidingHeader&quot;" data-v-5193bbff>​</a></h2><p data-v-5193bbff><img src="'+b+`" alt="" data-v-5193bbff></p><p data-v-5193bbff>Может содержать два разных header-а, второй появляется после того, как пользователь проскроллит страницу вниз</p><div class="language-html vp-adaptive-theme" data-v-5193bbff><button title="Copy Code" class="copy" data-v-5193bbff></button><span class="lang" data-v-5193bbff>html</span><pre class="shiki github-dark vp-code-dark" data-v-5193bbff><code data-v-5193bbff><span class="line" data-v-5193bbff><span style="color:#E1E4E8;" data-v-5193bbff>&lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-5193bbff>AppHeader</span><span style="color:#E1E4E8;" data-v-5193bbff> </span><span style="color:#B392F0;" data-v-5193bbff>:threshold-hide</span><span style="color:#E1E4E8;" data-v-5193bbff>=</span><span style="color:#9ECBFF;" data-v-5193bbff>&quot;200&quot;</span><span style="color:#E1E4E8;" data-v-5193bbff> </span><span style="color:#B392F0;" data-v-5193bbff>:threshold-open</span><span style="color:#E1E4E8;" data-v-5193bbff>=</span><span style="color:#9ECBFF;" data-v-5193bbff>&quot;400&quot;</span><span style="color:#E1E4E8;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#E1E4E8;" data-v-5193bbff>    &lt;</span><span style="color:#85E89D;" data-v-5193bbff>template</span><span style="color:#E1E4E8;" data-v-5193bbff> </span><span style="color:#B392F0;" data-v-5193bbff>#first-header</span><span style="color:#E1E4E8;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#E1E4E8;" data-v-5193bbff>        &lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-5193bbff>AppHeaderFirst</span><span style="color:#E1E4E8;" data-v-5193bbff> /&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#E1E4E8;" data-v-5193bbff>    &lt;/</span><span style="color:#85E89D;" data-v-5193bbff>template</span><span style="color:#E1E4E8;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff></span>
<span class="line" data-v-5193bbff><span style="color:#E1E4E8;" data-v-5193bbff>    &lt;</span><span style="color:#85E89D;" data-v-5193bbff>template</span><span style="color:#E1E4E8;" data-v-5193bbff> </span><span style="color:#B392F0;" data-v-5193bbff>#second-header</span><span style="color:#E1E4E8;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#E1E4E8;" data-v-5193bbff>        &lt;</span><span style="color:#FDAEB7;font-style:italic;" data-v-5193bbff>AppHeaderSecond</span><span style="color:#E1E4E8;" data-v-5193bbff> /&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#E1E4E8;" data-v-5193bbff>    &lt;/</span><span style="color:#85E89D;" data-v-5193bbff>template</span><span style="color:#E1E4E8;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#E1E4E8;" data-v-5193bbff>&lt;/</span><span style="color:#FDAEB7;font-style:italic;" data-v-5193bbff>AppHeader</span><span style="color:#E1E4E8;" data-v-5193bbff>&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-5193bbff><code data-v-5193bbff><span class="line" data-v-5193bbff><span style="color:#24292E;" data-v-5193bbff>&lt;</span><span style="color:#B31D28;font-style:italic;" data-v-5193bbff>AppHeader</span><span style="color:#24292E;" data-v-5193bbff> </span><span style="color:#6F42C1;" data-v-5193bbff>:threshold-hide</span><span style="color:#24292E;" data-v-5193bbff>=</span><span style="color:#032F62;" data-v-5193bbff>&quot;200&quot;</span><span style="color:#24292E;" data-v-5193bbff> </span><span style="color:#6F42C1;" data-v-5193bbff>:threshold-open</span><span style="color:#24292E;" data-v-5193bbff>=</span><span style="color:#032F62;" data-v-5193bbff>&quot;400&quot;</span><span style="color:#24292E;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#24292E;" data-v-5193bbff>    &lt;</span><span style="color:#22863A;" data-v-5193bbff>template</span><span style="color:#24292E;" data-v-5193bbff> </span><span style="color:#6F42C1;" data-v-5193bbff>#first-header</span><span style="color:#24292E;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#24292E;" data-v-5193bbff>        &lt;</span><span style="color:#B31D28;font-style:italic;" data-v-5193bbff>AppHeaderFirst</span><span style="color:#24292E;" data-v-5193bbff> /&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#24292E;" data-v-5193bbff>    &lt;/</span><span style="color:#22863A;" data-v-5193bbff>template</span><span style="color:#24292E;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff></span>
<span class="line" data-v-5193bbff><span style="color:#24292E;" data-v-5193bbff>    &lt;</span><span style="color:#22863A;" data-v-5193bbff>template</span><span style="color:#24292E;" data-v-5193bbff> </span><span style="color:#6F42C1;" data-v-5193bbff>#second-header</span><span style="color:#24292E;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#24292E;" data-v-5193bbff>        &lt;</span><span style="color:#B31D28;font-style:italic;" data-v-5193bbff>AppHeaderSecond</span><span style="color:#24292E;" data-v-5193bbff> /&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#24292E;" data-v-5193bbff>    &lt;/</span><span style="color:#22863A;" data-v-5193bbff>template</span><span style="color:#24292E;" data-v-5193bbff>&gt;</span></span>
<span class="line" data-v-5193bbff><span style="color:#24292E;" data-v-5193bbff>&lt;/</span><span style="color:#B31D28;font-style:italic;" data-v-5193bbff>AppHeader</span><span style="color:#24292E;" data-v-5193bbff>&gt;</span></span></code></pre></div>`,15),d=[o];function r(c,i,v,E,y,h){return t(),s("div",null,d)}const _=a(f,[["render",r],["__scopeId","data-v-5193bbff"]]);export{g as __pageData,_ as default};
