import{_ as a,o as t,c as i,R as s,ah as e,ai as d,aj as n,ak as l}from"./chunks/framework.YZToRb8g.js";const _=JSON.parse('{"title":"Headers","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"en/vue-webapp/options/header.md","filePath":"en/vue-webapp/options/header.md","lastUpdated":1702618434000}'),h={name:"en/vue-webapp/options/header.md"},p=s('<h1 id="headers" tabindex="-1" data-v-d528ca94>Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;" data-v-d528ca94>​</a></h1><p data-v-d528ca94>All headers are adaptive.</p><h2 id="simpleheader" tabindex="-1" data-v-d528ca94>SimpleHeader <a class="header-anchor" href="#simpleheader" aria-label="Permalink to &quot;SimpleHeader&quot;" data-v-d528ca94>​</a></h2><p data-v-d528ca94><img src="'+e+'" alt="" data-v-d528ca94></p><p data-v-d528ca94>Simple <code data-v-d528ca94>sticky</code> header</p><h2 id="mantinesimpleheader" tabindex="-1" data-v-d528ca94>MantineSimpleHeader <a class="header-anchor" href="#mantinesimpleheader" aria-label="Permalink to &quot;MantineSimpleHeader&quot;" data-v-d528ca94>​</a></h2><p data-v-d528ca94><img src="'+d+'" alt="" data-v-d528ca94></p><p data-v-d528ca94>Simple <code data-v-d528ca94>sticky</code> header in Mantine UI style</p><h2 id="mantinelayeredheader" tabindex="-1" data-v-d528ca94>MantineLayeredHeader <a class="header-anchor" href="#mantinelayeredheader" aria-label="Permalink to &quot;MantineLayeredHeader&quot;" data-v-d528ca94>​</a></h2><p data-v-d528ca94><img src="'+n+'" alt="" data-v-d528ca94></p><p data-v-d528ca94>Layered <code data-v-d528ca94>sticky</code> header in Mantine UI style</p><h2 id="slidingheader" tabindex="-1" data-v-d528ca94>SlidingHeader <a class="header-anchor" href="#slidingheader" aria-label="Permalink to &quot;SlidingHeader&quot;" data-v-d528ca94>​</a></h2><p data-v-d528ca94><img src="'+l+`" alt="" data-v-d528ca94></p><p data-v-d528ca94>Can contain two different headers, the second one appears after the user scrolls down the page</p><div class="language-html vp-adaptive-theme" data-v-d528ca94><button title="Copy Code" class="copy" data-v-d528ca94></button><span class="lang" data-v-d528ca94>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-d528ca94><code data-v-d528ca94><span class="line" data-v-d528ca94><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-d528ca94>AppHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d528ca94> :threshold-hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d528ca94>&quot;200&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d528ca94> :threshold-open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d528ca94>&quot;400&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>&gt;</span></span>
<span class="line" data-v-d528ca94><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d528ca94>template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d528ca94> #first-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>&gt;</span></span>
<span class="line" data-v-d528ca94><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-d528ca94>AppHeaderFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94> /&gt;</span></span>
<span class="line" data-v-d528ca94><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d528ca94>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>&gt;</span></span>
<span class="line" data-v-d528ca94></span>
<span class="line" data-v-d528ca94><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d528ca94>template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d528ca94> #second-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>&gt;</span></span>
<span class="line" data-v-d528ca94><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-d528ca94>AppHeaderSecond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94> /&gt;</span></span>
<span class="line" data-v-d528ca94><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-d528ca94>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>&gt;</span></span>
<span class="line" data-v-d528ca94><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-d528ca94>AppHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d528ca94>&gt;</span></span></code></pre></div>`,15),c=[p];function r(k,o,v,E,g,m){return t(),i("div",null,c)}const u=a(h,[["render",r],["__scopeId","data-v-d528ca94"]]);export{_ as __pageData,u as default};
