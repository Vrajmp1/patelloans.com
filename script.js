function calculate(){
  let la = Number(document.getElementById("loan-amount").value);
  let rate = Number(document.getElementById("interest-rate").value);
  let term = document.getElementById("loan-term").value;
  console.log(term);
  
  term = Number(term.slice(0,2));
  term = term*12; //convert to months
  console.log(term);
  
  console.log(`loan amount: $${la},rate: ${rate}%,term: ${term} months`);
  rate = rate/1200; //convert rate to the rate per month

  result = (-(la*rate)/(1-(1+rate)**term)+(la*rate));
  if (Number.isNaN(result)){
    result = 0;
  }
  console.log(result);
  document.getElementById("result").innerHTML = '$'+result.toFixed(2);
  
}
