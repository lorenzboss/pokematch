# PokeMatch a simply devcontainer

## Devcontainer

### Start the project

<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/lorenzboss/pokematch.git">
  <img src="https://img.shields.io/badge/Open_in-DevContainer-blue?logo=visual-studio-code" alt="Open in Visual Studio Code" height="30">
</a>

<br>

1. Make sure you have installed [Docker](https://www.docker.com/get-started) and [Visual Studio Code](https://code.visualstudio.com/download) with the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
2. Clone the repository in Visual Stuido Code
3. Reopen the project in a container
4. All dependencies will be installed automatically and sample data will be added to the database
5. Run the project with F5 or Ctrl+F5 or `npm run dev`

### Additional information

1. The project will be running on port 4040
2. The database-tool mongo-express will be running on port 8081
3. The credentials for mongo-express are `admin` and `pass`
4. Mongo-express is only available in the devcontainer

## Production container

### Start the project

1. Make sure you have installed [Docker](https://www.docker.com/get-started) and [Visual Studio Code](https://code.visualstudio.com/download).
2. Clone the repository in Visual Stuido Code
3. In the terminal go to the project folder
4. Run `docker-compose up`

### Additional information

1. The project will be running on port 4040
2. The database-tool mongo-express can only run in the devcontainer

## Project structure

- `src`: This directory contains the source code of the project.
- `src/app.js`: The main entry point of the application.
- `src/routes`: This directory contains the route handlers for different endpoints.
- `src/controllers`: This directory contains the controllers that handle the business logic.
- `src/models`: This directory contains the data models for the application.
- `src/config`: This directory contains configuration files for the application.
- `src/utils`: This directory contains utility functions used throughout the application.

- `test`: This directory contains the unit tests for the application.
- `test/controllers`: This directory contains the test cases for the controllers.
- `test/models`: This directory contains the test cases for the models.

- `docker-compose.yml`: The Docker Compose configuration file for running the project in a production container.
