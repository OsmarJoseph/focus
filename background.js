function onResponse(response) {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const tabId = tabs[0].id;
    browser.tabs.sendMessage(tabId, { response });
  });
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action !== "getFocus") return;

  let sending = browser.runtime.sendNativeMessage("focus", "getFocus");
  sending.then(onResponse, onError);
});
