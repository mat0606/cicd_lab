"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7462),a=n(7294),i=n(6010),o=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=f({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),h=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},5877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));n(4866),n(5162);const i={title:"Part 1: Configure Nexus OSS"},o="Part 1: Configure Nexus OSS Image Registry",s={unversionedId:"nexus/configure_nexus",id:"nexus/configure_nexus",title:"Part 1: Configure Nexus OSS",description:"Nexus OSS is an active product with on-going development from SonarType.  Nexus OSS may introduce new feature which require us to do further configuration to work with the CI/CD blueprint and NKE Kubernetes cluster.",source:"@site/docs/nexus/configure_nexus.mdx",sourceDirName:"nexus",slug:"/nexus/configure_nexus",permalink:"/cicd_lab/nexus/configure_nexus",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/nexus/configure_nexus.mdx",tags:[],version:"current",frontMatter:{title:"Part 1: Configure Nexus OSS"},sidebar:"tutorialSidebar",previous:{title:"Provision Nexus OSS",permalink:"/cicd_lab/nexus/provision_nexus"},next:{title:"Part 2: Configure Nexus OSS",permalink:"/cicd_lab/nexus/configure_nexus2"}},l={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"part-1-configure-nexus-oss-image-registry"},"Part 1: Configure Nexus OSS Image Registry"),(0,a.kt)("p",null,"Nexus OSS is an active product with on-going development from SonarType.  Nexus OSS may introduce new feature which require us to do further configuration to work with the CI/CD blueprint and NKE Kubernetes cluster."),(0,a.kt)("h1",{id:"login-to-nexus-oss"},"Login to Nexus OSS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Application"),".  Drill into the application provisioned."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9113).Z,width:"903",height:"258"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Audit"),".  Scroll down.  Expand the ",(0,a.kt)("strong",{parentName:"p"},"Nexus Create"),"->",(0,a.kt)("strong",{parentName:"p"},"Nexus Output Password"),".  Copy the password."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6710).Z,width:"794",height:"742"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the link.  Open a new browser and put the link in."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6275).Z,width:"741",height:"187"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Sign In")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(7599).Z,width:"903",height:"225"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Key in ",(0,a.kt)("strong",{parentName:"p"},"admin")," and the password retrieved earlier."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(3441).Z,width:"466",height:"408"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Next."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(1701).Z,width:"903",height:"382"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Key in the password assigned by the user."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6585).Z,width:"903",height:"385"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose ",(0,a.kt)("strong",{parentName:"p"},"Enable anonymous access")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9428).Z,width:"903",height:"434"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Finish")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(2448).Z,width:"903",height:"382"})))),(0,a.kt)("h1",{id:"create-an-user-for-the-build"},"Create an user for the build"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Administration")," followed by ",(0,a.kt)("strong",{parentName:"p"},"Users"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(3007).Z,width:"903",height:"226"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Create local user"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(1786).Z,width:"903",height:"177"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the following details.",(0,a.kt)("br",{parentName:"p"}),"\n","a.\tusername: ",(0,a.kt)("strong",{parentName:"p"},"mat0606"),"\nb.\temail: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:mat0606@hotmail.com"},"mat0606@hotmail.com")),"\nc.\tGet the password from the trainer"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{src:n(4871).Z,width:"903",height:"334"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scroll down.  Select the following role.  Click on ",(0,a.kt)("strong",{parentName:"p"},"Create local user")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(3433).Z,width:"903",height:"381"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign Out and login with ",(0,a.kt)("strong",{parentName:"p"},"mat0606")," user successfully"))))}m.isMDXComponent=!0},9113:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus1-24da9c25848ee383f818fb5666b44366.png"},3007:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus10-671c05d511059b1e506f7ac00d4dc91b.png"},1786:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus11-c84de6e4e700d67621488fe6c83522cc.png"},4871:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus12-6298e6ee149df62d4896936ae66ab77e.png"},3433:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus13-b199949e29b9d456834ee28d5360fa94.png"},6710:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus2-f6802192e7fec2f1a3687c384fc6be04.png"},6275:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus3-78c1e4fe0247f539511e857c27354cd8.png"},7599:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus4-ef45824e4344337b3e959b023be103cd.png"},3441:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus5-7acd8d23f504b99dfb881943a703dfa0.png"},1701:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus6-d57c4913d565db204b9f6ddf320e18b4.png"},6585:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus7-28219d6da975328d84bce88b41d78c3a.png"},9428:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus8-f12eb09d75722a302d88cc0aa83ebb8d.png"},2448:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/configure_nexus9-dc7ab4891c0afa028f6bed33c2f12631.png"}}]);