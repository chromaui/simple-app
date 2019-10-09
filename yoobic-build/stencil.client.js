!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 1));
})([
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.RECONNECT_ATTEMPTS = 500), (t.RECONNECT_RETRY_MS = 2500), (t.NORMAL_CLOSURE_CODE = 1e3), (t.YELLOW = '#f39c12'), (t.RED = '#c0392b'), (t.BLUE = '#3498db'), (t.GRAY = '#717171'), (t.DEV_SERVER_PREFIX = 'stencil-dev'), (t.DEV_SERVER_MODAL = t.DEV_SERVER_PREFIX + '-server-modal');
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(0),
      a = n(2);
    function i(e, t, n) {
      try {
        if (
          ((function(e) {
            var t = e.getElementById(r.DEV_SERVER_MODAL);
            t && t.parentNode.removeChild(t);
          })(t),
          n.hasError)
        )
          return void a.appError(t, n);
        if (n.hmr) return a.logReload('Reloading due to changes in Stencil!!'), void e.location.reload(!0);
      } catch (e) {
        console.error(e);
      }
    }
    n(3),
      (window.ready = a.ready),
      window.ready(function() {
        !(function(e, t) {
          var n,
            o,
            l,
            d = a.getSocketUrl(e.STENCIL_DEV_PROTOCOL, e.STENCIL_DEV_HOST, e.STENCIL_DEV_PORT),
            c = 0,
            s = !1;
          function u() {
            var n = this;
            c > 0 && a.updateBuildStatus(t, 'pending'),
              s ||
                (l = setInterval(function() {
                  s || n.readyState !== e.WebSocket.OPEN ? clearInterval(l) : n.send(JSON.stringify({ requestBuildResults: !0 }));
                }, 1e3)),
              clearTimeout(o);
          }
          function E() {
            R();
          }
          function v(e) {
            a.updateBuildStatus(t, 'disabled'), e.code > r.NORMAL_CLOSURE_CODE ? a.logWarn('Dev Server', 'web socket closed: ' + e.code + ' ' + e.reason) : a.logDisabled('Dev Server', 'Disconnected, attempting to reconnect...'), R();
          }
          function p(n) {
            var r = JSON.parse(n.data);
            if (c > 0) {
              if (r.isActivelyBuilding) return;
              if (r.buildResults) return a.logReload('Reconnected to dev server'), (s = !0), clearInterval(l), void e.location.reload(!0);
            }
            if (r.buildLog) {
              var o = new e.CustomEvent('buildLog', { detail: r.buildLog });
              return e.dispatchEvent(o), void a.updateBuildStatus(t, 'pending');
            }
            if (r.buildResults) return (s = !0), clearInterval(l), a.updateBuildStatus(t, 'default'), void i(e, t, r.buildResults);
          }
          function f() {
            clearTimeout(o), (n = new e.WebSocket(d, ['xmpp'])).addEventListener('open', u), n.addEventListener('error', E), n.addEventListener('close', v), n.addEventListener('message', p);
          }
          function R() {
            (s = !1), n && ((n.readyState !== e.WebSocket.OPEN && n.readyState !== e.WebSocket.CONNECTING) || n.close(r.NORMAL_CLOSURE_CODE), n.removeEventListener('open', u), n.removeEventListener('error', E), n.removeEventListener('close', v), n.removeEventListener('message', p), (n = null)), clearTimeout(o), c > r.RECONNECT_ATTEMPTS ? a.logWarn('Dev Server', 'Canceling reconnect attempts') : (c++, (o = setTimeout(f, r.RECONNECT_RETRY_MS)), a.updateBuildStatus(t, 'disabled'));
          }
          f();
        })(window, document);
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(0);
    function a(e, t) {
      o(r.YELLOW, e, t);
    }
    function i(e) {
      var t = r.RED,
        n = 'Error';
      'warn' === e.level && ((t = r.YELLOW), (n = 'Warning')), e.header && (n = e.header);
      var a = '';
      e.relFilePath && ((a += e.relFilePath), 'number' == typeof e.lineNumber && e.lineNumber > 0 && ((a += ', line ' + e.lineNumber), 'number' == typeof e.columnNumber && e.columnNumber > 0 && (a += ', column ' + e.columnNumber)), (a += '\n')), o(t, n, (a += e.messageText));
    }
    function o(e, t, n) {
      var r = ['%c' + t, 'background: ' + e + '; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;'];
      console.log.apply(console, r.concat([n]));
    }
    function l(e, t) {}
    function d(e) {
      var t = e.getElementById(r.DEV_SERVER_MODAL);
      return t || (((t = e.createElement('div')).id = r.DEV_SERVER_MODAL), e.body.appendChild(t)), (t.innerHTML = '\n    <style>\n        #' + r.DEV_SERVER_MODAL + ' {\n            display: none;\n        }\n    </style>\n    <link href="/stencil.client.css" rel="stylesheet">\n    <div id="' + r.DEV_SERVER_MODAL + '-inner"></div>\n  '), e.getElementById(r.DEV_SERVER_MODAL + '-inner');
    }
    function c(e) {
      return 'number' == typeof e || 'boolean' == typeof e
        ? e.toString()
        : 'string' == typeof e
        ? e
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
        : '';
    }
    function s(e) {
      return e.charAt(0).toUpperCase() + e.substr(1);
    }
    function u(e) {
      if (!e.length) return !1;
      for (var t = 0; t < e.length; t++) {
        if (!e[t].text || e[t].text.length < 1) return !1;
        var n = e[t].text.charAt(0);
        if (' ' !== n && '\t' !== n) return !1;
      }
      return !0;
    }
    function E(e, t, n) {
      var a = e.createElement('div');
      a.className = r.DEV_SERVER_PREFIX + '-server-diagnostic';
      var i = e.createElement('div');
      (i.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-masthead'), (i.title = c(n.type) + ' error: ' + c(n.code)), a.appendChild(i);
      var o = e.createElement('div');
      (o.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-title'), (o.textContent = s(n.type) + ' ' + s(n.level)), i.appendChild(o);
      var l = e.createElement('div');
      (l.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-message'), (l.textContent = n.messageText), i.appendChild(l);
      var d = e.createElement('div');
      if (((d.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-file'), a.appendChild(d), n.relFilePath)) {
        var E = e.createElement('div');
        (E.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-file-header'), n.absFilePath && (E.title = c(n.absFilePath));
        var v = n.relFilePath.split('/'),
          p = e.createElement('span');
        (p.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-file-name'), (p.textContent = v.pop());
        var f = e.createElement('span');
        (f.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-file-path'), (f.textContent = v.join('/') + '/'), E.appendChild(f), E.appendChild(p), d.appendChild(E);
      }
      if (n.lines && n.lines.length > 0) {
        var R = e.createElement('div');
        (R.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-blob'), d.appendChild(R);
        var m = e.createElement('table');
        (m.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-table'),
          R.appendChild(m),
          (function(e) {
            for (var t = JSON.parse(JSON.stringify(e)), n = 0; n < 100; n++) {
              if (!u(t)) return t;
              for (var r = 0; r < t.length; r++) if (((t[r].text = t[r].text.substr(1)), t[r].errorCharStart--, !t[r].text.length)) return t;
            }
            return t;
          })(n.lines).forEach(function(t) {
            var n = e.createElement('tr');
            t.errorCharStart > -1 && (n.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-error-line'), m.appendChild(n);
            var a = e.createElement('td');
            (a.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-blob-num'), a.setAttribute('data-line-number', t.lineNumber + ''), n.appendChild(a);
            var i = e.createElement('td');
            (i.className = r.DEV_SERVER_PREFIX + '-server-diagnostic-blob-code'),
              (i.innerHTML = (function(e, t, n) {
                if ('string' != typeof e) return '';
                var a = t + n;
                return e
                  .split('')
                  .map(function(e, n) {
                    var i;
                    return (i = '<' === e ? '&lt;' : '>' === e ? '&gt;' : '"' === e ? '&quot;' : "'" === e ? '&#039;' : '&' === e ? '&amp;' : e), n >= t && n < a && (i = '<span class="' + r.DEV_SERVER_PREFIX + '-server-diagnostic-error-chr">' + i + '</span>'), i;
                  })
                  .join('');
              })(t.text, t.errorCharStart, t.errorLength)),
              n.appendChild(i);
          });
      }
      t.appendChild(a);
    }
    (t.ready = function(e) {
      'loading' != document.readyState
        ? e()
        : document.addEventListener
        ? document.addEventListener('DOMContentLoaded', e)
        : document.attachEvent('onreadystatechange', function() {
            'loading' != document.readyState && e();
          });
    }),
      (t.logBuild = function(e) {
        o(r.BLUE, 'Build', e);
      }),
      (t.logReload = function(e) {
        a('Reload', e);
      }),
      (t.logWarn = a),
      (t.logDisabled = function(e, t) {
        o(r.GRAY, e, t);
      }),
      (t.logDiagnostic = i),
      (t.log = o),
      (t.getSocketUrl = function(e, t, n) {
        return ('https:' === e ? 'wss:' : 'ws:') + '//' + t + ':' + n + '/';
      }),
      (t.updateBuildStatus = l),
      (t.getDevServerModal = d),
      (t.appendDiagnostic = E),
      (t.appError = function(e, t) {
        if (Array.isArray(t.diagnostics)) {
          var n = t.diagnostics.filter(function(e) {
            return 'error' === e.level;
          });
          if (0 !== n.length) {
            var r = d(e);
            n.forEach(function(t) {
              i(t), E(e, r, t);
            });
          }
        }
      });
  },
  function(e, t, n) {}
]);
//# sourceMappingURL=stencil.client.js.map
