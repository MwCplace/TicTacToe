let btns = document.querySelectorAll('button');
let count = 0;
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
        for (const num of move) {
          for (const i of xMoves) {
            if (i == num)
            count = 9;
          }
        }
      }
    }
    
    if (count == 9) {
      console.log('sssssss');
      count = 0;
      for (const btn of btns) {
        btn.innerHTML = '';
      }
    }
  });
}
