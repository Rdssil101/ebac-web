const divForm = document.getElementById('validations-with-javascript');

divForm.addEventListener('submit', function(even) {
   even.preventDefault();

function compare_values() {

  const number_one = document.getElementById("numberOne").value;
  const number_two = document.getElementById("numberTwo").value;

  const numberOne = parseInt(number_one);
  const numberTwo = parseInt(number_two);

  if (!isNaN(numberOne) && !isNaN(numberTwo)) {

    if (numberOne === numberTwo) {
      alert("The Numbers Are The Same. Enter Different Values!");

    } else if (numberOne > numberTwo) {
      alert("The First Number Is Greater Than The Second.");

    } else {
      alert("Congratulations :)) ! The Second Number Is Greater Than The First.");
    }

  } else {
    alert("Please Enter Valid Integers.");
  }
}
   compare_values();
});

console.log(divForm);