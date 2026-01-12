// Cluster Buster

/*
Populate a 2D grid with random numbers between 0 and 4.
Find the largest contiguous area of numbers that are the same.
For example, if the grid is:

2 2 1 2 2
2 1 1 1 2
1 1 1 1 1
2 1 1 1 2
2 2 1 2 2

The largest contiguous area is 13.
The number with the largest contiguous area is 1. 

Requirements:
- Your function to generate a grid should take any size or width and height as parameters.
- Numbers generated should be between 0 and 4. Optionally add a parameter to specify the range.
- Numbers in the grid are adjacent by top/bottom and left/right, not diagonally.
- Output both the value of the largest contiguous area and the number that makes it.


Optional Requirements:
- Modify your code so that number 0 can count as any number. For example, if the grid is:

2 2 1 2 2
2 1 1 1 2
1 1 1 1 0
2 0 0 0 2
2 2 0 2 2

The largest contiguous area is 14. The 0's are counted both for the group of 1's and for the group of 2's. This time, the group of 2 is bigger.

*/

function findLargestCluster(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = [];
  for (let i = 0; i < rows; i++) {
    visited[i] = [];
    for (let j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }

  let maxSize = 0;
  let maxValue = null;

  // Algorithm for traversing or searching tree or graph data structures.
  function depthFirstSearch(row, col, value) {
    if (
      row < 0 || col < 0 ||
      row >= rows || col >= cols ||
      visited[row][col] ||
      grid[row][col] !== value
    ) {
      return 0;
    }

    visited[row][col] = true;

    return (
      1 +
      depthFirstSearch(row + 1, col, value) +
      depthFirstSearch(row - 1, col, value) +
      depthFirstSearch(row, col + 1, value) +
      depthFirstSearch(row, col - 1, value)
    );
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited[row][col]) {
        const size = depthFirstSearch(row, col, grid[row][col]);
        if (size > maxSize) {
          maxSize = size;
          maxValue = grid[row][col];
        }
      }
    }
  }

  return { maxSize, maxValue };
}

const grid = [
  [2, 2, 1, 2, 2],
  [2, 1, 1, 1, 2],
  [1, 1, 1, 1, 1],
  [2, 1, 1, 1, 2],
  [2, 2, 1, 2, 2]
];

const result = findLargestCluster(grid);
console.log("Largest contiguous area:", result.maxSize);
console.log("Number:", result.maxValue);