# Kaze - Discord Bot Project

Welcome to Kaze - Discord Bot Project!
This project is a Discord bot built using JavaScript, Docker and Docker Compose for containerization. It aims to provide a modular and easily extendable solution for Discord bot development.


## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)


## Project Overview

This Discord bot project leverages the power of Docker and Docker Compose to create a scalable and easy-to-deploy solution. By containerizing the application, you can ensure consistency across different environments and simplify the deployment process.

The project emphasizes the use of good coding practices to maintain clean and maintainable code. It follows modular design principles, making it easy to add new features and improve existing functionality over time.


## Installation

To get started with the project, follow these steps:

1. Clone the repository:
```
git clone https://github.com/fncofre/Kaze-Discord-Bot.git
```
2. Install the project dependencies:
```
npm install
```

## Usage

To run Kaze - Discord bot, you can use the provided `start.sh` script. Before running the script, make sure you have Docker and Docker Compose installed on your system.
```
./start.sh
```

The script will build the Docker image and start the bot container.


## Features

- Command-based architecture for handling Discord commands.
- Modular design for easy addition and customization of commands.
- Logging and error handling for better debugging and stability.
- Integration with Docker and Docker Compose for containerization.
- Implementation of good coding practices for clean and maintainable code.
- Seamless flow of information between the `CommandHandler`, `CommandController`, and `CommandService` modules.


## Work in Progress
- Enhanced logging system for improved analysis.
- Support for change default prefixes to server-specific ones.
- Support for slash commands.


## To-Do
- Implementation of a permission system to manage command access.
- Integration with a database for storing logs and configurations.
- Implementation of unit tests for code quality assurance.


## Project Structure

The project follows the following directory structure:
```
├── .dockerignore
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── commands
│   │   └── ping.js
│   ├── config
│   │   └── prefixConfig.json
│   ├── controllers
│   │   ├── commandController.js
│   │   └── eventController.js
│   ├── handlers
│   │   ├── commandHandler.js
│   │   └── eventHandler.js
│   ├── index.js
│   ├── services
│   │   └── commandService.js
│   └── utils
│       ├── logger.js
│       └── logs
│           ├── 2023-05-30_logs.log
│           └── 2023-05-31_logs.log
```

The `src` directory contains the main source code of the Discord bot. It is organized into different modules, such as `commands`, `controllers`, `handlers`, `services`, and `utils`, for better code organization and separation of concerns.


## Contributing

Contributions to the project are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. Remember to follow the project's coding style and guidelines.


## Credits

This project was created and maintained by [fncofre](https://github.com/fncofre).


## License

The Kaze - Discord Bot Project is released under the [MIT License](LICENSE).
