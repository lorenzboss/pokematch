# PokeMatch a simple DevContainer

## Information about the project

- We create a simple web app with a connection to a MongoDB database
- The frontend is written in HTML, CSS and JavaScript
- The backend is also written in JavaScript with Node.js
- On the web app you can play memory, and it saves the moves/time you needed to finish the game
- There is a leaderboard where you can see the top 5 players
- The leaderboard is ranked by the moves a player needed to finish the game

## DevContainer

<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/lorenzboss/pokematch.git">
  <img 
    src="https://img.shields.io/badge/Open_in-DevContainer-blue?logo=visual-studio-code" 
    alt="Open in DevContainer" 
    height="30"
  >
</a>

### Start the project via button

1. Make sure you have installed [Docker](https://www.docker.com/get-started) and [Visual Studio Code](https://code.visualstudio.com/download) with the [DevContainer](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
2. Click on the button above (on [github](https://github.com/lorenzboss/pokematch))
3. All dependencies, extensions and tools will be installed automatically
4. Copy the .env.sample file and rename it to .env
5. Run the project with `F5` or `Ctrl+F5` or `npm run dev`

### Start the project manually

1. Make sure you have installed [Docker](https://www.docker.com/get-started) and [Visual Studio Code](https://code.visualstudio.com/download) with the [DevContainer](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
2. Clone the repository in Visual Studio Code
3. Reopen the project in a DevContainer
4. All dependencies, extensions and tools will be installed automatically
5. Copy the .env.sample file and rename it to .env
6. Run the project with `F5` or `Ctrl+F5` or `npm run dev`

### Initialize sample data

To add sample Data to the database, run the following command in the terminal (in the pokematch folder):

```bash
node sample-data.js
```

### Additional information

1. The website will be running on port `4040`
2. The database-tool mongo-express will be running on port `8081`
3. The credentials for mongo-express are `admin` and `pass`
4. The database is running on port `27017` (you don't need to access it directly)

### Tools

In the DevContainer, you can use the following tools and extensions:

- Mongo-express
- ESLint
- Prettier
- REST Client

## Production container

### Start the project

1. Make sure you have installed [Docker](https://www.docker.com/get-started)
2. Clone the repository
3. Go to the repository folder and run the following commands:
4. In the terminal, go to the pokematch folder and run the following commands:
   ```bash
   docker build -t pokematch_production .
   ```
   ```bash
    docker run -d -p 4040:80 --name pokematch_production pokematch_production
   ```

### Additional information

1. The project will be running on port 4040
2. Since the database is not included in the production container, the leaderboard will not work
