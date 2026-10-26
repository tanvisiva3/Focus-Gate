chrome.storage.local.get(["blockedSites"], (result) => {
  document.getElementById("sitesInput").value = result.blockedSites.join(", ");
});

document.getElementById("saveButton").addEventListener("click", () => {
  const raw = document.getElementById("sitesInput").value;
const sites = raw
  .split(",")
  .map(site => site.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, ""))
  .filter(site => site.length > 0);
  chrome.storage.local.set({ blockedSites: sites }, () => {
    chrome.runtime.sendMessage({ type: "REFRESH_RULES" });
    document.getElementById("savedMsg").textContent = "Saved!";
  });
});