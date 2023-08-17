let back = document.querySelector("body");
let gameLogs = [];
let userLogs = [];
let red = document.querySelector(".red_compartment");
let green = document.querySelector(".green_compartment");
let blue = document.querySelector(".blue_compartment");
let purple = document.querySelector(".purple_compartment");
let values = [red, green, blue, purple];
let score = document.querySelector("h3");
let level =0;
let info = document.querySelector("#instruction");
let game = false;
document.addEventListener("keyup", function (event) {
    if (event.key == " ") {
        if (!game) {
            info.innerHTML = "";
            game = true;
            change();
        }
    }
})




const change = function () {
    let rand = Math.floor(Math.random() * values.length);
    setTimeout(() => {
        values[rand].classList.add("active");
        setTimeout(() => {
            values[rand].classList.remove("active");
        }, 500);
    }, 1000);
    gameLogs.push(values[rand]);
    console.log(values[rand]);
    level++;
};

const checkUserInput = function () {
    let isMatch = true;
    if (userLogs.length === gameLogs.length) {
        for (let j = 0; j < userLogs.length; j++) {
            if (userLogs[j] !== gameLogs[j]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            console.log("Congratulations!");
            userLogs = [];
            console.log(level);
            change();
        } else {
            console.log("Sorry, you lost the game. Press spacebar to play again!");
            gameLogs = [];
            userLogs = [];
            
            setTimeout(() => {
                back.classList.add("back_active");
                setTimeout(() => {
                    back.classList.remove("back_active");
                }, 50);
            }, 80);
            game = false;
            info.innerHTML = `<h4>your score is ${level-1} Press spacebar to play again!</h4>`;
            score.innerText = `your high score is ${level-1}`;
            level = 0;
        }
    }
};

for (let i = 0; i < values.length; i++) {
    values[i].addEventListener("click", function () {
        setTimeout(() => {
            values[i].classList.add("active");
            setTimeout(() => {
                values[i].classList.remove("active");
            }, 250);
        }, 30);
        if (game) {
            userLogs.push(values[i]);
            checkUserInput();
        }
    });
}