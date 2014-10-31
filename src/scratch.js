/*
 * Scratch v0.9
 * Mobile touch Scratch
 * Copyright 2010-2014, yao jia
 * Licensed under GPL & MIT
 * Released on: October 21, 2014
*/
function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;

  }




var Scratch=function(selector, params){
	'use strict';
	this.selector=(typeof selector=='string')?document.getElementById(selector):selector;
	this.defaults={
		width: document.documentElement.clientWidth,
		height:document.documentElement.clientHeight,
		fontImg:'img/font.jpg',
		bgImg :'img/bg.jpg',
		percent:0.6,
		callback:function(){}
	}
	
	this.defaults=extend(this.defaults,params);
	this.init()
}
	Scratch.prototype = {
		init:function(){
		   var _this=this;
		   var canvas=document.createElement('canvas');
			   canvas.width=this.defaults.width;
			   canvas.height=this.defaults.height;
			   canvas.style.backgroundImage='url("'+this.defaults.bgImg+'")';
			   canvas.style.backgroundPosition="center bottom";
			   this.selector.appendChild(canvas);
			var ctx = canvas.getContext('2d');
	        var imgObj= new Image();
	        	imgObj.src=this.defaults.fontImg;
	        	imgObj.onload=function(){
	        		ctx.drawImage(imgObj,0,0,_this.defaults.width,_this.defaults.height)
	        	}     
	            this.canvas=canvas;
	            this.ctx=ctx;
	            this.bindAction()
		},
		
		bindAction:function(){
		var _this=this;
		var  mousedown =false;

		var scratch =function(e){
			if(mousedown){
				console.log('ontouchstart' in window);
				var e=('ontouchstart' in window)?e.touches[0]:e;
				var x=e.pageX-_this.canvas.offsetLeft;
				var y=e.pageY-_this.canvas.offsetTop;
				_this.ctx.globalCompositeOperation = 'destination-out';



				_this.ctx.beginPath();
				 _this.ctx.arc(x,y,45,0,Math.PI*2,true);
				 _this.ctx.closePath();  
	            _this.ctx.fill();


             }

		}
		var eventDown=function(e){
			    e.preventDefault();
			    mousedown =true;
			    scratch(e)

			   
		};
		var eventMove=function(e){
			scratch(e)
			
		};
		var eventEnd=function(e){
			mousedown =false;
			var data = _this.ctx.getImageData(0, 0, _this.defaults.width, _this.defaults.width).data;
            for (var i = 0, j = 0; i <= data.length; i += 4) {
            	//计算剩余的像素点					        	
				if (data[i + 3]==255) {
					        j++;
					    }
					}
				if (j <= _this.defaults.width * _this.defaults.height *(1-_this.defaults.percent) || //红米note不支持 destination-out
                /HM/.test(navigator.userAgent)) {
                _this.ctx.clearRect(0, 0, _this.defaults.width, _this.defaults.height);
				 (typeof _this.defaults.callback ==='function') && _this.defaults.callback();

				_this.canvas.removeEventListener('touchstart',eventDown);
				_this.canvas.removeEventListener('touchmove',eventMove);
				_this.canvas.removeEventListener('touchend',eventEnd)

				}
		};

		if('ontouchstart' in window){
		_this.canvas.addEventListener('touchstart',eventDown);
		_this.canvas.addEventListener('touchmove',eventMove);
		_this.canvas.addEventListener('touchend',eventEnd)
		}

		_this.canvas.addEventListener('mousedown',eventDown);
		_this.canvas.addEventListener('mousemove',eventMove);
		_this.canvas.addEventListener('mouseup',eventEnd)

		}

	}

  /*=========================
  jQuery & Zepto Plugins
  ===========================*/
	if (window.jQuery || window.Zepto) {
	    (function ($) {
	        'use strict';
	        $.fn.Scratch = function (params) {
	            var firstInstance;
	            this.each(function (i) {
	                var that = $(this);
	                var s = new Scratch(that[0], params);
	            });
	            return firstInstance;
	        };
	    })(window.jQuery || window.Zepto);
	}

	// component
	if (typeof(module) !== 'undefined')
	{
	    module.exports = Scratch;
	}

	// requirejs support
	if (typeof define === 'function' && define.amd) {
	    define([], function () {
	        'use strict';
	        return Scratch;
	    });
	}

  
 


