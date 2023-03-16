"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[8502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(f,c(c({ref:t},u),{},{components:r})):a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=r[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function c(e){let{children:t,hidden:r,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,c),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),l=r(86010),c=r(12466),i=r(16550),s=r(91980),o=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[c,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,o]=f({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),h=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),b(e)}),[o,b,l]),tabValues:l}}var h=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,c.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=o[r].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},o.map((e=>{let{value:t,label:r,attributes:c}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},c,{className:(0,l.Z)("tabs__item",g.tabItem,c?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},32991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));r(74866),r(85162);const l={title:"Defect Management"},c="Business User creates defect",i={unversionedId:"cicd_lab/create_defect",id:"cicd_lab/create_defect",title:"Defect Management",description:"1.  Click on your Chrome Browser or Internet Explorer.   The JIRA IP Address is available in the Excel spreadsheet.",source:"@site/docs/cicd_lab/create_defect.mdx",sourceDirName:"cicd_lab",slug:"/cicd_lab/create_defect",permalink:"/cicd_lab/cicd_lab/create_defect",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/cicd_lab/create_defect.mdx",tags:[],version:"current",frontMatter:{title:"Defect Management"},sidebar:"tutorialSidebar",previous:{title:"Part 2 Build & Deployment Verification",permalink:"/cicd_lab/env_verify/env_verify2"},next:{title:"Developer working on a change",permalink:"/cicd_lab/cicd_lab/"}},s={},o=[],u={toc:o},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"business-user-creates-defect"},"Business User creates defect"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on your Chrome Browser or Internet Explorer.   The JIRA IP Address is available in the Excel spreadsheet."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"http://<JIRA IP Address>:8080. \n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login using"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"User Name: business_user\nPassword: retrieve password from trainer\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This is the picture"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(18490).Z,width:"861",height:"484"})," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Create an issue")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(43479).Z,width:"1197",height:"474"})," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Mountain Ranking Project")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(46689).Z,width:"1199",height:"370"})," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"bug"),".  Fill in the details.  Click on ",(0,n.kt)("strong",{parentName:"p"},"Create")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(64515).Z,width:"1175",height:"332"})," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This pop-up message will disappear in a few seconds.  Click on the link to look at the details of the created defect  "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(90144).Z,width:"631",height:"241"})," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The defect had not been assigned"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(19787).Z,width:"977",height:"500"})))))}d.isMDXComponent=!0},43479:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cicd_lab10-04c447b8dce1f3e2f000cffa341ae373.png"},46689:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cicd_lab11-36dc2f8cdf1dfacaa5a56e2c5d47c9b0.png"},64515:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cicd_lab12-55c4c2fc5ea8dafd8dc89f6d9ecd3ff4.png"},90144:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cicd_lab13-b091139494b4cc653ac1fd9584565853.png"},19787:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cicd_lab14-9ade6a6c1ada4a8f60bfcdfe030f951a.png"},18490:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cicd_lab9-259d758f7530488c675b986205c6ecb7.png"}}]);