
// globals
let money = 50
document.querySelector(".white").onclick = function(){
    alert('1')
}


// classes
let mony = document.querySelectorAll(".green")
let dead = document.querySelectorAll(".red")
let lessmony = document.querySelectorAll(".yellow")
let question = document.querySelectorAll(".white")


// fuctions
document.querySelector(".bones").onclick = function(){
    let rand = Math.random() * 6;
    let round = Math.round(rand);
    alert(round);
}



for(let i = 0; i<18; i++){
	mony[i].onclick = function(){
        money = money + 100;
        document.querySelector(".visual").innerHTML = money;
        mony[i].style.backgroundImage = "url(game_player.png)"
        mony[i].style.backgroundSize = "100% 100%"
       
        let destroy = function(){
            mony[i].style.backgroundImage = "none"
        }
        setTimeout(destroy, 1500)
    }
    
}

for(let i = 0; i<17; i++){
	dead[i].onclick = function(){
        money = money - 100;
        document.querySelector(".visual").innerHTML = money;
        dead[i].style.backgroundImage = "url(game_player.png)"
        dead[i].style.backgroundSize = "100% 100%"
        let destroy = function(){
            dead[i].style.backgroundImage = "none"
        }
        setTimeout(destroy, 1500)
    }
}

for(let i = 0; i<7; i++){
	lessmony[i].onclick = function(){
        money = money + 10;
        document.querySelector(".visual").innerHTML = money;
        lessmony[i].style.backgroundImage = "url(game_player.png)"
        lessmony[i].style.backgroundSize = "100% 100%"
        let destroy = function(){
            lessmony[i].style.backgroundImage = "none"
        }
        setTimeout(destroy, 1500)
    }
}
// checks
let checkForMoney = function(){
    if (  money >= 0  ) {
    } 
    
    else {
        alert('you lost')
        document.location.reload()
    }
}

let checkForWin = function(){
    if ( money >= 500) {
        alert('you won')
        document.location.reload()
    }
}



setInterval(checkForMoney, 2500)
setInterval(checkForWin, 2500)





// plan

// paint the divs green yellow red
// name the div classes
// find the values docselector.all  3 types
// cycle 3 types inside of it (onclick)
// make a pawn spawn every time there is a click, despawning 
// add or subtract the money amount (+10, -100, +100)
// innerHTML money
// making a winning condition
