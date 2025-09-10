const passwordINput=document.getElementById("password");
const lengthSlider=document.getElementById("length");
const lengthDisplay=document.getElementById("length-value");
const uppercaseCheckbox=document.getElementById("uppercase");
const lowercaseCheckbox=document.getElementById("lowercase")
const numbersCheckbox=document.getElementById("numbers");
const symbolsCheckbox=document.getElementById("symbols");
const generateButton=document.getElementById("generate-btn");
const copyButton=document.querySelector(".copy-btn");
const strengthBar=document.querySelector(".strength-bar");
const strengthText=document.querySelector(".strength-container p");
const strengthLabel=document.getElementById("strength-label")

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";



lengthSlider.addEventListener("input",()=>{
    lengthDisplay.textContent=lengthSlider.value;
})
generateButton.addEventListener("click",makePassword);
function makePassword(){
    const length=Number(lengthSlider.value);
    const includeUppercase=uppercaseCheckbox.checked;
    const includeLowercase=lowercaseCheckbox.checked;
    const includeNumbers=numbersCheckbox.checked;
    const inputSymbols=symbolsCheckbox.checked;
    if(!includeUppercase && !includeLowercase && !includeNumbers && !inputSymbols){
        alert("plase select at least one char type");
        return;
    }
    const newPassword=createRandomPassword(length,includeUppercase,includeLowercase,includeNumbers,inputSymbols);
    passwordINput.value=newPassword;
    updateStrengthMeter(newPassword);
}
function updateStrengthMeter(newPassword){
    const passwordLength=newPassword.length;
    const hasUppercase=/[A-Z]/.test(newPassword);
    const hasLowercase=/[a-z]/.test(newPassword);
    const hasNumbers=/[0-9]/.test(newPassword);
    const hasSymbols= /!@#$%^&*()-_=+[]{}|;:,.<>?/.test(password);

    let strengthScore=0;
    //here the .min hget the min value
    //but this will make sure that "at maximum" you would get 40
    strengthScore+=Math.min(passwordLength*2,40);

    if(hasUppercase){
        strengthScore+=15;
    }
    if(hasLowercase){
        strengthScore+=15;
    }
    if(hasNumbers){
        strengthScore+=15;
    }
    if(hasSymbols){
        strengthScore+=15;
    }
    
    //enforce minimum score for every short password
    if(passwordLength<8){
        strengthScore=Math.min(strengthScore,40);
    }

    //ensure the width of the strength bar is valid percentage
    const safeScore=Math.max(5,Math.min(100,strengthScore));
    strengthBar.style.width=safeScore+"%";
    let strengthLabelText="";
    let barColor="";
    if(strengthScore<40){
        //weak passowrd
        barColor="#fc8181";
        strengthLabelText="weak";
    }
    else if(strengthScore<70)
    {
        barColor="#fbd38d";
        strengthLabelText="medium";
    }
    else{
         barColor="#68d391";
        strengthLabelText="strong";
    }
    strengthBar.style.backgroundColor=barColor;
    strengthLabel.textContent=strengthLabelText;
}
function createRandomPassword(length,includeUppercase,
    includeLowercase,includeNumbers,inputSymbols)
{
    let allCharacters="";
    if(includeUppercase){
        allCharacters+=uppercaseLetters;
    }
    if(includeLowercase){
        allCharacters+=lowercaseLetters;
    }
    if(includeNumbers){
        allCharacters+=numberCharacters;
    }
    if(inputSymbols){
        allCharacters+=symbolCharacters;
    }
    let password="";
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allCharacters.length);
        password+=allCharacters[randomIndex];
    }
    return password;
}
copyButton.addEventListener("click",()=>{
    if(!passwordINput.value)
        return;
    navigator.clipboard.writeText(passwordINput.value)
    .then(()=>ShowcopySuccess())
    .catch((err)=>{
        console.log('couldnt copy',err);
    })
})
function ShowcopySuccess(){
    copyButton.classList.remove("bi","bi-copy");
    copyButton.classList.add("bi","bi-check-lg");
    copyButton.atyle.color="green";
}
setTimeout(()=>{
    copyButton.classList.remove("bi","bi-check-lg");
    copyButton.classList.add("bi","bi-copy");
    copyButton.style.color="";
},1500);
window.addEventListener("DOMContentLoaded",makePassword);
