import{_ as e,o as t,c as s,Q as o}from"./chunks/framework.254bf437.js";const f=JSON.parse('{"title":"Authentication and authorization","description":"","frontmatter":{},"headers":[],"relativePath":"en/backend/auth.md","filePath":"en/backend/auth.md","lastUpdated":1700642197000}'),a={name:"en/backend/auth.md"},i=o('<h1 id="authentication-and-authorization" tabindex="-1">Authentication and authorization <a class="header-anchor" href="#authentication-and-authorization" aria-label="Permalink to &quot;Authentication and authorization&quot;">​</a></h1><details class="details custom-block"><summary>What is authentication and authorization</summary><p>Roughly speaking:</p><p>Authentication is when the system verifies that it is John Doe who logged in, for example, by checking his username and password</p><p>Authorization - when the system verifies that the user requesting the resource/action has the right to access it. For example, a senior manager has the right to delete an item in the admin, but a simple manager does not.</p></details><details class="details custom-block"><summary>How to make an authentication system on the site</summary><p>For SPA the most common way - on JWT tokens. There are many variants of this, depending on the requirements of the security level (John Doe&#39;s personal blog with guest comments and online store with deposits and bonuses - two big differences).</p><p>JWT is a standard for writing a small amount of information into a string (token) and signing it (cryptography). It is done by the backend. So only the backend can make sure that the token is written by it and has valid information in it.</p><p>There is no standard for token authentication as such, there are best practices.</p><p>Options:</p><ol><li>backend generates token (access token - AT) and puts it in httpOnly cookie. The frontend does not have access to the token, the browser just returns the cookie. This method is undeservedly rarely used, but it is quite reliable. The frontend removes all the hassles of manipulating AT.</li></ol><p>Scenario:</p><ul><li>Front logs in, gets user data from the backend and works with it. When receiving any 401 request, it directs the user to the login form and resets the user data to zero.</li><li>Back at login creates httpOnly cookie with token with certain lifetime. At each request it checks the token, determines the person to whom this token is issued and his rights, and then decides whether to allow access. If the lifetime of the token has expired, it returns 401.</li></ul><p>2 The backend generates an access token (AT) and passes it to the front. The front saves it and sends it back each time. In essence the same as in the first case, plus unnecessary steps and the possibility of losing the token through XSS.</p><ol start="3"><li>two tokens are used - short-lived access token (AT) and longer-lived refresh token (RT) sent in httpOnly cookie. AT works as in the second case. When its lifetime expires, the backend checks the RT and if it is valid, refreshes the AT. RT expires - the user is sent to re-login.</li></ol></details><details class="details custom-block"><summary>Where to store access token on the frontend?</summary><p>In 95% of cases in LocalStorage</p></details><details class="details custom-block"><summary>What is oAuth and SSO?</summary><p>oAuth - Login &quot;via Google&quot;. Also when, for example, a user has the option on your site to save something to Google Drive. In order to get permission for your site to work with the user&#39;s Google Drive account, you ask the user to allow your site to access their account via Google. So we have four parts - Google (the authorization center), the third-party resource (Google Drive), your site, and the user</p><p>SSO - single sign-on - a user logs in to a certain company&#39;s portal once, and then has transparent access to its different services. For example, login to GMail and access to Google Drive, Google Photo and so on.</p></details><details class="details custom-block"><summary>Does authentication via JWT give security?</summary><p>Security is a very complex concept, and JWT authentication is just one of its elements. For critical applications, it is possible to capture the user&#39;s browser fingerprint and force the user to re-login as soon as they change. Same with IP. In this way you can fight AT theft. Also set very small AT lifetime if RT is used. But the main security measures are not related to authentication, but to constant monitoring of the system for suspicious actions.</p></details><details class="details custom-block"><summary>Authorization</summary><p>If it is necessary to give users different levels of access to site resources, it is common to use either RBAC (Role-based access control) or PBA (Policy-Based Authorization).</p><p>In the first case, users are assigned to roles (admin, manager, user) and the level of access is determined by the role.</p><p>In the second case, it is possible to set permissions for each user individually for any action in a more granular way.</p><p>It should be understood that on the front authorization is done for convenience (the user does not see the sections of the site that are forbidden to him), but the back is responsible for security - he must check each time whether the user has the right to access the requested resource, even if on the front it should not be visible. It is not very difficult to break the front end.</p></details>',7),n=[i];function r(h,c,l,u,d,m){return t(),s("div",null,n)}const g=e(a,[["render",r]]);export{f as __pageData,g as default};
