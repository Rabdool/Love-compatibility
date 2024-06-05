function isLeap(year) {
    if(year % 4 === 0) {
        if (year % 100) {
            if (year % 400) {
                return "Leap year!";
            }
            else{
                return "Not a Leap year.";
            }
        }
        else{
            return "Leap year!";
        }
    }
    else {
        return "Not a Leap year.";
    }   
}

alert(isLeap(2000));












/* let yourName = prompt("What is your name?");
let theirName = prompt("What is their name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);



if(loveScore < 30){
    alert("The Love Score for " + yourName + " and " + 
theirName + " is " + loveScore + "% - You should rethink this relationship");
}

else if(loveScore > 30 && loveScore <= 50){
    alert("The Love Score for " + yourName + " and " + 
theirName + " is " + loveScore + "% - Put more effort to grow the relationship");
}

else if(loveScore > 50 && loveScore <= 70){
    alert("Wow!!! this is a serious love between " + yourName + " and " + 
theirName  + " Your love is " + loveScore + "%");
}

else {
    alert("What a magnificent Love between " + yourName + " and " + 
theirName  + " Your love is " + loveScore + "%, this love will last for ever");
} */