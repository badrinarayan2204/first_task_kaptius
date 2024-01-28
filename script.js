document.addEventListener('DOMContentLoaded', (event) => {
    const formOpenBtn = document.querySelector("#form-open"),
        home = document.querySelector(".home"),
        formContainer = document.querySelector(".form_container"),
        formCloseBtn = document.querySelector(".form_close"),
        signupBtn = document.querySelector("#signup"),
        loginBtn = document.querySelector("#login"),
        pwShowHide = document.querySelectorAll(".pw_hide");
  
    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));
    pwShowHide.forEach((icon) => {
        icon.addEventListener("click", () => {
            let getPwInput = icon.parentElement.querySelector("input");
            if (getPwInput.type === "password") {
                getPwInput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye");
            } else {
                getPwInput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
      var signUpForm = document.querySelector('form');
      signUpForm.addEventListener('submit', function(event) {
          var name = document.getElementById('name').value;
          var nameRegex = /^[a-zA-Z\s]+$/;
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var confirmPassword = document.getElementById('confirmPassword').value;
          var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
          // Email validation
          if (!emailRegex.test(email)) {
              alert('Please enter a valid email address.');
              event.preventDefault(); 
          }
  
          if (!nameRegex.test(name)) {
              alert("Invalid name");
              event.preventDefault();
          } 
  
          // Password confirmation
          if (password !== confirmPassword) {
              alert('Passwords do not match.');
              event.preventDefault(); 
          }
          if (password == confirmPassword) {
              alert('Signup successful!');
  
              // Redirect to login page
              window.location.href = 'login.html';
              
              // Get the existing users from local storage if they exist, or initialize an empty array
              var users = JSON.parse(localStorage.getItem('users')) || [];
  
              // Check if the user already exists
              if (users.some(function(user) { return user.email === email; })) {
                  alert('User with this email already exists');
                  return;
              }
  
              // Add the new user to the array
              users.push({ name: name, email: email, password: password });
  
              // Store the updated array in local storage
              localStorage.setItem('users', JSON.stringify(users));
          }
      });
  });
  
  function clickCounter() {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("demo").innerHTML = localStorage.clickcount;
    localStorage.removeItem('clickcount');
  } 
  
  let lastname = localStorage.getItem('lastname');