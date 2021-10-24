"use strict";(self.webpackChunkwechlertj_github_io=self.webpackChunkwechlertj_github_io||[]).push([[9602],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=i,p=m["".concat(u,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6541:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(3769);function r(e){return console.log(e),a.createElement("div",{className:i.Z.listParent},a.createElement("div",{className:i.Z.listChild},e.children[0]),a.createElement("div",{className:i.Z.listChild},e.children[1]))}},264:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var a=n(7462),i=n(3366),r=n(7294),l=n(4137),o=n(6541),u=["components"],s={},c=void 0,d={unversionedId:"grundlagen/installation",id:"grundlagen/installation",isDocsHomePage:!1,title:"installation",description:"https://texwelt.de/fragen/11038/wie-installiere-ich-latex",source:"@site/latex/grundlagen/installation.mdx",sourceDirName:"grundlagen",slug:"/grundlagen/installation",permalink:"/latex/grundlagen/installation",tags:[],version:"current",frontMatter:{},sidebar:"latex",previous:{title:"Einleitung",permalink:"/latex/grundlagen/einleitung"},next:{title:"Preamble",permalink:"/latex/grundlagen/preamble"}},m=[{value:"\ud83d\uddc4 Packet Manager",id:"-packet-manager",children:[{value:"MikTeX",id:"miktex",children:[]},{value:"TeXLive",id:"texlive",children:[]},{value:"MacTeX (TeXLive)",id:"mactex-texlive",children:[]}]},{value:"\ud83d\udcdf Editoren",id:"-editoren",children:[{value:"TeXmaker",id:"texmaker",children:[]},{value:"TeXStudio",id:"texstudio",children:[]},{value:"Online",id:"online",children:[]},{value:"Visual Studio Code",id:"visual-studio-code",children:[]}]}],h={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://texwelt.de/fragen/11038/wie-installiere-ich-latex"},"https://texwelt.de/fragen/11038/wie-installiere-ich-latex")),(0,l.kt)("h1",{id:"installationshinweise"},"Installationshinweise"),(0,l.kt)("p",null,"Es gibt mehrere M\xf6glichkeiten wie ich LaTeX auf eurem PC nutzen k\xf6nnt. zum einen gibt es die M\xf6glichkeit ein Packet-Manager und ein Editor zu installieren, und dann gibt es noch die M\xf6glichkeit eine Online-Plattform zu nutzen. Das Gute an der Online-Plattform ist, ihr k\xf6nnt nach der anmeldung direkt loslegen. Nachteil ist, ihr braucht immer Internet wenn ihr daran arbeiten wollt und oder Datenschutz. Ich will da auch nicht weiter darauf eingehen. "),(0,l.kt)("p",null,'Da ihr, falls ihr es Lokal auf eurem Rechner nutzen wollt mehrere Sachen "beachten" m\xfcsst m\xf6chte ich euch das auch jetzt n\xe4her bringen. '),(0,l.kt)("p",null,"Um Latex auf euren PC zu nutzen braucht ihr zum einen ein Packetmanager der, alle Packete und Dokumentenklassen zur verf\xfcgung stellt. Zum anderen braucht ihr noch ein Editor mit dem ihr die Dateien erstellt und der die Tex-Befehle umsetzt und euch ein Dokument erstellt. "),(0,l.kt)("h2",{id:"-packet-manager"},"\ud83d\uddc4 Packet Manager"),(0,l.kt)(o.Z,{mdxType:"DocDoubleList"},(0,l.kt)(r.Fragment,null,(0,l.kt)("p",null,"Als erstes m\xf6chte ich euch drei Packetmanager n\xe4her bringen.\nDa w\xe4hre zum einen ",(0,l.kt)("a",{parentName:"p",href:"#miktex"},(0,l.kt)("strong",{parentName:"a"},"MikTeX")),", ",(0,l.kt)("a",{parentName:"p",href:"#texlive"},(0,l.kt)("strong",{parentName:"a"},"TeXLive"))," und ",(0,l.kt)("a",{parentName:"p",href:"#mactex-texlive"},(0,l.kt)("strong",{parentName:"a"},"MacTeX")),". "),(0,l.kt)("p",null,"Die Installation der einzelnen habe ich auf den folgenden Seiten nochmal genauer beschrieben, hier soll euch nur eine \xdcbersicht gegeben werden.\nZum einen seht ihr, mit welchem Betriebsystem die jeweiligen kompatibel sind und zum andern hab ich euch den Link zur jeweiligen Downloadseite hinzugef\xfcgt. ")),(0,l.kt)(r.Fragment,null,(0,l.kt)("h3",{id:"miktex"},(0,l.kt)("a",{parentName:"h3",href:"/latex/grundlagen/installation-miktex"},"MikTeX")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Betriebssystem"),": Windows / MacOS / Linux"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Download-Link"),": ",(0,l.kt)("a",{parentName:"li",href:"https://miktex.org/download"},"https://miktex.org/download"))),(0,l.kt)("h3",{id:"texlive"},(0,l.kt)("a",{parentName:"h3",href:"/latex/grundlagen/installation-texlive"},"TeXLive")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Betriebssystem"),": Windows / MacOS / Linux"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Download-Link"),": ",(0,l.kt)("a",{parentName:"li",href:"https://www.tug.org/texlive/acquire-netinstall.html"},"https://www.tug.org/texlive/acquire-netinstall.html")," ")),(0,l.kt)("h3",{id:"mactex-texlive"},(0,l.kt)("a",{parentName:"h3",href:"/latex/grundlagen/installation-mactex"},"MacTeX (TeXLive)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Betriebssystem"),": MacOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Download-Link"),":   ",(0,l.kt)("a",{parentName:"li",href:"https://www.tug.org/mactex/mactex-download.html"},"https://www.tug.org/mactex/mactex-download.html")," ")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Ich selbst habe MikTeX auf Windows und MacTeX auf MacOS installiert und jeweils gute Erfahrungen gesammlt. MikTeX hatte bei mir auf MacOS Probleme verursacht, die ich selbst nicht l\xf6sen konnte. Daher seit nicht verzweifelt, falls einer der Packetmanager Probleme macht, veruscht einfach einen anderen aus."))),(0,l.kt)("h2",{id:"-editoren"},"\ud83d\udcdf Editoren"),(0,l.kt)(o.Z,{mdxType:"DocDoubleList"},(0,l.kt)(r.Fragment,null,(0,l.kt)("p",null,"Als n\xe4chstes gibt es die Editoren, mit denen ihr schlussendlich die LaTeX-Dokumente erstellt."),(0,l.kt)("p",null,"Die Wahl hier bei ist Gro\xdfteils Geschmacksache, da sie sich eigentlich nur in der Optik wirklich unterscheiden.\nZu dieser Liste, die ich euch hier vorstelle, gibt es noch viele weitere. Die ihr gerne selbst ausprobieren d\xfcrft. Ich m\xf6chte es hier aber auf was wesentliche beschr\xe4nken. "),(0,l.kt)("p",null,"Bei der Online-Variante muss euch bewusst sein, dass ihr immer Internet zur Arbeit ben\xf6tigt und bei der ",(0,l.kt)("strong",{parentName:"p"},"Visual Studio Code (vsCode)")," m\xfcsst ihr ein paar Dinge einstellen bevor ihr LaTeX schreiben k\xf6nnt. "),(0,l.kt)("p",null,"Falls ihr euch f\xfcr MikTeX oder MacTeX entscheiden sollte, habt ihr auch einen vereinfachten Editor schon dabei. Diese habe ich selbst nie benutzt, daher kann ich nicht viel \xfcber deren Funktionsumfang sagen. "),(0,l.kt)("p",null,"Meine Empfehlung f\xfcr den Start ist TeXmaker oder TeXStudio. ")),(0,l.kt)(r.Fragment,null,(0,l.kt)("h3",{id:"texmaker"},(0,l.kt)("a",{parentName:"h3",href:"#"},"TeXmaker")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Betriebssystem"),": Windows / MacOS / Linux"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Download-Link"),":   ",(0,l.kt)("a",{parentName:"li",href:"https://www.tug.org/mactex/mactex-download.html"},"https://www.tug.org/mactex/mactex-download.html")," ")),(0,l.kt)("h3",{id:"texstudio"},"TeXStudio"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Betriebssystem"),": Windows / MacOS / Linux"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Download-Link"),":   ",(0,l.kt)("a",{parentName:"li",href:"https://www.tug.org/mactex/mactex-download.html"},"https://www.tug.org/mactex/mactex-download.html")," ")),(0,l.kt)("h3",{id:"online"},"Online"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Betriebssystem"),": unabh\xe4ngig"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Seiten"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TeXStudio"),(0,l.kt)("li",{parentName:"ul"},"Test")))),(0,l.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Betriebssystem"),": Windows / MacOS / Linux"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Download-Link"),":   ",(0,l.kt)("a",{parentName:"li",href:"https://www.tug.org/mactex/mactex-download.html"},"https://www.tug.org/mactex/mactex-download.html")," ")))))}p.isMDXComponent=!0},3769:function(e,t){t.Z={listParent:"listParent_2yHy",listChild:"listChild_dA0G"}}}]);