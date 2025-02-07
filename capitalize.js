function isChar(c) {
    return /^[a-zA-Z]$/.test(c);
}

function capitalize(string){
    let notChars = ""
    for(let i = 0; i < string.length; i++){
        if (isChar(string.charAt(i))){
            return notChars + string.charAt(i).toUpperCase() + string.slice(i +1);
        }else{
            notChars += string.charAt(i);
        }
    }
    return notChars;
}

module.exports = capitalize;