document.getElementById("login").addEventListener("click", function () {
  let email = document.getElementById("username").value;
  let pswd = document.getElementById("password").value;

  if (email == "") {
    document.getElementById("eErr").style.display = "block";
  } else {
    document.getElementById("eErr").style.display = "none";
  }

  if (pswd == "") {
    document.getElementById("pErr").style.display = "block";
  } else {
    document.getElementById("pErr").style.display = "none";
  }

  if (email !== "" && pswd !== "") {
    alert("Login successfully");
  }
});