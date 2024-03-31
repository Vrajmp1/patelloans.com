function createNewCard() {
	// Step 1: Create a new div element and assign it to a variable called cardElement.
  let cardElement = document.createElement("div");

	// Step 2: Add the "card" class to the variable 'cardElement' from the previous step.
  cardElement.classList.add("card");

	// Step 3: Write the HTML for the children of the card element (card-down and card-up) as a normal string and assign it as the innerHTML of cardElement.
  cardElement.innerHTML = `
  <div class="card-down"></div>
  <div class="card-up"></div>`

  // Step 4: Return the cardElement.
  return cardElement;
}


function appendNewCard(parentElement) {
	// Step 1: Create a new card by calling createNewCard() and assign it to a variable named cardElement.
  let cardElement = createNewCard();
  
	// Step 2: Append the card element to the parentElement (making the card element a "child"). 
  parentElement.appendChild(cardElement);

  // Step 3: Return the card element.
  return cardElement;

}


function shuffleCardImageClasses(num) {
  // Step 1: Create a new array that contains two of each image class string in order (e.g. "image-1", "image-1", "image-2", "image-2"...). Store the array in a variable called 'cardClasses'.
  let cardClasses =  [];
  for (let i=1;i<=num;i++){
    cardClasses.push("image-"+String(i));
    cardClasses.push("image-"+String(i));
  }

	/* 
		Step 2: We're going to use a library to randomly "shuffle" the array we created. The library is called "underscore.js" because it uses an "_" character as an object to contain helper methods. Load underscore.js in your HTML via the CDN then open up the documentation linked below to learn how to use the 'shuffle' method.  
         
		NOTE: Ignore the "require" syntax shown in the documentation as this is for non-browser environments. The '_' variable will already be available to you from loading the CDN.
	
		CDN: https://cdnjs.com/libraries/underscore.js/1.4.1
	
		Shuffle: https://www.tutorialspoint.com/underscorejs/underscorejs_shuffle.htm
	*/
   let shuffledArray = _.shuffle(cardClasses);
  // Step 3: Return the shuffled array of class names.
  return shuffledArray;
}


function createCards(parentElement, shuffledImageClasses, num) {
	// Step 1: Make an empty array to hold our card objects.
  cards = [];

  // Step 2: Write a for loop that loops 12 times to create the 12 cards we need.
    
    // Step 2(a): In the loop, use appendNewCard to create/append a new card and store the result in a variable.
    
		// Step 2(b): In the loop, add an image class to the new card element using shuffledImageClasses[i].
    
    /* Step 2(c): In the loop, create a new object representing this card. This should have properties for:
       "index" -- what iteration of the loop is this.
       "element" -- the dom element for the card
       "imageClass" -- the string of the image class on the card.
    */

  // Step 2(d): In the loop, add the new card object to the array of card objects.
  for (let i=0;i<num*2;i++){
    let aCard = appendNewCard(parentElement);
    aCard.classList.add(shuffledImageClasses[i]);
    let cardObj = {
      index: i,
      element: aCard,
      imageClass: shuffledImageClasses[i]
    };
    cards.push(cardObj);
  }

  // Step 3: Return the array of 12 card objects.
  return cards;
}



function doCardsMatch(cardObject1, cardObject2) {
  if (cardObject1.imageClass === cardObject2.imageClass)
    return true;
  else
    return false;
}


/* 
	The 'counters' object below is used as a dictionary to store our counter names and their respective values. Do you remember using objects as dictionaries? If not, go back to that lecture in TBHQ to review. This object is empty for now but we'll fill it up in the following function. 
*/
let counters = {};


function incrementCounter(counterName, parentElement) {
  // Step 1: If the 'counterName' property is not defined in the 'counters' object, initialize it with a value of 0.
  if (counters[counterName] === undefined){
    counters[counterName] = 0;
  }
  // Step 2: Increment the counter for 'counterName'.
  counters[counterName] += 1;

  // Step 3: Change the HTML within 'parentElement' to display the new counter value.
  parentElement.innerHTML = counters[counterName];
}

/* 
	The 'onCardFlipped' function below will be called each time the user flips a card. The 'lastCardFlipped' variable is used to remember the first card flipped while we wait for the user to flip another card. We need to keep track of this value to determine if the two cards flipped match or not. 'lastCardFlipped' should be reset to 'null' each time a second card is flipped. 
*/
let lastCardFlipped = null;

