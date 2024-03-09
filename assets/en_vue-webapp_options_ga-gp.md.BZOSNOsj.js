import{_ as e,o as t,c as a,aa as o}from"./chunks/framework.D5hYG7Sk.js";const b=JSON.parse('{"title":"GitHub Actions script to deploy to GitHub Pages","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp builder"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"en/vue-webapp/options/ga-gp.md","filePath":"en/vue-webapp/options/ga-gp.md","lastUpdated":1709970709000}'),i={name:"en/vue-webapp/options/ga-gp.md"},s=o('<h1 id="github-actions-script-to-deploy-to-github-pages" tabindex="-1">GitHub Actions script to deploy to GitHub Pages <a class="header-anchor" href="#github-actions-script-to-deploy-to-github-pages" aria-label="Permalink to &quot;GitHub Actions script to deploy to GitHub Pages&quot;">​</a></h1><h2 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to &quot;Deployment&quot;">​</a></h2><p>Uses <a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noreferrer">JamesIves/github-pages-deploy-action</a> GitHub Action to deploy a site to the <code>gh-pages</code> branch of the same GitHub repository, which automatically makes the website available at <code>https://youGitHubUsername.github.io/my-vue-webapp</code> (if your project and repository has name <code>my-vue-webapp</code>).</p><ul><li>Create a branch in the repository called <code>gh-pages</code></li><li>Go to the &quot;Settings&quot; section of your repository</li><li>Under &quot;Code and automation&quot; in the sidebar, click Pages.</li><li>Under &quot;Build and deployment&quot; under the &quot;Source&quot;, select &quot;Deploy from a branch&quot;.</li><li>Under &quot;Build and deployment&quot; under the &quot;Branch&quot; heading, use the branch drop-down menu and select the branch you want - <code>gh-pages</code>.</li></ul><p>More details:</p><ul><li><a href="https://github.com/features/actions" target="_blank" rel="noreferrer">GitHub Actions</a></li><li><a href="https://docs.github.com/ru/pages/quickstart" target="_blank" rel="noreferrer">GitHub Pages</a></li></ul><h2 id="setting-base-in-vite-config" tabindex="-1">Setting <code>base</code> in Vite config <a class="header-anchor" href="#setting-base-in-vite-config" aria-label="Permalink to &quot;Setting `base` in Vite config&quot;">​</a></h2><p>If you don&#39;t have a custom domain, you need to put the name of your repository as <code>base</code> in <code>vite.config.ts</code> so that the site can be accessed from the above link:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/my-vue-webapp/&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>If you have a custom domain (like <code>yourname.com</code>), this parameter is not needed.</p>',10),n=[s];function p(r,l,c,d,h,u){return t(),a("div",null,n)}const m=e(i,[["render",p]]);export{b as __pageData,m as default};
