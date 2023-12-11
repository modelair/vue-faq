import{_ as s,o as i,c as a,R as n,a9 as h}from"./chunks/framework.UhI7PsQU.js";const o=JSON.parse('{"title":"Установка","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/getting-started.md","filePath":"ru/vue-webapp/getting-started.md","lastUpdated":1702297720000}'),t={name:"ru/vue-webapp/getting-started.md"},p=n(`<h1 id="установка" tabindex="-1">Установка <a class="header-anchor" href="#установка" aria-label="Permalink to &quot;Установка&quot;">​</a></h1><h2 id="установка-через-create-vue-webapp" tabindex="-1">Установка через <code>create vue-webapp</code> <a class="header-anchor" href="#установка-через-create-vue-webapp" aria-label="Permalink to &quot;Установка через \`create vue-webapp\`&quot;">​</a></h2><p>При данном способе можно выбрать, какие опции будут установлены:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-webapp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> …</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-vue-project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">adds</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> )</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> … yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Workflow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pages?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> …</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> navigation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> drawer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ›</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TouchSlideoutDrawer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ›</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SimpleHeader</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> footer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ›</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RichFooter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;BaseIcon&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> component?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> …</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Scaffolding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/ubuntu/my-vue-project...</span></span></code></pre></div><p>Инициализация и запуск веб приложения</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-vue-project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>Результат в браузере:</p><p><img src="`+h+`" alt=""></p><h2 id="установка-из-репозитория" tabindex="-1">Установка из репозитория <a class="header-anchor" href="#установка-из-репозитория" aria-label="Permalink to &quot;Установка из репозитория&quot;">​</a></h2><p>При данном способе будет установлено всё, однако непосредственно в webapp будет подключен минимум функциональности. Удобно для ознакомления и тестирования всех доступных компонент и функционала.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/vuesence/vue-webapp.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-webapp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div>`,11),e=[p];function k(l,F,r,d,g,c){return i(),a("div",null,e)}const C=s(t,[["render",k]]);export{o as __pageData,C as default};
