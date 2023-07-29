function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Get the values from the form
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;
  
    // Validate the email, mobile, message, address, gender, and age fields
    if (!validateEmail(email)) {
      document.getElementById('response').textContent = 'Invalid email address.';
      return;
    }
  
    if (!validateMobile(mobile)) {
      document.getElementById('response').textContent = 'Invalid mobile number.';
      return;
    }
  
    if (message.trim() === '') {
      document.getElementById('response').textContent = 'Message is required.';
      return;
    }
  
    if (address.trim() === '') {
      document.getElementById('response').textContent = 'Address is required.';
      return;
    }
  
    if (gender === '') {
      document.getElementById('response').textContent = 'Gender is required.';
      return;
    }
  
    if (isNaN(age) || age <= 0) {
      document.getElementById('response').textContent = 'Invalid age.';
      return;
    }
  
    // If validation passes, display a success message
    document.getElementById('response').textContent = 'Form submitted successfully!';
  }
  
  function validateEmail(email) {
    // A basic email validation check
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function validateMobile(mobile) {
    // A basic mobile number validation check
    var re = /^\d{10}$/;
    return re.test(mobile);
  }