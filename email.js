const emailRegex = RegExp("^abc[.a-zA-Z0-9]*(@bridgelabz).*$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email");
    else throw "Email Id is Invalid";
}

try{
    emailTest("abc@bridgelabz.com");
}catch(e){
    console.error(e);
}

try{
    emailTest("abc@gmail.com");
}catch(e){
    console.error(e);
}