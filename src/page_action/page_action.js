// var message;

// var pageCheckInterval = setInterval(function () {
//     if (document.readyState === "complete") {
//         clearInterval(pageCheckInterval);

//         initTextArea();
//     }
// }, 1000);


// function initTextArea() {
//     var textArea = document.querySelector('textArea');
//     textArea.onkeyup = onChange;
    

//     // get settings & initialize
//     chrome.storage.local.get(null, function(settings) {
//         initPixi(document, settings, textArea);
//     });
    //document.body.style.backgroundColor;
    // textArea.style.backgroundColor = 
    // window.getComputedStyle(document.querySelector('[data-testid=tweetButtonInline]')).backgroundColor
    // textArea.style.fontSize = fontSize + 'px';
    
    // textArea.style.color = document.body.style.color;
    // textArea.style.color = window.getComputedStyle(document.querySelector('[dir=auto]')).color;
}

// function onChange(e) {
//     var textArea = document.querySelector('textarea');
//     console.log(textArea.value);
//     console.log(PIXI);

//     // message.text = textArea.value;
// }


// function textareaResize() {
// 	var textArea = document.querySelector('textarea');
//     console.log(' -> textareaResize', textArea.clientWidth, textArea.clientHeight);

// 	app.view.width = textArea.clientWidth;
// 	app.view.height = textArea.clientHeight + 6;
// 	message.style.wordWrapWidth = app.view.width - 6;

// 	drawSquares(100);
// 	app.stage.removeChild(message);
// 	app.stage.addChild(message);
// };