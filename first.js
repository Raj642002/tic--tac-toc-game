let boxes=document.querySelectorAll(".box");
let rest=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
  let msg=document.querySelector("#msg");
let turno=true; // player x or player 0
const winpatern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame=()=>{
    turno=true;
    enabledbox();
    msgcontainer.classList.add("hide");
}
     boxes.forEach((box) => {
    box.addEventListener("click",() =>{
         
        if(turno){
            box.innerText="O";
            turno=false;
        } else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });  
});

const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     disabledboxes();
};
 const checkwinner=()=>{
    for( let pattern of winpatern){
       
        let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
            if(pos1val!="" && pos2val!=""&& pos3val!=""){
          if(pos1val===pos2val && pos2val===pos3val){
            console.log(pos1val,"winner");
            
            showWinner(pos1val);
          }  
        }
    }
 };
 rest.addEventListener("click",resetgame);
 
