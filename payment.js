//payment succession

// JavaScript code for responsiveness (optional)
window.addEventListener('resize', adjustLayout);

function adjustLayout() {
  var paymentDetails = document.getElementById('paymentDetails');
  if (window.innerWidth < 600) {
    paymentDetails.style.fontSize = '14px';
  } else {
    paymentDetails.style.fontSize = '16px';
  }
}



  