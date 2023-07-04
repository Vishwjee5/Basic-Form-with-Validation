function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var password = document.forms["myForm"]["password"].value;
  var age = document.forms["myForm"]["age"].value;
  var gender = document.forms["myForm"]["gender"].value;
  var date = document.forms["myForm"]["date"].value;
  var color = document.forms["myForm"]["color"].value;

  var errorFlag = false;
  var errorMessages = [];

  // Name validation
  if (name == "") {
    errorFlag = true;
    errorMessages.push("Name is required");
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email == "") {
    errorFlag = true;
    errorMessages.push("Email is required");
  } else if (!emailRegex.test(email)) {
    errorFlag = true;
    errorMessages.push("Invalid email format");
  }

  // Phone number validation
  var phoneRegex = /^\d{10}$/;
  if (phone == "") {
    errorFlag = true;
    errorMessages.push("Phone number is required");
  } else if (!phoneRegex.test(phone)) {
    errorFlag = true;
    errorMessages.push("Invalid phone number format");
  }

  // Password validation
  if (password == "") {
    errorFlag = true;
    errorMessages.push("Password is required");
  }

  // Age validation
  if (age == "") {
    errorFlag = true;
    errorMessages.push("Age is required");
  }

  // Gender validation
  if (gender == "") {
    errorFlag = true;
    errorMessages.push("Gender is required");
  }

  // Date validation
  if (date == "") {
    errorFlag = true;
    errorMessages.push("Date is required");
  }

  // Color validation
  if (color == "") {
    errorFlag = true;
    errorMessages.push("Color is required");
  }

  // Display error messages if any
  if (errorFlag) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = errorMessages.join("<br>");
    return false;
  }
}
