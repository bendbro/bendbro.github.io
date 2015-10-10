function loadScript(path, callback) {
	// Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';

	var chromeId = chrome.runtime.id;
    //script.src = "chrome-extension://" + chrome.runtime.id + "/" + path;
	script.src = path;

    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var client = 1337;
loadScript("resources/dropbox.min.js",function() {
	client = new Dropbox.Client({key:"q29ccmrl21l9e71"});
	client.authDriver(new Dropbox.AuthDriver.ChromeExtension({receiverPath: "/resources/chrome_oauth_receiver.html"}));
});