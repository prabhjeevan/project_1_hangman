
// VARIABLES & ARRAYS
var game = [music, avengers, players];
var music = ['DRAKE', 'WAYNE', 'MILEY', 'GRANDE', 'KATY', 'MICHAEL', 'QUAVO', 'MINAJ', 'CARBIB', 'PRINCE', 'LOGIC', 'ELVIS']
var avengers = ['SPIDERMAN', 'THANOS', 'HULK', 'THOR', 'WANDA', 'STARK', 'LOKI', 'JARVIS', 'STAN', 'SHURI', 'WASP', 'STRANGE', 'FALCON', 'ULTRON']
var players = ['LAKERS', 'LEBRON', 'BRYANT', 'JORDAN', 'JAMES', 'KOBE', 'KAWHI', 'PAUL', 'DAVIS', 'JOKIC', 'OBERT', 'BUTLER', 'LOWRY']

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']

let answer = '';
let guesss=[];
let position = document.querySelectorAll('.blank')
let guess = document.getElementById('rightword');
let btndiv = document.getElementById('keybtns');
let winModal = document.querySelector('.winmodal');
let loseModal = document.querySelector('.losemodal')
let allkeys = document.getElementById('keybtns')
let notes = document.getElementById('notes')

//ASSIGNING BUTTONS VARIABLES
let buttonA = document.getElementById("A")
let buttonB = document.getElementById("B")
let buttonC = document.getElementById("C")
let buttonD = document.getElementById("D")
let buttonE = document.getElementById("E")
let buttonF = document.getElementById("F")
let buttonG = document.getElementById("G")
let buttonH = document.getElementById("H")
let buttonI = document.getElementById("I")
let buttonJ = document.getElementById("J")
let buttonK = document.getElementById("K")
let buttonL = document.getElementById("L")
let buttonM = document.getElementById("M")
let buttonN = document.getElementById("N")
let buttonO = document.getElementById("O")
let buttonP = document.getElementById("P")
let buttonQ = document.getElementById("Q")
let buttonR = document.getElementById("R")
let buttonS = document.getElementById("S")
let buttonT = document.getElementById("T")
let buttonU = document.getElementById("U")
let buttonV = document.getElementById("V")
let buttonW = document.getElementById("W")
let buttonX = document.getElementById("X")
let buttonY = document.getElementById("Y")
let buttonZ = document.getElementById("Z")
let buttonReset = document.getElementById("reset")
let buttonPlayAgain = document.querySelector('.playagain')
let buttonPlayAgain2 = document.querySelector('.playagain2')
let buttonbasketball = document.getElementById('basketball')
let buttonrandom = document.getElementById('random')
let buttonmusicbtn = document.getElementById('musicbtn')
let buttonavengersbtn = document.getElementById('avengersbtn')
// ADDING EVENT LISTENERS


buttonA.addEventListener('click', guessed);
buttonB.addEventListener('click', guessed);
buttonC.addEventListener('click', guessed);
buttonD.addEventListener('click', guessed);
buttonE.addEventListener('click', guessed);
buttonF.addEventListener('click', guessed);
buttonG.addEventListener('click', guessed);
buttonH.addEventListener('click', guessed);
buttonI.addEventListener('click', guessed);
buttonJ.addEventListener('click', guessed);
buttonK.addEventListener('click', guessed);
buttonL.addEventListener('click', guessed);
buttonM.addEventListener('click', guessed);
buttonN.addEventListener('click', guessed);
buttonO.addEventListener('click', guessed);
buttonP.addEventListener('click', guessed);
buttonQ.addEventListener('click', guessed);
buttonR.addEventListener('click', guessed);
buttonS.addEventListener('click', guessed);
buttonT.addEventListener('click', guessed);
buttonU.addEventListener('click', guessed);
buttonV.addEventListener('click', guessed);
buttonW.addEventListener('click', guessed);
buttonX.addEventListener('click', guessed);
buttonY.addEventListener('click', guessed);
buttonZ.addEventListener('click', guessed);
buttonReset.addEventListener('click', reset);
buttonPlayAgain.addEventListener('click', reset);
buttonPlayAgain2.addEventListener('click', reset);
buttonbasketball.addEventListener('click', basketball);
buttonrandom.addEventListener('click', randomcategory);
buttonmusicbtn.addEventListener('click', musicBtnClicked);
buttonavengersbtn.addEventListener('click', avengersBtnClicked);

// CALLING STARTING FUCNTIONS

hidekeys();


// FUNCTIONS 

// this function will hide keys that are not needed during the game
function hidekeys() {
    allkeys.classList.add('buttonhide')
    notes.classList.add('buttonhide')
}

