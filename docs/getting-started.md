# Getting started

Welcome to the documentation for Discuit!

## Table of contents

- [API Getting Started Guide](/api/getting-started)
- [Self-hosting Guide](/self-hosting)

## Architecture

Discuit is built with the following components:

- **Backend**: Developed in Go, it handles the core functionality of the application. It consists of modules like authentication, database interactions, and API endpoints.
  
- **Frontend**: Developed in React, it provides the user interface for interacting with the platform. It includes components for browsing content, user profiles, and community interactions.
  
- **Database**: MariaDB is used as the main datastore for Discuit. It stores user data, community information, and other application-related data.
  
- **Transient Data Store**: Redis is utilized for transient data storage, such as caching frequently accessed data and managing session information.

The project directory structure is organized into the following main directories:

- `core`: Contains core functionality of the backend.
- `internal`: Contains Go packages internal to the project.
- `migrations`: Contains SQL migration files.
- `server`: Houses the REST API backend.
- `ui`: Contains the React frontend.

Contributions to Discuit are welcomed under the [GNU Affero General Public License](https://github.com/discuitnet/discuit?tab=AGPL-3.0-1-ov-file). Before starting substantial work, it's recommended to create an issue or contact the maintainer(s) for discussion.

## Frequently Asked Questions

### How can I get help with setting up Discuit?

- [GitHub Issues](https://github.com/discuitnet/discuit/issues): If you encounter any issues during the setup process, feel free to create a new issue on the Discuit repository.
- [DiscuitDev](https://discuit.net/DiscuitDev): Join the DiscuitDev community to get help from other Discuit users and developers.

### What are the OS requirements for running Discuit?

Discuit is designed to run on Linux-based systems. If you're using a different operating system, you may need to adapt the instructions accordingly.
