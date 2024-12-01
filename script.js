document.getElementById('loginBtn').addEventListener('click', function() {
    var formContainer = document.getElementById('loginFormContainer');
    formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
  });
  
function validateForm() {
document.getElementById('usernameError').innerText = '';
document.getElementById('passwordError').innerText = '';


var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

var valid = true;

if (username === '') {
    document.getElementById('usernameError').innerText = 'Username is required.';
    valid = false;
}

if (password === '') {
    document.getElementById('passwordError').innerText = 'Password is required.';
    valid = false;
}

if (valid) {
    document.getElementById('loginFormContainer').style.display = 'none';
}

return valid;
}
function validateRegistrationForm() {
const email = document.getElementById("regEmail").value;
const username = document.getElementById("regUsername").value;
const bday = document.getElementById()
const password = document.getElementById("regPassword").value;
const confirmPassword = document.getElementById("confirmPassword").value;



document.getElementById("emailError").innerText = "";
document.getElementById("regUsernameError").innerText = "";
document.getElementById("regPasswordError").innerText = "";
document.getElementById("confirmPasswordError").innerText = "";

let isValid = true;

if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Please enter a valid email.";
    isValid = false;
}


if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
    isValid = false;
}

return isValid;
}
function showLoginForm() {
document.getElementById("loginFormContainer").style.display = "block";
document.getElementById("registrationFormContainer").style.display = "none";
}

function showRegistrationForm() {
document.getElementById("loginFormContainer").style.display = "none";
document.getElementById("registrationFormContainer").style.display = "block";
}

// Review javascript
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

images.forEach((img, index) => {
  img.style.display = index === 0 ? 'block' : 'none';
});

function changeImage(direction) {
  images[currentIndex].style.display = 'none';
  
  currentIndex = (currentIndex + direction + images.length) % images.length;
  
  images[currentIndex].style.display = 'block';
}
let currentStartIndex = 0;
const reviews = document.querySelectorAll('.malupiton-review');
const reviewsToShow = 3;
const reviewCount = reviews.length;

function showReviews() {
    currentStartIndex = (currentStartIndex + 1) % reviewCount;

    reviews.forEach((review) => {
        review.style.display = 'none';
    });


    for (let i = 0; i < reviewsToShow; i++) {
        const index = (currentStartIndex + i) % reviewCount;
        reviews[index].style.display = 'block';
    }
}

setInterval(showReviews, 2000);
showReviews();
