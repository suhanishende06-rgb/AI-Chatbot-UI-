const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");
const themeToggle = document.getElementById("themeToggle");

const replies = [
  "Hello 👋",
  "I am your AI assistant 🤖",
  "How can I help you?",
  "That sounds interesting 🔥",
  "Tell me more 😄",
  "AI is the future 🚀",
  "Nice question 👍"
];

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {

  const text = userInput.value.trim();

  if (text === "") return;

  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.innerText = text;

  chatBox.appendChild(userMsg);

  userInput.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {

    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");

    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    botMsg.innerText = randomReply;

    chatBox.appendChild(botMsg);

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 800);
}

let darkMode = true;

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  darkMode = !darkMode;

  if (darkMode) {
    themeToggle.innerText = "🌙 Dark Mode";
  } else {
    themeToggle.innerText = "☀️ Light Mode";
  }

});