// this function will choose a number to help pick an array later on
function randomArray() {
    let arraychooser = Math.floor(Math.random()*game.length)
    randomWord(arraychooser)
    console.log(arraychooser);
}

// this function will now choose an array using number from randomArray function
function randomWord(arraychooser) {
    if (arraychooser == 0) {
        answer = music[Math.floor(Math.random()*music.length)];
        category(arraychooser);
    } else if (arraychooser == 1) {
        answer = avengers[Math.floor(Math.random()*avengers.length)];
        category(arraychooser);
    } else if (arraychooser == 2) {
        answer = players[Math.floor(Math.random()*players.length)];
        category(arraychooser);
    }
};

// this function will change the styling depending on what array was chosen to help the player know what category they are guessing
function category(arraychooser) {
    if (arraychooser == 0) {
        document.getElementById('heading').innerHTML = 'CATERGORY: MUSIC'
        document.getElementById('subheading').innerHTML = 'FIRST OR LAST NAME OF ARTIST'
        document.body.style.backgroundImage = 'url(https://i.imgur.com/4Mh4fFF.jpg)'
        showBlank(answer);
        // document.getElementById('keybtns').style.backgroundColor = 'rgba(255,255,255,0.25'
        // document.getElementById('keybtns').style.backgroundSize = 'width: 100px; height 200px;'
    } else if (arraychooser == 1) {
        document.getElementById('heading').innerHTML = 'CATERGORY: MARVEL AVENGERS'
        document.getElementById('subheading').innerHTML = 'FIRST NAME OF A MARVEL CHARACTER'
        document.body.style.backgroundImage = 'url(https://i.imgur.com/wYOizeT.jpg)'
        showBlank(answer);

    } else if ( arraychooser == 2) {
        document.getElementById('heading').innerHTML = 'CATERGORY: BASKETBALL'
        document.getElementById('subheading').innerHTML = 'FIRST OR LAST NAME OF PLAYER OR TEAM'
        document.body.style.backgroundImage = 'url(https://i.imgur.com/SQaVqhn.jpg)'
        showBlank(answer);
    }

}

// these functions will be used if the player clicks on one of the categories 

function basketball() {
    
    let arraychooser = 2
    randomWord(arraychooser);
    allkeys.classList.remove('buttonhide')
    notes.classList.remove('buttonhide')
    buttonbasketball.classList.add('buttonhide');
    buttonmusicbtn.classList.add('buttonhide');
    buttonavengersbtn.classList.add('buttonhide');
    buttonrandom.classList.add('buttonhide');
    document.getElementById('hangmanimg').src = "https://i.imgur.com/J58G80Y.png"
    }

function musicBtnClicked() {
        let arraychooser = 0
        randomWord(arraychooser);
        allkeys.classList.remove('buttonhide')
        notes.classList.remove('buttonhide')
        buttonmusicbtn.classList.add('buttonhide');
        buttonbasketball.classList.add('buttonhide');
        buttonavengersbtn.classList.add('buttonhide');
        buttonrandom.classList.add('buttonhide');
        document.getElementById('hangmanimg').src = "https://i.imgur.com/J58G80Y.png"
    }

    function avengersBtnClicked() {
        let arraychooser = 1
        randomWord(arraychooser);
        allkeys.classList.remove('buttonhide')
        notes.classList.remove('buttonhide')
        buttonavengersbtn.classList.add('buttonhide');
        buttonrandom.classList.add('buttonhide');
        buttonmusicbtn.classList.add('buttonhide');
        buttonbasketball.classList.add('buttonhide');
        document.getElementById('hangmanimg').src = "https://i.imgur.com/J58G80Y.png"
    }

    function randomcategory(){
        randomArray();
        allkeys.classList.remove('buttonhide')
        notes.classList.remove('buttonhide')
        buttonrandom.classList.add('buttonhide');
        buttonmusicbtn.classList.add('buttonhide');
        buttonbasketball.classList.add('buttonhide');
        buttonavengersbtn.classList.add('buttonhide');
        document.getElementById('hangmanimg').src = "https://i.imgur.com/J58G80Y.png"
    }


