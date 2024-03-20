var list_birthday = [[1, 24, 2000, 'M. Patadia'],
                     [2, 9, 2005, 'Sajubhai Patel'],
                     [2, 12, 2003, 'Vaju bhai Patel'],
                     [3, 19, 2000, 'Meeruben Ratani (For now)'],
                     [4, 2, 1781, 'Ghanshyam Dharmadev Pande'],
                     [4, 15, 1996, 'Siddharthbhai Satani'],
                     [5, 1, 2003, 'Isha Ratani'],
                     [5, 2, 1995, 'U. Dobby'],
                     [5, 25, 1997, 'Dhotiben Satani'],
                     [6, 9, 1976, 'Reshmamaasi Hirani'],
                     [7, 3, 2009, 'Riyu Hirani'],
                     [7, 17, 1999, 'Samudhra Manthan'],
                     [7, 13, 1981, 'Pintoo Kaka'],
                     [7, 19, 2013, 'Nayan'],
                     [7, 31, 2002, 'Abhay Thacker'],
                     [8, 3, 1978, 'Uncle Harry'],
                     [8, 12, 1974, 'The Aunty Vandana'],
                     [8, 13, 1975, 'Rita Aunty Thacker'],
                     [8, 22, 2000, 'Anjuben Thacker'],
                     [8, 29, 2022, 'Punya Ghadiya'],
                     [8, 30, 1970, 'Himanshukaka Ratani'],
                     [8, 31, 1973, 'Piyush Uncle Thacker'],
                     [9, 18, 2000, 'THE BUUN'],
                     [9, 22, 1975, 'Chetana Patel'],
                     [9, 23, 2006, 'Pujjubhai Hirani'],
                     [10, 3, 1996, 'Kushkumar Patel'],
                     [10, 12, 2002, 'Bhavisha Hirani'],
                     [12, 1, 2003, 'Swati Hirani'],
                     [12, 2, 1977, 'Manishkaka Rai'],
                     [12, 9, 1980, 'Dhvani Kaki'],
                     [12, 13, 2008, 'Krusha'],
                     [12, 26, 1975, 'Manish Patel'],
                     [12, 29, 1975, 'Rameshkaka Hirani']]


var num_in_list = list_birthday.length - 1;

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

var date = cur_day +'-'+cur_mon+'-'+cur_yr;

console.log(date);

//--------------------------------------------------------------------
//Find current index -------------------------------------------------
function is_before(m1,d1,m2,d2){
	if (m1<m2)
		return true;
	else if (m1>m2)
		return false;
	else{
		if (d1<d2)
			return true;
		else if (d1>d2)
			return false;
		else
			return false;
  }
}
function recenter(mon,day){
  for (let i=0;i<=num_in_list;i++){
    if (is_before(list_birthday[i][0],list_birthday[i][1],mon,day)==false){
      current_index = i;
      break;
    }
  }
}

recenter(cur_mon,cur_day);

change(list_birthday[current_index]);

function go(){
  let desired_date = document.getElementById("go-to-date").value;
  console.log(typeof(desired_date));
  console.log(desired_date);
  cur_yr = Number(desired_date.slice(0,4));
  let reset_mon = Number(desired_date.slice(5,7));
  let reset_day = Number(desired_date.slice(8,10));
  recenter(reset_mon,reset_day);
  change(list_birthday[current_index]);
}

//--------------------------------------------------------------------



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

function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}

function change_pic(name){
  let img = document.getElementById("card-img");
  img.src = "pics/"+name+".jpg";
  return true;
}
//------------------------------------implements the change function--------------------
function change(particulars){
  if (change_pic(particulars[3])===true){
    sleepFor(500);
    let month = particulars[0];
    let day = particulars[1];
    document.getElementsByTagName("p")[0].innerHTML = num_to_month[month];
    let date = document.getElementsByTagName("p")[1];
    date.innerHTML = day;
    if (String(day).length==1){
      console.log('True');
      date.style.marginLeft = "130%";
    }
    else {
      date.style.marginLeft = "55%";
    }
  
    document.getElementsByTagName("p")[2].innerHTML = particulars[3];
    let weekday = which_weekday(month,day,cur_yr);
    document.getElementsByTagName("p")[3].innerHTML = weekday;
    document.getElementById("year-title").innerHTML = cur_yr;

    //--------------updates current age and will be how old fields-----------------//
    document.getElementById("then-age-value").innerText = cur_yr - particulars[2];
    let age = cur_age(month,day,particulars[2],cur_mon,cur_day,cur_year);
    console.log(age);
    let years_old = age[0];
    let months_old = age[1];
    let days_old = age[2];

    console.log(years_old, months_old, years_old);

    document.getElementById("yr-age").textContent = years_old;
    document.getElementById("mon-age").textContent = months_old;
    document.getElementById("day-age").innerText = days_old;
    
    



    //----------------------------------------------------------------------------//
  
    let days_till_birthday = days_left(cur_mon,cur_day,month,day,cur_year,cur_yr);
    let remaining_element = document.getElementById("days-remaining");
  
    if (days_till_birthday<7 && days_till_birthday>0){
      document.getElementsByTagName("p")[3].innerHTML = 'Next ' + weekday;
    }
    else if (days_till_birthday<4 && days_till_birthday>0){
      document.getElementsByTagName("p")[3].innerHTML = 'This coming ' + particulars[3];
    }
    else if (days_till_birthday==0){
      alert(`${particulars[3]}'s birthday is Today. Jay Swaminarayan 🙏`);
    }
    
    if (days_till_birthday==1){
      remaining_element.innerHTML = "Birthday is tomorrow";
      remaining_element.style.color == "red";
      remaining_element.style.fontSize == "40px";
    }
    else if (days_till_birthday==0){
      remaining_element.innerHTML = "Birthday is TODAY";
      remaining_element.style.color == "green";
      remaining_element.style.fontSize = "50px";
    }
    else if (days_till_birthday<0){
      remaining_element.innerHTML = `Birthday passed ${days_till_birthday} days ago`;
    }
    else {
      remaining_element.innerHTML = `${days_till_birthday} days left`;
    }
  }
}
//----------------------------------------------------------------------------------------

