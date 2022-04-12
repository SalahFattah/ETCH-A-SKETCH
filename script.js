const bod=document.querySelector("body");
const container=document.createElement("div");
container.classList.add("container");
bod.insertBefore(container,document.querySelector("script"));

const screenWidth=container.clientWidth;

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
let click=2;
container.addEventListener("click",(e)=>{
container.addEventListener("mouseover",paint);
click--;
if(click==0){
    container.removeEventListener("mouseover",paint);
    click=2;
}
});
function paint(e){
    if(e.target.classList[0]==="square"){
        e.target.style.background=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;    
    }
    console.log(e.buttons);
    
}


//create Button tag
const button=document.createElement("button");
button.style.position="absolute";
button.style.top="0";
button.style.left="0";

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
    container.addEventListener("click",(e)=>{
        container.addEventListener("mouseover",paint);
        click--;
        if(click==0){
            container.removeEventListener("mouseover",paint);
            click=2;
        }
        });
})

//Adding options for the sketch pad
//1.Drawing starts when the user click on the sketchpad and stops when user clicks again
//2. Add color picker
//3. Add random colors button 
//4. Add brush thickness (at first it's opacity is low and with each mouse over it will increase)
//5. add grid slider