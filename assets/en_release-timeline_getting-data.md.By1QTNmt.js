import{_ as e,o as t,c as a,aa as i}from"./chunks/framework.D5hYG7Sk.js";const g=JSON.parse('{"title":"Getting release, commit and pull requests data","description":"","frontmatter":{"pageClass":"release-timeline","head":[["meta",{"name":"og:site_name","content":"Release timeline - visual component displaying GitHub release timeline"}],["meta",{"name":"og:image","content":"/images/vue-faq-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-faq-logo.png"}]]},"headers":[],"relativePath":"en/release-timeline/getting-data.md","filePath":"en/release-timeline/getting-data.md","lastUpdated":1709970709000}'),n={name:"en/release-timeline/getting-data.md"},o=i('<h1 id="getting-release-commit-and-pull-requests-data" tabindex="-1">Getting release, commit and pull requests data <a class="header-anchor" href="#getting-release-commit-and-pull-requests-data" aria-label="Permalink to &quot;Getting release, commit and pull requests data&quot;">​</a></h1><h2 id="retrieving-data" tabindex="-1">Retrieving data <a class="header-anchor" href="#retrieving-data" aria-label="Permalink to &quot;Retrieving data&quot;">​</a></h2><p>There are three ways to get data from releases, pull request and commits from GitHub</p><ol><li>Dynamic. Direct request to GitHub REST API during page opening.</li><li>Request to GitHub REST API through a proxy</li><li>Request to GitHub REST API during project build, optimise and save data locally on the site.</li></ol><p>Currently the first and second option are directly implemented, there is an option to specify <code>url</code> for release requests, pull requests and commits.</p><p>The first option is used by default.</p><p>The second option is needed to reduce the size of the downloaded file, as 95% of the data in GitHub responses is not used in the application.</p><p>The data format should be the same as GitHub&#39;s, but may contain only the required fields.</p><p>The third option can also optimise data flows, but it makes a snapshot of releases and a pull requests at a certain point in time. When a new release comes out, the documentation will need to be rebuilt. In this case you also need to provide the correct url. The logic of the third option (receiving, filtering, saving data) should be implemented by the package user.</p>',9),s=[o];function r(l,d,u,m,p,c){return t(),a("div",null,s)}const f=e(n,[["render",r]]);export{g as __pageData,f as default};
