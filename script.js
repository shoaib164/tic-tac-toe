let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
    
}


// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 0],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    wins.forEach(e => {
        if ( (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText !== '') {
            // document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won";
            document.getElementsByClassName("info")[0].innerText = boxtexts[e[0]].innerText + " won";
            isGameOver = true;
            // document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px';
            document.getElementsByClassName("imgBox")[0].getElementsByTagName('img')[0].style.width = '200px';
            // document.getElementsByClassName("line")[0].style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // document.getElementsByClassName("line")[0].style.width = "20vw";
        }
    })
}

// let's start with the main game logic
let boxes = document.getElementsByClassName("box");  // ye particular line mujhe ek html collection return krdega...jisko mujhe array mein convert krna padega
Array.from(boxes).forEach(element => {
    // let boxtext = element.querySelector('.boxText');
    let boxtext = element.getElementsByClassName("boxText")[0];
    
    element.addEventListener('click', () => {
        
        music.play();  
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            music.gameOver;
            }
        }
    })
})                                                    


// let's add onclick event listener to the reset button
reset.addEventListener('click', () => {
    // let boxtexts = document.querySelectorAll('.boxText');
    let boxtexts = document.getElementsByClassName("boxText");
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByClassName("imgBox")[0].getElementsByTagName('img')[0].style.width = '0';
    // document.getElementsByClassName("line")[0].style.width = "0vw";
})
