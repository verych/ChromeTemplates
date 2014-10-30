chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tabId, {file: "ontab.js"});
    }
});

chrome.browserAction.onClicked.addListener(function(tab) { 
	chrome.tabs.executeScript(tab.id, {file: "onclick.js"});
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-41903414-1']);
_gaq.push(['_trackEvent', 'reported', 'reported']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();