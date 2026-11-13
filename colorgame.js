
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode-button");


function pickColor() {

    var random = Math.floor(Math.random() * colors.length);

    return colors[random];

}


function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}


function generateRandomColors(num) {

    var arr = [];

    while (arr.length < num) {

        var newColor = randomColor();

        if (!arr.includes(newColor)) {

            arr.push(newColor);

        }

    }

    return arr;

}


function changeColors(color) {

    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = color;

        squares[i].classList.remove("invisible");

    }

}


function reset() {

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";

    h1.style.backgroundColor = "steelblue";

    resetButton.textContent = "Nuevos Colores";

    for (var i = 0; i < squares.length; i++) {

        squares[i].classList.remove("invisible");

        if (colors[i]) {

            squares[i].style.backgroundColor = colors[i];

            squares[i].style.display = "block";

        } else {

            squares[i].style.display = "none";

        }

    }

}


function setupSquares() {

    for (var i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function() {

            var clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {

                messageDisplay.textContent = "¡Correcto!";

                resetButton.textContent = "Play Again?";

                changeColors(pickedColor);

                h1.style.backgroundColor = pickedColor;

            } else {

                this.classList.add("invisible");

                messageDisplay.textContent = "Intentalo nuevamente";

            }

        });

    }

}


function setupModeButtons() {

    for (var i = 0; i < modeButtons.length; i++) {

        modeButtons[i].addEventListener("click", function() {

            for (var j = 0; j < modeButtons.length; j++) {

                modeButtons[j].classList.remove("selected");

            }

            this.classList.add("selected");

            numSquares = this.textContent === "Easy" ? 3 : 6;

            reset();

        });

    }

}


function setupResetButton() {

    resetButton.addEventListener("click", function() {

        reset();

    });

}


function init() {

    setupSquares();

    setupModeButtons();

    setupResetButton();

    reset();

}


init();
