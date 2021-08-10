
function addPrices() {

var x = 0;
var y = 0;
var z = 0;
var priceTotal;

var checkboxeschips = document.querySelector(`input[value="Kettle Cooked Chips"]:checked`);
var checkboxesramen = document.querySelector(`input[value="Ramen Noodles"]:checked`);
var checkboxescake = document.querySelector(`input[value="Junior's Cheesecake"]:checked`);

if (checkboxeschips) {
  x = x+3.32;
} 
if (checkboxesramen){
  y =  y+0.5;
}
if (checkboxescake){
  z = z+9.95;
} 

priceTotal = x+y+z;

console.log(priceTotal);

document.getElementById("totalprice").innerHTML = priceTotal;


}


function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}


function checkboxes() {
  
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', (event) => {
    alert("You Chose: " + getSelectedCheckboxValues('Foods') +  
     " Click the picture to buy!");
  });
}