// //listen to submit
// document.getElementById('loan-form').addEventListener('submit', calculateResults);

// function calculateResults(e) {
//   //define ui variables
//   const amount = document.getElementById('amount');
//   const interest = document.getElementById('interest');
//   const years = document.getElementById('years');
//   const monthlyPayment = document.getElementById('monthly-payment');
//   const monthlyInterest = document.getElementById('monthly-interest');
//   const totalInterest = document.getElementById('total-interest');

//   const principal = parseFloat(amount.value);
//   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//   const calculatedPayments = parseFloat(years.value) * 12;

//   //compute monthly payment
//   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//   const monthly = (principal * x * calculatedInterest) / (x - 1);
//   if (isFinite(monthly)) {
//     monthlyPayment.value = monthly.toFixed(2);
//     monthlyInterest.value = (monthly * calculatedPayments).toFixed(2);
//     totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
//   }
//   else {
//     console.log("please check your numbers");
//   }

//   e.preventDefault();
// }

// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  //get results
  document.getElementById('results').style.display = 'none';
  //show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    //get results
    document.getElementById('results').style.display = 'block';
    //show loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }


}

function showError(error) {
  //get results
  document.getElementById('results').style.display = 'none';
  //show loader
  document.getElementById('loading').style.display = 'none';

  //show error
  //create element
  const errorDiv = document.createElement('div');


  //get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //add class
  errorDiv.className = 'alert alert-danger';

  //append child and add text
  errorDiv.append(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading);

  //clear error after 3s
  setTimeout(clearError, 3000);//here 3000 is in ms which is 3s

}

function clearError() {
  document.querySelector('.alert').remove();
}