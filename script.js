const bod=document.querySelector("body");
const container=document.createElement("div");
container.classList.add("container");
let selections=document.createElement("div");
selections.classList.add("selections")

bod.insertBefore(container,document.querySelector("script"));
bod.insertBefore(selections,container);

let title=document.createElement("h1");
title.textContent="Etch a Sketch"
bod.appendChild(title);

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

//Default action
let click=2;
container.addEventListener("click",()=>{
    container.addEventListener("mouseover",paint);
    click--;
    if(click==0){
        container.removeEventListener("mouseover",paint);
        click=2;
    }
});



//new one
//default action
function paint(e){
    if(e.target.classList[0]==="square"){
        e.target.style.background=document.querySelector("input").value;    
    }
}


//create Button tag
const button=document.createElement("button");
// button.style.position="absolute";
// button.style.top="0";
// button.style.left="0";

button.textContent="Clear Screen";
selections.appendChild(button);

//clear screen on click
button.addEventListener("click",e=>{
    let click=2;
    let length=Math.sqrt(document.querySelector(".container").children.length);
    document.querySelector(".container").remove();
    const container=document.createElement("div");
    container.classList.add("container");
    bod.insertBefore(container,document.querySelector("script"));
    createDivs(length,container);
    container.addEventListener("click",(e)=>{
        container.addEventListener("mouseover",paint);
        click--;
        if(click==0){
            container.removeEventListener("mouseover",paint);
            click=2;
        }
        });
})
//Add color picker
const colorPick=document.createElement("input");
colorPick.type="color";

colorPick.addEventListener("change",e=>{
    let click=2;
    const container=document.querySelector(".container");
    container.addEventListener("click",()=>{
        container.removeEventListener("mouseover",painto);
        container.addEventListener("mouseover",paint);
        click--;
        if(click==0){
            container.removeEventListener("mouseover",paint);
            click=2;
        }    
});
e.stopPropagation();
})

selections.appendChild(colorPick);



const randomColor=document.createElement("button");
randomColor.classList.add("random");
randomColor.textContent="Random Colors"
selections.appendChild(randomColor);

function painto(e){
    if(e.target.classList[0]==="square"){
        e.target.style.background=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;    
    }
    
}

randomColor.addEventListener("click",(e)=>{
    let click=2
    const container=document.querySelector(".container");
    container.addEventListener("click",()=>{
        container.removeEventListener("mouseover",paint);
        container.addEventListener("mouseover",painto);
        click--;
        if(click==0){
            container.removeEventListener("mouseover",painto);
            click=2;
        }    
});
e.stopPropagation();
});



const range=document.createElement("input");
range.type="range";
range.min="16";
range.max="64";
range.step="2";
range.value="16";
selections.appendChild(range);
range.addEventListener("change",e=>{
    document.querySelector(".container").remove();
    let sides=e.target.value;
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



