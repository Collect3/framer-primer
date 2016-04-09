# Require Primer
Primer = require 'Primer'

# Setup
sourceWidth = 2650
sourceHeight = 2050
aspect = 2650 / 2050
width = Screen.height * aspect
height = Screen.height

# Hierarchy
# Image credit: https://unsplash.com/photos/NKSGuJzExIo
sky = new Layer
	image: "images/sky.png"
	width: width
	height: height
	
stars = new Layer
	image: "images/stars.png"	
	width: sourceWidth * 0.65
	height: sourceHeight * 0.65
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
bg.blur = 1.5

fg = new Layer
	image: "images/fg.png"
	width: width
	height: height
	scale: 1.1

# Animation 
startAnimation = () ->
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
	bg.animate
		time: 60.0
		curve: "linear"
		properties:
			x: -250
			blur: 0
	fg.animate
		time: 60.0
		curve: "linear"
		properties:
			scale: 1.0
			x: -500		
			
	
# Present loading screen		
primer = new Primer
	onload: startAnimation
primer.load()
	