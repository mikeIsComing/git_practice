function openSwitchMenu() {
  document.getElementById("show-SM-menu").style.display = "block";
}

// function for change to dark mode

function switchToDark() {
  document.body.style.backgroundColor = "#4d4f53";
  document.body.style.color = "#fff";
  document.getElementById("show-SM-menu").style.display = "none";
}

// function for change to light mode

function switchToLight() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.getElementById("show-SM-menu").style.display = "none";
}