// this function will be looking for id of button and matching it with value in the random word that is picked 
// and if the id and value match, this function will replace the dash on the screen with the letter at the right index
function guessed(event) {
    let value = event.target.id;
            if (value === 'A') {
                if (answer.includes('A')) {
                    let replacementIdx = answer.indexOf('A');
                   
                    replaceTheDash(replacementIdx, 'A');
                } else {
                    wrong();
                }
            checkWin();
            hideBtn(buttonA);
            } if (value === 'B') {
                if (answer.includes('B')) {
                    let replacementIdx = answer.indexOf('B');
                    
                    replaceTheDash(replacementIdx, 'B');
                } else {
                    wrong();
                }
            checkWin();
            hideBtn(buttonB);
            }
            if (value === 'C') {
                if (answer.includes('C')) {
                    let replacementIdx = answer.indexOf('C');
                    
                    replaceTheDash(replacementIdx, 'C');
                } else {
                    wrong();
                }
            checkWin();
            hideBtn(buttonC);
            }if (value === 'D') {
                if (answer.includes('D')) {
                    let replacementIdx = answer.indexOf('D');
                    
                    replaceTheDash(replacementIdx, 'D');
                    
                } else {
                    wrong();
                }
            checkWin();
            hideBtn(buttonD);
            }if (value === 'E') {
                if (answer.includes('E')) {
                    let replacementIdx = answer.indexOf('E');
                    
                    replaceTheDash(replacementIdx, 'E');
                  
                } else {
                    wrong();
                }
            checkWin();
            hideBtn(buttonE);
            }if (value === 'F') {
                if (answer.includes('F')) {
                    let replacementIdx = answer.indexOf('F');
                    
                    replaceTheDash(replacementIdx, 'F');
                  
                } else {
                    wrong();
                }
             checkWin();
            hideBtn(buttonF);
            }if (value === 'G') {
                if (answer.includes('G')) {
                    let replacementIdx = answer.indexOf('G');
                 
                    replaceTheDash(replacementIdx, 'G');
                   
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonG);
            } if (value === 'H') {
                if (answer.includes('H')) {
                    let replacementIdx = answer.indexOf('H');
                    
                    replaceTheDash(replacementIdx, 'H');
                    
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonH);
            } if (value === 'I') {
                if (answer.includes('I')) {
                    let replacementIdx = answer.indexOf('I');
                    
                    replaceTheDash(replacementIdx, 'I');
                   
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonI);
            } if (value === 'J') {
                if (answer.includes('J')) {
                    let replacementIdx = answer.indexOf('J');
                    
                    replaceTheDash(replacementIdx, 'J');
                    
                } else {
                    wrong();
                }
            checkWin();
            hideBtn(buttonJ);
            } if (value === 'K') {
                if (answer.includes('K')) {
                    let replacementIdx = answer.indexOf('K');
                    
                    replaceTheDash(replacementIdx, 'K');
                    
                } else {
                    wrong();
                }
            checkWin();
            hideBtn(buttonK);
            } if (value === 'L') {
                if (answer.includes('L')) {
                    let replacementIdx = answer.indexOf('L');
                    
                    replaceTheDash(replacementIdx, 'L');
                    
                } else {
                    wrong();
                }
            checkWin();
            hideBtn(buttonL);
            }if (value === 'M') {
                if (answer.includes('M')) {
                    let replacementIdx = answer.indexOf('M');
                   
                    replaceTheDash(replacementIdx, 'M');
                  
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonM);
            }if (value === 'N') {
                if (answer.includes('N')) {
                    let replacementIdx = answer.indexOf('N');
                    
                    replaceTheDash(replacementIdx, 'N');
                    
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonN);
            }if (value === 'O') {
                if (answer.includes('O')) {
                    let replacementIdx = answer.indexOf('O');
                   
                    replaceTheDash(replacementIdx, 'O');
                   
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonO);
            }if (value === 'P') {
                if (answer.includes('P')) {
                    let replacementIdx = answer.indexOf('P');
                    
                    replaceTheDash(replacementIdx, 'P');
                    
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonP);
            }if (value === 'Q') {
                if (answer.includes('Q')) {
                    let replacementIdx = answer.indexOf('Q');
                    
                    replaceTheDash(replacementIdx, 'Q');
                   
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonQ);
            }if (value === 'R') {
                if (answer.includes('R')) {
                    let replacementIdx = answer.indexOf('R');
                    replaceTheDash(replacementIdx, 'R');
                    
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonR);
            }if (value === 'S') {
                if (answer.includes('S')) {
                    let replacementIdx = answer.indexOf('S');
                   
                    replaceTheDash(replacementIdx, 'S');
                    
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonS);
            } if (value === 'T') {
                if (answer.includes('T')) {
                    let replacementIdx = answer.indexOf('T');
                    
                    replaceTheDash(replacementIdx, 'T');
                    
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonT);
            }if (value === 'U') {
                if (answer.includes('U')) {
                    let replacementIdx = answer.indexOf('U');
                   
                    replaceTheDash(replacementIdx, 'U');
                   
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonU);
            }if (value === 'V') {
                if (answer.includes('V')) {
                    let replacementIdx = answer.indexOf('V');
                    
                    replaceTheDash(replacementIdx, 'V');
                    
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonV);
            }if (value === 'W') {
                if (answer.includes('W')) {
                    let replacementIdx = answer.indexOf('W');
                    
                    replaceTheDash(replacementIdx, 'W');
                    
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonW);
            }if (value === 'X') {
                if (answer.includes('X')) {
                    let replacementIdx = answer.indexOf('X');
                   
                    replaceTheDash(replacementIdx, 'X');
                  
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonX);
            }if (value === 'Y') {
                if (answer.includes('Y')) {
                    let replacementIdx = answer.indexOf('Y'); 
                    replaceTheDash(replacementIdx, 'Y');
                  
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonY);
            }if (value === 'Z') {
                if (answer.includes('Z')) {
                    let replacementIdx = answer.indexOf('Z');
                    
                    replaceTheDash(replacementIdx, 'Z');
                   
                } else {
                    wrong();
                }
                checkWin();
            hideBtn(buttonZ);
            }
            
}; 
    
