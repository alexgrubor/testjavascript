const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
]
let calculateHours = (hours) => {
  let sum = hours.reduce((acc, current) => {
    acc = acc + (current.end - current.start);
    return acc;
  }, 0);
  return sum;
};

console.log(calculateHours(hourTracking));