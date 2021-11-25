function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = 0;
    let a = i;

    while (a != 0) {
      console.log(a)
      if (arr[a] < arr[a - 1]) {
        temp = arr[a - 1];
        arr[a - 1] = arr[a];
        arr[a] = temp;
      }
      a--;
    }
  }
  return arr;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file



// And a written explanation of your solution


