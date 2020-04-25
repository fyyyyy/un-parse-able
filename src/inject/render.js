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

	// console hello
	PIXI.utils.sayHello("canvas");
	
	// try improved font sharpness settings
    PIXI.settings.PRECISION_FRAGMENT = 'highp';
    PIXI.settings.ROUND_PIXELS = true;

	//Create a Pixi Application
	app = new PIXI.Application({
		width: input.clientWidth,
		height: 20,
		antialias: false,
		transparent: false,
		resolution: 1
    });

	app.view.style.width = '100%';
	app.view.style.marginRight = 'auto';
	app.view.style.border = '1px solid #ddd';
	app.view.style.borderRadius = '14px';

	
	var bg = window.getComputedStyle(doc.querySelector('body')).backgroundColor;
	app.renderer.backgroundColor = PIXI.utils.string2hex(rgb2hex(bg));

	input.appendChild(app.view);

	createMessage();
	createFooter();

    update();
	setInterval(update, 500);
}

/*
	update every render cycle
*/
function update() {
    // check if input text changed
    if (input.innerText === currentText) return;
    
    let showBackground = settings['store.settings.image'] === 'true';

    message.text = input.innerText;
    app.view.height = message.height + (offset) + footer.height;
	app.stage.height = app.view.height - (showBackground ? 0 : offset);

	// DISABLED. keep image width 100%, otherwise image will be cropped
    // app.view.width = message.width + 24;
    // app.stage.width = message.width;

    // render backgroundImage ?
    if (showBackground) {
        if (backgroundImage) {
            app.stage.removeChild(backgroundImage);
        }
        var texture =  PIXI.Texture.from('https://i.picsum.photos/id/' + Math.ceil(rnd(1000)) + '/' + Math.ceil(app.view.width) + '/' + Math.ceil(app.view.height + offset) + '.jpg');
        backgroundImage = new PIXI.Sprite(texture);
        app.stage.addChild(backgroundImage);
        app.stage.setChildIndex(backgroundImage, 0);
    }

    // render random squares ?
    if (settings['store.settings.squares'] === "true") {
        var difference = Math.abs(input.innerText.length - currentText.length);
        drawSquares(difference);
    }
	
	// cache last input text
    currentText = input.innerText;
    
    // display footer on top and position footer
    if(footer) {
        footer.y = message.y + message.height - (offset / 2);
        app.stage.removeChild(footer);
        app.stage.addChild(footer);
    }

    // display message on top
    app.stage.removeChild(message);
    app.stage.addChild(message);
}


function rnd(n) {
	return Math.random() * n;
}


/*
	initialize message text field
*/
function createMessage() {
	var col = window.getComputedStyle(input).color;

	var fontFamily = settings['store.settings.fontFamily'] || 'system-ui';

	let style = new TextStyle({
		fontFamily: fontFamily,
		fontSize: fontSize,
		fill: col,
		// stroke: '#ff3300',
        // strokeThickness: 1,
        resolution: 4,
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


/*
	initialize footer text field
*/
function createFooter() {
    var text = settings['store.settings.footer'] || ' un-parse-able extension ';
	text = text.slice(1, -1);

	var col = window.getComputedStyle(input).color;

	var fontFamily = 'system-ui';
	let style = new TextStyle({
		fontFamily: fontFamily,
		fontSize: fontSize -5,
		fill: col,
        align: 'right',
        resolution: 4,
		dropShadow: settings['store.settings.image'] === "true",
		dropShadowColor: app.renderer.backgroundColor,
		dropShadowBlur: 1,
		// dropShadowAngle: Math.PI / 6,
		dropShadowDistance: 1,
	});

	footer = new Text(text, style);
	footer.anchor.set(1, 0);
	footer.x = app.view.width - offset;
	footer.y = message.y + message.height - (offset / 2);
	
	if (text.length) app.stage.addChild(footer);
}



/*
	draw n random squares
*/
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