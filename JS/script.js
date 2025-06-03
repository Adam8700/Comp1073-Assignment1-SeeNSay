//Word banks
const subjects = ["The cat", "My brother", "A robot", "The dog", "Our teacher"];
const verbs = ["jumped over", "ran toward", "laughed at", "sneezed on", "painted"];
const adjectives = ["a smelly", "a dancing", "an angry", "a glowing", "a tiny"];
const nouns = ["pumpkin", "spaceship", "taco", "squirrel", "snowman"];
const phrases = ["before sunrise", "during math class", "while breakdancing", "on a Tuesday", "without pants"];

const wordBanks = [subjects, verbs, adjectives, nouns, phrases];
let currentIndices = [0, 0, 0, 0, 0]; // Track index per word list
let selectedWords = ["", "", "", "", ""]; // Final story selections

//Output element
const storyOutput = document.getElementById("story-text");

// Highlight function
function highlightWord(columnIndex, wordIndex) {
  const lists = document.querySelectorAll('.verb-list');
  const items = lists[columnIndex].querySelectorAll('.verb');
  items.forEach((item, idx) => {
    item.classList.toggle('selected', idx === wordIndex);
  });
}

//Update story sentence output
function updateStory() {
  const outputWords = selectedWords.map(word => word !== "" ? word : "_____");
  storyOutput.textContent = `${outputWords[0]} ${outputWords[1]} ${outputWords[2]} ${outputWords[3]} ${outputWords[4]}.`;
}

// Add event listeners for each button
for (let i = 0; i < 5; i++) {
  const button = document.getElementById(`button${i + 1}`);
  button.addEventListener("click", () => {
    currentIndices[i] = (currentIndices[i] + 1) % wordBanks[i].length;
    selectedWords[i] = wordBanks[i][currentIndices[i]];
    highlightWord(i, currentIndices[i]);
    updateStory();
  });
}

// Reset story
document.getElementById("reset-btn").addEventListener("click", () => {
  selectedWords = ["", "", "", "", ""];
  currentIndices = [0, 0, 0, 0, 0];
  updateStory();

  // Clear all highlights
  document.querySelectorAll('.verb-list').forEach(list => {
    list.querySelectorAll('.verb').forEach(item => {
      item.classList.remove('selected');
    });
  });
});

//Surprise button logic
document.getElementById("surprise-btn").addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    currentIndices[i] = Math.floor(Math.random() * wordBanks[i].length);
    selectedWords[i] = wordBanks[i][currentIndices[i]];
    highlightWord(i, currentIndices[i]);
  }
  updateStory();
});

// Helper function to grab a random word
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
