// const game=document.querySelector('#Game');
// console.log(game);
const allbox = document.querySelectorAll(".box");
const newGame = document.querySelector(".nbtn");
const resetGame = document.querySelector("#rbtn");
const mscontainer = document.querySelector(".msg-contain");
console.log(allbox);
let turn0 = true;
const WinPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

allbox.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log('button was click!');
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
    box.disabled = true;

    CheckWinner();
  });
});
const resetsGame = () => {
  turn0 = true;
  enableboxse();
  mscontainer.classList.add("hide");
};
const disableboxse = () => {
  for (let box of allbox) {
    box.disabled = true;
  }
};
const enableboxse = () => {
  for (let box of allbox) {
    box.disabled = false;
    box.innerText = "";
    
  }
};
const MessageShow = (winner) => {
  mscontainer.innerText = `Congratulation You win,${winner}`;
  mscontainer.classList.remove("hide");
  disableboxse();
};
const CheckWinner = () => {
  for (let Pattern of WinPattern) {
   
    let pos1Val = allbox[Pattern[0]].innerText;
    let pos2Val = allbox[Pattern[1]].innerText;
    let pos3Val = allbox[Pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        MessageShow(pos1Val);
      }
    }
  }
};
resetGame.addEventListener("click", resetsGame);
newGame.addEventListener("click", resetsGame);
