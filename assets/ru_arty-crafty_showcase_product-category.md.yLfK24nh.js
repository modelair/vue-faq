import{_ as a,c as e,o as t,U as c}from"./chunks/framework.lBFuN894.js";const h=JSON.parse('{"title":"Категория товаров","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty project"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/product-category.md","filePath":"ru/arty-crafty/showcase/product-category.md","lastUpdated":1704890395000}'),o={name:"ru/arty-crafty/showcase/product-category.md"},r=c('<h1 id="категория-товаров" tabindex="-1" data-v-cc9f2e51>Категория товаров <a class="header-anchor" href="#категория-товаров" aria-label="Permalink to &quot;Категория товаров&quot;" data-v-cc9f2e51>​</a></h1><h2 id="layout" tabindex="-1" data-v-cc9f2e51>Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout&quot;" data-v-cc9f2e51>​</a></h2><p data-v-cc9f2e51>Страница категории товаров выглядит как идущие рядами и колонками карточки товаров. Число колонок зависит от ширины экрана. При <code data-v-cc9f2e51>mobile</code> будет одна колонка, при <code data-v-cc9f2e51>tablet</code> - две, при <code data-v-cc9f2e51>notebook</code> - три, и при <code data-v-cc9f2e51>desktop</code> - четыре.</p><p data-v-cc9f2e51>Сверху страницы название категории, возможно её описание и breadcrumbs (путь к категории в каталоге).</p><p data-v-cc9f2e51>Карточки разместить можно с помощью <code data-v-cc9f2e51>flexbox</code> (flex-wrap) и <code data-v-cc9f2e51>grid</code>. Мне привычнее первый, поэтому использую его. Для самой карточки товара создаем компонент <code data-v-cc9f2e51>ProductCard</code>.</p><h2 id="данные-и-api" tabindex="-1" data-v-cc9f2e51>Данные и API <a class="header-anchor" href="#данные-и-api" aria-label="Permalink to &quot;Данные и API&quot;" data-v-cc9f2e51>​</a></h2><p data-v-cc9f2e51>Если посмотреть другие магазины, то на карточках товара обычно одна или несколько картинок, название, краткое описание, стоимость, дополнительная информация (рейтинг, скидка, вес, материал и т.п.)</p><p data-v-cc9f2e51>Данные будем получать по сети. Лежать они будут в json файлах в директории <code data-v-cc9f2e51>public/api</code>. Создадим несколько файлов вроде <code data-v-cc9f2e51>category-products-3.json</code>.</p><p data-v-cc9f2e51>Как может быть устроена схема REST API на бэкенде для серьезных магазинов можно посмотреть на примере <a href="https://developer.adobe.com/commerce/webapi/rest/quick-reference/" target="_blank" rel="noreferrer" data-v-cc9f2e51>Magento WebAPI</a>.</p>',9),d=[r];function s(f,n,p,i,l,_){return t(),e("div",null,d)}const u=a(o,[["render",s],["__scopeId","data-v-cc9f2e51"]]);export{h as __pageData,u as default};
