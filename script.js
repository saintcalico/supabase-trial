document.getElementById('checkoutForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Gather form data
  const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      
  };

  // Save order details to localStorage (optional)
  localStorage.setItem('orderDetails', JSON.stringify(formData));

  // Show confirmation message
  alert(`Thank you, ${formData.firstName}! Your order has been placed successfully.`);
  window.location.href = 'index.html'; // Redirect to homepage
});