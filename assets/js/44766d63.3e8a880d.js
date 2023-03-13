"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[3326],{3905:(e,t,A)=>{A.d(t,{Zo:()=>l,kt:()=>d});var a=A(7294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function i(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,a)}return A}function r(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?i(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):i(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function p(e,t){if(null==e)return{};var A,a,n=function(e,t){if(null==e)return{};var A,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)A=i[a],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)A=i[a],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),A=t;return e&&(A="function"==typeof e?e(t):r(r({},t),e)),A},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var A=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),o=s(A),k=n,d=o["".concat(c,".").concat(k)]||o[k]||m[k]||i;return A?a.createElement(d,r(r({ref:t},l),{},{components:A})):a.createElement(d,r({ref:t},l))}));function d(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=A.length,r=new Array(i);r[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[o]="string"==typeof e?e:n,r[1]=p;for(var s=2;s<i;s++)r[s]=A[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,A)}k.displayName="MDXCreateElement"},6205:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=A(7462),n=(A(7294),A(3905));const i={title:"Projects"},r="Pre-Requisites:",p={unversionedId:"calm_project/calm_project",id:"calm_project/calm_project",title:"Projects",description:"This lab is created using Nutanix Calm 3.5.2 and Prism Central version pc.2022.6",source:"@site/docs/calm_project/calm_project.mdx",sourceDirName:"calm_project",slug:"/calm_project/",permalink:"/cicd_lab/calm_project/",draft:!1,editUrl:"https://github.com/mat0606/cicd_lab/edit/main/docs/calm_project/calm_project.mdx",tags:[],version:"current",frontMatter:{title:"Projects"},sidebar:"tutorialSidebar",previous:{title:"NCM Self Service?",permalink:"/cicd_lab/what_is_calm/"},next:{title:"Marketplace",permalink:"/cicd_lab/calm_marketplace/"}},c={},s=[{value:"Add Infrastructure in Project",id:"add-infrastructure-in-project",level:2},{value:"No VPC in the cluster",id:"no-vpc-in-the-cluster",level:3},{value:"Configure VPC to the project",id:"configure-vpc-to-the-project",level:3},{value:"Configure Quota in Project",id:"configure-quota-in-project",level:2},{value:"Configure the Environment in Project",id:"configure-the-environment-in-project",level:2},{value:"Create Credential",id:"create-credential",level:3},{value:"Verify the Environment",id:"verify-the-environment",level:2}],l={toc:s},o="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(o,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pre-requisites"},"Pre-Requisites:"),(0,n.kt)("p",null,"This lab is created using Nutanix Calm 3.5.2 and Prism Central version pc.2022.6"),(0,n.kt)("h1",{id:"create-a-project-in-calm"},"Create a Project in Calm"),(0,n.kt)("p",null,"Project is the logical construct that allowed an administrator to assign both infrastructure resources and the roles/permissions of Active Directory users/groups to specific Blueprints and Applications."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Project")," in the left hand toolbar . Click on ",(0,n.kt)("strong",{parentName:"p"},"Create\nProject"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(2498).Z,width:"675",height:"433"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill in the Project Name. Eg Trainee_Project_Name. Click on\n",(0,n.kt)("strong",{parentName:"p"},"Create"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(92).Z,width:"665",height:"519"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This project is in the ",(0,n.kt)("strong",{parentName:"p"},"Pending")," state.  Click on ",(0,n.kt)("strong",{parentName:"p"},"Infrastructure")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(9186).Z,width:"1812",height:"735"})))),(0,n.kt)("h2",{id:"add-infrastructure-in-project"},"Add Infrastructure in Project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Select Account"),". Select ",(0,n.kt)("strong",{parentName:"p"},"NTNX_LOCAL_AZ_34")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(890).Z,width:"1805",height:"735"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Configure Resources"),". "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(6068).Z,width:"1834",height:"254"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Select Cluster"),".  Click on ",(0,n.kt)("strong",{parentName:"p"},"Select VLANs")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(6041).Z,width:"1359",height:"704"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check on ",(0,n.kt)("strong",{parentName:"p"},"Primary")," Network.  Click on ",(0,n.kt)("strong",{parentName:"p"},"Select VPCs and Subnets")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(6156).Z,width:"1369",height:"491"})))),(0,n.kt)("h3",{id:"no-vpc-in-the-cluster"},"No VPC in the cluster"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This section is for cluster not configured with VPC.  Please scroll down to ",(0,n.kt)("strong",{parentName:"p"},"Configure VPC to the project")," for cluster configured with VPC.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Confirm")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(2349).Z,width:"1367",height:"700"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Confirm")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(1165).Z,width:"1390",height:"702"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"   "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(9025).Z,width:"1835",height:"714"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The project is in the ",(0,n.kt)("strong",{parentName:"p"},"Active")," state"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(5082).Z,width:"1539",height:"692"})))),(0,n.kt)("h3",{id:"configure-vpc-to-the-project"},"Configure VPC to the project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This section is for cluster configured with VPC.  Select ",(0,n.kt)("strong",{parentName:"p"},"VPCs & Subnets")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(593).Z,width:"1357",height:"703"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"VPC"),". Select the Overlay Subnet ",(0,n.kt)("strong",{parentName:"p"},"SG-AMK")," Network. Click\non ",(0,n.kt)("strong",{parentName:"p"},"Confirm"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(593).Z,width:"1357",height:"703"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Confirm"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(6201).Z,width:"1361",height:"699"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(6937).Z,width:"1703",height:"689"})))),(0,n.kt)("h2",{id:"configure-quota-in-project"},"Configure Quota in Project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure this section to configure the quota allocated to this project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("strong",{parentName:"p"},"Quotas")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(1255).Z,width:"1704",height:"669"})))),(0,n.kt)("h2",{id:"configure-the-environment-in-project"},"Configure the Environment in Project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The environment play a critical role to allow the ",(0,n.kt)("strong",{parentName:"p"},"Consumer")," role\nuser to launch a marketplace item with pre-defined hardware\nspecification, guest customization and credentials required in the\nexecution of the blueprint.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Create Environment")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(9204).Z,width:"1585",height:"603"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill in the name for the environment. Eg ",(0,n.kt)("strong",{parentName:"p"},"Default Environment"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(4511).Z,width:"1346",height:"639"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Select Infrastructure")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(3879).Z,width:"741",height:"475"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scroll down"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(7409).Z,width:"1656",height:"495"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"VM Configuration")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(7578).Z,width:"1575",height:"389"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the cluster"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(5460).Z,width:"1110",height:"286"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Linux"),". Fill in the following hardware specification."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(3768).Z,width:"898",height:"424"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the ",(0,n.kt)("strong",{parentName:"p"},"cloud-init")," contents into the ",(0,n.kt)("strong",{parentName:"p"},"Guest Customization")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#cloud-config\nusers:\n- name: centos\nssh-authorized-keys:\n  - @@{centos_public_key}@@\nsudo: ['ALL=(ALL) NOPASSWD:ALL'] \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Expand the ",(0,n.kt)("strong",{parentName:"p"},"DISK")," section. Select the disk image as shown."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(7866).Z,width:"914",height:"533"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Expand the ",(0,n.kt)("strong",{parentName:"p"},"Network Adapter")," section. Select the Network Adapter:\n",(0,n.kt)("strong",{parentName:"p"},"Primary"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(3909).Z,width:"1108",height:"190"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Expand the ",(0,n.kt)("strong",{parentName:"p"},"Connection")," section. Click on ",(0,n.kt)("strong",{parentName:"p"},"Add New Credential"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(6412).Z,width:"898",height:"462"})))),(0,n.kt)("h3",{id:"create-credential"},"Create Credential"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the credential for centos. Fill out the following fields:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Credential Name")," - centos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Username")," - centos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Secret Type")," - ssh private key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Key")," - Paste in your own private key, or use the following private key:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAii7qFDhVadLx5lULAG/ooCUTA/ATSmXbArs+GdHxbUWd/bNG\nZCXnaQ2L1mSVVGDxfTbSaTJ3En3tVlMtD2RjZPdhqWESCaoj2kXLYSiNDS9qz3SK\n6h822je/f9O9CzCTrw2XGhnDVwmNraUvO5wmQObCDthTXc72PcBOd6oa4ENsnuY9\nHtiETg29TZXgCYPFXipLBHSZYkBmGgccAeY9dq5ywiywBJLuoSovXkkRJk3cd7Gy\nhCRIwYzqfdgSmiAMYgJLrz/UuLxatPqXts2D8v1xqR9EPNZNzgd4QHK4of1lqsNR\nuz2SxkwqLcXSw0mGcAL8mIwVpzhPzwmENC5OrwIBJQKCAQB++q2WCkCmbtByyrAp\n6ktiukjTL6MGGGhjX/PgYA5IvINX1SvtU0NZnb7FAntiSz7GFrODQyFPQ0jL3bq0\nMrwzRDA6x+cPzMb/7RvBEIGdadfFjbAVaMqfAsul5SpBokKFLxU6lDb2CMdhS67c\n1K2Hv0qKLpHL0vAdEZQ2nFAMWETvVMzl0o1dQmyGzA0GTY8VYdCRsUbwNgvFMvBj\n8T/svzjpASDifa7IXlGaLrXfCH584zt7y+qjJ05O1G0NFslQ9n2wi7F93N8rHxgl\nJDE4OhfyaDyLL1UdBlBpjYPSUbX7D5NExLggWEVFEwx4JRaK6+aDdFDKbSBIidHf\nh45NAoGBANjANRKLBtcxmW4foK5ILTuFkOaowqj+2AIgT1ezCVpErHDFg0bkuvDk\nQVdsAJRX5//luSO30dI0OWWGjgmIUXD7iej0sjAPJjRAv8ai+MYyaLfkdqv1Oj5c\noDC3KjmSdXTuWSYNvarsW+Uf2v7zlZlWesTnpV6gkZH3tX86iuiZAoGBAKM0mKX0\nEjFkJH65Ym7gIED2CUyuFqq4WsCUD2RakpYZyIBKZGr8MRni3I4z6Hqm+rxVW6Dj\nuFGQe5GhgPvO23UG1Y6nm0VkYgZq81TraZc/oMzignSC95w7OsLaLn6qp32Fje1M\nEz2Yn0T3dDcu1twY8OoDuvWx5LFMJ3NoRJaHAoGBAJ4rZP+xj17DVElxBo0EPK7k\n7TKygDYhwDjnJSRSN0HfFg0agmQqXucjGuzEbyAkeN1Um9vLU+xrTHqEyIN/Jqxk\nhztKxzfTtBhK7M84p7M5iq+0jfMau8ykdOVHZAB/odHeXLrnbrr/gVQsAKw1NdDC\nkPCNXP/c9JrzB+c4juEVAoGBAJGPxmp/vTL4c5OebIxnCAKWP6VBUnyWliFhdYME\nrECvNkjoZ2ZWjKhijVw8Il+OAjlFNgwJXzP9Z0qJIAMuHa2QeUfhmFKlo4ku9LOF\n2rdUbNJpKD5m+IRsLX1az4W6zLwPVRHp56WjzFJEfGiRjzMBfOxkMSBSjbLjDm3Z\niUf7AoGBALjvtjapDwlEa5/CFvzOVGFq4L/OJTBEBGx/SA4HUc3TFTtlY2hvTDPZ\ndQr/JBzLBUjCOBVuUuH3uW7hGhW+DnlzrfbfJATaRR8Ht6VU651T+Gbrr8EqNpCP\ngmznERCNf9Kaxl/hlyV5dZBe/2LIK+/jLGNu9EJLoraaCBFshJKF\n-----END RSA PRIVATE KEY-----\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(8784).Z,width:"397",height:"542"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Done"),". Click on ",(0,n.kt)("strong",{parentName:"p"},"Next"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Environment"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(7978).Z,width:"1846",height:"721"})))),(0,n.kt)("h2",{id:"verify-the-environment"},"Verify the Environment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify the environment was created. Click on ",(0,n.kt)("strong",{parentName:"p"},"1 environment added")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(6213).Z,width:"1402",height:"678"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Update."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(311).Z,width:"418",height:"435"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify the ",(0,n.kt)("strong",{parentName:"p"},"Ready for Marketplace usage, Linux only")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:A(4131).Z,width:"1128",height:"578"})))))}m.isMDXComponent=!0},7409:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/Environment-Detail-2056cc537f4d9a70a0dfa6fed053627f.png"},7978:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/Save_Environment-67e2b81e7d8852c3bbd9c6dad3530804.png"},890:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/add-infrastructure-pc2022-6-129362dc2fc339d4d562d394378a19c4.png"},8784:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/centos_credential-a3496b2c33151183d16a29e5b89b84f3.png"},9204:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/create-environment-692cd4adfb7ed85d418f2f73008f25b1.png"},4511:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/default-environment-9163593c9d8f9d13d4e97a4d538874c1.png"},6412:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/env-connection-pc2022-6-531c67c9d13a5221e296211c662932f8.png"},7866:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/env-disk-image-pc2022-6-1b459f340c4f5e7eba7896ca584a9126.png"},3909:(e,t,A)=>{A.d(t,{Z:()=>a});const a="data:image/png;base64,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LpW/ljNhQXmvJvAQfhARERERbUq2GbUrYvj52a4+hp/LV6786rn/UsnniRGjjtbVS+Gmze/eY/IREyv8aClFm5+jJv9ECD/1a6blTCj+JHhsXBJ+EBERERFtSrYxo44z/MiLvv3U6fyFi1Ty+ad//cn71R+Y5RJ7Wr+5bG72wUQLPx3ftVUX5EyYtqT8fKTwc/69BTkTXtvTHDo8toQfRERERESbtqjjDD+yqV7H78o176zbsEmFH/EPywptFe7FxAs/5noGm6p3uYafzqN/zJkwZcme3qw4TvhBRERERLSpoo5KOLbwY90Vv1u375DAM33mrI8/qX01f8m/PvGUbP77T0eX795jq9k3EzH8fNfZ9re1U6fkZEwLrU9tDT8dX7yXPSVn6upDzWE/+9N2dM/WD89bSiwSfhARERERbX7eHurecQ0/Zs0onjzVWPKn0ld+/+r4/5ykenv27tuvdp398iu1vJv8Nevfi4kZfsQmrdsnQviRzSptalDGwrXlNY1NbW1nTr3/zsKXJkyZu+aEfalrJeEHEREREdGpJBw1seexMi35iPJCNreejjf8/CI9U2Wef34seeLk56w5p+H/PpPyJ0aMOtV4xiy8FxMj/DRunJUz9d3wZR9857VV3WZtPaVvth0syphWVN0WqtD29z1L50rgUT8QlJMxd3X536+ae202Vy2ZMK2E8IOIiIiIaFUSjlrSrfW6UaJeSKFKQTGtOfq3P2/ZXnf8xLfXrtt2ZefOlfCz+u11tvI+mxjh5x68frVNuOre4YOIiIiIiFH8zcFb4/feXlF/y6YUzjnSuwk/NrdsK5Pk88vM523l96Lnww8iIiIiIvbV462d4/dqI9xsSqHsslXulSuKVj35szHH/qb9yE9/SfhBRERERERPSPhBRERERERPSPhBRERERERPmIDhx4eIiIiIiImrrf0fvwkSfr71dbZcu9XUfuuLNkRERERETHCl5S/tf0kBtlwQ3UEffm7c7Gy+av8sEBERERHRC0oWkERgywiRHNzh52pH55eX7fePiIiIiIjeURKB5AJbUnB1EIcfSXgkH0RERERElFwQT//PIA4/ttFu5af8E7YEHlnW84NFdxERERERMVGVNr+0/KX9b40Dkg5secHpYA0/3/o6rbda8FHXD9+4u+xQ1+etHdcBAAAAACBxkTa/tPyl/S8pwBoK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"},5460:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/env-select-cluster-pc2022-6-e83f8bcfe2718d9eb1d45a88d46f9f77.png"},4131:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/linux-env-verification-pc2022-6-04aaec736d088053a624aefcee4371fd.png"},3768:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/linux-hw-pc2022-6-24c309f4200c0e99ed497ea9729fc780.png"},1165:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/no-vpc-confirm-e44cb52ae81bec027356aafa517fcc4b.png"},2349:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/no-vpc-409523123121f56c7063135e4e881218.png"},5082:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project-active-c6a65d688c99e042ab07b7b8f1101130.png"},6213:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project-details-2-pc2022-6-00db042c9e7fef56677faac86aec30ff.png"},9186:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project-details-pc2022-6-27e3c952cd2da7d862cfa903deb4b132.png"},6068:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project-infrastructure-pc2022-6-8c937406b15a5ad3dbf1e5cf31026b94.png"},6937:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project-infrastructure-save-pc2022-6-dbf4483c5b7a11bcf973ede644a39061.png"},1255:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project-quota-pc2022-6-cbe99e5332a011f4da907f93341227ee.png"},593:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project-vpc-2022-6-139f2509d163ea897e27f38949810bf2.png"},6201:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project-vpc-confirm-pc2022-6-c549607dbe390a5500321a1c52406c78.png"},2498:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project_list-828257dff01566410a5b8fb41e6ac365.png"},92:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/project_namel-3b9e9887c721709583f58976dcccf982.png"},9025:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/save-no-vpc-5220a0e12af2ed0f084939ad99edd6b2.png"},6041:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/select-cluster-PC2022-6-cda6e5f00c0510844991a66ba19228e1.png"},3879:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/select-infrastructure-b0c30e623ce6beff76c273e0e9200a00.png"},6156:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/select-vlan-pc2022-6-2d978e8555a46e2992e1006cb9ff74ba.png"},311:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/update-env-pc2022-6-664f4228a499061fc069c549784c04fd.png"},7578:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/vm-configuration-83285b1f1a820167fba56a3f099af4a5.png"}}]);