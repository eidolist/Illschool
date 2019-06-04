let hpp = 100;
// repeating
let dmg = function(){
    hpp = hpp - 10;
	document.querySelector(".hpp").innerHTML = hpp;
}
// items
document.querySelector(".false").onclick = dmg;
document.querySelector(".false1").onclick = dmg;
document.querySelector(".false2").onclick = dmg;
document.querySelector(".false3").onclick = dmg;
document.querySelector(".false4").onclick = dmg;
document.querySelector(".false5").onclick = dmg;
document.querySelector(".false6").onclick = dmg;
document.querySelector(".false7").onclick = dmg;

let night = function(){
	document.querySelector(".false").style.background = "black";
	document.querySelector(".false1").style.background = "black";
	document.querySelector(".false2").style.background = "black";
	document.querySelector(".false3").style.background = "black";
	document.querySelector(".false4").style.background = "black";
	document.querySelector(".false5").style.background = "black";
	document.querySelector(".false6").style.background = "black";
	document.querySelector(".false7").style.background = "black";
	document.querySelector(".true").style.background = "black";
	document.querySelector(".question").style.opacity = 1;
	alert('timeoutactivated')
  }
  setTimeout(night, 1000);
  
  