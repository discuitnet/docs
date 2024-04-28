# Self-Hosting Guide for Discuit

Welcome to the self-hosting guide for Discuit! Here, you'll find step-by-step instructions on how to set up and run Discuit on your own server.

## Prerequisites

- [Git](https://git-scm.com/)

## Cloning the Repository

```shell
git clone https://github.com/discuitnet/discuit.git && cd discuit
```

## Running Locally

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Go (1.21 or higher)](https://go.dev/)
- [MariaDB](https://mariadb.org/)
- [Redis](https://redis.io/)
- [Node.js and NPM](https://nodejs.org/en/download/package-manager)
- [libvips](https://libvips.github.io/libvips/install.html) (for image transformations)

### 1. Setting Up the Development Environment

#### Create MariaDB Database

```shell
# Open MariaDB CLI
mariadb -u root -p --binary-as-hex

# Create a database named discuit (you may use a different name)
create database discuit;

# Exit MariaDB CLI
exit;
```

### 3. Configure Discuit

Create a file named `config.yaml` in the root directory and copy the contents of [`config.default.yaml`](https://github.com/discuitnet/discuit/blob/main/config.default.yaml) into it. Modify `config.yaml` with your desired configurations.

### 4. Build and Run Discuit

```shell
./build.sh           # Build frontend and backend
./discuit -migrate   # Run migrations
./discuit -serve     # Start the server
```

## Running with Docker

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Docker](https://docs.docker.com/engine/install/)

### Limitations

- The Docker image is not suitable for production use.
- The Docker image only supports amd64 architecture.

### 1. Build the Docker Image

```shell
docker build -t discuit .
```

### 2. Run the Docker Container

```shell
docker run -d --name discuit \
-v discuit-db:/var/lib/mysql \
-v discuit-redis:/var/lib/redis \
-v discuit-images:/app/images \
-p 8080:80 discuit
```

### 3. Accessing Discuit

After the container starts, you can access Discuit by navigating to `http://localhost:8080` on your web browser.

### 4. Stopping and Starting the Container

```shell
docker stop discuit     # Stop the container
docker start discuit    # Start the container again
```
