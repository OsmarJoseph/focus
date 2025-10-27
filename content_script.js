browser.runtime.sendMessage({ action: "getFocus" });

const blockSites = () => {
  const blocked_urls = ["youtube.com", "instagram.com", "linkedin.com"];

  for (const blocked_url of blocked_urls) {
    if (window.location.href.includes(blocked_url)) {
      window.location.href = browser.runtime.getURL("focus.html");
    }
  }
};

browser.runtime.onMessage.addListener((message) => {
  const isFlowActive = message.response === "Flow";

  if (isFlowActive) {
    blockSites();
  }
});
