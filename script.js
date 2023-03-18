var winningCombinations = [
    ["A1", "B1", "C1", "D1"], ["B1", "C1", "D1", "E1"], ["C1", "D1", "E1", "F1"], ["D1", "E1", "F1", "G1"],
    ["A2", "B2", "C2", "D2"], ["B2", "C2", "D2", "E2"], ["C2", "D2", "E2", "F2"], ["D2", "E2", "F2", "G2"],
    ["A3", "B3", "C3", "D3"], ["B3", "C3", "D3", "E3"], ["C3", "D3", "E3", "F3"], ["D3", "E3", "F3", "G3"],
    ["A4", "B4", "C4", "D4"], ["B4", "C4", "D4", "E4"], ["C4", "D4", "E4", "F4"], ["D4", "E4", "F4", "G4"],
    ["A5", "B5", "C5", "D5"], ["B5", "C5", "D5", "E5"], ["C5", "D5", "E5", "F5"], ["D5", "E5", "F5", "G5"],
    ["A6", "B6", "C6", "D6"], ["B6", "C6", "D6", "E6"], ["C6", "D6", "E6", "F6"], ["D6", "E6", "F6", "G6"],
    
    ["A6", "A5", "A4", "A3"], ["A5", "A4", "A3", "A2"], ["A4", "A3", "A2", "A1"],
    ["B6", "B5", "B4", "B3"], ["B5", "B4", "B3", "B2"], ["B4", "B3", "B2", "B1"],
    ["C6", "C5", "C4", "C3"], ["C5", "C4", "C3", "C2"], ["C4", "C3", "C2", "C1"],
    ["D6", "D5", "D4", "D3"], ["D5", "D4", "D3", "D2"], ["D4", "D3", "D2", "D1"],
    ["E6", "E5", "E4", "E3"], ["E5", "E4", "E3", "E2"], ["E4", "E3", "E2", "E1"],
    ["F6", "F5", "F4", "F3"], ["F5", "F4", "F3", "F2"], ["F4", "F3", "F2", "F1"],
    ["G6", "G5", "G4", "G3"], ["G5", "G4", "G3", "G2"], ["G4", "G3", "G2", "G1"],

    ["A1", "B2", "C3", "D4"], ["B1", "C2", "D3", "E4"], ["C1", "D2", "E3", "F4"], ["D1", "E2", "F3", "G4"],
    ["A2", "B3", "C4", "D5"], ["B2", "C3", "D4", "E5"], ["C2", "D3", "E4", "F5"], ["D2", "E3", "F4", "G5"],
    ["A3", "B4", "C5", "D6"], ["B3", "C4", "D5", "E6"], ["C3", "D4", "E5", "F6"], ["D3", "E4", "F5", "G6"],

    ["A6", "B5", "C4", "D3"], ["B6", "C5", "D4", "E3"], ["C6", "D5", "E4", "F3"], ["D6", "E5", "F4", "G3"],
    ["A5", "B4", "C3", "D2"], ["B5", "C4", "D3", "E2"], ["C5", "D4", "E3", "F2"], ["D5", "E4", "F3", "G2"],
    ["A4", "B3", "C2", "D1"], ["B4", "C3", "D2", "E1"], ["C4", "D3", "E2", "F1"], ["D4", "E3", "F2", "G1"],
];

var arrColumnA = [];
var arrColumnB = [];
var arrColumnC = [];
var arrColumnD = [];
var arrColumnE = [];
var arrColumnF = [];
var arrColumnG = [];

var p1Columns = [];
var p2Columns = [];

var playerTurn = true;

var aiEnabled = false;

const menu = document.querySelector("#menu");
const board = document.querySelector("#board");
const column1 = document.querySelector("#column1");
const column2 = document.querySelector("#column2");
const column3 = document.querySelector("#column3");
const column4 = document.querySelector("#column4");
const column5 = document.querySelector("#column5");
const column6 = document.querySelector("#column6");
const column7 = document.querySelector("#column7");

const btnPlayWithFriend = document.querySelector("#btnPlayWithFriend");
const btnPlayWithAI = document.querySelector("#btnPlayWithAI");

btnPlayWithFriend.addEventListener('click', function() {
    aiEnabled = false;
    menu.classList.remove("active");
    document.querySelector("#player1Info").innerHTML = "Player 1:";
    document.querySelector("#player2Info").innerHTML = "Player 2:";
    document.querySelector("#playerDisplay").innerHTML = "Player 1's <span class='circle red'></span> turn";
});

btnPlayWithAI.addEventListener('click', function() {
    aiEnabled = true;
    menu.classList.remove("active");
    document.querySelector("#player1Info").innerHTML = "You:";
    document.querySelector("#player2Info").innerHTML = "AI:";
    document.querySelector("#playerDisplay").innerHTML = "Your <span class='circle red'></span> turn";
});

column1.addEventListener('click', function() {
    if(arrColumnA.length <= 5) {
        arrColumnA.push("A"+ arrColumnA.length);
        addColumnToPlayer("A"+ arrColumnA.length);
    }
});

