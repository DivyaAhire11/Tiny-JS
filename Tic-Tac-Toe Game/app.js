

let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-game");
let mainContainer = document.querySelector(".main-container");
let msg= document.querySelector("#winner");

let winPattarn =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turn0 = true;

// FUCTIONS
let disableBoxes =() =>{
  for(let box of boxes){
      box.disabled = true;
  }
}
let enableBoxes = () =>{
     for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
  }
}

const reset = () =>{
     turn0 = true;
     enableBoxes();
     mainContainer.classList.add("hide");
}
const showwinner=(winner)=>{
     msg.innerText = `Congratulations , winner is ${winner}`;
    disableBoxes();
     mainContainer.classList.remove("hide");
    }

//Events
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turn0){
        box.innerText = "O";
        turn0 = false;
      }else{
        box.innerText = "X";
        turn0 = true;
      }
    box.disabled = true;
   
    checkwinner();
    });
   
})
const checkwinner = ()=>{
  for(let pattern of winPattarn){
     let pos1 = boxes[pattern[0]].innerText;
     let pos2 = boxes[pattern[1]].innerText;
     let pos3 = boxes[pattern[2]].innerText;
      
    if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
         if(pos1 === pos2 && pos2 === pos3){
               showwinner(pos1);
         }
         }
    }
}

resetBtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);


