// Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.

// There once was a wise servant who saved the life of a prince. 
// The king promised to pay whatever the servant could dream up. 
// Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. 
// One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
// There are 64 squares on a chessboard.

// Write code that shows:
// how many grains were on each square, and
// the total number of grains

const chessboard = () => {
    let numberOfSquere = 64;
    let numberOfGrains = "";
    let grainOnEachSquere = "0";
    let totalGrains = 0;

    for(let i= 1; i<=numberOfSquere; i++) {
        grainOnEachSquere = Math.pow(2, i);
        console.log("numberOfGrainsInSquere" + " " + i + " : " + grainOnEachSquere + "\n");
        totalGrains += grainOnEachSquere;
    }
    console.log("Total Grains in 64 squeres: " + totalGrains);
}
chessboard();

// class  Chestboard {
//     constructor(NumberOfSquere) {
//         this.NumberOfSquere= NumberOfSquere;
//     }

//     grains() {
//         let GrainOnEachSquere = "0";
//         let numberOfGrains= {};
//         for(let i = 1; i <= this.NumberOfSquere; i++){
//         numberOfGrains[i] = Math.pow(2, i);
//         }

//     return numberOfGrains;

//     }
// }

// const chestboard = new Chestboard(64);
// // chestboard.grains();
// console.log(chestboard.grains());