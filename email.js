const emailRegex = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email");
    else throw "Email Id is Invalid";
}

try{
    emailTest("arijit@yahoo.co.in");
}catch(e){
    console.error(e);
}

try{
    emailTest("abc@bridgelabz.co.in.in");
}catch(e){
    console.error(e);
}