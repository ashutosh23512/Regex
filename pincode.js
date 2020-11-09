const pinRegex = RegExp("^([1-9])(\\S){2}(\\s)?\\S{2}[0-9]$");

function pinCodeTest(pinCode){
    if(pinRegex.test(pinCode))console.log("Valid Pin Code");
    else throw "Pin Code is Invalid";
}

try{
    pinCodeTest("400088");
}catch(e){
    console.error(e);
}

try{
    pinCodeTest("400 088");
}catch(e){
    console.error(e);
}