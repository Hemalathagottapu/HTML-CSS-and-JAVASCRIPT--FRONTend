const form=document.getElementById("registration-form");
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirmpassword=document.getElementById("confirmPassword");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const isRequireddValid=checkRequired([username,email,password,confirmpassword]);
    let isFormValid=isRequireddValid;
    if(isRequireddValid){
        const isUsernameValid=checkLength(username,3,15);
        const isEmailValid=checkEmail(email)
        const passwordValid=checkLength(password,6,25)
        const ispasswordsMatch=checkPasswordsMatch(password,confirmpassword)
        isFormValid=isUsernameValid && isEmailValid &&passwordValid &&ispasswordsMatch;
    }
    if(isFormValid){
        alert("registration succeffull");
        form.reset();
        document.querySelectorAll(".form-group").forEach(group=>{
            group.className="form-group";
        })
    }
    
})
function checkPasswordsMatch(input1,input2){
    if(input1.value!==input2.value)
    {
        showError(input2,"password dont match");
        return false;
    }
   return true;

}
function checkEmail(email){
    //email regex that covers most common email formats
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email.value.trim()))
    {
        showSuccess(email);
        return true;
    }
    else
    {
        showError(input,"emal is invalid");
        return false;
    
    }

}
function checkLength(input,min,max)
{
    if(input.value.length<min)
    {
        showError(input,`${formatFieldName(input)} must be atlaest ${min} characters`);
        return false;
    }
    else if(input.value.length>max){
    
        showError(input,`${formatFieldName(input)} must be atmost ${max} charactes`);
        return false;
    }
    else
    {
        showSuccess(input);
        return true;
    }

}
function checkRequired(inputArray){
    let isValid=true;
    inputArray.forEach(input=>{
        //password is requires
        if(input.value.trim()===""){
            showError(input,`${formatFieldName(input)} is required`);
            isValid=false;
        }
        else{
            showSuccess(input)
        }
    })
    return isValid;

}

//format field name with prope capitalization
function formatFieldName(input){
    //input id:username->Username
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function showError(input,msg){
    const fromGroup=input.parentElement;
    fromGroup.className="form-group error";
    const small=fromGroup.querySelector("small");
    small.innerText=msg;
}
function  showSuccess(input){
    const fromGroup=input.parentElement;
    fromGroup.className="form-group success";
}