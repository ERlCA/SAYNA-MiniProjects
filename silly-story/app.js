const custName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "DisneyLand", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

const monkey = document.querySelector(".monkey");

//---- Function Declaration ---- //
const randomValueFromArray = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

const result = () => {
  const Xitem = randomValueFromArray(insertX);
  const Yitem = randomValueFromArray(insertY);
  const Zitem = randomValueFromArray(insertZ);

  let newStory = storyText;

  setTimeout(monkeyLaughing, 1500);
  if (story.classList.contains("visible"))
    story.classList.remove("visible");

  if (custName.value !== "") {
    newStory = newStory.replaceAll("Bob", custName.value);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + " stone";
    const temperature = Math.round((94 - 32) * 5 / 9) + " Centigrade";

    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
  }

  newStory = newStory.replaceAll(":insertx:", Xitem);
  newStory = newStory.replaceAll(":inserty:", Yitem);
  newStory = newStory.replaceAll(":insertz:", Zitem);
  story.textContent = newStory;

  setTimeout(() => {
    story.classList.add("visible")
    custName.focus();
  }, 500);
  custName.value = "";
};

const monkeyLaughing = () => {
  monkey.classList.add("moving");
  setTimeout(() => monkey.classList.remove("moving"), 2000);
};

/*---- Calling functions -----*/
randomize.addEventListener("click", result);

monkey.addEventListener("click", monkeyLaughing);

/*----- Animating the horizontal line ----*/
custName.addEventListener("focusin", () => {
  custName.nextElementSibling.setAttribute("class", "full-width");
});
custName.addEventListener("focusout", () => {
  custName.nextElementSibling.removeAttribute("class", "full-width");
});

// /*----- Changing the input style -----*/
// custName.addEventListener("keyup", (e) => {
//   console.log(e);
//   if (e.target.value.trim() !== "")
//     custName.setAttribute("class", "not-empty");
//   else custName.removeAttribute("class");
// });