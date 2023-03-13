"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[1620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,c]=f({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=s??p;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var b=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},2899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(4866),n(5162);const i={title:"Provision Development Environment"},o="Continuous Integration & Continuous Delivery",l={unversionedId:"cicd/provision_env",id:"cicd/provision_env",title:"Provision Development Environment",description:"The Continuous Integration/Continuous Delivery was setup using 2 different Calm blueprints:",source:"@site/docs/cicd/provision_env.mdx",sourceDirName:"cicd",slug:"/cicd/provision_env",permalink:"/cicd_lab/cicd/provision_env",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/cicd/provision_env.mdx",tags:[],version:"current",frontMatter:{title:"Provision Development Environment"},sidebar:"tutorialSidebar",previous:{title:"Part 2: Configure Nexus OSS",permalink:"/cicd_lab/nexus/configure_nexus2"},next:{title:"Installing Jenkins Plugins",permalink:"/cicd_lab/cicd/configure_jenkins"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"continuous-integration--continuous-delivery"},"Continuous Integration & Continuous Delivery"),(0,a.kt)("p",null,"The Continuous Integration/Continuous Delivery was setup using 2 different Calm blueprints:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provision Development Environment")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy application into NKE Kubernetes cluster"))),(0,a.kt)("h1",{id:"provision-development-environment"},"Provision Development Environment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Development Environment comprises of the following:\na.\t",(0,a.kt)("strong",{parentName:"p"},"Developer Workstation")," \u2013 developer to develop their application\nb.\t",(0,a.kt)("strong",{parentName:"p"},"Gitolite")," \u2013 version control source code\nc.\t",(0,a.kt)("strong",{parentName:"p"},"Jenkins Master")," \u2013 CI tool\nd.\t",(0,a.kt)("strong",{parentName:"p"},"2 Jenkins slave")," \u2013 execute build job")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the Calm Blueprint.  Filter by ",(0,a.kt)("strong",{parentName:"p"},"CICD"),".  Click on ",(0,a.kt)("strong",{parentName:"p"},"Launch")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(3533).Z,width:"903",height:"286"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the following:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(334).Z,width:"839",height:"418"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scroll down.  Fill in the Nexus Repository VM name"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9522).Z,width:"841",height:"461"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the blueprint name for initial_app_deploy_blueprint according to your assigned cluster.  Eg"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Application Deployment K8s Karbon Containers 171")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(679).Z,width:"833",height:"417"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Nutanix cluster assigned by the trainer"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(7018).Z,width:"837",height:"468"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Nutanix cluster assigned by the trainer"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(2964).Z,width:"833",height:"462"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Nutanix cluster assigned by the trainer"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6397).Z,width:"838",height:"463"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Nutanix cluster assigned by the trainer"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(776).Z,width:"837",height:"460"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the IP address of the Nexus VM as assigned by your trainer"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(8782).Z,width:"903",height:"361"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Nutanix cluster assigned by the trainer"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(2671).Z,width:"839",height:"405"})))),(0,a.kt)("h1",{id:"resolve-joining-the-ad-domain-failure"},"Resolve Joining the AD Domain Failure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Joining the AD domain may fail when multiple requests are initiated to the AD server on Ubuntu 20.04 disk image.  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Retry"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(5276).Z,width:"673",height:"553"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wait a few seconds and verify successful execution"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6400).Z,width:"536",height:"482"})))))}m.isMDXComponent=!0},3533:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_1-221f9600408e0494e15faf0acf0aeb4d.png"},2671:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_10-157d7c3a079df33f7803c594f14ff110.png"},5276:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_11-346e56405a7c586edd2179d2699fd417.png"},6400:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_12-1fb1fb7cc7f5d314337ca49341f0358e.png"},334:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_2-674113a2aed3cfe727d9856d39f180c7.png"},9522:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_3-037563ec26309b2ef51248211b5b93fc.png"},679:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_4-ca4e0a2b0dc161ec70801bb952ab086c.png"},7018:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_5-77f2f15fb0355b8ced375671d2cc40e2.png"},2964:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_6-20217034eff0d5b06f4c008fd9693f40.png"},6397:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_7-b208a41c847e290e002bba8a8d5749c6.png"},776:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_8-6a91fbcf98589421575f498e8084deb1.png"},8782:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/provision_ci_9-cd18f43a86e1358557b9524ba95f0464.png"}}]);