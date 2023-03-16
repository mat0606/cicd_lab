"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[2470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(b,c(c({ref:t},u),{},{components:a})):r.createElement(b,c({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,c[1]=o;for(var i=2;i<l;i++)c[i]=a[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function c(e){let{children:t,hidden:a,className:c}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,c),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),l=a(86010),c=a(12466),o=a(16550),s=a(91980),i=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[c,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,i]=b({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var h=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,c.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==o&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:c}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},c,{className:(0,l.Z)("tabs__item",g.tabItem,c?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},61795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));a(74866),a(85162);const l={title:"Access Application"},c="Access the application",o={unversionedId:"cicd_lab/access_app",id:"cicd_lab/access_app",title:"Access Application",description:"1.\tPutty into a VM with kubectl installed.  Ensure the NKE KUBECONFIG was installed. Eg",source:"@site/docs/cicd_lab/access_app.mdx",sourceDirName:"cicd_lab",slug:"/cicd_lab/access_app",permalink:"/cicd_lab/cicd_lab/access_app",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/cicd_lab/access_app.mdx",tags:[],version:"current",frontMatter:{title:"Access Application"},sidebar:"tutorialSidebar",previous:{title:"Developer working on a change",permalink:"/cicd_lab/cicd_lab/"},next:{title:"Storage Concept in Kubernetes",permalink:"/cicd_lab/storage/csi"}},s={},i=[],u={toc:i},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"access-the-application"},"Access the application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Putty into a VM with kubectl installed.  Ensure the NKE KUBECONFIG was installed. Eg"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"KUBECONFIG=/home/centos/cluster-name-kubectl.cfg\nexport KUEBCONFIG.\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run this command.  It was assumed the MetalLB was installed for the external IP address to show."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n default get all\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This is the output picture"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(86402).Z,width:"1004",height:"540"})," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the browser and key in the external IP address for service/nginx-calm-svc-9149."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(29031).Z,width:"936",height:"437"})))))}d.isMDXComponent=!0},86402:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cicd_lab7-d88d35568e9f82336fcf32ae3a382df5.png"},29031:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cicd_lab8-198cd3220d6b22a9ab4849a6e7479d73.png"}}]);