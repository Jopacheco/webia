(function(){var t={4358:function(t,e,a){"use strict";var i=a(144),s=function(){var t=this,e=t._self._c;return e("b-container",{attrs:{fluid:""}},[e("NavBar"),e("router-view")],1)},n=[],r=(a(7024),function(){var t=this,e=t._self._c;return e("b-container",[e("div",{attrs:{id:"page-top"}},[e("b-navbar-nav",{staticClass:"navbar navbar-expand-lg bg-secondary fixed-top",attrs:{id:"mainNav"}},[e("div",{staticClass:"container"},[e("img",{staticClass:"img-fluid",staticStyle:{width:"129px",height:"59px"},attrs:{src:a(5971)}}),e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand js-scroll-trigger"},[e("b-nav-item",{attrs:{to:"/"}},[t._v("WEB "),e("small",[t._v("&")]),t._v(" IA ")])],1),e("button",{staticClass:"navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v("Menu "),e("i",{staticClass:"fas fa-bars"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[e("b-nav-item",{attrs:{to:"/Registo"}},[t._v("Registo")])],1),e("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[e("b-nav-item",{attrs:{to:"/AI4K12"}},[t._v("AI4K12")])],1),e("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[e("b-nav-item",{attrs:{to:"/repositorio"}},[t._v("Repositório")])],1),e("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[e("b-nav-item",{attrs:{to:"/acerca"}},[t._v("Acerca")])],1),e("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[e("b-nav-item",{attrs:{to:"/noticias"}},[t._v("Notícias")])],1),e("div",{staticClass:"nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger"},[e("b-nav-item",{attrs:{to:"/contato"}},[t._v("Contactos")])],1)])])])])])],1)])}),o=[],c={name:"app",data(){return{activeUser:null}},async created(){await this.refreshActiveUser()},watch:{$route:"refreshActiveUser"},methods:{async login(){this.$auth.signInWithRedirect()},async refreshActiveUser(){this.authState.isAuthenticated&&(this.activeUser=await this.$auth.getUser())},async logout(){await this.$auth.signOut(),await this.refreshActiveUser(),this.$router.push("/")}}},l=c,u=a(1001),d=(0,u.Z)(l,r,o,!1,null,null,null),p=d.exports,v={name:"App",components:{NavBar:p}},h=v,f=(0,u.Z)(h,s,n,!1,null,null,null),b=f.exports,g=a(5567),m=a(2970);i["default"].use(m.ZPm),i["default"].config.productionTip=!0,new i["default"]({router:g.Z,render:t=>t(b)}).$mount("#app")},5567:function(t,e,a){"use strict";a.d(e,{Z:function(){return b}});var i=a(144),s=a(8345),n=function(){var t=this,e=t._self._c;return e("b-container",{attrs:{fluid:""}},[e("header",{staticClass:"masthead bg-primary text-white text-center"},[e("div",{staticClass:"b-container d-flex align-items-center flex-column"},[e("img",{staticClass:"masthead-avatar mt-0 mb-4",attrs:{src:a(4966),alt:"Robot"}}),e("h6",{staticClass:"masthead-heading test-uppercase mb-0"},[t._v(" Plataforma Web "),e("p",[t._v("de Inteligência Artificial")])]),e("div",{staticClass:"divider-custom divider-light"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-brain"})]),e("div",{staticClass:"divider-custom-line"})]),e("p",{staticClass:"pre-wrap masthead-subheading font-weight-light mb-5"},[t._v(" Para contribuir para o ensino da IA e em sintonia com a iniciativa "),e("b-link",{staticClass:"text-white",attrs:{href:"https://ai4k12.org/",target:"_BLANK"}},[e("ins",[t._v("AI4K12")])]),t._v(" ! ")],1)])]),e("section",{staticClass:"page-section bg-primary text-white mt-5 mb-0",attrs:{id:"about"}},[e("div",{staticClass:"b-container"},[e("div",{staticClass:"text-center"},[e("h4",{staticClass:"page-section-heading d-inline-block text-white mt-1 mb-0"},[t._v(" Acerca deste Projeto ")])]),e("div",{staticClass:"divider-custom divider-light"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-brain"})]),e("div",{staticClass:"divider-custom-line"})]),e("br"),e("br"),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 ml-auto"},[e("p",{staticClass:"pre-wrap lead",staticStyle:{"text-align":"center"}},[t._v(" Este é um projeto com o apoio do Grupo de Robótica e Inteligência Artificial da Universidade dos Açores ( "),e("b-link",{staticClass:"text-white",attrs:{href:"https://gria.uac.pt",target:"_BLANK"}},[e("ins",[t._v("GRIA")])]),t._v(" ), do Laboratório de Sistemas Inteligentes, Ciência e Engenharia ("),e("b-link",{staticClass:"text-white",attrs:{href:"https://sites.google.com/view/universidade-dos-aores/is2e?authuser=0",target:"_BLANK"}},[e("ins",[t._v(" IS2E ")])]),t._v(") e do repositório "),e("b-link",{staticClass:"text-white",attrs:{href:"http://re-mar.uac.pt",target:"_BLANK"}},[e("ins",[t._v("Re-Mar")])]),t._v(" com o objetivo de contribuir para o ensino da Inteligência Artificial ( IA ) em meio escolar e em sintonia com a iniciativa mundial "),e("a",{staticClass:"text-white",on:{click:function(e){return t.AI4K12()}}},[e("b",[t._v("AI4K12")])]),t._v(" e maioritariamente para os níveis de ensino do 3º ciclo e secundário.")],1)]),e("div",{staticClass:"col-lg-4 mr-auto"},[e("p",{staticClass:"pre-wrap lead",staticStyle:{"text-align":"center"}},[t._v(" É neste sentido que são disponibilizadas ferramentas, com recursos didáticos associados, de forma livre, prática e acessível e classificadas em cinco áreas ou ideias predominantes do ensino da IA, no "),e("a",{staticClass:"text-white",on:{click:function(e){return t.repositorio()}}},[e("b",[t._v("Repositório.")])]),t._v(" De forma a receber a Newsletter e a ficarmos com o seu contacto, pode e deve efetuar o seu registo "),e("a",{staticClass:"text-white",on:{click:function(e){return t.registo()}}},[e("b",[t._v("aqui."),e("br")])]),t._v(" Para qualquer questão relacionada com os dados fornecidos, ou outra, pode também contactar-nos diretamente "),e("a",{staticClass:"text-white",on:{click:function(e){return t.contato()}}},[e("b",[t._v("aqui")])])]),e("p")])])])]),e("footer",{staticClass:"footer text-center"},[e("div",{staticClass:"b-container>"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("h4",{staticClass:"mb-0"},[t._v("Localização")]),e("p",{staticClass:"pre-wrap lead mb-0"},[t._v("Universidade dos Açores - FCT ("),e("b-link",{staticClass:"text-white",attrs:{href:"https://gria.uac.pt",target:"_BLANK"}},[e("ins",[t._v("GRIA")])]),t._v(")")],1),e("p",[t._v("Ponta Delgada")])]),e("div",{staticClass:"col-lg-4"},[e("h4",{staticClass:"mb-0"},[t._v("Sobre Web "),e("small",[t._v("&")]),t._v(" IA")]),e("p",{staticClass:"pre-wrap lead mb-0"},[t._v(" Web "),e("small",[t._v("&")]),t._v(" IA usa Bootstrap com licença MIT e Framework Vue.Js ")])])])])]),e("section",{staticClass:"copyright py-4 text-center text-white"},[e("div",{staticClass:"b-container>"},[e("small",{staticClass:"pre-wrap"},[t._v("Copyright © Web "),e("small",[t._v("&")]),t._v(" IA 2021")])])]),e("div",{staticClass:"scroll-to-top d-lg-none position-fixed"},[e("a",{staticClass:"js-scroll-trigger d-block text-center text-white rounded",attrs:{href:"#page-top"}},[e("i",{staticClass:"fa fa-chevron-up"})])])])},r=[],o={methods:{registo(){b.push({name:"Registo"})},contato(){b.push({name:"Contato"})},repositorio(){b.push({name:"Repositorio"})},AI4K12(){b.push({name:"AI4K12"})}}},c=o,l=a(1001),u=(0,l.Z)(c,n,r,!1,null,null,null),d=u.exports,p=a(726),v=a(5981);const h={issuer:"https://dev-94483832.okta.com",clientId:"0oa1ffu4idnXxDRnJ5d7",redirectUri:window.location.origin+"/login/callback",scopes:["openid","profile"]};new v.snk(h);i["default"].use(s.ZP);const f=new s.ZP({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:d},{path:"/login/callback",name:"Callback",component:p.kI},{path:"/registo",name:"Registo",component:()=>a.e(24).then(a.bind(a,5110))},{path:"/AI4K12",name:"AI4K12",component:()=>a.e(854).then(a.bind(a,7854))},{path:"/repositorio",name:"Repositorio",component:()=>a.e(180).then(a.bind(a,5180))},{path:"/acerca",name:"Acerca",component:()=>a.e(432).then(a.bind(a,6432))},{path:"/tool",name:"Ver ferramentas",component:()=>a.e(913).then(a.bind(a,3913)),meta:{requiresAuth:!0}},{path:"/rtool",name:"Registar ferramenta",component:()=>a.e(301).then(a.bind(a,3301)),meta:{requiresAuth:!0}},{path:"/mtools",name:"Menu feramentas",component:()=>a.e(586).then(a.bind(a,8586)),meta:{requiresAuth:!0}},{path:"/noticias",name:"Noticias",component:()=>a.e(160).then(a.bind(a,3160))},{path:"/contato",name:"Contato",component:()=>a.e(607).then(a.bind(a,7607))},{path:"/menu",name:"Menu",component:()=>a.e(479).then(a.bind(a,4479)),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>a.e(269).then(a.bind(a,3269))},{path:"/users",name:"Users",component:()=>a.e(928).then(a.bind(a,6928)),meta:{requiresAuth:!0}},{path:"/gusers",name:"Gusers",component:()=>a.e(268).then(a.bind(a,9268)),meta:{requiresAuth:!0}},{path:"*",component:()=>a.e(14).then(a.bind(a,5014))}]});var b=f},4966:function(t,e,a){"use strict";t.exports=a.p+"img/robot.c764185f.png"},5971:function(t){"use strict";t.exports="data:image/png;base64,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"},199:function(){}},e={};function a(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,i,s,n){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],s=t[u][1],n=t[u][2];for(var o=!0,c=0;c<i.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[c])}))?i.splice(c--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,i){return a.f[i](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{14:"fa58c620",24:"01e9bc97",160:"79fbdcfa",180:"3c1e4ad2",268:"e02e489d",269:"cddbb014",301:"63c16d4e",432:"f7c297ca",479:"3964dcb3",586:"c7bf5978",607:"27fd71d8",854:"a4bd39de",913:"00270f72",928:"b6c9a584"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="test:";a.l=function(i,s,n,r){if(t[i])t[i].push(s);else{var o,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+n){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+n),o.src=i),t[i]=[s];var p=function(e,a){o.onerror=o.onload=null,clearTimeout(v);var s=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,i){var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var n=new Promise((function(a,i){s=t[e]=[a,i]}));i.push(s[2]=n);var r=a.p+a.u(e),o=new Error,c=function(i){if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var n=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,s[1](o)}};a.l(r,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,r=i[0],o=i[1],c=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(c)var u=c(a)}for(e&&e(i);l<r.length;l++)n=r[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},i=self["webpackChunktest"]=self["webpackChunktest"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(4358)}));i=a.O(i)})();
//# sourceMappingURL=app.39ad01ba.js.map