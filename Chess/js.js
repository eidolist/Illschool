// the ultimate plan

// html webpart (complete)
// putting all elements into their own respective arrays (complete)
// Placement of pawns via createElement (complete)
// moving pawns
// making pawns stop moving after hitting the borders
// eating pawns system + points
// pawn turning into an uberpawn system
// lose/win system
// design overhaul
// ???


let rows = document.querySelectorAll(".rows")
let plane = document.querySelectorAll('.plane')
let white = document.querySelectorAll('.white')
let black = document.querySelectorAll('.black')

// Pawn spawn
    for(let i = 0; i<64; i++){
        // white pawns
        let pawnA = document.createElement("span")
        pawnA.classList.add('pawnA')
        pawnA.innerHTML = "A"
        pawnA.style.color = "red"
        plane[i].appendChild(pawnA)

        // black pawns
        let pawnB = document.createElement("span")
        pawnB.classList.add('pawnB')
        pawnB.innerHTML = "B"
        pawnB.style.color = "blue"
        plane[i].appendChild(pawnB)


    }
    pawnA = document.querySelectorAll('.pawnA')
    pawnB = document.querySelectorAll('.pawnB')
        // pawnA hide
        for (let i = 0; i<64; i++){
            pawnA[i].classList.add('text-dark')
            if (i>24){
                pawnA[i].style.opacity = "0"
            }
            
        }
        //pawnB hide
        for (let i = 0; i<64; i++){
            pawnB[i].style.opacity = "0"
            if (i>39){
                pawnB[i].style.opacity = "1"
                pawnB[i].style.color = 'white'
            }
        }

//Pawn Movement
let selectedState = false;

    //Selected?
        //Pawns A
        for (let i=0; i<64; i++){
            pawnA[i].onclick = function(){
                pawnA[i].classList.add('selected')
                selectedState = true;
            }
        }

        // Pawns B
        for (let i=0; i<64; i++){
            pawnB[i].onclick = function(){
                pawnB[i].classList.add('selected')
                selectedState = true;
            }
        }
    // Make them move
        //Selected elements
        let selected = document.querySelectorAll('.selected')
        // PawnsA
        for (let i=0; i<64; i++){
            if(selectedState == true){

            }
        }
