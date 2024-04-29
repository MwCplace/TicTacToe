let btns = document.querySelectorAll('button');
let count = 0;
let showWinner = false;
let xMoves = [], oMoves = [];
let winMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for (const btn of btns) {
  btn.addEventListener('click', function() {
    console.log(this.value);
    this.disabled = true;
    if (count%2 == 0) {
      this.innerHTML = 'X';
      xMoves.push(this.value);
    }
    else {
      this.innerHTML = 'O';
      oMoves.push(this.value);
    }
    count++;
    
    if (count >= 5) {
      for (const move of winMoves) {
      let xCount = 0, oCount = 0;
        for (const num of move) {
          for (const i of xMoves) {
            if (i == num) {
              if (count%2 == 0) { // x player
                xCount++;
              }
              else { // o player
                oCount++;
              }
              count++;
            }
            if (xCount == 3 || oCount == 3) {
              showWinner = true;
            }
          }
        }
      }
    }
    
    if (showWinner) {
      if (count%2 == 0) { // x player
        console.log('X player won');
      }
      else { // o player
        console.log('O player won');
      }
      count = 0;
      showWinner = false;
      for (const btn of btns) {
        btn.innerHTML = '';
      }
    }
  });
}
