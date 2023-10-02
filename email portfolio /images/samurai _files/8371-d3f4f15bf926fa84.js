"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8371],{88371:function(e,t,n){n.d(t,{n:function(){return f},Z:function(){return v}});var r=n(85893),o=n(67294),a=n(68715),i=n(19965),l=n(38264),u=n(5506),s=n(88305),d=n(95564),c=n(45332),f=function(e){var t=Math.floor(e),n=Math.round(e%1*60);return"".concat(t,"h").concat(n>0?" ".concat(n,"m"):"")};function v(e){var t,n,v=e.session,m=e.setInfoOpen,h=(0,s.u)(d.r),y=h.queue,g=h.userAPIInfo,b=(0,o.useMemo)((function(){var e,t,n,o,l;return[{group:"Current Usage",open:!0,items:[{name:"Hours Remaining",value:f((null===g||void 0===g||null===(e=g.preferences)||void 0===e?void 0:e.job_credits)/4/60/60)||"..."},{name:"Metered Jobs",value:(null===g||void 0===g||null===(t=g.usage_metered_count)||void 0===t?void 0:t.toString())||"..."},{name:"Metered Hours",value:(Math.round((null===g||void 0===g?void 0:g.usage_metered_hours)/3600*10)/10).toString()||"..."}]},{group:"Lifetime Usage",open:!0,items:[{name:"Total Jobs",value:(null===g||void 0===g||null===(n=g.usage_lifetime_count)||void 0===n?void 0:n.toString())||"..."},{name:"Total Hours",value:Math.round((null===g||void 0===g?void 0:g.usage_lifetime_hours)/3600).toString()||"..."},{name:"Relaxed Jobs",value:(null===g||void 0===g||null===(o=g.usage_relaxed_count)||void 0===o?void 0:o.toString())||"..."},{name:"Relaxed Hours",value:Math.round((null===g||void 0===g?void 0:g.usage_relaxed_hours)/3600).toString()||"..."}]},{group:"Subscription",open:!0,items:[{name:"Sub Status",value:(0,r.jsx)("span",{className:"capitalize",children:(null===g||void 0===g?void 0:g.subscription_status)||"..."})},{name:"Sub Type",value:(null===g||void 0===g?void 0:g.subscription_type)||"..."},{name:"Latest Renewal",value:new Date(1e3*(null===g||void 0===g?void 0:g.subscription_last_renewed)).toLocaleDateString()||"..."},{name:"Private Access",value:(null===g||void 0===g||null===(l=g.preferences)||void 0===l?void 0:l.private_access)?(0,r.jsx)(a.Z,{height:20,className:"text-emerald-700"}):(0,r.jsx)(i.Z,{height:20,className:"text-slate-600"})}]},{group:"Job Queue",open:!0,custom:(0,r.jsx)(p,{queue:y})}]}),[g,y]);return(0,r.jsxs)("div",{className:"flex overflow-y-auto relative flex-col shrink-0 justify-start items-center items-stretch p-3 pl-3 mt-16 w-full sm:overflow-y-hidden sm:p-4 sm:pt-0 sm:pl-0 sm:mt-20 sm:w-auto lg:p-0 lg:mt-0 miniScrollbar",children:[(0,r.jsx)("div",{className:"flex-row shrink-0 gap-1 justify-start items-end w-full max-w-full lg:flex",children:(0,r.jsxs)("div",{className:(0,c.CN)("p-[0.65rem] shrink min-w-0 flex items-center gap-2 px-4 hover:bg-darkBlue-500 hover:text-slate-300 text-sm bg-darkBlue-700 translate-y-[1px]  border border-indigo-500/10 rounded-t-xl text-slate-400","!bg-bgDark-700 !text-slate-100 z-10 border-b-[#040712] border-indigo-500/10"),children:[(0,r.jsx)(l.Z,{height:20,className:"text-indigo-500"}),(0,r.jsx)("span",{className:"shrink truncate",children:"Information"}),(0,r.jsx)("button",{className:"p-0.5 text-slate-400 hover:text-slate-100 hover:bg-uiBlue-500/70 rounded",onClick:function(){m(!1)},children:(0,r.jsx)(u.Z,{height:16})})]})}),(0,r.jsxs)("div",{className:"flex relative flex-col gap-2 w-full sm:w-64",children:[(0,r.jsx)("div",{className:"flex flex-col gap-4 p-4 h-full text-slate-400 bg-bgDark-700 rounded-lg border border-indigo-500/10 lg:rounded-tl-none",children:(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("button",{type:"button",className:"group flex justify-between items-center pb-1 text-white hover:underline underline-offset-4",children:[null===v||void 0===v||null===(t=v.user)||void 0===t?void 0:t.name,"#",null===v||void 0===v||null===(n=v.user)||void 0===n?void 0:n.discriminator]}),(0,r.jsx)("div",{className:"flex flex-col gap-2 justify-evenly w-full text-indigo-600",children:(0,r.jsxs)("div",{className:"flex overflow-hidden relative grow justify-between py-1.5 px-3 text-sm hover:text-indigo-500 bg-indigo-700/30 hover:bg-indigo-500/20 rounded border-indigo-500/20 transition .border",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 bg-blue-600/20 rounded",style:{width:"".concat(null===g||void 0===g?void 0:g.gpu_time_left_percentage,"%")}}),(0,r.jsxs)("span",{className:"text-indigo-200 bg-blend-exclusion",children:[Math.round(null===g||void 0===g?void 0:g.gpu_time_left_percentage),"% Remaining"]})]})})]})}),b.map((function(e,t){var n=e.group,o=e.items,a=e.custom;return(0,r.jsxs)("div",{className:"flex flex-col w-full h-full bg-bgDark-700 rounded-xl border border-indigo-500/10 odd:.text-blue-500 even:.text-teal-500",children:[(0,r.jsx)("div",{type:"button",className:"group flex justify-between p-4 capitalize bg-black/5 rounded-t-xl",children:(0,r.jsx)("h4",{className:"text-sm tracking-wide text-slate-300 group-hover:text-white select-none",children:n})}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 pb-4",children:[(0,r.jsx)("hr",{className:"w-full border-t first-of-type:border-indigo-500/10 border-indigo-500/5"}),a||o.map((function(e,t){var n=e.name,o=e.value;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:(0,c.CN)("flex gap-2 [&:nth-of-type(even)]:text-gray-600/70 [&:nth-of-type(odd)]:text-gray-600 [n] justify-between px-4"),children:[(0,r.jsx)("h3",{className:(0,c.CN)("text-sm capitalize shrink-0 "," "),children:n}),(0,r.jsx)("p",{className:"text-sm text-gray-400",children:o})]},t)})}))]})]},n)}))]})]})}var p=function(e){var t=e.queue;return(0,r.jsx)("div",{className:"flex flex-col gap-2 justify-start items-start px-4",children:(null===t||void 0===t?void 0:t.length)>0?(0,r.jsxs)("p",{className:"text-sm text-slate-400",children:[null===t||void 0===t?void 0:t.length," Jobs in Queue"]}):(0,r.jsx)("p",{className:"text-sm text-slate-400",children:"No Jobs in Queue"})})}},95564:function(e,t,n){n.d(t,{r:function(){return w}});var r=n(34051),o=n.n(r),a=n(67294),i=n(51039),l=n(33299),u=n(26209),s=n(95591),d=n(88305),c=n(37485),f=n(45332),v=n(73461);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(s){return void n(s)}l.done?t(u):Promise.resolve(u).then(r,o)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}var j=function(e){return"singleplayer_".concat(e)};function _(e,t){var n,r,o,a=y({},e),i={},l=j(t.userID),u=t.payload.platform_channel_id!==l?y({},a[l]):{};switch(t.type){case"add":return n=h({},t.payload.platform_channel_id,y(h({},t.payload.id,t.payload),a[t.payload.platform_channel_id])),t.payload.platform_channel_id!==l&&t.userID===t.payload.user_id&&(i=h({},l,y(h({},t.payload.id,t.payload),u))),y({},a,i,n);case"add-queue":return n={queue:y({},a.queue,h({},t.payload.id,t.payload))},y({},a,n);case"load-queue":return y({},a,n={queue:t.payload});case"unqueue":return n=h({},t.payload.platform_channel_id,y(h({},t.payload.id,t.payload),a[t.payload.platform_channel_id].jobs)),t.payload.platform_channel_id!==l&&t.userID===t.payload.user_id&&(i=h({},l,y(h({},t.payload.id,t.payload),u))),y({},a,i,n);case"remove":return delete a[t.room][t.payload.id],a[l][t.payload.id]&&delete a[l][t.payload.id],a;case"update":var s,d=e.version;(null===(s=a[t.payload.platform_channel_id])||void 0===s?void 0:s[t.payload.id])&&(r=a[t.payload.platform_channel_id][t.payload.id],o=t.payload,r.id!==o.id||r.current_status!==o.current_status)&&(d+=1);try{a[t.payload.platform_channel_id][t.payload.id]=t.payload}catch(c){console.log(c)}return a[l][t.payload.id]&&(a[l][t.payload.id]=t.payload),y({},a,{version:d});default:return e}}var w=(0,d.f)((function(){var e,t,n,r,d,p=(0,l.useSession)().data,x=(0,i.useLiveQuery)((r=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.db.genSessions.where("archived").equals(0).sortBy("created");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(n,o){var a=r.apply(e,t);function i(e){m(a,n,o,i,l,"next",e)}function l(e){m(a,n,o,i,l,"throw",e)}i(void 0)}))})),w=g(a.useState({id:j(null===p||void 0===p||null===(e=p.user)||void 0===e?void 0:e.id),name:"Home Workspace"}),2),N=w[0],S=w[1],I=(0,a.useReducer)(_,(h(d={},null===N||void 0===N?void 0:N.id,{}),h(d,"queue",{}),h(d,"version",0),d)),O=I[0],k=I[1],P=(0,a.useReducer)((function(e,t){return y({},e,h({},t.payload.id,!0))}),{}),R=P[0],q=P[1],A=a.useCallback((function(e){var t;return k(y({},e,{room:null===N||void 0===N?void 0:N.id,userID:null===p||void 0===p||null===(t=p.user)||void 0===t?void 0:t.id}))}),[null===N||void 0===N?void 0:N.id,null===p||void 0===p||null===(t=p.user)||void 0===t?void 0:t.id]),D=(0,a.useMemo)((function(){return O[null===N||void 0===N?void 0:N.id]?Object.values(O[null===N||void 0===N?void 0:N.id]):[]}),[O,null===N||void 0===N?void 0:N.id]),E=(0,s.ZP)("/api/app/users/queue/?userId=".concat(null===p||void 0===p||null===(n=p.user)||void 0===n?void 0:n.id),f.EE,{refreshInterval:1e4,revalidateOnMount:!0,revalidateOnFocus:!0,fallbackData:[]}),M=E.data,C=E.mutate,J=(0,s.ZP)((null===v.userInfo||void 0===v.userInfo?void 0:v.userInfo.id)?"/api/app/users/info/?userId=".concat(null===v.userInfo||void 0===v.userInfo?void 0:v.userInfo.id):null,f.EE,{revalidateOnMount:!0,revalidateOnFocus:!1,refreshInterval:0,revalidateOnReconnect:!0}),Z=J.data,T=(J.error,J.mutate),B=(0,a.useRef)([]);return(0,a.useEffect)((function(){var e=null===M||void 0===M?void 0:M.waiting;try{var t;(null===B||void 0===B||null===(t=B.current)||void 0===t?void 0:t.filter((function(t){return!e.includes(t)}))).forEach((function(e){(0,u.Z)((function(){return(0,f.Gf)("".concat("https://www.midjourney.com","/api/app/job-status/"),{jobIds:[e],useWrite:!0,includeActions:!0}).then((function(e){A({type:"add",payload:e})}))}),{retries:5,onFailedAttempt:console.error})}))}catch(n){console.error(n)}B.current=e?b(e):[]}),[A,null===M||void 0===M?void 0:M.waiting]),{rooms:x,room:N,setRoom:S,feed:O,version:null===O||void 0===O?void 0:O.version,feedDispatch:A,activeFeed:D,queue:M,queueMutate:C,hiddenJobs:R,hiddenJobsDispatch:q,userAPIInfo:Z,refreshInfo:T}}))},37485:function(e,t,n){n.d(t,{db:function(){return s}});var r=n(49520);function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function a(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}var l=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}var s=new(function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,e);var t=u(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=t.call(this,"mjDatabase2")).version(1).stores({gridUpscales:"++gridId, ids",genSessions:"id, name, created, archived"}),e.version(2).stores({gridUpscales:"++gridId, ids",genSessions:"id, name, created, archived",genSettings:"++id, name, created, archived"}),e.version(3).stores({gridUpscales:"++gridId, ids",genSessions:"id, name, created, archived",genSettings:"++id, name, created, archived"}),e}return n}(r.default))}}]);