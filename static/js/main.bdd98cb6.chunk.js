(this["webpackJsonpcolour-picker-mintbean-hackathon"]=this["webpackJsonpcolour-picker-mintbean-hackathon"]||[]).push([[0],{43:function(e,a,t){e.exports=t(61)},48:function(e,a,t){},49:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),c=t.n(o),i=(t(48),t(14)),l=(t(49),t(33));function s(e){var a=e.hex,t=e.complement,o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=c[0],m=c[1];return r.a.createElement(l.CopyToClipboard,{onCopy:function(){m(!0),setTimeout(m,1e3,!1)},text:a},r.a.createElement("div",{style:{backgroundColor:a,color:t},className:"color"},r.a.createElement("div",{style:{color:t},className:"hex-value"},r.a.createElement("p",{className:"copied-".concat(s," copied")},"Copied"),r.a.createElement("button",{style:{color:t},className:"hex-copy"},a))))}t(53);var m=t(34),u=t.n(m),d=t(35),v=t(28);function h(e){var a,t=e.hex,n=e.variation,o=e.brightness,c=e.saturation,i=e.setRandom;switch(n){case"tetrad":a=v(t).tetrad(5,5);break;case"analogous":a=v(t).analogous(5,5);break;case"monochromatic":a=v(t).monochromatic(5,5);break;case"splitcomplement":a=v(t).splitcomplement();break;case"triad":a=v(t).triad();break;case"complement":a=v(t).complement().toHexString();break;default:return}var l;return Array.isArray(a)?(l=a.map((function(e){var a=e.toHexString();a=v(a).brighten(o).saturate(c).toString();var t=v(a).isDark()?"brighten":"darken";return r.a.createElement(s,{key:u()(),hex:a,complement:v(a)[t](100).toString()})})),r.a.createElement("section",{id:"container"},l,r.a.createElement(d.a,{className:"random-btn",onClick:i,variant:"primary",size:"lg",block:!0},"Random"))):r.a.createElement(s,{hex:a})}var b=t(67),g=t(68),k=t(66);t(55);function p(e){var a=e.changeVariation,t=e.changeBrightness,n=e.changeSaturation,o=e.brightness,c=e.saturation,i=function(e){switch(e.target.name){case"brighten":t(o+10);break;case"darken":t(o-10);break;case"desaturate":n(c-10);break;case"saturate":n(c+10)}};return r.a.createElement("div",null,r.a.createElement(b.a,{expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(b.a.Brand,null,"Color Palette Generator"),r.a.createElement(k.a,{onSelect:function(e){a(e)},title:"Variation",id:"variation"},r.a.createElement(k.a.Item,{eventKey:"analogous"},"Analogous"),r.a.createElement(k.a.Divider,null),r.a.createElement(k.a.Item,{eventKey:"monochromatic"},"Monochromatic"),r.a.createElement(k.a.Divider,null),r.a.createElement(k.a.Item,{eventKey:"complement"},"Complement"),r.a.createElement(k.a.Item,{eventKey:"splitcomplement"},"Split Complement"),r.a.createElement(k.a.Divider,null),r.a.createElement(k.a.Item,{eventKey:"triad"},"Triad"),r.a.createElement(k.a.Item,{eventKey:"tetrad"},"Tetrad"),r.a.createElement(k.a.Divider,null)),r.a.createElement(g.a.Link,{value:"brighten",name:"brighten",onClick:function(e){return i(e)}},"Brighten"),r.a.createElement(g.a.Link,{value:"brighten",name:"darken",onClick:function(e){return i(e)}},"Darken"),r.a.createElement(g.a.Link,{value:"saturate",name:"desaturate",onClick:function(e){return i(e)}},"Desaturate"),r.a.createElement(g.a.Link,{value:"saturate",name:"saturate",onClick:function(e){return i(e)}},"Saturate")))))}var E=t(28),f=t.n(E);var y=function(){var e=Object(n.useState)("#5f42ad"),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)("analogous"),l=Object(i.a)(c,2),s=l[0],m=l[1],u=Object(n.useState)(0),d=Object(i.a)(u,2),v=d[0],b=d[1],g=Object(n.useState)(0),k=Object(i.a)(g,2),E=k[0],y=k[1],S=function(){var e=f.a.random().toHexString();b(0),y(0),o(e)},C=function(e){var a=e.target.classList.contains("nav-link");32===e.keyCode&&!a&&S()};return Object(n.useEffect)((function(){document.querySelector("body").addEventListener("keyup",C)}),[]),r.a.createElement("main",{className:"App"},r.a.createElement(p,{changeVariation:m,changeHex:o,changeBrightness:b,changeSaturation:y,setRandom:S,brightness:v,saturation:E}),r.a.createElement(h,{brightness:v,saturation:E,variation:s,setRandom:S,hex:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.bdd98cb6.chunk.js.map