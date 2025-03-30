# Oneclick

This repository houses ready-to-use "one-click" configurations for various project types. The goal is to provide consistent, reproducible, and easily deployable development environments on Linux, Windows, and macOS.

> **Note:**  
> Currently, this repo contains the configuration for a T3 Stack project. More configurations will be added over time.

---

## Table of Contents

- [T3 Stack Configuration](#t3-stack-configuration)
  - [Folder Structure (`t3/`)](#folder-structure-t3)
  - [Key Features](#key-features)
- [Usage](#usage)
  - [Cloning the Repository](#cloning-the-repository)
  - [Starting the Environment](#starting-the-environment)
  - [Accessing the Container with Cursor](#accessing-the-container-with-cursor)
  - [Using Codespaces / VSCode Remote Containers](#using-codespaces--vscode-remote-containers)
- [Contributing](#contributing)
- [License](#license)

---

## T3 Stack Configuration

The `t3/` folder contains the configuration for a T3 Stack development environment (Next.js, TypeScript, tRPC, Prisma, Tailwind CSS).

### Folder Structure (`t3/`)

t3/ ├── Dockerfile ├── docker-compose.yml └── .devcontainer/ └── devcontainer.json


- **Dockerfile**:  
  Defines the base image, installs dependencies, and sets up the startup command for your application.

- **docker-compose.yml**:  
  Orchestrates two services:
  - **web**: The T3 Stack application.
  - **db**: A PostgreSQL instance with a persistent volume to ensure data is maintained between sessions.

- **.devcontainer/devcontainer.json**:  
  Enables seamless integration with GitHub Codespaces and VSCode Remote Containers, launching your containerized development environment automatically.

### Key Features

- **Reproducible Environment**:  
  A centralized configuration ensures every developer works with the same setup.

- **Database Persistence**:  
  Utilizes a Docker volume for PostgreSQL so your data persists even when containers are restarted.

- **Multi-Platform Compatibility**:  
  Works on Linux, Windows (via Docker Desktop), and macOS.

- **Cursor Integration**:  
  Easily attach to the container using Cursor for direct management of your environment.

---

## Usage

### Cloning the Repository

Clone the repository and navigate to the `t3` folder:

```bash
git clone https://github.com/your-username/oneclick.git
cd oneclick/t3
```

### Starting the Environment
Within the t3 folder, use Docker Compose to build and launch the services:

```bash
docker-compose up --build
```

This command will:

Build the image for the web service using the Dockerfile.

Start the db service (PostgreSQL) with a persistent volume.

Mount your source code into the container for hot-reloading during development.

### Accessing the Container with Cursor
If you use Cursor to manage your environment, attach to the primary container (web) with:

```bash
cursor attach web
```

This command lets you interact directly with the container via your terminal.

---

## Contributing
Contributions are welcome!
If you wish to add a new configuration or improve an existing one, please:

Open an issue to discuss your changes.

Submit a pull request with your updates.

---

## License
This project is licensed under the MIT License.

--- 

Oneclick is designed to simplify the setup of development environments, so you can focus on what matters most: coding.
