(function(e){function n(n){for(var r,i,s=n[0],c=n[1],u=n[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var c=t[s];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/countries-example/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},bb00:function(e,n,t){},c6a3:function(e,n,t){"use strict";var r=t("bb00"),a=t.n(r);a.a},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-navigation-drawer",{attrs:{app:"",stateless:"",color:"primary",clipped:""},model:{value:e.drawer,callback:function(n){e.drawer=n},expression:"drawer"}},[t("v-radio-group",{staticClass:"ml-3",attrs:{mandatory:"",dark:""},model:{value:e.selectedRegion,callback:function(n){e.selectedRegion=n},expression:"selectedRegion"}},e._l(e.regions,(function(e){return t("v-radio",{key:e,attrs:{label:e,value:e}})})),1)],1),t("v-app-bar",{attrs:{app:"",color:"primary",dark:"","clipped-left":""}},[t("v-app-bar-nav-icon",{on:{click:function(n){e.drawer=!e.drawer}}}),t("span",{staticClass:"ml-2"},[e._v("REST Countries API app example")])],1),t("v-content",[t("v-row",{staticClass:"mx-2",attrs:{justify:"space-around"}},e._l(e.filteredCountries,(function(n){return t("country-card",{key:n.alpha2Code,attrs:{country:n,translations:e.defaulTranslations}})})),1)],1)],1)},o=[],i=(t("99af"),t("4de4"),t("d81d"),t("d3b7"),t("6062"),t("3ca3"),t("ddb0"),t("96cf"),t("1da1")),s=t("2909"),c=t("bc3a"),u=t.n(c),l="https://restcountries.eu/rest/v2",p=u.a.create({baseURL:l,timeout:5e3}),d={fetchAll:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.get("all");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()}},f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-card",{staticClass:"py-1 px-4 ma-3 grey--text text--darken-2",attrs:{"max-width":"500"}},[t("v-row",[t("v-col",{attrs:{cols:"3"}},[t("v-img",{staticClass:"flag-shadow",attrs:{src:e.country.flag,alt:"Flag of "+e.country.name}})],1),t("v-col",{attrs:{cols:"9"}},[t("div",{staticClass:"display-1 blue-grey--text text--darken-3"},[e._v(" "+e._s(e.country.name)+" ")]),t("div",[e._v(" Region: "),t("strong",[e._v(e._s(e.country.region))])]),t("div",[e._v(" Capital: "),t("strong",[e._v(e._s(e.country.capital))])]),t("div",[e._v(" Population: "),t("strong",[e._v(e._s(e.country.population))])])])],1),t("v-expansion-panels",{staticClass:"mb-3"},[t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("Timezones")]),t("v-expansion-panel-content",e._l(e.country.timezones,(function(n){return t("div",{key:n},[e._v(" "+e._s(n)+" ")])})),0)],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("Currencies")]),t("v-expansion-panel-content",e._l(e.country.currencies,(function(n){return t("div",{key:n.code},[e._v(" "+e._s(n.name+" "+n.symbol)+" ")])})),0)],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("Name Translations")]),t("v-expansion-panel-content",e._l(e.filterdTranslations,(function(n){return t("div",{key:n.key},[e._v(" "+e._s(n.key)+": "+e._s(n.value)+" ")])})),0)],1)],1)],1)},v=[],y=(t("caad"),t("4fad"),t("2532"),t("3835")),b=r["a"].extend({props:{country:{required:!0,type:Object},translations:{required:!1,default:Array}},computed:{filterdTranslations:function(){var e=this,n=Object.entries(this.country.translations).map((function(e){var n=Object(y["a"])(e,2),t=n[0],r=n[1];return{key:t,value:r}}));return 0===this.translations.length?n:n.filter((function(n){var t=n.key;return e.translations.includes(t)}))}}}),m=b,g=(t("c6a3"),t("2877")),h=t("6544"),x=t.n(h),_=t("b0af"),w=t("62ad"),k=t("cd55"),O=t("49e2"),j=t("c865"),C=t("0393"),R=t("adda"),V=t("0fd9"),P=Object(g["a"])(m,f,v,!1,null,"4f9d5910",null),A=P.exports;x()(P,{VCard:_["a"],VCol:w["a"],VExpansionPanel:k["a"],VExpansionPanelContent:O["a"],VExpansionPanelHeader:j["a"],VExpansionPanels:C["a"],VImg:R["a"],VRow:V["a"]});var T="Not Applicable",E="All",S=r["a"].extend({name:"App",components:{CountryCard:A},data:function(){return{drawer:!0,countries:[],defaulTranslations:["de","es","it"],selectedRegion:E}},computed:{regions:function(){var e=Object(s["a"])(new Set(this.countries.map((function(e){return e.region})))).map((function(e){return""===e?T:e}));return[].concat(Object(s["a"])(e),[E])},filteredCountries:function(){if(this.selectedRegion===E)return this.countries;var e=this.selectedRegion===T?"":this.selectedRegion;return this.countries.filter((function(n){var t=n.region;return t===e}))}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,d.fetchAll();case 2:e.countries=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}),M=S,N=t("7496"),I=t("40dc"),$=t("5bc1"),q=t("a75b"),z=t("f774"),B=t("67b6"),J=t("43a6"),D=Object(g["a"])(M,a,o,!1,null,null,null),F=D.exports;x()(D,{VApp:N["a"],VAppBar:I["a"],VAppBarNavIcon:$["a"],VContent:q["a"],VNavigationDrawer:z["a"],VRadio:B["a"],VRadioGroup:J["a"],VRow:V["a"]});var G=t("f309");r["a"].use(G["a"]);var H=new G["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:H,render:function(e){return e(F)}}).$mount("#app")}});
//# sourceMappingURL=app.cddd0e58.js.map