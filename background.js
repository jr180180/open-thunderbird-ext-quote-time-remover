const TIMESTAMP_REGEX = /On \d{1,2}\/\d{1,2}\/\d{2,4} \d{1,2}:\d{2} (AM|PM), .+ wrote:/;
const CHECK_INTERVAL = 1000;

const removeTimeFromQuote = (body) => {
  const removeTime = (match) => match.replace(/\d{1,2}:\d{2} (AM|PM)/, '').replace(/ ,/, ',');
  return body.replace(TIMESTAMP_REGEX, removeTime);
};

const autoProcessedTabs = new Set();

const processCompose = async (tabId, isManual = false) => {
  try {
    const details = await browser.compose.getComposeDetails(tabId);
    let { body } = details;

    if (TIMESTAMP_REGEX.test(body)) {
      console.log(`Processing tab ${tabId}${isManual ? ' (manual)' : ''}`);
      body = removeTimeFromQuote(body);
      await browser.compose.setComposeDetails(tabId, { body });
      if (!isManual) autoProcessedTabs.add(tabId);
      console.log(`Tab ${tabId} processed${isManual ? ' manually' : ' automatically'}`);
      return true;
    } else {
      console.log(`No timestamp found in tab ${tabId}`);
    }
  } catch (error) {
    console.error(`Error processing compose window ${tabId}:`, error);
  }
  return false;
};

const checkComposeWindows = async () => {
  try {
    const tabs = await browser.tabs.query({});
    for (const tab of tabs) {
      if (tab.type === "messageCompose" && !autoProcessedTabs.has(tab.id)) {
        await processCompose(tab.id);
      }
    }
  } catch (error) {
    console.error('Error checking compose windows:', error);
  }
};

setInterval(checkComposeWindows, CHECK_INTERVAL);

browser.composeAction.onClicked.addListener(async (tab) => {
  console.log(`Manual button clicked for tab ${tab.id}`);
  await processCompose(tab.id, true);
});

browser.tabs.onRemoved.addListener((tabId) => {
  if (autoProcessedTabs.has(tabId)) {
    autoProcessedTabs.delete(tabId);
    console.log(`Tab ${tabId} removed from autoProcessedTabs`);
  }
});

console.log("Quote Time Remover extension loaded");
