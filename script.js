const bod=document.querySelector("body");
const container=document.createElement("div");
container.classList.add("container");
bod.insertBefore(container,document.querySelector("script"));

const screenWidth=document.body.clientWidth;

function createDivs(num=16,container=document.querySelector(".container")){ 
    let squareWidth=screenWidth/num;
    // container.innerHTML=`<div class="square" style="width:${squareWidth}px; height:${squareWidth}px;"></div>`.repeat(num*num);
    let elem=document.createElement("div");
    elem.classList.add("square");
    elem.style.width=squareWidth+"px";
    elem.style.height=squareWidth+"px";
    container.appendChild(elem);
    let docFragment=document.createDocumentFragment()
    for(let i=0;i<num*num-1;i++){
        docFragment.appendChild(elem.cloneNode(false));  
    }
    container.appendChild(docFragment);
}
createDivs();

//Adding hover effect
container.addEventListener("mouseover",paint);
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
    document.querySelector(".container").remove();
    let sides=+prompt("enter number of squares per side");
    const container=document.createElement("div");
    container.classList.add("container");
    bod.insertBefore(container,document.querySelector("script"));
    createDivs(sides,container);
    container.addEventListener("mouseover",paint);
})