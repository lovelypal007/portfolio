let uservar = 0;
let compvar = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
const userscore = document.getElementById("userid");
const compscore = document.getElementById("compid");


const Drawgame = () => {
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#39C2C0";
}
const winner = (userwin)=>{

    if(userwin){
        uservar++;
        userscore.innerText = uservar;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "#9ae19d";
    }
    else{
        compvar++;
        compscore .innerText= compvar;
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "#C23939";

    }
}
const compchoice = () =>
{
    const options = ["rock","paper","Scisscor"];
    const ramdoninx = Math.floor(Math.random()*3);
    return options[ramdoninx];
}

const playgame = (user) => {
    //console.log("user choice",user);
    const compoption = compchoice();
    //console.log("computer choice",compoption);

    if(user === compoption){
          Drawgame();
     }else{
        userwin = true;
        if(user === "rock")
        {
            userwin = compoption === "paper"?true:false;  
        }
        else if(user === "paper")
        {
            userwin = compoption === "Scisscor"?true:false;
        }
        else(user === "Scisscor")
        {
        userwin = compoption === "rock"?false:true;
    }
    winner(userwin);

}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user = choice.getAttribute("id")
        playgame(user);
    })
});
