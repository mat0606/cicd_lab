"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[7847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),p=a(91980),s=a(67392),m=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,s]=k({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=p??u;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var h=a(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=s[a].value;n!==o&&(u(t),p(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},88174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162);const o={title:"Linux Day 2 Operations"},p="Overview",s={unversionedId:"calm_linux_track/calm_day2_linux/calm_day2_linux",id:"calm_linux_track/calm_day2_linux/calm_day2_linux",title:"Linux Day 2 Operations",description:"In the Calm Linux and Calm Windows labs you explored how Calm can",source:"@site/docs/calm_linux_track/calm_day2_linux/calm_day2_linux.mdx",sourceDirName:"calm_linux_track/calm_day2_linux",slug:"/calm_linux_track/calm_day2_linux/",permalink:"/cicd_lab/calm_linux_track/calm_day2_linux/",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/calm_linux_track/calm_day2_linux/calm_day2_linux.mdx",tags:[],version:"current",frontMatter:{title:"Linux Day 2 Operations"}},m={},u=[{value:"Lab Setup",id:"lab-setup",level:2},{value:"Scaling Out",id:"scaling-out",level:2},{value:"Scaling In",id:"scaling-in",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Takeaways",id:"takeaways",level:2}],c={toc:u},d="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/cicd_lab/calm_linux_track/calm_iaas_linux/"},"Calm Linux")," and ",(0,r.kt)("a",{parentName:"p",href:"../../calm_windows_track/calm_iaas_windows/calm_iaas_windows.mdx"},"Calm Windows")," labs you explored how Calm can\nbe used to model and deploy complex applications using a blueprint. Calm, however, is capable of managing applications throughout their ",(0,r.kt)("strong",{parentName:"p"},"entire")," lifecycle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'In this lab you will implement custom actions within Calm to address "Day 2" operations, including scaling out, scaling in, and upgrading your application.')),(0,r.kt)("h2",{id:"lab-setup"},"Lab Setup"),(0,r.kt)("p",null,"This lab depends on the availability of a multi-tier ",(0,r.kt)("strong",{parentName:"p"},"Task Manger")," web application implemented during the ",(0,r.kt)("a",{parentName:"p",href:"/cicd_lab/calm_linux_track/calm_iaas_linux/"},"Calm Linux")," lab."),(0,r.kt)("h2",{id:"scaling-out"},"Scaling Out"),(0,r.kt)("p",null,"Imagine you're the administrator of the Task Manager application that we've been building, and you\\'re currently unsure of the amount of\ndemand for this application by your end users. Or, potentially, you expect the demand to ebb and flow due to the time of the year. How can\nwe easily scale to meet this changing demand?"),(0,r.kt)("p",null,"During the creation of the Task Manager blueprint, the ",(0,r.kt)("strong",{parentName:"p"},"WebServer")," service was configured with a minimum number of 2 replicas, with a\nmaximum of 4. As a result, Calm will create 2 WebServer VMs during the initial deployment. In the event the 2 replicas are not enough to handle\nthe load of your end users, a ",(0,r.kt)("strong",{parentName:"p"},"Scale Out")," operation is required."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Application Overview > Application Profile")," section, expand the ",(0,r.kt)("strong",{parentName:"p"},"Default")," Application Profile."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(83978).Z,width:"234",height:"434"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),"sign  next to ",(0,r.kt)("strong",{parentName:"p"},"Actions")," to add a new, custom action. On the ",(0,r.kt)("strong",{parentName:"p"},"Configuration Pane")," to the right, rename the new Action to be ",(0,r.kt)("strong",{parentName:"p"},"Scale Out"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8592).Z,width:"785",height:"451"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the box ",(0,r.kt)("strong",{parentName:"p"},"below")," the ",(0,r.kt)("strong",{parentName:"p"},"WebServer")," service tile, click the ",(0,r.kt)("strong",{parentName:"p"},"+ Task")," button to add a scaling task, and fill out the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - web_scale_out"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scaling Type")," - Scale Out"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scaling Count")," - 1")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(56186).Z,width:"337",height:"277"})),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"+ Task")," button that appears below the service tile is only used for scaling the number of replicas up and down, so it is important to select the correct option.")),(0,r.kt)("p",{parentName:"li"},"When a user later runs the ",(0,r.kt)("strong",{parentName:"p"},"Scale Out")," task, a new ",(0,r.kt)("strong",{parentName:"p"},"WebServer")," VM will get created, and the ",(0,r.kt)("strong",{parentName:"p"},"Package Install")," tasks for that\nservice will be executed. However, we do need to modify the ",(0,r.kt)("strong",{parentName:"p"},"HAProxy")," configuration in order to start taking advantage of this new web server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Within")," the ",(0,r.kt)("strong",{parentName:"p"},"HAProxy")," service tile, click the ",(0,r.kt)("strong",{parentName:"p"},"+ Task")," button, then fill out the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - add_webserver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type")," - Execute"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script Type")," - Shell"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Credential")," - CENTOS"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste the following script into the ",(0,r.kt)("strong",{parentName:"p"},"Script")," field:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nset -ex\n\nhost=$(echo "@@{WebServer.address}@@" | awk -F "," \'{print $NF}\')\nport=80\necho " server host-${host} ${host}:${port} weight 1 maxconn 100 check" | sudo tee -a /etc/haproxy/haproxy.cfg\n\nsudo systemctl daemon-reload\nsudo systemctl restart haproxy\n')),(0,r.kt)("p",{parentName:"li"},"The script will parse the last IP address in the WebServer address array and append it to the haproxy.cfg file. However, we want to be\nsure that this doesn't happen until ",(0,r.kt)("strong",{parentName:"p"},"after")," the new WebServer is fully up, otherwise the HAProxy server may send requests to a\nnon-functioning WebServer.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To solve this issue, create an edge to force a dependency on the ",(0,r.kt)("strong",{parentName:"p"},"web_scale_out")," task completing prior to the ",(0,r.kt)("strong",{parentName:"p"},"add_webserver")," task."),(0,r.kt)("p",{parentName:"li"},"Your ",(0,r.kt)("strong",{parentName:"p"},"Workspace")," should now look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4206).Z,width:"818",height:"486"})))),(0,r.kt)("h2",{id:"scaling-in"},"Scaling In"),(0,r.kt)("p",null,"It's the end of your busy season, and you'd like to optimize your resource utilization by scaling back the number of deployed Web Servers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," sign to add a custom action named ",(0,r.kt)("strong",{parentName:"p"},"Scale In")," to the Default ",(0,r.kt)("strong",{parentName:"p"},"Application Profile"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(61933).Z,width:"783",height:"488"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Below")," the ",(0,r.kt)("strong",{parentName:"p"},"WebServer")," service tile, click the ",(0,r.kt)("strong",{parentName:"p"},"+ Task")," button to add a scaling task, and fill out the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - web_scale_in"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scaling Type")," - Scale In"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scaling Count")," - 1")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(69505).Z,width:"338",height:"277"})),(0,r.kt)("p",{parentName:"li"},"When a user later runs the ",(0,r.kt)("strong",{parentName:"p"},"Scale In")," task, the last ",(0,r.kt)("strong",{parentName:"p"},"WebServer")," replica will have its ",(0,r.kt)("strong",{parentName:"p"},"Package Uninstall")," task run, the VM will be\nshut down, and then deleted, which will reclaim resources. However,vwe do need to modify the ",(0,r.kt)("strong",{parentName:"p"},"HAProxy")," configuration to ensure that we're no longer sending traffic to the to-be-deleted Web Server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Within")," the ",(0,r.kt)("strong",{parentName:"p"},"HAProxy")," service tile, click the ",(0,r.kt)("strong",{parentName:"p"},"+ Task")," button, then fill out the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Name")," - del_webserver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type")," - Execute"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script Type")," - Shell"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Credential")," - CENTOS"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste the following script into the ",(0,r.kt)("strong",{parentName:"p"},"Script")," field:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nset -ex\n\nhost=$(echo "@@{WebServer.address}@@" | awk -F "," \'{print $NF}\')\nsudo sed -i "/$host/d" /etc/haproxy/haproxy.cfg\n\nsudo systemctl daemon-reload\nsudo systemctl restart haproxy\n')),(0,r.kt)("p",{parentName:"li"},"Similar to the scale out script, this script will parse the last IP in the WebServer address array and use the\n",(0,r.kt)("a",{parentName:"p",href:"http://www.grymoire.com/Unix/Sed.html"},"sed")," command to remove the corresponding entry from haproxy.cfg."),(0,r.kt)("p",{parentName:"li"},"Again, similar to the scale out script, we want to ensure requests stop being sent to the VM ",(0,r.kt)("strong",{parentName:"p"},"before")," it is removed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To solve this issue, create an edge to force a dependency on the ",(0,r.kt)("strong",{parentName:"p"},"del_webserver")," task completing prior to the ",(0,r.kt)("strong",{parentName:"p"},"web_scale_in")," task."),(0,r.kt)("p",{parentName:"li"},"Your ",(0,r.kt)("strong",{parentName:"p"},"Workspace")," should now look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(52643).Z,width:"806",height:"519"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," and ensure no errors or warnings pop-up. If they do, resolve the issue, and ",(0,r.kt)("strong",{parentName:"p"},"Save")," again."))),(0,r.kt)("h2",{id:"upgrading"},"Upgrading"),(0,r.kt)("p",null,"Your company has a mandate to keep all application code up to date, to help minimize security vulnerabilities. Your company also has a strict\nchange control process, meaning you can only update your application during the weekend. You currently spend a significant portion of your\ntime on one Saturday every month completing application update procedures during a maintenance window. Let\\'s look at how you can reclaim your weekend by modeling the application upgrade with Calm."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," sign to add a custom action named ",(0,r.kt)("strong",{parentName:"p"},"Upgrade")," to the Default ",(0,r.kt)("strong",{parentName:"p"},"Application Profile"),"."),(0,r.kt)("p",{parentName:"li"},"The first thing we're going to need to do is to stop the respective processes on each of our Services.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Within each")," of our 3 Services, click the ",(0,r.kt)("strong",{parentName:"p"},"+ Task")," button to add a new task, and fill in the following information:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service Name"),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("th",{parentName:"tr",align:null},"WebServer"),(0,r.kt)("th",{parentName:"tr",align:null},"HAProxy"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Task Name")),(0,r.kt)("td",{parentName:"tr",align:null},"StopMySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"StopWebServer"),(0,r.kt)("td",{parentName:"tr",align:null},"StopHAProxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Execute"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Script Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Credential")),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Script")),(0,r.kt)("td",{parentName:"tr",align:null},"See Below"),(0,r.kt)("td",{parentName:"tr",align:null},"See Below"),(0,r.kt)("td",{parentName:"tr",align:null},"See Below")))))),(0,r.kt)(l.Z,{defaultValue:"sql",values:[{label:"StopMySQL Script",value:"sql"},{label:"StopWebServer Script",value:"web"},{label:"StopHAProxy Script",value:"haproxy"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sql",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\nsudo systemctl stop mysqld\n"))),(0,r.kt)(i.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo systemctl stop php-fpm\nsudo systemctl stop nginx\n"))),(0,r.kt)(i.Z,{value:"haproxy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo systemctl stop haproxy\n")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once complete, your ",(0,r.kt)("strong",{parentName:"p"},"Workspace")," should look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(57840).Z,width:"1224",height:"611"})),(0,r.kt)("p",{parentName:"li"},"Similar to both scaling and initial deployment operations, we do not want to get into a situation where the WebServer goes down before the HAProxy, nor do we want the MySQL database to go down before the WebServers.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create edges between services such that HAProxy stops before WebServers, and all WebServers stop before MySQL:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(99009).Z,width:"798",height:"486"})),(0,r.kt)("p",{parentName:"li"},"Now that our critical services are stopped, we'll want to perform our upgrades.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Again, ",(0,r.kt)("strong",{parentName:"p"},"within each")," Service, add a new Task. All of the 3 tasks are identical other than the name:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Service Name")),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("th",{parentName:"tr",align:null},"WebServer"),(0,r.kt)("th",{parentName:"tr",align:null},"HAProxy"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Task Name")),(0,r.kt)("td",{parentName:"tr",align:null},"UpgradeMySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"UpgradeWebServer"),(0,r.kt)("td",{parentName:"tr",align:null},"UpgradeHAProxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Execute"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Script Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Credential")),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Script")),(0,r.kt)("td",{parentName:"tr",align:null},"See Below"),(0,r.kt)("td",{parentName:"tr",align:null},"See Below"),(0,r.kt)("td",{parentName:"tr",align:null},"See Below")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Script for all 3 Upgrade Tasks:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo yum update -y\n")),(0,r.kt)("p",{parentName:"li"},"This script will use the Red Hat/CentOS package management tool, ",(0,r.kt)("a",{parentName:"p",href:"https://access.redhat.com/solutions/9934"},"yum")," to search for and install updates to all installed packages."),(0,r.kt)("p",{parentName:"li"},"Your ",(0,r.kt)("strong",{parentName:"p"},"Workspace")," should now look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(18424).Z,width:"830",height:"502"})),(0,r.kt)("p",{parentName:"li"},"From an a task ordering perspective, do we need to draw any orchestration edges? Notice in the screenshot above that Calm automatically draws and edge from the ",(0,r.kt)("strong",{parentName:"p"},"Stop")," task to the ",(0,r.kt)("strong",{parentName:"p"},"Upgrade")," task, which is good as that's required. However, do we need any side to side dependencies?"),(0,r.kt)("p",{parentName:"li"},"If you said \"no\", you're correct. The critical components are starting and stopping of the Services, there\\'s no reason to have each Service upgrade one at a time."),(0,r.kt)("p",{parentName:"li"},"Unless you specify otherwise, Calm will always run tasks in parallel to save time."),(0,r.kt)("p",{parentName:"li"},"Now that our Services have been upgraded, it's time to start them.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Again, we'll add a Task ",(0,r.kt)("strong",{parentName:"p"},"within each")," Service, with the following values:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service Name"),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("th",{parentName:"tr",align:null},"WebServer"),(0,r.kt)("th",{parentName:"tr",align:null},"HAProxy"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Task Name")),(0,r.kt)("td",{parentName:"tr",align:null},"StartMySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"StartWebServer"),(0,r.kt)("td",{parentName:"tr",align:null},"StartHAProxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Execute"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Script Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Credential")),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Script")),(0,r.kt)("td",{parentName:"tr",align:null},"See Below"),(0,r.kt)("td",{parentName:"tr",align:null},"See Below"),(0,r.kt)("td",{parentName:"tr",align:null},"See Below")))))),(0,r.kt)(l.Z,{defaultValue:"sql",values:[{label:"StartMySQL Script",value:"sql"},{label:"StartWebServer Script",value:"web"},{label:"StartHAProxy Script",value:"haproxy"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sql",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\nsudo systemctl start mysqld\n"))),(0,r.kt)(i.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo systemctl start php-fpm\nsudo systemctl start nginx\n"))),(0,r.kt)(i.Z,{value:"haproxy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nset -ex\n\nsudo systemctl start haproxy\n")))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your ",(0,r.kt)("strong",{parentName:"p"},"Workspace")," should now look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(56555).Z,width:"839",height:"538"})),(0,r.kt)("p",{parentName:"li"},"This time, we ",(0,r.kt)("strong",{parentName:"p"},"DO")," require additional orchestration edges. As previously discussed, we would not want our HAProxy service up before our WebServers, or our WebServers up before our MySQL database.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create orchestration edges starting with MySQL, then the WebServers, and lastly the HAProxy:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(12744).Z,width:"815",height:"564"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," and ensure no errors or warnings pop-up. If they do, resolve the issue, and ",(0,r.kt)("strong",{parentName:"p"},"Save")," again."))),(0,r.kt)("h1",{id:"launching-and-managing-the-application"},"Launching and Managing the Application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the upper toolbar in the Blueprint Editor, click ",(0,r.kt)("strong",{parentName:"p"},"Launch"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify a unique ",(0,r.kt)("strong",{parentName:"p"},"Application Name")," (e.g. ",(0,r.kt)("em",{parentName:"p"},"Initials"),"-CalmLinuxIntro1) and your ",(0,r.kt)("strong",{parentName:"p"},"User_initials")," Runtime variable value for VM naming.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the application reaches a ",(0,r.kt)("strong",{parentName:"p"},"Running")," status, navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Manage")," tab, and run the ",(0,r.kt)("strong",{parentName:"p"},"Scale Out")," action."),(0,r.kt)("p",{parentName:"li"},"Changes to the application can be monitored on the ",(0,r.kt)("strong",{parentName:"p"},"Audit")," tab."),(0,r.kt)("p",{parentName:"li"},"Once the scaling operation has completed, you can log into the HAProxy VM and verify the new Web Server has been added to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/haproxy/haproxy.cfg"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("strong",{parentName:"p"},"Upgrade")," action to update each service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, run the ",(0,r.kt)("strong",{parentName:"p"},"Scale In")," action to remove the additional Web Server VM."))),(0,r.kt)("h1",{id:"optional-variable-scaling"},"(Optional) Variable Scaling"),(0,r.kt)("p",null,"In this lab you configured scaling operations that expanded or shrunk the WebServer service array by a single VM."),(0,r.kt)("p",null,"When creating a new custom action, additional variables can be defined in the Configuration Pane specific to that action."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(47858).Z,width:"271",height:"413"})),(0,r.kt)("p",null,"Leveraging a runtime variable, can you modify the scale out or scale in actions to perform a variable scaling operation?"),(0,r.kt)("p",null,"This will require some bash scripting experience to ensure the appropriate number of entries are being added and/or removed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"haproxy.cfg")," file."),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("p",null,"What are the key things you should know about ",(0,r.kt)("strong",{parentName:"p"},"Nutanix Calm"),"?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Not only can Calm orchestrate complex application deployments, it can manage applications throughout their entire lifecycle, by\nmodeling complex Day 2 operations."),(0,r.kt)("li",{parentName:"ul"},"Whether it\\'s a built in task, like scaling, or a custom task, like upgrades, Calm can be directed to perform the operations in specific order, or if order doesn\\'t matter, perform them in parallel to save on time."),(0,r.kt)("li",{parentName:"ul"},"What operation are you currently doing on a regular basis? It's likely that it can be modeled in Calm, saving you countless hours. Take back your weekend!")))}k.isMDXComponent=!0},61933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scalein1-fee39c559799ac0b8bbcfa6524412c72.png"},69505:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scalein2-d4f9fd55fbd1283d14cf3e7ed7318d3d.png"},52643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scalein3-f8bb90607df2e9cb1f5481b0b248e360.png"},83978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scaleout0-5819c0e9eae5abb453451bc839a2d4a0.png"},8592:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scaleout1-15e5a7d468ab43948d83c6e0f63dba01.png"},56186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scaleout2-982570ea6d9e6eca9350c7b80ea0ef65.png"},4206:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/510scaleout3-e4229c8d91c61797a9def9df429af23f.png"},47858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/optional1-cc0062ef6b33b093d86cf3aef30724cf.png"},57840:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade1-ae4c3a6751451b3a2e3238c38714377f.png"},99009:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade2-9cfa88a933b158963837cf356c0eadd4.png"},18424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade3-b87175489b8ccb39ed51c240b8b33421.png"},56555:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade4-6eebc4ba58595c8fce8e8fab041ba523.png"},12744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade5-c2eae6b6911df21b7ee1067fb6d7aa9a.png"}}]);