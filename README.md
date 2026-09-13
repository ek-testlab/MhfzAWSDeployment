<!-- ABOUT THE PROJECT -->
## About The Project

This repository provides an easy-to-use template and framework for deploying a containerized Monster Hunter Frontier Server on AWS Infrastructure in a single deployment, even for users with limited AWS experience.
The deployment tries to stay as close to the free tier as possible while providing a stable deployment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

You need an AWS account with linked billing information.

### Prerequisites

A S3 bucket with the server's binaries is required to be set up beforehand. You can use the following command after setting your desired region.
* AWS cli
  ```sh
  aws s3 mb s3://YOUR-BUCKET-NAME --region $(aws configure get region)
  ```
Before uploading the archive you need to rename it to 'MHFZbinaries.7z'
Afterwards you can upload the archive containing the binaries to the bucket.
It is important that the chosen bucket name matches the bucket referenced in deploy.sh.

Your final bucket structure should look as follows:
  ```text
  YOUR-BUCKET-NAME/
  └── MHFZbinaries.7z
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Navigate to Cloudformation and create a new stack with the deployment.yaml template in your desired region.

__Optional__

Since cost savings are one of the main goals of this template, you can optionally deploy the serverless.yml template as a separate stack.

1. Create a separate CloudFormation stack using serverless.yml in the same AWS Region as your server.
2. Copy the URL from the stack's Outputs and add it to the serverless.js file.
3. Upload the contents of the serverless_frontend folder to the same S3 bucket specified in the prerequisites.
Make sure Static website hosting is enabled for the S3 bucket.

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