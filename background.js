chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "fetchData") {
      fetch(message.url)
        .then(response => response.json())
        .then(data => {
          sendResponse({ success: true, data: data });
        })
        .catch(error => {
          sendResponse({ success: false, error: error.message });
        });
      return true; // Keep the messaging channel open until sendResponse is called
    }
  });
  