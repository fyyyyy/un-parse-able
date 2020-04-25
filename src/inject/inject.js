
chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			// clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			// Using PIXI because its rendering capabilities are very powerful
			// ----------------------------------------------------------

			var targets = document.getElementsByClassName('DraftEditor-editorContainer');

			// get settings & initialize
			chrome.storage.local.get(null, function(settings) {

				// check for new target input fields which have not been initialized
				for (var i = 0; i < targets.length; i++) {
					var target = targets.item(i)

					if (!target.initialized) {
						// render new input
						target.initialized = true;
						initPixi(document, settings, target);
					}
				}
			});

		}
	}, 1000);
});

