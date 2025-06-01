//Word banks
const subjects = ["The cat", "My brother", "A robot", "The dog", "Our teacher"];
const verbs = ["jumped over", "ran toward", "laughed at", "sneezed on", "painted"];
const adjectives = ["a smelly", "a dancing", "an angry", "a glowing", "a tiny"];
const nouns = ["pumpkin", "spaceship", "taco", "squirrel", "snowman"];
const phrases = ["before sunrise", "during math class", "while breakdancing", "on a Tuesday", "without pants"];

//Track selected words
let selectedWords = ["", "", "", "", ""]; // [subject, verb, adjective, noun, phrase]

//Output element
const storyOutput = document.getElementById("story-text");

//Button generation function
function populateButtons(category, array, index) {
  const container = document.getElementById(`${category}-buttons`);

  array.forEach(word => {
    const btn = document.createElement("button");
    btn.textContent = word;
    btn.addEventListener("click", () => {
      selectedWords[index] = word;
      updateStory();
    });
    container.appendChild(btn);
  });
}
