## What does this repository do 🤔

The repository hosts the Spin template for a sample Rancher documentation website based on the Docusaurus static site generator.

It is a POC to demonstrate that Spin (and thereby, Wasm) can be used to template common applications like documentation websites for an org.

This template can, then, be customized per project requirements to easily spin up (**pun intended**) multiple websites.

💸Bonus💸: The templated application can then be deployed on a Kubernetes cluster - locally or on a cloud provider.

## Prerequisites

Before getting started, please ensure you have the following installed on your local workstation:

- The [Spin]() framework
- The [Docusaurus]() Static Site Generator

**The below prerequisites are only required if you plan to containerize the application**

- [Helm]()
- [kubectl]()
- [Kubernetes cluster + kubectl]() -- *please note that I've only tested it on k3s + containerd combination due to limitations with SpinKube.*
- [SpinKube & its prerequisites]()

## Using this repository

1. Install the template within this repo *i.e. docusaurus-ssg*

```
spin templates install --upgrade --git https://github.com/divya-mohan0209/docs-template-docusaurus
```

2. Create a new spin application based on this template

```
spin new my-first-app -t docusaurus-ssg
```

**Please note:** You can name it anything you want. `my-first-app` is a sample name.

3. Customize per your requirement
4. Build the application

```
cd my-first-app
```

```
spin build
``` 

5. Test the application locally

```
spin up
```

6. Package and push the application to a local registry in the form of an OCI artefact.

```
spin registry push ttl.sh/my-first-app:0.1.0
```

**Please note:** You can push it to any registry. I am using one without authentication here for the demo.

7. Use the image you just pushed to create a deployment & associated services on the Kubernetes cluster.

```
spin kube deploy --from ttl.sh/my-first-app:0.1.0
```

8. Use port forwarding to view the app locally.

```
kubectl port-forward svc/my-first-app 8083:80
```

9. Open the browser and navigate to - http://localhost:8083

![image](https://github.com/divya-mohan0209/docs-template-docusaurus/assets/21279125/940ae600-0cdb-48d7-ba30-b1569f471a91)



7. 
