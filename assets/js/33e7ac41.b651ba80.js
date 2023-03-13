"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(7462),n=a(7294),i=a(6010),o=a(2466),l=a(6550),s=a(1980),c=a(7392),p=a(12);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,c]=g({queryString:a,groupId:r}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),b=(()=>{const e=s??u;return d({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var b=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==l&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},3049:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));a(4866),a(5162);const i={title:"Setup JIRA"},o="Setup JIRA",l={unversionedId:"jira/configure_jira",id:"jira/configure_jira",title:"Setup JIRA",description:"1.\tNavigate to Application on the left hand side.  Drill into the application.  Eg MRPENVGP5",source:"@site/docs/jira/configure_jira.mdx",sourceDirName:"jira",slug:"/jira/configure_jira",permalink:"/cicd_lab/jira/configure_jira",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/jira/configure_jira.mdx",tags:[],version:"current",frontMatter:{title:"Setup JIRA"},sidebar:"tutorialSidebar",previous:{title:"Configure Worker Node in NKE cluster",permalink:"/cicd_lab/nexus_nke/worker_node"},next:{title:"Create Sample Project",permalink:"/cicd_lab/jira/create_project"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setup-jira"},"Setup JIRA"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("strong",{parentName:"p"},"Application")," on the left hand side.  Drill into the application.  Eg MRP_ENV_GP5  "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(3625).Z,width:"903",height:"222"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Services"),".  Click on ",(0,n.kt)("strong",{parentName:"p"},"JIRA")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(3322).Z,width:"903",height:"251"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Note down the ",(0,n.kt)("strong",{parentName:"p"},"IP address"),".  Click on ",(0,n.kt)("strong",{parentName:"p"},"Open Terminal")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(4230).Z,width:"438",height:"340"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run this command to navigate to the JIRA directory and shutdown JIRA"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/atlassian/jira/bin\nsudo ./shutdown.sh\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This is the output of running the above command."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(7427).Z,width:"903",height:"360"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run this command to startup JIRA"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./startup.sh\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This is the output of running the above command"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(3454).Z,width:"903",height:"397"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open a browser:  Put in the following url:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"http://JIRA IP address:8080\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Set it up for me"),".  Select ",(0,n.kt)("strong",{parentName:"p"},"Continue to MyAtlassian")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5753).Z,width:"903",height:"595"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Sign in to Atlassian with Google")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(6308).Z,width:"903",height:"563"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Jira Software (Data Center)")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(4073).Z,width:"903",height:"828"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Generate License")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(535).Z,width:"903",height:"236"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Yes")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(2278).Z,width:"717",height:"283"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change to your email address.  Key in your own password.  Click on Next"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(1152).Z,width:"903",height:"431"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait a few mins for JIRA to power up"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(6619).Z,width:"903",height:"293"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The installation is ready.  Click on ",(0,n.kt)("strong",{parentName:"p"},"Let\u2019s get started")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5059).Z,width:"903",height:"530"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Continue")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(494).Z,width:"903",height:"380"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Choose an avatar"),".  Click on ",(0,n.kt)("strong",{parentName:"p"},"Next")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(3557).Z,width:"903",height:"384"})))))}m.isMDXComponent=!0},3625:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira1-0049e6f14545d7664935a115630ada09.png"},2278:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira10-48d87a2b827cdbba861ff31db0ee6366.png"},1152:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira11-25de00dd478aa5a4db9b99200864fcf5.png"},6619:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira12-b45468fb9d1e1c0dfe7c203e40903c7e.png"},5059:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira13-0d63667011d2798faee5383f55ed52dd.png"},494:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira14-534b807dcba986d7f984a143a2bd3e93.png"},3557:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira15-c62609a3a6bc903648431cb1b2fe1168.png"},3322:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira2-c4b006b256afe3781d54e30007e41d80.png"},4230:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira3-7d01d033ebb388afb2db821d8fbc6715.png"},7427:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira4-a9ccc729ab27868b94d663154de19338.png"},3454:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira5-ba817cc05452b68bf6c4267c938e6d45.png"},5753:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira6-a6f8aad9fb211f3b713fbca5d1e5c46f.png"},6308:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira7-25286bd366732a7bc153d31109745dcc.png"},4073:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira8-a13bf4b8a85a4ed90d424d280cb2df42.png"},535:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/jira9-041d3e19000d6a48b83f218de8f08063.png"}}]);