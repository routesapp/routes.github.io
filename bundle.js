!function(e){function t(t){for(var a,r,l=t[0],o=t[1],u=t[2],c=0,i=[];c<l.length;c++)r=l[c],N[r]&&i.push(N[r][0]),N[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(T&&T(t);i.length;)i.shift()();return C.push.apply(C,u||[]),n()}function n(){for(var e,t=0;t<C.length;t++){for(var n=C[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==N[l]&&(a=!1)}a&&(C.splice(t--,1),e=x(x.s=n[0]))}return e}var a=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(E[e]&&_[e]){for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--b&&0===g&&M()}}(e,t),a&&a(e,t)};var r,l=!0,o="2590a15a1f262a2a9993",u=1e4,c={},i=[],d=[],s=[],f="idle";function p(e){f=e;for(var t=0;t<s.length;t++)s[t].call(null,e)}var m,h,v,b=0,g=0,y={},_={},E={};function w(e){return+e+""===e?+e:e}function P(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return l=e,p("check"),(t=u,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var a=new XMLHttpRequest,r=x.p+""+o+".hot-update.json";a.open("GET",r,!0),a.timeout=t,a.send(null)}catch(e){return n(e)}a.onreadystatechange=function(){if(4===a.readyState)if(0===a.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===a.status)e();else if(200!==a.status&&304!==a.status)n(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(a.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;_={},y={},E=e.c,v=e.h,p("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in h={},N)O(n);return"prepare"===f&&0===g&&0===b&&M(),t});var t}function O(e){E[e]?(_[e]=!0,b++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=x.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):y[e]=!0}function M(){p("ready");var e=m;if(m=null,e)if(l)Promise.resolve().then(function(){return j(l)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function j(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,a,r,l,u;function d(e){for(var t=[e],n={},a=t.slice().map(function(e){return{chain:[e],id:e}});a.length>0;){var r=a.pop(),o=r.id,u=r.chain;if((l=k[o])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:u,moduleId:o};if(l.hot._main)return{type:"unaccepted",chain:u,moduleId:o};for(var c=0;c<l.parents.length;c++){var i=l.parents[c],d=k[i];if(d){if(d.hot._declinedDependencies[o])return{type:"declined",chain:u.concat([i]),moduleId:o,parentId:i};-1===t.indexOf(i)&&(d.hot._acceptedDependencies[o]?(n[i]||(n[i]=[]),s(n[i],[o])):(delete n[i],t.push(i),a.push({chain:u.concat([i]),id:i})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];-1===e.indexOf(a)&&e.push(a)}}t=t||{};var m={},b=[],g={},y=function(){console.warn("[HMR] unexpected require("+P.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var P;u=w(_);var O=!1,M=!1,j=!1,C="";switch((P=h[_]?d(u):{type:"disposed",moduleId:_}).chain&&(C="\nUpdate propagation: "+P.chain.join(" -> ")),P.type){case"self-declined":t.onDeclined&&t.onDeclined(P),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+P.moduleId+C));break;case"declined":t.onDeclined&&t.onDeclined(P),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+P.moduleId+" in "+P.parentId+C));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(P),t.ignoreUnaccepted||(O=new Error("Aborted because "+u+" is not accepted"+C));break;case"accepted":t.onAccepted&&t.onAccepted(P),M=!0;break;case"disposed":t.onDisposed&&t.onDisposed(P),j=!0;break;default:throw new Error("Unexception type "+P.type)}if(O)return p("abort"),Promise.reject(O);if(M)for(u in g[u]=h[u],s(b,P.outdatedModules),P.outdatedDependencies)Object.prototype.hasOwnProperty.call(P.outdatedDependencies,u)&&(m[u]||(m[u]=[]),s(m[u],P.outdatedDependencies[u]));j&&(s(b,[P.moduleId]),g[u]=y)}var D,H=[];for(a=0;a<b.length;a++)u=b[a],k[u]&&k[u].hot._selfAccepted&&H.push({module:u,errorHandler:k[u].hot._selfAccepted});p("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete N[e]}(e)});for(var A,T,I=b.slice();I.length>0;)if(u=I.pop(),l=k[u]){var L={},S=l.hot._disposeHandlers;for(r=0;r<S.length;r++)(n=S[r])(L);for(c[u]=L,l.hot.active=!1,delete k[u],delete m[u],r=0;r<l.children.length;r++){var U=k[l.children[r]];U&&(D=U.parents.indexOf(u))>=0&&U.parents.splice(D,1)}}for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(l=k[u]))for(T=m[u],r=0;r<T.length;r++)A=T[r],(D=l.children.indexOf(A))>=0&&l.children.splice(D,1);for(u in p("apply"),o=v,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var F=null;for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(l=k[u])){T=m[u];var R=[];for(a=0;a<T.length;a++)if(A=T[a],n=l.hot._acceptedDependencies[A]){if(-1!==R.indexOf(n))continue;R.push(n)}for(a=0;a<R.length;a++){n=R[a];try{n(T)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:T[a],error:e}),t.ignoreErrored||F||(F=e)}}}for(a=0;a<H.length;a++){var B=H[a];u=B.module,i=[u];try{x(u)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||F||(F=e)}}return F?(p("fail"),Promise.reject(F)):(p("idle"),new Promise(function(e){e(b)}))}var k={},N={1:0},C=[];function x(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._acceptedDependencies[e[a]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:P,apply:j,status:function(e){if(!e)return f;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:c[e]};return r=void 0,t}(t),parents:(d=i,i=[],d),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=k[e];if(!t)return x;var n=function(n){return t.hot.active?(k[n]?-1===k[n].parents.indexOf(e)&&k[n].parents.push(e):(i=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),i=[]),x(n)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(t){x[e]=t}}};for(var l in x)Object.prototype.hasOwnProperty.call(x,l)&&"e"!==l&&Object.defineProperty(n,l,a(l));return n.e=function(e){return"ready"===f&&p("prepare"),g++,x.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(y[e]||O(e),0===g&&0===b&&M())}},n}(t)),n.l=!0,n.exports}x.m=e,x.c=k,x.d=function(e,t,n){x.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,t){if(1&t&&(e=x(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(x.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)x.d(n,a,function(t){return e[t]}.bind(null,a));return n},x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,"a",t),t},x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},x.p="/",x.h=function(){return o};var D=window.webpackJsonp=window.webpackJsonp||[],H=D.push.bind(D);D.push=t,D=D.slice();for(var A=0;A<D.length;A++)t(D[A]);var T=H;C.push([89,0]),n()}([,,,,,,,,,,,function(e){e.exports={image:"https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/3586_800x600_kamenec.jpg",image1:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Kamianets-Podilskyi-1.jpg/270px-Kamianets-Podilskyi-1.jpg",image2:"http://rs.img.com.ua/crop?v2=1&w=600&h=0&url=%2F%2Fbm.img.com.ua%2Fberlin%2Fstorage%2Fnews%2Forig%2F8%2F36%2Fc6156d9ec2fd2b03971d4888404c1368.jpg",image3:"http://www.pizzatravel.com.ua/uploads/2014/21498.jpg",heading:"Каменец-Подольский замок",description:"Старый замок Каменца-Подольского — средневековый замок города Каменец-Подольский, один из исторических памятников Украины."}},,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1));n(119);var r=l(n(55));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement("button",{className:"pan-left-button",onClick:e.onClick},a.default.createElement("img",{className:"pan-left-button-icon",src:r.default,alt:"Pan left arrow icon"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1));n(119);var r=l(n(56));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement("button",{className:"pan-down-button",onClick:e.onClick},a.default.createElement("img",{className:"pan-down-button-icon",src:r.default,alt:"Pan down arrow icon"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1));n(119);var r=l(n(57));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement("button",{className:"pan-right-button",onClick:e.onClick},a.default.createElement("img",{className:"pan-right-button-icon",src:r.default,alt:"Pan right arrow icon"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1));n(119);var r=l(n(58));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement("button",{className:"pan-up-button",onClick:e.onClick},a.default.createElement("img",{className:"pan-up-button-icon",src:r.default,alt:"Pan up arrow icon"}))}},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={map:"Current Map"};t.default=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(21),l=(a=n(51))&&a.__esModule?a:{default:a};t.default=function(e){return(0,r.createStore)(l.default,e)}},function(e,t,n){e.exports=n.p+"src/components/buttons/button-icons/routes-logo-orange-bold-100-100.svg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1));n(115);var r=l(n(53));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("button",{className:"logo-button"},a.default.createElement("img",{className:"logo-image",src:r.default,alt:"Routes Application logo"}))}},function(e,t,n){e.exports=n.p+"src/components/buttons/button-icons/arrow-left-sign-to-navigate.svg"},function(e,t,n){e.exports=n.p+"src/components/buttons/button-icons/arrow-down-red-sign-to-navigate.svg"},function(e,t,n){e.exports=n.p+"src/components/buttons/button-icons/arrow-right-sign-to-navigate.svg"},function(e,t,n){e.exports=n.p+"src/components/buttons/button-icons/arrow-up-blue-sign-to-navigate.svg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(1)),r=(c(n(2)),n(13),c(n(28)),c(n(27))),l=c(n(26)),o=c(n(25)),u=c(n(24));function c(e){return e&&e.__esModule?e:{default:e}}n(117),t.default=function(e){return a.default.createElement("div",{className:"pan-controller"},a.default.createElement(r.default,{onClick:e.onClick}),a.default.createElement(l.default,null),a.default.createElement(o.default,null),a.default.createElement(u.default,null))}},function(e){e.exports={"user-name":"Vasya",userAvatar:"https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg.pagespeed.ce.F3X__0vZO7.jpg"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1)),r=l(n(60));function l(e){return e&&e.__esModule?e:{default:e}}n(127),t.default=function(){return a.default.createElement("img",{className:"avatar-image",src:r.default.userAvatar,alt:"avatar"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1)),r=(l(n(11)),l(n(61)));function l(e){return e&&e.__esModule?e:{default:e}}n(125),t.default=function(){return a.default.createElement("article",{className:"popup-comment-container"},a.default.createElement("div",{className:"comment-avatar-area"},a.default.createElement(r.default,null)),a.default.createElement("div",{className:"comment-content-area"},a.default.createElement("h2",{className:"comment-author-name"},"Vasya"),a.default.createElement("time",{className:"comment-date",dateTime:"2018-08-07"},"07-08-2018"),a.default.createElement("div",{className:"comment-text"},a.default.createElement("p",null,"Место супер! Рекомендую всем"),a.default.createElement("p",null,"Бывал там не раз. Все интерсно и замечательно. Посетите обязательно старый город - не пожалеете. С наилучшими - Vasya!"))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(1)),r=o(n(11)),l=o(n(62));function o(e){return e&&e.__esModule?e:{default:e}}n(123),t.default=function(){return a.default.createElement("div",{className:"testimonials-section-wrapper"},a.default.createElement("h1",{className:"description-section-heading"},r.default.heading),a.default.createElement(l.default,null),a.default.createElement(l.default,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=(a=n(1))&&a.__esModule?a:{default:a};n(129),t.default=function(){return r.default.createElement("div",{className:"additional-section-wrapper"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1)),r=l(n(11));function l(e){return e&&e.__esModule?e:{default:e}}n(131),t.default=function(){return a.default.createElement("div",{className:"description-section-wrapper"},a.default.createElement("h1",{className:"description-section-heading"},r.default.heading),a.default.createElement("p",null,r.default.description,r.default.description))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1)),r=l(n(11));function l(e){return e&&e.__esModule?e:{default:e}}n(135),t.default=function(){return a.default.createElement("div",{className:"popup-image-thumbnail-wrapper"},a.default.createElement("ul",{className:"popup-image-thumbnail-list js-popup-image-thumbnail-navigation"},a.default.createElement("li",{className:"popup-image-thumbnail-item"},a.default.createElement("img",{className:"popup-image-thumbnail",src:r.default.image,alt:"img"})),a.default.createElement("li",{className:"popup-image-thumbnail-item"},a.default.createElement("img",{className:"popup-image-thumbnail",src:r.default.image1,alt:"img"})),a.default.createElement("li",{className:"popup-image-thumbnail-item"},a.default.createElement("img",{className:"popup-image-thumbnail",src:r.default.image2,alt:"img"})),a.default.createElement("li",{className:"popup-image-thumbnail-item"},a.default.createElement("img",{className:"popup-image-thumbnail",src:r.default.image3,alt:"img"})),a.default.createElement("li",{className:"popup-image-thumbnail-item"},a.default.createElement("img",{className:"popup-image-thumbnail",src:r.default.image1,alt:"img"}))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1)),r=l(n(66));function l(e){return e&&e.__esModule?e:{default:e}}l(n(11)),n(133),n(135),t.default=function(){return a.default.createElement("div",{className:"image-section-wrapper",id:"image-section"},a.default.createElement(r.default,{className:"popup-image-thumbnail-wrapper"}))}},function(e,t,n){e.exports=n.p+"src/components/buttons/button-icons/add-comment-icon-v1.svg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1));n(137);var r=l(n(68));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("button",{className:"button add-comment-button",title:"Добавить отзыв"},a.default.createElement("img",{className:"add-comment-button-img",src:r.default,alt:"Add comment"}),a.default.createElement("span",null,"Добавить",a.default.createElement("br",null),"отзыв"))}},function(e,t,n){e.exports=n.p+"src/components/buttons/button-icons/add-icon-without-fill.svg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1));n(139);var r=l(n(70));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("button",{className:"button add-button",type:"button",title:"Добавить в маршрут"},a.default.createElement("img",{className:"add-button-img",src:r.default,alt:"Button icon Add to the route "}),a.default.createElement("span",null,"Добавить в маршрут"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(1));function r(e){return e&&e.__esModule?e:{default:e}}r(n(2)),n(141),t.default=function(){return a.default.createElement("button",{className:"leaflet-popup-close-button",title:"Закрыть"},a.default.createElement("span",{className:"close-symbol"},"x"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n(1)),r=n(13),l=n(36);n(145),s(n(72));var o=s(n(71)),u=s(n(69)),c=s(n(67)),i=s(n(65)),d=(s(n(64)),s(n(63)));function s(e){return e&&e.__esModule?e:{default:e}}n(121),n(141),t.default=function(){return a.default.createElement(r.Popup,{className:"leaflet-popup-content-wrapper leaflet-popup"},a.default.createElement("div",{className:"leaflet-popup-content"},a.default.createElement(l.Tabs,null,a.default.createElement(l.TabList,null,a.default.createElement(l.Tab,null,"МЕСТО"),a.default.createElement(l.Tab,null,"ПОДРОБНЕЕ"),a.default.createElement(l.Tab,null,"ОТЗЫВЫ")),a.default.createElement(l.TabPanel,null,a.default.createElement(c.default,null),a.default.createElement(i.default,null),a.default.createElement(o.default,null)),a.default.createElement(l.TabPanel,null,a.default.createElement("h2",null,"Any content 2"),a.default.createElement(o.default,null)),a.default.createElement(l.TabPanel,null,a.default.createElement(d.default,null),a.default.createElement(u.default,null),a.default.createElement(o.default,null)))))}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=f(n(1)),l=(f(n(2)),n(13)),o=(f(n(28)),f(n(73))),u=(f(n(59)),f(n(27))),c=f(n(26)),i=f(n(25)),d=f(n(24)),s=f(n(54));function f(e){return e&&e.__esModule?e:{default:e}}n(117),n(113),n(110),n(105),n(103);var p=[49,32],m=8,h=l.LayersControl.Overlay,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={currentZoomLevel:m},n.state={currentPosition:p},n.handleUpPanClick=n.handleUpPanClick.bind(n),n.handleRightPanClick=n.handleRightPanClick.bind(n),n.handleDownPanClick=n.handleDownPanClick.bind(n),n.handleLeftPanClick=n.handleLeftPanClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a(t,[{key:"componentDidMount",value:function(){var e=this,t=this.leafletMap.leafletElement;t.on("zoomed",function(){var n=t.getZoom();e.handleZoomLevelChange(n)}),t.on("panned",function(){var n=t.panBy();e.handlePositionChange(n)})}},{key:"handleZoomLevelChange",value:function(e){this.setState({currentZoomLevel:e})}},{key:"handlePositionChange",value:function(e){this.setState({currentPosition:e})}},{key:"handleUpPanClick",value:function(){this.leafletMap.leafletElement.panBy([0,-100])}},{key:"handleRightPanClick",value:function(){this.leafletMap.leafletElement.panBy([100,0])}},{key:"handleDownPanClick",value:function(){this.leafletMap.leafletElement.panBy([0,100])}},{key:"handleLeftPanClick",value:function(){this.leafletMap.leafletElement.panBy([-100,0])}},{key:"render",value:function(){var e=this;return r.default.createElement(l.Map,{ref:function(t){e.leafletMap=t},center:p,zoom:m},r.default.createElement(l.TileLayer,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.default.createElement(l.LayersControl,null,r.default.createElement(h,{name:"Custom marker"},r.default.createElement(l.Marker,{position:p},r.default.createElement(o.default,null)))),r.default.createElement(s.default,null),r.default.createElement("div",{className:"pan-controller"},r.default.createElement(u.default,{onClick:this.handleUpPanClick}),r.default.createElement(c.default,{onClick:this.handleRightPanClick}),r.default.createElement(i.default,{onClick:this.handleDownPanClick}),r.default.createElement(d.default,{onClick:this.handleLeftPanClick})))}}]),t}();t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1)),r=l(n(76));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("div",null,a.default.createElement(r.default,null))}},,,,,,,,,,,function(e,t,n){"use strict";var a=c(n(1)),r=c(n(12)),l=n(37),o=c(n(77)),u=c(n(52));function c(e){return e&&e.__esModule?e:{default:e}}n(101),n(99);var i=(0,u.default)();r.default.render(a.default.createElement(l.Provider,{store:i},a.default.createElement(o.default,null)),document.getElementById("root"))},function(e,t,n){n(88),e.exports=n(50)},,,,,,,,,,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,,,,,,,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){}]);
//# sourceMappingURL=bundle.js.map