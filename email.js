const emailRegex = RegExp("^(abc)([.-_+]){0,1}[a-zA-Z0-9]*(@bridgelabz.co).*$");

function emailTest(email){
    if(emailRegex.test(email))console.log("Valid Email");
    else throw "Email Id is Invalid";
}

try{
    emailTest("abc.xyz@bridgelabz.co");
}catch(e){
    console.error(e);
}

try{
    emailTest("abc#xyz@bridgelabz.co");
}catch(e){
    console.error(e);
}