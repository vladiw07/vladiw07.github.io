function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var dayOfTheWeek = now.getDay();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    } 
    if (dayOfTheWeek == 1){
        dayOfTheWeek = 'MON';
    } 
    if (dayOfTheWeek == 2){
        dayOfTheWeek = 'TUE';
    } 
    if (dayOfTheWeek == 3){
        dayOfTheWeek = 'WED';
    } 
    if (dayOfTheWeek == 4){
        dayOfTheWeek = 'THU';
    } 
    if (dayOfTheWeek == 5){
        dayOfTheWeek = 'FRI';
    }  
    if (dayOfTheWeek == 6){
        dayOfTheWeek = 'SAT';
    } 
    if (dayOfTheWeek == 0){
        dayOfTheWeek = 'SUN';
    } 
    var dateTime = year+'-'+month+'-'+day+' '+dayOfTheWeek+" "+hour+':'+minute+':'+second;   
     return dateTime;
     
}


setInterval(function(){
    currentTime = getDateTime();
    currentTime1 = currentTime.slice(0, 14);
    currentTime2 = currentTime.slice(14, 25);
    document.querySelector('.result').innerHTML = currentTime1;
    document.querySelector('.result2').innerHTML = currentTime2;
}, 1);