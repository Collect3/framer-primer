# Require Primer
Primer = require 'Primer'

# Setup
sourceWidth = 2650
sourceHeight = 2050
aspect = 2650 / 2050
width = Screen.height * aspect
height = Screen.height

# Views
# Image credit: https://unsplash.com/photos/NKSGuJzExIo
sky = new Layer
	image: "images/sky.png"
	width: width
	height: height
	
stars = new Layer
	image: "images/stars.png"	
	width: sourceWidth * 0.65
	height: sourceHeight * 0.65
	blur: 5
stars.center()

lines = new Layer
	width: Screen.width
	height: Screen.height
	image: "images/lines.png"

clouds = new Layer
	image: "images/clouds.png"	
	width: sourceHeight * 1
	height: sourceWidth * 1
	opacity: 0.5
clouds.center()

bg = new Layer
	image: "images/bg.png"
	width: width
	height: height
	y: 0
	x: -100
	scale: 1.0
	blur: 5
fg = new Layer
	image: "images/fg.png"
	width: width
	height: height
	scale: 1.2
	y: -60
	
fire = new Layer
	image: "images/fire.png"
	width: 209 * 0.3
	height: 245 * 0.3
	x: 490
	y: 990
	superLayer: fg

# Animation 
updateFire = () ->
	 fire.opacity = Utils.randomChoice([0.39,0.33,0.22,0.19,0.3,0.38, 0.35]) * 1.33
	 
startAnimation = () ->
	setInterval(updateFire, (1 / 15) * 1000)	
	stars.animate
		repeat: true
		curve: "linear"
		time: 200.0
		properties: 
			rotation: 360	
	clouds.animate
		repeat: true
		curve: "linear"
		time: 50.0
		properties: 
			rotation: -360	
	sceneTime = 20
	curve = "ease"
	bg.animate
		time: sceneTime
		curve: curve
		properties:
			x: -300

	fg.animate
		time: sceneTime
		curve: curve
		properties:
			x: -300
		
	bg.animate
		time: sceneTime * 1.25
		curve: curve
		properties: 
			y: 100
			scale: 0.8
			blur: 0
	fg.animate
		curve: curve
		time: sceneTime * 1.25
		properties: 
			y: 70
			scale: 0.9
	stars.animate
		time: sceneTime 
		curve: curve
		properties:
			blur: 0	

	
# Present loading screen		
primer = new Primer
	onload: startAnimation
primer.load()
	