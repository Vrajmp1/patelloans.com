const list_ekadashi = [[12, 14, 2021, 'Tuesday', 'મોક્ષદા એકાદશી', 'e'], 
                     [12, 30, 2021, 'Thursday', 'સફલા એકાદશી', 'e'], 
                     [1, 13, 2022, 'Thursday', 'પુત્રદા એકાદશી', 'e'], 
                     [1, 28, 2022, 'Friday', 'ષટતિલા એકાદશી', 'e'], 
                     [2, 12, 2022, 'Saturday', 'જયા એકાદશી', 'e'], 
                     [2, 27, 2022, 'Sunday', 'વિજયા એકાદશી', 'e'], 
                     [3, 14, 2022, 'Monday', 'આમલકી એકાદશી', 'e'], 
                     [3, 28, 2022, 'Monday', 'પાપમોચની એકાદશી', 'e'], 
                     [4, 10, 2022, 'Sunday', 'શ્રી હરિ જયંતી', 'h'], 
                     [4, 12, 2022, 'Tuesday', 'કામદા એકાદશી', 'e'], 
                     [4, 26, 2022, 'Tuesday', 'વરુથિની એકાદશી', 'e'], 
                     [5, 12, 2022, 'Thursday', 'મોહિની એકાદશી', 'e'], 
                     [5, 26, 2022, 'Thursday', 'અપરા એકાદશી', 'e'], 
                     [6, 11, 2022, 'Saturday', 'ભીમ એકાદશી', 'e'], 
                     [6, 24, 2022, 'Friday', 'યોગિની એકાદશી', 'e'], 
                     [7, 10, 2022, 'Sunday', 'દેવશયની એકાદશી', 'e'], 
                     [7, 24, 2022, 'Sunday', 'કામિકા એકાદશી', 'e'], 
                     [8, 8, 2022, 'Monday', 'પવિત્રા એકાદશી', 'e'], 
                     [8, 19, 2022, 'Friday', 'જન્માષ્ટમી', 'j'],
                     [8, 23, 2022, 'Tuesday', 'અજા એકાદશી', 'e'], 
                     [9, 7, 2022, 'Wednesday', 'પરિવર્તની એકાદશી', 'e'], 
                     [9, 21, 2022, 'Wednesday', 'ઇન્દિરા એકાદશી', 'e'], 
                     [10, 6, 2022, 'Thursday', 'પાશાંકુશા એકાદશી', 'e'], 
                     [10, 21, 2022, 'Friday', 'રમા એકાદશી', 'e'], 
                     [11, 4, 2022, 'Friday', 'પ્રબોધિની એકાદશી', 'e'], 
                     [11, 20, 2022, 'Sunday', 'ઉત્પત્તિ એકાદશી', 'e'],
                     [12, 4, 2022, 'Sunday', 'મોક્ષદા એકાદશી', 'e'],
                     [12, 19, 2022, 'Monday', 'સફલા એકાદશી', 'e'],
                     [1, 2, 2023, 'Monday', 'પુત્રદા એકાદશી', 'e'],
                     [1, 18, 2023, 'Wednesday', 'ષટતિલા એકાદશી', 'e'],
                     [2, 1, 2023, 'Wednesday','જયા એકાદશી', 'e'],
                     [2, 17, 2023, 'Friday', 'વિજયા એકાદશી', 'e'],
                     [2, 18, 2023, 'Saturday', 'મહા શિવરાત્રી', 's'],
                     [3, 3, 2023, 'Friday', 'આમલકી એકાદશી', 'e'],
                     [3, 18, 2023, 'Saturday', 'પાપમોચની એકાદશી', 'e'],
                     [3, 30, 2023, 'Thursday', 'શ્રી હરિ જયંતી', 'h'],
                     [4, 1, 2023, 'Saturday', 'કામદા એકાદશી', 'e'],
                     [4, 16, 2023, 'Sunday', 'વરુથિની એકાદશી', 'e'],
                     [5, 1, 2023, 'Monday', 'મોહિની એકાદશી', 'e'],
                     [5, 15, 2023, 'Monday', 'અપરા એકાદશી', 'e'],
                     [5, 31, 2023, 'Wednesday', 'ભીમ એકાદશી', 'e'],
                     [6, 14, 2023, 'Wednesday', 'યોગિની એકાદશી', 'e'],
                     [6, 29, 2023, 'Thursday', 'દેવશયની એકાદશી', 'e'],
                     [7, 13, 2023, 'Thursday', 'કામિકા એકાદશી', 'e'],
                     [7, 29, 2023, 'Saturday', 'કમલા એકાદશી', 'e'],
                     [8, 12, 2023, 'Saturday', 'કમલા એકાદશી ', 'e'],
                     [8, 27, 2023, 'Sunday', 'પુત્રદા-પવિત્રા એકાદશી', 'e'],
                     [9, 7, 2023, 'Thursday', 'જન્માષ્ટમી', 'j'],
                     [9, 10, 2023, 'Sunday', 'અજા એકાદશી', 'e'],
                     [9, 26, 2023, 'Tuesday', 'જલઝીલણી એકાદશી', 'e'],
                     [10, 10, 2023, 'Tuesday', 'ઇન્દિરા એકાદશી', 'e'],
                     [10, 25, 2023, 'Wednesday', 'પાશાંકુશા એકાદશી', 'e'],
                     [11, 9, 2023, 'Thursday', 'રમા એકાદશી', 'e'],
                     [11, 23, 2023, 'Thursday', 'પ્રબોધિની એકાદશી', 'e'],
                     [12, 9, 2023, 'Saturday', 'ઉત્પત્તિ એકાદશી', 'e'],
                     [12, 23, 2023, 'Saturday', 'મોક્ષદા એકાદશી', 'e'],
                     [1, 7, 2024, 'Sunday', 'સફલા એકાદશી', 'e'],
                     [1, 21, 2024, 'Sunday', 'પુત્રદા એકાદશી', 'e'],
                     [2, 6, 2024, 'Tuesday', 'ષટતિલા એકાદશી', 'e'],
                     [2, 20, 2024, 'Tuesday', 'જયા એકાદશી', 'e'],
                     [3, 7, 2024, 'Thursday', 'વિજયા એકાદશી', 'e'],
                     [3, 8, 2024, 'Friday', 'મહા શિવરાત્રી', 's'],
                     [3, 20, 2024, 'Wednesday', 'આમલકી એકાદશી', 'e'],
                     [4, 5, 2024, 'Friday', 'પાપમોચની એકાદશી', 'e'],
                     [4, 17, 2024, 'Wednesday', 'શ્રી હરિ જયંતી', 'h'],
                     [4, 19, 2024, 'Friday,', 'કામદા એકાદશી', 'e'],
                     [5, 4, 2024, 'Saturday', 'વરુથિની એકાદશી', 'e'],
                     [5, 19, 2024, 'Sunday', 'મોહિની એકાદશી', 'e'],
                     [6, 3, 2024, 'Monday', 'અપરા એકાદશી', 'e'],
                     [6, 18, 2024, 'Tuesday', 'ભીમ એકાદશી', 'e'],
                     [7, 2, 2024, 'Tuesday', 'યોગિની એકાદશી', 'e'],
                     [7, 17, 2024, 'Wednesday', 'દેવશયની એકાદશી', 'e'],
                     [7, 31, 2024, 'Wednesday', 'કામિકા એકાદશી', 'e'],
                     [8, 16, 2024, 'Friday', 'પુત્રદા-પવિત્રા એકાદશી', 'e'],
                     [8, 26, 2024, 'Monday', 'જન્માષ્ટમી', 'j'],
                     [8, 29, 2024, 'Thursday', 'અજા એકાદશી', 'e'],
                     [9, 14, 2024, 'Saturday', 'જલઝીલણી એકાદશી', 'e'],
                     [9, 28, 2024, 'Saturday', 'ઇન્દિરા એકાદશી', 'e'],
                     [10, 14, 2024, 'Monday', 'પાશાંકુશા એકાદશી', 'e'],
                     [10, 28, 2024, 'Monday', 'રમા એકાદશી', 'e'],
                     [11, 12, 2024, 'Tuesday', 'પ્રબોધિની એકાદશી', 'e'],
                     [11, 26, 2024, 'Tuesday', 'ઉત્પત્તિ એકાદશી', 'e'],
                     [12, 11, 2024, 'Wednesday', 'મોક્ષદા એકાદશી', 'e'],
                     [12, 26, 2024, 'Thursday', 'સફલા એકાદશી', 'e'],
                     [1, 10, 2025, 'Friday', 'પુત્રદા એકાદશી', 'e'],
                     [1, 25, 2025, 'Saturday', 'ષટતિલા એકાદશી', 'e'],
                     [2, 8, 2025, 'Saturday', 'જયા એકાદશી', 'e'],
                     [2, 24, 2025, 'Monday', 'વિજયા એકાદશી', 'e'],
                     [2, 26, 2025, 'Wednesday', 'મહા શિવરાત્રી', 's'],
                     [3, 10, 2025, 'Monday', 'આમલકી એકાદશી', 'e'],
                     [3, 26, 2025, 'Wednesday', 'પાપમોચની એકાદશી', 'e'],
                     [4, 6, 2025, 'Sunday', 'શ્રી હરિ જયંતી', 'h'],
                     [4, 8, 2025, 'Tuesday,', 'કામદા એકાદશી', 'e'],
                     [4, 24, 2025, 'Thursday', 'વરુથિની એકાદશી', 'e'],
                     [5, 8, 2025, 'Thursday', 'મોહિની એકાદશી', 'e'],
                     [5, 23, 2025, 'Friday', 'અપરા એકાદશી', 'e'],
                     [6, 7, 2025, 'Saturday', 'ભીમ એકાદશી', 'e'],
                     [6, 22, 2025, 'Sunday', 'યોગિની એકાદશી', 'e'],
                     [7, 6, 2025, 'Sunday', 'દેવશયની એકાદશી', 'e'],
                     [7, 21, 2025, 'Monday', 'કામિકા એકાદશી', 'e'],
                     [8, 5, 2025, 'Tuesday', 'પુત્રદા-પવિત્રા એકાદશી', 'e'],
                     [8, 16, 2025, 'Saturday', 'જન્માષ્ટમી', 'j'],
                     [8, 19, 2025, 'Tuesday', 'અજા એકાદશી', 'e'],
                     [9, 3, 2025, 'Wednesday', 'જલઝીલણી એકાદશી', 'e'],
                     [9, 17, 2025, 'Wednesday', 'ઇન્દિરા એકાદશી', 'e'],
                     [10, 3, 2025, 'Friday', 'પાશાંકુશા એકાદશી', 'e'],
                     [10, 17, 2025, 'Friday', 'રમા એકાદશી', 'e'],
                     [11, 2, 2025, 'Sunday', 'પ્રબોધિની એકાદશી', 'e'],
                     [11, 15, 2025, 'Saturday', 'ઉત્પત્તિ એકાદશી', 'e'],
                     [12, 1, 2025, 'Monday', 'મોક્ષદા એકાદશી', 'e'],
                     [12, 15, 2025, 'Monday', 'સફલા એકાદશી', 'e'],
                     [12, 31, 2025, 'Wednesday', 'પુત્રદા એકાદશી', 'e'],
                     [1, 14, 2026, 'Wednesday', 'ષટતિલા એકાદશી', 'e'],
                     [1, 29, 2026, 'Thursday', 'જયા એકાદશી', 'e'],
                     [2, 13, 2026, 'Friday', 'વિજયા એકાદશી', 'e'],
                     [2, 15, 2026, 'Sunday', 'મહા શિવરાત્રી', 's'],
                     [2, 27, 2026, 'Friday', 'આમલકી એકાદશી', 'e'],
                     [3, 15, 2026, 'Sunday', 'પાપમોચની એકાદશી', 'e'],
                     [3, 27, 2026, 'Friday', 'શ્રી હરિ જયંતી', 'h'],
                     [3, 29, 2026, 'Sunday', 'કામદા એકાદશી', 'e'],
                     [4, 13, 2026, 'Monday', 'વરુથિની એકાદશી', 'e'],
                     [4, 27, 2026, 'Monday', 'મોહિની એકાદશી', 'e'],
                     [5, 13, 2026, 'Wednesday', 'વૈશાખ એકાદશી', 'e'],
                     [5, 27, 2026, 'Wednesday', 'પદ્મિની એકાદશી', 'e'],
                     [6, 11, 2026, 'Thursday', 'અપરા એકાદશી', 'e'],
                     [6, 25, 2026, 'Thursday', 'ભીમ એકાદશી', 'e'],
                     [7, 11, 2026, 'Saturday', 'યોગિની એકાદશી', 'e'],
                     [7, 25, 2026, 'Saturday', 'દેવશયની એકાદશી', 'e'],
                     [8, 9, 2026, 'Sunday', 'કામિકા એકાદશી', 'e'],
                     [8, 23, 2026, 'Sunday', 'પુત્રદા-પવિત્રા એકાદશી', 'e'],
                     [9, 4, 2026, 'Friday', 'જન્માષ્ટમી', 'j'],
                     [9, 7, 2026, 'Monday', 'અજા એકાદશી', 'e'],
                     [9, 22, 2026, 'Tuesday', 'જલઝીલણી એકાદશી', 'e'],
                     [10, 6, 2026, 'Tuesday', 'ઇન્દિરા એકાદશી', 'e'],
                     [10, 22, 2026, 'Thursday', 'પાશાંકુશા એકાદશી', 'e']];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_MS = 24 * 60 * 60 * 1000;
