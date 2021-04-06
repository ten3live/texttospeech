const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./img/A.jpg",
    text: "A",
  },
  {
    image: "./img/B.jpg",
    text: "B",
  },
  {
    image: "./img/C.jpg",
    text: "C",
  },
  {
    image: "./img/D.jpg",
    text: "D",
  },
  {
    image: "./img/E.jpg",
    text: "E",
  },
  {
    image: "./img/F.jpg",
    text: "F",
  },
  {
    image: "./img/G.jpg",
    text: "G",
  },
  {
    image: "./img/H.jpg",
    text: "H",
  },
  {
    image: "./img/I.jpg",
    text: "I",
  },
  {
    image: "./img/J.jpg",
    text: "J",
  },
  {
    image: "./img/K.jpg",
    text: "K",
  },
  {
    image: "./img/L.jpg",
    text: "L",
  },
  {
    image: "./img/M.jpg",
    text: "M",
  },
  {
    image: "./img/N.jpg",
    text: "N",
  },
  {
    image: "./img/O.jpg",
    text: "O",
  },
  {
    image: "./img/P.jpg",
    text: "P",
  },
  {
    image: "./img/Q.jpg",
    text: "Q",
  },
  {
    image: "./img/R.jpg",
    text: "R",
  },
  {
    image: "./img/S.jpg",
    text: "S",
  },
  {
    image: "./img/T.jpg",
    text: "T",
  },
  {
    image: "./img/U.jpg",
    text: "U",
  },
  {
    image: "./img/V.jpg",
    text: "V",
  },
  {
    image: "./img/W.jpg",
    text: "W",
  },
  {
    image: "./img/X.jpg",
    text: "X",
  },
  {
    image: "./img/Y.jpg",
    text: "Y",
  },
  {
    image: "./img/Z.jpg",
    text: "Zed",
  },

  {
    image: "./img/drink.jpg",
    text: "I'm Thirsty",
  },
  {
    image: "./img/food.jpg",
    text: "I'm Hungry",
  },
  {
    image: "./img/tired.jpg",
    text: "I'm Tired",
  },
  {
    image: "./img/hurt.jpg",
    text: "I'm Hurt",
  },
  {
    image: "./img/happy.jpg",
    text: "I'm Happy",
  },
  {
    image: "./img/angry.jpg",
    text: "I'm Angry",
  },
  {
    image: "./img/sad.jpg",
    text: "I'm Sad",
  },
  {
    image: "./img/scared.jpg",
    text: "I'm Scared",
  },
  {
    image: "./img/outside.jpg",
    text: "I Want To Go Outside",
  },
  {
    image: "./img/home.jpg",
    text: "I Want To Go Home",
  },
  {
    image: "./img/school.jpg",
    text: "I Want To Go To School",
  },
  {
    image: "./img/grandma.jpg",
    text: "I Want To Go To Grandmas",
  },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement("div");

  const { image, text } = item;

  box.classList.add("box");

  box.innerHTML = `
    <img style="width:100%"src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener("voiceschanged", getVoices);

// Toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

// Close button
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

// Change voice
voicesSelect.addEventListener("change", setVoice);

// Read text button
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
