const pokemonAPI = {};

fetch("/pokeAPI")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((pokemon) => {
      pokemonAPI[pokemon.id] = pokemon;
    });

    const pokemonIds = [
      "1", "1", "2", "2", "3", "3", "4", "4",
      "5", "5", "6", "6", "7", "7", "9", "9"
    ];


    let shuffledPokemonIds = pokemonIds.sort(() => Math.random() - 0.5);

    let flippedCards = [];
    let matchedPairs = 0;


    let time = 0;
    let moves = 0;
    let timerInterval;


    let gameStarted = false;

    function stopTimer() {
      clearInterval(timerInterval);
      gameStarted = false;
    }

    function startTimer() {
      timerInterval = setInterval(updateTimer, 1000);
      gameStarted = true;
    }

    function updateTimer() {
      time += 1;

      document.getElementById("time").innerHTML = `<span>seconds: ${time}</span>`;
    }

    function updateMoves() {
      moves++;

      document.getElementById("moves").innerHTML = `<span>moves: ${moves}</span>`;
    }


    function initializeTimer() {
      if (!gameStarted) {
        timerInterval = setInterval(updateTimer, 1000);
        gameStarted = true;
      }
    }


    function createPokemonBox(pokemonId) {
      const data = pokemonAPI[pokemonId];
      const box = document.createElement("div");
      box.className = "item";
      box.dataset.id = pokemonId;
      const img = document.createElement("img");
      img.src = data.sprites.front_default;
      img.alt = data.name;
      box.appendChild(img);

    
      box.onclick = function () {
        initializeTimer();

        if (
          flippedCards.length < 2 &&
          !flippedCards.includes(this) &&
          !this.classList.contains("boxOpen")
        ) {
          this.classList.add("boxOpen");
          flippedCards.push(this);

          if (flippedCards.length === 2) {
            const card1 = flippedCards[0].getAttribute("data-id");
            const card2 = flippedCards[1].getAttribute("data-id");

            if (card1 === card2) {
              flippedCards = [];
              matchedPairs++;

              if (matchedPairs === shuffledPokemonIds.length / 2) {
                setTimeout(() => {
                  let user = prompt("Name:");
                  fetch('/api/winner', {
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ user, moves, time })
                  })
                  .then((response) => response.json())
                  .then((data) => console.log(data))
                  .catch((err) => {
                    console.log(`Error ${err}`)
                  });
                  stopTimer();
                }, 500);
              }
            } else {
              setTimeout(() => {
                flippedCards.forEach((card) =>
                  card.classList.remove("boxOpen")
                );
                flippedCards = [];
              }, 1000);
            }

            updateMoves();
          }
        }
      };

      document.querySelector(".game").appendChild(box);
    }

    async function createGame() {
      for (let i = 0; i < shuffledPokemonIds.length; i++) {
        createPokemonBox(shuffledPokemonIds[i]);
      }
    }

    console.log(shuffledPokemonIds[0], shuffledPokemonIds[1], shuffledPokemonIds[2], shuffledPokemonIds[3])
    console.log(shuffledPokemonIds[4], shuffledPokemonIds[5], shuffledPokemonIds[6], shuffledPokemonIds[7])
    console.log(shuffledPokemonIds[8], shuffledPokemonIds[9], shuffledPokemonIds[10], shuffledPokemonIds[11])
    console.log(shuffledPokemonIds[12], shuffledPokemonIds[13], shuffledPokemonIds[14], shuffledPokemonIds[15])


    createGame();
  })
  .catch((err) => {
    console.error(`Error getting Pokémon data ${err}`);
  });