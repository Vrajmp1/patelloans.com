// Birthday request email settings. Keep your EmailJS IDs here after setup.
const EMAILJS_CONFIG = {
  serviceId: "service_ouscsxr",
  templateId: "template_xyq42th",
  publicKey: "y7uViD8N7TNRnR4ui"
};

const list_birthday = [[2, 9, 2005, 'Sajubhai Patel'],
                     [2, 12, 2003, 'Vaju bhai Patel'],
                     [3, 19, 2000, 'Meeruben Patel'],
					 [3, 25, 2011, 'Nipun'],
                     [4, 2, 1781, 'Ghanshyam Dharmadev Pande'],
                     [4, 15, 1996, 'Siddharthbhai Satani'],
					 [4, 17, 1986, 'Dimpal Patel'],
                     [5, 1, 2003, 'Isha Ratani'],
                     [5, 2, 1995, 'U. Dobby'],
					 [5, 9, 1978, 'Chirag Uncle'],
                     [5, 25, 1997, 'Dhotiben Satani'],
                     [6, 9, 1976, 'Reshmamaasi Hirani'],
                     [7, 3, 2009, 'Riyu Hirani'],
					 [7, 13, 1981, 'Pintoo Kaka'],
                     [7, 17, 1999, 'Samudhra Manthan'],
                     [7, 19, 2013, 'Nayan'],
                     [7, 31, 2002, 'Abhay Thacker'],
                     [8, 3, 1978, 'Uncle Harry'],
                     [8, 12, 1974, 'The Aunty Vandana'],
                     [8, 13, 1975, 'Rita Aunty Thacker'],
                     [8, 22, 2000, 'Anjuben Thacker'],
                     [8, 29, 2022, 'Punya Ghadiya'],
					 [8, 30, 2008, 'Mehul'],
                     [8, 30, 1970, 'Himanshukaka Ratani'],
                     [8, 31, 1973, 'Piyush Uncle Thacker'],
                     [9, 18, 2000, 'THE BUUN'],
                     [9, 22, 1975, 'Chetana Patel'],
                     [9, 23, 2006, 'Pujjubhai Hirani'],
					 [9, 25, 1981, 'Aarti Kaki'],
                     [10, 3, 1996, 'Kushkumar Patel'],
                     [10, 12, 2002, 'Bhavisha Hirani'],
					 [10, 16, 2013, 'Charmi'],
					 [10, 20, 2008, 'Krush'],
                     [12, 1, 2003, 'Swati Hirani'],
                     [12, 2, 1977, 'Manishkaka Rai'],
                     [12, 9, 1980, 'Dhvani Kaki'],
                     [12, 13, 2008, 'Krusha'],
                     [12, 26, 1975, 'Manish Patel'],
					 [12, 28, 2010, 'Prisha'],
                     [12, 29, 1975, 'Rameshkaka Hirani']];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_MS = 24 * 60 * 60 * 1000;

let currentIndex = 0;
let displayYear;
const today = atNoon(new Date());

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

function addYearsClamped(date, years) {
  const targetYear = date.getFullYear() + years;
  const month = date.getMonth();
  const day = Math.min(date.getDate(), new Date(targetYear, month + 1, 0).getDate());
  return new Date(targetYear, month, day, 12, 0, 0, 0);
}

function addMonthsClamped(date, months) {
  const sourceMonth = date.getMonth();
  const rawMonth = sourceMonth + months;
  const targetYear = date.getFullYear() + Math.floor(rawMonth / 12);
  const targetMonth = ((rawMonth % 12) + 12) % 12;
  const day = Math.min(date.getDate(), new Date(targetYear, targetMonth + 1, 0).getDate());
  return new Date(targetYear, targetMonth, day, 12, 0, 0, 0);
}

function calendarAge(birthDate, referenceDate) {
  const birth = atNoon(birthDate);
  const reference = atNoon(referenceDate);
  if (reference < birth) return [0, 0, 0];

  let years = reference.getFullYear() - birth.getFullYear();
  let cursor = addYearsClamped(birth, years);
  if (cursor > reference) {
    years -= 1;
    cursor = addYearsClamped(birth, years);
  }

  let months = 0;
  while (months < 11) {
    const next = addMonthsClamped(cursor, 1);
    if (next <= reference) {
      cursor = next;
      months += 1;
    } else {
      break;
    }
  }

  return [years, months, daysBetween(cursor, reference)];
}

function formatDayLabel(targetDate, difference) {
  const weekday = targetDate.toLocaleDateString(undefined, { weekday: "long" });
  if (difference === 0) return "Today";
  if (difference === 1) return "Tomorrow";
  if (difference > 1 && difference < 7) return `Next ${weekday}`;
  return weekday;
}

function setInitialBirthday() {
  const month = today.getMonth() + 1;
  const day = today.getDate();
  displayYear = today.getFullYear();

  const found = list_birthday.findIndex(([m, d]) => m > month || (m === month && d >= day));
  if (found === -1) {
    currentIndex = 0;
    displayYear += 1;
  } else {
    currentIndex = found;
  }
}

