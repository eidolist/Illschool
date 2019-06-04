
// The Plan

// 1 - HMTL fixing bodyimg
// 2 - Img elements
// 3 - AutoAppear and disappear ants
// 4 - Interval Func 'create'
// 5 - ant putting inside 'create'
// 6 - rng
// 7 - coords rng
// 8 - InnerHTML
// 9 - Interval + 1 bug
// 10 - pointsys onclick return
// 11 - LoseAlert Timer

// html elemnts
let resetbtn = document.querySelector('.reset')
resetbtn.onclick = function(){
    document.location.reload();
}

let hmdbtn = document.querySelector('.hmd')


// funcs
let antscount = 0;
let pts = 0;
let body = document.querySelector('.main');
let timec = document.querySelector('.timec')

let random = function(arg){
    let rand = Math.random()* arg //случайное число до 5
    let round = Math.round(rand) //округлить число 
    return round;
}

let interv= function(){
    let newImg = document.createElement('img');
    let ants = document.querySelector('.antcounter');
    let ptsscount = document.querySelector('.ptscounter');
    newImg.src = "ant.png";
    newImg.className = "elem"
    newImg.style.height = "50px";
    newImg.style.width = "50px";
    newImg.style.position = "absolute";
    newImg.style.marginLeft = random(1400) + "px";
    newImg.style.marginTop = random(600) + "px";
    document.body.appendChild(newImg);
    antscount++;
    ants.innerHTML = antscount
    let elem = document.querySelectorAll('elem')
    newImg.onclick = function(){
        pts++;
        antscount--;
        ptsscount.innerHTML = pts;
        ants.innerHTML = antscount;
        newImg.remove();
        
    }   
}
let time = 10000;

let interv1 = function(){
    let newImg1 = document.createElement('img');
    newImg1.src = "apple.png";
    newImg1.className = "apples"
    newImg1.style.height = "50px";
    newImg1.style.width = "50px";
    newImg1.style.position = "absolute";
    newImg1.style.marginLeft = random(1400) + "px";
    newImg1.style.marginTop = random(600) + "px";
    document.body.appendChild(newImg1);
    newImg1.onclick = function(){
        time = time + 5000;
        timec.innerHTML = time;
        newImg1.remove();
    }   
}
// resetbutton

let alertstatus = 0;
let spawn = setInterval(interv,500)
let spawnApples = setInterval(interv1,1500)

let rDeath = function(){
    if (time <= 0){
        let alertstatus = 1;
        resetbtn.style.display = 'block'
        alert('you lost')
        clearInterval(fail)
        clearInterval(spawn)
        clearInterval(spawnApples)
        clearInterval(flow)
        clearInterval(hmdtime)   
    }   
}

let fail = setInterval(rDeath, 1)
let timedebug = function(){
    time = time - 5;
    timec.innerHTML = time;
}
let flow = setInterval(timedebug, 1)
//hardmode
let hmdflow = function(){
    time = time - 15;
    timec.innerHTML = time;
}
hmdbtn.onclick = function(){
    clearInterval(flow)
    let hmdtime = setInterval(hmdflow)
    
}
