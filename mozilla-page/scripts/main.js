function setUserName() {
  let myName = prompt("Enter your name please");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
let myImg = document.querySelector("img");

//--- Function to change the logo ---
myImg.addEventListener("click", () => {
  let imgSrc = myImg.getAttribute("src");
  if (imgSrc === "img/firefox-icon.png")
    myImg.setAttribute("src", "img/firefox-alt.png");
  else myImg.setAttribute("src", "img/firefox-icon.png");
});

if (!localStorage.getItem("name")) setUserName();
else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});
