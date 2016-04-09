class CircularProgress extends Layer
	constructor:(options) ->
		super options
		@.strokeWidth = 3
		@.circleSize = 100
		@.backgroundColor = null
		@.createElement()
	createElement:() ->
		@.innerCircle = new Layer
			x: 0
			y: 0
			width: @.circleSize
			height: @.circleSize
			superLayer: @
			backgroundColor: null
		@.outerCircle = new Layer
			x: 0
			y: 0
			width: @.circleSize
			height: @.circleSize
			superLayer: @
			backgroundColor: null	
		@.innerCircle.center()
		@.outerCircle.center()		
		header =  '<svg width="100px" height="100px" x="0px" y="0px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs></defs>'
 	footer = '</svg>'
		@.innerCircle.html = header + '<circle id="c" cx="50" cy="50" r="48" stroke="#3F3F3F" stroke-width="' + @.strokeWidth + '" fill="none"></circle>' + footer
		@.outerCircle.html = header + '<circle id="progress-outer-circle" transform="rotate(270,50,50)" cx="50" cy="50" r="48" stroke="#fff" stroke-width="' + @.strokeWidth + '" fill="none"></circle>' + footer
	setProgress:(percent) ->
		svgPath = document.getElementById('progress-outer-circle')
		r = (@.width / 2)
		c = Math.PI*(r*2);
		pct = (1 - percent)*c;
		svgPath.style.strokeDasharray = c		
		svgPath.style.strokeDashoffset = pct

class module.exports extends Layer
	constructor:(options) ->
		super options 
		options ?= {}
		@.width = Screen.width
		@.height =  Screen.height
		@.backgroundColor = "black"
		@.imagesLoaded = 0
		@.onload = options.onload 
		@.images = []
		@.progress = new CircularProgress
			width: 100
			height: 100
			superLayer: @
		@.progress.center()
	addImage:(src) ->
		@.images.push(src)		
	addFramerImages:() ->
		for layer in Framer.CurrentContext._layers
			if layer.image
				@.images.push(layer.image)
	load:() ->
		@.addFramerImages()
		obj = @
		for src in @.images
			image = new Image()
			image.onload = () ->
				obj.imageDidLoad()
			image.onerror = () ->
				obj.imageDidLoad()
			image.src = src		
	imageDidLoad:() ->
		@.imagesLoaded++
		@.progress.setProgress(@.imagesLoaded / @.images.length)
		if @.imagesLoaded >= @.images.length
			@.finishedLoad()
	finishedLoad:() ->
		if @.onload
			@.onload()
		@.destroy()