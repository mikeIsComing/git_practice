function openSwitchMenu() {
  document.getElementById("show-SM-menu").style.display = "block";
}

// function for change to dark mode

function switchToDark() {
  document.body.style.backgroundColor = "#4d4f53";
  document.body.style.color = "#fff";
  document.getElementById("show-SM-menu").style.display = "none";
  document.getElementById("border-line").style.backgroundColor = "#fff";
  document.getElementById("ul-box").style.borderColor = "#fff";
}

// function for change to light mode

function switchToLight() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.getElementById("show-SM-menu").style.display = "none";
  document.getElementById("border-line").style.backgroundColor = "#000";
  document.getElementById("ul-box").style.borderColor = "#000";
}
