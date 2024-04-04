let year: HTMLElement|null 
year = document.getElementById('year');
let  thisYear:string
thisYear = new Date().getFullYear().toString();
if(year){
    year.setAttribute('data-year', thisYear)
    year.textContent = thisYear
}
