document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let matric = document.getElementById("matric").value;
    let password = document.getElementById("password").value;

    // Demo login details
    if (matric === "DOU123" && password === "1234") {

        localStorage.setItem("loggedIn", "true");

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Matric Number or Password");

    }
});