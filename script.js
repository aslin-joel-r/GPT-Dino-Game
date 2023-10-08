const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        jump();
    }
});

function checkCollision() {
    const dinoBottom = parseInt(
        window.getComputedStyle(dino).getPropertyValue("bottom")
    );
    const obstacleLeft = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue("left")
    );

    if (obstacleLeft < 50 && obstacleLeft > 0 && dinoBottom <= 50) {
        alert("Game Over!");
    }
}

setInterval(checkCollision, 10);
