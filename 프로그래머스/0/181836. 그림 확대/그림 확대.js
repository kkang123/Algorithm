function solution(picture, k) {
  return picture
    .map(row =>
      row.split("").map(char => char.repeat(k)).join("")
    )
      .map(row => Array(k).fill(row)).flat()
}
