let balls = document.querySelectorAll(".ball")
let score = 0;
let num = 0;
// balls
for(let num = 0; num<10; num = num + 1){
	balls[num].onclick = function(){
        score = score + 1;
        balls[num].style.opacity = "0";
        document.querySelector(".score").innerHTML = score;
    }
}

//shaderpacks
for(let num = 0; num<10; num = num + 1){
	balls[num].style.transition = "1s";
}
//time
let time = function() {
    for(let num = 0; num<10; num = num + 1){
        balls[num].style.display="none";
    }
}
setTimeout(time, 5000);