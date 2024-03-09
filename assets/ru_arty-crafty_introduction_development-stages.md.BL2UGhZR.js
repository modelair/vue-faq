import{_ as a,o as e,c as t,aa as i}from"./chunks/framework.D5hYG7Sk.js";const f=JSON.parse('{"title":"План работы","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/introduction/development-stages.md","filePath":"ru/arty-crafty/introduction/development-stages.md","lastUpdated":1709970709000}'),l={name:"ru/arty-crafty/introduction/development-stages.md"},r=i('<h1 id="план-работы" tabindex="-1">План работы <a class="header-anchor" href="#план-работы" aria-label="Permalink to &quot;План работы&quot;">​</a></h1><h2 id="стадии-разработки-по" tabindex="-1">Стадии разработки ПО <a class="header-anchor" href="#стадии-разработки-по" aria-label="Permalink to &quot;Стадии разработки ПО&quot;">​</a></h2><p>Классически разработка программного обеспечения состоит из следующих шагов (software development lifecycle - SDLC):</p><ol><li>Бизнес-анализ</li><li>Архитектура и дизайн</li><li>Разработка</li><li>Развертывание</li><li>Тестирование и QA</li><li>Документирование</li><li>Поддержка</li></ol><p>С пятого шага можно вернуться на второй или третий для корректировки требований и плана, и таких итераций может быть много.</p><p>Рассмотрим каждую стадию отдельно.</p><h2 id="бизнес-анализ" tabindex="-1">Бизнес-анализ <a class="header-anchor" href="#бизнес-анализ" aria-label="Permalink to &quot;Бизнес-анализ&quot;">​</a></h2><p>Цель данной стадии в том, чтобы изучить представление заказчика о том, что он хочет получить, и перевести его на язык, понятный разработчикам. Даже если клиент и разработчик - это вы. Проблема кроется в восприятии, терминах и понятийном аппарате в целом. Недопонимание может привести к нарушению сроков, «раздутому» бюджету проекта и несоответствию результата целям бизнеса.</p><p>В процессе работы аналитика, как интерпретатора с языка бизнеса на язык IT, как правило, возникают следующие артефакты:</p><ul><li>Видение проекта. Определяются границы проекта.</li><li>Скоуп задач. Позволяет определить, кто и какие задачи будет выполнять.</li><li>Описание сущностей. Описание логических связей между сущностями, потоков данных.</li><li>Диаграммы. Используются для наглядного описания процессов, алгоритмов, взаимосвязей между сущностями и т.д.</li><li>Описание поведения UI интерфейса. Нужно для более чёткого понимания, как работает интерфейс, какие существуют правила и как обрабатываются альтернативные сценарии.</li><li>Нефункциональные требования. Касаются производительности, безопасности и т.д.</li><li>Пользовательская документация. Объясняет, как пользователю использовать программу.</li></ul><h2 id="архитектура-и-дизаин" tabindex="-1">Архитектура и дизайн <a class="header-anchor" href="#архитектура-и-дизаин" aria-label="Permalink to &quot;Архитектура и дизайн&quot;">​</a></h2><p>Архитектура системы описывает ее основные компоненты, их взаимосвязи и способы взаимодействия друг с другом.</p><p>Она определяет структурированное решение, удовлетворяющее всем техническим и эксплуатационным требованиям, оптимизируя при этом общие атрибуты качества, такие как производительность и безопасность.</p><p>Кроме того, она включает в себя набор важных решений, связанных с разработкой программного обеспечения, и каждое из этих решений может оказать значительное влияние на качество, сопровождаемость, производительность и общий успех конечного продукта. Эти решения включают в себя:</p><ul><li>Выбор основных структурных элементов и их интерфейсов, из которых состоит система.</li><li>Поведение, определяемое взаимодействием между этими элементами.</li><li>Объединение этих структурных и поведенческих элементов в бОльшую подсистему.</li><li>Согласование архитектурных решений с бизнес-целями.</li><li>Архитектурное руководство по стилю (style guide) для дальнейшей разработки.</li></ul><p>Хорошая архитектура позволяет комфортно разрабатывать проект и удобно поддерживать и модифицировать его в долгосрочной перспективе.</p><p>Дизайн программной системы предусматривает разработку спецификации (software requirements specification - SRS), которая описывает элементы системы, их соответствие и совместную работу для выполнения требований, предъявляемых к системе. Дизайн выполняет роль чертежа в процессе разработки.</p><h2 id="разработка" tabindex="-1">Разработка <a class="header-anchor" href="#разработка" aria-label="Permalink to &quot;Разработка&quot;">​</a></h2><p>Разработка включает в себя реализацию поставленных в спецификации задач.</p><h2 id="развертывание" tabindex="-1">Развертывание <a class="header-anchor" href="#развертывание" aria-label="Permalink to &quot;Развертывание&quot;">​</a></h2><p>Развертывание на сервере. CI/CD для автоматизации не только доставки, билда и деплоя, но и тестирования, бэкапа, версионности.</p><h2 id="тестирование-и-qa" tabindex="-1">Тестирование и QA <a class="header-anchor" href="#тестирование-и-qa" aria-label="Permalink to &quot;Тестирование и QA&quot;">​</a></h2><p>Тестирование на первом этапе ручное, после - интеграционные (e2e) тесты.</p><h2 id="документирование" tabindex="-1">Документирование <a class="header-anchor" href="#документирование" aria-label="Permalink to &quot;Документирование&quot;">​</a></h2><p>Данное руководство будет служить документацией, пока не понадобится отдельная.</p><h2 id="поддержка" tabindex="-1">Поддержка <a class="header-anchor" href="#поддержка" aria-label="Permalink to &quot;Поддержка&quot;">​</a></h2><p>Поддержка включает в себя не только оказание помощи пользователям и исправление ошибок, но и получение обратной связи от них с целью улучшения продукта.</p>',27),o=[r];function n(s,c,d,h,p,m){return e(),t("div",null,o)}const _=a(l,[["render",n]]);export{f as __pageData,_ as default};
