(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0d68f98b":"4ca8fe90","chunk-2d0ac40c":"79c08028","chunk-2d0efc70":"3cee98d7","chunk-2d20813a":"820e8465","chunk-2d2086b7":"c34732c7","chunk-2d20f5a4":"229b7340","chunk-2d210c47":"a57618c0","chunk-2d214009":"0c98f6fc","chunk-2d216bf5":"e82eefa7","chunk-2d225a31":"e506b859","chunk-2d22d746":"b0ad2a32","chunk-2d2308ce":"6be4a92e","chunk-582feca5":"a3942ba9","chunk-676d6b7e":"31592427"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0ba6":function(t,e,a){t.exports=a.p+"img/robot.9764124a.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("NavBar"),a("router-view")],1)},r=[],s=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("div",{attrs:{id:"page-top"}},[n("b-navbar-nav",{staticClass:"navbar navbar-expand-lg bg-secondary fixed-top",attrs:{id:"mainNav"}},[n("div",{staticClass:"container"},[n("img",{staticClass:"img-fluid",staticStyle:{width:"129px",height:"59px"},attrs:{src:a("7c11")}}),n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand js-scroll-trigger"},[n("b-nav-item",{attrs:{to:"/"}},[t._v("WEB & IA ")])],1),n("button",{staticClass:"navbar-toggler navbar-toggler-right  font-weight-bold  bg-primary text-white rounded",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v("Menu "),n("i",{staticClass:"fas fa-bars"})]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[n("b-nav-item",{attrs:{to:"/Registo"}},[t._v("Registo")])],1),n("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[n("b-nav-item",{attrs:{to:"/AI4K12"}},[t._v("AI4K12")])],1),n("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[n("b-nav-item",{attrs:{to:"/repositorio"}},[t._v("Repositório")])],1),n("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[n("b-nav-item",{attrs:{to:"/acerca"}},[t._v("Acerca")])],1),n("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[n("b-nav-item",{attrs:{to:"/noticias"}},[t._v("Notícias")])],1),n("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[n("b-nav-item",{attrs:{to:"/contato"}},[t._v("Contactos")])],1)])])])])])],1)])}),o=[],c=a("1da1"),l=(a("96cf"),{name:"app",data:function(){return{activeUser:null}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.refreshActiveUser();case 2:case"end":return e.stop()}}),e)})))()},watch:{$route:"refreshActiveUser"},methods:{login:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$auth.signInWithRedirect();case 1:case"end":return e.stop()}}),e)})))()},refreshActiveUser:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.authState.isAuthenticated){e.next=4;break}return e.next=3,t.$auth.getUser();case 3:t.activeUser=e.sent;case 4:case"end":return e.stop()}}),e)})))()},logout:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.signOut();case 2:return e.next=4,t.refreshActiveUser();case 4:t.$router.push("/");case 5:case"end":return e.stop()}}),e)})))()}}}),u=l,d=a("2877"),p=Object(d["a"])(u,s,o,!1,null,null,null),f=p.exports,v={name:"App",components:{NavBar:f}},m=v,h=(a("034f"),Object(d["a"])(m,i,r,!1,null,null,null)),b=h.exports,g=a("a18c"),C=a("5f5b");n["default"].use(C["a"]),n["default"].config.productionTip=!0,new n["default"]({router:g["a"],render:function(t){return t(b)}}).$mount("#app")},"7c11":function(t,e,a){t.exports=a.p+"img/uac.7cde82c5.png"},"85ec":function(t,e,a){},a18c:function(t,e,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0");var n=a("2b0e"),i=a("8c4f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("header",{staticClass:"masthead bg-primary text-white text-center"},[n("div",{staticClass:"b-container d-flex align-items-center flex-column"},[n("img",{staticClass:"masthead-avatar mt-0 mb-4",attrs:{src:a("0ba6"),alt:"Robot"}}),n("h6",{staticClass:"masthead-heading test-uppercase mb-0"},[t._v(" Plataforma Web "),n("p",[t._v("de Inteligência Artificial")])]),n("div",{staticClass:"divider-custom divider-light"},[n("div",{staticClass:"divider-custom-line"}),n("div",{staticClass:"divider-custom-icon"},[n("i",{staticClass:"fas fa-brain"})]),n("div",{staticClass:"divider-custom-line"})]),n("p",{staticClass:"pre-wrap masthead-subheading font-weight-light mb-5"},[t._v(" Para contribuir para o ensino da IA e em sintonia com a iniciativa "),n("b-link",{staticClass:"text-white",attrs:{href:"https://ai4k12.org/",target:"_BLANK"}},[n("ins",[t._v("AI4K12")])]),t._v(" ! ")],1)])]),n("section",{staticClass:"page-section bg-primary text-white mt-5 mb-0",attrs:{id:"about"}},[n("div",{staticClass:"b-container"},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"page-section-heading d-inline-block text-white mt-1 mb-0"},[t._v(" Acerca deste Projeto ")])]),n("div",{staticClass:"divider-custom divider-light"},[n("div",{staticClass:"divider-custom-line"}),n("div",{staticClass:"divider-custom-icon"},[n("i",{staticClass:"fas fa-brain"})]),n("div",{staticClass:"divider-custom-line"})]),n("br"),n("br"),n("br"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 ml-auto"},[n("p",{staticClass:"pre-wrap lead",staticStyle:{"text-align":"center"}},[t._v(" Este é um projeto com o apoio do Grupo de Robótica e Inteligência Artificial da Universidade dos Açores ( "),n("b-link",{staticClass:"text-white",attrs:{href:"https://gria.uac.pt",target:"_BLANK"}},[n("ins",[t._v("GRIA")])]),t._v(" ) e do repositório "),n("b-link",{staticClass:"text-white",attrs:{href:"http://re-mar.uac.pt",target:"_BLANK"}},[n("ins",[t._v("Re-Mar")])]),t._v(" com o objetivo de contribuir para o ensino da Inteligência Artificial ( IA ) em meio escolar e em sintonia com a iniciativa mundial "),n("a",{staticClass:"text-white",on:{click:function(e){return t.AI4K12()}}},[n("b",[t._v("AI4K12")])]),t._v(" e maioritariamente para os níveis de ensino do 3º ciclo e secundário.")],1)]),n("div",{staticClass:"col-lg-4 mr-auto"},[n("p",{staticClass:"pre-wrap lead",staticStyle:{"text-align":"center"}},[t._v(" É neste sentido que são disponibilizadas ferramentas, com recursos didáticos associados, de forma livre, prática e acessível e classificadas em cinco áreas ou ideias predominantes do ensino da IA, no "),n("a",{staticClass:"text-white",on:{click:function(e){return t.repositorio()}}},[n("b",[t._v("Repositório.")])]),t._v(" De forma a receber a Newsletter e a ficarmos com o seu contacto, pode e deve efetuar o seu registo "),n("a",{staticClass:"text-white",on:{click:function(e){return t.registo()}}},[n("b",[t._v("aqui."),n("br")])]),t._v(" Para qualquer questão relacionada com os dados fornecidos, ou outra, pode também contactar-nos diretamente "),n("a",{staticClass:"text-white",on:{click:function(e){return t.contato()}}},[n("b",[t._v("aqui")])])]),n("p")])])])]),n("br"),n("br"),n("footer",{staticClass:"footer text-center"},[n("div",{staticClass:"b-container>"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-7"},[n("h4",{staticClass:"mb-0"},[t._v("Localização")]),n("p",{staticClass:"pre-wrap lead mb-0"},[t._v("Universidade dos Açores (GRIA)")]),n("p",[t._v("Ponta Delgada")])]),n("div",{staticClass:"col-lg-4"},[n("h4",{staticClass:"mb-0"},[t._v("Sobre Web & IA")]),n("p",{staticClass:"pre-wrap lead mb-0"},[t._v(" Web & IA usa tema de Bootstrap, com licença MIT, gratuito e criado por "),n("a",{staticClass:"lead font-weight-bold"},[t._v("StartBootstrap")])])])])]),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"d-flex flex-column align-items-center"},[n("div",{staticClass:"icon-contact mb-3"},[n("i",{staticClass:"fas fa-mobile-alt"})]),n("div",{staticClass:"text-muted"},[t._v("Telefone")]),n("a",{staticClass:"lead font-weight-bold",attrs:{href:"tel:296 650172"}},[t._v("296 650172")])])]),n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"d-flex flex-column align-items-center"},[n("div",{staticClass:"icon-contact mb-3"},[n("i",{staticClass:"far fa-envelope"})]),n("div",{staticClass:"text-muted"},[t._v("E-mail")]),n("a",{staticClass:"lead font-weight-bold",attrs:{href:"mailto:webia.uac@gmail.com"}},[t._v("webia.uac@gmail.com")])])])])]),n("section",{staticClass:"copyright py-4 text-center text-white"},[n("div",{staticClass:"b-container>"},[n("small",{staticClass:"pre-wrap"},[t._v("Copyright © Web & IA 2021")])])]),n("div",{staticClass:"scroll-to-top d-lg-none position-fixed"},[n("a",{staticClass:"js-scroll-trigger d-block text-center text-white rounded",attrs:{href:"#page-top"}},[n("i",{staticClass:"fa fa-chevron-up"})])])])},s=[],o={methods:{registo:function(){b.push({name:"Registo"})},contato:function(){b.push({name:"Contato"})},repositorio:function(){b.push({name:"Repositorio"})},AI4K12:function(){b.push({name:"AI4K12"})}}},c=o,l=a("2877"),u=Object(l["a"])(c,r,s,!1,null,null,null),d=u.exports,p=a("7b13"),f=a("8c47"),v={issuer:"https://dev-94483832.okta.com",clientId:"0oa1ffu4idnXxDRnJ5d7",redirectUri:window.location.origin+"/login/callback",scopes:["openid","profile"]},m=new f["OktaAuth"](v);n["default"].use(i["a"]),n["default"].use(p["b"],{oktaAuth:m});var h=new i["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:d},{path:"/login/callback",name:"Callback",component:p["a"]},{path:"/registo",name:"Registo",component:function(){return a.e("chunk-0d68f98b").then(a.bind(null,"73cf"))}},{path:"/AI4K12",name:"AI4K12",component:function(){return a.e("chunk-582feca5").then(a.bind(null,"da1c"))}},{path:"/repositorio",name:"Repositorio",component:function(){return a.e("chunk-676d6b7e").then(a.bind(null,"405d"))}},{path:"/acerca",name:"Acerca",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/tool",name:"Ver ferramentas",component:function(){return a.e("chunk-2d216bf5").then(a.bind(null,"c47e"))},meta:{requiresAuth:!0}},{path:"/rtool",name:"Registar ferramenta",component:function(){return a.e("chunk-2d214009").then(a.bind(null,"aea0"))},meta:{requiresAuth:!0}},{path:"/mtools",name:"Menu feramentas",component:function(){return a.e("chunk-2d225a31").then(a.bind(null,"e4f2"))},meta:{requiresAuth:!0}},{path:"/noticias",name:"Noticias",component:function(){return a.e("chunk-2d20813a").then(a.bind(null,"a2f9"))}},{path:"/contato",name:"Contato",component:function(){return a.e("chunk-2d210c47").then(a.bind(null,"b8fa"))}},{path:"/menu",name:"Menu",component:function(){return a.e("chunk-2d0efc70").then(a.bind(null,"9a0b"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return a.e("chunk-2d2086b7").then(a.bind(null,"a55b"))}},{path:"/users",name:"Users",component:function(){return a.e("chunk-2d2308ce").then(a.bind(null,"ed81"))},meta:{requiresAuth:!0}},{path:"/gusers",name:"Gusers",component:function(){return a.e("chunk-2d0ac40c").then(a.bind(null,"196d"))},meta:{requiresAuth:!0}},{path:"*",component:function(){return a.e("chunk-2d20f5a4").then(a.bind(null,"b2ec"))}}]}),b=e["a"]=h}});
//# sourceMappingURL=app.5ad10540.js.map