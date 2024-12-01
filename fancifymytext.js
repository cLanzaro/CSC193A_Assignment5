function makeBigger(){
    document.getElementById("feed").style.fontSize = "24pt";
}

function fancify(){
    let feed = document.getElementById("feed");
    feed.style.fontWeight = "bold";
    feed.style.color = "blue";
    feed.style.textDecoration = "underline";
    document.getElementById("boringButton").checked = false;
}

function defancify(){
    let feed = document.getElementById("feed");
    feed.style.fontWeight = "normal";
    feed.style.color = "black";
    feed.style.textDecoration = "none";
    document.getElementById("fancyButton").checked = false;
}

function moo(){
    let feed = document.getElementById("feed");
    let text = feed.value.toUpperCase();
    text = text.split('.').join('-Moo.');
    feed.value = text;
}

