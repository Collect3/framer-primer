require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Primer":[function(require,module,exports){
var CircularProgress,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CircularProgress = (function(superClass) {
  extend(CircularProgress, superClass);

  function CircularProgress(options) {
    CircularProgress.__super__.constructor.call(this, options);
    this.strokeWidth = 3;
    this.circleSize = 100;
    this.backgroundColor = null;
    this.createElement();
  }

  CircularProgress.prototype.createElement = function() {
    var footer, header;
    this.innerCircle = new Layer({
      x: 0,
      y: 0,
      width: this.circleSize,
      height: this.circleSize,
      superLayer: this,
      backgroundColor: null
    });
    this.outerCircle = new Layer({
      x: 0,
      y: 0,
      width: this.circleSize,
      height: this.circleSize,
      superLayer: this,
      backgroundColor: null
    });
    this.innerCircle.center();
    this.outerCircle.center();
    header = '<svg width="100px" height="100px" x="0px" y="0px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs>';
    footer = '</svg>';
    this.innerCircle.html = header + '<circle id="c" cx="50" cy="50" r="48" stroke="#3F3F3F" stroke-width="' + this.strokeWidth + '" fill="none"></circle>' + footer;
    return this.outerCircle.html = header + '<circle id="progress-outer-circle" transform="rotate(270,50,50)" cx="50" cy="50" r="48" stroke="#fff" stroke-width="' + this.strokeWidth + '" fill="none"></circle>' + footer;
  };

  CircularProgress.define("value", {
    set: function(v) {
      var c, pct, r, svgPath;
      svgPath = document.getElementById('progress-outer-circle');
      r = this.width / 2;
      c = Math.PI * (r * 2);
      pct = (1 - v) * c;
      svgPath.style.strokeDasharray = c;
      return svgPath.style.strokeDashoffset = pct;
    }
  });

  return CircularProgress;

})(Layer);

