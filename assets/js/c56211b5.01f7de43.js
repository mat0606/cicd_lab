"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(87462),a=r(67294),i=r(86010),s=r(12466),o=r(16550),l=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=m(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=f({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),b=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var b=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:o,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==o&&(p(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,i.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===t})}),r??t)})))}function N(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},95877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(74866),r(85162);const i={title:"Part 1: Create build user in Nexus OSS"},s="Part 1: Create build user in Nexus OSS Image Registry",o={unversionedId:"nexus/configure_nexus",id:"nexus/configure_nexus",title:"Part 1: Create build user in Nexus OSS",description:"Nexus OSS is an active product with on-going development from SonarType.  Nexus OSS may introduce new feature which require us to do further configuration to work with the CI/CD blueprint and NKE Kubernetes cluster.",source:"@site/docs/nexus/configure_nexus.mdx",sourceDirName:"nexus",slug:"/nexus/configure_nexus",permalink:"/cicd_lab/nexus/configure_nexus",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/nexus/configure_nexus.mdx",tags:[],version:"current",frontMatter:{title:"Part 1: Create build user in Nexus OSS"},sidebar:"tutorialSidebar",previous:{title:"Provision Nexus OSS",permalink:"/cicd_lab/nexus/provision_nexus"},next:{title:"Part 2: Create Repository Nexus OSS",permalink:"/cicd_lab/nexus/configure_nexus2"}},l={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"part-1-create-build-user-in-nexus-oss-image-registry"},"Part 1: Create build user in Nexus OSS Image Registry"),(0,a.kt)("p",null,"Nexus OSS is an active product with on-going development from SonarType.  Nexus OSS may introduce new feature which require us to do further configuration to work with the CI/CD blueprint and NKE Kubernetes cluster."),(0,a.kt)("h1",{id:"login-to-nexus-oss"},"Login to Nexus OSS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Application"),".  Drill into the application provisioned."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(99113).Z,width:"903",height:"258"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Audit"),".  Scroll down.  Expand the ",(0,a.kt)("strong",{parentName:"p"},"Nexus Create"),"->",(0,a.kt)("strong",{parentName:"p"},"Nexus Output Password"),".  Copy the password."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(36710).Z,width:"794",height:"742"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the link.  Open a new browser and put the link in."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(76275).Z,width:"741",height:"187"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Sign In")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(97599).Z,width:"903",height:"225"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Key in ",(0,a.kt)("strong",{parentName:"p"},"admin")," and the password retrieved earlier."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(3441).Z,width:"466",height:"408"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Next."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(91701).Z,width:"903",height:"382"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Key in the password assigned by the user."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(16585).Z,width:"903",height:"385"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose ",(0,a.kt)("strong",{parentName:"p"},"Enable anonymous access")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(9428).Z,width:"903",height:"434"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Finish")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(72448).Z,width:"903",height:"382"})))),(0,a.kt)("h1",{id:"create-an-user-for-the-build"},"Create an user for the build"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Administration")," followed by ",(0,a.kt)("strong",{parentName:"p"},"Users"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(43007).Z,width:"903",height:"226"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Create local user"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(51786).Z,width:"903",height:"177"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the following details.",(0,a.kt)("br",{parentName:"p"}),"\n","a.\tusername: ",(0,a.kt)("strong",{parentName:"p"},"mat0606"),"\nb.\temail: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:mat0606@hotmail.com"},"mat0606@hotmail.com")),"\nc.\tGet the password from the trainer"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{src:r(94871).Z,width:"903",height:"334"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scroll down.  Select the following role.  Click on ",(0,a.kt)("strong",{parentName:"p"},"Create local user")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(93433).Z,width:"903",height:"381"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign Out and login with ",(0,a.kt)("strong",{parentName:"p"},"mat0606")," user successfully"))))}m.isMDXComponent=!0},99113:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus1-24da9c25848ee383f818fb5666b44366.png"},43007:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus10-671c05d511059b1e506f7ac00d4dc91b.png"},51786:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus11-c84de6e4e700d67621488fe6c83522cc.png"},94871:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus12-6298e6ee149df62d4896936ae66ab77e.png"},93433:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus13-b199949e29b9d456834ee28d5360fa94.png"},36710:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus2-f6802192e7fec2f1a3687c384fc6be04.png"},76275:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus3-78c1e4fe0247f539511e857c27354cd8.png"},97599:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus4-ef45824e4344337b3e959b023be103cd.png"},3441:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus5-7acd8d23f504b99dfb881943a703dfa0.png"},91701:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus6-d57c4913d565db204b9f6ddf320e18b4.png"},16585:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus7-28219d6da975328d84bce88b41d78c3a.png"},9428:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus8-f12eb09d75722a302d88cc0aa83ebb8d.png"},72448:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure_nexus9-dc7ab4891c0afa028f6bed33c2f12631.png"}}]);