let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-game");
let msgwin = document.querySelector(".msg-win");
const msg = document.getElementById("msg");
 let turn0 = true;//player x, player O (turn)
 const winpatterns = [[0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
]
const reset = () =>
{
    let turn0 = true;//player x, player O (turn)
    enableboxs();
    count =0;
    msgwin.classList.add("hide");
}

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "o";
            box.style.color = "black";
            turn0 = false;
        }
        else{
            box.innerText = "x";
             box.style.color = "red";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkwin();
        if(count === 9 && !iswinner){
            draw();
        }

    });
});
const enableboxs = () =>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";

    }
}
let count = 0;
const draw = (winner) => {
    msg.innerText = `Game is Draw `;
    msgwin.classList.remove("hide");
    disabledboxes();
};

const disabledboxes = () =>{
    for(let box of boxs){
        box.disabled = true;
    }
}
const showwinner = (winner) => {
    msg.innerText = `congraulation , winner is ${winner}`;
    msgwin.classList.remove("hide");
    disabledboxes();
};

const checkwin = () =>{
    for(let patterns of winpatterns){
        let pat1 = boxs[patterns[0]].innerText;
            let pat2= boxs[patterns[1]].innerText;
                let pat3 = boxs[patterns[2]].innerText;
    if(pat1!= "" && pat2!="" && pat3!=""){
        if(pat1 === pat2 && pat2 === pat3){
            console.log("winner",pat3);
            showwinner(pat3);
        }
    }
    }
}   


newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);


