(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)a=i[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"258591d2"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e),s=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}o[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:u})},12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/buddybuilder/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},1:function(e,t){},2:function(e,t){},"2ef0":function(e,t,n){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},s=[],a=(n("034f"),n("2877")),i={},u=Object(a["a"])(i,o,s,!1,null,null,null),c=u.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Buddy Builder")]),n("NewEntryForm"),n("EntryList")],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"newEntryForm"},[n("p",[e._v("Please input your reached amount of the exercise for today.")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"number"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{staticClass:"btn btn-primary",on:{click:e.sendToTangle}},[e._v("Send to tangle")]),n("p",[e._v("amount: "+e._s(e.message))])])},m=[],h=n("b7ec"),v=n("c2f4"),g=n.n(v),b=n("50f1"),y=Object(h["composeAPI"])({provider:"https://nodes.devnet.thetangle.org:443"}),_={name:"NewEntryForm",data:function(){return{message:"",seed:"",address:""}},created:function(){this.seed=localStorage.getItem("seed"),this.address=localStorage.getItem("address"),this.seed||(console.log("generate new seed"),this.seed=g()(),this.address=g()(),localStorage.setItem("seed",this.seed),localStorage.setItem("address",this.address))},methods:{sendToTangle:function(){var e=[{address:this.address,value:0,tag:"BUDDYBUILDER",message:b.asciiToTrytes(this.message)}],t=3,n=9;y.prepareTransfers(this.seed,e).then(function(e){return y.sendTrytes(e,t,n)}).then(function(e){console.log("Published transaction with tail hash: ".concat(e[0].hash)),console.log("Bundle: ".concat(e))}).catch(function(e){console.log("err",e)})}}},w=_,j=Object(a["a"])(w,p,m,!1,null,"04cce45b",null),E=j.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"entryList"},e._l(e.entries,function(t,r){return n("li",{key:r},[e._v(e._s(t.message))])}),0)},T=[],P=(n("ac6a"),n("55dd"),n("50f1")),x=Object(h["composeAPI"])({provider:"https://nodes.devnet.thetangle.org:443"}),S={name:"EntryList",data:function(){return{entries:"",address:""}},created:function(){this.address=localStorage.getItem("address"),this.fetchEntries()},methods:{fetchEntries:function(){var e=this;x.findTransactionObjects({addresses:[this.address]}).then(function(t){e.entries=[];t.sort(function(e,t){return t.timestamp-e.timestamp}).map(function(t){var n=t.signatureMessageFragment,r={message:P.trytesToAscii(n+"9"),timestamp:t.timestamp};e.entries.push(r)})}).catch(function(e){console.error(e)})}}},I=S,k=(n("d0f2"),Object(a["a"])(I,O,T,!1,null,"4a8bd077",null)),L=k.exports,A={name:"home",components:{NewEntryForm:E,EntryList:L}},B=A,C=Object(a["a"])(B,d,f,!1,null,null,null),F=C.exports;r["default"].use(l["a"]);var M=new l["a"]({routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),N=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(N["a"]),r["default"].config.productionTip=!1,new r["default"]({router:M,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},c2f4:function(e,t,n){var r=n("4487"),o=81,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ9";e.exports=function(){return r.generate({length:o,charset:s})}},d0f2:function(e,t,n){"use strict";var r=n("2ef0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.f7c7645e.js.map