function updateBirthdayCard() {
  const [month, day, birthYear, name] = list_birthday[currentIndex];
  const targetDate = makeDate(displayYear, month, day);
  const birthDate = makeDate(birthYear, month, day);
  const difference = daysBetween(today, targetDate);
  const age = calendarAge(birthDate, today);

  document.getElementById("month-value").textContent = MONTHS[month - 1];
  document.getElementById("date-value").textContent = day;
  document.getElementById("type-value").textContent = name;
  document.getElementById("day-value").textContent = formatDayLabel(targetDate, difference);
  document.getElementById("year-title").textContent = displayYear;
  document.getElementById("birthday-year-chip").textContent = displayYear;
  document.getElementById("then-age-value").textContent = displayYear - birthYear;
  document.getElementById("yr-age").textContent = age[0];
  document.getElementById("mon-age").textContent = age[1];
  document.getElementById("day-age").textContent = age[2];

  const image = document.getElementById("card-img");
  image.src = `pics/${name}.jpg`;
  image.alt = `${name} birthday portrait`;

  const remaining = document.getElementById("days-remaining");
  if (difference === 0) remaining.textContent = "Birthday is today 🎉";
  else if (difference === 1) remaining.textContent = "Birthday is tomorrow";
  else if (difference > 1) remaining.textContent = `${difference} days left`;
  else if (difference === -1) remaining.textContent = "1 day ago";
  else remaining.textContent = `${Math.abs(difference)} days ago`;
}

function forward() {
  if (currentIndex < list_birthday.length - 1) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
    displayYear += 1;
  }
  updateBirthdayCard();
}

function previous() {
  if (currentIndex > 0) {
    currentIndex -= 1;
  } else {
    currentIndex = list_birthday.length - 1;
    displayYear -= 1;
  }
  updateBirthdayCard();
}

function go() {
  const value = document.getElementById("go-to-date").value;
  if (!value) return;

  const [year, month, day] = value.split("-").map(Number);
  displayYear = year;
  const found = list_birthday.findIndex(([m, d]) => m > month || (m === month && d >= day));

  if (found === -1) {
    currentIndex = 0;
    displayYear += 1;
  } else {
    currentIndex = found;
  }
  updateBirthdayCard();
}

function populatePeople() {
  const first = document.getElementById("names1");
  const second = document.getElementById("names2");
  list_birthday.forEach((entry, index) => {
    [first, second].forEach((select) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = entry[3];
      select.appendChild(option);
    });
  });
}

function calculate() {
  const p1 = document.getElementById("names1").value;
  const p2 = document.getElementById("names2").value;
  const older = document.getElementById("older");
  const diffAge = document.getElementById("diff-age");

  if (p1 === "" || p2 === "") {
    older.textContent = "Choose both people first.";
    diffAge.textContent = "";
    return;
  }

  const a = list_birthday[Number(p1)];
  const b = list_birthday[Number(p2)];
  const dateA = makeDate(a[2], a[0], a[1]);
  const dateB = makeDate(b[2], b[0], b[1]);

  if (dateA.getTime() === dateB.getTime()) {
    older.textContent = "They are the same age.";
    diffAge.textContent = "0 years, 0 months, 0 days";
    return;
  }

  const aIsOlder = dateA < dateB;
  const olderEntry = aIsOlder ? a : b;
  const olderDate = aIsOlder ? dateA : dateB;
  const youngerDate = aIsOlder ? dateB : dateA;
  const diff = calendarAge(olderDate, youngerDate);

  older.textContent = `${olderEntry[3]} is older by`;
  diffAge.textContent = `${diff[0]} years, ${diff[1]} months, ${diff[2]} days`;
}

function emailJsIsConfigured() {
  return !Object.values(EMAILJS_CONFIG).some((value) => value.startsWith("YOUR_EMAILJS_"));
}

async function Submit(event) {
  event?.preventDefault();
  const form = document.getElementById("birthday-request-form");
  const submitButton = document.getElementById("submit");
  const status = document.getElementById("request-status");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (!emailJsIsConfigured()) {
    status.className = "request-status error";
    status.textContent = "Email sending is not configured yet. Add your EmailJS IDs in script1.js.";
    return;
  }

  if (typeof emailjs === "undefined") {
    status.className = "request-status error";
    status.textContent = "The email service did not load. Check your connection and try again.";
    return;
  }

  submitButton.disabled = true;
  const originalText = submitButton.textContent;
  submitButton.textContent = "Sending…";
  status.className = "request-status sending";
  status.textContent = "Sending request…";

  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        request_name: document.getElementById("request-name").value.trim(),
        request_birthday: document.getElementById("request-bday").value,
        request_email: document.getElementById("request-email").value.trim(),
        submitted_at: new Date().toLocaleString()
      },
      { publicKey: EMAILJS_CONFIG.publicKey }
    );
    status.className = "request-status success";
    status.textContent = "Request sent successfully!";
    form.reset();
  } catch (error) {
    console.error("Birthday request email failed:", error);
    status.className = "request-status error";
    status.textContent = "The request could not be sent. Please try again.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
}

function enableSwipe() {
  const card = document.getElementById("birthday-card");
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
  document.getElementById("go-to-date").value = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  setInitialBirthday();
  populatePeople();
  updateBirthdayCard();
  enableSwipe();

  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, select, textarea")) return;
    if (event.key === "ArrowLeft") previous();
    if (event.key === "ArrowRight") forward();
  });
}

init();
