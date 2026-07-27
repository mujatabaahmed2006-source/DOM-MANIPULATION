function showPassword() {

    var password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

}

function loginForm() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "{A-Z}") {
        alert("Login Successful!");
    } else {
        alert("Invalid Username or Password!");
    }

    return false;
}