module.exports = (function(superClass) {
  extend(exports, superClass);

  function exports(options) {
    exports.__super__.constructor.call(this, options);
    if (options == null) {
      options = {};
    }
    this.width = Screen.width;
    this.height = Screen.height;
    this.backgroundColor = "black";
    this.imagesLoaded = 0;
    this.onload = options.onload;
    this.images = [];
    this.progress = new CircularProgress({
      width: 100,
      height: 100,
      superLayer: this
    });
    this.progress.center();
    this.progress.value = 0;
  }

  exports.prototype.addImage = function(src) {
    return this.images.push(src);
  };

  exports.prototype.addFramerImages = function() {
    var i, layer, len, ref, results;
    ref = Framer.CurrentContext._layers;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      layer = ref[i];
      if (layer.image) {
        results.push(this.images.push(layer.image));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  exports.prototype.load = function() {
    var i, image, len, obj, ref, results, src;
    this.addFramerImages();
    obj = this;
    ref = this.images;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      src = ref[i];
      image = new Image();
      image.onload = function() {
        return obj.imageDidLoad();
      };
      image.onerror = function() {
        return obj.imageDidLoad();
      };
      results.push(image.src = src);
    }
    return results;
  };

  exports.prototype.imageDidLoad = function() {
    this.imagesLoaded++;
    this.progress.value = this.imagesLoaded / this.images.length;
    if (this.imagesLoaded >= this.images.length) {
      return this.finishedLoad();
    }
  };

  exports.prototype.finishedLoad = function() {
    if (this.onload) {
      this.onload();
    }
    return this.destroy();
  };

  return exports;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmdW1iZXJnZXIvRG9jdW1lbnRzL1Byb2plY3RzL0ZyYW1lci9wcmltZXItZXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9QcmltZXIuY29mZmVlIiwiL1VzZXJzL2RqZnVtYmVyZ2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9GcmFtZXIvcHJpbWVyLWV4YW1wbGUuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxnQkFBQTtFQUFBOzs7QUFBTTs7O0VBQ08sMEJBQUMsT0FBRDtJQUNYLGtEQUFNLE9BQU47SUFDQSxJQUFDLENBQUMsV0FBRixHQUFnQjtJQUNoQixJQUFDLENBQUMsVUFBRixHQUFlO0lBQ2YsSUFBQyxDQUFDLGVBQUYsR0FBb0I7SUFDcEIsSUFBQyxDQUFDLGFBQUYsQ0FBQTtFQUxXOzs2QkFNWixhQUFBLEdBQWMsU0FBQTtBQUNiLFFBQUE7SUFBQSxJQUFDLENBQUMsV0FBRixHQUFvQixJQUFBLEtBQUEsQ0FDbkI7TUFBQSxDQUFBLEVBQUcsQ0FBSDtNQUNBLENBQUEsRUFBRyxDQURIO01BRUEsS0FBQSxFQUFPLElBQUMsQ0FBQyxVQUZUO01BR0EsTUFBQSxFQUFRLElBQUMsQ0FBQyxVQUhWO01BSUEsVUFBQSxFQUFZLElBSlo7TUFLQSxlQUFBLEVBQWlCLElBTGpCO0tBRG1CO0lBT3BCLElBQUMsQ0FBQyxXQUFGLEdBQW9CLElBQUEsS0FBQSxDQUNuQjtNQUFBLENBQUEsRUFBRyxDQUFIO01BQ0EsQ0FBQSxFQUFHLENBREg7TUFFQSxLQUFBLEVBQU8sSUFBQyxDQUFDLFVBRlQ7TUFHQSxNQUFBLEVBQVEsSUFBQyxDQUFDLFVBSFY7TUFJQSxVQUFBLEVBQVksSUFKWjtNQUtBLGVBQUEsRUFBaUIsSUFMakI7S0FEbUI7SUFPcEIsSUFBQyxDQUFDLFdBQVcsQ0FBQyxNQUFkLENBQUE7SUFD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SUFDWixJQUFHLElBQUMsQ0FBQyxNQUFMO01BQ0MsSUFBQyxDQUFDLE1BQUYsQ0FBQSxFQUREOztXQUVBLElBQUMsQ0FBQyxPQUFGLENBQUE7RUFIWTs7OztHQXJDZTs7OztBQ2xDN0IsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBDaXJjdWxhclByb2dyZXNzIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6KG9wdGlvbnMpIC0+XG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdEAuc3Ryb2tlV2lkdGggPSAzXG5cdFx0QC5jaXJjbGVTaXplID0gMTAwXG5cdFx0QC5iYWNrZ3JvdW5kQ29sb3IgPSBudWxsXG5cdFx0QC5jcmVhdGVFbGVtZW50KClcblx0Y3JlYXRlRWxlbWVudDooKSAtPlxuXHRcdEAuaW5uZXJDaXJjbGUgPSBuZXcgTGF5ZXJcblx0XHRcdHg6IDBcblx0XHRcdHk6IDBcblx0XHRcdHdpZHRoOiBALmNpcmNsZVNpemVcblx0XHRcdGhlaWdodDogQC5jaXJjbGVTaXplXG5cdFx0XHRzdXBlckxheWVyOiBAXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRALm91dGVyQ2lyY2xlID0gbmV3IExheWVyXG5cdFx0XHR4OiAwXG5cdFx0XHR5OiAwXG5cdFx0XHR3aWR0aDogQC5jaXJjbGVTaXplXG5cdFx0XHRoZWlnaHQ6IEAuY2lyY2xlU2l6ZVxuXHRcdFx0c3VwZXJMYXllcjogQFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXHRcblx0XHRALmlubmVyQ2lyY2xlLmNlbnRlcigpXG5cdFx0QC5vdXRlckNpcmNsZS5jZW50ZXIoKVx0XHRcblx0XHRoZWFkZXIgPSAgJzxzdmcgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgPGRlZnM+PC9kZWZzPidcbiBcdGZvb3RlciA9ICc8L3N2Zz4nXG5cdFx0QC5pbm5lckNpcmNsZS5odG1sID0gaGVhZGVyICsgJzxjaXJjbGUgaWQ9XCJjXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNDhcIiBzdHJva2U9XCIjM0YzRjNGXCIgc3Ryb2tlLXdpZHRoPVwiJyArIEAuc3Ryb2tlV2lkdGggKyAnXCIgZmlsbD1cIm5vbmVcIj48L2NpcmNsZT4nICsgZm9vdGVyXG5cdFx0QC5vdXRlckNpcmNsZS5odG1sID0gaGVhZGVyICsgJzxjaXJjbGUgaWQ9XCJwcm9ncmVzcy1vdXRlci1jaXJjbGVcIiB0cmFuc2Zvcm09XCJyb3RhdGUoMjcwLDUwLDUwKVwiIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQ4XCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIicgKyBALnN0cm9rZVdpZHRoICsgJ1wiIGZpbGw9XCJub25lXCI+PC9jaXJjbGU+JyArIGZvb3RlclxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRzZXQ6ICh2KSAtPiBcblx0XHRcdHN2Z1BhdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3Mtb3V0ZXItY2lyY2xlJylcblx0XHRcdHIgPSAoQC53aWR0aCAvIDIpXG5cdFx0XHRjID0gTWF0aC5QSSoocioyKTtcblx0XHRcdHBjdCA9ICgxIC0gdikqYztcblx0XHRcdHN2Z1BhdGguc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gY1x0XHRcblx0XHRcdHN2Z1BhdGguc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IHBjdFxuXG5jbGFzcyBtb2R1bGUuZXhwb3J0cyBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOihvcHRpb25zKSAtPlxuXHRcdHN1cGVyIG9wdGlvbnMgXG5cdFx0b3B0aW9ucyA/PSB7fVxuXHRcdEAud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRALmhlaWdodCA9ICBTY3JlZW4uaGVpZ2h0XG5cdFx0QC5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCJcblx0XHRALmltYWdlc0xvYWRlZCA9IDBcblx0XHRALm9ubG9hZCA9IG9wdGlvbnMub25sb2FkIFxuXHRcdEAuaW1hZ2VzID0gW11cblx0XHRALnByb2dyZXNzID0gbmV3IENpcmN1bGFyUHJvZ3Jlc3Ncblx0XHRcdHdpZHRoOiAxMDBcblx0XHRcdGhlaWdodDogMTAwXG5cdFx0XHRzdXBlckxheWVyOiBAXG5cdFx0QC5wcm9ncmVzcy5jZW50ZXIoKVxuXHRcdEAucHJvZ3Jlc3MudmFsdWUgPSAwXG5cdGFkZEltYWdlOihzcmMpIC0+XG5cdFx0QC5pbWFnZXMucHVzaChzcmMpXHRcdFxuXHRhZGRGcmFtZXJJbWFnZXM6KCkgLT5cblx0XHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnNcblx0XHRcdGlmIGxheWVyLmltYWdlXG5cdFx0XHRcdEAuaW1hZ2VzLnB1c2gobGF5ZXIuaW1hZ2UpXG5cdGxvYWQ6KCkgLT5cblx0XHRALmFkZEZyYW1lckltYWdlcygpXG5cdFx0b2JqID0gQFxuXHRcdGZvciBzcmMgaW4gQC5pbWFnZXNcblx0XHRcdGltYWdlID0gbmV3IEltYWdlKClcblx0XHRcdGltYWdlLm9ubG9hZCA9ICgpIC0+XG5cdFx0XHRcdG9iai5pbWFnZURpZExvYWQoKVxuXHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpIC0+XG5cdFx0XHRcdG9iai5pbWFnZURpZExvYWQoKVxuXHRcdFx0aW1hZ2Uuc3JjID0gc3JjXHRcdFxuXHRpbWFnZURpZExvYWQ6KCkgLT5cblx0XHRALmltYWdlc0xvYWRlZCsrXG5cdFx0QC5wcm9ncmVzcy52YWx1ZSA9IEAuaW1hZ2VzTG9hZGVkIC8gQC5pbWFnZXMubGVuZ3RoXG5cdFx0aWYgQC5pbWFnZXNMb2FkZWQgPj0gQC5pbWFnZXMubGVuZ3RoXG5cdFx0XHRALmZpbmlzaGVkTG9hZCgpXG5cdGZpbmlzaGVkTG9hZDooKSAtPlxuXHRcdGlmIEAub25sb2FkXG5cdFx0XHRALm9ubG9hZCgpXG5cdFx0QC5kZXN0cm95KCkiLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
