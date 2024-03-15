const user_login = document.getElementById("user-login");
const user_password = document.getElementById("user-password");
const login_btn = document.getElementById("login-btn");
const signup_username = document.getElementById("signup-username");
const signup_email = document.getElementById("signup-email");
const signup_password = document.getElementById("signup-password");
const signup_btn = document.getElementById("signup-btn");

login_btn.addEventListener("click", function () {
  const loginData = {
    username: user_login.value,
    password: user_password.value,
  };

  fetch("https://localhost/todo_list_db/backend/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        window.location.href = "https://";
      } else {
        alert("Login failed. Please check your username and password.");
      }
    })
    .catch((error) => console.error("Error:", error));
});

/* signup_btn.addEventListener('click', function() {
    const signupData = {
        username: signup_username.value,
        email: signup_email.value,
        password: signup_password.value
    };

   
    fetch('http://localhost/todo_list_db/backend/signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status ==="success") {
        
            window.location.href = '../index.html';
        } else {
            
            alert('Signup failed. Please check your information and try again.');
        }
    })
    .catch(error => console.error('Error:', error));
}); */
