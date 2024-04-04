"use strict";
let year;
year = document.getElementById('year');
let thisYear;
thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute('data-year', thisYear);
    year.textContent = thisYear;
}
