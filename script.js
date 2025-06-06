let introText = "你是一名“历史考古者”。\n任务：追溯旧文明中的一起重大事件 —— “地震救援神话”。\n目标：挖掘碎片中被遗忘的情绪与命运。";
let displayText = "";
let charIndex = 0;
let typingSpeed = 40;

function setup() {
  noCanvas(); // 用于交互逻辑，不需要画布现在
  typeWriter();
}

function typeWriter() {
  if (charIndex < introText.length) {
    let currentChar = introText.charAt(charIndex);
    displayText += currentChar;
    document.getElementById("typing-text").innerText = displayText;
    document.getElementById("type-sound").play();
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("main-scene").classList.remove("hidden");
});
