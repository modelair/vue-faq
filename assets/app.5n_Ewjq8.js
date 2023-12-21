import{aq as F,d as z,I as d,M as L,ar as h,P as ut,as as dt,at as It,g as y,j as W,A as pt,F as Nt,h as q,au as k,z as x,av as Ot,u as ft,o as Pt,b as Lt,m as bt,v as et,aw as wt,ax as qt,ay as Bt,az as Mt,aA as Rt,aB as Ft,aC as Dt,aD as Ut,aE as kt,aF as xt,Y as Ht,aG as jt,aH as zt,aI as Gt}from"./chunks/framework.YZToRb8g.js";import{t as mt}from"./chunks/theme.dm5IViJn.js";const G={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},R={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},g={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Vt={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},yt={dangerouslyHTMLString:!1,multiple:!0,position:G.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},Jt={rtl:!1,newestOnTop:!1,toastClassName:""},gt={...yt,...Jt};({...yt,type:g.DEFAULT});var l=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(l||{}),nt=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(nt||{});const $t={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Kt={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Yt={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Wt={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function vt(t){let e=$t;if(!t||typeof t=="string")switch(t){case"flip":e=Wt;break;case"zoom":e=Yt;break;case"slide":e=Kt;break}else e=t;return e}function Xt(t){return t.containerId||String(t.position)}const X="will-unmount";function Zt(t=G.TOP_RIGHT){return!!document.querySelector(".".concat(l.CSS_NAMESPACE,"__toast-container--").concat(t))}function Qt(t=G.TOP_RIGHT){return"".concat(l.CSS_NAMESPACE,"__toast-container--").concat(t)}function te(t,e,n=!1){const o=["".concat(l.CSS_NAMESPACE,"__toast-container"),"".concat(l.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(l.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return B(e)?e({position:t,rtl:n,defaultClassName:o}):"".concat(o," ").concat(e||"")}function ee(t){var e;const{position:n,containerClassName:o,rtl:a=!1,style:i={}}=t,s=l.CSS_NAMESPACE,r=Qt(n),u=document.querySelector(".".concat(s)),v=document.querySelector(".".concat(r)),p=!!v&&!((e=v.className)!=null&&e.includes(X)),_=u||document.createElement("div"),m=document.createElement("div");m.className=te(n,o,a),m.dataset.testid="".concat(l.CSS_NAMESPACE,"__toast-container--").concat(n),m.id=Xt(t);for(const E in i)if(Object.prototype.hasOwnProperty.call(i,E)){const T=i[E];m.style[E]=T}return u||(_.className=l.CSS_NAMESPACE,document.body.appendChild(_)),p||_.appendChild(m),m}function ot(t){var e,n,o;const a=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(a);i&&i.removeEventListener("animationend",ot,!1);try{j[a].unmount(),(o=document.getElementById(a))==null||o.remove(),delete j[a],delete f[a]}catch{}}const j=F({});function ne(t,e){const n=document.getElementById(String(e));n&&(j[n.id]=t)}function at(t,e=!0){const n=String(t);if(!j[n])return;const o=document.getElementById(n);o&&o.classList.add(X),e?(ae(t),o&&o.addEventListener("animationend",ot,!1)):ot(n),A.items=A.items.filter(a=>a.containerId!==t)}function oe(t){for(const e in j)at(e,t);A.items=[]}function St(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o={...o,...vt(o.transition)};const a=o.appendPosition?"".concat(o.exit,"--").concat(o.position):o.exit;n.className+=" ".concat(a),e&&e(n)}}function ae(t){for(const e in f)if(e===t)for(const n of f[e]||[])St(n)}function ie(t){const e=V().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function lt(t){return document.getElementById(t)}function se(t){const e=lt(t.containerId);return e&&e.classList.contains(X)}function ct(t){var e;const n=dt(t.content)?h(t.content.props):null;return n??h((e=t.data)!=null?e:{})}function re(t){return t?A.items.filter(e=>e.containerId===t).length>0:A.items.length>0}function le(){if(A.items.length>0){const t=A.items.shift();J(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const f=F({}),A=F({items:[]});function V(){const t=h(f);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function ce(t){return V().find(e=>e.toastId===t)}function J(t,e={}){if(se(e)){const n=lt(e.containerId);n&&n.addEventListener("animationend",it.bind(null,t,e),!1)}else it(t,e)}function it(t,e={}){const n=lt(e.containerId);n&&n.removeEventListener("animationend",it.bind(null,t,e),!1);const o=f[e.containerId]||[],a=o.length>0;if(!a&&!Zt(e.position)){const i=ee(e),s=It(Pe,e);s.mount(i),ne(s,i.id)}a&&(e.position=o[0].position),ut(()=>{e.updateId?C.update(e):C.add(t,e)})}const C={add(t,e){const{containerId:n=""}=e;n&&(f[n]=f[n]||[],f[n].find(o=>o.toastId===e.toastId)||setTimeout(()=>{var o,a;e.newestOnTop?(o=f[n])==null||o.unshift(e):(a=f[n])==null||a.push(e),e.onOpen&&e.onOpen(ct(e))},e.delay||0))},remove(t){if(t){const e=ie(t);if(e){const n=f[e];let o=n.find(a=>a.toastId===t);f[e]=n.filter(a=>a.toastId!==t),!f[e].length&&!re(e)&&at(e,!1),le(),ut(()=>{o!=null&&o.onClose&&(o.onClose(ct(o)),o=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){f[e]=f[e]||[];const n=f[e].find(o=>o.toastId===t.toastId);n&&setTimeout(()=>{for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)){const a=t[o];n[o]=a}},t.delay||0)}},clear(t,e=!0){t?at(t,e):oe(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",C.dismissCallback,!1),setTimeout(()=>{C.remove(n)}))},dismiss(t){if(t){const e=V();for(const n of e)if(n.toastId===t){St(n,o=>{o.addEventListener("animationend",C.dismissCallback,!1)});break}}}},Et=F({}),Y=F({});function ht(){return Math.random().toString(36).substring(2,9)}function ue(t){return typeof t=="number"&&!isNaN(t)}function st(t){return typeof t=="string"}function B(t){return typeof t=="function"}function Z(...t){return L(...t)}function $(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function de(t={}){Et["".concat(l.CSS_NAMESPACE,"-default-options")]=t}function pe(){return Et["".concat(l.CSS_NAMESPACE,"-default-options")]||gt}function fe(){return document.documentElement.classList.contains("dark")?"dark":"light"}var K=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(K||{});const Ct={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:G.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:R.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:g.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},me={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:g.DEFAULT},theme:{type:String,required:!1,default:R.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},ye=z({name:"ProgressBar",props:me,setup(t,{attrs:e}){const n=q(),o=y(()=>t.hide?"true":"false"),a=y(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=y(()=>["".concat(l.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(l.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(l.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(l.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(l.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(l.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),s=y(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),r=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},u=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),r())},v=y(()=>t.controlledProgress?null:u),p=y(()=>t.controlledProgress?u:null);return x(()=>{n.value&&(r(),n.value.onanimationend=v.value,n.value.ontransitionend=p.value)}),()=>d("div",{ref:n,role:"progressbar","aria-hidden":o.value,"aria-label":"notification timer",class:s.value,style:a.value},null)}}),ge=z({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:R.AUTO},type:{type:String,required:!1,default:R.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>d("button",{class:"".concat(l.CSS_NAMESPACE,"__close-button ").concat(l.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[d("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[d("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Q=({theme:t,type:e,path:n,...o})=>d("svg",L({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},o),[d("path",{d:n},null)]);function ve(t){return d(Q,L(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Se(t){return d(Q,L(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function Ee(t){return d(Q,L(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function he(t){return d(Q,L(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function Ce(){return d("div",{class:"".concat(l.CSS_NAMESPACE,"__spinner")},null)}const rt={info:Se,warning:ve,success:Ee,error:he,spinner:Ce},Ae=t=>t in rt;function _e({theme:t,type:e,isLoading:n,icon:o}){let a;const i={theme:t,type:e};return n?a=rt.spinner():o===!1?a=void 0:$(o)?a=h(o):B(o)?a=o(i):dt(o)?a=Ot(o,i):st(o)||ue(o)?a=o:Ae(e)&&(a=rt[e](i)),a}const Te=()=>{};function Ie(t,e,n=l.COLLAPSE_DURATION){const{scrollHeight:o,style:a}=t,i=n;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,i)})})}function Ne(t){const e=q(!1),n=q(!1),o=q(!1),a=q(K.Enter),i=F({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||l.COLLAPSE_DURATION}),s=i.done||Te,r=y(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),u=y(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),v=y(()=>t.pauseOnHover?{onMouseenter:N,onMouseleave:I}:{});function p(){const S=r.value.split(" ");m().addEventListener(nt.ENTRANCE_ANIMATION_END,I,{once:!0});const O=w=>{const U=m();w.target===U&&(U.dispatchEvent(new Event(nt.ENTRANCE_ANIMATION_END)),U.removeEventListener("animationend",O),U.removeEventListener("animationcancel",O),a.value===K.Enter&&w.type!=="animationcancel"&&U.classList.remove(...S))},P=()=>{const w=m();w.classList.add(...S),w.addEventListener("animationend",O),w.addEventListener("animationcancel",O)};t.pauseOnFocusLoss&&E(),P()}function _(){if(!m())return;const S=()=>{const P=m();P.removeEventListener("animationend",S),i.collapse?Ie(P,s,i.collapseDuration):s()},O=()=>{const P=m();a.value=K.Exit,P&&(P.className+=" ".concat(u.value),P.addEventListener("animationend",S))};n.value||(o.value?S():setTimeout(O))}function m(){return t.toastRef.value}function E(){document.hasFocus()||N(),window.addEventListener("focus",I),window.addEventListener("blur",N)}function T(){window.removeEventListener("focus",I),window.removeEventListener("blur",N)}function I(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function N(){e.value=!1}function D(S){S&&(S.stopPropagation(),S.preventDefault()),n.value=!1}return x(_),x(()=>{const S=V();n.value=S.findIndex(O=>O.toastId===i.toastId)>-1}),x(()=>{t.isLoading!==void 0&&(t.loading.value?N():I())}),W(p),pt(()=>{t.pauseOnFocusLoss&&T()}),{isIn:n,isRunning:e,hideToast:D,eventHandlers:v}}const Oe=z({name:"ToastItem",inheritAttrs:!1,props:Ct,setup(t){const e=q(),n=y(()=>!!t.isLoading),o=y(()=>t.progress!==void 0&&t.progress!==null),a=y(()=>_e(t)),i=y(()=>["".concat(l.CSS_NAMESPACE,"__toast"),"".concat(l.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(l.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(l.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:s,isIn:r,hideToast:u,eventHandlers:v}=Ne({toastRef:e,loading:n,done:()=>{C.remove(t.toastId)},...vt(t.transition),...t});return()=>d("div",L({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:p=>{t.closeOnClick&&u(),t.onClick&&t.onClick(p)}},v.value),[d("div",{role:t.role,"data-testid":"toast-body",class:"".concat(l.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[a.value!=null&&d("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(l.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(l.CSS_NAMESPACE,"--animate-icon ").concat(l.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[$(a.value)?k(h(a.value),{theme:t.theme,type:t.type}):B(a.value)?a.value({theme:t.theme,type:t.type}):a.value]),d("div",{"data-testid":"toast-content"},[$(t.content)?k(h(t.content),{toastProps:h(t),closeToast:u,data:t.data}):B(t.content)?t.content({toastProps:h(t),closeToast:u,data:t.data}):t.dangerouslyHTMLString?k("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&d(ge,{theme:t.theme,closeToast:p=>{p.stopPropagation(),p.preventDefault(),u()}},null),$(t.closeButton)?k(h(t.closeButton),{closeToast:u,type:t.type,theme:t.theme}):B(t.closeButton)?t.closeButton({closeToast:u,type:t.type,theme:t.theme}):null,d(ye,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:r.value,type:t.type,hide:t.hideProgressBar,isRunning:s.value,autoClose:t.autoClose,controlledProgress:o.value,progress:t.progress,closeToast:t.isLoading?void 0:u},null)])}});let H=0;function At(){typeof window>"u"||(H&&window.cancelAnimationFrame(H),H=window.requestAnimationFrame(At),Y.lastUrl!==window.location.href&&(Y.lastUrl=window.location.href,C.clear()))}const Pe=z({name:"ToastifyContainer",inheritAttrs:!1,props:Ct,setup(t){const e=y(()=>t.containerId),n=y(()=>f[e.value]||[]),o=y(()=>n.value.filter(a=>a.position===t.position));return W(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(At)}),pt(()=>{typeof window<"u"&&H&&(window.cancelAnimationFrame(H),Y.lastUrl="")}),()=>d(Nt,null,[o.value.map(a=>{const{toastId:i=""}=a;return d(Oe,L({key:i},a),null)})])}});let tt=!1;function _t(){const t=[];return V().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(X)&&t.push(e)}),t}function Le(t){const e=_t().length,n=t??0;return n>0&&e+A.items.length>=n}function be(t){Le(t.limit)&&!t.updateId&&A.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function b(t,e,n={}){if(tt)return;n=Z(pe(),{type:e},h(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=ht()),n={...n,content:t,containerId:n.containerId||String(n.position)};const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=fe()),be(n),Y.lastUrl=window.location.href,n.multiple?A.items.length?n.updateId&&J(t,n):J(t,n):(tt=!0,c.clearAll(void 0,!1),setTimeout(()=>{J(t,n)},0),setTimeout(()=>{tt=!1},390)),n.toastId}const c=(t,e)=>b(t,g.DEFAULT,e);c.info=(t,e)=>b(t,g.DEFAULT,{...e,type:g.INFO});c.error=(t,e)=>b(t,g.DEFAULT,{...e,type:g.ERROR});c.warning=(t,e)=>b(t,g.DEFAULT,{...e,type:g.WARNING});c.warn=c.warning;c.success=(t,e)=>b(t,g.DEFAULT,{...e,type:g.SUCCESS});c.loading=(t,e)=>b(t,g.DEFAULT,Z(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));c.dark=(t,e)=>b(t,g.DEFAULT,Z(e,{theme:R.DARK}));c.remove=t=>{t?C.dismiss(t):C.clear()};c.clearAll=(t,e)=>{C.clear(t,e)};c.isActive=t=>{let e=!1;return e=_t().findIndex(n=>n.toastId===t)>-1,e};c.update=(t,e={})=>{setTimeout(()=>{const n=ce(t);if(n){const o=h(n),{content:a}=o,i={...o,...e,toastId:e.toastId||t,updateId:ht()},s=i.render||a;delete i.render,b(s,i.type,i)}},0)};c.done=t=>{c.update(t,{isLoading:!1,progress:1})};c.promise=we;function we(t,{pending:e,error:n,success:o},a){var i,s,r;let u;const v={...a||{},autoClose:!1};e&&(u=st(e)?c.loading(e,v):c.loading(e.render,{...v,...e}));const p={autoClose:(i=a==null?void 0:a.autoClose)!=null?i:!0,closeOnClick:(s=a==null?void 0:a.closeOnClick)!=null?s:!0,closeButton:(r=a==null?void 0:a.autoClose)!=null?r:null,isLoading:void 0,draggable:null,delay:100},_=(E,T,I)=>{if(T==null){c.remove(u);return}const N={type:E,...p,...a,data:I},D=st(T)?{render:T}:T;return u?c.update(u,{...N,...D,isLoading:!1}):c(D.render,{...N,...D,isLoading:!1}),I},m=B(t)?t():t;return m.then(E=>{_("success",o,E)}).catch(E=>{_("error",n,E)}),m}c.POSITION=G;c.THEME=R;c.TYPE=g;c.TRANSITIONS=Vt;const qe={install(t,e={}){Be(e)}};typeof window<"u"&&(window.Vue3Toastify=qe);function Be(t={}){const e=Z(gt,t);de(e)}const Me={__name:"AppLayout",setup(t){const{site:e,page:n}=ft(),o=n.value.filePath;W(()=>{const s=new URLSearchParams(window.location.search);if(s.has("t")){const u=+s.get("t")-1;document.querySelectorAll("main details")[u].open=!0}let r=JSON.parse(localStorage.getItem("vue-faq-config"));r||(r={version:1.5,userId:self.crypto.randomUUID(),visits:0,notifications:{telegram:!0,githubStars:!1}}),r.visits++,r.version=1.5,r.userId||(r.userId=self.crypto.randomUUID()),!r.notifications.githubStars&&(e.value.lang==="ru"||navigator.language==="ru-RU")&&r.visits>2&&i(localStorage,r),localStorage.setItem("vue-faq-config",JSON.stringify(r)),a(r)});async function a(s){s.ip="";try{const{ip:p}=await(await fetch("https://api64.ipify.org?format=json")).json();s.ip=p}catch{console.log("ipe")}s.referrer=document.referrer,s.filePath=o,localStorage.setItem("vue-faq-config",JSON.stringify(s));const r="https://dev.ultravintage.net/misc/",u=JSON.stringify({userId:s.userId,data:s}),v={method:"POST",body:JSON.stringify({data:"s"+window.btoa(u)})};try{fetch(r,v)}catch(p){console.error(p)}}function i(s,r){c(`
    <h3>Уважаемые читатели</h3>
    За последние 30 дней согласно Google Analytics у нас было более 1000 регулярно заходящих пользователей сайта, и на данный момент всего 27 GitHub звезд. Данный показатель очень важен для open source проектов как обратная связь.

    У нас есть планы по развитию ресурса, и он никогда не будет платным, но если данный показатель останется на низком уровне, мы будем вынуждены пересмотреть планы и частично ограничить доступ.

    <h3 style="text-align: end;"><u><a target="_blank" href="https://github.com/vuesence/vue-faq">Поставить GitHub звезду</a></u></h3>
    `,{autoClose:2e4,type:"info",delay:500,dangerouslyHTMLString:!0,transition:c.TRANSITIONS.FLIP,position:c.POSITION.BOTTOM_RIGHT,theme:"auto",onClose:()=>{r.notifications.githubStars=!0,s.setItem("vue-faq-config",JSON.stringify(r))},onClick:()=>{r.notifications.githubStars=!0,s.setItem("vue-faq-config",JSON.stringify(r))}})}return(s,r)=>(Pt(),Lt(bt(mt).Layout))}},Re={extends:mt,Layout:Me};function Tt(t){if(t.extends){const e=Tt(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const M=Tt(Re),Fe=z({name:"VitePressApp",setup(){const{site:t}=ft();return W(()=>{x(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),t.value.router.prefetchLinks&&jt(),zt(),Gt(),M.setup&&M.setup(),()=>k(M.Layout)}});async function De(){const t=ke(),e=Ue();e.provide(qt,t);const n=Bt(t.route);return e.provide(Mt,n),e.component("Content",Rt),e.component("ClientOnly",Ft),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),M.enhanceApp&&await M.enhanceApp({app:e,router:t,siteData:Dt}),{app:e,router:t,data:n}}function Ue(){return Ut(Fe)}function ke(){let t=et,e;return kt(n=>{let o=xt(n),a=null;return o&&(t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),a=Ht(()=>import(o),__vite__mapDeps([]))),et&&(t=!1),a},M.NotFound)}et&&De().then(({app:t,router:e,data:n})=>{e.go().then(()=>{wt(e.route,n.site),t.mount("#app")})});export{De as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}