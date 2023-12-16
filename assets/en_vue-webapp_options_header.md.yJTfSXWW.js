import{_ as a,o as t,c as i,R as s,ah as e,ai as d,aj as n,ak as l}from"./chunks/framework.YZToRb8g.js";const y=JSON.parse('{"title":"Headers","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"en/vue-webapp/options/header.md","filePath":"en/vue-webapp/options/header.md","lastUpdated":1702705882000}'),h={name:"en/vue-webapp/options/header.md"},p=s('<h1 id="headers" tabindex="-1" data-v-1369f948>Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;" data-v-1369f948>​</a></h1><p data-v-1369f948>All headers are adaptive.</p><h2 id="simpleheader" tabindex="-1" data-v-1369f948>SimpleHeader <a class="header-anchor" href="#simpleheader" aria-label="Permalink to &quot;SimpleHeader&quot;" data-v-1369f948>​</a></h2><p data-v-1369f948><img src="'+e+'" alt="" data-v-1369f948></p><p data-v-1369f948>Simple <code data-v-1369f948>sticky</code> header</p><h2 id="mantinesimpleheader" tabindex="-1" data-v-1369f948>MantineSimpleHeader <a class="header-anchor" href="#mantinesimpleheader" aria-label="Permalink to &quot;MantineSimpleHeader&quot;" data-v-1369f948>​</a></h2><p data-v-1369f948><img src="'+d+'" alt="" data-v-1369f948></p><p data-v-1369f948>Simple <code data-v-1369f948>sticky</code> header in Mantine UI style</p><h2 id="mantinelayeredheader" tabindex="-1" data-v-1369f948>MantineLayeredHeader <a class="header-anchor" href="#mantinelayeredheader" aria-label="Permalink to &quot;MantineLayeredHeader&quot;" data-v-1369f948>​</a></h2><p data-v-1369f948><img src="'+n+'" alt="" data-v-1369f948></p><p data-v-1369f948>Layered <code data-v-1369f948>sticky</code> header in Mantine UI style</p><h2 id="slidingheader" tabindex="-1" data-v-1369f948>SlidingHeader <a class="header-anchor" href="#slidingheader" aria-label="Permalink to &quot;SlidingHeader&quot;" data-v-1369f948>​</a></h2><p data-v-1369f948><img src="'+l+`" alt="" data-v-1369f948></p><p data-v-1369f948>Can contain two different headers, the second one appears after the user scrolls down the page</p><div class="language-html vp-adaptive-theme" data-v-1369f948><button title="Copy Code" class="copy" data-v-1369f948></button><span class="lang" data-v-1369f948>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-1369f948><code data-v-1369f948><span class="line" data-v-1369f948><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-1369f948>AppHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-1369f948> :threshold-hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-1369f948>&quot;200&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-1369f948> :threshold-open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-1369f948>&quot;400&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>&gt;</span></span>
<span class="line" data-v-1369f948><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-1369f948>template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-1369f948> #first-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>&gt;</span></span>
<span class="line" data-v-1369f948><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-1369f948>AppHeaderFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948> /&gt;</span></span>
<span class="line" data-v-1369f948><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-1369f948>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>&gt;</span></span>
<span class="line" data-v-1369f948></span>
<span class="line" data-v-1369f948><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-1369f948>template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-1369f948> #second-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>&gt;</span></span>
<span class="line" data-v-1369f948><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-1369f948>AppHeaderSecond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948> /&gt;</span></span>
<span class="line" data-v-1369f948><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-1369f948>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>&gt;</span></span>
<span class="line" data-v-1369f948><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-1369f948>AppHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-1369f948>&gt;</span></span></code></pre></div>`,15),r=[p];function k(o,f,v,E,c,g){return t(),i("div",null,r)}const _=a(h,[["render",k],["__scopeId","data-v-1369f948"]]);export{y as __pageData,_ as default};
