/*const generateBtn=document.getElementById("generate-btn")
const palatteContainer=document.querySelector(".palatte-container");
generateBtn.addEventListener("click",generatePalatte);
function generatePalatte(){
    const colors=[];
    for(let i=0;i<5;i++)
    {
        colors.push(generateRandomColor())
    }
}
function generateRandomColor(){
    const letters="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++)
    {
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color;
}
generatePalatte()
*/

 const generateBtn = document.getElementById("generate-btn");
const palatteContainer = document.querySelector(".palatte-container");
const copyBtn=document.querySelector(".copy-btn")
palatteContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("copy-btn")){
        const hexValue=e.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexValue)
        .then(()=>showCopySuccess(e.target))
        .catch((err)=>{alert(err)})
    }
    else if(e.target.classList.contains("color")){
         const hexValue=e.target.nextElementSibling.querySelector(".hex-value").textContent;
         navigator.clipboard.writeText(hexValue)
        .then(()=>showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
        .catch((err)=>{alert(err)})
    }
})
generateBtn.addEventListener("click", generatePalatte);
function generatePalatte() {
    const colors=[];
    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor())
    }
    updatePalatteDisplay(colors)
}
function showCopySuccess(element){
   
    element.classList.remove("bi","bi-copy")
    element.classList.add("bi","bi-check-lg")
    element.style.color="#0bf769ff";
    setTimeout(()=>{
        element.classList.remove("bi","bi-check-lg")
        element.classList.add("bi","bi-copy")
        element.style.color=""
    },1500);
    
}

function updatePalatteDisplay(colors){
    
    const colorboxes=document.querySelectorAll(".color-box")
    colorboxes.forEach((box,index)=>{
        console.log(box)
        const color=colors[index]
        const colorDiv=box.querySelector(".color");
        const hexValue=box.querySelector(".hex-value");
        colorDiv.style.backgroundColor=color;
        hexValue.textContent=color;
    })

}

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


generatePalatte()
// Generate palette on button click
