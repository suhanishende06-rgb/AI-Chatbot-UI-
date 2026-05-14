const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");
const themeToggle = document.getElementById("themeToggle");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (e) {
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

    const reply = getBotReply(text);

    botMsg.innerText = reply;

    chatBox.appendChild(botMsg);

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 800);
}

function getBotReply(message) {

  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hello 👋 How are you?";
  }

  else if (message.includes("how are you")) {
    return "I am doing great 😄";
  }

  else if (message.includes("your name")) {
    return "I am an AI Assistant 🤖";
  }

  else if (message.includes("who made you")) {
    return "I was created using HTML, CSS and JavaScript 🚀";
  }

  else if (message.includes("ai")) {
    return "Artificial Intelligence is changing the world 🚀";
  }

  else if (message.includes("machine learning")) {
    return "Machine learning allows computers to learn from data.";
  }

  else if (message.includes("deep learning")) {
    return "Deep learning is a part of AI based on neural networks.";
  }

  else if (message.includes("python")) {
    return "Python is a powerful programming language.";
  }

  else if (message.includes("java")) {
    return "Java is widely used for software development.";
  }

  else if (message.includes("html")) {
    return "HTML is used to create webpages.";
  }

  else if (message.includes("css")) {
    return "CSS is used for styling webpages.";
  }

  else if (message.includes("javascript")) {
    return "JavaScript makes websites interactive.";
  }

  else if (message.includes("react")) {
    return "React is a popular JavaScript library.";
  }

  else if (message.includes("github")) {
    return "GitHub is used to host and manage coding projects.";
  }

  else if (message.includes("coding")) {
    return "Coding is fun and creative 😄";
  }

  else if (message.includes("project")) {
    return "Projects help improve programming skills.";
  }

  else if (message.includes("cyber security")) {
    return "Cyber security protects systems and networks from attacks.";
  }

  else if (message.includes("hacking")) {
    return "Ethical hacking is used to find security vulnerabilities.";
  }

  else if (message.includes("chatgpt")) {
    return "ChatGPT is an AI chatbot developed by OpenAI.";
  }

  else if (message.includes("robot")) {
    return "Robots and AI are transforming technology 🤖";
  }

  else if (message.includes("technology")) {
    return "Technology is evolving very fast 🚀";
  }

  else if (message.includes("future")) {
    return "AI and technology are shaping the future.";
  }

  else if (message.includes("bye")) {
    return "Goodbye 👋 Have a great day!";
  }

  else if (message.includes("thank you")) {
    return "You are welcome 😄";
  }

  else if (message.includes("good morning")) {
    return "Good Morning ☀️";
  }

  else if (message.includes("good night")) {
    return "Good Night 🌙";
  }

  else if (message.includes("what can you do")) {
    return "I can chat with you like an AI assistant 🤖";
  }

  else {
    return "Interesting question 😄";
  }
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
