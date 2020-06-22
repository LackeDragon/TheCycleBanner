(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Decor = function() {
	this.initialize(img.Decor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.foamed = function() {
	this.initialize(img.foamed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,53);


(lib.Muntion = function() {
	this.initialize(img.Muntion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,10);


(lib.pegi12 = function() {
	this.initialize(img.pegi12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,47);


(lib.Perso = function() {
	this.initialize(img.Perso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,182);


(lib.Persocopy = function() {
	this.initialize(img.Persocopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,182);


(lib.Perso2 = function() {
	this.initialize(img.Perso2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,58);


(lib.PLAYNOW = function() {
	this.initialize(img.PLAYNOW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,43);


(lib.PROSPECTFORTUNAIII = function() {
	this.initialize(img.PROSPECTFORTUNAIII);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,21);


(lib.TheCycle_Logo_White = function() {
	this.initialize(img.TheCycle_Logo_White);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,119);


(lib.Vignette = function() {
	this.initialize(img.Vignette);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Séquence_1_Vignette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vignette
	this.instance = new lib.Vignette();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_Tir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tir
	this.instance = new lib.Persocopy();
	this.instance.parent = this;
	this.instance.setTransform(11,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(108));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_TheCycle_Logo_White = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TheCycle_Logo_White
	this.instance = new lib.TheCycle_Logo_White();
	this.instance.parent = this;
	this.instance.setTransform(132,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_PROSPECT_FORTUNA_III = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PROSPECT_FORTUNA_III
	this.instance = new lib.PROSPECTFORTUNAIII();
	this.instance.parent = this;
	this.instance.setTransform(131,208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_PLAY_NOW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PLAY_NOW
	this.instance = new lib.PLAYNOW();
	this.instance.parent = this;
	this.instance.setTransform(129,163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_pegi_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pegi_12
	this.instance = new lib.pegi12();
	this.instance.parent = this;
	this.instance.setTransform(1,203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_Decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Decor
	this.instance = new lib.Decor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAgQAJgQAAgQIgBgMIgDgJIgFgKIAEAAQAGAIADAJQACAHAAAHQAAAJgDAIQgEAJgEAGg");
	this.shape.setTransform(283.225,243.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAEIAAgGIAFAAIAAAGg");
	this.shape_1.setTransform(280.725,244.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAXQgEgDgCgEQgCgEABgGQAAgFABgDQACgFAEgCQADgCAEAAQADAAACABQADABACADIAAgSIAFAAIAAAwIgFAAIAAgEQgDAFgHAAQgEAAgDgCgAgFgDQgDADAAAGQAAAHADAEQACADAEAAQAEAAACgDQADgDAAgHQAAgHgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_2.setTransform(277.4,242.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJQAAgIAFgFQAFgFAGAAQAHAAAFAFQAEAFAAAIIAAABIgZAAQAAAGADADQADAEADAAQAEAAACgCQACgCACgEIAGABQgBAGgFADQgDADgHAAQgGAAgFgFgAgGgKQgCADgBAEIATAAQAAgEgCgCQgDgEgFAAQgDAAgDADg");
	this.shape_3.setTransform(273.3,243.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCASIgNgjIAGAAIAIAUIABAIIACgHIAIgVIAGAAIgNAjg");
	this.shape_4.setTransform(269.375,243.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJASIAAgiIAGAAIAAAFIADgFIADgBQADAAAEACIgCAFIgFgBQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgBAGIAAASg");
	this.shape_5.setTransform(266.425,243.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAOQgEgFgBgJQABgIAEgFQAFgFAGAAQAHAAAFAFQAEAFABAIIAAABIgaAAQAAAGADADQADAEADAAQAEAAACgCQACgCACgEIAGABQgCAGgEADQgEADgGAAQgHAAgEgFgAgGgKQgDADAAAEIATAAQAAgEgCgCQgDgEgFAAQgDAAgDADg");
	this.shape_6.setTransform(262.75,243.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAQQgEgDgBgGIAGgBQAAAEADACQACACAEAAQAEAAABgCQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgGgCIgIgDIgFgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgFIADgDIAEgCIAFgBIAGABQAEACACACIACAFIgHABQAAgDgCgBQgCgCgDAAQgEAAgBACQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIABACIACACIAFABIAJADIAEACQABACAAADQAAADgCADQgCADgDABQgDACgEAAQgHAAgDgDg");
	this.shape_7.setTransform(258.75,243.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAOQgFgFABgJQgBgIAFgFQAFgFAGAAQAIAAAEAFQAFAFgBAIIAAABIgZAAQAAAGADADQADAEAEAAQADAAACgCQACgCACgEIAGABQgBAGgEADQgFADgFAAQgIAAgEgFgAgFgKQgDADgBAEIATAAQgBgEgBgCQgDgEgEAAQgEAAgCADg");
	this.shape_8.setTransform(254.8,243.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJASIAAgiIAGAAIAAAFIADgFIADgBQADAAAEACIgCAFIgFgBQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgBAGIAAASg");
	this.shape_9.setTransform(251.675,243.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAQQgEgDgBgGIAGgBQAAAEADACQACACAEAAQADAAACgCQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgGgCIgIgDIgFgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgFIADgDIAEgCIAFgBIAGABQAEACACACIABAFIgFABQgBgDgCgBQgCgCgDAAQgEAAgBACQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIABACIACACIAFABIAJADIADACQACACAAADQAAADgCADQgCADgDABQgDACgEAAQgHAAgDgDg");
	this.shape_10.setTransform(245.9,243.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAXQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgGIAAgTIgFAAIAAgFIAFAAIAAgJIAFgDIAAAMIAGAAIAAAFIgGAAIAAAUIAAADIABABIACABIADgBIABAGIgFAAIgEgBg");
	this.shape_11.setTransform(242.875,242.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAIAZIAAgXQAAgDgBgCQgDgDgDAAIgEACQgCABgCADIgBAFIAAAUIgFAAIAAgxIAFAAIAAASQAFgFAGAAQADAAADACQADABACADIABAHIAAAXg");
	this.shape_12.setTransform(239.65,242.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAWQgDgDAAgFIAGABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACACADgBQAEABACgCQADgCAAgDIABgHQgEAEgGAAQgGAAgEgGQgFgFAAgGQAAgFACgFQACgEAEgCQADgCAEgBQAGAAAEAGIAAgFIAGAAIAAAeQAAAJgCADQgBAEgEABQgEADgFAAQgGAAgEgEgAgFgQQgDADAAAGQAAAHACADQADADADAAQAFAAACgDQADgDAAgHQAAgGgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_13.setTransform(235.375,243.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgRIAAgHIAFAAIAAAHg");
	this.shape_14.setTransform(232.5,242.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJASIAAgiIAGAAIAAAFIADgFIADgBQADAAAEACIgCAFIgFgBQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgBAGIAAASg");
	this.shape_15.setTransform(230.525,243.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_16.setTransform(225.7,242.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_17.setTransform(223.85,242.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQAZIgGgPIgUAAIgFAPIgHAAIATgxIAGAAIAUAxgAgCgJIgGAOIAQAAIgGgNIgCgKIgCAJg");
	this.shape_18.setTransform(220.45,242.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAEIAAgGIAFAAIAAAGg");
	this.shape_19.setTransform(214.975,244.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AANAZIAAgXIgZAAIAAAXIgGAAIAAgxIAGAAIAAAVIAZAAIAAgVIAGAAIAAAxg");
	this.shape_20.setTransform(211.175,242.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAUIAAAEIgFAAIAAgwIAFAAIAAASQAFgFAFAAIAFABQADABADADIACAGIABAGQABAJgFAFQgFAFgGAAQgFAAgEgFgAgGgDQgDADAAAGQAAAHACACQACAFAFAAQAEAAACgDQADgEABgHQgBgGgDgDQgDgDgDAAQgDAAgDADg");
	this.shape_21.setTransform(206.55,242.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASASIAAgVIAAgFIgDgDIgDgBQgEAAgCADQgDACAAAGIAAATIgFAAIAAgWIgBgGQgCgCgDAAIgFABIgDAEIgBAHIAAASIgGAAIAAgiIAFAAIAAAFQACgDADgCQACgBAEAAQAEAAADABQABACABADQAEgGAHAAQAFAAADADQADADAAAGIAAAXg");
	this.shape_22.setTransform(201.325,243.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAWQgGgDgDgGQgDgGAAgHQAAgGADgHQADgFAGgEQAGgDAGAAQAFABAFABQAEACADADIADAIIgGACIgCgHIgFgCQgDgCgEAAQgDAAgEACQgDAAgCADIgDAFQgCAFAAAEQAAAGACAEQADAFAEADQAEABAEAAIAIgBIAHgEIAAgJIgPAAIAAgFIAVAAIAAASQgFADgFACQgFADgFAAQgHAAgGgEg");
	this.shape_23.setTransform(195.375,242.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAAAXQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgGIAAgTIgFAAIAAgFIAFAAIAAgJIAFgDIAAAMIAGAAIAAAFIgGAAIAAAUIAAADIABABIACABIADgBIABAGIgFAAIgEgBg");
	this.shape_24.setTransform(189.175,242.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAJASIAAgUIgBgGIgDgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgDACQgCADAAAHIAAASIgGAAIAAgiIAFAAIAAAFQAEgGAHAAIAGABIADADIACAEIAAAGIAAAVg");
	this.shape_25.setTransform(185.95,243.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAOQgFgFABgJQgBgIAFgFQAFgFAGAAQAIAAAEAFQAFAFgBAIIAAABIgZAAQAAAGADADQADAEAEAAQADAAACgCQADgCABgEIAGABQgBAGgEADQgFADgFAAQgIAAgEgFgAgFgKQgDADgBAEIATAAQgBgEgBgCQgDgEgEAAQgEAAgCADg");
	this.shape_26.setTransform(181.8,243.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASASIAAgVIAAgFIgDgDIgDgBQgEAAgCADQgDACAAAGIAAATIgFAAIAAgWIgBgGQgCgCgDAAIgFABIgDAEIgBAHIAAASIgGAAIAAgiIAFAAIAAAFQACgDADgCQACgBAEAAQAEAAADABIACAFQAEgGAHAAQAFAAADADQADADAAAGIAAAXg");
	this.shape_27.setTransform(176.675,243.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAZIAAgwIAGAAIAAAEQACgCACgBQADgCADAAQAEAAAEADQADACABAEQACAEAAAGQAAAFgCAEQgCAEgDACQgEADgEAAQgCAAgDgCIgDgDIAAARgAgGgQQgDAEAAAHQAAAGADADQADADADAAQADAAADgDQAEgEAAgFQAAgIgEgDQgDgDgDgBQgDABgDADg");
	this.shape_28.setTransform(171.65,243.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLAOQgFgFABgJQgBgJAGgFQAFgEAFAAQAIAAAEAFQAFAFgBAIQAAAGgCAEQgBAEgFACQgEADgEAAQgHAAgEgFgAgGgJQgEADAAAGQAAAHAEADQADAEADAAQAEAAADgEQAEgDAAgHQAAgGgEgDQgDgEgEAAQgDAAgDAEg");
	this.shape_29.setTransform(167.4,243.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_30.setTransform(164.4,242.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJQAAgIAFgFQAFgFAGAAQAHAAAFAFQAEAFAAAIIAAABIgZAAQAAAGADADQADAEADAAQAEAAACgCQADgCABgEIAGABQgCAGgEADQgDADgHAAQgGAAgFgFgAgFgKQgEADAAAEIATAAQAAgEgCgCQgDgEgFAAQgDAAgCADg");
	this.shape_31.setTransform(161.35,243.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCASIgNgjIAGAAIAIAUIABAIIACgHIAIgVIAGAAIgNAjg");
	this.shape_32.setTransform(157.425,243.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAOQgEgFgBgJQABgIAEgFQAFgFAGAAQAHAAAFAFQAEAFABAIIAAABIgaAAQAAAGADADQADAEADAAQAEAAACgCQACgCACgEIAGABQgCAGgEADQgEADgGAAQgHAAgEgFgAgGgKQgDADAAAEIATAAQgBgEgBgCQgDgEgFAAQgDAAgDADg");
	this.shape_33.setTransform(153.4,243.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIARAAIAHABQAFABADADQADADACAFQACAFAAAGQAAAFgBAFQgBAEgCADIgFAEQgCACgEABIgHABgAgNATIALAAIAGgBQADgBACgCIADgGQACgEAAgFQAAgHgDgEQgCgEgEgCIgIgBIgKAAg");
	this.shape_34.setTransform(148.775,242.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AANAZIgGgLIgFgGIgCgEIgDgBIgEAAIgHAAIAAAWIgHAAIAAgxIAVAAQAHAAADACIAGAEQACAEAAAEQAAAFgEAEQgDACgHABIAEADIAFAGIAJAOgAgOgCIAOAAIAGgBIAEgDIABgEQAAgEgDgCQgCgCgGAAIgOAAg");
	this.shape_35.setTransform(141.375,242.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRAZIAAgxIAiAAIAAAGIgcAAIAAAPIAaAAIAAAFIgaAAIAAARIAdAAIAAAGg");
	this.shape_36.setTransform(136.075,242.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKAWQgGgDgDgGQgDgGAAgHQAAgGADgHQADgFAGgEQAGgDAGAAQAFABAFABQAEACADADIADAIIgGACIgCgHIgFgCQgDgCgEAAQgDAAgEACQgDAAgCADIgDAFQgCAFAAAEQAAAGACAEQADAFAEADQAEABAEAAIAIgBIAHgEIAAgJIgPAAIAAgFIAVAAIAAASQgFADgFACQgFADgFAAQgHAAgGgEg");
	this.shape_37.setTransform(130.625,242.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAQAZIgGgPIgUAAIgFAPIgHAAIATgxIAGAAIAUAxgAgCgJIgGAOIAQAAIgFgNIgDgKIgCAJg");
	this.shape_38.setTransform(125.35,242.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDAZIAAgVIgTgcIAIAAIAKAPIAEAJIAFgJIAKgPIAIAAIgUAcIAAAVg");
	this.shape_39.setTransform(120.925,242.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKAUQgFgGAAgOQAAgIABgFQACgFAEgDQAEgDAEAAQAEAAADABQADACACADIADAHIABALQAAAJgCAFQgBAFgEADQgDADgGAAQgGAAgEgFgAgGgQQgDAFAAALQAAAMADAEQADAEADAAQAEAAADgEQADgEAAgMQAAgLgDgEQgDgEgEAAQgDAAgDADg");
	this.shape_40.setTransform(114.25,242.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgPAZIABgEQABgEADgDIAHgHIAKgKQADgEAAgDQAAgEgCgCQgDgDgEAAQgEAAgCADQgDADAAAEIgGAAQABgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIgBAGIgEAFIgJAIIgGAHIgDADIAXAAIAAAGg");
	this.shape_41.setTransform(110.025,242.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAUQgEgGAAgOQAAgIABgFQACgFAEgDQADgDAFAAQAEAAADABQADACACADIADAHIABALQAAAJgCAFQgCAFgDADQgDADgGAAQgGAAgFgFgAgGgQQgDAFAAALQAAAMADAEQADAEADAAQAEAAADgEQADgEAAgMQAAgLgDgEQgDgEgEAAQgDAAgDADg");
	this.shape_42.setTransform(105.95,242.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPAZIABgEQABgEADgDIAHgHIAKgKQADgEAAgDQAAgEgCgCQgDgDgEAAQgEAAgCADQgDADAAAEIgGAAQABgHAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIgBAGIgEAFIgJAIIgGAHIgDADIAXAAIAAAGg");
	this.shape_43.setTransform(101.725,242.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgLAWQgGgDgEgGQgEgGAAgHQAAgGAEgGQAEgGAGgDQAFgDAGAAQAGAAAHADQAFADAEAGQADAGAAAGQAAAHgDAGQgEAGgFADQgHADgGAAQgGAAgFgDgAgKgRQgFACgDAFQgCAFAAAFQAAAFACAGQADAFAFACQAFADAFAAQAFAAAFgDQAGgCACgFQADgGAAgFQAAgFgDgFQgCgFgGgCQgFgDgFAAQgFAAgFADgAgJALQgDgEAAgHQAAgDABgEQACgDADgCQADgBADAAQAFAAACACQADACACAEIgFABIgCgEIgFgBQgCAAgDACQgDADAAAEQAAAFADADQACADADAAQADAAACgCQADgCAAgDIAEABQgBAFgDACQgEADgEAAQgFAAgEgEg");
	this.shape_44.setTransform(94.75,242.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAEAgQgEgGgEgJQgDgIAAgJQAAgHADgHQADgJAFgIIAEAAIgFAKIgDAJIgBAMQAAAQAJAQg");
	this.shape_45.setTransform(90.775,243.075);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAAAXQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgGIAAgTIgFAAIAAgFIAFAAIAAgJIAFgDIAAAMIAGAAIAAAFIgGAAIAAAUIAAADIABABIACABIADgBIABAGIgFAAIgEgBg");
	this.shape_46.setTransform(85.975,242.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAJAZIAAgXQAAgDgCgCQgCgDgEAAIgEACQgCABgCADIAAAFIAAAUIgHAAIAAgxIAHAAIAAASQAEgFAFAAQAEAAADACQADABABADIACAHIAAAXg");
	this.shape_47.setTransform(82.75,242.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKAWQgDgDAAgFIAGABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQACACADgBQAEABACgCQADgCAAgDIABgHQgEAEgGAAQgGAAgEgGQgFgFAAgGQAAgFACgFQACgEAEgCQADgCAEgBQAGAAAEAGIAAgFIAGAAIAAAeQAAAJgCADQgBAEgEABQgEADgFAAQgGAAgEgEgAgFgQQgDADAAAGQAAAHACADQADADADAAQAFAAACgDQADgDAAgHQAAgGgDgDQgDgDgEAAQgDAAgCADg");
	this.shape_48.setTransform(78.475,243.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgRIAAgHIAFAAIAAAHg");
	this.shape_49.setTransform(75.6,242.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJASIAAgiIAGAAIAAAFIADgFIADgBQADAAAEACIgCAFIgFgBQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgBAGIAAASg");
	this.shape_50.setTransform(73.625,243.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAYIgBgGIAEABIADgBIACgCIACgEIAAgBIgOgjIAHAAIAIAVIABAHIACgHIAIgVIAHAAIgPAjIgCAIIgEAEQgCACgCAAIgEgBg");
	this.shape_51.setTransform(70.15,243.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOAZIAAgwIAFAAIAAAEQACgCACgBQADgCADAAQAEAAAEADQADACABAEQACAEAAAGQAAAFgCAEQgCAEgDACQgEADgEAAQgCAAgDgCIgDgDIAAARgAgGgQQgDAEAAAHQAAAGADADQADADADAAQADAAADgDQAEgEAAgFQAAgIgEgDQgDgDgDgBQgDABgDADg");
	this.shape_52.setTransform(66.25,243.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgLAOQgFgFABgJQgBgJAGgFQAEgEAGAAQAHAAAFAFQAFAFgBAIQAAAGgBAEQgCAEgFACQgEADgEAAQgHAAgEgFgAgGgJQgEADAAAGQAAAHAEADQADAEADAAQAEAAADgEQADgDABgHQgBgGgDgDQgDgEgEAAQgDAAgDAEg");
	this.shape_53.setTransform(62,243.075);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLAWQgFgDgCgHQgDgGAAgGQAAgHADgGQADgFAGgEQAFgDAFAAQAIABAFADQAFAEACAHIgHABQgBgFgDgCQgEgDgFAAQgEAAgEADQgEADgCAEQgBAFAAAEQAAAGACAEQACAFADADQAEACAEAAQAFAAAEgDQAEgEABgGIAHACQgCAIgGAEQgFAFgIAAQgHAAgFgEg");
	this.shape_54.setTransform(57.275,242.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(168));

}).prototype = p = new cjs.MovieClip();


(lib.S_Perso2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Perso2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.S_Perso2, new cjs.Rectangle(0,0,32,58), null);


(lib.S_Munitions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Muntion();
	this.instance.parent = this;
	this.instance.setTransform(0,18.5,1,1,-29.9993);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.S_Munitions, new cjs.Rectangle(0,0,37.1,27.2), null);


(lib.S_foam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.foamed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.S_foam, new cjs.Rectangle(0,0,30,53), null);


(lib.Perso_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Perso();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Perso_1, new cjs.Rectangle(0,0,141,182), null);


(lib.Séquence_1_Perso2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Perso2
	this.instance = new lib.S_Perso2();
	this.instance.parent = this;
	this.instance.setTransform(104.2,154.9,1,1,0,0,0,16,28.9);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Perso2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(242,126);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:29,x:123.45,y:155,alpha:0.0435},0).wait(1).to({x:141.05,alpha:0.087},0).wait(1).to({x:157.05,alpha:0.1304},0).wait(1).to({x:171.5,alpha:0.1739},0).wait(1).to({x:184.55,alpha:0.2174},0).wait(1).to({x:196.2,alpha:0.2609},0).wait(1).to({x:206.55,alpha:0.3043},0).wait(1).to({x:215.7,alpha:0.3478},0).wait(1).to({x:223.7,alpha:0.3913},0).wait(1).to({x:230.65,alpha:0.4348},0).wait(1).to({x:236.6,alpha:0.4783},0).wait(1).to({x:241.6,alpha:0.5217},0).wait(1).to({x:245.8,alpha:0.5652},0).wait(1).to({x:249.25,alpha:0.6087},0).wait(1).to({x:252,alpha:0.6522},0).wait(1).to({x:254.15,alpha:0.6957},0).wait(1).to({x:255.75,alpha:0.7391},0).wait(1).to({x:256.9,alpha:0.7826},0).wait(1).to({x:257.7,alpha:0.8261},0).wait(1).to({x:258.15,alpha:0.8696},0).wait(1).to({x:258.4,alpha:0.913},0).wait(1).to({x:258.5,alpha:0.9565},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(33).to({_off:false,regY:28.9,y:154.9},0).wait(9).to({regY:29,y:155,alpha:0.9545},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.8636},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.7727},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.6818},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.5909},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.4091},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.3182},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.2273},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.1364},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.0455},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(24).to({x:241,y:124},0).wait(1).to({x:242,y:126},0).wait(1).to({x:243,y:124},0).wait(1).to({x:242,y:126},0).wait(1).to({x:240,y:124},0).wait(1).to({x:243,y:126},0).wait(1).to({x:244,y:124},0).wait(1).to({x:241,y:126},0).wait(1).to({x:240,y:124},0).to({_off:true},1).wait(111));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_Perso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Perso
	this.instance = new lib.Perso_1();
	this.instance.parent = this;
	this.instance.setTransform(-76.5,159,1,1,0,0,0,70.5,91);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({x:-56.75},0).wait(1).to({x:-38.75},0).wait(1).to({x:-22.35},0).wait(1).to({x:-7.55},0).wait(1).to({x:5.8},0).wait(1).to({x:17.7},0).wait(1).to({x:28.35},0).wait(1).to({x:37.7},0).wait(1).to({x:45.9},0).wait(1).to({x:53},0).wait(1).to({x:59.1},0).wait(1).to({x:64.25},0).wait(1).to({x:68.55},0).wait(1).to({x:72},0).wait(1).to({x:74.85},0).wait(1).to({x:77},0).wait(1).to({x:78.65},0).wait(1).to({x:79.85},0).wait(1).to({x:80.65},0).wait(1).to({x:81.1},0).wait(1).to({x:81.35},0).wait(1).to({x:81.5},0).wait(72).to({x:80.95},0).wait(2).to({x:80.7},0).wait(1).to({x:80.05},0).wait(1).to({x:78.8},0).wait(1).to({x:76.8},0).wait(1).to({x:73.75},0).wait(1).to({x:69.6},0).wait(1).to({x:64},0).wait(1).to({x:56.8},0).wait(1).to({x:47.8},0).wait(1).to({x:36.85},0).wait(1).to({x:23.65},0).wait(1).to({x:8.1},0).wait(1).to({x:-10.05},0).wait(1).to({x:-31},0).wait(1).to({x:-54.95},0).wait(1).to({x:-82.05},0).wait(1).to({x:-112.55},0).wait(1).to({x:-146.6},0).wait(1).to({x:-184.45},0).wait(1).to({x:-226.3},0).wait(1).to({x:-263.05},0).wait(3).to({x:-76.5},0).wait(26));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_Muntion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Muntion
	this.instance = new lib.S_Munitions();
	this.instance.parent = this;
	this.instance.setTransform(-35,105.65,1,1,0,0,0,18.5,13.6);
	this.instance._off = true;

	this.instance_1 = new lib.Muntion();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113,104.85,1,1,-29.9993);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({x:-13.95},0).wait(1).to({x:5.25},0).wait(1).to({x:22.65},0).wait(1).to({x:38.45},0).wait(1).to({x:52.7},0).wait(1).to({x:65.4},0).wait(1).to({x:76.7},0).wait(1).to({x:86.7},0).wait(1).to({x:95.45},0).wait(1).to({x:103},0).wait(1).to({x:109.5},0).wait(1).to({x:115},0).wait(1).to({x:119.6},0).wait(1).to({x:123.35},0).wait(1).to({x:126.35},0).wait(1).to({x:128.65},0).wait(1).to({x:130.45},0).wait(1).to({x:131.7},0).wait(1).to({x:132.55},0).wait(1).to({x:133.05},0).wait(1).to({x:133.3},0).wait(1).to({x:133.45},0).wait(2).to({x:133,y:105.1},0).wait(15).to({rotation:2.4999,x:136.25,y:119.35},0).wait(1).to({rotation:4.9999,x:139.5,y:133.55},0).wait(1).to({rotation:7.4998,x:142.75,y:147.8},0).wait(1).to({rotation:9.9997,x:145.95,y:162.05},0).wait(1).to({rotation:12.4997,x:149.2,y:176.3},0).wait(1).to({rotation:14.9996,x:152.45,y:190.55},0).wait(1).to({rotation:17.4995,x:155.7,y:204.75},0).wait(1).to({rotation:19.9995,x:158.95,y:219.1},0).wait(1).to({rotation:22.4994,x:162.2,y:233.3},0).wait(1).to({rotation:24.9993,x:165.45,y:247.55},0).wait(1).to({rotation:27.4993,x:168.65,y:261.75},0).wait(1).to({rotation:29.9992,x:171.95,y:276.05},0).to({_off:true},1).wait(94));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_foam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// foam
	this.instance = new lib.S_foam();
	this.instance.parent = this;
	this.instance.setTransform(255.05,152.5,1,1,0,0,0,15,26.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).wait(1).to({alpha:0.0452},0).wait(1).to({alpha:0.0904},0).wait(1).to({alpha:0.1357},0).wait(1).to({alpha:0.1809},0).wait(1).to({alpha:0.2261},0).wait(1).to({alpha:0.2713},0).wait(1).to({alpha:0.3166},0).wait(1).to({alpha:0.3618},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.4522},0).wait(1).to({alpha:0.4975},0).wait(1).to({alpha:0.5427},0).wait(1).to({alpha:0.5879},0).wait(1).to({alpha:0.6331},0).wait(1).to({alpha:0.6784},0).wait(1).to({alpha:0.7236},0).wait(1).to({alpha:0.7688},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.8593},0).wait(1).to({alpha:0.9045},0).wait(1).to({alpha:0.9497},0).wait(1).to({alpha:0.9949},0).wait(1).to({alpha:0.9883},0).wait(41).to({alpha:1},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).wait(25));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.TheCycleBanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_167 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(167).call(this.frame_167).wait(1));

	// TheCycle_Logo_White_obj_
	this.TheCycle_Logo_White = new lib.Séquence_1_TheCycle_Logo_White();
	this.TheCycle_Logo_White.name = "TheCycle_Logo_White";
	this.TheCycle_Logo_White.parent = this;
	this.TheCycle_Logo_White.setTransform(209.5,67.5,1,1,0,0,0,209.5,67.5);
	this.TheCycle_Logo_White.depth = 0;
	this.TheCycle_Logo_White.isAttachedToCamera = 0
	this.TheCycle_Logo_White.isAttachedToMask = 0
	this.TheCycle_Logo_White.layerDepth = 0
	this.TheCycle_Logo_White.layerIndex = 0
	this.TheCycle_Logo_White.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.TheCycle_Logo_White).wait(168));

	// pegi_12_obj_
	this.pegi_12 = new lib.Séquence_1_pegi_12();
	this.pegi_12.name = "pegi_12";
	this.pegi_12.parent = this;
	this.pegi_12.setTransform(20,226.5,1,1,0,0,0,20,226.5);
	this.pegi_12.depth = 0;
	this.pegi_12.isAttachedToCamera = 0
	this.pegi_12.isAttachedToMask = 0
	this.pegi_12.layerDepth = 0
	this.pegi_12.layerIndex = 1
	this.pegi_12.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pegi_12).wait(168));

	// Copyright____2020_YAGER_Development_GmbH__All_rights_reserved___obj_
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__ = new lib.Séquence_1_Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__();
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.name = "Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__";
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.parent = this;
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.setTransform(169.6,243.1,1,1,0,0,0,169.6,243.1);
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.depth = 0;
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.isAttachedToCamera = 0
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.isAttachedToMask = 0
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.layerDepth = 0
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.layerIndex = 2
	this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Copyright____2020_YAGER_Development_GmbH__All_rights_reserved__).wait(168));

	// PROSPECT_FORTUNA_III_obj_
	this.PROSPECT_FORTUNA_III = new lib.Séquence_1_PROSPECT_FORTUNA_III();
	this.PROSPECT_FORTUNA_III.name = "PROSPECT_FORTUNA_III";
	this.PROSPECT_FORTUNA_III.parent = this;
	this.PROSPECT_FORTUNA_III.setTransform(208.5,218.5,1,1,0,0,0,208.5,218.5);
	this.PROSPECT_FORTUNA_III.depth = 0;
	this.PROSPECT_FORTUNA_III.isAttachedToCamera = 0
	this.PROSPECT_FORTUNA_III.isAttachedToMask = 0
	this.PROSPECT_FORTUNA_III.layerDepth = 0
	this.PROSPECT_FORTUNA_III.layerIndex = 3
	this.PROSPECT_FORTUNA_III.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.PROSPECT_FORTUNA_III).wait(168));

	// PLAY_NOW_obj_
	this.PLAY_NOW = new lib.Séquence_1_PLAY_NOW();
	this.PLAY_NOW.name = "PLAY_NOW";
	this.PLAY_NOW.parent = this;
	this.PLAY_NOW.setTransform(210.5,184.5,1,1,0,0,0,210.5,184.5);
	this.PLAY_NOW.depth = 0;
	this.PLAY_NOW.isAttachedToCamera = 0
	this.PLAY_NOW.isAttachedToMask = 0
	this.PLAY_NOW.layerDepth = 0
	this.PLAY_NOW.layerIndex = 4
	this.PLAY_NOW.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.PLAY_NOW).wait(168));

	// Vignette_obj_
	this.Vignette = new lib.Séquence_1_Vignette();
	this.Vignette.name = "Vignette";
	this.Vignette.parent = this;
	this.Vignette.setTransform(150,125,1,1,0,0,0,150,125);
	this.Vignette.depth = 0;
	this.Vignette.isAttachedToCamera = 0
	this.Vignette.isAttachedToMask = 0
	this.Vignette.layerDepth = 0
	this.Vignette.layerIndex = 5
	this.Vignette.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Vignette).wait(168));

	// foam_obj_
	this.foam = new lib.Séquence_1_foam();
	this.foam.name = "foam";
	this.foam.parent = this;
	this.foam.depth = 0;
	this.foam.isAttachedToCamera = 0
	this.foam.isAttachedToMask = 0
	this.foam.layerDepth = 0
	this.foam.layerIndex = 6
	this.foam.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.foam).wait(66).to({regX:255.1,regY:152.5,x:255.1,y:152.5},0).wait(22).to({regX:0,regY:0,x:0,y:0},0).wait(42).to({regX:255.1,regY:152.5,x:255.1,y:152.5},0).wait(38));

	// Perso2_obj_
	this.Perso2 = new lib.Séquence_1_Perso2();
	this.Perso2.name = "Perso2";
	this.Perso2.parent = this;
	this.Perso2.setTransform(104.2,155,1,1,0,0,0,104.2,155);
	this.Perso2.depth = 0;
	this.Perso2.isAttachedToCamera = 0
	this.Perso2.isAttachedToMask = 0
	this.Perso2.layerDepth = 0
	this.Perso2.layerIndex = 7
	this.Perso2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Perso2).wait(1).to({regX:182.1,regY:154,x:182.1,y:154},0).wait(23).to({regX:104.2,regY:155,x:104.2,y:155},0).wait(42).to({regX:182.1,regY:154,x:182.1,y:154},0).wait(22).to({regX:104.2,regY:155,x:104.2,y:155},0).wait(80));

	// Tir_obj_
	this.Tir = new lib.Séquence_1_Tir();
	this.Tir.name = "Tir";
	this.Tir.parent = this;
	this.Tir.depth = 0;
	this.Tir.isAttachedToCamera = 0
	this.Tir.isAttachedToMask = 0
	this.Tir.layerDepth = 0
	this.Tir.layerIndex = 8
	this.Tir.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Tir).wait(168));

	// Perso_obj_
	this.Perso = new lib.Séquence_1_Perso();
	this.Perso.name = "Perso";
	this.Perso.parent = this;
	this.Perso.depth = 0;
	this.Perso.isAttachedToCamera = 0
	this.Perso.isAttachedToMask = 0
	this.Perso.layerDepth = 0
	this.Perso.layerIndex = 9
	this.Perso.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Perso).wait(24).to({regX:-90.8,regY:159,x:-90.8,y:159},0).wait(23).to({regX:0,regY:0,x:0,y:0},0).wait(71).to({regX:-90.8,regY:159,x:-90.8,y:159},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(26));

	// Muntion_obj_
	this.Muntion = new lib.Séquence_1_Muntion();
	this.Muntion.name = "Muntion";
	this.Muntion.parent = this;
	this.Muntion.depth = 0;
	this.Muntion.isAttachedToCamera = 0
	this.Muntion.isAttachedToMask = 0
	this.Muntion.layerDepth = 0
	this.Muntion.layerIndex = 10
	this.Muntion.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Muntion).wait(24).to({regX:70.7,regY:191.7,x:70.7,y:191.7},0).wait(23).to({regX:0,regY:0,x:0,y:0},0).wait(15).to({regX:70.7,regY:191.7,x:70.7,y:191.7},0).wait(12).to({regX:0,regY:0,x:0,y:0},0).wait(94));

	// Decor_obj_
	this.Decor = new lib.Séquence_1_Decor();
	this.Decor.name = "Decor";
	this.Decor.parent = this;
	this.Decor.setTransform(150,125,1,1,0,0,0,150,125);
	this.Decor.depth = 0;
	this.Decor.isAttachedToCamera = 0
	this.Decor.isAttachedToMask = 0
	this.Decor.layerDepth = 0
	this.Decor.layerIndex = 11
	this.Decor.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Decor).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,125,483.5,156.10000000000002);
// library properties:
lib.properties = {
	id: '342EFF05FE37614FB70335D96C750D83',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Decor.jpg", id:"Decor"},
		{src:"images/foamed.png", id:"foamed"},
		{src:"images/Muntion.png", id:"Muntion"},
		{src:"images/pegi12.png", id:"pegi12"},
		{src:"images/Perso.png", id:"Perso"},
		{src:"images/Persocopy.png", id:"Persocopy"},
		{src:"images/Perso2.png", id:"Perso2"},
		{src:"images/PLAYNOW.png", id:"PLAYNOW"},
		{src:"images/PROSPECTFORTUNAIII.png", id:"PROSPECTFORTUNAIII"},
		{src:"images/TheCycle_Logo_White.png", id:"TheCycle_Logo_White"},
		{src:"images/Vignette.png", id:"Vignette"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['342EFF05FE37614FB70335D96C750D83'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;