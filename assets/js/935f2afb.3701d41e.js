"use strict";(self.webpackChunkcicd_lab=self.webpackChunkcicd_lab||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Lab: DevOps powered with Nutanix Technology","href":"/cicd_lab/intro","docId":"intro"},{"type":"category","label":"Lab Overview","items":[{"type":"link","label":"Lab Overview","href":"/cicd_lab/intro/Lab","docId":"intro/Lab"},{"type":"link","label":"DEV & APP Environment in HCI","href":"/cicd_lab/intro/Lab-Infra","docId":"intro/Lab-Infra"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Calm 101","items":[{"type":"link","label":"NCM Self Service?","href":"/cicd_lab/what_is_calm/","docId":"what_is_calm/what_is_calm"},{"type":"link","label":"Projects","href":"/cicd_lab/calm_project/","docId":"calm_project/calm_project"},{"type":"link","label":"Marketplace","href":"/cicd_lab/calm_marketplace/","docId":"calm_marketplace/calm_marketplace"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Nutanix Kubernetes Engine (NKE)","items":[{"type":"link","label":"Provision NKE cluster","href":"/cicd_lab/nke/provision_nke","docId":"nke/provision_nke"},{"type":"link","label":"Verify NKE cluster","href":"/cicd_lab/nke/verify_nke","docId":"nke/verify_nke"},{"type":"link","label":"Retrieve NKE token","href":"/cicd_lab/nke/retrieve_token","docId":"nke/retrieve_token"},{"type":"link","label":"Add account in NCM Self Service","href":"/cicd_lab/nke/add_account","docId":"nke/add_account"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Nexus OSS","items":[{"type":"link","label":"Provision Nexus OSS","href":"/cicd_lab/nexus/provision_nexus","docId":"nexus/provision_nexus"},{"type":"link","label":"Part 1: Create build user in Nexus OSS","href":"/cicd_lab/nexus/configure_nexus","docId":"nexus/configure_nexus"},{"type":"link","label":"Part 2: Create Repository Nexus OSS","href":"/cicd_lab/nexus/configure_nexus2","docId":"nexus/configure_nexus2"}],"collapsed":true,"collapsible":true},{"type":"category","label":"CI/CD Environment","items":[{"type":"link","label":"Provision Development Environment","href":"/cicd_lab/cicd/provision_env","docId":"cicd/provision_env"},{"type":"link","label":"Installing Jenkins Plugins","href":"/cicd_lab/cicd/configure_jenkins","docId":"cicd/configure_jenkins"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Register Nexus to NKE cluster","items":[{"type":"link","label":"Create Namespace in NKE cluster","href":"/cicd_lab/nexus_nke/create_ns","docId":"nexus_nke/create_ns"},{"type":"link","label":"Register Nexus OSS with NKE cluster","href":"/cicd_lab/nexus_nke/","docId":"nexus_nke/nexus_nke"},{"type":"link","label":"Configure Worker Node in NKE cluster","href":"/cicd_lab/nexus_nke/worker_node","docId":"nexus_nke/worker_node"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Configure JIRA","items":[{"type":"link","label":"Setup JIRA","href":"/cicd_lab/jira/configure_jira","docId":"jira/configure_jira"},{"type":"link","label":"Create Sample Project","href":"/cicd_lab/jira/create_project","docId":"jira/create_project"},{"type":"link","label":"Create users in JIRA","href":"/cicd_lab/jira/create_user","docId":"jira/create_user"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Environment Verification","items":[{"type":"link","label":"Part 1 Environment Verification","href":"/cicd_lab/env_verify/","docId":"env_verify/env_verify"},{"type":"link","label":"Part 2 Build & Deployment Verification","href":"/cicd_lab/env_verify/env_verify2","docId":"env_verify/env_verify2"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Software Development","items":[{"type":"link","label":"Defect Management","href":"/cicd_lab/cicd_lab/create_defect","docId":"cicd_lab/create_defect"},{"type":"link","label":"Developer working on a change","href":"/cicd_lab/cicd_lab/","docId":"cicd_lab/cicd_lab"},{"type":"link","label":"Access Application","href":"/cicd_lab/cicd_lab/access_app","docId":"cicd_lab/access_app"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Consumption of Persistent Volumes","items":[{"type":"link","label":"Storage Concept in Kubernetes","href":"/cicd_lab/storage/csi","docId":"storage/csi"},{"type":"link","label":"Connect to K8S cluster","href":"/cicd_lab/storage/kubeconfig","docId":"storage/kubeconfig"},{"type":"link","label":"Consumption of Nutanix Volumes","href":"/cicd_lab/storage/volume_pvc","docId":"storage/volume_pvc"},{"type":"link","label":"CSI Capabilities of Nutanix Volumes","href":"/cicd_lab/storage/volume_other","docId":"storage/volume_other"}],"collapsed":true,"collapsible":true}]},"docs":{"calm_linux_track/calm_day2_linux/calm_day2_linux":{"id":"calm_linux_track/calm_day2_linux/calm_day2_linux","title":"Linux Day 2 Operations","description":"In the Calm Linux and Calm Windows labs you explored how Calm can"},"calm_linux_track/calm_iaas_linux/calm_iaas_linux":{"id":"calm_linux_track/calm_iaas_linux/calm_iaas_linux","title":"Calm: Infrastructure as a Service","description":"The estimated time to complete this lab is 20 minutes."},"calm_linux_track/calm_linux_app/calm_linux_app":{"id":"calm_linux_track/calm_linux_app/calm_linux_app","title":"Linux Workloads","description":"The estimated time to complete this lab is 60 minutes."},"calm_marketplace/calm_marketplace":{"id":"calm_marketplace/calm_marketplace","title":"Marketplace","description":"In this exercise you will learn how to manage Calm Blueprints within the Nutanix Marketplace. As part of the exercise you will publish a","sidebar":"tutorialSidebar"},"calm_project/calm_project":{"id":"calm_project/calm_project","title":"Projects","description":"Project is the logical construct that allowed an administrator to assign both infrastructure resources and the roles/permissions of Active Directory users/groups to specific Blueprints and Applications.","sidebar":"tutorialSidebar"},"calm_windows_ad/calm_windows_ad":{"id":"calm_windows_ad/calm_windows_ad","title":"Windows Workloads","description":"Estimated time to complete: 45 minutes"},"cicd_lab/access_app":{"id":"cicd_lab/access_app","title":"Access Application","description":"1.\\tPutty into a VM with kubectl installed.  Ensure the NKE KUBECONFIG was installed. Eg","sidebar":"tutorialSidebar"},"cicd_lab/cicd_lab":{"id":"cicd_lab/cicd_lab","title":"Developer working on a change","description":"1.\\tFind out the IP address for the Developer Workstation","sidebar":"tutorialSidebar"},"cicd_lab/create_defect":{"id":"cicd_lab/create_defect","title":"Defect Management","description":"1.  Click on your Chrome Browser or Internet Explorer.   The JIRA IP Address is available in the Excel spreadsheet.","sidebar":"tutorialSidebar"},"cicd/configure_jenkins":{"id":"cicd/configure_jenkins","title":"Installing Jenkins Plugins","description":"Plugins are the primary means of enhancing the functionality of a Jenkins environment to suit organization- or user-specific needs. There are over a thousand different plugins which can be installed on a Jenkins controller and to integrate various build tools, cloud providers, analysis tools, and much more.","sidebar":"tutorialSidebar"},"cicd/provision_env":{"id":"cicd/provision_env","title":"Provision Development Environment","description":"The Continuous Integration/Continuous Delivery was setup using 2 different Calm blueprints:","sidebar":"tutorialSidebar"},"env_verify/env_verify":{"id":"env_verify/env_verify","title":"Part 1 Environment Verification","description":"1.\\tThe application is in Running state","sidebar":"tutorialSidebar"},"env_verify/env_verify2":{"id":"env_verify/env_verify2","title":"Part 2 Build & Deployment Verification","description":"1.\\tIn Calm, navigate to Application icon.  Click on Services.  Click on Developer","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Lab: DevOps powered with Nutanix Technology","description":"The trainee will learn the following:","sidebar":"tutorialSidebar"},"intro/Lab":{"id":"intro/Lab","title":"Lab Overview","description":"The user guide describes how the different stakeholders (Business User, Release Manager, Development Manager, Developer, Quality Assurance Engineer and Release Engineer) can collaborate together to plan, develop, test and deploy the applications to the production.","sidebar":"tutorialSidebar"},"intro/Lab-Infra":{"id":"intro/Lab-Infra","title":"DEV & APP Environment in HCI","description":"When the customer flips his mobile phone to access the Internet Banking website, it is a mystery how the transactions are being performed.    This picture describes the view of the applications sitting on top of the infrastructure.  These are the explanation of the names described in this picture.","sidebar":"tutorialSidebar"},"jira/configure_jira":{"id":"jira/configure_jira","title":"Setup JIRA","description":"1.\\tNavigate to Application on the left hand side.  Drill into the application.  Eg MRPENVGP5","sidebar":"tutorialSidebar"},"jira/create_project":{"id":"jira/create_project","title":"Create Sample Project","description":"1.\\tClick on Create sample project","sidebar":"tutorialSidebar"},"jira/create_user":{"id":"jira/create_user","title":"Create users in JIRA","description":"1.\\tCreate 3 users: businessuser, developmentmanager, developer.","sidebar":"tutorialSidebar"},"nexus_nke/create_ns":{"id":"nexus_nke/create_ns","title":"Create Namespace in NKE cluster","description":"In Kubernetes, namespaces provides a mechanism for isolating groups of resources within a single cluster. Names of resources need to be unique within a namespace, but not across namespaces. Namespace-based scoping is applicable only for namespaced objects (e.g. Deployments, Services, etc) and not for cluster-wide objects (e.g. StorageClass, Nodes, PersistentVolumes, etc)","sidebar":"tutorialSidebar"},"nexus_nke/nexus_nke":{"id":"nexus_nke/nexus_nke","title":"Register Nexus OSS with NKE cluster","description":"NKE had defined the following requirements for the image registry such as JFrog Artifactory or Nexus OSS.","sidebar":"tutorialSidebar"},"nexus_nke/worker_node":{"id":"nexus_nke/worker_node","title":"Configure Worker Node in NKE cluster","description":"1.\\tLogin to centos VM.  Connect to the NKE cluster","sidebar":"tutorialSidebar"},"nexus/configure_nexus":{"id":"nexus/configure_nexus","title":"Part 1: Create build user in Nexus OSS","description":"Nexus OSS is an active product with on-going development from SonarType.  Nexus OSS may introduce new feature which require us to do further configuration to work with the CI/CD blueprint and NKE Kubernetes cluster.","sidebar":"tutorialSidebar"},"nexus/configure_nexus2":{"id":"nexus/configure_nexus2","title":"Part 2: Create Repository Nexus OSS","description":"1.\\tClick on Administration icon and click on Blob Stores","sidebar":"tutorialSidebar"},"nexus/provision_nexus":{"id":"nexus/provision_nexus","title":"Provision Nexus OSS","description":"1.\\tClick on the highlighted to access Calm","sidebar":"tutorialSidebar"},"nke/add_account":{"id":"nke/add_account","title":"Add account in NCM Self Service","description":"1.\\tIn Calm, click on Settings.  Click on Accounts","sidebar":"tutorialSidebar"},"nke/provision_nke":{"id":"nke/provision_nke","title":"Provision NKE cluster","description":"1.\\tClick on highlighted item to access Calm","sidebar":"tutorialSidebar"},"nke/retrieve_token":{"id":"nke/retrieve_token","title":"Retrieve NKE token","description":"1.\\tPutty to the VM.  Run the command to print out the kubeconfig","sidebar":"tutorialSidebar"},"nke/verify_nke":{"id":"nke/verify_nke","title":"Verify NKE cluster","description":"1.\\tDrill into the application.  Click on Services.  Click on Karbon","sidebar":"tutorialSidebar"},"storage/csi":{"id":"storage/csi","title":"Storage Concept in Kubernetes","description":"The Container Storage Interface (CSI) Volume Driver for Kubernetes uses Nutanix Volumes and Nutanix Files to provide scalable, persistent storage for stateful applications.","sidebar":"tutorialSidebar"},"storage/kubeconfig":{"id":"storage/kubeconfig","title":"Connect to K8S cluster","description":"1.\\tNavigate to the Calm application of the Kubernetes cluster","sidebar":"tutorialSidebar"},"storage/volume_other":{"id":"storage/volume_other","title":"CSI Capabilities of Nutanix Volumes","description":"When your stateful application is running out of storage space, you can modify the PersistentVolumeClaim to the desired size without stopping the application. The csi-resizer sidecar container watches PVCs for any volume resize request. When the PVC is resized, the csi-resizer interacts with the CSI driver to expand the underlying volume to the desired size. After the volume is resized, kubelet requests the CSI driver running on the worker node where the application is running to expand the volume and its file-system. The volume is expanded while your application continues to run.","sidebar":"tutorialSidebar"},"storage/volume_pvc":{"id":"storage/volume_pvc","title":"Consumption of Nutanix Volumes","description":"Nutanix distributed storage delivers storage using multiple protocols, including Network File System (NFS), Server Message Block (SMB), and Internet Small Computer System Interface (iSCSI). Nutanix Volumes is enterprise-class, software-defined storage that exposes storage resources directly to virtualized guest operating systems or physical hosts using the iSCSI protocol.","sidebar":"tutorialSidebar"},"what_is_calm/what_is_calm":{"id":"what_is_calm/what_is_calm","title":"NCM Self Service?","description":"NCM Self Service (Formerly Calm) provides advanced application-level orchestration that transforms","sidebar":"tutorialSidebar"}}}')}}]);