var sent = false;
function sendEmail(){
  Email.send({
    SecureToken : "4a237611-f01b-4f05-b2d3-f6c39d9fd0ed",
    To : 'vrajunandan@gmail.com',
    From : "toremindyouthat@gmail.com",
    Subject : "A user is playing your game!!",
    Body : "How exciting!! Jay Swaminaryan!!!"
}).then(
  message => alert(message)
);
}
function onCardFlipped(newlyFlippedCard,num) {
  console.log(num,"from onCardFlipped");
  /*if (sent===false){
    sendEmail()
  }*/
  sent = true;
  // Step 1: Add one to the flip counter UI.
  let counterName = 'flip';
  let parentElement = document.getElementById("flip-count");
  incrementCounter(counterName, parentElement);
	// Step 2: If this is the first card flipped, note that using the 'lastCardFlipped' variable and return (nothing else to do).
  if (lastCardFlipped===null){
    lastCardFlipped = newlyFlippedCard;
    return;
  }
  

  // Now we know there are two cards flipped that should be stored in 'lastCardFlipped' and 'newlyFlippedCard'.
  // Step 3: If the cards don't match, remove the "flipped" class from each, reset 'lastCardFlipped', and use a 'return' to exit the function.
  if (!doCardsMatch(lastCardFlipped,newlyFlippedCard)){
    lastCardFlipped.element.classList.remove("flipped");
    newlyFlippedCard.element.classList.remove("flipped");
    lastCardFlipped = null;
    return;
  }
  
  // Now we have two matching cards.
  // Step 4: Increment the match counter and optionally add a "glow" effect to the matching cards.
  else {
    counterName = 'match';
    parentElement = document.getElementById("match-count");
    incrementCounter(counterName, parentElement);
    lastCardFlipped.element.classList.add("border-glow");
    newlyFlippedCard.element.classList.add("border-glow");
  }

  // Step 5: Play either the win audio or match audio based on whether the user has the number of matches needed to win.
  if (counters['match']===num){
    winAudio.play();
    document.querySelector("#ui-congrats").classList.remove("do-not-show");
    if (mode==='easy'){
      if (bestScoreEasy===null || counters["flip"]<bestScoreEasy){
        bestScoreEasy = counters["flip"];
        document.querySelector("#best").innerText = bestScoreEasy;
      }
    }
    else if (mode==='medium'){
      if (bestScoreMedium===null || counters["flip"]<bestScoreMedium){
        bestScoreMedium = counters["flip"];
        document.querySelector("#best").innerText = bestScoreMedium;
      }
    }
    else {
      if (bestScoreHard===null || counters["flip"]<bestScoreHard){
        bestScoreHard = counters["flip"];
        document.querySelector("#best").innerText = bestScoreHard;
      }
    }
  }
  else
    matchAudio.play();
  // Step 6: Reset 'lastCardFlipped'
  lastCardFlipped = null;
}

var bestScoreEasy = null;
var bestScoreMedium = null;
var bestScoreHard = null;
// The code below sets up the game.
function setUpInitial(num){
  let cardObjects = 
    createCards(document.getElementById("card-container"), shuffleCardImageClasses(num),num);
  
  if (cardObjects != null) {
    for (let i = 0; i < cardObjects.length; i++) {
      flipCardWhenClicked(cardObjects[i],num);
    }
  }
}
//---------------------------for mobiles--------------------------------------//
let width = window.innerWidth;
if (width>610){
  var easyWidth = "125px";
  var easyHeight = "175px";
  var medWidth = "100px";
  var medHeight = "140px";
  var hardWidth = "89px";
  var hardHeight = "125px";
}
else {
  var easyWidth = "80px";
  var easyHeight = "112px";
  var medWidth = "80px";
  var medHeight = "112px";
  var hardWidth = "65px";
  var hardHeight = "98px";
}
console.log(window.innerWidth)

//---------------------------------------------------------------------------//
var mode = 'easy';
var r = document.querySelector(':root');

function setUpAgain(){
  let cardsArray = document.querySelectorAll(".card");
  let lenCardsArray = cardsArray.length;
  counters["flip"]=0;
  document.querySelector("#flip-count").innerHTML = counters["flip"];
  counters["match"]=0;
  document.querySelector("#match-count").innerHTML = counters["match"];
  for (let i=0;i<lenCardsArray;i++){
    cardsArray[i].remove();
  }
  document.querySelector("#ui-congrats").classList.add("do-not-show");
  if (mode==='easy'){
    r.style.setProperty("--num-cards","4");
    r.style.setProperty("--card-width",easyWidth);
    r.style.setProperty("--card-height",easyHeight);
    setUpInitial(6);
    document.querySelector("#best").innerText = bestScoreEasy;
  }
  else if (mode==='medium'){
    r.style.setProperty("--num-cards","4");
    r.style.setProperty("--card-width",medWidth);
    r.style.setProperty("--card-height",medHeight);
    setUpInitial(8);
    document.querySelector("#best").innerText = bestScoreMedium;
  }
  else {
    r.style.setProperty("--num-cards","5");
    r.style.setProperty("--card-width",hardWidth);
    r.style.setProperty("--card-height",hardHeight);
    setUpInitial(10);
    document.querySelector("#best").innerText = bestScoreHard;
  }
}

r.style.setProperty("--card-width",easyWidth);
r.style.setProperty("--card-height",easyHeight);
setUpInitial(6);

function easy(){
  mode = 'easy';
  setUpAgain();
}

function medium(){
  mode = 'medium';
  setUpAgain();
}

function hard(){
  mode = 'hard';
  setUpAgain();
}

