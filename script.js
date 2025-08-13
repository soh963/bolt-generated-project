<!-- script.js -->
    let snake = [];
    let food = null;

    function initGame() {
      // Initialize game state
      snake = [[0, 0]];
      food = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

      // Draw initial game state
      drawSnake();
      drawFood();

      // Start game loop
      setInterval(updateGame, 100);
    }

    function updateGame() {
      // Update snake position
      let head = snake[0];
      let newHead = [head[0] + Math.floor(Math.random() * 2) - 1, head[1] + Math.floor(Math.random() * 2) - 1];

      // Check for collisions with food or self
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        // Eat food and grow snake
        snake.push(newHead);
        food = null;
      } else if (snake.includes(newHead)) {
        // Game over: snake collided with itself
        alert("Game Over!");
        return;
      }

      // Update game state
      snake.unshift(newHead);

      // Draw updated game state
      drawSnake();
      drawFood();

      // Check for game over
      if (snake.length > 10) {
        alert("Game Over!");
      }
    }

    function drawSnake() {
      // Clear previous snake drawing
      document.getElementById("game-container").innerHTML = "";

      // Draw snake segments
      for (let i = 0; i < snake.length; i++) {
        let segment = document.createElement("div");
        segment.style.position = "absolute";
        segment.style.top = `${snake[i][1] * 20}px`;
        segment.style.left = `${snake[i][0] * 20}px`;
        segment.style.width = "20px";
        segment.style.height = "20px";
        segment.style.background = "green";
        document.getElementById("game-container").appendChild(segment);
      }
    }

    function drawFood() {
      // Clear previous food drawing
      document.getElementById("game-container").innerHTML = "";

      // Draw food
      let foodElement = document.createElement("div");
      foodElement.style.position = "absolute";
      foodElement.style.top = `${food[1] * 20}px`;
      foodElement.style.left = `${food[0] * 20}px`;
      foodElement.style.width = "20px";
      foodElement.style.height = "20px";
      foodElement.style.background = "red";
      document.getElementById("game-container").appendChild(foodElement);
    }

    initGame();
