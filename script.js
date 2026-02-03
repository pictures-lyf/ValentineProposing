(async function checkForUpdates() {
  const currentVersion = "1.0";
  const versionUrl =
    "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

  try {
    const response = await fetch(versionUrl);
    if (!response.ok) {
      console.warn("Could not fetch version information.");
      return;
    }
    const data = await response.json();
    const latestVersion = data.version;
    const updateMessage = data.updateMessage;

    if (currentVersion !== latestVersion) {
      alert(updateMessage);
    } else {
      console.log("You are using the latest version.");
    }
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
})();

const messages = [
  "Pakka?",
  "Pakka Pakka??",
  "Sach mein bb?",
  "Babba please...",
  "If you say no, I will be really sad :'(",
  "Bacha please don't say no...",
  "Babudu, this buttons is under maintenance...",
  "ACHAAA, I will stop asking...",
  "Just kidding, I wont stop unless you say yes! ❤️",
  "You are now in a loop. Muhahaha!😈",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  sessionStorage.setItem("playMusic", "true");
  window.location.href = "yes_page.html";
}
