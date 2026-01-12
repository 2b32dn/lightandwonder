// Treasure Hunt

// In this problem you are to write a program to explore the below array for a treasure. The values in the array are clues.
// Each cell contains an integer between 11 and 55; for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue.
// Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42).
// The treasure is a cell whose value is the same as its coordinates. Your program must first read in the treasure map data into a 5 by 5 array.
// Your program should output the cells it visits during its search, and a message indicating where you found the treasure.

// +----+----+----+----+----+
// ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25 ¦
// +----+----+----+----+----+
// ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31 ¦
// +----+----+----+----+----+
// ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23 ¦
// +----+----+----+----+----+
// ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35 ¦
// +----+----+----+----+----+
// ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23 ¦
// +----+----+----+----+----+

// I created the grid as 2D Array
const grid = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [44, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23]
]

// I enter the first array
for (let i = 0; i < grid.length; i++) {
  // then the second one
  for (let j = 0; j < grid[i].length; j++) {

    // I convert the integer within the cell into a String
    let stringifyInteger = grid[i][j].toString();

    // I leverage the array's index as coordinate, convert them into a string and compare with the aforementioned stringify integer
    if (((i + 1).toString() + (j + 1).toString()) == stringifyInteger) {
      console.log(`Treasure has been found on cell (${i + 1},${j + 1}). Integer is ${stringifyInteger}`)
    } else {
      console.log("No treasure found!")
    }
  }
}