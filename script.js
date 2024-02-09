let productPrice = 0; // Initializing productPrice variable outside the function

  function openModal() {
      document.getElementById('productModal').style.display = 'block';
  }

  function closeModal() {
      document.getElementById('productModal').style.display = 'none';
  }

  function calculateTotal() {
      let quantity = parseInt(document.getElementById('quantity').value);
      
      if (document.querySelector('input[name="productType"]:checked')) {
          let productName = document.querySelector('input[name="productType"]:checked').value;
          
          if (productName === "DEO SPRAY") {
              productPrice = 89;
          } else if (productName === "DEOMON SOAP") {
              productPrice = 49;
          }
      }
      
      let totalPrice = quantity * productPrice;
      document.getElementById('totalPrice').innerText = 'Total: ₱' + totalPrice.toFixed(2);
  }

  function confirmPurchase() {
      let name = document.getElementById('name').value.trim();
      let address = document.getElementById('address').value.trim();
      let contactNumber = document.getElementById('contactNumber').value.trim();
      
      if (name === '' || address === '' || contactNumber === '') {
          alert("PLEASE FILL OUT THE FORM");
      } else {
          alert("PURCHASE SUCCESSFUL");
          document.getElementById('quantity').value = 1; // Reset quantity
          document.getElementById('name').value = ''; // Reset name
          document.getElementById('address').value = ''; // Reset address
          document.getElementById('contactNumber').value = ''; // Reset contact number
          document.getElementById('totalPrice').innerText = ''; // Reset total price
          productPrice = 0; // Reset product price
          closeModal();
      }
  }

// To validate the form and show the alert -->

function validateForm() {
  // Get the values of the form inputs
  var name = document.getElementsByName("Name")[0].value;
  var email = document.getElementsByName("Email")[0].value;
  var subject = document.getElementsByName("Subject")[0].value;
  var message = document.getElementsByName("Message")[0].value;

  // Check if all fields are filled
  if (name && email && subject && message) {
    // If all fields are filled, show the thank you alert
    alert("THANK YOU! WE WILL REVIEW YOUR MESSAGE IMMEDIATELY");
  } else {
    // If any field is empty, show an alert to fill all fields
    alert("Please fill in all fields before sending your message.");
  }
}