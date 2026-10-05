<!-- ABOUT THE PROJECT -->
## Ansible Usage

Ansible Dynamic Inventory is used to discover the EC2 instance automatically through its tags. This allows the server to operate without assigning something like an elastic IP, reducing costs while still providing reliable access for automation. 

Ansible is used explicitly as a Configuration Management tool for this project.

### Requirements

- amazon.aws collection
- community.docker collection

### Explanation of the Playbooks

#### `update_config.yml`

Updates the server configuration file using the local configuration file as the source.

#### `backup.yml`

Creates backups of the `users` and `characters` tables and uploads them to S3.


<p align="right">(<a href="#readme-top">back to top</a>)</p>