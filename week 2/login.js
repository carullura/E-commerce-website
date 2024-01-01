function login() {
   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    if (username !== "" && password !== "") {
        
        window.location.href = "home.html";
        
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
