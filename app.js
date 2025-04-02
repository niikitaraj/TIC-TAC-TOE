let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#winning-msg");

let turn = true;
let count = 0;
const winpatterns = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8],
    [6,4,2]
];

const resetGame = () => {
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerText = "O";
            turn = false;
        }else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled= true;
        count++;

        let isawinner = checkwinner();
        if(count===9 && !isawinner){
            gamnedraw();
        }
    });
});

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const gamnedraw = () => {
    msg.innerText = "Game Draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const showwinner = (winner) => {
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
     for(pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2!="" && pos3!=""){
            if(pos1 == pos2 && pos2 == pos3){
            console.log("winner" , pos1);
            showwinner(pos1);
            }
        }
    }
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
