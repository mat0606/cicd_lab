module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'Lab Overview',
      items: ["intro/intro","intro/Lab","intro/Lab-Infra"]
    },
    {
      type: 'category',
      label: 'Nutanix Kubernetes Engine (NKE)',
      items: ["nke/provision_nke","nke/verify_nke","nke/retrieve_token","nke/add_account"]
    },
    {
      type: 'category',
      label: 'Nexus OSS',
      items: ["nexus/provision_nexus","nexus/configure_nexus","nexus/configure_nexus2"]
    },
  ],
};