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

//Run this on page load to populate all columns
populateButtons("subject", subjects, 0);
populateButtons("verb", verbs, 1);
populateButtons("adjective", adjectives, 2);
populateButtons("noun", nouns, 3);
populateButtons("phrase", phrases, 4);

//Update story display
function updateStory() {
  const outputWords = selectedWords.map(word => word !== "" ? word : "_____");
  storyOutput.textContent = `${outputWords[0]} ${outputWords[1]} ${outputWords[2]} ${outputWords[3]} ${outputWords[4]}.`;
}

document.getElementById("reset-btn").addEventListener("click", () => {
  selectedWords = ["", "", "", "", ""];
  updateStory();
});

//Surprise button logic
document.getElementById("surprise-btn").addEventListener("click", () => {
  selectedWords = [
    getRandom(subjects),
    getRandom(verbs),
    getRandom(adjectives),
    getRandom(nouns),
    getRandom(phrases),
  ];
  updateStory();
});

// Helper function to grab a random word
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
