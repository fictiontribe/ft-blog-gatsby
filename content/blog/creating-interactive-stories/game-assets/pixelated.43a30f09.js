// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"YxMN":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

pixelated = function (t) {
  var e = {};

  function i(s) {
    if (e[s]) return e[s].exports;
    var n = e[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }

  return i.m = t, i.c = e, i.d = function (t, e, s) {
    i.o(t, e) || Object.defineProperty(t, e, {
      configurable: !1,
      enumerable: !0,
      get: s
    });
  }, i.r = function (t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 0);
}([function (t, e, i) {
  "use strict";

  i.r(e), i.d(e, "Pixelated", function () {
    return s;
  }), i.d(e, "spread", function () {
    return n;
  });

  var s = /*#__PURE__*/function () {
    function s(t, e, i, _s) {
      _classCallCheck(this, s);

      this.ctx = t, this.thickness = _s, this.size = e, this.color = i, this.isAnimating = !1, this.numCols = Math.ceil(t.canvas.width / e), this.numRows = Math.ceil(t.canvas.height / e), this.pixels = [];

      for (var _t = 0; _t < this.numRows; _t++) {
        var _t2 = [];

        for (var _e = 0; _e < this.numCols; _e++) {
          _t2.push({
            state: 0,
            alpha: 0
          });
        }

        this.pixels.push(_t2);
      }

      this.updateSpread = this.updateSpread.bind(this);
    }

    _createClass(s, [{
      key: "spread",
      value: function spread(t, e) {
        this.reset(), this.speed = e, this.isAnimating = !0, this.spawnPos = {
          x: Math.floor(t.x / this.size),
          y: Math.floor(t.y / this.size)
        }, this.spreadD = this.thickness, this._requestId = requestAnimationFrame(this.updateSpread);
      }
    }, {
      key: "reset",
      value: function reset() {
        cancelAnimationFrame(this._requestId);

        var _iterator = _createForOfIteratorHelper(this.pixels),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _t3 = _step.value;

            var _iterator2 = _createForOfIteratorHelper(_t3),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _e2 = _step2.value;
                _e2.state = 0;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "updateSpread",
      value: function updateSpread(t) {
        if (this.isAnimating) {
          if (this._requestId = requestAnimationFrame(this.updateSpread), !this.lastTimestamp || t - this.lastTimestamp > this.speed) {
            var _e3;

            this.isAnimating = !1;

            var _i = this.spreadD * this.spreadD,
                _s3 = (this.spreadD - this.thickness) * (this.spreadD - this.thickness);

            for (var _t4 = 0; _t4 < this.pixels.length; _t4++) {
              for (var _n = 0; _n < this.pixels[_t4].length; _n++) {
                var a = this.pixels[_t4][_n];
                3 === a.state || (2 === a.state ? (a.alpha -= .1, a.alpha <= 0 && (a.state = 3)) : (_e3 = (this.spawnPos.x - _n) * (this.spawnPos.x - _n) + (this.spawnPos.y - _t4) * (this.spawnPos.y - _t4)) < _i && _e3 >= _s3 ? (a.state = 1, a.alpha = Math.round(2 * Math.random()) / 2) : _e3 <= _s3 && (a.state = 2, a.alpha += .5)), 3 !== a.state && (this.isAnimating = !0);
              }
            }

            this.lastTimestamp = t + (t - this.lastTimestamp) % this.speed, this.spreadD++, this.render();
          }
        } else this.reset();
      }
    }, {
      key: "render",
      value: function render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        for (var _t5 = 0; _t5 < this.pixels.length; _t5++) {
          for (var _e4 = 0; _e4 < this.pixels[_t5].length; _e4++) {
            0 !== this.pixels[_t5][_e4].state && (this.ctx.fillStyle = "rgba(".concat(this.color.r, ", ").concat(this.color.g, ", ").concat(this.color.b, ", ").concat(this.pixels[_t5][_e4].alpha, ")"), this.ctx.fillRect(_e4 * this.size, _t5 * this.size, this.size, this.size));
          }
        }
      }
    }]);

    return s;
  }();

  function n() {
    document.querySelectorAll(".pixelated").forEach(function (t) {
      t.pixelated.spread({
        x: t.pixelated.ctx.canvas.width / 2,
        y: t.pixelated.ctx.canvas.height / 2
      }, 40);
    });
  }

  e.default = function () {
    var t = document.createElement("style");
    t.type = "text/css", t.innerHTML = "\n  .pixelated {\n    overflow: hidden;\n    box-sizing: border-box;\n    position: relative;\n  }\n  .pixelated span {\n    position: relative;\n    z-index: 1;\n  }\n  .pixelated canvas {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n  }", document.body.appendChild(t), document.querySelectorAll(".pixelated").forEach(function (t) {
      var e = t.getBoundingClientRect(),
          i = document.createElement("canvas"),
          n = document.createElement("span");
      n.innerHTML = t.innerHTML, t.innerHTML = "", t.appendChild(i), t.appendChild(n), i.width = e.width, i.height = e.height;
      var a = i.getContext("2d"),
          r = t.getAttribute("data-color").split(","),
          l = parseInt(t.getAttribute("data-size"), 10) || 10,
          h = parseInt(t.getAttribute("data-thickness"), 10) || 3,
          o = {};
      o.r = r[0].replace("rgb(", "").replace("rgba(", "").replace(" ", ""), o.g = r[1].replace(" ", ""), o.b = r[2].replace(")", "").replace(" ", ""), t.pixelated = new s(a, l, o, h), t.addEventListener("click", function (e) {
        var s = i.getBoundingClientRect(),
            n = {
          x: e.clientX - s.left,
          y: e.clientY - s.top
        };
        t.pixelated.spread(n, 1e3);
      });
    });
  };
}]);
},{}]},{},["YxMN"], null)
//# sourceMappingURL=/pixelated.43a30f09.js.map