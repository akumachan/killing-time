(function(e){function t(t){for(var a,r,n=t[0],l=t[1],b=t[2],j=0,f=[];j<n.length;j++)r=n[j],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);i&&i(t);while(f.length)f.shift()();return o.push.apply(o,b||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],a=!0,n=1;n<c.length;n++){var l=c[n];0!==s[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=c[0]))}return e}var a={},s={app:0},o=[];function r(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=a,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var b=0;b<n.length;b++)t(n[b]);var i=l;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"293f":function(e,t,c){},4678:function(e,t,c){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return c(t)}function o(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),s={id:"app"},o={class:"wrapper"},r={class:"content-wrapper"};function n(e,t){var c=Object(a["v"])("Header"),n=Object(a["v"])("Sidebar"),l=Object(a["v"])("router-view");return Object(a["p"])(),Object(a["d"])("div",s,[Object(a["g"])("div",o,[Object(a["g"])(c),Object(a["g"])(n),Object(a["g"])("div",r,[Object(a["g"])(l)])])])}var l=Object(a["C"])("data-v-005c291d");Object(a["s"])("data-v-005c291d");var b={class:"main-header"},i=Object(a["g"])("span",{class:"logo-mini"},[Object(a["f"])("K"),Object(a["g"])("b",null,"T")],-1),j=Object(a["g"])("span",{class:"logo-lg"},[Object(a["g"])("i",{class:"fa fa-clock-o"}),Object(a["f"])(" Killing"),Object(a["g"])("b",null,"Time")],-1),f=Object(a["g"])("nav",{class:"navbar navbar-static-top"},[Object(a["g"])("a",{href:"#",class:"sidebar-toggle","data-toggle":"push-menu",role:"button"},[Object(a["g"])("span",{class:"sr-only"},"Toggle navigation")])],-1);Object(a["q"])();var u=l((function(e,t){var c=Object(a["v"])("router-link");return Object(a["p"])(),Object(a["d"])("header",b,[Object(a["g"])(c,{to:"/",class:"logo"},{default:l((function(){return[i,j]})),_:1}),f])})),d={name:"Header"};c("cec4");d.render=u,d.__scopeId="data-v-005c291d";var O=d,g=Object(a["C"])("data-v-a43f3b66");Object(a["s"])("data-v-a43f3b66");var p={class:"main-sidebar"},h={class:"sidebar",style:{height:"auto"}},m={class:"sidebar-menu tree","data-widget":"tree"},v=Object(a["g"])("li",{class:"header"},null,-1),k=Object(a["g"])("i",{class:"fa fa-graduation-cap"},null,-1),y=Object(a["g"])("span",null," Official Joke",-1),x=Object(a["g"])("i",{class:"fa fa-soccer-ball-o"},null,-1),w=Object(a["g"])("span",null," Bored",-1),z=Object(a["g"])("i",{class:"fa fa-star-half-full"},null,-1),B=Object(a["g"])("span",null," Corporate Bullshit",-1);Object(a["q"])();var _=g((function(e,t){var c=Object(a["v"])("router-link");return Object(a["p"])(),Object(a["d"])("aside",p,[Object(a["g"])("section",h,[Object(a["g"])("ul",m,[v,Object(a["g"])("li",null,[Object(a["g"])(c,{to:"/official-joke"},{default:g((function(){return[k,y]})),_:1})]),Object(a["g"])("li",null,[Object(a["g"])(c,{to:"/bored"},{default:g((function(){return[x,w]})),_:1})]),Object(a["g"])("li",null,[Object(a["g"])(c,{to:"/corporate-bullshit"},{default:g((function(){return[z,B]})),_:1})])])])])})),J={name:"Sidebar"};c("bade");J.render=_,J.__scopeId="data-v-a43f3b66";var C=J,P={name:"App",components:{Header:O,Sidebar:C}};c("64be");P.render=n;var H=P,R=c("8c4f"),S=Object(a["e"])('<section class="content-header"><h1> Official Joke </h1><ol class="breadcrumb"><li><a href="#"><i class="fa fa-home"></i> Home</a></li><li class="active">Official Joke</li></ol></section>',1),T={class:"content"},I={class:"box"},A={class:"box-header with-border"},F={class:"box-title"},M={class:"box-tools pull-right"},N=Object(a["g"])("i",{class:"fa fa-refresh"},null,-1),q={class:"box-body"},E=Object(a["g"])("div",{class:"box-footer"},[Object(a["f"])(" by "),Object(a["g"])("a",{href:"//official-joke-api.appspot.com/"},"Official Joke API")],-1);function G(e,t){return Object(a["p"])(),Object(a["d"])(a["a"],null,[S,Object(a["g"])("section",T,[Object(a["g"])("div",I,[Object(a["g"])("div",A,[Object(a["g"])("h3",F,Object(a["x"])(e.store.getters["results/officialJoke"].setup),1),Object(a["g"])("div",M,[Object(a["g"])("button",{type:"button",class:"btn btn-box-tool","data-toggle":"tooltip",title:"Reload",onClick:t[1]||(t[1]=function(){return e.call.apply(e,arguments)})},[N])])]),Object(a["g"])("div",q,Object(a["x"])(e.store.getters["results/officialJoke"].punchline),1),E])])],64)}var D=c("5502"),K={namespaced:!0,state:{officialJoke:{},bored:{},corporateBullshit:{}},getters:{officialJoke:function(e){return e.officialJoke},bored:function(e){return e.bored},corporateBullshit:function(e){return e.corporateBullshit}},mutations:{setOfficialJoke:function(e,t){return e.officialJoke=t},setBored:function(e,t){return e.bored=t},setCorporateBullshit:function(e,t){return e.corporateBullshit=t}},actions:{setResult:function(e,t){var c=e.commit;"setup"in t?c("setOfficialJoke",t):"activity"in t?c("setBored",t):"phrase"in t&&c("setCorporateBullshit",t)}}},L=Object(D["a"])({modules:{results:K}}),U=c("bc3a"),Q=c.n(U),V={name:"Bored",mounted:function(){this.call()},computed:{store:function(){return L}},methods:{call:function(){Q.a.get("//official-joke-api.appspot.com/jokes/random").then((function(e){L.dispatch("results/setResult",e.data)}))}}};V.render=G;var W=V,X=Object(a["e"])('<section class="content-header"><h1> Bored <small>Let&#39;s find you something to do</small></h1><ol class="breadcrumb"><li><a href="#"><i class="fa fa-home"></i> Home</a></li><li class="active">Bored</li></ol></section>',1),Y={class:"content"},Z={class:"box"},$={class:"box-header with-border"},ee={class:"box-title"},te={class:"box-tools pull-right"},ce=Object(a["g"])("i",{class:"fa fa-refresh"},null,-1),ae={class:"box-body"},se={class:"box-body"},oe=Object(a["g"])("div",{class:"box-footer"},[Object(a["f"])(" by "),Object(a["g"])("a",{href:"//boredapi.com/"},"The Bored API")],-1);function re(e,t){return Object(a["p"])(),Object(a["d"])(a["a"],null,[X,Object(a["g"])("section",Y,[Object(a["g"])("div",Z,[Object(a["g"])("div",$,[Object(a["g"])("h3",ee,Object(a["x"])(e.store.getters["results/bored"].activity),1),Object(a["g"])("div",te,[Object(a["g"])("button",{type:"button",class:"btn btn-box-tool","data-toggle":"tooltip",title:"Reload",onClick:t[1]||(t[1]=function(){return e.call.apply(e,arguments)})},[ce])])]),Object(a["g"])("div",ae,"Participants: "+Object(a["x"])(e.store.getters["results/bored"].participants),1),Object(a["g"])("div",se,"Price: "+Object(a["x"])(e.store.getters["results/bored"].price),1),oe])])],64)}var ne={name:"OfficialJoke",mounted:function(){this.call()},computed:{store:function(){return L}},methods:{call:function(){Q.a.get("//www.boredapi.com/api/activity/").then((function(e){console.log(e.data),L.dispatch("results/setResult",e.data)}))}}};ne.render=re;var le=ne,be=Object(a["e"])('<section class="content-header"><h1> Corporate Bullshit <small>Buzzword Generator</small></h1><ol class="breadcrumb"><li><a href="#"><i class="fa fa-home"></i> Home</a></li><li class="active">Corporate Bullshit</li></ol></section>',1),ie={class:"content"},je={class:"box"},fe={class:"box-header with-border"},ue={class:"box-title"},de={class:"box-tools pull-right"},Oe=Object(a["g"])("i",{class:"fa fa-refresh"},null,-1),ge=Object(a["g"])("div",{class:"box-footer"},[Object(a["f"])(" by "),Object(a["g"])("a",{href:"//github.com/sameerkumar18/corporate-bs-generator-api"},"Corporate Bullshit/Buzzword Generator API")],-1);function pe(e,t){return Object(a["p"])(),Object(a["d"])(a["a"],null,[be,Object(a["g"])("section",ie,[Object(a["g"])("div",je,[Object(a["g"])("div",fe,[Object(a["g"])("h3",ue,Object(a["x"])(e.store.getters["results/corporateBullshit"].phrase),1),Object(a["g"])("div",de,[Object(a["g"])("button",{type:"button",class:"btn btn-box-tool","data-toggle":"tooltip",title:"Reload",onClick:t[1]||(t[1]=function(){return e.call.apply(e,arguments)})},[Oe])])]),ge])])],64)}var he={name:"CorporateBullshit",mounted:function(){this.call()},computed:{store:function(){return L}},methods:{call:function(){Q.a.get("https://corporatebs-generator.sameerkumar.website/").then((function(e){L.dispatch("results/setResult",e.data)}))}}};he.render=pe;var me=he,ve=Object(a["e"])('<section class="content-header"><h1> 404 Error Page </h1><ol class="breadcrumb"><li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li><li class="active">404 error</li></ol></section>',1),ke={class:"content"},ye={class:"error-page"},xe=Object(a["g"])("h2",{class:"headline text-yellow"}," 404",-1),we={class:"error-content"},ze=Object(a["g"])("h3",null,[Object(a["g"])("i",{class:"fa fa-warning text-yellow"}),Object(a["f"])(" Oops! Page not found.")],-1),Be=Object(a["f"])("Go "),_e=Object(a["f"])("Home");function Je(e,t){var c=Object(a["v"])("router-link");return Object(a["p"])(),Object(a["d"])(a["a"],null,[ve,Object(a["g"])("section",ke,[Object(a["g"])("div",ye,[xe,Object(a["g"])("div",we,[ze,Object(a["g"])("p",null,[Be,Object(a["g"])(c,{to:"/"},{default:Object(a["B"])((function(){return[_e]})),_:1})])])])])],64)}var Ce={name:"NouFound",components:{}};Ce.render=Je;var Pe=Ce,He=Object(a["g"])("section",{class:"content-header"},[Object(a["g"])("ol",{class:"breadcrumb"},[Object(a["g"])("li",null,[Object(a["g"])("a",{href:"#"},[Object(a["g"])("i",{class:"fa fa-dashboard"}),Object(a["f"])(" Home")])])])],-1),Re={class:"content"},Se={class:"error-page"},Te=Object(a["g"])("h2",{class:"headline text-orange"}," Home",-1),Ie={class:"error-content"},Ae=Object(a["g"])("h3",null,"I'll kill your time.",-1),Fe=Object(a["g"])("p",null," Choose one from the right side bar. ",-1),Me=Object(a["f"])(" Enjoy "),Ne=Object(a["f"])("Jokes"),qe=Object(a["f"])(", "),Ee=Object(a["f"])("Recreations"),Ge=Object(a["f"])(", "),De=Object(a["f"])("Fictional Buzzwords"),Ke=Object(a["f"])(". ");function Le(e,t){var c=Object(a["v"])("router-link");return Object(a["p"])(),Object(a["d"])(a["a"],null,[He,Object(a["g"])("section",Re,[Object(a["g"])("div",Se,[Te,Object(a["g"])("div",Ie,[Ae,Fe,Object(a["g"])("p",null,[Me,Object(a["g"])(c,{to:"/official-joke"},{default:Object(a["B"])((function(){return[Ne]})),_:1}),qe,Object(a["g"])(c,{to:"/bored"},{default:Object(a["B"])((function(){return[Ee]})),_:1}),Ge,Object(a["g"])(c,{to:"/corporate-bullshit"},{default:Object(a["B"])((function(){return[De]})),_:1}),Ke])])])])],64)}var Ue={name:"NouFound",components:{}};Ue.render=Le;var Qe=Ue,Ve=[{path:"/",name:"Home",component:Qe},{path:"/official-joke",name:"OfficialJoke",component:W},{path:"/corporate-bullshit/",name:"CorporateBullshit",component:me},{path:"/bored/",name:"Bored",component:le},{path:"/:catchAll(.*)",name:"NotFound",component:Pe}],We=Object(R["a"])({history:Object(R["b"])(),routes:Ve}),Xe=We;c("8b17"),c("22c6");Object(a["c"])(H).use(Xe).mount("#app")},"64be":function(e,t,c){"use strict";c("c894")},bade:function(e,t,c){"use strict";c("d315")},c894:function(e,t,c){},cec4:function(e,t,c){"use strict";c("293f")},d315:function(e,t,c){}});
//# sourceMappingURL=app.a4945d18.js.map