const isSuccessfulCallback = (urlString) => {
  try {
    const url = new URL(urlString);

    if (url.pathname !== "/oauth/callback") {
      return false;
    }

    const error = url.searchParams.get("error");
    const code = url.searchParams.get("code");

    return Boolean(code) && !error;
  } catch (err) {
    return false;
  }
};

chrome.webNavigation.onCompleted.addListener(
  (details) => {
    if (details.frameId !== 0) {
      return;
    }

    if (!isSuccessfulCallback(details.url)) {
      return;
    }

    chrome.tabs.remove(details.tabId);
  },
  {
    url: [
      {
        hostEquals: "127.0.0.1",
        pathEquals: "/oauth/callback",
        schemes: ["http"]
      }
    ]
  }
);
