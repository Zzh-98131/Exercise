x.extend(kb.prototype, {
	yf: function() {
		this.D && this.Ie(this.D)
	},
	initialize: function(a) {
		Dc.prototype.initialize.call(this, a);
		this.nr();
		this.Vv();
		this.Ba();
		this.ca = {};
		!G() ? this.vQ() : this.uQ();
		this.Wv(a.ga());
		this.wQ(a);
		this.k.OW && this.D_();
		return this.C
	},
	nr: function() {
		this.Si || (this.Si = o, this.pT = 19, this.wo = -1, this.Zv = 6, this.bk = 1, this.kl = this.mo = -1, this.Xv =
			this.wJ = this.Of = p, this.Wu = "1100")
	},
	wQ: function(a) {
		var b = this;
		a.addEventListener("zoomend", function() {
			b.D && (b.Wv(b.D.ga()), !b.HI && b.sr && (b.Df = setTimeout(function() {
				b.FA()
			}, 1E3)))
		});
		a.addEventListener("mousewheel", function() {
			b.D && (b.D.B.Zo && b.sr) && (b.Df && (clearTimeout(b.Df), b.Df = p), b.uJ())
		});
		a.addEventListener("load", function() {
			b.D && b.Wv(b.D.ga())
		});
		a.addEventListener("maptypechange", function() {
			b.D && b.ke()
		});
		a.addEventListener("zoomspanchange", function() {
			b.D && b.ke()
		})
	},
	ke: function() {
		this.Vv();
		this.vn(this.k.type);
		this.D && this.Wv(this.D.ga())
	},
	Vv: function() {
		var a = this.D.oa();
		this.Uh = this.D.B.fc;
		this.Gf = this.D.B.Zb;
		this.sr = a == Pa || this.Uh != a.gp() || this.Gf != a.Bm() ? q : o;
		this.C && (this.C.style.width = this.OH(0).width + "px");
		this.k.RF || (this.sr = q);
		this.wo = this.Gf - this.Uh + 1;
		this.mo = this.bk + (this.wo - 1) * this.Zv
	},
	Ba: function() {
		Dc.prototype.Ba.call(this);
		var a = 6 == x.da.ma ? " BMap_ie6" : "",
			b = " BMap_stdMpType" + this.k.type,
			c = this.C;
		x.K.Ta(c, "BMap_stdMpCtrl");
		x.K.Ta(c, a);
		x.K.Ta(c, b);
		c.innerHTML = this.cr(this.k.type);
		this.LB(x.da.opera ? "pointer" : F.Xb);
		this.kd = x.$(c.children[0]);
		a = this.Of = x.$(c.children[1]);
		this.Hh = x.$(a.children[0]);
		this.ag = x.$(a.children[1]);
		this.wJ = x.$(a.children[2]);
		this.Xv = x.$(a.children[2].children[0]);
		this.Yv = x.$(a.children[2].children[1]);
		this.uG = this.C.children[1];
		this.LD = this.C.children[2];
		this.vn(this.k.type)
	},
	wU: function() {
		var a = this.OH(this.k.type),
			b = a.width,
			c = a.height,
			d = a.Eu,
			a = a.ku,
			e = (this.pT - this.wo) * this.Zv;
		0 == this.k.type && (c = 0 <= c - e ? c - e : 0, d = 0 <= d - e ? d - e : 0, a = 0 <= a - e ? a - e : 0);
		this.C.style.width = b + "px";
		this.C.style.height = c + "px";
		this.Of.style.height = d + "px";
		this.Of.style.width = b + "px";
		this.ag.style.top = G() ? "44px" : d - 21 + "px";
		this.wJ.style.height = a + "px";
		this.Xv.style.height = a + "px";
		this.Of.children[0].style.left = 3 == this.k.type ? this.Of.children[1].style.left = "0" : this.Of.children[1].style
			.left = ""
	},
	OH: function(a) {
		var b = 62;
		if (!this.k.RF || this.D.oa() == Pa) b = 37;
		return [{
			width: b,
			height: 204,
			Eu: 159,
			jz: 37,
			ku: 120,
			Wy: 120
		}, {
			width: 37,
			height: 97,
			Eu: 42,
			jz: 37,
			ku: 0,
			Wy: 0
		}, {
			width: 37,
			height: 57,
			Eu: 0,
			jz: 0,
			ku: 0,
			Wy: 0
		}, {
			width: 22,
			height: 42,
			Eu: 42,
			jz: 18,
			ku: 0,
			Wy: 0
		}, {
			width: 35,
			height: 71,
			jz: 35,
			Eu: 71,
			ku: 0,
			Wy: 0
		}][a]
	},
	cr: function() {
		var a = [];
		a.push(this.qA());
		a.push(this.rA());
		a.push(this.bS());
		return a.join("")
	},
	qA: ea(
		'<div class="BMap_stdMpPan"><div class="BMap_button BMap_panN" title="\u5411\u4e0a\u5e73\u79fb"></div><div class="BMap_button BMap_panW" title="\u5411\u5de6\u5e73\u79fb"></div><div class="BMap_button BMap_panE" title="\u5411\u53f3\u5e73\u79fb"></div><div class="BMap_button BMap_panS" title="\u5411\u4e0b\u5e73\u79fb"></div><div class="BMap_stdMpPanBg BMap_smcbg"></div></div>'
	),
	rA: function() {
		return G() ? [
				'<div class="BMap_stdMpZoom" style="width: 35px; height: 71px; background: rgba(255,255,255,.8); -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.4); border-radius: 3px;"><div class="BMap_button BMap_stdMpZoomIn" title="\u653e\u5927\u4e00\u7ea7" style="position: initial; background: initial; border-radius: initial; box-shadow: initial; width: 35px; height: 35px;">',
				'<div class="BMap_smcbg" style="position: initial; width: 35px; height: 35px; background-image: url(' + z.la +
				'images/navigation-control/mobile/plus-28x29.png); background-size: 14px 15px; background-position: center; background-repeat: no-repeat;">',
				'</div></div><div class="BMap_button BMap_stdMpZoomOut" title="\u7f29\u5c0f\u4e00\u7ea7" style="position: initial; background: initial; border-radius: initial; box-shadow: initial; width: 35px; height: 35px; border-top: 1px solid #ececec;">',
				'<div class="BMap_smcbg" style="position: initial; width: 35px; height: 35px; background-image: url(' + z.la +
				'images/navigation-control/mobile/minus-30x6.png); background-size: 15px 3px; background-position: center; background-repeat: no-repeat;">',
				'</div></div><div class="BMap_stdMpSlider"><div class="BMap_stdMpSliderBgTop"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderBgBot"></div><div class="BMap_stdMpSliderMask" title="\u653e\u7f6e\u5230\u6b64\u7ea7\u522b"></div><div class="BMap_stdMpSliderBar" title="\u62d6\u52a8\u7f29\u653e"><div class="BMap_smcbg"></div></div></div><div class="BMap_zlHolder"><div class="BMap_zlSt"><div class="BMap_smcbg"></div></div><div class="BMap_zlCity"><div class="BMap_smcbg"></div></div><div class="BMap_zlProv"><div class="BMap_smcbg"></div></div><div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div></div></div>'
			].join("") :
			'<div class="BMap_stdMpZoom"><div class="BMap_button BMap_stdMpZoomIn" title="\u653e\u5927\u4e00\u7ea7"><div class="BMap_smcbg"></div></div><div class="BMap_button BMap_stdMpZoomOut" title="\u7f29\u5c0f\u4e00\u7ea7"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSlider"><div class="BMap_stdMpSliderBgTop"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderBgBot"></div><div class="BMap_stdMpSliderMask" title="\u653e\u7f6e\u5230\u6b64\u7ea7\u522b"></div><div class="BMap_stdMpSliderBar" title="\u62d6\u52a8\u7f29\u653e"><div class="BMap_smcbg"></div></div></div><div class="BMap_zlHolder"><div class="BMap_zlSt"><div class="BMap_smcbg"></div></div><div class="BMap_zlCity"><div class="BMap_smcbg"></div></div><div class="BMap_zlProv"><div class="BMap_smcbg"></div></div><div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div></div></div>'
	},
	n1: ea(
		'<div class="BMap_button BMap_stdMpZoomIn" title="\u653e\u5927\u4e00\u7ea7"><div class="BMap_smcbg"></div></div><div class="BMap_button BMap_stdMpZoomOut" title="\u7f29\u5c0f\u4e00\u7ea7"><div class="BMap_smcbg"></div></div>'
	),
	l1: ea(
		'<div class="BMap_stdMpSlider"><div class="BMap_stdMpSliderBgTop"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderBgBot"></div><div class="BMap_stdMpSliderMask" title="\u653e\u7f6e\u5230\u6b64\u7ea7\u522b"></div><div class="BMap_stdMpSliderBar" title="\u62d6\u52a8\u7f29\u653e"><div class="BMap_smcbg"></div></div></div>'
	),
	m1: ea(
		'<div class="BMap_zlHolder"><div class="BMap_zlSt"><div class="BMap_smcbg"></div></div><div class="BMap_zlCity"><div class="BMap_smcbg"></div></div><div class="BMap_zlProv"><div class="BMap_smcbg"></div></div><div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div></div>'
	),
	bS: function() {
		return G() ? [
			'<div class="BMap_stdMpGeolocation" style="position: initial; display: none; position: absolute; left: -' + (
				this.D.width - 46) + 'px; bottom: 0px;">',
			'<div class="BMap_geolocationContainer" style="position: initial; width: 38px; height: 38px; overflow: hidden; margin: 0px; margin-left: 10px; margin-bottom: 20px; box-sizing: border-box;">',
			'<div class="BMap_geolocationIconBackground" style="position: initial; width: 38px; height: 38px; background-image: url(\'' +
			z.la +
			"images/navigation-control/geolocation-control/mobile/background-76x76.png'); background-size: 38px 38px; background-repeat: no-repeat; background-position: center;\">",
			'<div style="position: initial; padding-top: 9px; padding-left: 9px;">',
			'<div class="BMap_geolocationIcon" style="position: initial; width: 20px; height: 20px; cursor: pointer; background-image: url(\'' +
			z.la +
			"images/navigation-control/geolocation-control/mobile/default-40x40.png'); background-size: 20px 20px; background-repeat: no-repeat; background-position: center;\"></div>",
			"</div></div></div></div>"
		].join("") : [
			'<div class="BMap_stdMpGeolocation" style="position: initial; display: none; margin-top: 43px; margin-left: 10px;"><div class="BMap_geolocationContainer" style="position: initial; width: 24px; height: 24px; overflow: hidden; margin: 0px; box-sizing: border-box;">',
			'<div class="BMap_geolocationIconBackground" style="width: 24px; height: 24px; background-image: url(' + z.la +
			'images/navigation-control/geolocation-control/pc/bg-20x20.png); background-size: 20px 20px; background-position: 3px 3px; background-repeat: no-repeat;">',
			'<div class="BMap_geolocationIcon" style="position: initial; width: 24px; height: 24px; cursor: pointer; background-image: url(\'' +
			z.la +
			"images/navigation-control/geolocation-control/pc/success-10x10.png'); background-size: 10px 10px; background-repeat: no-repeat; background-position: center;\"></div>",
			"</div></div></div>"
		].join("")
	},
	nS: function(a) {
		var b = this.nS;
		"undefined" === typeof b.qK && (b.qK = me.C.getElementsByTagName("*"));
		for (var b = b.qK, c = p, d = b.length, e = p, c = 0; c < d; ++c)
			if (e = b[c], e.className.toString().match(a)) return e;
		ca(Error("" + a + " Not found!"))
	},
	vn: function(a) {
		this.k.type = Xa(a) && 0 <= a && 3 >= a ? a : 0;
		G() && (this.k.type = 4);
		if (this.D && this.C) {
			var b = this.C;
			b.className = b.className.replace(/BMap_stdMpType[0-4]*/, "BMap_stdMpType" + this.k.type);
			this.wU();
			0 != a && x.K.Tb(b.children[1].children[2], "hvr");
			this.qc(this.k.anchor)
		}
	},
	op: function() {
		return this.k.type
	},
	vQ: function() {
		function a() {
			if (0 != (c.D.Sa & 128)) {
				var e = x.$(g);
				c.kl = parseInt(e.style.top);
				x.K.Tb(g, "h");
				c.D.Sa &= -129;
				d && (g && g.releaseCapture) && g.releaseCapture();
				x.da.opera || c.LB(F.Xb);
				c.D.Hg(c.Gf + 1 - Math.round(parseFloat(c.kl - c.bk) / parseFloat(c.mo - c.bk) * (c.wo - 1) + 1));
				x.bd(document, "mousemove", b);
				x.bd(document, "mouseup", a)
			}
		}

		function b(a) {
			0 != (c.D.Sa & 128) && (a = window.event || a, a = c.kl + (a.pageY || a.clientY) - c.ca.Jk, a < c.bk ? a = c.bk :
				a > c.mo && (a = c.mo), g.style.top = a + "px", c.Yv.style.top = a + "px", c.Yv.style.height = parseInt(c.Xv.style
					.height) - a + 4 + "px")
		}
		var c = this,
			d = c.C;
		x.M(this.Of, "mouseover", function() {
			c.sr && (c.HI = o, c.Df && (clearTimeout(c.Df), c.Df = p), c.uJ())
		});
		x.M(this.Of, "mouseout", function() {
			c.sr && (c.Df && clearTimeout(c.Df), c.HI = q, c.Df = setTimeout(function() {
				c.FA();
				c.Df = p
			}, 1E3))
		});
		x.M(d.children[0], "mouseover", function() {
			c.FA(o)
		});
		x.M(d.children[0].children[0], "click", function() {
			c.Hl(0, Math.round(c.D.height / 3))
		});
		x.M(d.children[0].children[1], "click", function() {
			c.Hl(Math.round(c.D.width / 3), 0)
		});
		x.M(d.children[0].children[2], "click", function() {
			c.Hl(-Math.round(c.D.width / 3), 0)
		});
		x.M(d.children[0].children[3], "click", function() {
			c.Hl(0, -Math.round(c.D.height / 3))
		});
		x.M(d.children[0].children[0], "mouseover", function() {
			c.kd.style.backgroundPosition = "0 -44px"
		});
		x.M(d.children[0].children[1], "mouseover", function() {
			c.kd.style.backgroundPosition = "0 -176px"
		});
		x.M(d.children[0].children[2], "mouseover", function() {
			c.kd.style.backgroundPosition = "0 -88px"
		});
		x.M(d.children[0].children[3], "mouseover", function() {
			c.kd.style.backgroundPosition = "0 -132px"
		});
		x.M(c.kd, "mouseout", function() {
			c.kd.style.backgroundPosition = "0 0"
		});
		var e = d.children[1].children;
		x.M(e[0], "click", function() {
			c.SJ()
		});
		x.M(e[1], "click", function() {
			c.TJ()
		});
		for (var f = 0; 5 > f; f++) x.M(d.children[0].children[f], "mouseup", function(a) {
			0 == (c.D.Sa & 128) && 0 == (c.D.Sa & 8) && na(a)
		}), x.M(d.children[0].children[f], "contextmenu", function(a) {
			Cb(a)
		}), x.M(d.children[0].children[f], "click", function(a) {
			Cb(a)
		});
		x.M(e[0], "mouseup", function(a) {
			0 == (c.D.Sa & 128) && 0 == (c.D.Sa & 8) && na(a)
		});
		x.M(e[1], "mouseup", function(a) {
			0 == (c.D.Sa & 128) && 0 == (c.D.Sa & 8) && na(a)
		});
		x.M(e[0], "contextmenu", function(a) {
			Cb(a)
		});
		x.M(e[1], "contextmenu", function(a) {
			Cb(a)
		});
		f = d.children[1].children[2].children[2];
		x.M(f, "mouseup", function(a) {
			0 == (c.D.Sa & 128) && 0 == (c.D.Sa & 8) && na(a)
		});
		x.M(e[0], "click", function(a) {
			na(a)
		});
		x.M(e[1], "click", function(a) {
			na(a)
		});
		x.M(e[0], "mouseover", function() {
			e[0].style.backgroundPosition = "0 -243px"
		});
		x.M(e[0], "mouseout", function() {
			0 == (c.D.Sa & 128) && (e[0].style.backgroundPosition = "0 -221px")
		});
		x.M(e[1], "mouseover", function() {
			e[1].style.backgroundPosition = "0 -287px"
		});
		x.M(e[1], "mouseout", function() {
			0 == (c.D.Sa & 128) && (e[1].style.backgroundPosition = "0 -265px")
		});
		x.M(f, "click", function(a) {
			na(a)
		});
		var g = d.children[1].children[2].children[3];
		x.M(g, "mouseup", function(a) {
			2 == a.button && na(a)
		});
		x.M(g, "contextmenu", function(a) {
			Cb(a)
		});
		x.M(this.Of.children[3].children[0], "click", function() {
			c.D.Hg(17)
		});
		x.M(this.Of.children[3].children[1], "click", function() {
			c.D.Hg(12)
		});
		x.M(this.Of.children[3].children[2], "click", function() {
			c.D.Hg(8)
		});
		x.M(this.Of.children[3].children[3], "click", function() {
			c.D.Hg(4)
		});
		x.M(f, "mousedown", function(a) {
			var a = window.event || a,
				b = 0,
				b = c.Gf + 1 - Math.round(c.wo * parseFloat((a.layerY || a.offsetY || 0) / (c.wo * c.Zv)));
			c.D.Hg(b)
		});
		x.M(g, "mouseover", function() {
			x.K.Ta(g, "h")
		});
		x.M(g, "mouseout", function() {
			0 == (c.D.Sa & 128) && x.K.Tb(g, "h")
		});
		x.M(g, "mousedown", function(d) {
			d = window.event || d;
			if (2 != d.button && !(x.da.ma && 1 != d.button)) return g.setCapture && g.setCapture(), c.D.Sa |= 128, c.ca.Jk =
				d.pageY || d.clientY || 0, x.da.opera || c.LB(F.Gd), x.M(document, "mousemove", b), x.M(document, "mouseup",
					a), na(d), Cb(d)
		})
	},
	uQ: function() {
		var a = this,
			b = a.C.children[1].children;
		ja.kL(b[0]);
		ja.kL(b[1]);
		ja.M(b[0], "tap", function() {
			a.SJ()
		});
		ja.M(b[1], "tap", function() {
			a.TJ()
		})
	},
	LB: function(a) {
		this.C.children[1].children[2].children[3].style.cursor = a
	},
	Hl: function(a, b) {
		this.D.yg(a, b)
	},
	SJ: function() {
		this.D.mG()
	},
	TJ: function() {
		this.D.nG()
	},
	Wv: function(a) {
		this.C && 0 == this.op() && (a = (this.Gf - a) * this.Zv + this.bk, this.kl = a > this.mo ? this.mo : a < this.bk ?
			this.bk : a, this.C.children[1].children[2].children[3].style.top = this.kl + "px", this.Yv.style.top = this.kl +
			"px", this.Yv.style.height = parseInt(this.Xv.style.height) - this.kl + 4 + "px")
	},
	FA: function(a) {
		0 == this.k.type && x.K.Tb(this.C.children[1].children[3], "hvr");
		a && this.Df && (clearTimeout(this.Df), this.Df = p)
	},
	uJ: function() {
		0 == this.k.type && this.k.RF && x.K.Ta(this.C.children[1].children[3], "hvr")
	},
	show: function() {
		Dc.prototype.show.call(this);
		if (8 > x.da.ma) {
			var a = this;
			setTimeout(function() {
				a.vn(a.k.type)
			}, 1)
		}
	},
	yY: function() {
		var a = this,
			b = {};
		G() ? (b.sj = a.LD.children[0], b.bp = b.sj.children[0].children[0].children[0]) : (b.sj = a.LD.children[0], b.MD =
			b.sj.children[0], b.bp = b.MD.children[0]);
		G() ? a.D.addEventListener("resize", function() {
			b.sj.parentNode.style.left = (-(a.D.width - 46)).toString() + "px"
		}) : 3 === a.k.type && (a.LD.style.marginLeft = "-2px");
		b.Ot = {
			"default": z.la + "images/navigation-control/geolocation-control/pc/success-10x10.png",
			loading: z.la + "images/navigation-control/geolocation-control/pc/loading-30x30.gif",
			success: z.la + "images/navigation-control/geolocation-control/pc/success-10x10.png",
			fail: z.la + "images/navigation-control/geolocation-control/pc/fail-10x10.png"
		};
		b.Ht = {
			"default": z.la + "images/navigation-control/geolocation-control/mobile/default-40x40.png",
			loading: z.la + "images/navigation-control/geolocation-control/mobile/loading-40x40.png",
			success: z.la + "images/navigation-control/geolocation-control/mobile/success-40x40.png",
			fail: z.la + "images/navigation-control/geolocation-control/mobile/fail-40x40.png"
		};
		var c;
		a.D.addEventListener("moveend", function() {
			if (c) {
				var d = a.D.pc();
				d.lng === c.lng && d.lat === c.lat ? G() ? b.Vb(b.Ht.success) : b.Vb(b.Ot.success) : G() ? b.Vb(b.Ht["default"]) :
					b.Vb(b.Ot["default"])
			}
		});
		x.M(b.bp, "click", function() {
			G() ? b.Vb(b.Ht.loading) : b.Vb(b.Ot.loading);
			(new Geolocation({
				timeout: 1E4
			})).getCurrentPosition(function(d) {
				G() ? b.Vb(b.Ht.success) : b.Vb(b.Ot.success);
				var d = new H(d.longitude, d.latitude),
					e = new V(d, {
						icon: new $c(z.la + "images/navigation-control/geolocation-control/point/position-icon-14x14.png", new L(
							14, 14))
					});
				a.D.Ja(e);
				a.D.Ed(d, 15);
				c = d
			}, function() {
				G() ? b.Vb(b.Ht.fail) : b.Vb(b.Ot.fail)
			})
		});
		b.Vb = function(a) {
			b.bp.style.backgroundImage = "url('" + a + "')"
		};
		this.yL = b;
		this.hX = o
	},
	D_: function() {
		G() || (this.hX || this.yY(), G() || (this.uG.style.top = "70px"), this.yL.sj.parentNode.style.display = "block")
	},
	t3: function() {
		G() || (this.uG.style.top = "45px");
		this.yL.sj.parentNode.style.display = "none"
	}
});
kb.prototype.setType = kb.prototype.vn;
