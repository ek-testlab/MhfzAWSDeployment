<!-- ABOUT THE PROJECT -->
## About The Project

This repository provides an easy-to-use template and framework for deploying Erupe, an open-source server emulator for Monster Hunter Frontier, on AWS in a single deployment. It also includes an optional serverless web app for controlling the server.

### Architecture
![AWS Architecture](architecture%20diagram.svg)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

You need an AWS account with billing information configured. While cost minimization is one of the goals of this deployment, it will still incur AWS charges, primarily for the time the EC2 instance is running.

### Prerequisites

An S3 bucket containing the server binaries must be created before deploying the infrastructure. After configuring your desired AWS region, you can create the bucket using the following AWS CLI command:
  ```sh
  aws s3 mb s3://YOUR-BUCKET-NAME --region $(aws configure get region)
  ```
Before uploading the archive, rename it to `MHFZbinaries.7z`.

The chosen bucket name must match the `MhfzDataBucketName` parameter provided when deploying the CloudFormation stack.


Your current bucket structure should look like this:
  ```text
  YOUR-BUCKET-NAME/
  └── MHFZbinaries.7z
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Navigate to **CloudFormation** and create a new stack using the `server_deployment/deployment.yaml` template. Make sure to deploy the stack in the **same AWS Region as your previously created S3 bucket**.


__Optional__

You can optionally deploy the `server_control/serverless.yml` template as a separate stack. This deploys a serverless web application that allows anyone with access to the Lambda URL to start or stop the server, helping reduce costs by keeping the EC2 instance running only when needed.

1. Deploy a separate CloudFormation stack using `server_control/serverless.yml` in the same AWS Region as your server.
2. Download the contents of `server_control/serverless_frontend` from this repository.
3. Copy the URL from the stack's **Outputs** and replace `YOUR-LAMBDA-URL` in `serverless.js` with the provided URL.
4. Upload the contents of the serverless_frontend folder to the same S3 bucket specified in the prerequisites.
5. Make sure **Static website hosting** is enabled for the S3 bucket.
Your final bucket structure should look like this:
  ```text
  YOUR-BUCKET-NAME/
  └── MHFZbinaries.7z
  └── index.html
  └── main.css
  └── serverless.js
  ```

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Serverless Webapp Template and Instructions](https://github.com/acantril/learn-cantrill-io-labs/tree/master/aws-serverless-pet-cuddle-o-tron)
* [GitHub README Template](https://github.com/othneildrew/Best-README-Template)
* [Erupe Server Emulator Project](https://github.com/Mezeporta/Erupe/tree/531b3d2fa6af9b102f775d1630360605abc0ac67)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge