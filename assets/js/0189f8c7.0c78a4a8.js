"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[1134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,k=m["".concat(p,".").concat(g)]||m[g]||d[g]||r;return n?i.createElement(k,s(s({ref:t},c),{},{components:n})):i.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},4150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));n(5488),n(5162);const r={title:"Installing Jenkins Plugins"},s="Installing Jenkins Plugins",o={unversionedId:"cicd/configure_jenkins",id:"cicd/configure_jenkins",title:"Installing Jenkins Plugins",description:"Plugins are the primary means of enhancing the functionality of a Jenkins environment to suit organization- or user-specific needs. There are over a thousand different plugins which can be installed on a Jenkins controller and to integrate various build tools, cloud providers, analysis tools, and much more.",source:"@site/docs/cicd/configure_jenkins.mdx",sourceDirName:"cicd",slug:"/cicd/configure_jenkins",permalink:"/cicd_lab/cicd/configure_jenkins",draft:!1,editUrl:"https://github.com/mat0606/cicd-lab/edit/main/docs/cicd/configure_jenkins.mdx",tags:[],version:"current",frontMatter:{title:"Installing Jenkins Plugins"},sidebar:"tutorialSidebar",previous:{title:"Provision Development Environment",permalink:"/cicd_lab/cicd/provision_env"},next:{title:"Create Namespace in NKE cluster",permalink:"/cicd_lab/nexus_nke/create_ns"}},p={},l=[],c={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-jenkins-plugins"},"Installing Jenkins Plugins"),(0,a.kt)("p",null,"Plugins are the primary means of enhancing the functionality of a Jenkins environment to suit organization- or user-specific needs. There are over a thousand different plugins which can be installed on a Jenkins controller and to integrate various build tools, cloud providers, analysis tools, and much more."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/managing/plugins/#:~:text=Plugins%20are%20the%20primary%20means,analysis%20tools%2C%20and%20much%20more"},"https://www.jenkins.io/doc/book/managing/plugins/#:~:text=Plugins%20are%20the%20primary%20means,analysis%20tools%2C%20and%20much%20more"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Jenkins is installing the different plugins now.  Click on the highlighted item to look at the installation log."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(8225).Z,width:"786",height:"747"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The step may fail depending on the Jenkins version during installation.  Click on ",(0,a.kt)("strong",{parentName:"p"},"Retry"),".  Wait for the plugins to be installed."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9695).Z,width:"903",height:"511"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Services"),".  Click on ",(0,a.kt)("strong",{parentName:"p"},"Jenkins Master")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(2474).Z,width:"903",height:"301"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Look on the right side of the screen.  Note down the IP address"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6108).Z,width:"434",height:"211"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a browser."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6816).Z,width:"903",height:"562"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In Calm application, click on ",(0,a.kt)("strong",{parentName:"p"},"Audit"),".  Scroll down.  Expand ",(0,a.kt)("strong",{parentName:"p"},"Configure Jenkins Master"),".   Copy the password and paste it in the Jenkins screen."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(8659).Z,width:"783",height:"742"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Install suggested plugins")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6378).Z,width:"903",height:"407"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wait a few minutes for the plugins to install."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(1455).Z,width:"903",height:"377"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Continue")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(4335).Z,width:"903",height:"373"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Skip and continue as Admin")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(514).Z,width:"903",height:"472"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Restart")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(4924).Z,width:"903",height:"345"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Calm application, click on ",(0,a.kt)("strong",{parentName:"p"},"Audit"),".  Observe Calm has finished executing the ",(0,a.kt)("strong",{parentName:"p"},"Jenkins Master \u2013 Install Plugins")," step and continue with the rest of the provisioning"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(2403).Z,width:"737",height:"720"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The development environment was provisioned successfully."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(8788).Z,width:"903",height:"233"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login to Jenkins using the initial administrator password.  Click on ",(0,a.kt)("strong",{parentName:"p"},"Resume")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(7002).Z,width:"903",height:"462"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose ",(0,a.kt)("strong",{parentName:"p"},"Skip and continue as admin")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(4789).Z,width:"903",height:"393"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"}," Choose ",(0,a.kt)("strong",{parentName:"p"},"Start using Jenkins")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(2983).Z,width:"903",height:"310"})))))}d.isMDXComponent=!0},8225:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins1-920ade6e605d3b996acb0e552d0042bd.png"},514:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins10-729552a801058f7a1f814aeb2eb15603.png"},4924:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins11-09ff7723783ed83f0a68b27aff5540fd.png"},2403:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins12-163c11c56a08f1d3f0073c4720eb000d.png"},8788:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins13-10481945046ac7f70fac48b025d7c094.png"},7002:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins14-a1f6ed7ae603b6d62591bf17aec17281.png"},4789:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins15-fa3a8afeb7765d393ae4615ea261adc4.png"},2983:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins16-2df814ebb821c3717794a18003f56713.png"},9695:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins2-c27a27904ea3bfdcf4c7b93f55c469b1.png"},2474:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins3-4774a7543a0b51e6b4bc45dba750d518.png"},6108:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins4-f6a15bd8505d79fd6569b03d3a067a3e.png"},6816:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins5-9c7f0da5ce3ee02641e62cdf31905646.png"},8659:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins6-6a599dc73751d91beb7eebcb21b54213.png"},6378:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins7-67d9aa3f2f8d812f6a7387738e6565d6.png"},1455:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins8-3003532825684a31f28deb0faf9ab43a.png"},4335:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jenkins9-a0ed9e99f8931d21ad578726efb10d4b.png"}}]);