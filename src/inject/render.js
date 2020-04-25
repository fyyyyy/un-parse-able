var message;
var footer;
var fontSize = 15;
var Graphics;
var Text;
var TextStyle;
var app;
var backgroundImage;
var currentText = '_start_';
var input;
var settings;
var offset = 12;

function initPixi(doc, s, target) {
    settings = s;
    
    if(!doc) throw new Error('No Document')
    if(!target) throw new Error('No Target')

    Graphics = PIXI.Graphics;
    Text = PIXI.Text;
    TextStyle = PIXI.TextStyle;
    doc.PIXI = PIXI;
	input = target;


	let type = "WebGL"
	if (!PIXI.utils.isWebGLSupported()) {
		type = "canvas"
	}

	PIXI.utils.sayHello(type);

	//Create a Pixi Application
	app = new PIXI.Application({
		width: input.clientWidth,
		height: 30,
		antialias: true,
		transparent: false,
		resolution: 1
	});

	app.view.style.color = '-internal-root-color';
	app.view.style.width = '100%';
	app.view.style.marginRight = 'auto';
	app.view.style.border = '1px solid #ddd';
	app.view.style.borderRadius = '14px';

	
	var bg = window.getComputedStyle(doc.querySelector('body')).backgroundColor;
	app.renderer.backgroundColor = PIXI.utils.string2hex(rgb2hex(bg)); //doc.body.style.backgroundColor;

	input.appendChild(app.view);

	createMessage();
	createFooter();

    update();
	setInterval(update, 500);
}

function update() {
	if(input.innerText !== currentText) {
		message.text = input.innerText;
		app.view.height = message.height + offset + footer.height;
		app.stage.height = message.height + offset + footer.height;
		// app.view.width = message.width + 24;
		// app.stage.width = message.width;

	
		// render backgroundImage ?
		if (settings['store.settings.image'] === "true") {
			if (backgroundImage) {
				app.stage.removeChild(backgroundImage);
			}
			var texture =  PIXI.Texture.from('https://i.picsum.photos/id/' + Math.ceil(rnd(1000)) + '/' + Math.ceil(app.view.width) + '/' + Math.ceil(app.view.height + offset) + '.jpg');
			backgroundImage = new PIXI.Sprite(texture);
            app.stage.addChild(backgroundImage);
            app.stage.setChildIndex(backgroundImage, 0);
		}

		// render squares ?
		if (settings['store.settings.squares'] === "true") {
			var difference = Math.abs(input.innerText.length - currentText.length);
			drawSquares(difference);
		}
		
		currentText = input.innerText;
		
        // display footer on top
        if(footer) {
            footer.y = message.y + message.height - (offset / 2);
            app.stage.removeChild(footer);
            app.stage.addChild(footer);
        }

        // display message on top
        app.stage.removeChild(message);
        app.stage.addChild(message);
	}
}

function rnd(n) {
	return Math.random() * n;
}

function createMessage() {
	var col = window.getComputedStyle(input).color;

	var fontFamily = settings['store.settings.fontFamily'] || 'system-ui';
	let style = new TextStyle({
		
		fontFamily: fontFamily,
		fontSize: fontSize + 2,
		fill: col,
		// stroke: '#ff3300',
		// strokeThickness: 1,
		align: 'center',
		wordWrap: true,
		wordWrapWidth: input.clientWidth - (offset * 2.5),
		dropShadow: settings['store.settings.image'] === "true",
		dropShadowColor: app.renderer.backgroundColor,
		dropShadowBlur: 1,
		// dropShadowAngle: Math.PI / 6,
		dropShadowDistance: 1,
	});

	message = new Text(input.innerText, style);
	message.anchor.set(0.5, 0);
	message.x = app.view.width / 2;
	message.y = offset / 2;
	
	app.stage.addChild(message);
}

function createFooter() {
    var text = settings['store.settings.footer'] || '– by un-parse-able extension';
	text = text.slice(1, -1);

	var col = window.getComputedStyle(input).color;

	var fontFamily = 'system-ui';
	let style = new TextStyle({
		fontFamily: fontFamily,
		fontSize: fontSize -3,
		fill: col,
		align: 'right',
		dropShadow: settings['store.settings.image'] === "true",
		dropShadowColor: app.renderer.backgroundColor,
		dropShadowBlur: 1,
		// dropShadowAngle: Math.PI / 6,
		dropShadowDistance: 1,
	});

	footer = new Text(text, style);
	footer.anchor.set(1, 0);
	footer.x = app.view.width - offset - 2;
	footer.y = message.y + message.height - (offset / 2);
	
	if (text.length) app.stage.addChild(footer);
}




function drawSquares(n) {
	startColor = Math.floor(0xFFFFFF * 0.8)
	addColor = Math.floor(0xFFFFFF * 0.2)
	for (var i = 0; i < n; i++) {
		drawSquare(
			rnd(message.width),
			Math.abs( message.height -rnd(50) ),
			rnd(5) + 5,
			startColor + rnd(addColor)
		);
	}
}

function drawSquare(x, y, s, color) {
	var square = new Graphics();
	square.beginFill(color);
	square.drawRect(0, 0, s, s);
	square.endFill();
	square.alpha = 0.5;
	square.rotation = Math.random(10);
	square.x = x;
	square.y = y;
	app.stage.addChild(square);
}

function rgb2hex(rgb)
{
	rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s?\d+\.\d+)?\);?$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}