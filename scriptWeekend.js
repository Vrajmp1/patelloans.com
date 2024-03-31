var num_to_month = {1:'January',
                    2:'February',
                    3:'March',
                    4:'April',
                    5:'May',
                    6:'June',
                    7:'July',
                    8:'August',
                    9:'September',
                    10:'October',
                    11:'November',
                    12:'December'
                   }

var days_in_months = {1:31,
                  2:28,
                  3:31,
                  4:30,
                  5:31,
                  6:30,
                  7:31,
                  8:31,
                  9:30,
                  10:31,
                  11:30,
                  12:31}

//change today's date----------------------------------------------
var today = new Date();

var cur_day = today.getDate();
var cur_mon = (today.getMonth()+1);
var cur_yr = today.getFullYear();

document.getElementById("cur-day").innerHTML = cur_day;
document.getElementById("cur-yr").innerHTML = cur_yr;
document.getElementById("cur-mon").innerHTML = num_to_month[cur_mon];

var date = cur_day +'-'+cur_mon+'-'+cur_yr;

console.log(date);

let viewport_width = document.documentElement.clientWidth;
console.log(viewport_width);

if (viewport_width < 550) {
  let control_row = document.getElementById("controls");
  control_row.style.marginLeft = "-20%";
  control_row.style.marginTop = "-10%";
  let img = document.getElementsByTagName('img')[0];
  img.style.marginLeft = "10px";
}
else{
  let next = document.getElementById("next-button");
  next.style.transform = "translateX(25%)"
}

var num_to_month = {1:'January',
                    2:'February',
                    3:'March',
                    4:'April',
                    5:'May',
                    6:'June',
                    7:'July',
                    8:'August',
                    9:'September',
                    10:'October',
                    11:'November',
                    12:'December'
                   }

var days_in_months = {1:31,
                  2:28,
                  3:31,
                  4:30,
                  5:31,
                  6:30,
                  7:31,
                  8:31,
                  9:30,
                  10:31,
                  11:30,
                  12:31}

var weekdays = ['Sunday','Monday','Tuesday',
            'Wednesday','Thursday','Friday','Saturday'];


var current_index = 0;

//change today's date--------------------------------------------------
var today = new Date();

var cur_day = today.getDate();
var cur_mon = (today.getMonth()+1);
var cur_yr = today.getFullYear();
var cur_year = cur_yr; //cur_year will not change

document.getElementById("cur-day").innerHTML = cur_day;
document.getElementById("cur-yr").innerHTML = cur_yr;
document.getElementById("cur-mon").innerHTML = num_to_month[cur_mon];

console.log(date);


function go(){
  let desired_date = document.getElementById("go-to-date").value;
  console.log(typeof(desired_date));
  console.log(desired_date);
  let yr = Number(desired_date.slice(0,4));
  let mon = Number(desired_date.slice(5,7));
  let day = Number(desired_date.slice(8,10));

  let dtw = days_left(3,2,mon,day,2024,yr);
  let dtw1 = dtw - 1;
  let dtw2 = dtw + 1;

  console.log(dtw);
  document.getElementById("whichWeekend").innerHTML = String(mon)+"/"+String(day);
  if ((dtw%14==0) || (dtw1%14==0) || (dtw2%14==0)){
    console.log("Day is off!!");
    document.getElementById("then-age-value").innerHTML = "OFF";
  }
  else{
    console.log("Day not off!!");
    document.getElementById("then-age-value").innerHTML = "ON";
  }
}

viewport_width = document.documentElement.clientWidth;
console.log(viewport_width);

if (viewport_width < 550) {
  let control_row = document.getElementById("controls");
  control_row.style.marginLeft = "-20%";
  control_row.style.marginTop = "-12%";
  let img = document.getElementsByTagName('img')[0];
  img.style.marginLeft = "10px";
}
else{
  let next = document.getElementById("next-button");
  next.style.transform = "translateX(25%)"
}

//-------------------Helper function to calculate days_left between two dates---------//
function days_left(month1,day1,month2,day2,year,cur_yr){
  if (year==cur_yr){
    let days1 = 0;
    let days2 = 0;
    for (let i=1;i<=12; i++) {
      if (i<month1) {
        days1 = (days1 + days_in_months[i]);
      }
      else 
        days1 = days1;
    }
    for (let j=1; j<=12; j++){
      if (j < month2)
        days2 = (days2 + days_in_months[j]);
      else
        days2;
    }
    if (year%4!=0)
        return (days2+day2)-(days1+day1);
    else if((month1<2) || (month1==2 && day1<29) && ((month2>2))) {
        return (days2+day2)-(days1+day1)+1;
    }
    else
        return (days2+day2)-(days1+day1);
  }
  else if (cur_yr<year){
    let days = 0, yr_indicator = cur_yr;
    days = days_left(month2,day2,12,31,cur_yr,cur_yr)+1;
    yr_indicator += 1;
    while(yr_indicator<year){
      if (yr_indicator%4==0)
        days+=366;
      else
        days+=365;
      yr_indicator+=1;
    }
    days += days_left(1,1,month1,day1,year,year);
    return -(days);
  }
  else {
    let days = 0, yr_indicator = year;
    days = days_left(month1,day1,12,31,year,year)+1;
    yr_indicator += 1;
    while(yr_indicator<cur_yr){
      if (yr_indicator%4==0)
        days+=366;
      else
        days+=365;
      yr_indicator+=1;
    }
    days += days_left(1,1,month2,day2,cur_yr,cur_yr);
    return days;
  }    
}



