const emailRegex = RegExp("^abc[.a-zA-Z0-9]*(@bridgelabz.co).*$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email");
    else throw "Email Id is Invalid";
}

try{
    emailTest("abc@bridgelabz.co");
}catch(e){
    console.error(e);
}

try{
    emailTest("abc@bridgelabz.in");
}catch(e){
    console.error(e);
}