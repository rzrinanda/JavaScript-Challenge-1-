//Leap year detector
let leapYears = [];
const getLeapYear = function(firstY, endY) {
  for (let yr = firstY; yr <= endY; yr++) {
    let leap = yr % 400 ? (yr % 100 ? (yr % 4 ? false : true) : false) : true;
    if (leap) {
      leapYears.push(yr);
    }
  }
};
getLeapYear(1900, 2030);
console.log(leapYears.join(', '));

