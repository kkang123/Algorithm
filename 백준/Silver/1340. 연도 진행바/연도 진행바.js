const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const monthStr = input[0];
const day = parseInt(input[1].replace(",", ""), 10);
const year = parseInt(input[2], 10);
const [HH, MM] = input[3].split(":").map(Number);

const monthIdx = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}[monthStr];

const isLeap = (y) => y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);

const daysInMonth = [
  31,
  28 + (isLeap(year) ? 1 : 0),
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

let daysBeforeThisMonth = 0;
for (let i = 0; i < monthIdx; i++) daysBeforeThisMonth += daysInMonth[i];

const minutesPassed =
  (daysBeforeThisMonth + (day - 1)) * 24 * 60 + HH * 60 + MM;

const totalMinutes = (isLeap(year) ? 366 : 365) * 24 * 60;

const percent = (minutesPassed / totalMinutes) * 100;

function formatPercent(num) {
  return Number.isInteger(num) ? num.toFixed(1) : num.toString();
}

console.log(formatPercent(percent));
