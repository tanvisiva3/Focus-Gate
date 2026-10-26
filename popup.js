chrome.runtime.sendMessage({ type: "GET_STATUS" }, (response) => {
  const statusEl = document.getElementById("status");
  if (response.locked) {
    statusEl.textContent = "Sites are locked";
  } else {
    statusEl.textContent = "Unlocked";
  }
});

document.getElementById("studyButton").addEventListener("click", () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("blocked.html") });
});