// this function shows the number of dashes thats equal to length of the random word picked on the screen with spaces in between
function showBlank(answer) {
    let i = 0;
    while (i < answer.length) {
        let blank = document.createElement('span')
        blank.id = 'i'
        blank.classList.add('blank')
        let blankposition = document.getElementById('guesshere')
        blankposition.appendChild(blank)
        blank.innerHTML = "_"
        let space = document.createElement("span")
        blankposition.appendChild(space)
        space.innerHTML = " "
        i = i + 1;
    }
};

// this fucnction matches the index of the letters and replaces the dash on the screen with the letter 
// it takes the help of an array we had made in the beginning
function replaceTheDash(replacementIdx, correct) {
    let position = document.querySelectorAll('.blank')
    position[replacementIdx].innerHTML = correct;
    guesss.splice(replacementIdx, 0, correct);
};

// this function is hides the letter button after it has been clicked so player knows they have already used it
function hideBtn(btnToHide) {
    btnToHide.style.visibility =  "hidden"
};

// this function checks if the player has guessed everything correctly with lives remaining after every letter picked
// it checks by matching the length of the random word and the array we put the letters in
function checkWin() {
    if (guesss.length == answer.length) {
        winModal.classList.add('winmodalshow');
            }else {
        return
    }
};

// this function adds 1 to the total counter everytime a wrong letter is clicked and calls to change the image
let sum = 0;
let counter = 0
function wrong() {
    counter++;
    console.log(counter)
    displayimg(counter);
};

// this function changes the image of the hangman on the screen depending on how many lives are left
function displayimg(counter) {
    let wrongcounter = document.getElementById('wrongcounter')
    let remaininglives = document.getElementById('wrongclicks')
    if (counter == 0) {
        document.getElementById('hangmanimg').src = "https://i.imgur.com/J58G80Y.png"
        wrongcounter.innerHTML = '6'
    } else if (counter == 1) {
    document.getElementById('hangmanimg').src = "https://i.imgur.com/NqqABIy.png"
    wrongcounter.innerHTML = '5'
    remaininglives.style.color = "rgba(255, 255, 255 , 0.6)"
} else if (counter == 2) {
    document.getElementById('hangmanimg').src = "https://i.imgur.com/EGN6vox.png"
    wrongcounter.innerHTML = '4'
    remaininglives.style.color = "rgba(255, 0, 0 , 0.4)"
} else if (counter == 3) {
    document.getElementById('hangmanimg').src = "https://i.imgur.com/rB6dk4q.png"
    wrongcounter.innerHTML = '3'
    remaininglives.style.color = "rgba(255, 0, 0 , 0.6)"

} else if (counter == 4) {
    document.getElementById('hangmanimg').src = "https://i.imgur.com/y1CR4yq.png"
    wrongcounter.innerHTML = '2'
    remaininglives.style.color = "rgba(255, 0, 0 , 0.8)"
} else if (counter == 5) {
    document.getElementById('hangmanimg').src = "https://i.imgur.com/8wbTMjq.png"
    wrongcounter.innerHTML = '1'
    remaininglives.style.color = "rgba(255, 0, 0 , 1)"
} else {
    document.getElementById('hangmanimg').src = "https://i.imgur.com/aEqmobs.png"
    wrongcounter.innerHTML = '0'
    remaininglives.style.color = "red"
    setTimeout(lostgame,700); 
    }
} 

// this function displays a pop up message if the player lost the game
function lostgame() {
    loseModal.classList.add('losemodalshow');
    document.getElementById('answerwas').innerHTML = answer
}

// this function is for the reset button, which reloads the page and resets everything when clicked
    function reset(event) {
        location.reload();
    }