column2.addEventListener('click', function() {
    if(arrColumnB.length <= 5) {
        arrColumnB.push("B"+ arrColumnB.length);
        addColumnToPlayer("B"+ arrColumnB.length);
    }
});

column3.addEventListener('click', function() {
    if(arrColumnC.length <= 5) {
        arrColumnC.push("C"+ arrColumnC.length);
        addColumnToPlayer("C"+ arrColumnC.length);
    }
});

column4.addEventListener('click', function() {
    if(arrColumnD.length <= 5) {
        arrColumnD.push("D"+ arrColumnD.length);
        addColumnToPlayer("D"+ arrColumnD.length);
    }
});

column5.addEventListener('click', function() {
    if(arrColumnE.length <= 5) {
        arrColumnE.push("E"+ arrColumnE.length);
        addColumnToPlayer("E"+ arrColumnE.length);
    }
});

column6.addEventListener('click', function() {
    if(arrColumnF.length <= 5) {
        arrColumnF.push("F"+ arrColumnF.length);
        addColumnToPlayer("F"+ arrColumnF.length);
    }
});

column7.addEventListener('click', function() {
    if(arrColumnG.length <= 5) {
        arrColumnG.push("G"+ arrColumnG.length);
        addColumnToPlayer("G"+ arrColumnG.length);
    }
});

function switchPlayer () {
    playerTurn = !playerTurn;
    if(aiEnabled) {
        document.querySelector("#playerDisplay").innerHTML = (playerTurn ? 
            "Your <span class='circle red'></span>" : 
            "AI's <span class='circle yellow'></span>") + " turn";
    } else {
        document.querySelector("#playerDisplay").innerHTML = (playerTurn ? 
            "Player 1's <span class='circle red'></span>" : 
            "Player 2's <span class='circle yellow'></span>") + " turn";
    }
    
}

function addColumnToPlayer (column) {
    if(playerTurn) {
        p1Columns.push(column)
        document.querySelector("#"+ column).classList.add("red");
        if(aiEnabled) {
            ai();
        }
    } else {
        p2Columns.push(column)
        document.querySelector("#"+ column).classList.add("yellow");
    }

    checkCombination();
    switchPlayer();
    checkIfDraw();
}

function ai() {
    const winningClose = winningCombinations.map(function(win) {
        var pointp1 = 0;
        var pointp2 = 0;
        for(var x=0; x < win.length; x++) {
            if(p1Columns.includes(win[x])) {
                pointp1 += 1;
            }
        }

        for(var x=0; x < win.length; x++) {
            if(p2Columns.includes(win[x])) {
                pointp2 += 1;
            }
        }
        return { win, point: pointp1-pointp2 }
    });

    winningClose.sort((a, b) => b.point - a.point);

    const closest = winningClose[0];
    if(closest.point === 4) {
        checkCombination();
        return false;
    }

    let closestValue = closest.win.filter(cl => !p1Columns.includes(cl));
    closestValue.sort((a, b) => b.localeCompare(a));
    let columnClosest = closestValue[0].toString().substring(0, 1);

    var cols = ["A", "B", "C", "D", "E", "F", "G"];
    var indexer = cols.indexOf(columnClosest);

    for(var x=0; x <= cols.length; x++) {
        if(window["arrColumn"+cols[indexer]].length > 5) {
            indexer += 1;
        }

        if(indexer > 6) {
            indexer = 0;
        }
    }

    setTimeout(() => {
        window["arrColumn"+cols[indexer]].push(cols[indexer]+""+window["arrColumn"+cols[indexer]].length);
        addColumnToPlayer(cols[indexer] + "" + window["arrColumn"+cols[indexer]].length);
    }, 200);
}

function checkIfDraw() {
    if(arrColumnA.length === 6 && arrColumnB.length === 6 && arrColumnC.length === 6 && arrColumnD.length === 6
        && arrColumnE.length === 6 && arrColumnF.length === 6 && arrColumnG.length === 6 ) {
            document.querySelector("#displayWinnerText").innerHTML = "DRAW!";
            document.querySelector("#displayWinner").classList.add("active");
    }
}

function checkCombination() {
    let contains;
    let combination=[];
    winningCombinations.forEach(function(item) {
        contains = item.every(element => {
            if(playerTurn) {
                if(p1Columns.includes(element)) {
                    combination = item;
                }
            } else {
                if(p2Columns.includes(element)) {
                    combination = item;
                }
            }
            return (playerTurn ? p1Columns.includes(element) : p2Columns.includes(element))
        });

        if(contains) {
            combination.forEach(function(item) {
                document.querySelector("#"+item).classList.add("highlight");
            });

            var winner = playerTurn;
            board.classList.add("disabled");
            setTimeout(() => {
                if (aiEnabled) {
                    showWinner((winner ? "You win" : "AI wins"));
                } else {
                    showWinner((winner ? "Player 1 wins" : "Player 2 wins"));
                }
                
            }, 2000);
        }
    });
}

function showWinner(winner) {
    document.querySelector("#displayWinnerText").innerHTML = winner;
    document.querySelector("#displayWinner").classList.add("active");
}