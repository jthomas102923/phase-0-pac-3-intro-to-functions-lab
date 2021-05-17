function shout(string){
    return string.toUpperCase();
}

console.log(shout("hello"));

function logShout(string){
    console.log(string.toUpperCase());
}

logShout("Muffin");

function whisper(string){
    return string.toLowerCase();
}

console.log(whisper("hello"));

function logWhisper(string){
    console.log(string.toLowerCase());
}

logWhisper("muffin");

function sayHiToGrandma(string){
    if(string === "I love you, Grandma."){
        return ("I love you, too.");
    } else if (string.toUpperCase() === string){
        return ("YES INDEED!");
    } else if (string.toLowerCase() === string){
        return ("I can't hear you!");
    }
}

console.log(sayHiToGrandma("hello"));