"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[6538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function A(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:n,groupId:r}),[p,A]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),A(e)}),[u,A,l]),tabValues:l}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function E(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=A(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(E,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function h(e){const t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},99042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));n(74866),n(85162);const l={title:"Connect to K8S cluster"},o="Connect to the Kubernetes cluster",i={unversionedId:"storage/kubeconfig",id:"storage/kubeconfig",title:"Connect to K8S cluster",description:"1.\tNavigate to the Calm application of the Kubernetes cluster",source:"@site/docs/storage/kubeconfig.mdx",sourceDirName:"storage",slug:"/storage/kubeconfig",permalink:"/cicd_lab/storage/kubeconfig",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/storage/kubeconfig.mdx",tags:[],version:"current",frontMatter:{title:"Connect to K8S cluster"},sidebar:"tutorialSidebar",previous:{title:"Storage Concept in Kubernetes",permalink:"/cicd_lab/storage/csi"},next:{title:"Consumption of Nutanix Volumes",permalink:"/cicd_lab/storage/volume_pvc"}},s={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-the-kubernetes-cluster"},"Connect to the Kubernetes cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the Calm application of the Kubernetes cluster"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(66629).Z,width:"602",height:"209"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Manage"),".  Click on ",(0,a.kt)("strong",{parentName:"p"},"Download Kube Config"),".  The kubeconfig file in NKE Kubernetes cluster is valid for 24 hours only.  "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(47986).Z,width:"481",height:"440"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Service"),".  Click on ",(0,a.kt)("strong",{parentName:"p"},"Karbon"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(82821).Z,width:"481",height:"222"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the right side of the screen, note down the IP address."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(19030).Z,width:"293",height:"168"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Putty into the Centos VM")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run these commands."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/home/centos/cluster-name-kubectl.cfg\nkubectl get nodes\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This is the output of these commands."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(71549).Z,width:"602",height:"80"})))))}m.isMDXComponent=!0},66629:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/volume1-8e9d9fb9b89e2b1dfd065c941c9186b6.png"},47986:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/volume2-68def8dd991b991381b25e751a2e2ae8.png"},82821:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/volume3-b41933cebb7172130b0d451bbeb6218b.png"},19030:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},71549:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/volume5-f2ed57f935e0d16acfdafeae71c13f88.png"}}]);