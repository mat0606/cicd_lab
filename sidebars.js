module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'Lab Overview',
      items: ["intro/Lab", "intro/Lab-Infra"]
    },
    {
      type: 'category',
      label: 'Calm 101',
      items: ['what_is_calm/what_is_calm',
              'calm_project/calm_project',
              'calm_marketplace/calm_marketplace',
             ],
    },
    {
      type: 'category',
      label: 'Nutanix Kubernetes Engine (NKE)',
      items: ["nke/provision_nke", "nke/verify_nke", "nke/retrieve_token", "nke/add_account"]
    },
    {
      type: 'category',
      label: 'Nexus OSS',
      items: ["nexus/provision_nexus", "nexus/configure_nexus", "nexus/configure_nexus2"]
    },
    {
      type: 'category',
      label: 'CI/CD Environment',
      items: ["cicd/provision_env", "cicd/configure_jenkins"]
    },
    {
      type: 'category',
      label: 'Register Nexus to NKE cluster',
      items: ["nexus_nke/create_ns", "nexus_nke/nexus_nke", "nexus_nke/worker_node"]
    },
    {
      type: 'category',
      label: 'Configure JIRA',
      items: ["jira/configure_jira","jira/create_project","jira/create_user"]
    },
    {
      type: 'category',
      label: 'Environment Verification',
      items: ["env_verify/env_verify", "env_verify/env_verify2"]
    },
    {
      type: 'category',
      label: 'Software Development',
      items: ["cicd_lab/create_defect","cicd_lab/cicd_lab", "cicd_lab/access_app"]
    },
    {
      type: 'category',
      label: 'Consumption of Persistent Volumes',
      items: ["storage/csi","storage/kubeconfig","storage/volume_pvc"]
    },
  ],
};