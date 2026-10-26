
const UNLOCK_MINUTES = 15;
function buildRules(sites) {
  return sites.map((site, index) => ({
    id: index + 1,
    condition: {
      urlFilter: `||${site}^`,
      resourceTypes: ["main_frame"]
    },
    action: {
      type: "redirect",
      redirect: { extensionPath: `/blocked.html?from=${site}` }
    }
  }));
}

chrome.runtime.onInstalled.addListener(async (details) => {
  const defaultSites = ["instagram.com", "tiktok.com"];
  await chrome.storage.local.set({ blockedSites: defaultSites });

  const existing = await chrome.declarativeNetRequest.getDynamicRules();
  const existingIds = existing.map(rule => rule.id);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: existingIds,
    addRules: buildRules(defaultSites)
  });

  if (details.reason === "install") {
    chrome.tabs.create({ url: chrome.runtime.getURL("welcome.html") });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "UNLOCK") {
    unlockAllSites();
  }

  if (message.type === "REFRESH_RULES") {
    relockAllSites();
  }

  if (message.type === "GET_STATUS") {
    chrome.declarativeNetRequest.getDynamicRules().then((rules) => {
      sendResponse({ locked: rules.length > 0 });
    });
    return true; 
  }
});

async function unlockAllSites() {
  const existing = await chrome.declarativeNetRequest.getDynamicRules();
  const existingIds = existing.map(rule => rule.id);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: existingIds,
    addRules: []
  });

  chrome.alarms.create("relock", { delayInMinutes: UNLOCK_MINUTES });
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "relock") {
    relockAllSites();
  }
});

async function relockAllSites() {
  const { blockedSites } = await chrome.storage.local.get(["blockedSites"]);

  const existing = await chrome.declarativeNetRequest.getDynamicRules();
  const existingIds = existing.map(rule => rule.id);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: existingIds,
    addRules: buildRules(blockedSites)
  });

  for (const site of blockedSites) {
    try {
      const tabs = await chrome.tabs.query({ url: `*://*.${site}/*` });
      for (const tab of tabs) {
        chrome.tabs.reload(tab.id);
      }
    } catch (error) {
      console.log("Could not check tabs for", site, error); 
    }
  }
}