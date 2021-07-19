let year; 
function leapYear(year) { 
    /* 
    the rule is that in order to be a leap year, the year should be evenly divisible
    by 4, except the years which are evenly divisible by 100, unless they are also 
    divisible by 400
     */ 

    if (year%4 ===0 && year%100===0) { 
         if (year % 400 === 0) {
        return'its leap'; 
         } else {
            return'not leap';
        }
    } else if (year%4 ===0) {
        return'its leap';
    } else {
        return'not leap';
    }
}

console.log(leapYear(1900));
