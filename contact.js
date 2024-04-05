document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting to server
  
    // Get form fields
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var reason = document.getElementById('reason');
    var message = document.getElementById('message');
  
    // Validate name
    if (name.value.trim() === '') {
      alert('Please enter your name.');
      return;
    }
  
    // Validate email with a simple pattern
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Validate phone
    var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phone.value.match(phonePattern)) {
      alert('Please enter a valid phone number. Format: 123-456-7890');
      return;
    }
  
    // Validate reason
    if (reason.value === '') {
      alert('Please select a reason for contact.');
      return;
    }
  
    // Validate message
    if (message.value.trim() === '') {
      alert('Please enter your message.');
      return;
    }
  
    // If all validations pass, you can submit the form
    alert('Form submitted successfully!');
  });
  