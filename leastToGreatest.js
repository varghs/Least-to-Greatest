// creates array with random numbers as elements
let ranNums = [
  Math.floor(Math.random()* 100),
  Math.floor(Math.random()* 100),
  Math.floor(Math.random()* 100),
  Math.floor(Math.random()* 100),
  Math.floor(Math.random()* 100)
]

// least to greatest
function leastToGreatest(array) {
  // logs the numbers before they are put in order
  console.log("Before");
  console.log(array);

  for(i = 0; i < array.length; i++) {
    for(j = 0; j !== i && j < (ranNums.length); j++) {
      // swap the statements inside of the if and the else if you want it to be greatest to least
      if(array[i] > array[j] && j < i) {
        continue;
      } else {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  
  // logs numbers after ordering
  console.log("After")
  console.log(array)
}

leastToGreatest(ranNums);
