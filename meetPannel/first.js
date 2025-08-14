let card=document.querySelectorAll(".card");
for(let each of card){
    each.addEventListener("click",()=>{
    //    console.log(each.textContent.trim());
      alert(`You Clicked  : ${each.textContent.trim()}`)
});
}
