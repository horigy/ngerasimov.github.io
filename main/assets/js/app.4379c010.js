(function(t){function e(e){for(var s,r,o=e[0],c=e[1],u=e[2],p=0,g=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&g.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(g.length)g.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("9085")},"096b":function(t,e,i){t.exports=i.p+"assets/img/simon.09363ab6.png"},"0f61":function(t,e,i){"use strict";i("d2bb1")},"35c3":function(t,e,i){t.exports=i.p+"assets/img/mr-burger.3e20ed8b.png"},5452:function(t,e,i){"use strict";i("d100")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"wrapper"},[i("Header"),i("Tags",{attrs:{tags:t.getTags},on:{filter:function(e){t.filter=e}}}),i("PageList",{attrs:{pages:t.getPages},on:{filter:function(e){t.filter=e}}})],1)])},a=[],r=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[t._m(0),i("div",{staticClass:"user-links"},[i("a",{staticClass:"user-link linkedin",attrs:{href:"www.linkedin.com/in/nikolay-gerasimov-25247160"}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","linkedin"]}})],1),i("a",{staticClass:"user-link facebook",attrs:{href:"https://www.facebook.com/profile.php?id=1061692708"}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","facebook"]}})],1),i("a",{staticClass:"user-link github",attrs:{href:"https://github.com/horigy"}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}})],1),i("a",{staticClass:"user-link telegram",attrs:{href:"tg://resolve?domain=@horigy"}},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","telegram"]}})],1)])])}),o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-info"},[s("img",{staticClass:"user-img",attrs:{src:i("57fe"),alt:""}}),s("h1",{staticClass:"user-name"},[t._v("Nikolay"),s("br"),t._v("Gerasimov")])])}],c={},u=c,l=(i("5452"),i("2877")),p=Object(l["a"])(u,r,o,!1,null,null,null),g=p.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"tags"},[t._l(t.tags,(function(e,s){return i("li",{key:s,staticClass:"tag",on:{click:function(i){return t.filterTag(e)}}},[t._v(t._s(e))])})),i("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:["fa","times"]},on:{click:t.clearTags}})],2)},d=[],h={props:{tags:{type:Array,required:!0}},methods:{filterTag:function(t){this.$emit("filter",t)},clearTags:function(){this.$emit("filter","")}}},m=h,b=(i("0f61"),Object(l["a"])(m,f,d,!1,null,null,null)),v=b.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"pages-list"},t._l(t.pages,(function(e,n){return s("li",{key:n,staticClass:"page"},[s("div",{staticClass:"page-preview"},[s("img",{staticClass:"page-img",attrs:{src:i("b967")("./"+e.img+".png"),alt:"preview"}})]),s("div",{staticClass:"page-info"},[s("h2",{staticClass:"page-title"},[t._v(t._s(e.title))]),s("p",{staticClass:"page-desc"},[t._v(t._s(e.descr))]),s("a",{staticClass:"page-link",attrs:{href:""+e.link}},[s("font-awesome-icon",{staticClass:"link-icon",attrs:{icon:["fa","link"]}}),s("span",[t._v("View in github-pages")])],1),s("a",{staticClass:"page-link",attrs:{href:""+e.repo}},[s("font-awesome-icon",{staticClass:"link-icon",attrs:{icon:["fa","link"]}}),s("span",[t._v("This repo")])],1),s("a",{staticClass:"page-tag",on:{click:function(i){return t.filterTag(e.tag)}}},[s("font-awesome-icon",{staticClass:"tags-icon",attrs:{icon:["fa","tags"]}}),s("span",[t._v(t._s(e.tag))])],1)])])})),0)},y=[],k={props:{pages:{type:Array,required:!0}},methods:{filterTag:function(t){this.$emit("filter",t)}}},_=k,C=(i("dbbd"),Object(l["a"])(_,w,y,!1,null,null,null)),x=C.exports,j={name:"App",components:{Header:g,Tags:v,PageList:x},data:function(){return{filter:"",tags:""}},computed:{getPages:function(){var t=this,e=this.$store.getters.GETPAGES;return this.filter?e.filter((function(e){return e.tag===t.filter})):e},getTags:function(){var t=this,e=this.$store.getters.GETTAGS;return this.filter?e.filter((function(e){return e===t.filter})):e}}},T=j,S=(i("034f"),Object(l["a"])(T,n,a,!1,null,null,null)),O=S.exports,P=i("2f62"),E=(i("caad"),{state:{pages:[{title:"Simon game",descr:"Simple Simon Game on VUE.js",img:"simon",link:"https://horigy.github.io/ngerasimov.github.io/simon-game-vue/",repo:"https://github.com/horigy/simon-game-vue",tag:"vue"},{title:"Portfolio website",descr:"SPA portofolio made with webpack and pug, javascript and jQuery",img:"portfolio-website",link:"https://horigy.github.io/ngerasimov.github.io/portfolio-website/",repo:"https://github.com/horigy/portfolio-website",tag:"javascript"},{title:"Burger SPA-website",descr:"Sample SPA website i made while studing at Loftschool, HTML/CSS/JS",img:"mr-burger",link:"https://horigy.github.io/ngerasimov.github.io/mr-burger/",repo:"https://github.com/horigy/mrburger",tag:"javascript"},{title:"Yandex.maps API",descr:"Javascript app to create placemarks on Yandex.maps, was made while studing at Loftschool",img:"maps",link:"https://horigy.github.io/ngerasimov.github.io/maps/",repo:"https://github.com/horigy/js-course",tag:"javascript"},{title:"GitHub finder",descr:"Sample app to find github users and list their repos, made with VUE.js",img:"github-finder",link:"https://horigy.github.io/ngerasimov.github.io/github-finder/",repo:"https://github.com/horigy/github-finder",tag:"vue"},{title:"Notes app",descr:"Notes app, list/edit remove notes with vue and vuex",img:"notes-app",link:"https://horigy.github.io/ngerasimov.github.io/notes-with-vuex/",repo:"https://github.com/horigy/notes-with-vuex",tag:"vue"},{title:"Lists and items",descr:"VUE app that can display a number of lists and select/remove items within",img:"lists-and-items",link:"https://horigy.github.io/ngerasimov.github.io/lists-and-items/",repo:"https://github.com/horigy/lists-and-items",tag:"vue"}]},mutations:{},actions:{},getters:{GETPAGES:function(t){return t.pages},GETTAGS:function(t){for(var e=[],i=0;i<t.pages.length;i++)e.includes(t.pages[i].tag)||e.push(t.pages[i].tag);return e}}});s["a"].use(P["a"]);var A=new P["a"].Store({modules:{pages:E}}),G=i("ecee"),$=i("c074"),L=i("f2d1"),M=i("ad3d");i("c1c3");G["c"].add($["c"]),G["c"].add($["a"]),G["c"].add($["b"]),G["c"].add(L["d"]),G["c"].add(L["c"]),G["c"].add(L["a"]),G["c"].add(L["b"]),s["a"].component("font-awesome-icon",M["a"]),s["a"].config.productionTip=!1,new s["a"]({store:A,render:function(t){return t(O)}}).$mount("#app")},"57fe":function(t,e,i){t.exports=i.p+"assets/img/user-img.6153058b.jpg"},"5c90":function(t,e,i){t.exports=i.p+"assets/img/notes-app.f2828b7f.png"},"7b7e":function(t,e,i){t.exports=i.p+"assets/img/github-finder.5525a6c4.png"},9085:function(t,e,i){},b967:function(t,e,i){var s={"./github-finder.png":"7b7e","./lists-and-items.png":"c7c0","./maps.png":"d920","./mr-burger.png":"35c3","./notes-app.png":"5c90","./portfolio-website.png":"f291","./simon.png":"096b"};function n(t){var e=a(t);return i(e)}function a(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="b967"},c1c3:function(t,e,i){},c7c0:function(t,e,i){t.exports=i.p+"assets/img/lists-and-items.e9008874.png"},d100:function(t,e,i){},d2bb1:function(t,e,i){},d587:function(t,e,i){},d920:function(t,e,i){t.exports=i.p+"assets/img/maps.721f645a.png"},dbbd:function(t,e,i){"use strict";i("d587")},f291:function(t,e,i){t.exports=i.p+"assets/img/portfolio-website.3fbcd598.png"}});