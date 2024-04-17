# PokeMatch a simple devcontainer

## Devcontainer

<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/lorenzboss/pokematch.git">
  <img 
    src="https://img.shields.io/badge/Open_in-DevContainer-blue?logo=visual-studio-code" 
    alt="Open in DevContainer" 
    height="30"
  >
</a>

### Start the project via button

1. Make sure you have installed [Docker](https://www.docker.com/get-started) and [Visual Studio Code](https://code.visualstudio.com/download) with the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
2. Click on the button above (on github.com)
3. All dependencies will be installed automatically
4. Run the project with F5 or Ctrl+F5 or `npm run dev`

### Start the project manually

1. Make sure you have installed [Docker](https://www.docker.com/get-started) and [Visual Studio Code](https://code.visualstudio.com/download) with the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
2. Clone the repository in Visual Stuido Code
3. Reopen the project in a container
4. All dependencies will be installed automatically
5. Run the project with F5 or Ctrl+F5 or `npm run dev`

### Initialize sample data

To add sample Data to the database run the following command in the terminal:

```bash
node sample-data.js
```

### Additional information

1. The project will be running on port `4040`
2. The database-tool mongo-express will be running on port `8081`
3. The credentials for mongo-express are `admin` and `pass`
4. Mongo-express is only available in the devcontainer
5. The database is running on port `27017` (you don't need to access it directly)

### Tools

In the devcontainer we use the following tools:

- Mongo-express
- ESLint
- Prettier
- REST Client

## Production container

### Start the project

1. Make sure you have installed [Docker](https://www.docker.com/get-started) and [Visual Studio Code](https://code.visualstudio.com/download).
2. Clone the repository in Visual Stuido Code
3. In the terminal go to the project folder
4. Run `docker-compose up`

### Additional information

1. The project will be running on port 4040
2. The database-tool mongo-express can only run in the devcontainer

## Informations about the project

- We create a simple web application with a connection to a MongoDB database
- The frontend is written in HTML, CSS and JavaScript
- The backend is also written in JavaScript with Node.js
- In the webapp you can play memory and it will show you the time and the moves you needed to finish the game
- This data will be saved in the database
- There is a leaderboard where you can see the top 5 players
- THe leaderboard is ranked by the moves a player needed to finish the game
