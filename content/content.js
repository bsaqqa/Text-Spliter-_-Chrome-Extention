
// Listen for messages
// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//     // If the received message has the expected format...
//     if (msg.text === 'report_back') {
//         // Call the specified callback, passing
//         // the web-page's DOM content as argument
//         sendResponse(document.all[0].outerHTML);
//     }
// });

// var script = function script(src) {
//     var tag;
//     tag = document.createElement('script');
//     tag.src = chrome.runtime.getURL(src);
//     return tag;
// };


// window.addEventListener('load', function () {
// });


window.addEventListener('domExtensionEvent', function (e){   
    console.log("domExtensionEvent received " + JSON.stringify(e));
    // console.log("domExtensionEvent received " + (e.ip));
    // console.log(document);
    chrome.browserAction.onClicked.addListener(function (tab) {
        // ...check the URL of the active tab against our pattern and...
        if (urlRegex.test(tab.url)) {
            // ...if it matches, send a message specifying a callback too
            chrome.tabs.sendMessage(tab.id, { text: 'report_back0' }, doStuffWithDom);
            
    
        }
    });

});


