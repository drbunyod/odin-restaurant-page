(()=>{"use strict";var e={523:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(601),r=n.n(a),i=n(314),o=n.n(i)()(r());o.push([e.id,"* {\n    text-align: center;\n}\n\n.headline {\n    font-size: 1.2em;\n    font-style: italic;\n}\n\nimg.banner {\n    width: 500px;\n    margin: 0 3px;\n}\n\n.menu-item {\n    display: grid;\n    grid-template-columns: 150px 400px;\n    margin: 10px auto;\n    max-width: fit-content;\n    border: 1px dashed;\n}\n\n.menu-item-name {\n    font-weight: bold;\n}\n\n.menu-item-image {\n    width: 150px;\n}",""]);const s=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=a(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"images/b793b634671d2da6e6bf.png",t=n.p+"images/429b5ca11773f84ba263.png",a=function(n){n.innerHTML="";const a=document.createElement("p");a.classList.add("headline"),a.textContent="Embark on a Culinary Journey to Asgard!",n.appendChild(a);const r=document.createElement("img");r.classList.add("banner"),r.src=t,n.appendChild(r);const i=document.createElement("img");i.classList.add("banner"),i.src=e,n.appendChild(i);const o=document.createElement("p");o.textContent="Step into the enchanting realm of AsgardEats, where every visit is a journey into the heart of Norse mythology. Nestled amidst the mortal realm, our restaurant beckons adventurers and epicureans alike to experience the magic of Asgardian hospitality. Join us on a voyage beyond the realms of ordinary dining, where every meal is an epic saga waiting to unfold. Discover the wonders of AsgardEats and let your taste buds embark on a culinary odyssey like no other.",n.appendChild(o)},r=n.p+"images/0576a056455d2a73f7e2.jpeg",i=n.p+"images/85bcb9cdee3beb27f21b.jpeg",o=n.p+"images/e5dfce7af12721c7896f.jpeg",s=n.p+"images/beb111cbae923cfb07dd.jpeg",c=n.p+"images/be1b6f01a956305ddfc8.jpeg",d=n.p+"images/80991bbf5624263da1a0.jpeg",l=n.p+"images/2543fa5ad3dd88b4c182.jpeg";var p=n(72),u=n.n(p),m=n(825),f=n.n(m),h=n(659),g=n.n(h),v=n(56),b=n.n(v),y=n(540),w=n.n(y),x=n(113),C=n.n(x),E=n(523),A={};A.styleTagTransform=C(),A.setAttributes=b(),A.insert=g().bind(null,"head"),A.domAPI=f(),A.insertStyleElement=w(),u()(E.A,A),E.A&&E.A.locals&&E.A.locals;const L=document.querySelector("#content");document.querySelector("#home").addEventListener("click",(()=>a(L))),document.querySelector("#menu").addEventListener("click",(()=>function(e){e.innerHTML="";const t=document.createElement("p");t.classList.add("headline"),t.textContent="Our Menu",e.appendChild(t);const n=[{title:"Thor's Thunderous Ribs",description:"Tender pork ribs marinated in a savory blend of spices and grilled to perfection, served with a side of Viking slaw and Odin's ale-infused barbecue sauce.",image:c,price:250},{title:"Bifröst Burger",description:"A towering burger piled high with a juicy beef patty, crispy bacon, melted Gouda cheese, caramelized onions, and tangy barbecue sauce, served on a toasted brioche bun.",image:i,price:120},{title:"Yggdrasil Veggie Delight Pizza",description:"A mouthwatering pizza featuring a crispy thin crust topped with a flavorful tomato sauce, melted mozzarella cheese, and a colorful array of roasted vegetables.",image:s,price:180},{title:"Odin's Wisdom Soup",description:"A comforting soup made with roasted root vegetables, barley, and hearty beans, simmered in a savory broth infused with herbs and spices.",image:d,price:65},{title:"Valkyrie's Valor Veggie Platter",description:"A colorful assortment of roasted root vegetables, grilled mushrooms, and crispy kale chips, drizzled with Freyja's honey-mustard dressing and sprinkled with toasted almonds.",image:l,price:90},{title:"Bifröst Breeze",description:"A tropical-inspired cocktail made with rum, pineapple juice, coconut cream, and a splash of lime juice, shaken with ice and strained into a chilled glass.",image:r,price:30},{title:"Odin's Mead",description:"A traditional Nordic honey wine crafted using ancient recipes, offering a rich and complex flavor profile with notes of honey, herbs, and spices.",image:o,price:45}];for(const t of n){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("div"),r=document.createElement("img");r.classList.add("menu-item-image"),r.src=t.image,a.appendChild(r),n.appendChild(a);const i=document.createElement("div"),o=document.createElement("p");o.classList.add("menu-item-name"),o.textContent=t.title,i.appendChild(o);const s=document.createElement("p");s.textContent=t.description,i.appendChild(s);const c=document.createElement("p");c.classList.add("menu-item-price"),c.textContent=`₼${t.price.toFixed(2)}`,i.appendChild(c),n.appendChild(i),e.appendChild(n)}}(L))),document.querySelector("#about").addEventListener("click",(()=>function(e){e.innerHTML="";const n=document.createElement("p");n.classList.add("headline"),n.textContent="AsgardEats",e.appendChild(n);const a=document.createElement("img");a.classList.add("banner"),a.src=t,e.appendChild(a);const r={Address:"12 Valhalla Avenue, Asgard","Opening Hours":"9am - 12am",Phone:"+1 (555) 123-VALHALLA",Email:"asgardeats@odinmail.com"};for(const t in r){const n=document.createElement("p"),a=document.createElement("strong");a.textContent=`${t}: `,n.appendChild(a);const i=document.createTextNode(r[t]);n.appendChild(i),e.appendChild(n)}}(L))),a(L)})()})();