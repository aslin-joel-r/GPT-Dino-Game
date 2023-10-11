let dino = document.getElementById("dino");
let obstacle = document.querySelector(".obstacle");
let gameContainer = document.getElementById("game-container");
let scoreDisplay = document.getElementById("score");
let isJumping = false;
let score = 0;

function startGame() {
    document.querySelector("button").disabled = true;
    score = 0;
    scoreDisplay.textContent = score;
    jump();
}

function jump() {
    if (!isJumping) {
        isJumping = true;
        let jumpHeight = 0;
        let jumpInterval = setInterval(function() {
            if (jumpHeight < 100) {
                dino.style.bottom = jumpHeight + "px";
                jumpHeight += 10;
            } else {
                clearInterval(jumpInterval);
                let fallDownInterval = setInterval(function() {
                    if (jumpHeight > 0) {
                        dino.style.bottom = jumpHeight + "px";
                        jumpHeight -= 10;
                    } else {
                        clearInterval(fallDownInterval);
                        isJumping = false;
                    }
                }, 50);
            }
        }, 50);
    }
}

function createObstacle() {
    let obstacleLeft = 800;
    let obstacleInterval = setInterval(function() {
        if (obstacleLeft > -20) {
            obstacle.style.left = obstacleLeft + "px";
            obstacleLeft -= 10;
        } else {
            clearInterval(obstacleInterval);
            obstacleLeft = 800;
            createObstacle();
        }

        if (obstacleLeft < 80 && obstacleLeft > 0 && dino.style.bottom == "0px") {
            alert("Game Over! Score: " + score);
            document.location.reload();
        }
    }, 50);
}

createObstacle();
