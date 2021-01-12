// Graham Carkner
// Jan 2021

console.log("test")

var words = [
    "Student.",
    "Designer.",
    "Developer.",
];
i = 0;

function loop() {
    document.getElementById("titlebottom").style.opacity = 1;
    document.getElementById("titlebottom").innerHTML = words[i];
    setTimeout(function(){
        document.getElementById("titlebottom").style.opacity = 0;
    }, 1500);
    if(i == 2) {
       i = 0; 
    } else {
        i++;
    }
};

setInterval("loop()", 2000);