//-------------------------------functions to move forward and previous-----------------//
function forward(){
  if (current_index<num_in_list){
    current_index += 1;
  }
  else {
    current_index=0;
    cur_yr+=1;
  }
  change(list_birthday[current_index]);
}

function previous(){
  if (current_index>0){
    current_index -= 1;
  }
  else {
    current_index=num_in_list;
    cur_yr-=1;;
  }
  change(list_birthday[current_index]);
}
//-----------------------------------------------------------------------------------

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
//--------------------------------------------------------------------------------------//


//--------------------------------------determine which weekday a date is on----------------------------//

function which_weekday(m2,d2,y2){
  let days = days_left(4,2,m2,d2,1950,y2);
  day_index = days%7;
  console.log('days log index:',day_index);
  return weekdays[day_index];
}


//------------------------------------------------------------------------------------------------------//

//--------------------------------------determine bhakta's current age----------------------------//

function is_earlier_in_year(m1,d1,m2,d2){
  if (m1<m2)
      return true;
  else if (m1>m2)
      return false;
  else {
      if (d1<d2)
          return true;
      else if (d1>d2)
          return false;
      else
          return 'Same Day';
  }
}

//takes in the birthday month, day, and year
function cur_age(m1,d1,y1,m2,d2,y2){
  console.log('cur mo',m2,'cur day',d2,'cur yr',y2);
  console.log('birth mo',m1,'birth day',d1,'birth yr',y1);
  let yrs_old = 0, mon_old = 0, day_old = 0;
  let is_earlier = is_earlier_in_year(m1,d1,m2,d2);
  if (is_earlier=='Same Day'){
    yrs_old = y2 - y1;
    return [yrs_old,mon_old,day_old];
  }
  else if (is_earlier==true){
    yrs_old = y2 - y1;
    mon_old = m2 - m1;
    if (d1<d2){
      if (m1==1){
        day_old = 31-(d1+(31-d2));
      }
      else {
        day_old = d2-d1;
      }
    } 
    else {
      mon_old-=1;
      day_old = 31-(d1-d2)-1;
      if (day_old==31){
        mon_old+=1;
        day_old=0;
      }
    }
    return [yrs_old,mon_old,day_old];
  }
  else {
    yrs_old = y2 - y1 - 1;
    mon_old = 12-(m1-m2);
    if (d1<d2){
      if (m1==1){
        day_old = 31-(d1+(31-d2));
      }
      else {
        day_old = 31-(d1+(days_in_months[m1-1]-d2));
      }
    } 
    else {
      mon_old-=1;
      day_old = 31-(d1-d2);
      if (day_old==31){
        mon_old+=1;
        day_old=0;
      }
    }
  }
  return [yrs_old,mon_old,day_old];
}


//------------------------------------------------------------------------------------------------------//


for (let i=0;i<num_in_list+1;i++){
  let new_elem1 = document.createElement("option");
  new_elem1.setAttribute("value",i);
  new_elem1.innerText = list_birthday[i][3];
  document.querySelector("#names1").appendChild(new_elem1);

  let new_elem2 = document.createElement("option");
  new_elem2.setAttribute("value",i);
  new_elem2.innerText = list_birthday[i][3];
  document.querySelector("#names2").appendChild(new_elem2);
}

function is_older(m1,d1,y1,m2,d2,y2){
    if (y1<y2)
        return 1;
    else if (y1>y2)
        return 2;
    else{
        if (m1<m2)
            return 1;
        else if (m1>m2)
            return 2;
        else {
            if (d1<d2)
                return 1;
            else if (d1>d2)
                return 2;
            else
                return 3; //same day returns 3
            }
    }
}          

function calculate(){
  let person1 = document.getElementById("names1").value;
  let person2 = document.getElementById("names2").value;

  let p1mon = Number(list_birthday[person1][0]);
  let p1day = Number(list_birthday[person1][1]);
  let p1yr = Number(list_birthday[person1][2]);

  let p2mon = Number(list_birthday[person2][0]);
  let p2day = Number(list_birthday[person2][1]);
  let p2yr = Number(list_birthday[person2][2]);

  who_older = is_older(p1mon,p1day,p1yr,p2mon,p2day,p2yr);
  if (who_older==1){
    let diff = cur_age(p1mon,p1day,p1yr,p2mon,p2day,p2yr);
    let diff_str = `${diff[0]} years, ${diff[1]} months, ${diff[2]} days`
    document.querySelector("#diff-age").innerText=diff_str;
    document.querySelector("#older").innerText=`${list_birthday[person1][3]} is older by`;
  }
  else if (who_older==2){
    let diff = cur_age(p2mon,p2day,p2yr,p1mon,p1day,p1yr);
    let diff_str = `${diff[0]} years, ${diff[1]} months, ${diff[2]} days`
    document.querySelector("#diff-age").innerText=diff_str;
    document.querySelector("#older").innerText=`${list_birthday[person2][3]} is older by`;
  }
  else {
    document.querySelector("#diff-age").innerText = "0 years, 0 months, 0 days"
  }

}