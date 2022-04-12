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
container.addEventListener("click",()=>{
    container.addEventListener("mouseover",paint);
    click--;
    if(click==0){
        container.removeEventListener("mouseover",paint);
        click=2;
    }
});



//new one
function paint(e){
    if(e.target.classList[0]==="square"){
        e.target.style.background=document.querySelector("input").value;    
    }
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
//Add color picker
const colorPick=document.createElement("input");
colorPick.type="color";

colorPick.addEventListener("change",e=>{
    let click=2;
    const container=document.querySelector(".container");
    container.addEventListener("click",()=>{
        console.log("color picker",click);
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

bod.insertBefore(colorPick,container);


//hex to RGB
// function hexToRGB(hex){
//     let r="0x"+hex.slice(1,3)+",";
//     let g="0x"+hex.slice(3,5)+",";
//     let b="0x"+hex.slice(5);
//     let rgb=r.concat(g,b).split(",").map(i=>+i);

//     return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
// }


const randomColor=document.createElement("button");
randomColor.classList.add("random");
console.log(randomColor)
randomColor.textContent="Random Colors"
bod.insertBefore(randomColor,container);

function painto(e){
    if(e.target.classList[0]==="square"){
        e.target.style.background=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;    
    }
    
}

randomColor.addEventListener("click",(e)=>{
    let click=2
    const container=document.querySelector(".container");
    container.addEventListener("click",()=>{
        console.log("random",click)
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



//Adding options for the sketch pad
//1.Drawing starts when the user click on the sketchpad and stops when user clicks again
//2. Add color picker
//3. Add random colors button 
//4. Add brush thickness (at first it's opacity is low and with each mouse over it will increase)
//5. add grid slider



