"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[2527],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={title:"Marketplace"},i="Overview",p={unversionedId:"calm_marketplace/calm_marketplace",id:"calm_marketplace/calm_marketplace",title:"Marketplace",description:"In this exercise you will learn how to manage Calm Blueprints within the Nutanix Marketplace. As part of the exercise you will publish a",source:"@site/docs/calm_marketplace/calm_marketplace.mdx",sourceDirName:"calm_marketplace",slug:"/calm_marketplace/",permalink:"/cicd_lab/calm_marketplace/",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/calm_marketplace/calm_marketplace.mdx",tags:[],version:"current",frontMatter:{title:"Marketplace"},sidebar:"tutorialSidebar",previous:{title:"Projects",permalink:"/cicd_lab/calm_project/"},next:{title:"Provision NKE cluster",permalink:"/cicd_lab/nke/provision_nke"}},o={},c=[{value:"Publishing Blueprints from Marketplace Manager",id:"publishing-blueprints-from-marketplace-manager",level:2},{value:"Launch Blueprints from Marketplace",id:"launch-blueprints-from-marketplace",level:2},{value:"Takeaways",id:"takeaways",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In this exercise you will learn how to manage Calm Blueprints within the Nutanix Marketplace. As part of the exercise you will publish a\npre-configured Blueprint to the local Marketplace, clone the Blueprint from the Marketplace for editing, and launch the application."),(0,n.kt)("h2",{id:"publishing-blueprints-from-marketplace-manager"},"Publishing Blueprints from Marketplace Manager"),(0,n.kt)("p",null,"By default, Calm comes pre-seeded with validated Blueprints for multiple open source and enterprise applications. Marketplace Manager acts as a\nstaging area for publishing default and user-created Blueprints to your local Marketplace. The Marketplace acts as an application store,\nproviding end users with a catalog of available applications."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From ",(0,n.kt)("strong",{parentName:"p"},"Prism Central > Calm"),"\n")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Marketplace Manager")," from the sidebar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under ",(0,n.kt)("strong",{parentName:"p"},"Marketplace Blueprints"),", select ",(0,n.kt)("strong",{parentName:"p"},"Mongo"),"."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The Blueprint description contains key information including licensing, hardware requirements, OS, supported platforms, and limitations."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Calm")," project from the right-hand side drop down and\nClick ",(0,n.kt)("strong",{parentName:"p"},"Publish"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(4060).Z,width:"1795",height:"642"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait for the Blueprint ",(0,n.kt)("strong",{parentName:"p"},"Status")," to appear as ",(0,n.kt)("strong",{parentName:"p"},"Published"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5219).Z,width:"1320",height:"705"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under ",(0,n.kt)("strong",{parentName:"p"},"Projects Shared With"),", select the Project you had created\nearlier and click ",(0,n.kt)("strong",{parentName:"p"},"Apply"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(7805).Z,width:"420",height:"596"})),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If the ",(0,n.kt)("strong",{parentName:"p"},"Projects Shared With")," drop down menu is unavailable, refresh your browser.")))),(0,n.kt)("h2",{id:"launch-blueprints-from-marketplace"},"Launch Blueprints from Marketplace"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From ",(0,n.kt)("strong",{parentName:"p"},"Prism Central > Calm"),", select ",(0,n.kt)("strong",{parentName:"p"},"Marketplace")," from the\nsidebar. All Blueprints published in Marketplace Manager are visible here."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(3549).Z,width:"1418",height:"380"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Mongo")," Blueprint and click ",(0,n.kt)("strong",{parentName:"p"},"Launch"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(8553).Z,width:"1107",height:"310"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill in the application name and click on ",(0,n.kt)("strong",{parentName:"p"},"Launch")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(1351).Z,width:"1651",height:"729"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This picture showed the successful launch of the application"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(9745).Z,width:"1125",height:"718"})))),(0,n.kt)("h2",{id:"takeaways"},"Takeaways"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By using pre-seeded Blueprints from the Nutanix Marketplace, userscan quickly try out new applications."),(0,n.kt)("li",{parentName:"ul"},"Marketplace Blueprints can be cloned and modified to suit a user's needs. For example, the pre-seeded LAMP Blueprint could be a\nstarting point for a developer looking to swap PHP for a Go application server."),(0,n.kt)("li",{parentName:"ul"},"Marketplace Blueprints can use local disk images or automatically download associated disk images. Users can create their own keys and\nslipstream them into Blueprints (via cloud-init) to control access."),(0,n.kt)("li",{parentName:"ul"},"Developers can publish Blueprints to the Marketplace for fast and easy consumption by users."),(0,n.kt)("li",{parentName:"ul"},"Blueprints can be launched directly from the Marketplace with no additional configuration from users, delivering a public cloud-like\nSaaS experience for end users."),(0,n.kt)("li",{parentName:"ul"},"Administrators have control over what Blueprints are published to the Marketplace and which projects have access to published Blueprints.")))}u.isMDXComponent=!0},4060:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mongo_marketplace_1-d1a290fbc5d97aaef30834ad579d2265.png"},5219:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mongo_marketplace_2-22b674a5af27f02d9ff26d92a56d7d35.png"},7805:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mongo_marketplace_3-95b0b4cf1f28994d32b233a5c3d78b0a.png"},3549:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mongo_marketplace_4-de7b0ac9a1c80d839934e663b76d8baa.png"},8553:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mongo_marketplace_5-d6e8d48718ecad3189be927911abd5f0.png"},1351:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mongo_marketplace_launch-5a8eefdf14929293f8602b740b3cec87.png"},9745:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mongo_marketplace_success-1f4e2e755102e21942ede764d0fe48cf.png"}}]);