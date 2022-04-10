const bod=document.querySelector("body");
const container=document.createElement("div");
container.classList.add("container");
function createDivs(){
    
    bod.insertBefore(container,document.querySelector("script"));
    for(let i=0;i<256;i++){
        let elem=document.createElement("div");
        elem.classList.add("square");
        container.appendChild(elem);
    }
}
createDivs();

function square(div){
    const screenWidth=document.body.clientWidth;
    //to create 16 boxes according to different screen sizes
    const squareWidth=screenWidth/16;
    div.style.width=squareWidth+"px";
    div.style.height=squareWidth+"px";
}
let squares=document.querySelectorAll(".square");
squares.forEach(i=>square(i));
//Adding hover effect
window.addEventListener("mouseover",paint);
function paint(e){
    if(e.target.classList[0]==="square"){
        e.target.style.background="blue"; 
    }
}

//create Button tag
const button=document.createElement("button");
button.style.position="absolute";
button.textContent="Clear Screen";
bod.insertBefore(button,container);

//clear screen on click
button.addEventListener("click",e=>{
    squares.forEach(square=>{
        square.style.background="";
    })
})