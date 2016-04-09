# Framer Primer Module
The **Primer** module provides the ability to preload images and display a loading indicator. Sometimes when sharing a framer it's desirable to 
ensure images are loaded before the reciever can view or interact with the Framer, this module tries to solve that issue.

## Example
http://share.framerjs.com/ke5eiwaj7b3a/

## Including the Module
Place the primer.coffee module into the `/modules` directory of your project. Then require the module at the top of your prototype.

```javascript
Primer = require 'Primer' 
```


## Getting Started

The Primer preloader is a layer that will default to the size of the screen and can be created at the end of your prototype.

```javascript

# ...
# Your code above here

primer = new Primer
primer.load()
```

## Adding images
By default any layers that have an image associated will be preloaded automatically when the load function is called.
If there are dynamically loaded images that you want to precache, you can call `addImage`

```javascript
primer.addImage('/images/the-image-to-load.png')
```

## Load event
Assign a function to the property `onload` to be notified when loading is finished
```javascript
primer.onload = () ->
    print "loaded"
```
