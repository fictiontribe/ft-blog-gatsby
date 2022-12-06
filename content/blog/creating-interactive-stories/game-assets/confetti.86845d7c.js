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
})({"sI4j":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/canvas-confetti@1.4.0/dist/confetti.browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) {
  !function t(e, n, a, i) {
    var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL);

    function r() {}

    function l(t) {
      var a = n.exports.Promise,
          i = void 0 !== a ? a : e.Promise;
      return "function" == typeof i ? new i(t) : (t(r, r), null);
    }

    var c,
        s,
        u,
        d,
        f,
        h,
        g,
        m,
        b = (u = Math.floor(1e3 / 60), d = {}, f = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (c = function c(t) {
      var e = Math.random();
      return d[e] = requestAnimationFrame(function n(a) {
        f === a || f + u - 1 < a ? (f = a, delete d[e], t()) : d[e] = requestAnimationFrame(n);
      }), e;
    }, s = function s(t) {
      d[t] && cancelAnimationFrame(d[t]);
    }) : (c = function c(t) {
      return setTimeout(t, u);
    }, s = function s(t) {
      return clearTimeout(t);
    }), {
      frame: c,
      cancel: s
    }),
        v = (m = {}, function () {
      if (h) return h;

      if (!a && o) {
        var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");

        try {
          h = new Worker(URL.createObjectURL(new Blob([e])));
        } catch (t) {
          return void 0 !== (typeof console === "undefined" ? "undefined" : _typeof(console)) && "function" == typeof console.warn && console.warn("🎊 Could not load worker", t), null;
        }

        !function (t) {
          function e(e, n) {
            t.postMessage({
              options: e || {},
              callback: n
            });
          }

          t.init = function (e) {
            var n = e.transferControlToOffscreen();
            t.postMessage({
              canvas: n
            }, [n]);
          }, t.fire = function (n, a, i) {
            if (g) return e(n, null), g;
            var o = Math.random().toString(36).slice(2);
            return g = l(function (a) {
              function r(e) {
                e.data.callback === o && (delete m[o], t.removeEventListener("message", r), g = null, i(), a());
              }

              t.addEventListener("message", r), e(n, o), m[o] = r.bind(null, {
                data: {
                  callback: o
                }
              });
            });
          }, t.reset = function () {
            for (var e in t.postMessage({
              reset: !0
            }), m) {
              m[e](), delete m[e];
            }
          };
        }(h);
      }

      return h;
    }),
        y = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: .9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: .5,
      y: .5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
      disableForReducedMotion: !1,
      scalar: 1
    };

    function p(t, e, n) {
      return function (t, e) {
        return e ? e(t) : t;
      }(t && null != t[e] ? t[e] : y[e], n);
    }

    function M(t) {
      return t < 0 ? 0 : Math.floor(t);
    }

    function w(t) {
      return parseInt(t, 16);
    }

    function x(t) {
      return t.map(C);
    }

    function C(t) {
      var e = String(t).replace(/[^0-9a-f]/gi, "");
      return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), {
        r: w(e.substring(0, 2)),
        g: w(e.substring(2, 4)),
        b: w(e.substring(4, 6))
      };
    }

    function k(t) {
      t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight;
    }

    function I(t) {
      var e = t.getBoundingClientRect();
      t.width = e.width, t.height = e.height;
    }

    function T(t, e, n, o, r) {
      var c,
          s,
          u = e.slice(),
          d = t.getContext("2d"),
          f = l(function (e) {
        function l() {
          c = s = null, d.clearRect(0, 0, o.width, o.height), r(), e();
        }

        c = b.frame(function e() {
          !a || o.width === i.width && o.height === i.height || (o.width = t.width = i.width, o.height = t.height = i.height), o.width || o.height || (n(t), o.width = t.width, o.height = t.height), d.clearRect(0, 0, o.width, o.height), (u = u.filter(function (t) {
            return function (t, e) {
              e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += .1, e.velocity *= e.decay, e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 5, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble);
              var n = e.tick++ / e.totalTicks,
                  a = e.x + e.random * e.tiltCos,
                  i = e.y + e.random * e.tiltSin,
                  o = e.wobbleX + e.random * e.tiltCos,
                  r = e.wobbleY + e.random * e.tiltSin;
              return t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - n) + ")", t.beginPath(), "circle" === e.shape ? t.ellipse ? t.ellipse(e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : function (t, e, n, a, i, o, r, l, c) {
                t.save(), t.translate(e, n), t.rotate(o), t.scale(a, i), t.arc(0, 0, 1, r, l, c), t.restore();
              }(t, e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : (t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(i)), t.lineTo(Math.floor(o), Math.floor(r)), t.lineTo(Math.floor(a), Math.floor(e.wobbleY))), t.closePath(), t.fill(), e.tick < e.totalTicks;
            }(d, t);
          })).length ? c = b.frame(e) : l();
        }), s = l;
      });
      return {
        addFettis: function addFettis(t) {
          return u = u.concat(t), f;
        },
        canvas: t,
        promise: f,
        reset: function reset() {
          c && b.cancel(c), s && s();
        }
      };
    }

    function E(t, n) {
      var a,
          i = !t,
          r = !!p(n || {}, "resize"),
          c = p(n, "disableForReducedMotion", Boolean),
          s = o && !!p(n || {}, "useWorker") ? v() : null,
          u = i ? k : I,
          d = !(!t || !s) && !!t.__confetti_initialized,
          f = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;

      function h(e, n, i) {
        for (var o, r, l, c, s, d = p(e, "particleCount", M), f = p(e, "angle", Number), h = p(e, "spread", Number), g = p(e, "startVelocity", Number), m = p(e, "decay", Number), b = p(e, "gravity", Number), v = p(e, "drift", Number), y = p(e, "colors", x), w = p(e, "ticks", Number), C = p(e, "shapes"), k = p(e, "scalar"), I = function (t) {
          var e = p(t, "origin", Object);
          return e.x = p(e, "x", Number), e.y = p(e, "y", Number), e;
        }(e), E = d, S = [], F = t.width * I.x, N = t.height * I.y; E--;) {
          S.push((o = {
            x: F,
            y: N,
            angle: f,
            spread: h,
            startVelocity: g,
            color: y[E % y.length],
            shape: C[(c = 0, s = C.length, Math.floor(Math.random() * (s - c)) + c)],
            ticks: w,
            decay: m,
            gravity: b,
            drift: v,
            scalar: k
          }, r = void 0, l = void 0, r = o.angle * (Math.PI / 180), l = o.spread * (Math.PI / 180), {
            x: o.x,
            y: o.y,
            wobble: 10 * Math.random(),
            velocity: .5 * o.startVelocity + Math.random() * o.startVelocity,
            angle2D: -r + (.5 * l - Math.random() * l),
            tiltAngle: Math.random() * Math.PI,
            color: o.color,
            shape: o.shape,
            tick: 0,
            totalTicks: o.ticks,
            decay: o.decay,
            drift: o.drift,
            random: Math.random() + 5,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: 3 * o.gravity,
            ovalScalar: .6,
            scalar: o.scalar
          }));
        }

        return a ? a.addFettis(S) : (a = T(t, S, u, n, i)).promise;
      }

      function g(n) {
        var o = c || p(n, "disableForReducedMotion", Boolean),
            g = p(n, "zIndex", Number);
        if (o && f) return l(function (t) {
          t();
        });
        i && a ? t = a.canvas : i && !t && (t = function (t) {
          var e = document.createElement("canvas");
          return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e;
        }(g), document.body.appendChild(t)), r && !d && u(t);
        var m = {
          width: t.width,
          height: t.height
        };

        function b() {
          if (s) {
            var e = {
              getBoundingClientRect: function getBoundingClientRect() {
                if (!i) return t.getBoundingClientRect();
              }
            };
            return u(e), void s.postMessage({
              resize: {
                width: e.width,
                height: e.height
              }
            });
          }

          m.width = m.height = null;
        }

        function v() {
          a = null, r && e.removeEventListener("resize", b), i && t && (document.body.removeChild(t), t = null, d = !1);
        }

        return s && !d && s.init(t), d = !0, s && (t.__confetti_initialized = !0), r && e.addEventListener("resize", b, !1), s ? s.fire(n, m, v) : h(n, m, v);
      }

      return g.reset = function () {
        s && s.reset(), a && a.reset();
      }, g;
    }

    n.exports = E(null, {
      useWorker: !0,
      resize: !0
    }), n.exports.create = E;
  }(function () {
    return void 0 !== t ? t : "undefined" != typeof self ? self : this || {};
  }(), e, !1), t.confetti = e.exports;
}(window, {});
},{}]},{},["sI4j"], null)
//# sourceMappingURL=/confetti.86845d7c.js.map