const today = atNoon(new Date());
let currentIndex = 0;

function atNoon(value) {
  const d = new Date(value);
  d.setHours(12, 0, 0, 0);
  return d;
}

function makeDate(year, month, day) {
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function daysBetween(from, to) {
  return Math.round((atNoon(to) - atNoon(from)) / DAY_MS);
}

function setInitialEvent() {
  const found = list_ekadashi.findIndex(([month, day, year]) => makeDate(year, month, day) >= today);
  currentIndex = found === -1 ? list_ekadashi.length - 1 : found;
}

function imageForType(type) {
  if (type === "h") return "Harikrishnaji.jpg";
  if (type === "j") return "krishna.jpg";
  if (type === "s") return "shivratri.jpg";
  return "fruit_basket.jpg";
}

function dayLabel(eventDate, listedWeekday, difference) {
  if (difference === 0) return "Today";
  if (difference === 1) return "Tomorrow";
  if (difference > 1 && difference < 7) return `Next ${listedWeekday.replace(",", "")}`;
  return listedWeekday.replace(",", "");
}

function updateEventCard() {
  const [month, day, year, weekday, name, type] = list_ekadashi[currentIndex];
  const eventDate = makeDate(year, month, day);
  const difference = daysBetween(today, eventDate);

  document.getElementById("month-value").textContent = MONTHS[month - 1];
  document.getElementById("date-value").textContent = day;
  document.getElementById("type-value").textContent = name;
  document.getElementById("day-value").textContent = dayLabel(eventDate, weekday, difference);
  document.getElementById("cur-yr-title").textContent = year;
  document.getElementById("event-year-chip").textContent = year;

  const image = document.getElementById("card-img");
  image.src = imageForType(type);
  image.alt = `${name} illustration`;

  const remaining = document.getElementById("days-remaining");
  if (difference === 0) remaining.textContent = "Today 🙏";
  else if (difference === 1) remaining.textContent = "Tomorrow";
  else if (difference > 1) remaining.textContent = `${difference} days left`;
  else if (difference === -1) remaining.textContent = "1 day ago";
  else remaining.textContent = `${Math.abs(difference)} days ago`;

  document.getElementById("prev-button").disabled = currentIndex === 0;
  document.getElementById("next-button").disabled = currentIndex === list_ekadashi.length - 1;
}

function forward() {
  if (currentIndex < list_ekadashi.length - 1) {
    currentIndex += 1;
    updateEventCard();
  }
}

function previous() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateEventCard();
  }
}

function enableSwipe() {
  const card = document.getElementById("ekadashi-card");
  let startX = null;
  card.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    startX = event.clientX;
  });
  card.addEventListener("pointerup", (event) => {
    if (startX === null) return;
    const delta = event.clientX - startX;
    startX = null;
    if (Math.abs(delta) < 45) return;
    delta < 0 ? forward() : previous();
  });
}

function init() {
  document.getElementById("cur-day").textContent = today.getDate();
  document.getElementById("cur-mon").textContent = MONTHS[today.getMonth()];
  document.getElementById("cur-yr").textContent = today.getFullYear();
  setInitialEvent();
  updateEventCard();
  enableSwipe();

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") previous();
    if (event.key === "ArrowRight") forward();
  });
}

init();
