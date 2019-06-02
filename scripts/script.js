'use strict';

function daysInMonth(month, year) {
  try {
    if(month > 11
    || month < 0
    || month % 1 > 0
    || year % 1 > 0
    || typeof year !== `number`
    || typeof month !== `number`) {
    throw new Error('exception');
  }
    const days = new Date(`${year}`, `${month}`, `0`).getDate();
    return days;
  }
  catch(error) {
    console.log(error);
  }
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception