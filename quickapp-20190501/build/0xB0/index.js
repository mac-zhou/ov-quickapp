(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/0xB0/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_flyio@0.6.14@flyio/dist/npm/hap.js":
/*!**********************************************************!*\
  !*** ./node_modules/_flyio@0.6.14@flyio/dist/npm/hap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(void 0, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // identity function for calling harmony imports with the correct context

      /******/

      __webpack_require__.i = function (value) {
        return value;
      };
      /******/

      /******/
      // define getter function for harmony exports

      /******/


      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 11);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      module.exports = {
        type: function type(ob) {
          return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
        },
        isObject: function isObject(ob, real) {
          if (real) {
            return this.type(ob) === "object";
          } else {
            return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
          }
        },
        isFormData: function isFormData(val) {
          return typeof FormData !== 'undefined' && val instanceof FormData;
        },
        trim: function trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        encode: function encode(val) {
          return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        },
        formatParams: function formatParams(data) {
          var str = "";
          var first = true;
          var that = this;

          if (!this.isObject(data)) {
            return data;
          }

          function _encode(sub, path) {
            var encode = that.encode;
            var type = that.type(sub);

            if (type == "array") {
              sub.forEach(function (e, i) {
                if (!that.isObject(e)) i = "";

                _encode(e, path + ('%5B' + i + '%5D'));
              });
            } else if (type == "object") {
              for (var key in sub) {
                if (path) {
                  _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                } else {
                  _encode(sub[key], encode(key));
                }
              }
            } else {
              if (!first) {
                str += "&";
              }

              first = false;
              str += path + "=" + encode(sub);
            }
          }

          _encode(data, "");

          return str;
        },
        // Do not overwrite existing attributes
        merge: function merge(a, b) {
          for (var key in b) {
            if (!a.hasOwnProperty(key)) {
              a[key] = b[key];
            } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
              this.merge(a[key], b[key]);
            }
          }

          return a;
        }
      };
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      function KEEP(_, cb) {
        cb();
      }

      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /*
       * author: wendu
       * email: 824783146@qq.com
       **/


      var util = __webpack_require__(0);

      var isBrowser = typeof document !== "undefined"; //EngineWrapper can help  generating  a  http engine quickly through a adapter

      function EngineWrapper(adapter) {
        var AjaxEngine = function () {
          function AjaxEngine() {
            _classCallCheck(this, AjaxEngine);

            this.requestHeaders = {};
            this.readyState = 0;
            this.timeout = 0; // 0 stands for no timeout

            this.responseURL = "";
            this.responseHeaders = {};
          }

          _createClass(AjaxEngine, [{
            key: "_call",
            value: function _call(name) {
              this[name] && this[name].apply(this, [].splice.call(arguments, 1));
            }
          }, {
            key: "_changeReadyState",
            value: function _changeReadyState(state) {
              this.readyState = state;

              this._call("onreadystatechange");
            }
          }, {
            key: "open",
            value: function open(method, url) {
              this.method = method;

              if (!url) {
                url = location.href;
              } else {
                url = util.trim(url);

                if (url.indexOf("http") !== 0) {
                  // Normalize the request url
                  if (isBrowser) {
                    var t = document.createElement("a");
                    t.href = url;
                    url = t.href;
                  }
                }
              }

              this.responseURL = url;

              this._changeReadyState(1);
            }
          }, {
            key: "send",
            value: function send(arg) {
              var _this = this;

              arg = arg || null;
              var self = this;

              if (adapter) {
                var request = {
                  method: self.method,
                  url: self.responseURL,
                  headers: self.requestHeaders || {},
                  body: arg
                };
                util.merge(request, self._options || {});

                if (request.method === "GET") {
                  request.body = null;
                }

                self._changeReadyState(3);

                var timer = void 0;
                self.timeout = self.timeout || 0;

                if (self.timeout > 0) {
                  timer = setTimeout(function () {
                    if (self.readyState === 3) {
                      _this._call("onloadend");

                      self._changeReadyState(0);

                      self._call("ontimeout");
                    }
                  }, self.timeout);
                }

                request.timeout = self.timeout;
                adapter(request, function (response) {
                  function getAndDelete(key) {
                    var t = response[key];
                    delete response[key];
                    return t;
                  } // If the request has already timeout, return


                  if (self.readyState !== 3) return;
                  clearTimeout(timer); // Make sure the type of status is integer

                  self.status = getAndDelete("statusCode") - 0;
                  var responseText = getAndDelete("responseText");
                  var statusMessage = getAndDelete("statusMessage"); // Network error, set the status code 0

                  if (!self.status) {
                    self.statusText = responseText;

                    self._call("onerror", {
                      msg: statusMessage
                    });
                  } else {
                    // Parsing the response headers to array in a object,  because
                    // there may be multiple values with the same header name
                    var responseHeaders = getAndDelete("headers");
                    var headers = {};

                    for (var field in responseHeaders) {
                      var value = responseHeaders[field];
                      var key = field.toLowerCase(); // Is array

                      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        headers[key] = value;
                      } else {
                        headers[key] = headers[key] || [];
                        headers[key].push(value);
                      }
                    }

                    var cookies = headers["set-cookie"];

                    if (isBrowser && cookies) {
                      cookies.forEach(function (e) {
                        // Remove the http-Only property of the  cookie
                        // so that JavaScript can operate it.
                        document.cookie = e.replace(/;\s*httpOnly/ig, "");
                      });
                    }

                    self.responseHeaders = headers; // Set the fields of engine from response

                    self.statusText = statusMessage || "";
                    self.response = self.responseText = responseText;
                    self._response = response;

                    self._changeReadyState(4);

                    self._call("onload");
                  }

                  self._call("onloadend");
                });
              } else {
                console.error("Ajax require adapter");
              }
            }
          }, {
            key: "setRequestHeader",
            value: function setRequestHeader(key, value) {
              this.requestHeaders[util.trim(key)] = value;
            }
          }, {
            key: "getResponseHeader",
            value: function getResponseHeader(key) {
              return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
            }
          }, {
            key: "getAllResponseHeaders",
            value: function getAllResponseHeaders() {
              var str = "";

              for (var key in this.responseHeaders) {
                str += key + ":" + this.getResponseHeader(key) + "\r\n";
              }

              return str || null;
            }
          }, {
            key: "abort",
            value: function abort(msg) {
              this._changeReadyState(0);

              this._call("onerror", {
                msg: msg
              });

              this._call("onloadend");
            }
          }], [{
            key: "setAdapter",
            value: function setAdapter(requestAdapter) {
              adapter = requestAdapter;
            }
          }]);

          return AjaxEngine;
        }();

        return AjaxEngine;
      } // learn more about keep-loader: https://github.com/wendux/keep-loader


      ;
      module.exports = EngineWrapper;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      function KEEP(_, cb) {
        cb();
      }

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var utils = __webpack_require__(0);

      var isBrowser = typeof document !== "undefined";

      var Fly = function () {
        function Fly(engine) {
          _classCallCheck(this, Fly);

          this.engine = engine || XMLHttpRequest;
          this.default = this; //For typeScript

          /**
           * Add  lock/unlock API for interceptor.
           *
           * Once an request/response interceptor is locked, the incoming request/response
           * will be added to a queue before they enter the interceptor, they will not be
           * continued  until the interceptor is unlocked.
           *
           * @param [interceptor] either is interceptors.request or interceptors.response
           */

          function wrap(interceptor) {
            var resolve = void 0;
            var reject = void 0;

            function _clear() {
              interceptor.p = resolve = reject = null;
            }

            utils.merge(interceptor, {
              lock: function lock() {
                if (!resolve) {
                  interceptor.p = new Promise(function (_resolve, _reject) {
                    resolve = _resolve;
                    reject = _reject;
                  });
                }
              },
              unlock: function unlock() {
                if (resolve) {
                  resolve();

                  _clear();
                }
              },
              clear: function clear() {
                if (reject) {
                  reject("cancel");

                  _clear();
                }
              }
            });
          }

          var interceptors = this.interceptors = {
            response: {
              use: function use(handler, onerror) {
                this.handler = handler;
                this.onerror = onerror;
              }
            },
            request: {
              use: function use(handler) {
                this.handler = handler;
              }
            }
          };
          var irq = interceptors.request;
          var irp = interceptors.response;
          wrap(irp);
          wrap(irq);
          this.config = {
            method: "GET",
            baseURL: "",
            headers: {},
            timeout: 0,
            params: {},
            // Default Url params
            parseJson: true,
            // Convert response data to JSON object automatically.
            withCredentials: false
          };
        }

        _createClass(Fly, [{
          key: "request",
          value: function request(url, data, options) {
            var _this = this;

            var engine = new this.engine();
            var contentType = "Content-Type";
            var contentTypeLowerCase = contentType.toLowerCase();
            var interceptors = this.interceptors;
            var requestInterceptor = interceptors.request;
            var responseInterceptor = interceptors.response;
            var requestInterceptorHandler = requestInterceptor.handler;
            var promise = new Promise(function (resolve, reject) {
              if (utils.isObject(url)) {
                options = url;
                url = options.url;
              }

              options = options || {};
              options.headers = options.headers || {};

              function isPromise(p) {
                // some  polyfill implementation of Promise may be not standard,
                // so, we test by duck-typing
                return p && p.then && p.catch;
              }
              /**
               * If the request/response interceptor has been locked，
               * the new request/response will enter a queue. otherwise, it will be performed directly.
               * @param [promise] if the promise exist, means the interceptor is  locked.
               * @param [callback]
               */


              function enqueueIfLocked(promise, callback) {
                if (promise) {
                  promise.then(function () {
                    callback();
                  });
                } else {
                  callback();
                }
              } // make the http request


              function makeRequest(options) {
                data = options.body; // Normalize the request url

                url = utils.trim(options.url);
                var baseUrl = utils.trim(options.baseURL || "");
                if (!url && isBrowser && !baseUrl) url = location.href;

                if (url.indexOf("http") !== 0) {
                  var isAbsolute = url[0] === "/";

                  if (!baseUrl && isBrowser) {
                    var arr = location.pathname.split("/");
                    arr.pop();
                    baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                  }

                  if (baseUrl[baseUrl.length - 1] !== "/") {
                    baseUrl += "/";
                  }

                  url = baseUrl + (isAbsolute ? url.substr(1) : url);

                  if (isBrowser) {
                    // Normalize the url which contains the ".." or ".", such as
                    // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                    var t = document.createElement("a");
                    t.href = url;
                    url = t.href;
                  }
                }

                var responseType = utils.trim(options.responseType || "");
                var needQuery = ["GET", "HEAD", "DELETE", "OPTION"].indexOf(options.method) !== -1;
                var dataType = utils.type(data);
                var params = options.params || {}; // merge url params when the method is "GET" (data is object)

                if (needQuery && dataType === "object") {
                  params = utils.merge(data, params);
                } // encode params to String


                params = utils.formatParams(params); // save url params

                var _params = [];

                if (params) {
                  _params.push(params);
                } // Add data to url params when the method is "GET" (data is String)


                if (needQuery && data && dataType === "string") {
                  _params.push(data);
                } // make the final url


                if (_params.length > 0) {
                  url += (url.indexOf("?") === -1 ? "?" : "&") + _params.join("&");
                }

                engine.open(options.method, url); // try catch for ie >=9

                try {
                  engine.withCredentials = !!options.withCredentials;
                  engine.timeout = options.timeout || 0;

                  if (responseType !== "stream") {
                    engine.responseType = responseType;
                  }
                } catch (e) {}

                var customContentType = options.headers[contentType] || options.headers[contentTypeLowerCase]; // default content type

                var _contentType = "application/x-www-form-urlencoded"; // If the request data is json object, transforming it  to json string,
                // and set request content-type to "json". In browser,  the data will
                // be sent as RequestBody instead of FormData

                if (utils.trim((customContentType || "").toLowerCase()) === _contentType) {
                  data = utils.formatParams(data);
                } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                  _contentType = 'application/json;charset=utf-8';
                  data = JSON.stringify(data);
                } //If user doesn't set content-type, set default.


                if (!(customContentType || needQuery)) {
                  options.headers[contentType] = _contentType;
                }

                for (var k in options.headers) {
                  if (k === contentType && utils.isFormData(data)) {
                    // Delete the content-type, Let the browser set it
                    delete options.headers[k];
                  } else {
                    try {
                      // In browser environment, some header fields are readonly,
                      // write will cause the exception .
                      engine.setRequestHeader(k, options.headers[k]);
                    } catch (e) {}
                  }
                }

                function onresult(handler, data, type) {
                  enqueueIfLocked(responseInterceptor.p, function () {
                    if (handler) {
                      //如果失败，添加请求信息
                      if (type) {
                        data.request = options;
                      }

                      var ret = handler.call(responseInterceptor, data, Promise);
                      data = ret === undefined ? data : ret;
                    }

                    if (!isPromise(data)) {
                      data = Promise[type === 0 ? "resolve" : "reject"](data);
                    }

                    data.then(function (d) {
                      resolve(d);
                    }).catch(function (e) {
                      reject(e);
                    });
                  });
                }

                function onerror(e) {
                  e.engine = engine;
                  onresult(responseInterceptor.onerror, e, -1);
                }

                function Err(msg, status) {
                  this.message = msg;
                  this.status = status;
                }

                engine.onload = function () {
                  try {
                    // The xhr of IE9 has not response field
                    var response = engine.response || engine.responseText;

                    if (response && options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1 // Some third engine implementation may transform the response text to json object automatically,
                    // so we should test the type of response before transforming it
                    && !utils.isObject(response)) {
                      response = JSON.parse(response);
                    }

                    var headers = engine.responseHeaders; // In browser

                    if (!headers) {
                      headers = {};
                      var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                      items.pop();
                      items.forEach(function (e) {
                        if (!e) return;
                        var key = e.split(":")[0];
                        headers[key] = engine.getResponseHeader(key);
                      });
                    }

                    var status = engine.status;
                    var statusText = engine.statusText;
                    var _data = {
                      data: response,
                      headers: headers,
                      status: status,
                      statusText: statusText
                    }; // The _response filed of engine is set in  adapter which be called in engine-wrapper.js

                    utils.merge(_data, engine._response);

                    if (status >= 200 && status < 300 || status === 304) {
                      _data.engine = engine;
                      _data.request = options;
                      onresult(responseInterceptor.handler, _data, 0);
                    } else {
                      var e = new Err(statusText, status);
                      e.response = _data;
                      onerror(e);
                    }
                  } catch (e) {
                    onerror(new Err(e.msg, engine.status));
                  }
                };

                engine.onerror = function (e) {
                  onerror(new Err(e.msg || "Network Error", 0));
                };

                engine.ontimeout = function () {
                  onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                };

                engine._options = options;
                setTimeout(function () {
                  engine.send(needQuery ? null : data);
                }, 0);
              }

              enqueueIfLocked(requestInterceptor.p, function () {
                utils.merge(options, JSON.parse(JSON.stringify(_this.config)));
                var headers = options.headers;
                headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                delete headers[contentTypeLowerCase];
                options.body = data || options.body;
                url = utils.trim(url || "");
                options.method = options.method.toUpperCase();
                options.url = url;
                var ret = options;

                if (requestInterceptorHandler) {
                  ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                }

                if (!isPromise(ret)) {
                  ret = Promise.resolve(ret);
                }

                ret.then(function (d) {
                  //if options continue
                  if (d === options) {
                    makeRequest(d);
                  } else {
                    resolve(d);
                  }
                }, function (err) {
                  reject(err);
                });
              });
            });
            promise.engine = engine;
            return promise;
          }
        }, {
          key: "all",
          value: function all(promises) {
            return Promise.all(promises);
          }
        }, {
          key: "spread",
          value: function spread(callback) {
            return function (arr) {
              return callback.apply(null, arr);
            };
          }
        }]);

        return Fly;
      }(); //For typeScript


      Fly.default = Fly;
      ["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
        Fly.prototype[e] = function (url, data, option) {
          return this.request(url, data, utils.merge({
            method: e
          }, option));
        };
      });
      ["lock", "unlock", "clear"].forEach(function (e) {
        Fly.prototype[e] = function () {
          this.interceptors.request[e]();
        };
      }); // Learn more about keep-loader: https://github.com/wendux/keep-loader

      ;
      module.exports = Fly;
      /***/
    },,,
    /* 3 */

    /* 4 */

    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      }; //hap adapter


      module.exports = function (fetch) {
        return function (request, responseCallback) {
          request.data = request.body;
          request.header = request.headers;

          request.complete = function (ret) {
            if ((typeof ret === "undefined" ? "undefined" : _typeof(ret)) !== "object") {
              ret = {
                code: 0,
                msg: ret
              };
            }

            responseCallback({
              statusCode: ret.code || 0,
              responseText: ret.data,
              headers: ret.headers,
              statusMessage: ret.msg
            });
          };

          fetch.fetch(request);
        };
      };
      /***/

    },,,,,,
    /* 6 */

    /* 7 */

    /* 8 */

    /* 9 */

    /* 10 */

    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; //quick app entry

      var Fly = __webpack_require__(2);

      var EngineWrapper = __webpack_require__(1);

      var adapter = __webpack_require__(5);

      module.exports = function (fetch) {
        var hapEngine = EngineWrapper(adapter(fetch));
        return new Fly(hapEngine);
      };
      /***/

    }])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/_js-sha256@0.9.0@js-sha256/src/sha256.js":
/*!***************************************************************!*\
  !*** ./node_modules/_js-sha256@0.9.0@js-sha256/src/sha256.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */

/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
  var root = WINDOW ? window : {};

  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }

  var WEB_WORKER = !WINDOW && (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.versions && process.versions.node;

  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }

  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && ( false ? undefined : _typeof(module)) === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];
  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return _typeof(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function createOutputMethod(outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function createMethod(is224) {
    var method = createOutputMethod('hex', is224);

    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }

    method.create = function () {
      return new Sha256(is224);
    };

    method.update = function (message) {
      return method.create().update(message);
    };

    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }

    return method;
  };

  var nodeWrap = function nodeWrap(method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';

    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }

      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };

    return nodeMethod;
  };

  var createHmacOutputMethod = function createHmacOutputMethod(outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function createHmacMethod(is224) {
    var method = createHmacOutputMethod('hex', is224);

    method.create = function (key) {
      return new HmacSha256(key, is224);
    };

    method.update = function (key, message) {
      return method.create(key).update(message);
    };

    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }

    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else {
      // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString,
        type = _typeof(message);

    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }

      notString = true;
    }

    var code,
        index = 0,
        i,
        length = message.length,
        blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);

          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
            blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;

      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }

    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }

    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }

    this.finalized = true;
    var blocks = this.blocks,
        i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];

    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }

      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }

    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0,
        b = this.h1,
        c = this.h2,
        d = this.h3,
        e = this.h4,
        f = this.h5,
        g = this.h6,
        h = this.h7,
        blocks = this.blocks,
        j,
        s0,
        s1,
        maj,
        t1,
        t2,
        ch,
        ab,
        da,
        cd,
        bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
      t1 = blocks[j - 2];
      s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;

    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }

        this.first = false;
      } else {
        s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
        s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        ab = a & b;
        maj = ab ^ a & c ^ bc;
        ch = e & f ^ ~e & g;
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }

      s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
      s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
      da = d & a;
      maj = da ^ d & b ^ ab;
      ch = h & e ^ ~h & f;
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
      s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
      cd = c & d;
      maj = cd ^ c & a ^ da;
      ch = g & h ^ ~g & e;
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
      s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
      bc = b & c;
      maj = bc ^ b & d ^ cd;
      ch = f & g ^ ~f & h;
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3,
        h4 = this.h4,
        h5 = this.h5,
        h6 = this.h6,
        h7 = this.h7;
    var hex = HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h4 >> 28 & 0x0F] + HEX_CHARS[h4 >> 24 & 0x0F] + HEX_CHARS[h4 >> 20 & 0x0F] + HEX_CHARS[h4 >> 16 & 0x0F] + HEX_CHARS[h4 >> 12 & 0x0F] + HEX_CHARS[h4 >> 8 & 0x0F] + HEX_CHARS[h4 >> 4 & 0x0F] + HEX_CHARS[h4 & 0x0F] + HEX_CHARS[h5 >> 28 & 0x0F] + HEX_CHARS[h5 >> 24 & 0x0F] + HEX_CHARS[h5 >> 20 & 0x0F] + HEX_CHARS[h5 >> 16 & 0x0F] + HEX_CHARS[h5 >> 12 & 0x0F] + HEX_CHARS[h5 >> 8 & 0x0F] + HEX_CHARS[h5 >> 4 & 0x0F] + HEX_CHARS[h5 & 0x0F] + HEX_CHARS[h6 >> 28 & 0x0F] + HEX_CHARS[h6 >> 24 & 0x0F] + HEX_CHARS[h6 >> 20 & 0x0F] + HEX_CHARS[h6 >> 16 & 0x0F] + HEX_CHARS[h6 >> 12 & 0x0F] + HEX_CHARS[h6 >> 8 & 0x0F] + HEX_CHARS[h6 >> 4 & 0x0F] + HEX_CHARS[h6 & 0x0F];

    if (!this.is224) {
      hex += HEX_CHARS[h7 >> 28 & 0x0F] + HEX_CHARS[h7 >> 24 & 0x0F] + HEX_CHARS[h7 >> 20 & 0x0F] + HEX_CHARS[h7 >> 16 & 0x0F] + HEX_CHARS[h7 >> 12 & 0x0F] + HEX_CHARS[h7 >> 8 & 0x0F] + HEX_CHARS[h7 >> 4 & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }

    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();
    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3,
        h4 = this.h4,
        h5 = this.h5,
        h6 = this.h6,
        h7 = this.h7;
    var arr = [h0 >> 24 & 0xFF, h0 >> 16 & 0xFF, h0 >> 8 & 0xFF, h0 & 0xFF, h1 >> 24 & 0xFF, h1 >> 16 & 0xFF, h1 >> 8 & 0xFF, h1 & 0xFF, h2 >> 24 & 0xFF, h2 >> 16 & 0xFF, h2 >> 8 & 0xFF, h2 & 0xFF, h3 >> 24 & 0xFF, h3 >> 16 & 0xFF, h3 >> 8 & 0xFF, h3 & 0xFF, h4 >> 24 & 0xFF, h4 >> 16 & 0xFF, h4 >> 8 & 0xFF, h4 & 0xFF, h5 >> 24 & 0xFF, h5 >> 16 & 0xFF, h5 >> 8 & 0xFF, h5 & 0xFF, h6 >> 24 & 0xFF, h6 >> 16 & 0xFF, h6 >> 8 & 0xFF, h6 & 0xFF];

    if (!this.is224) {
      arr.push(h7 >> 24 & 0xFF, h7 >> 16 & 0xFF, h7 >> 8 & 0xFF, h7 & 0xFF);
    }

    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);

    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }

    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i,
        type = _typeof(key);

    if (type === 'string') {
      var bytes = [],
          length = key.length,
          index = 0,
          code;

      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);

        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = 0xc0 | code >> 6;
          bytes[index++] = 0x80 | code & 0x3f;
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = 0xe0 | code >> 12;
          bytes[index++] = 0x80 | code >> 6 & 0x3f;
          bytes[index++] = 0x80 | code & 0x3f;
        } else {
          code = 0x10000 + ((code & 0x3ff) << 10 | key.charCodeAt(++i) & 0x3ff);
          bytes[index++] = 0xf0 | code >> 18;
          bytes[index++] = 0x80 | code >> 12 & 0x3f;
          bytes[index++] = 0x80 | code >> 6 & 0x3f;
          bytes[index++] = 0x80 | code & 0x3f;
        }
      }

      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = new Sha256(is224, true).update(key).array();
    }

    var oKeyPad = [],
        iKeyPad = [];

    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);
    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }

  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);

    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;

    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/0xB0/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/0xB0/index.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "height": "100%"
  },
  ".container .b0_nav": {
    "width": "100%",
    "backgroundColor": "#CCCCCC",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav"
        }
      ]
    }
  },
  ".container .b0_nav_list": {
    "width": "100%",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list"
        }
      ]
    }
  },
  ".container .b0_nav_list_lock_l": {
    "width": "100%",
    "height": "84px",
    "marginTop": "60px",
    "paddingRight": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_lock_l"
        }
      ]
    }
  },
  ".container .b0_nav_list .b0_nav_list_lock_img": {
    "width": "84px",
    "height": "100%",
    "resizeMode": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_lock_img"
        }
      ]
    }
  },
  ".container .b0_nav_list_lock": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "width": "100%",
    "height": "84px",
    "marginTop": "60px",
    "paddingRight": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_lock"
        }
      ]
    }
  },
  ".container .b0_nav_list_usemeiju": {
    "width": "100%",
    "textAlign": "right",
    "marginTop": "5px",
    "paddingRight": "55px",
    "fontSize": "24px",
    "color": "#FFFFFF",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_usemeiju"
        }
      ]
    }
  },
  ".container .b0_nav_list_data": {
    "width": "100%",
    "marginTop": "100px",
    "textAlign": "center",
    "fontSize": "330px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_data"
        }
      ]
    }
  },
  ".container .b0_nav_list_about": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "48px",
    "color": "#FFFFFF",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_about"
        }
      ]
    }
  },
  ".container .b0_nav_list_done": {
    "marginTop": "300px",
    "width": "100%",
    "textAlign": "center",
    "fontSize": "144px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_done"
        }
      ]
    }
  },
  ".container .b0_nav_list_doneText": {
    "marginTop": "112px",
    "width": "100%",
    "textAlign": "center",
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_doneText"
        }
      ]
    }
  },
  ".container .b0_nav_list_status": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "54px",
    "color": "#FFFFFF",
    "marginTop": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_nav_list_status"
        }
      ]
    }
  },
  ".container .b0_ctr": {
    "width": "100%",
    "height": "350px",
    "backgroundColor": "#F9CB3D",
    "flexDirection": "row",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_ctr"
        }
      ]
    }
  },
  ".container .b0_ctr_text": {
    "marginTop": "15px",
    "width": "100%",
    "textAlign": "center",
    "fontSize": "36px",
    "color": "#FFFFFF",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_ctr_text"
        }
      ]
    }
  },
  ".container .b0_contrl": {
    "width": "100%",
    "height": "350px",
    "flexDirection": "row",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_contrl"
        }
      ]
    }
  },
  ".container .b0_contrl_btn": {
    "width": "214px",
    "marginTop": "33px",
    "flexDirection": "column",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_contrl_btn"
        }
      ]
    }
  },
  ".container .b0_contrl_btn_img": {
    "width": "150px",
    "height": "150px",
    "marginLeft": "32px",
    "marginRight": "32px",
    "resizeMode": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_contrl_btn_img"
        }
      ]
    }
  },
  ".container .b0_contrl_btn_text": {
    "marginTop": "15px",
    "width": "100%",
    "textAlign": "center",
    "fontSize": "36px",
    "color": "#666666",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_contrl_btn_text"
        }
      ]
    }
  },
  ".container .b0_alert": {
    "position": "fixed",
    "left": "0px",
    "top": "0px",
    "bottom": "0px",
    "right": "0px",
    "backgroundColor": "#000000",
    "opacity": 0.5,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert"
        }
      ]
    }
  },
  ".container .b0_alert_nav": {
    "position": "fixed",
    "left": "0px",
    "top": "0px",
    "bottom": "0px",
    "right": "0px",
    "flexDirection": "column",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list": {
    "marginLeft": "60px",
    "marginRight": "60px",
    "width": "960px",
    "borderRadius": "30px",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_title": {
    "width": "100%",
    "height": "147px",
    "borderBottomWidth": "1.5px",
    "borderBottomColor": "#D9D9D9",
    "textAlign": "center",
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_title"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_item": {
    "width": "100%",
    "height": "147px",
    "borderBottomWidth": "1.5px",
    "borderBottomColor": "#D9D9D9",
    "paddingLeft": "58px",
    "paddingRight": "58px",
    "flexDirection": "row",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_item"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_item_title": {
    "width": "50%",
    "textAlign": "left",
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_item_title"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_item_status_l": {
    "width": "50%",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_item_status_l"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_item_status": {
    "width": "50%",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_item_status"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_item_status_data": {
    "fontSize": "42px",
    "color": "#666666",
    "marginRight": "15px",
    "marginLeft": "15px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_item_status_data"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_item_status_img": {
    "marginTop": "70px",
    "width": "24px",
    "height": "12px",
    "resizeMode": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_item_status_img"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_select": {
    "width": "100%",
    "backgroundColor": "#F2F2F2",
    "flexDirection": "row",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_select_firelist": {
    "width": "100%",
    "borderLeftWidth": "1.5px",
    "borderLeftColor": "#D9D9D9",
    "height": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select_firelist"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_select_list": {
    "width": "50%",
    "borderLeftWidth": "1.5px",
    "borderLeftColor": "#D9D9D9",
    "height": "450px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select_list"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_select .b0_alert_nav_list_select_list_item": {
    "height": "105px",
    "width": "100%",
    "flexDirection": "row",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select_list_item"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_select .b0_alert_nav_list_select_list_item_data": {
    "width": "50%",
    "textAlign": "right",
    "fontSize": "48px",
    "color": "#CCCCCC",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select_list_item_data"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_select .b0_alert_nav_list_select_list_item_img": {
    "width": "40px",
    "height": "25px",
    "resizeMode": "cover",
    "marginLeft": "30px",
    "marginRight": "30px",
    "marginTop": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_select_list_item_img"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_btn": {
    "width": "100%",
    "height": "150px",
    "flexDirection": "row",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_btn"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_btn_1": {
    "width": "50%",
    "height": "150px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_btn_1"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_btn_1_text": {
    "width": "100%",
    "height": "60px",
    "marginTop": "45px",
    "textAlign": "center",
    "fontSize": "48px",
    "color": "#F9CB3D",
    "borderRightWidth": "1.5px",
    "borderRightColor": "#CCCCCC",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_btn_1_text"
        }
      ]
    }
  },
  ".container .b0_alert_nav_list_btn_1_txt": {
    "width": "100%",
    "height": "60px",
    "marginTop": "45px",
    "textAlign": "center",
    "fontSize": "48px",
    "color": "#F9CB3D",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "b0_alert_nav_list_btn_1_txt"
        }
      ]
    }
  },
  ".bo_kong": {
    "width": "50%"
  },
  ".bo_kong_l": {
    "width": "50%",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  ".doanimation": {
    "animationName": "animation",
    "animationDuration": "150ms",
    "animationTimingFunction": "linear",
    "animationFillMode": "forwards"
  },
  ".doneanimation": {
    "animationName": "animationdone",
    "animationDuration": "150ms",
    "animationTimingFunction": "linear",
    "animationFillMode": "forwards"
  },
  "@KEYFRAMES": {
    "animation": [
      {
        "height": "450px",
        "time": 0
      },
      {
        "height": "0px",
        "time": 100
      }
    ],
    "animationdone": [
      {
        "height": "0px",
        "time": 0
      },
      {
        "height": "450px",
        "time": 100
      }
    ]
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaHead/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaHead/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".l_midea-head-title": {
    "width": "800px",
    "height": "144px",
    "fontSize": "50px",
    "fontWeight": "bold",
    "paddingRight": "280px",
    "textAlign": "center"
  },
  ".midea-head": {
    "width": "100%",
    "height": "144px",
    "backgroundColor": "#CCCCCC",
    "flexDirection": "row"
  },
  ".midea-head-title": {
    "width": "800px",
    "height": "144px",
    "fontSize": "50px",
    "fontWeight": "bold",
    "paddingLeft": "280px",
    "textAlign": "center"
  },
  ".midea-head-more": {
    "width": "66px",
    "height": "66px",
    "marginTop": "40px"
  },
  ".midea-head-back": {
    "width": "66px",
    "height": "66px",
    "marginLeft": "40px",
    "marginTop": "40px"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaAbout/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaAbout/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".mdiea_about": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "backgroundColor": "#333333",
    "opacity": 0.7
  },
  ".mdiea_about_list": {
    "position": "fixed",
    "left": "30px",
    "bottom": "60px",
    "width": "1020px",
    "flexDirection": "column",
    "borderRadius": "20px",
    "backgroundColor": "#ffffff",
    "height": "320px"
  },
  ".mdiea_about_list_1": {
    "width": "100%",
    "height": "159px",
    "fontSize": "48px",
    "textAlign": "center",
    "color": "#000000",
    "borderBottomColor": "#E5E5E5",
    "borderBottomWidth": "2px"
  },
  ".mdiea_about_list_2": {
    "width": "100%",
    "height": "159px",
    "fontSize": "48px",
    "color": "#000000",
    "textAlign": "center"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaLoading/index.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaLoading/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container-loading": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px"
  },
  ".container-mark": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "backgroundColor": "#333333",
    "opacity": 0.7
  },
  ".progerss_circular_progerss": {
    "position": "fixed",
    "top": "600px",
    "left": "505px",
    "strokeWidth": "10px",
    "color": "#cccccc",
    "width": "70px",
    "height": "70px"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaTips/index.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaTips/index.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".mdiea-tips": {
    "position": "fixed",
    "bottom": "30px",
    "left": "30px",
    "right": "30px",
    "height": "228px",
    "flexDirection": "row"
  },
  ".mdiea-tips-mork": {
    "position": "fixed",
    "bottom": "30px",
    "left": "30px",
    "borderRadius": "30px",
    "right": "30px",
    "backgroundColor": "#000000",
    "opacity": 0.6,
    "height": "228px"
  },
  ".mdiea-tips-text-push": {
    "fontSize": "48px",
    "width": "980px",
    "height": "228px",
    "color": "#FFFFFF",
    "paddingLeft": "50px",
    "textAlign": "left"
  },
  ".mdiea-tips-img": {
    "width": "60px",
    "height": "60px",
    "marginRight": "50px",
    "marginTop": "84px",
    "resizeMode": "cover"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/0xB0/index.ux?uxType=page&importNames[]=midea-head,importNames[]=midea-tips,importNames[]=midea-loading":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/0xB0/index.ux?uxType=page&importNames[]=midea-head,importNames[]=midea-tips,importNames[]=midea-loading ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "midea-head",
      "attr": {
        "title": "微波炉",
        "language": function () {return this.language},
        "isnew": function () {return this.bgColor},
        "power": function () {return this.power}
      },
      "events": {
        "close-websocket": "closeWebsocket"
      }
    },
    {
      "type": "refresh",
      "attr": {
        "offset": function () {return this.isoffset},
        "refreshing": function () {return this.isRefreshing}
      },
      "classList": [
        "B6_refresh"
      ],
      "events": {
        "refresh": "scrollbottom"
      },
      "children": [
        {
          "type": "list",
          "attr": {
            "id": "list"
          },
          "style": {
            "backgroundColor": function () {return this.power==='on'?'#F9CB3D':'#cccccc'}
          },
          "classList": [
            "b0_nav"
          ],
          "id": "list",
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "listItem"
              },
              "classList": [
                "b0_nav_list"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return [this.language?'b0_nav_list_lock':'b0_nav_list_lock_l']},
                  "events": {
                    "click": function (evt) {this.childLock(evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return '' + (this.power==='on'?'./assets/img/child-lock-on-':'./assets/img/child-lock-off-') + (this.lock==='on'?'on.png':'off.png')}
                      },
                      "classList": [
                        "b0_nav_list_lock_img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return [this.language?'b0_nav_list_lock':'b0_nav_list_lock_l']},
                  "events": {
                    "click": function (evt) {this.isMeiju(evt)}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.power==='on'?'./assets/img/loadingMeiju.png':'./assets/img/meijuicon.png'}
                      },
                      "classList": [
                        "b0_nav_list_lock_img"
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "使用美居"
                  },
                  "classList": [
                    "b0_nav_list_usemeiju"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.power==='on'?this.timeData(this.minutes,this.second):'--'}
                  },
                  "classList": [
                    "b0_nav_list_data"
                  ],
                  "shown": function () {return this.power==='on'&&this.work_status!='end'&&this.work_status!='cancel'},
                  "style": {
                    "color": function () {return this.power==='on'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "大约剩余"
                  },
                  "classList": [
                    "b0_nav_list_about"
                  ],
                  "shown": function () {return this.power==='on'&&this.work_status!='end'&&this.work_status!='cancel'},
                  "style": {
                    "color": function () {return this.power==='on'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "已完成"
                  },
                  "classList": [
                    "b0_nav_list_done"
                  ],
                  "shown": function () {return this.power==='on'&&this.work_status==='end'},
                  "style": {
                    "color": function () {return this.power==='on'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '' + '火力 ' + (this.firpower(this.fire_power)) + '档 | ' + (this.statusData(this.work_status))}
                  },
                  "classList": [
                    "b0_nav_list_status"
                  ],
                  "shown": function () {return this.power==='on'&&this.work_status!='cancel'},
                  "style": {
                    "color": function () {return this.power==='on'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "待机中"
                  },
                  "classList": [
                    "b0_nav_list_done"
                  ],
                  "shown": function () {return this.power==='on'&&this.work_status==='cancel'},
                  "style": {
                    "color": function () {return this.power==='on'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "请选择下方功能"
                  },
                  "classList": [
                    "b0_nav_list_doneText"
                  ],
                  "shown": function () {return this.power==='on'&&this.work_status==='cancel'},
                  "style": {
                    "color": function () {return this.power==='on'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "已关机"
                  },
                  "classList": [
                    "b0_nav_list_done"
                  ],
                  "shown": function () {return this.power==='off'},
                  "style": {
                    "color": function () {return this.power==='on'?'#ffffff':'#666666'}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "点击下方开关"
                  },
                  "classList": [
                    "b0_nav_list_doneText"
                  ],
                  "shown": function () {return this.power==='off'},
                  "style": {
                    "color": function () {return this.power==='on'?'#ffffff':'#666666'}
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "b0_contrl"
      ],
      "shown": function () {return this.work_status!='work'&&this.work_status!='end'},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "b0_contrl_btn"
          ],
          "events": {
            "click": function (evt) {this.powerOpen(evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/0xB0/assets/img/off.png"
              },
              "classList": [
                "b0_contrl_btn_img"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "开关"
              },
              "classList": [
                "b0_contrl_btn_text"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "b0_contrl_btn"
          ],
          "events": {
            "click": function (evt) {this.showAlert(evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/0xB0/assets/img/doing.png"
              },
              "classList": [
                "b0_contrl_btn_img"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "启动"
              },
              "classList": [
                "b0_contrl_btn_text"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "b0_ctr"
      ],
      "shown": function () {return this.power==='on'&&this.start},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "b0_contrl_btn"
          ],
          "events": {
            "click": function (evt) {this.stopDevice(evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/0xB0/assets/img/stop.png"
              },
              "classList": [
                "b0_contrl_btn_img"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "取消"
              },
              "classList": [
                "b0_ctr_text"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "b0_ctr"
      ],
      "shown": function () {return this.power==='on'&&this.work_status==='end'},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "b0_contrl_btn"
          ],
          "events": {
            "click": function (evt) {this.stopDevice(evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/0xB0/assets/img/confirm.png"
              },
              "classList": [
                "b0_contrl_btn_img"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "确认"
              },
              "classList": [
                "b0_ctr_text"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "show": function () {return this.isset}
      },
      "classList": [
        "b0_alert"
      ],
      "events": {
        "click": function (evt) {this.cancel(evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {
            "show": function () {return this.isset}
          },
          "classList": [
            "b0_alert_nav"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "b0_alert_nav_list"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "加热设置"
                  },
                  "classList": [
                    "b0_alert_nav_list_title"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "b0_alert_nav_list_item"
                  ],
                  "events": {
                    "click": function (evt) {this.doingAnimation('time',evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "加热时长"
                      },
                      "shown": function () {return this.language},
                      "classList": [
                        "b0_alert_nav_list_item_title"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": function () {return ['' + 'b0_alert_nav_list_item_status' + (this.language?'':'_l')]},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '' + (this.min>=0?this.min:'--') + '分钟' + (this.sec>=0?this.sec:'--') + '秒'}
                          },
                          "shown": function () {return this.language},
                          "classList": [
                            "b0_alert_nav_list_item_status_data"
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": "/0xB0/assets/img/arow_down.png"
                          },
                          "classList": [
                            "b0_alert_nav_list_item_status_img"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '' + (this.min>=0?this.min:'--') + '分钟' + (this.sec>=0?this.sec:'--') + '秒'}
                          },
                          "shown": function () {return !this.language},
                          "classList": [
                            "b0_alert_nav_list_item_status_data"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "加热时长"
                      },
                      "shown": function () {return !this.language},
                      "classList": [
                        "b0_alert_nav_list_item_title"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "b0_alert_nav_list_select"
                  ],
                  "children": [
                    {
                      "type": "list",
                      "attr": {
                        "id": "listMin"
                      },
                      "classList": function () {return ['b0_alert_nav_list_select_list', this.doanimat]},
                      "shown": function () {return this.language},
                      "id": "listMin",
                      "children": [
                        {
                          "type": "list-item",
                          "attr": {
                            "type": "list_Item"
                          },
                          "classList": [
                            "b0_alert_nav_list_select_list_item"
                          ],
                          "events": {
                            "click": function (evt) {this.selectData(this.$idx,'min',evt)}
                          },
                          "repeat": function () {return this.getSecMin(100)},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return '' + (this.$item.data) + '分钟'}
                              },
                              "classList": [
                                "b0_alert_nav_list_select_list_item_data"
                              ],
                              "style": {
                                "color": function () {return this.min===this.$idx?'#F9CB3D':'#CCCCCC'}
                              }
                            },
                            {
                              "type": "image",
                              "attr": {
                                "src": "/0xB0/assets/img/select.png",
                                "show": function () {return this.min===this.$idx}
                              },
                              "classList": [
                                "b0_alert_nav_list_select_list_item_img"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "list",
                      "attr": {
                        "id": "listSec"
                      },
                      "classList": function () {return ['b0_alert_nav_list_select_list', this.doanimat]},
                      "id": "listSec",
                      "children": [
                        {
                          "type": "list-item",
                          "attr": {
                            "type": "list_Item"
                          },
                          "classList": [
                            "b0_alert_nav_list_select_list_item"
                          ],
                          "events": {
                            "click": function (evt) {this.selectData(this.$idx,'sec',evt)}
                          },
                          "repeat": function () {return this.getSecMin(60)},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.data}
                              },
                              "classList": [
                                "b0_alert_nav_list_select_list_item_data"
                              ],
                              "shown": function () {return this.language},
                              "style": {
                                "color": function () {return this.sec===this.$idx?'#F9CB3D':'#CCCCCC'}
                              }
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": function () {return ['' + 'bo_kong' + (this.language?'':'_l')]},
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/0xB0/assets/img/select.png",
                                    "show": function () {return this.sec===this.$idx}
                                  },
                                  "classList": [
                                    "b0_alert_nav_list_select_list_item_img"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.data}
                              },
                              "classList": [
                                "b0_alert_nav_list_select_list_item_data"
                              ],
                              "shown": function () {return !this.language},
                              "style": {
                                "color": function () {return this.sec===this.$idx?'#F9CB3D':'#CCCCCC'}
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "list",
                      "attr": {
                        "id": "listMin"
                      },
                      "classList": function () {return ['b0_alert_nav_list_select_list', this.doanimat]},
                      "shown": function () {return !this.language},
                      "id": "listMin",
                      "children": [
                        {
                          "type": "list-item",
                          "attr": {
                            "type": "list_Item"
                          },
                          "classList": [
                            "b0_alert_nav_list_select_list_item"
                          ],
                          "events": {
                            "click": function (evt) {this.selectData(this.$idx,'min',evt)}
                          },
                          "repeat": function () {return this.getSecMin(100)},
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "bo_kong_l"
                              ],
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/0xB0/assets/img/select.png",
                                    "show": function () {return this.min===this.$idx}
                                  },
                                  "classList": [
                                    "b0_alert_nav_list_select_list_item_img"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return '' + (this.$item.data) + '分钟'}
                              },
                              "classList": [
                                "b0_alert_nav_list_select_list_item_data"
                              ],
                              "style": {
                                "color": function () {return this.min===this.$idx?'#F9CB3D':'#CCCCCC'}
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "b0_alert_nav_list_item"
                  ],
                  "events": {
                    "click": function (evt) {this.doingAnimation('fire',evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "火力"
                      },
                      "shown": function () {return this.language},
                      "classList": [
                        "b0_alert_nav_list_item_title"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": function () {return ['' + 'b0_alert_nav_list_item_status' + (this.language?'':'_l')]},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '' + (this.fire?this.fire:'--') + '档'}
                          },
                          "shown": function () {return this.language},
                          "classList": [
                            "b0_alert_nav_list_item_status_data"
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": "/0xB0/assets/img/arow_down.png"
                          },
                          "classList": [
                            "b0_alert_nav_list_item_status_img"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '' + (this.fire?this.fire:'--') + '档'}
                          },
                          "shown": function () {return !this.language},
                          "classList": [
                            "b0_alert_nav_list_item_status_data"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "火力"
                      },
                      "shown": function () {return !this.language},
                      "classList": [
                        "b0_alert_nav_list_item_title"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "b0_alert_nav_list_select"
                  ],
                  "children": [
                    {
                      "type": "list",
                      "attr": {
                        "id": "listFire"
                      },
                      "classList": function () {return ['b0_alert_nav_list_select_firelist', this.doneanimat]},
                      "id": "listFire",
                      "children": [
                        {
                          "type": "list-item",
                          "attr": {
                            "type": "list_Item"
                          },
                          "classList": [
                            "b0_alert_nav_list_select_list_item"
                          ],
                          "events": {
                            "click": function (evt) {this.selectData(this.$idx+1,'fire',evt)}
                          },
                          "repeat": function () {return this.getSecMin(10)},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return '' + (this.$item.data+1) + '档'}
                              },
                              "classList": [
                                "b0_alert_nav_list_select_list_item_data"
                              ],
                              "shown": function () {return this.language},
                              "style": {
                                "color": function () {return this.fire-1===this.$idx?'#F9CB3D':'#CCCCCC'}
                              }
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": function () {return ['' + 'bo_kong' + (this.language?'':'_l')]},
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/0xB0/assets/img/select.png",
                                    "show": function () {return this.fire-1===this.$idx}
                                  },
                                  "classList": [
                                    "b0_alert_nav_list_select_list_item_img"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return '' + (this.$item.data+1) + '档'}
                              },
                              "classList": [
                                "b0_alert_nav_list_select_list_item_data"
                              ],
                              "shown": function () {return !this.language},
                              "style": {
                                "color": function () {return this.fire-1===this.$idx?'#F9CB3D':'#CCCCCC'}
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "b0_alert_nav_list_btn"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "b0_alert_nav_list_btn_1"
                      ],
                      "shown": function () {return this.language},
                      "events": {
                        "click": function (evt) {this.cancel(evt)}
                      },
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "取消"
                          },
                          "classList": [
                            "b0_alert_nav_list_btn_1_text"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "b0_alert_nav_list_btn_1"
                      ],
                      "events": {
                        "click": function (evt) {this.startDevice(evt)}
                      },
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "启动"
                          },
                          "classList": [
                            "b0_alert_nav_list_btn_1_txt"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "b0_alert_nav_list_btn_1"
                      ],
                      "shown": function () {return !this.language},
                      "events": {
                        "click": function (evt) {this.cancel(evt)}
                      },
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "取消"
                          },
                          "classList": [
                            "b0_alert_nav_list_btn_1_text"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "midea-loading",
      "attr": {},
      "shown": function () {return this.isshowLoading}
    },
    {
      "type": "midea-tips",
      "attr": {},
      "shown": function () {return this.istips}
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaAbout/index.ux?uxType=comp&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaAbout/index.ux?uxType=comp& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "mdiea_about"
  ],
  "events": {
    "click": "cancel"
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "mdiea_about_list"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "关于美居快应用"
          },
          "classList": [
            "mdiea_about_list_1"
          ],
          "events": {
            "click": "clickabout"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "取消"
          },
          "classList": [
            "mdiea_about_list_2"
          ],
          "events": {
            "click": "cancel"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "midea-head"
  ],
  "style": {
    "backgroundColor": function () {return this.changColor(this.power,this.hightColor)}
  },
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.title}
      },
      "classList": function () {return [this.language?'midea-head-title':'l_midea-head-title']},
      "style": {
        "color": function () {return this.power==='on'?'#ffffff':'#666666'}
      }
    },
    {
      "type": "image",
      "attr": {
        "show": function () {return this.showMenu},
        "src": function () {return this.foo(this.power,true)}
      },
      "classList": [
        "midea-head-back"
      ],
      "events": {
        "click": "openMenu"
      }
    },
    {
      "type": "image",
      "attr": {
        "src": function () {return this.foo(this.power,false)}
      },
      "classList": [
        "midea-head-back"
      ],
      "events": {
        "click": "goback"
      }
    },
    {
      "type": "midea-about",
      "attr": {},
      "shown": function () {return this.isabout},
      "events": {
        "can-cel": "onclickFn",
        "can-close": "onclickFn"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaLoading/index.ux?uxType=comp&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaLoading/index.ux?uxType=comp& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container-loading"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "container-mark"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "container-img"
      ],
      "children": [
        {
          "type": "progress",
          "attr": {
            "type": "circular"
          },
          "classList": [
            "progerss_circular_progerss"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaTips/index.ux?uxType=comp&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaTips/index.ux?uxType=comp& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "mdiea-tips_list"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "mdiea-tips-mork"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "mdiea-tips"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "当前设备离线，请检查连接状态"
              },
              "classList": [
                "mdiea-tips-text-push"
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": "/Component/MideaTips/assets/menu_ic_cancel_online.png"
              },
              "classList": [
                "mdiea-tips-img"
              ],
              "events": {
                "click": function (evt) {this.close(evt)}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/0xB0/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/0xB0/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(__webpack_require__(/*! ../Common/api/api.js */ "./src/Common/api/api.js"));

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _service = _interopRequireDefault($app_require$("@app-module/service.account"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.barcode"));

var _system6 = _interopRequireDefault($app_require$("@app-module/system.package"));

var _system7 = _interopRequireDefault($app_require$("@app-module/system.network"));

var _networkAPI = _interopRequireDefault(__webpack_require__(/*! ../Common/api/networkAPI.js */ "./src/Common/api/networkAPI.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  private: {
    isagain: true,
    lanOnline: 'false',
    isLanInit: false,
    timeTips: '',
    isoffset: '-1000px',
    isRefreshing: false,
    ws: '',
    isws: false,
    isclosews: false,
    pause_data: false,
    headtimeout: '',
    timeout: '',
    isshowLoading: false,
    istips: false,
    bgColor: true,
    start: false,
    pause: false,
    isset: false,
    isabout: false,
    language: true,
    deviceHeight: 0,
    doanimat: 'doneanimation',
    doneanimat: '',
    ismeiju: false,
    code: '',
    accessToken: '',
    min: 0,
    sec: 0,
    fire: 0,
    isfirst: false,
    openId: '',
    lock: 'off',
    power: "off",
    minutes: 0,
    second: 0,
    isdone: false,
    fire_power: 0,
    online: 'false',
    isworking: true,
    timeoutInter: "",
    work_status: 'cloud',
    iswarm: true,
    mode: 'microwave',
    num: 0,
    listDevice: {},
    B0list: ['lock', 'power', 'minutes', 'second', 'fire_power', 'work_status', 'mode'],
    listdata: {
      lock: 'off',
      power: "off",
      minutes: 0,
      second: 0,
      fire_power: 0,
      online: 'false',
      work_status: 'cloud',
      mode: 'microwave'
    }
  },
  public: {
    deviceSeries: '',
    deviceId: '',
    openid: ''
  },
  powerOpen: function powerOpen() {
    var params;
    var that = this;

    if (that.online === 'true') {
      if (that.lock === 'off') {
        if (that.work_status != 'three') {
          if (that.power === 'on') {
            params = {
              power: 'off'
            };
          } else {
            params = {
              power: 'on'
            };
          }

          var status = ['power'];
          that.ctrDevice(params, status, false);
        } else {
          _system.default.showToast({
            message: "设备正在启动中,请稍后"
          });
        }
      } else {
        _system.default.showToast({
          message: "童锁打开状态,请关闭童锁在进行操作"
        });
      }
    } else {
      that.isshowclose();
    }
  },
  startDevice: function startDevice() {
    var that = this;
    var params;

    if (parseInt(that.min) >= 0 && parseInt(that.fire) > 0) {
      this.isset = false;
      params = {
        minutes: that.min,
        second: that.sec,
        fire_power: that.fire,
        work_status: 'work',
        mode: 'microwave'
      };
      var status = ['lock', 'minutes', 'second', 'fire_power', 'work_status', 'mode'];
      that.ctrDevice(params, status, false);
    } else {
      _system.default.showToast({
        message: "请选择加热时长与火力"
      });
    }
  },
  pauseDevice: function pauseDevice() {
    var params = {
      work_status: 'pause'
    };
    var status = ['work_status'];

    if (this.lock === 'off') {
      this.ctrDevice(params, status, false);
    } else {
      _system.default.showToast({
        message: "童锁打开状态,请关闭童锁在进行操作"
      });
    }
  },
  stopDevice: function stopDevice() {
    var params = {
      work_status: 'cancel'
    };
    var status = ['work_status'];

    if (this.lock === 'off') {
      this.ctrDevice(params, status, false);
    } else {
      _system.default.showToast({
        message: "童锁打开状态,请关闭童锁在进行操作"
      });
    }
  },
  restartDevice: function restartDevice() {
    var params = {
      minutes: this.min,
      second: this.sec,
      fire_power: this.fire,
      work_status: 'work',
      mode: 'microwave'
    };
    var status = [];

    if (this.lock === 'off') {
      this.ctrDevice(params, status, true);
    } else {
      _system.default.showToast({
        message: "童锁打开状态"
      });
    }
  },
  childLock: function childLock() {
    var that = this;
    var params;

    if (that.online === 'true') {
      if (that.work_status != 'work' && that.work_status != 'three') {
        if (that.lock === 'on') {
          params = {
            lock: 'off'
          };
        } else {
          params = {
            lock: 'on'
          };
        }

        var status = ['lock'];
        that.ctrDevice(params, status, false);
      } else {
        _system.default.showToast({
          message: "程序运行中不能操作童锁"
        });
      }
    } else {
      that.isshowclose();
    }
  },
  firpower: function firpower(str) {
    if (parseInt(str) > 0) {
      return str;
    } else {
      return '-- ';
    }
  },
  statusData: function statusData(str) {
    var data = '待机中';

    switch (str) {
      case 'cancel':
        data = '待机中';
        break;

      case 'work':
        data = '运行中';
        break;

      case 'pause':
        data = '暂停中';
        break;

      case 'save_power':
        data = '省电';
        break;

      case 'end':
        data = '已完成';
        break;

      case 'order':
        data = '预约中';
        break;

      case 'heat':
        data = '预热中';
        break;

      case 'three':
        data = '爱心3秒';
        break;

      case 'reaction':
        data = '菜单感应中';
        break;

      case 'cloud':
        data = '云菜谱段结束';
        break;
    }

    return data;
  },
  isMeiju: function isMeiju() {
    var that = this;
    var str1 = "确定打开美居？（仅支持美居5.2及以上版本）";
    var str2 = "您还没安装美居app，是否确定下载安装?";

    _system6.default.hasInstalled({
      package: 'com.midea.ai.appliances',
      success: function success(res) {
        _system.default.showDialog({
          title: '提示',
          message: res.result ? str1 : str2,
          buttons: [{
            text: res.result ? '直接打开' : '去下载',
            color: '#33dd44'
          }],
          success: function success(data) {
            if (res.result) {
              _system2.default.push({
                uri: 'meiju://com.midea.meiju/main'
              });
            } else {
              _system6.default.install({
                package: 'com.midea.ai.appliances',
                success: function success(resp) {},
                fail: function fail(resp, code) {}
              });
            }
          },
          cancel: function cancel() {},
          fail: function fail(data, code) {}
        });
      },
      fail: function fail(res, code) {}
    });
  },
  getSecMin: function getSecMin(num) {
    var that = this;
    var arrary = [];

    for (var i = 0; i < num; i++) {
      var obj = {
        id: i,
        data: i
      };
      arrary.push(obj);
    }

    return arrary;
  },
  setItem: function setItem(id, num) {
    this.$element(id).scrollTo({
      index: 10
    });
  },
  startOrpause: function startOrpause() {
    if (this.power === 'on') {
      if (this.listdata.work_status === 'work') {
        this.start = true;
        this.pause = false;
      } else if (this.listdata.work_status === 'pause') {
        this.start = false;
        this.pause = true;
      } else {
        this.start = false;
        this.pause = false;
      }
    } else {
      this.start = false;
      this.pause = false;
    }
  },
  dataCan: function dataCan() {
    var that = this;

    if (that.timeoutInter != '') {
      clearInterval(that.timeoutInter);
    }

    that.isRefreshing = false;
    that.isshowLoading = false;
    that.isfirst = true;
    that.pause_data = false;
    that.work_status = that.listdata.work_status;
    that.fire_power = that.listdata.fire_power;
    that.second = that.listdata.second;
    that.minutes = that.listdata.minutes;
    that.lock = that.listdata.lock;
    that.power = that.listdata.power;
    that.online = that.listdata.online;
    that.startOrpause();

    if (that.power === 'on') {
      if (that.work_status === 'work' || that.work_status === 'save_power' || that.work_status === 'order' || that.work_status === 'heat' || that.work_status === 'three') {
        that.headTime();
      }
    }
  },
  selectData: function selectData(data, str) {
    var that = this;

    switch (str) {
      case 'min':
        that.min = data;

        if (data === 0) {
          if (that.sec === 0 || that.sec === '--') {
            that.sec = 1;
          }
        } else {
          if (that.sec === '--') {
            that.sec = 0;
          }
        }

        break;

      case 'sec':
        if (data === 0 && that.min === 0) {} else {
          that.sec = data;

          if (data === 0) {
            if (that.min === 0 || that.min === '--') {
              that.min = 1;
            }
          } else {
            if (that.min === 0 || that.min === '--') {
              that.min = 0;
            }
          }
        }

        break;

      case 'fire':
        that.fire = data;
        break;
    }
  },
  doingAnimation: function doingAnimation(str) {
    var that = this;

    switch (str) {
      case 'time':
        if (that.doanimat != 'doneanimation') {
          that.doanimat = 'doneanimation';
          that.doneanimat = 'doanimation';
        }

        break;

      case 'fire':
        if (that.doneanimat != 'doneanimation') {
          that.doanimat = 'doanimation';
          that.doneanimat = 'doneanimation';
        }

        break;
    }
  },
  cancel: function cancel() {
    this.isset = false;
    this.dataCan();
  },
  timeData: function timeData(str1, str2) {
    var that = this;

    if (parseInt(str1) > 0 || parseInt(str2) > 0) {
      var num1 = '';
      var num2 = '';

      if (parseInt(str1) < 10) {
        num1 = "0" + str1;
      } else {
        num1 = str1;
      }

      if (parseInt(str2) < 10) {
        num2 = "0" + str2;
      } else {
        num2 = str2;
      }

      return num1.toString() + ":" + num2.toString();
    } else {
      return '--';
    }
  },
  setTimeout_data: function setTimeout_data() {
    var that = this;
    that.timeout = setTimeout(function () {
      var time = parseInt(that.min) * 60 + parseInt(that.sec) - 1;

      if (!that.pause_data && that.listdata.work_status === 'work') {
        that.listdata.minutes = parseInt(time / 60);
        that.listdata.second = time % 60;
        that.dataCan();
      }
    }, 1000);
  },
  showAlert: function showAlert() {
    var that = this;

    if (that.online === 'true') {
      if (that.lock === 'off') {
        if (that.power === 'on') {
          if (that.work_status != 'three') {
            that.isset = true;

            if (parseInt(that.listdata.minutes) === 0 && parseInt(that.listdata.second) === 0) {
              that.min = "--";
              that.sec = "--";
            } else {
              that.min = parseInt(that.listdata.minutes);
              that.sec = parseInt(that.listdata.second);

              if (that.timeout === '') {}
            }

            if (parseInt(that.listdata.fire_power) > 0) {
              that.fire = that.listdata.fire_power;
            } else {
              that.fire = '--';
            }

            that.dataCan();
            that.doanimat = "";
            that.doingAnimation();
          } else {
            _system.default.showToast({
              message: "设备正在启动中,请稍后"
            });
          }
        } else {
          _system.default.showToast({
            message: "设备关机状态,不能操作"
          });
        }
      } else {
        _system.default.showToast({
          message: "童锁打开状态,请关闭童锁在进行操作"
        });
      }
    } else {
      that.isshowclose();
    }
  },
  isshowclose: function isshowclose() {
    var that = this;

    if (that.timeTips != '') {
      that.istips = false;
      clearTimeout(that.timeTips);
    }

    if (that.iswarm) {
      that.istips = true;
      that.timeTips = setTimeout(function () {
        that.istips = false;
      }, 3000);
    }
  },
  gettime: function gettime() {
    var timestamp = Date.parse(new Date());
    return parseInt(timestamp) + 3600000;
  },
  netWorkGet: function netWorkGet(str) {
    if (this.iswarm) {
      _system7.default.getType({
        success: function success(data) {
          if (data.type === 'none') {
            _system.default.showToast({
              message: str + "，请检查网络",
              duration: 1
            });
          } else {
            _system.default.showToast({
              message: str,
              duration: 1
            });
          }
        }
      });
    }
  },
  getAuthor: function getAuthor() {
    var that = this;

    _service.default.authorize({
      type: 'code',
      success: function success(data) {
        that.code = data.code;
        that.getToken(data.code);
      },
      fail: function fail(data, code) {
        that.dataCan();
        that.isRefreshing = false;
        that.isshowLoading = false;
        that.netWorkGet('授权失败,请稍后重试');
      }
    });
  },
  getToken: function getToken(code) {
    var that = this;
    var params = {
      thirdUId: code
    };
    that.pause_data = true;

    _api.default.getUserToken(params).then(function (res) {
      var data_accesstoken = res;

      if (data_accesstoken.code && data_accesstoken.code === 200) {
        var result_data = _typeof(data_accesstoken.data) === 'object' ? data_accesstoken.data : JSON.parse(data_accesstoken.data);

        if (!parseInt(result_data.code)) {
          that.openId = result_data.openId;
          that.openid = result_data.openId;
          that.accessToken = result_data.accessToken;
          var obj = {
            openid: that.openId,
            accessToken: that.accessToken,
            time: that.gettime()
          };

          _system4.default.set({
            key: 'openidToken',
            value: JSON.stringify(obj),
            success: function success(data) {},
            fail: function fail(data, code) {}
          });

          that.LanOnlineGet();
          that.getDeviceList();
        } else {
          that.dataCan();
          that.isRefreshing = false;
          that.isshowLoading = false;
          that.netWorkGet(_api.default.getCode(result_data.code, "获取访问令牌失败"));
        }
      } else {
        that.dataCan();
        that.isRefreshing = false;
        that.isshowLoading = false;
        that.netWorkGet('获取访问令牌失败,请稍后重试');
      }
    }).catch(function (error, code) {
      console.log("授权接口：error" + error + ":::code" + code);
      that.dataCan();
      that.isRefreshing = false;
      that.isshowLoading = false;
      that.netWorkGet('获取访问令牌失败,请稍后重试');
    });
  },
  getdataLan: function getdataLan(res) {
    var that = this;
    that.isshowLoading = false;
    that.isRefreshing = false;
    that.isfirst = true;

    if (res.code === 200) {
      var data = _typeof(res.data) === "object" ? res.data : JSON.parse(res.data);

      if (!parseInt(data.code) && !parseInt(data.devices[0].status)) {
        var obj = _typeof(data.devices[0].properties) === 'object' ? data.devices[0].properties : JSON.parse(data.devices[0].properties);
        that.listdata = obj;
        that.listDevice = obj;
        that.online = that.listdata.online;

        if (that.online != 'true') {
          that.isshowclose();
        }
      } else {
        that.isworking = true;

        if (data.msg === '') {
          var str1 = '';

          if (data.devices[0].status) {
            str1 = data.devices[0].status;

            if (str1.toString() === '-6') {
              that.isshowclose();
              return false;
            }

            if (str1.toString() != '-100') {
              that.netWorkGet(_api.default.getStatus("get", str1, '获取设备状态失败'));
            } else {
              if (str1.toString() === '-100' && data.devices[0].description.toString() === '3123') {
                that.isshowclose();
              } else {
                that.netWorkGet(_api.default.getStatus("get", str1, '获取设备状态失败'));
              }
            }
          } else {
            str1 = data.code;
            that.netWorkGet(_api.default.getCode(str1, '获取设备状态失败'));
          }
        } else {
          that.netWorkGet(data.msg);
        }
      }
    } else {
      that.netWorkGet('获取设备状态失败,请稍后重试');
    }
  },
  getLanData: function getLanData(res) {
    var that = this;
    that.istips = false;
    var obj = _typeof(res) == 'object' ? res : JSON.parse(res);
    console.log(obj.code);

    if (parseInt(obj.code) == 0) {
      var data = _typeof(obj.message) == 'object' ? obj.message : JSON.parse(obj.message);
      that.listdata = data;
      that.listDevice = data;
      that.online = 'true';
      that.listDevice.online = 'true';
      that.listdata.online = 'true';
    } else {
      that.isagain = false;
      that.lanOnline = "false";
      that.getDeviceList();
    }
  },
  getDeviceList: function getDeviceList() {
    var that = this;
    that.pause_data = true;
    var params = {
      openId: that.openId,
      devices: [{
        deviceId: that.deviceId,
        properties: that.B0list
      }]
    };

    if (_networkAPI.default.$Lanonline.deviceid == that.deviceId && _networkAPI.default.$Lanonline.isonLan == 'true' && that.isagain) {
      that.lanOnline = 'true';
    } else {
      that.lanOnline = 'false';
    }

    _api.default.postDeviceStatusQuery(params, that.accessToken, that.lanOnline, that.deviceId).then(function (res) {
      that.isagain = true;
      that.isshowLoading = false;
      that.isRefreshing = false;
      that.isfirst = true;

      if (that.timeout != '') {
        clearTimeout(that.timeout);
      }

      if (that.headtimeout != '') {
        clearTimeout(that.headtimeout);
      }

      if (res.lanonline) {
        that.getdataLan(res);
      } else {
        that.getLanData(res);
      }

      that.dataCan();
    }).catch(function (error) {
      if (error.online) {
        if (that.timeout != '') {
          clearTimeout(that.timeout);
        }

        if (that.headtimeout != '') {
          clearTimeout(that.headtimeout);
        }

        that.isworking = true;

        if (that.iswarm) {
          that.dataCan();
        }

        that.netWorkGet('获取设备状态失败,请稍后重试');
        that.isRefreshing = false;
        that.isshowLoading = false;
        that.isfirst = true;
      } else {
        that.isagain = false;
        that.lanOnline = "false";
        that.getDeviceList();
      }

      console.log("跑这里就是不对了" + JSON.stringify(error));
    });
  },
  ctrDevice: function ctrDevice(obj, status, bol) {
    var that = this;
    that.isshowLoading = true;
    var status_params = that.listDevice;

    if (bol) {
      status_params.work_status = 'work';
    }

    if (status_params.online) {
      delete status_params.online;
    }

    var params = {
      'openId': that.openId,
      'devices': [{
        "deviceId": that.deviceId,
        "properties": obj,
        "status": status_params
      }]
    };
    that.pause_data = true;
    that.timeout = '';
    console.log("$Lanonline:" + JSON.stringify(_networkAPI.default.$Lanonline) + "::::::::isagain:" + that.isagain);

    if (_networkAPI.default.$Lanonline.deviceid == that.deviceId && _networkAPI.default.$Lanonline.isonLan == 'true' && that.isagain) {
      that.lanOnline = 'true';
    } else {
      that.lanOnline = 'false';
    }

    _api.default.postDeviceControl(params, that.accessToken, that.lanOnline, that.deviceId).then(function (res) {
      that.isagain = true;

      if (that.timeout != '') {
        clearTimeout(that.timeout);
      }

      if (that.headtimeout != '') {
        clearTimeout(that.headtimeout);
      }

      that.isfirst = true;

      if (res.lanonline) {
        that.wlanControl(res);
      } else {
        that.lanControl(res, obj, status, bol);
      }

      that.dataCan();
    }).catch(function (error) {
      if (error.online) {
        if (that.timeout != '') {
          clearTimeout(that.timeout);
        }

        if (that.headtimeout != '') {
          clearTimeout(that.headtimeout);
        }

        that.dataCan();
        that.netWorkGet('获取设备状态失败,请稍后重试');
        that.isRefreshing = false;
        that.isshowLoading = false;
        that.isfirst = true;
      } else {
        that.isagain = false;
        that.lanOnline = 'false';
        that.ctrDevice(obj, status, bol);
      }
    });
  },
  lanControl: function lanControl(res, obj1, status, bol) {
    var that = this;
    var obj = _typeof(res) == 'object' ? res : JSON.parse(res);
    console.log("局域网：" + JSON.stringify(res));

    if (parseInt(obj.code) == 0) {
      var data = _typeof(obj.message) == 'object' ? obj.message : JSON.parse(obj.message);
      that.listdata = data;
      that.listDevice = data;
      that.online = 'true';
      that.listDevice.online = 'true';
      that.listdata.online = 'true';
    } else {
      that.isagain = false;
      that.lanOnline = 'false';
      that.ctrDevice(obj1, status, bol);
    }
  },
  wlanControl: function wlanControl(res) {
    var that = this;

    if (res.code && res.code === 200) {
      var bind_res_data = _typeof(res.data) === 'object' ? res.data : JSON.parse(res.data);

      if (parseInt(bind_res_data.code) == 0) {
        if (!parseInt(bind_res_data.devices[0].status)) {
          that.listdata.online = 'true';
          that.online = 'true';
          var isall = false;
          var obj = _typeof(bind_res_data.devices[0].props) === 'object' ? bind_res_data.devices[0].props : JSON.parse(bind_res_data.devices[0].props);

          if (obj.power) {
            that.listdata.power = obj.power;
          } else {
            isall = true;
          }

          if (obj.lock) {
            that.listdata.lock = obj.lock;
          } else {
            isall = true;
          }

          if (obj.minutes.toString()) {
            that.listdata.minutes = obj.minutes;
          } else {
            isall = true;
          }

          if (obj.second.toString()) {
            that.listdata.second = obj.second;
          } else {
            isall = true;
          }

          if (obj.fire_power) {
            that.listdata.fire_power = obj.fire_power;
          } else {
            isall = true;
          }

          if (obj.work_status) {
            that.listdata.work_status = obj.work_status;
          } else {
            isall = true;
          }

          that.listDevice = obj;

          if (isall) {
            that.isshowLoading = true;
            that.getDeviceList();
          } else {
            that.isRefreshing = false;
            that.isshowLoading = false;
          }
        } else {
          that.isRefreshing = false;
          that.isshowLoading = false;

          if (bind_res_data.msg === '') {
            var str1 = '';

            if (bind_res_data.devices[0].status) {
              str1 = bind_res_data.devices[0].status;

              if (str1.toString() === '-6') {
                that.isshowclose();
                return false;
              }

              if (str1.toString() != '-100') {
                that.netWorkGet(_api.default.getStatus("post", str1, '操作设备失败'));
              } else {
                if (str1.toString() === '-100' && bind_res_data.devices[0].description.toString() === '3123') {
                  that.isshowclose();
                } else {
                  that.netWorkGet(_api.default.getStatus("post", str1, '操作设备失败'));
                }
              }
            } else {
              str1 = bind_res_data.code;
              that.netWorkGet(_api.default.getCode(str1, '操作设备失败'));
            }
          } else {
            that.netWorkGet(bind_res_data.msg);
          }
        }
      } else {
        that.isRefreshing = false;
        that.isshowLoading = false;

        if (bind_res_data.msg === '') {
          var _str = '';
          _str = bind_res_data.code;
          that.netWorkGet(_api.default.getCode(_str, '操作设备失败'));
        } else {
          that.netWorkGet(bind_res_data.msg);
        }
      }
    } else {
      that.isRefreshing = false;
      that.isshowLoading = false;
      that.netWorkGet('操作设备失败,请稍后重试');
    }
  },
  scrollbottom: function scrollbottom(e) {
    var that = this;
    that.isRefreshing = e.refreshing;
    var timestamp = Date.parse(new Date());

    if (that.isfirst) {
      _system4.default.get({
        key: 'openidToken',
        success: function success(data) {
          that.isshowLoading = true;

          if (that.isworking) {
            that.iswarm = true;

            if (data === '') {
              that.getAuthor();
            } else {
              var obj = JSON.parse(data);

              if (parseInt(timestamp) > parseInt(obj.time)) {
                that.getAuthor();
              } else {
                if (obj.openid === that.openid) {
                  that.openId = obj.openid;
                  that.accessToken = obj.accessToken;

                  if (!that.isLanInit) {
                    that.LanOnlineGet();
                  }

                  that.getDeviceList();
                } else {
                  that.getAuthor();
                }
              }
            }
          } else {
            _system.default.showToast({
              message: "爱心" + (3 - that.num) + "秒后再重试"
            });
          }
        },
        fail: function fail(data, code) {
          console.log("handling fail, code = ".concat(code));
        }
      });
    }
  },
  LanOnlineGet: function LanOnlineGet() {
    var that = this;

    _networkAPI.default.deviceInit(that.accessToken, that.deviceId).then(function (res) {
      that.isLanInit = true;
    }).catch(function (error) {
      that.isLanInit = false;
    });
  },
  headTime: function headTime() {
    var that = this;
    var str = 3000;

    if (that.lanOnline == 'true') {
      str = 1000;
    } else {
      str = 3000;
    }

    that.timeoutInter = setInterval(function () {
      that.iswarm = false;
      var timestamp = Date.parse(new Date());

      _system4.default.get({
        key: 'openidToken',
        success: function success(data) {
          if (data === '') {
            that.getAuthor();
          } else {
            var obj = JSON.parse(data);

            if (parseInt(timestamp) > parseInt(obj.time)) {
              that.getAuthor();
            } else {
              if (obj.openid === that.openid) {
                that.openId = obj.openid;
                that.accessToken = obj.accessToken;

                if (!that.isLanInit) {
                  that.LanOnlineGet();
                }

                that.getDeviceList();
              } else {
                that.getAuthor();
              }
            }
          }
        },
        fail: function fail(data, code) {
          console.log("handling fail, code = ".concat(code));
        }
      });
    }, str);
  },
  webSocketdata: function webSocketdata() {
    var that = this;

    _api.default.createWensocket(that.deviceId).then(function (ws) {
      that.ws = ws;
      that.isws = true;

      ws.onopen = function () {
        console.log("websocket连接成功");
      };

      ws.onerror = function (data) {
        that.webSocketdata();
        console.log('websocket连接失败:' + JSON.stringify(data));
      };

      ws.onmessage = function (res) {
        if (that.timeout != '') {
          clearTimeout(that.timeout);
        }

        that.pause_data = true;
        var obj = _typeof(res.data) === 'object' ? res.data : JSON.parse(res.data);

        if (obj.status.online) {
          that.online = obj.status.online;
          that.listdata.online = obj.status.online;
        } else {
          that.online = 'true';
          that.listdata.online = 'true';
        }

        if (obj.status.power) {
          that.listdata.power = obj.status.power;
        }

        if (obj.status.lock) {
          that.listdata.lock = obj.status.lock;
        }

        if (obj.status.minutes) {
          that.listdata.minutes = obj.status.minutes;
        } else {
          that.listdata.minutes = 0;
        }

        if (obj.status.second) {
          that.listdata.second = obj.status.second;
        } else {
          that.listdata.second = 0;
        }

        if (obj.status.fire_power) {
          that.listdata.fire_power = obj.status.fire_power;
        }

        if (obj.status.work_status) {
          that.listdata.work_status = obj.status.work_status;
        }

        that.dataCan();
      };

      ws.onclose = function () {
        if (!that.isclosews) {
          that.webSocketdata();
        }

        console.log("websocket连接已关闭...");
      };
    });
  },
  onclickFn: function onclickFn(e) {
    this.isabout = false;
  },
  closeWebsocket: function closeWebsocket() {
    var that = this;
    that.isclosews = true;

    if (that.timeoutInter != '') {
      clearInterval(that.timeoutInter);
    }

    if (that.ws != '') {
      that.ws.close({
        code: 1000,
        reason: '退出关闭',
        success: function success() {
          that.ws = '';
          console.log("关闭websocket成功");
        },
        fail: function fail(data, code) {
          console.log("关闭websocke失败, code = " + JSON.stringify(code));
        }
      });
    }
  },
  onHide: function onHide() {
    var that = this;
    that.istips = false;
    that.closeWebsocket();
  },
  onShow: function onShow() {
    var that = this;
    that.isclosews = false;

    if (that.timeoutInter != '') {
      clearInterval(that.timeoutInter);
    }

    if (that.online === 'true') {
      if (that.work_status === 'work' || that.work_status === 'save_power' || that.work_status === 'order' || that.work_status === 'heat' || that.work_status === 'three') {
        that.headTime();
      }
    }

    if (that.ws === '' && that.isws) {}
  },
  onInit: function onInit() {
    this.getSecMin();
    var that = this;

    _api.default.getlanguage().then(function (res) {
      if (res === 'ug') {
        that.language = false;
      } else {
        that.language = true;
      }
    });

    _system2.default.clear();

    that.$on('cancel', function (e) {
      that.isabout = false;
    });
    that.$on('closetips', function (e) {
      that.istips = false;
    });
    that.$on('openmenu', function (e) {
      that.isabout = !that.isabout;
    });
    var timestamp = Date.parse(new Date());

    _system4.default.get({
      key: 'openidToken',
      success: function success(data) {
        that.isshowLoading = true;
        console.log("token过期:" + JSON.stringify(data));
        console.log("传过来的openid:" + that.openid);

        if (data === '') {
          that.getAuthor();
        } else {
          var obj = JSON.parse(data);

          if (parseInt(timestamp) > parseInt(obj.time)) {
            that.getAuthor();
          } else {
            if (obj.openid === that.openid) {
              that.openId = obj.openid;
              that.accessToken = obj.accessToken;
              that.LanOnlineGet();
              that.getDeviceList();
            } else {
              that.getAuthor();
            }
          }
        }
      },
      fail: function fail(data, code) {
        console.log("handling fail, code = ".concat(code));
      }
    });
  },
  onBackPress: function onBackPress() {
    var that = this;
    that.closeWebsocket();

    _system2.default.clear();

    this.$app.exit();
  }
};
exports.default = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaAbout/index.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaAbout/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  props: {},
  data: function () {return {}},
  onInit: function onInit(e) {},
  cancel: function cancel() {
    this.$emit('canCel', {
      params: "取消"
    });
  },
  clickabout: function clickabout() {
    this.$emit('canClose', {
      params: "取消"
    });
    setTimeout(function () {
      _system2.default.push({
        uri: "Component/MideaAbout/MideaList"
      });
    }, 50);
  },
  onBackPress: function onBackPress() {
    this.$emit('canCel', {
      params: "取消"
    });
  }
};}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaHead/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaHead/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'midea-head',
  props: {
    coloron: {
      default: '',
      type: String
    },
    coloroff: {
      default: '#CCCCCC',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    power: {
      default: 'off',
      type: String
    },
    showMenu: {
      default: true,
      type: Boolean
    },
    isnew: {
      default: false,
      type: Boolean
    },
    language: {
      default: true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      isabout: false,
      value: '',
      txt: this.text,
      showMenu: true,
      power_1: 'off',
      language: true,
      bgColor: '#3191FD',
      img1: '../Component/MideaHead/assets/menu_ic_more_normal.png'
    };
  },
  onInit: function onInit() {
    var that = this;

    if (that.power) {
      that.$watch('power', 'watchPropsChange');
    }

    var page = _system.default.getState();

    if (that.power == 'on') {} else {}

    if (that.isnew) {
      that.bgColor = "#F9CB3D";
    } else {
      that.bgColor = "#3191FD";
    }
  },
  foo: function foo(power, bol) {
    var page = _system.default.getState();

    console.log("page index = ".concat(page.index));
    console.log("page name = ".concat(page.name));
    console.log("page path = ".concat(page.path));
    var path = '../';
    var string = page.path;
    var count = 1;

    for (var index = 0; index < string.length; index++) {
      var a = string.indexOf('/', index);

      if (a != -1 && string.indexOf('/', index) != string.indexOf('/', index - 1)) {
        count++;
      }
    }

    var img = '';
    var img2 = '';

    if (power == 'on') {
      img = 'Component/MideaHead/assets/menu_ic_more_white.png';
      img2 = 'Component/MideaHead/assets/menu_ic_cancel_online.png';
    } else {
      img = 'Component/MideaHead/assets/menu_ic_more_normal.png';
      img2 = 'Component/MideaHead/assets/menu_ic_cancel_normal.png';
    }

    var pathall = path;

    if (count > 1) {
      pathall = path.repeat(count);
    }

    if (bol) {
      return pathall + img;
    } else {
      return pathall + img2;
    }
  },
  changColor: function changColor(power, str) {
    var that = this;

    if (power == 'on') {
      if (that.coloron != '') {
        return that.coloron;
      } else {
        return that.bgColor;
      }
    } else {
      return that.coloroff;
    }
  },
  watchPropsChange: function watchPropsChange(newV, oldV) {
    this.power_1 = newV;
  },
  goback: function goback() {
    this.$emit("closeWebsocket", {
      params: "关闭"
    });

    _system.default.clear();

    this.$app.exit();
  },
  openMenu: function openMenu() {
    if (!this.isabout) {
      this.isabout = true;
    }
  },
  onclickFn: function onclickFn() {
    this.isabout = false;
  }
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaLoading/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaLoading/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

module.exports = {
  data: function () {return {
    list: []
  }},
  onInit: function onInit(e) {}
};}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaTips/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaTips/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  onInit: function onInit() {},
  close: function close() {
    this.$dispatch('closetips', {
      params: "取消"
    });
  }
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaAbout/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaAbout/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaAbout/index.ux?uxType=comp")

$app_define$('@app-component/midea-about', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaHead/index.ux?uxType=comp&name=midea-head":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaHead/index.ux?uxType=comp&name=midea-head ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../MideaAbout/index.ux?uxType=comp&name=midea-about */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaAbout/index.ux?uxType=comp&name=midea-about")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=midea-about */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaHead/index.ux?uxType=comp&importNames[]=midea-about")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaHead/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaHead/index.ux?uxType=comp")

$app_define$('@app-component/midea-head', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaLoading/index.ux?uxType=comp&name=midea-loading":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaLoading/index.ux?uxType=comp&name=midea-loading ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaLoading/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaLoading/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaLoading/index.ux?uxType=comp")

$app_define$('@app-component/midea-loading', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaTips/index.ux?uxType=comp&name=midea-tips":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!./src/Component/MideaTips/index.ux?uxType=comp&name=midea-tips ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Component/MideaTips/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Component/MideaTips/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Component/MideaTips/index.ux?uxType=comp")

$app_define$('@app-component/midea-tips', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/0xB0/index.ux?uxType=page":
/*!***************************************!*\
  !*** ./src/0xB0/index.ux?uxType=page ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../Component/MideaHead/index.ux?uxType=comp&name=midea-head */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaHead/index.ux?uxType=comp&name=midea-head")
__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../Component/MideaTips/index.ux?uxType=comp&name=midea-tips */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaTips/index.ux?uxType=comp&name=midea-tips")
__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:/ov-midea&type=import!../Component/MideaLoading/index.ux?uxType=comp&name=midea-loading */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?cwd=F:\\ov-midea&type=import!./src/Component/MideaLoading/index.ux?uxType=comp&name=midea-loading")
var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=midea-head,importNames[]=midea-tips,importNames[]=midea-loading */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/0xB0/index.ux?uxType=page&importNames[]=midea-head,importNames[]=midea-tips,importNames[]=midea-loading")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/0xB0/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../node_modules/babel-loader?cwd=F:/ov-midea&plugins[]=F:/ov-midea/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=F:\\ov-midea&plugins[]=F:\\ov-midea\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/0xB0/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ "./src/Common/api/api.js":
/*!*******************************!*\
  !*** ./src/Common/api/api.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = _interopRequireDefault(__webpack_require__(/*! ../../util.js */ "./src/util.js"));

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.device"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _service = _interopRequireDefault($app_require$("@app-module/service.account"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _system6 = _interopRequireDefault($app_require$("@app-module/system.websocketfactory"));

var _uuid = _interopRequireDefault(__webpack_require__(/*! ./uuid.js */ "./src/Common/api/uuid.js"));

var _jsSha = _interopRequireDefault(__webpack_require__(/*! js-sha256 */ "./node_modules/_js-sha256@0.9.0@js-sha256/src/sha256.js"));

var _networkAPI = _interopRequireDefault(__webpack_require__(/*! ./networkAPI.js */ "./src/Common/api/networkAPI.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var sethost = _util.default.hostData.setHost; //配置环境（true：pro环境；false：sit环境）

var type = _util.default.hostData.type; //支持的设备

var host = "";
var url = '';
var appkeyForvivo = '';
var appkeyForoppo = '';
/**
 * 环境配置
 */

if (sethost) {
  host = "https://ov-prod.smartmidea.net";
  url = "wss://ovws-sit.smartmidea.net";
  appkeyForvivo = "00498c1bb52ad5d4d81eca53dae47fd1";
  appkeyForoppo = "ddb2668091508e243cc3b9570d094164";
} else {
  host = "http://ov-sit.smartmidea.net";
  url = "ws://ovws-sit.smartmidea.net";
  appkeyForvivo = "c2db6cbc7609febb7c54f0df5234506c";
  appkeyForoppo = "b37142d426c90ddc1b28d1182f363384";
}

var appidForvivo = 2150;
var appidForoppo = 2149;

// import main from "./main.js";
var Fly = __webpack_require__(/*! flyio/dist/npm/hap */ "./node_modules/_flyio@0.6.14@flyio/dist/npm/hap.js");

var fly = new Fly(_system.default);
var appid = '';
var appkey = '';
var clientId = "";
var clientSecret = "";

_system2.default.getInfo({
  success: function success(ret) {
    if (ret.brand === 'vivo') {
      appid = appidForvivo;
      appkey = appkeyForvivo;

      if (sethost) {
        clientId = "5ae235bbf44ae157689e539437a8b4f1";
        clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
      } else {
        clientId = "5ae235bbf44ae157689e539437a8b4f1";
        clientSecret = "916925b48506ce2f17a4b5f80a6d20ec";
      }
    } else {
      appid = appidForoppo;
      appkey = appkeyForoppo;

      if (sethost) {
        clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
        clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
      } else {
        clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
        clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
      } // setGet(appid,appkey)

    }
  }
});

var _default = {
  //api接口
  hostData: {
    pro: sethost ? '' : 'sit',
    type: type,
    language: '',
    getUserToken: '/v1/iotopen/user/token/get',
    postDeviceControl: '/v1/iotopen/device/deviceControl',
    postDeviceBind: '/v1/iotopen/device/bind',
    postDeviceStatusQuery: '/v1/iotopen/device/statusQuery',
    getcodeUrl: '/v1/open/sn/decode',
    getConfigWorkHelp: "http://smartbbs.midea.com/msmart.php?mod=zhiyin&op=ovsearch",
    getcenterHelp: 'https://api-prod.smartmidea.net/v1/open/connect/guide/list' // getcenterHelp:'https://api-dev.smartmidea.net:8443/v1/open/connect/guide/list'

  },
  //获取语言
  getlanguage: function getlanguage() {
    var p = new Promise(function (resolve, reject) {
      _system2.default.getInfo({
        success: function success(ret) {
          if (ret.language) {
            resolve(ret.language);
          }
        }
      });
    });
    return p;
  },
  //快连规则
  getUrlSSid: function getUrlSSid(url) {
    var mmid = "&mode=1";
    var mmid1 = '&mode=001';
    var qrCode = '';

    if (url.toLowerCase().indexOf(mmid) != -1 || url.toLowerCase().indexOf(mmid1) != -1) {
      var len = 0;

      if (url.toLowerCase().indexOf(mmid) != -1) {
        len = url.toLowerCase().indexOf(mmid);
      } else {
        len = url.toLowerCase().indexOf(mmid1);
      }

      qrCode = url.substring(0, len);

      if (qrCode.length === 22 || qrCode.length === 64 || qrCode.length === 65 || qrCode.length === 70 || qrCode.length === 69) {
        return "midea_ac_" + qrCode.substring(qrCode.length - 4, qrCode.length);
      } else if (qrCode.length === 106 || qrCode.length === 109) {
        return qrCode.substring(qrCode.length - 13, qrCode.length);
      } else if (qrCode.length === 61) {
        return ("midea_" + qrCode.substring(48, 50) + "_xxxx").toLowerCase();
      } else {
        return '';
      }
    }
  },
  //获取url参数
  getUrlCan: function getUrlCan(url, key) {
    var arrObj = url.split("?");

    if (arrObj.length > 1) {
      var arrPara = arrObj[1].split("&");
      var arr;

      for (var i = 0; i < arrPara.length; i++) {
        arr = arrPara[i].split("=");

        if (arr != null && arr[0] == key) {
          return arr[1];
        }
      }

      return false;
    } else {
      return false;
    }
  },
  //匹配设备品类
  getDeviceInformation: function getDeviceInformation(str) {
    var that = this;
    var deviceSSID = "";
    var url_str = str.indexOf('kt_APP');
    var mideaUrl = str.indexOf('midea_');

    if (str.indexOf('kt_APP') > -1) {
      deviceSSID = '0xAC';
      return deviceSSID;
    } else if (str.indexOf('midea_') > -1) {
      deviceSSID = '0x' + str.substring(str.indexOf('midea_') + 6, str.indexOf('midea_') + 8);
      return deviceSSID;
    } else if (that.getUrlCan(str, 'type')) {
      deviceSSID = '0x' + that.getUrlCan(str, 'type').substring(4, 6);
      return deviceSSID;
    } else if (that.getUrlCan(str, 'SSID')) {
      deviceSSID = '0x' + that.getUrlCan(str, 'SSID').substring(6, 8);
      return deviceSSID;
    } else {
      return false;
    }
  },
  //生成UUID字符串
  createUUID: function createUUID() {
    var len = _uuid.default.create().toString().length;

    var s = _uuid.default.create().toString();

    var str = s.substring(0, 8) + s.substring(9, 13) + s.substring(14, 18) + s.substring(19, 23) + s.substring(24, len);
    return str;
  },
  //获取时间戳
  getTimestamp: function getTimestamp() {
    // let timestamp = (new Date()).getTime();
    var timestamp = new Date().valueOf();
    var num = new Number(timestamp);
    return num.toString();
  },
  //获取消息签名
  getSignature: function getSignature(str1, str2, str3) {
    var that = this;
    var str = 'appid=' + appid + "&nonce=" + str2 + "&timestamp=" + str3;
    return _jsSha.default.sha256(str + str1 + appkey);
  },
  //获取设备绑定消息签名
  getSignatureDeviceBind: function getSignatureDeviceBind(str1, str2, str3, str4) {
    var that = this;
    var str = "accesstoken=" + str2 + '&appid=' + appid + "&nonce=" + str3 + "&timestamp=" + str4;
    return _jsSha.default.sha256(str + str1 + appkey);
  },
  //弹出框
  showDialog: function showDialog(str) {
    _system3.default.showToast({
      message: "请求失败：" + JSON.stringify(str),
      duration: 1
    });
  },
  //第三方平台用户获取访问令牌accessToken
  getUserToken: function getUserToken(params) {
    var that = this;
    var objStr = '';
    params.type = 1;

    if (_typeof(params) === 'object') {
      objStr = JSON.stringify(params);
    }

    var strObj = {
      "appId": appid,
      "timestamp": that.getTimestamp(),
      "nonce": that.createUUID(),
      // "skipOvCheck":'false',
      "Content-Type": 'application/json'
    };
    console.log("拿第三方token");
    strObj.signature = that.getSignature(objStr, strObj.nonce, strObj.timestamp);
    var p = new Promise(function (resolve, reject) {
      if (_typeof(params) === 'object') {
        console.log("params:" + JSON.stringify(params));
        console.log("strObj:" + JSON.stringify(strObj));
        console.log("url:" + host + that.hostData.getUserToken);
        fly.post(host + that.hostData.getUserToken, params, {
          headers: strObj
        }).then(function (response) {
          response.code = response.status;
          console.log("返回信息：" + JSON.stringify(response));
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      } else {
        var obj = {
          errorCode: "0000",
          msg: "参数有误"
        };
        reject(obj);
      }
    });
    return p;
  },
  //绑定设备
  postDeviceBind: function postDeviceBind(params, accessToken) {
    var that = this;
    var objStr = '';

    if (_typeof(params) === 'object') {
      objStr = JSON.stringify(params);
    }

    var strObj = {
      "appId": appid,
      "timestamp": that.getTimestamp(),
      "nonce": that.createUUID(),
      'accessToken': accessToken,
      // "skipOvCheck":'false',
      "Content-Type": 'application/json'
    };
    strObj.signature = that.getSignatureDeviceBind(objStr, strObj.accessToken, strObj.nonce, strObj.timestamp);
    var p = new Promise(function (resolve, reject) {
      if (_typeof(params) === 'object') {
        console.log("params:" + JSON.stringify(params));
        console.log("strObj:" + JSON.stringify(strObj));
        console.log("url:" + host + that.hostData.postDeviceBind);
        fly.post(host + that.hostData.postDeviceBind, params, {
          headers: strObj
        }).then(function (response) {
          response.code = response.status;
          resolve(response);
          console.log("返回信息：" + JSON.stringify(response));
        }).catch(function (error) {
          reject(error);
        });
      } else {
        var obj = {
          errorCode: "0000",
          msg: "参数有误"
        };
        reject(obj);
      }
    });
    return p;
  },
  //设备控制接口
  postDeviceControl: function postDeviceControl(params, accessToken, lanonline, deviceid) {
    var that = this;
    var objStr = '';

    if (_typeof(params) === 'object') {
      objStr = JSON.stringify(params);
    }

    console.log("请求开始时间戳：" + that.getTimestamp());
    var strObj = {
      "appId": appid,
      "timestamp": that.getTimestamp(),
      "nonce": that.createUUID(),
      'accessToken': accessToken,
      // "skipOvCheck":'false',
      "Content-Type": 'application/json'
    };
    strObj.signature = that.getSignatureDeviceBind(objStr, strObj.accessToken, strObj.nonce, strObj.timestamp);

    if (lanonline == 'true') {
      return _networkAPI.default.setDeviceStatus(deviceid, params.devices[0].properties);
    } else {
      var p = new Promise(function (resolve, reject) {
        if (_typeof(params) === 'object') {
          console.log("params:" + JSON.stringify(params));
          console.log("strObj:" + JSON.stringify(strObj));
          console.log("url:" + host + that.hostData.postDeviceControl);
          fly.post(host + that.hostData.postDeviceControl, params, {
            headers: strObj
          }).then(function (response) {
            response.code = response.status;
            response.lanonline = lanonline;

            if (response.data.code && response.data.code.toString() == '3158') {
              console.log("第三步授权");

              _service.default.authorize({
                type: 'code',
                success: function success(data) {
                  console.log("第三步" + JSON.stringify(data));
                  var tokenparams = {
                    thirdUId: data.code,
                    type: 1
                  };
                  var tokenobjStr = JSON.stringify(tokenparams);
                  var tokenstrObj = {
                    "appId": appid,
                    "timestamp": that.getTimestamp(),
                    "nonce": that.createUUID(),
                    "Content-Type": 'application/json'
                  };
                  tokenstrObj.signature = that.getSignature(tokenobjStr, tokenstrObj.nonce, tokenstrObj.timestamp);
                  fly.post(host + that.hostData.getUserToken, tokenparams, {
                    headers: tokenstrObj
                  }).then(function (res) {
                    console.log("重新刷新token：" + JSON.stringify(res));
                    var data_accesstoken = res;

                    if (data_accesstoken.status && data_accesstoken.status === 200) {
                      var result_data = _typeof(data_accesstoken.data) === 'object' ? data_accesstoken.data : JSON.parse(data_accesstoken.data);

                      if (!parseInt(result_data.code)) {
                        var obj = {
                          openid: result_data.openId,
                          accessToken: result_data.accessToken,
                          time: that.gettime()
                        };

                        _system5.default.set({
                          key: 'openidToken',
                          value: JSON.stringify(obj),
                          success: function success(data) {},
                          fail: function fail(data, code) {}
                        });

                        console.log("重新保存的token：" + JSON.stringify(obj));
                        that.postDeviceStatusQuery(params, result_data.accessToken, lanonline, deviceid);
                      } else {
                        reject("获取token失败");
                      }
                    } else {
                      reject("获取token失败");
                    }
                  }).catch(function (error, code) {
                    reject(error);
                    console.log("授权接口：error" + error + ":::code" + code);
                  });
                },
                fail: function fail(data, code) {
                  reject(data);
                  console.log("授权接口：error" + error + ":::code" + code);
                }
              });
            } else {
              resolve(response);
            }

            console.log("返回信息：" + JSON.stringify(response)); // 					if (response.code && response.code === 200) {
            // 						let bind_res_data = typeof response.data == 'object' ? response.data : JSON.parse(response.data);
            // 						if (!parseInt(bind_res_data.devices[0].status) && !parseInt(bind_res_data.code)) {
            // 							let obj = (typeof bind_res_data.devices[0].props) == 'object' ? bind_res_data.devices[0].props : JSON.parse(bind_res_data.devices[0].props);
            // 							if(parseInt(obj.error_code)){
            // 								prompt.showToast({
            // 									message:'数据有误，设备可能存在故障，请检查后再操作'
            // 								})
            // 							}
            // 						}
            // 					}
          }).catch(function (error) {
            var obj = JSON.parse(error);
            obj.online = lanonline;
            reject(obj);
          });
        } else {
          var obj = {
            errorCode: "0000",
            msg: "参数有误",
            online: lanonline
          };
          reject(obj);
        }
      });
      return p;
    }
  },
  //获取后一天的时间戳
  gettime: function gettime() {
    var timestamp = Date.parse(new Date());
    return parseInt(timestamp) + 3600000;
  },

  /**
   * @param {Object} params
   * @param {Object} accessToken
   * @param {Object} lanonline
   * @param {Object} deviceid
   * 重新获取token
   */
  regetToken: function regetToken() {},
  //设备状态查询
  postDeviceStatusQuery: function postDeviceStatusQuery(params, accessToken, lanonline, deviceid) {
    var that = this;

    _util.default.setHeight();

    var objStr = ''; // console.log("")

    if (_typeof(params) === 'object') {
      objStr = JSON.stringify(params);
    }

    var strObj = {
      "appId": appid,
      "timestamp": that.getTimestamp(),
      "nonce": that.createUUID(),
      'accessToken': accessToken,
      // "skipOvCheck":'false',
      "Content-Type": 'application/json'
    };
    strObj.signature = that.getSignatureDeviceBind(objStr, strObj.accessToken, strObj.nonce, strObj.timestamp);

    if (lanonline == 'true') {
      return _networkAPI.default.getqueryDeviceStatus(deviceid);
    } else {
      var p = new Promise(function (resolve, reject) {
        if (_typeof(params) === 'object') {
          console.log("params:" + JSON.stringify(params));
          console.log("strObj:" + JSON.stringify(strObj));
          console.log("url:" + host + that.hostData.postDeviceStatusQuery);
          fly.post(host + that.hostData.postDeviceStatusQuery, params, {
            headers: strObj
          }).then(function (response) {
            response.code = response.status;
            response.lanonline = lanonline;

            if (response.data.code && response.data.code.toString() == '3158') {
              console.log("第三步授权");

              _service.default.authorize({
                type: 'code',
                success: function success(data) {
                  console.log("第三步" + JSON.stringify(data));
                  var tokenparams = {
                    thirdUId: data.code,
                    type: 1
                  };
                  var tokenobjStr = JSON.stringify(tokenparams);
                  var tokenstrObj = {
                    "appId": appid,
                    "timestamp": that.getTimestamp(),
                    "nonce": that.createUUID(),
                    "Content-Type": 'application/json'
                  };
                  tokenstrObj.signature = that.getSignature(tokenobjStr, tokenstrObj.nonce, tokenstrObj.timestamp);
                  fly.post(host + that.hostData.getUserToken, tokenparams, {
                    headers: tokenstrObj
                  }).then(function (res) {
                    console.log("重新刷新token：" + JSON.stringify(res));
                    var data_accesstoken = res;

                    if (data_accesstoken.status && data_accesstoken.status === 200) {
                      var result_data = _typeof(data_accesstoken.data) === 'object' ? data_accesstoken.data : JSON.parse(data_accesstoken.data);

                      if (!parseInt(result_data.code)) {
                        var obj = {
                          openid: result_data.openId,
                          accessToken: result_data.accessToken,
                          time: that.gettime()
                        };

                        _system5.default.set({
                          key: 'openidToken',
                          value: JSON.stringify(obj),
                          success: function success(data) {},
                          fail: function fail(data, code) {}
                        });

                        console.log("重新保存的token：" + JSON.stringify(obj));
                        that.postDeviceStatusQuery(params, result_data.accessToken, lanonline, deviceid);
                      } else {
                        reject("获取token失败");
                      }
                    } else {
                      reject("获取token失败");
                    }
                  }).catch(function (error, code) {
                    reject(error);
                    console.log("授权接口：error" + error + ":::code" + code);
                  });
                },
                fail: function fail(data, code) {
                  reject(data);
                  console.log("授权接口：error" + error + ":::code" + code);
                }
              });
            } else {
              resolve(response);
            }

            console.log("返回信息：" + JSON.stringify(response)); // 					if (response.code && response.code === 200) {
            // 						let data = (typeof response.data) === "object" ? response.data : JSON.parse(response.data);
            // 						if (!parseInt(data.code) && !parseInt(data.devices[0].status)) {
            // 							let obj =  (typeof data.devices[0].properties) === 'object'?data.devices[0].properties:JSON.parse(data.devices[0].properties);
            // 							if(parseInt(obj.error_code)){
            // 								prompt.showToast({
            // 									message:'数据有误，设备可能存在故障，请检查后再操作'
            // 								})
            // 							}
            // 						}
            // 					}
          }).catch(function (error) {
            console.log(JSON.stringify(error));
            var obj = JSON.parse(error);
            obj.online = "false";
            reject(obj);
          });
        } else {
          console.log("asdassdasssssssssssssd==============================");
          var obj = {
            errorCode: "0000",
            msg: "参数有误",
            online: "false"
          };
          reject(obj);
        }
      });
      return p;
    }
  },
  //获取配网指引信息
  getConfigWorkHelp: function getConfigWorkHelp(params) {
    var that = this;
    var p = new Promise(function (resolve, reject) {
      if (_typeof(params) === 'object') {
        _system.default.fetch({
          url: that.hostData.getConfigWorkHelp,
          data: params,
          method: 'GET',
          success: function success(data) {
            console.log("配网指引:" + JSON.stringify(data));
            resolve(data);
          },
          fail: function fail(data, code) {
            reject(data + "code:" + code);
          }
        });
      } else {
        var obj = {
          errorCode: "0000",
          msg: "参数有误"
        };
        reject(obj);
      }
    });
    return p;
  },

  /**
   * 走中台的配网指引
   */
  getCenterWorkHelp: function getCenterWorkHelp(params) {
    var that = this;
    var obj = params;
    obj.reqId = that.createUUID();
    obj.stamp = that.getTimestamp();
    console.log("配网指引请求参数：" + JSON.stringify(obj));
    var strObj = {
      "Content-Type": 'application/json'
    };
    var p = new Promise(function (resolve, reject) {
      _system2.default.getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            if (sethost) {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
            } else {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "916925b48506ce2f17a4b5f80a6d20ec";
            }
          } else {
            if (sethost) {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
            } else {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
            }
          }

          obj.clientId = clientId;
          console.log(JSON.stringify(obj));

          if (_typeof(params) === 'object') {
            fly.post(that.hostData.getcenterHelp, obj, {
              headers: strObj
            }).then(function (data) {
              console.log("配网指引:" + JSON.stringify(data));
              resolve(data);
            }).catch(function (error) {
              console.log(JSON.stringify(error));
              reject(error);
            });
          } else {
            var objdata = {
              errorCode: "0000",
              msg: "参数有误"
            };
            reject(objdata);
          }
        }
      });
    });
    return p;
  },
  //websocket
  // createWebsocket
  createWensocket: function createWensocket(deviceid) {
    var did = deviceid;
    var p = new Promise(function (resolve, reject) {
      _system2.default.getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            appid = appidForvivo;
            appkey = appkeyForvivo;
          } else {
            appid = appidForoppo;
            appkey = appkeyForoppo;
          }

          var len = appkey.length;
          var s = Math.floor(Math.random() * (len - 12)); // 					prompt.showToast({
          // 						message:"url:"+url + '/simplews/status/fetch?appId=' + appid + '&s=' + s + '&l=10&key=' + appkey.substring(s,s+10) + '&did=' + did
          // 					})

          var ws = _system6.default.create({
            url: url + '/simplews/status/fetch?appId=' + appid + '&s=' + s + '&l=10&key=' + appkey.substring(s, s + 10) + '&did=' + did,
            header: {
              'content-type': 'application/json'
            }
          });

          resolve(ws);
        }
      });
    });
    return p;
  },
  //错误码code
  getCode: function getCode(code, msg) {
    _system3.default.showToast({
      message: "aosydigasuigduiasfgudg"
    });

    var str = code.toString();
    var data = '';

    switch (str) {
      case '9999':
        data = '系统错误';
        break;

      case '3001':
        data = '请求的地址不存在';
        break;

      case '3002':
        data = "请求的HTTP METHOD不支持，请检查是否选择了正确的POST/GET方式";
        break;

      case '3003':
        data = "缺少必备参数";
        break;

      case '3004':
        data = "参数值错误";
        break;

      case '3155':
        data = "设备已被解除绑定";
        break;

      case '3156':
        data = "refreshToken不存在";
        break;

      case '3157':
        data = "refreshToken过期";
        break;

      case '3158':
        data = "token过期";
        break;

      case '3159':
        data = "token不存在";
        break;

      case '3138':
        data = "设备控制超时，请重试";
        break;

      default:
        data = msg + ',请稍后重试';
        break;
    }

    return data;
  },
  //错误码status
  getStatus: function getStatus(type, code, msg) {
    var str = code.toString();
    var data = '';

    switch (str) {
      case '-1':
        data = '设备已被解除绑定';
        break;

      case '-2':
        data = '设备无此属性';
        break;

      case '-3':
        data = "此属性是不可操作的";
        break;

      case '-4':
        data = "无效的subscriptionId";
        break;

      case '-5':
        data = "设备当前状态不支持此操作";
        break;
      // 			case '-6':
      // 				data = "设备离线"
      // 			break;

      case '-7':
        data = "设备处于关闭状态";
        break;

      case '-8':
        data = "控制指令不正确";
        break;

      case '-9':
        if (type === 'get') {
          data = "获取设备失败，请稍后重试";
        } else {
          data = "设备操作失败，请稍后重试";
        }

        break;

      case '-100':
        if (type === 'get') {
          data = "获取设备失败，请稍后重试";
        } else {
          data = "设备操作失败，请稍后重试";
        }

        break;

      default:
        data = msg + ',请稍后重试';
        break;
    }

    console.log("失败信息" + data);
    return data;
  }
}; //添加响应拦截器，响应拦截器会在then/catch处理之前执行

exports.default = _default;
fly.interceptors.response.use(function (response) {//只将请求结果的data字段返回
  // return response.data
}, function (err) {
  console.log("请求失败信息：" + JSON.stringify(err));

  _system3.default.showDialog({
    title: '请求失败',
    message: '连接不上服务器，请检查网络后重试！',
    buttons: [{
      text: '确定',
      color: '#33dd44'
    }],
    success: function success(data) {
      _system4.default.clear();

      _system4.default.back();

      console.log('handling callback');
    },
    cancel: function cancel() {
      _system4.default.clear();

      _system4.default.back();

      console.log('handling cancel');
    },
    fail: function fail(data, code) {
      _system4.default.clear();

      _system4.default.back();
    }
  }); // that.showDialog(err);

});
/**
 * 定时刷新token
 */

function setTimeGetToken(appid, appkey) {
  // 生成UUID字符串
  var len = _uuid.default.create().toString().length;

  var s = _uuid.default.create().toString();

  var str = s.substring(0, 8) + s.substring(9, 13) + s.substring(14, 18) + s.substring(19, 23) + s.substring(24, len); // 获取时间戳

  var timestamp = new Date().valueOf();
  var num = new Number(timestamp); // 获取消息签名

  var sign = 'appid=' + appid + "&nonce=" + str + "&timestamp=" + num.toString();

  _service.default.authorize({
    type: 'code',
    success: function success(data) {
      var params = {
        thirdUId: data.code,
        type: 1
      };
      var strObj = {
        "appId": appid,
        "timestamp": num.toString(),
        "nonce": str,
        "Content-Type": 'application/json'
      };
      strObj.signature = _jsSha.default.sha256(sign + JSON.stringify(params) + appkey);
      fly.post(host + '/v1/iotopen/user/token/get', params, {
        headers: strObj
      }).then(function (response) {
        var data_accesstoken = response;

        if (data_accesstoken.status && data_accesstoken.status === 200) {
          var result_data = _typeof(data_accesstoken.data) === "object" ? data_accesstoken.data : JSON.parse(data_accesstoken.data);

          if (!parseInt(result_data.code)) {
            var _timestamp = Date.parse(new Date());

            var obj = {
              openid: result_data.openId,
              accessToken: result_data.accessToken,
              time: parseInt(_timestamp) + 3600000
            };

            _system5.default.set({
              key: 'openidToken',
              value: JSON.stringify(obj),
              success: function success(data) {},
              fail: function fail(data, code) {}
            });
          }
        }

        setGet(appid, appkey);
      }).catch(function (error) {});
    },
    fail: function fail(data, code) {
      console.log("授权接口：data" + data + ":::code" + code);
    }
  });
}
/**
 * 定时器
 */


function setGet(appid, appkey) {
  getStorage().then(function (res) {
    var t = parseInt(res);
    setTimeout(function () {
      setTimeGetToken(appid, appkey);
    }, t);
  }).catch(function (error) {
    setTimeGetToken(appid, appkey);
  });
}
/**
 * 获取保存的信息
 */


function getStorage() {
  var time = Date.parse(new Date());
  var p = new Promise(function (resolve, reject) {
    _system5.default.get({
      key: "openidToken",
      success: function success(data) {
        if (data == '') {
          reject();
        } else {
          var obj = JSON.parse(data);

          if (parseInt(time) > parseInt(obj.time)) {
            var set = parseInt(time) - parseInt(obj.time);
            resolve(set);
          } else {
            reject();
          }
        }
      }
    });
  });
  return p;
}

/***/ }),

/***/ "./src/Common/api/networkAPI.js":
/*!**************************************!*\
  !*** ./src/Common/api/networkAPI.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.iot"));

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.device"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _util = _interopRequireDefault(__webpack_require__(/*! ../../util.js */ "./src/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var sethost = _util.default.hostData.setHost; //配置环境（true：pro环境；false：sit环境）

var clientId = "";
var clientSecret = "";
var _default = {
  $Lanonline: {
    deviceid: '',
    isonLan: "false"
  },
  mes: {
    deviceid: '',
    clientId: 'db3924f6431a4c461667bd164a4ab1fb',
    clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b'
  },
  //获取二维码解析
  lanHelpInit: function lanHelpInit() {
    var that = this;
    var p = new Promise(function (resolve, reject) {
      _system2.default.getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            if (sethost) {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
            } else {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "916925b48506ce2f17a4b5f80a6d20ec"; // 				clientId: 'db3924f6431a4c461667bd164a4ab1fb';
              // 				clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b';
            }
          } else {
            if (sethost) {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
            } else {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
            }
          }

          var params = {
            token: 'Bearer mideaIotOpenAccessToken',
            clientId: clientId,
            clientSecret: clientSecret
          };
          console.log("setAccount参数:" + JSON.stringify(params));

          _service.default.send({
            action: 'sendAccount',
            data: params,
            success: function success(res) {
              console.log("初始化：" + JSON.stringify(res));
              resolve(res);
            },
            fail: function fail(data, code) {
              reject(data);
            }
          });
        }
      });
    });
    return p;
  },
  //局域网控制

  /**
   * 1.初始化
   */
  deviceInit: function deviceInit(token, deviceID) {
    var that = this;
    console.log("初始化开始");
    var p = new Promise(function (resolve, reject) {
      _system2.default.getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            if (sethost) {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
            } else {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "916925b48506ce2f17a4b5f80a6d20ec"; // 				clientId: 'db3924f6431a4c461667bd164a4ab1fb';
              // 				clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b';
            }
          } else {
            if (sethost) {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
            } else {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
            }
          }

          var params = {
            token: token,
            clientId: clientId,
            clientSecret: clientSecret
          };
          console.log("setAccount参数:" + JSON.stringify(params));

          _service.default.send({
            action: 'sendAccount',
            data: params,
            success: function success(res) {
              console.log("初始化：" + JSON.stringify(res));

              _service.default.send({
                action: 'CustomerHandler.addDevice',
                data: deviceID,
                success: function success(res) {
                  that.mes.deviceid = deviceID;
                  var pageA = new BroadcastChannel('channel1');
                  pageA.postMessage(deviceID);
                  that.LanGetData(deviceID);
                  resolve(res);
                },
                fail: function fail(data, code) {
                  reject(data);
                }
              });
            },
            fail: function fail(data, code) {
              reject(data);
            }
          });
        }
      });
    });
    return p;
  },

  /**
   * @param {Object} deviceID
   * 删除设备局域网广播的监控
   */
  removeDevice: function removeDevice(deviceid) {
    console.log(deviceid);

    _service.default.send({
      action: 'CustomerHandler.removeDevice',
      data: deviceid,
      success: function success(res) {
        console.log("成功");
      },
      fail: function fail(data, code) {
        console.log("失败");
      }
    });
  },

  /**
   * 2.添加设备局域网广播监控
   */
  addDevice: function addDevice(deviceID) {
    var that = this;
    var params = {
      deviceId: deviceID
    };

    _service.default.send({
      action: 'CustomerHandler.addDevice',
      data: deviceID,
      success: function success(res) {},
      fail: function fail(data, code) {}
    });
  },

  /**
   * 3.局域网在线
   * 
   */
  deviceLan: function deviceLan(deviceId) {
    var that = this;
    var params = {
      deviceId: deviceId
    };
    var p = new Promise(function (resolve, reject) {
      if (deviceId == '') {
        var obj = {
          errorCode: "0000",
          msg: "参数有误"
        };
        reject(obj);
      } else {
        _service.default.send({
          action: 'CustomerHandler.getLanState',
          data: deviceId,
          success: function success(res) {
            var data = _typeof(res) === 'object' ? res : JSON.parse(res);
            console.log("局域网是否在线：" + JSON.stringify(res));

            if (data.message.toString() == '1') {
              resolve(data);
            } else {
              var _obj = {
                errorCode: "0001",
                msg: data.message ? data.message : "局域网不在线"
              };
              reject(_obj);
            }
          },
          fail: function fail(data, code) {
            var obj = {
              errorCode: "000" + code,
              msg: JSON.stringify(data)
            };
            reject(obj);
          }
        });
      }
    });
    return p;
  },

  /**
   * 监听设备在线状态
   * 
   */
  LanGetData: function LanGetData(deviceId) {
    var that = this;
    var params = {
      deviceId: deviceId // let p = new Promise(function(resolve, reject){

    };

    _service.default.send({
      action: 'CustomerHandler.registerStateListener',
      data: deviceId,
      success: function success(res) {
        console.log("成功了：" + JSON.stringify(res));
        var data = _typeof(res) === 'object' ? res : JSON.parse(res);

        if (data.message.toString() == '1') {
          that.$Lanonline.deviceid = deviceId;
          that.$Lanonline.isonLan = "true";
        } else {
          var obj = {
            errorCode: "0001",
            msg: data.message ? data.message : "局域网不在线"
          };
          that.$Lanonline.deviceid = deviceId;
          that.$Lanonline.isonLan = "false";
        }
      },
      fail: function fail(data, code) {
        that.$Lanonline.deviceid = deviceId;
        that.$Lanonline.isonLan = "false";
        console.log("失败了" + JSON.stringify(data));
      }
    }); // 		})
    // 		return p;

  },

  /**
   * 设备状态查询
   */
  getqueryDeviceStatus: function getqueryDeviceStatus(deviceId) {
    var that = this;
    var params = {
      deviceId: deviceId
    };
    var p = new Promise(function (resolve, reject) {
      _service.default.send({
        action: 'queryDeviceStatus',
        data: {
          deviceInfo: {
            deviceUuid: deviceId
          }
        },
        success: function success(res) {
          console.log("设备信息：" + JSON.stringify(res));
          resolve(res);
        },
        fail: function fail(data, code) {
          console.log("设备信息失败了" + JSON.stringify(data));
          reject(data);
        }
      });
    });
    return p;
  },

  /**
   * 设备控制
   */
  setDeviceStatus: function setDeviceStatus(deviceId, params) {
    var that = this;
    console.log("控制参数:" + JSON.stringify(params));
    var p = new Promise(function (resolve, reject) {
      _service.default.send({
        action: 'updateDeviceStatus',
        data: {
          deviceInfo: {
            deviceUuid: deviceId
          },
          controlData: params
        },
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(data, code) {
          console.log("控制设备失败了" + JSON.stringify(data));
          reject(data);
        }
      });
    });
    return p;
  },

  /**
   * 配网二维码解析
   */
  getInfoByQrCode: function getInfoByQrCode(url) {
    console.log("跑到二维码解析了" + url);
    var that = this;
    var p = new Promise(function (resolve, reject) {
      _system2.default.getInfo({
        success: function success(ret) {
          if (ret.brand === 'vivo') {
            if (sethost) {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "68045971e0f8bd4d7d51ed4989c4412a";
            } else {
              clientId = "5ae235bbf44ae157689e539437a8b4f1";
              clientSecret = "916925b48506ce2f17a4b5f80a6d20ec"; // 				clientId: 'db3924f6431a4c461667bd164a4ab1fb';
              // 				clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b';
            }
          } else {
            if (sethost) {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "9e8eb1c20757450c644fabcd8d5cd9c7";
            } else {
              clientId = "660354a2ee1f1ed1a6a6b96fb22b14ea";
              clientSecret = "5a50ff3716862bf90ac763d61459e0ef";
            }
          }

          var params = {
            token: 'Bearer mideaIotOpenAccessToken',
            clientId: clientId,
            clientSecret: clientSecret
          };
          console.log("二维码解析参数：" + JSON.stringify(params));

          _service.default.send({
            action: 'sendAccount',
            data: params,
            success: function success(res) {
              console.log("二维码解析初始化：" + JSON.stringify(res));

              _service.default.send({
                action: 'CustomerHandler.getDeviceInfoByQrCode',
                data: url,
                success: function success(res) {
                  console.log("解析结果：" + JSON.stringify(res));
                  resolve(res);
                },
                fail: function fail(data, code) {
                  console.log("解析失败了" + JSON.stringify(data));
                  reject(data);
                }
              });
            },
            fail: function fail(data, code) {
              reject(data);
            }
          });
        }
      });
    });
    return p;
  },

  /**
   * 设备扫描
   * 
   */
  startScanDeviceWifi: function startScanDeviceWifi(deviceId) {
    var params = {
      deviceId: deviceId
    };
    console.log("设备扫描");

    _service.default.send({
      action: 'scanDevice',
      data: {
        timeout: 5000
      },
      success: function success(res) {
        console.log("设备扫描：" + JSON.stringify(res));

        _system.default.showToast({
          message: "scanDevice:" + JSON.stringify(res),
          duration: 1
        });
      },
      fail: function fail(data, code) {
        _system.default.showToast({
          message: "fail:" + JSON.stringify(data),
          duration: 1
        });
      }
    });
  },

  /**
   * 配网埋点
   * 
   */
  statisticReport: function statisticReport(params) {
    _service.default.send({
      action: 'statisticReport',
      data: params,
      success: function success(data) {
        console.log('埋点信息：' + JSON.stringify(data));
      },
      fail: function fail(data, code) {
        console.log(JSON.stringify(data));
      }
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./src/Common/api/uuid.js":
/*!********************************!*\
  !*** ./src/Common/api/uuid.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * UUID-js: A js library to generate and parse UUIDs, TimeUUIDs and generate
 * TimeUUID based on dates for range selections.
 * @see http://www.ietf.org/rfc/rfc4122.txt
 **/
function UUIDjs() {}

;

UUIDjs.maxFromBits = function (bits) {
  return Math.pow(2, bits);
};

UUIDjs.limitUI04 = UUIDjs.maxFromBits(4);
UUIDjs.limitUI06 = UUIDjs.maxFromBits(6);
UUIDjs.limitUI08 = UUIDjs.maxFromBits(8);
UUIDjs.limitUI12 = UUIDjs.maxFromBits(12);
UUIDjs.limitUI14 = UUIDjs.maxFromBits(14);
UUIDjs.limitUI16 = UUIDjs.maxFromBits(16);
UUIDjs.limitUI32 = UUIDjs.maxFromBits(32);
UUIDjs.limitUI40 = UUIDjs.maxFromBits(40);
UUIDjs.limitUI48 = UUIDjs.maxFromBits(48); // Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
// @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

UUIDjs.randomUI04 = function () {
  return getRandomInt(0, UUIDjs.limitUI04 - 1);
};

UUIDjs.randomUI06 = function () {
  return getRandomInt(0, UUIDjs.limitUI06 - 1);
};

UUIDjs.randomUI08 = function () {
  return getRandomInt(0, UUIDjs.limitUI08 - 1);
};

UUIDjs.randomUI12 = function () {
  return getRandomInt(0, UUIDjs.limitUI12 - 1);
};

UUIDjs.randomUI14 = function () {
  return getRandomInt(0, UUIDjs.limitUI14 - 1);
};

UUIDjs.randomUI16 = function () {
  return getRandomInt(0, UUIDjs.limitUI16 - 1);
};

UUIDjs.randomUI32 = function () {
  return getRandomInt(0, UUIDjs.limitUI32 - 1);
};

UUIDjs.randomUI40 = function () {
  return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 40 - 30)) * (1 << 30);
};

UUIDjs.randomUI48 = function () {
  return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 48 - 30)) * (1 << 30);
};

UUIDjs.paddedString = function (string, length, z) {
  string = String(string);
  z = !z ? '0' : z;
  var i = length - string.length;

  for (; i > 0; i >>>= 1, z += z) {
    if (i & 1) {
      string = z + string;
    }
  }

  return string;
};

UUIDjs.prototype.fromParts = function (timeLow, timeMid, timeHiAndVersion, clockSeqHiAndReserved, clockSeqLow, node) {
  this.version = timeHiAndVersion >> 12 & 0xF;
  this.hex = UUIDjs.paddedString(timeLow.toString(16), 8) + '-' + UUIDjs.paddedString(timeMid.toString(16), 4) + '-' + UUIDjs.paddedString(timeHiAndVersion.toString(16), 4) + '-' + UUIDjs.paddedString(clockSeqHiAndReserved.toString(16), 2) + UUIDjs.paddedString(clockSeqLow.toString(16), 2) + '-' + UUIDjs.paddedString(node.toString(16), 12);
  return this;
};

UUIDjs.prototype.toString = function () {
  return this.hex;
};

UUIDjs.prototype.toURN = function () {
  return 'urn:uuid:' + this.hex;
};

UUIDjs.prototype.toBytes = function () {
  var parts = this.hex.split('-');
  var ints = [];
  var intPos = 0;

  for (var i = 0; i < parts.length; i++) {
    for (var j = 0; j < parts[i].length; j += 2) {
      ints[intPos++] = parseInt(parts[i].substr(j, 2), 16);
    }
  }

  return ints;
};

UUIDjs.prototype.equals = function (uuid) {
  if (!(uuid instanceof UUID)) {
    return false;
  }

  if (this.hex !== uuid.hex) {
    return false;
  }

  return true;
};

UUIDjs.getTimeFieldValues = function (time) {
  var ts = time - Date.UTC(1582, 9, 15);
  var hm = ts / 0x100000000 * 10000 & 0xFFFFFFF;
  return {
    low: (ts & 0xFFFFFFF) * 10000 % 0x100000000,
    mid: hm & 0xFFFF,
    hi: hm >>> 16,
    timestamp: ts
  };
};

UUIDjs._create4 = function () {
  return new UUIDjs().fromParts(UUIDjs.randomUI32(), UUIDjs.randomUI16(), 0x4000 | UUIDjs.randomUI12(), 0x80 | UUIDjs.randomUI06(), UUIDjs.randomUI08(), UUIDjs.randomUI48());
};

UUIDjs._create1 = function () {
  var now = new Date().getTime();
  var sequence = UUIDjs.randomUI14();
  var node = (UUIDjs.randomUI08() | 1) * 0x10000000000 + UUIDjs.randomUI40();
  var tick = UUIDjs.randomUI04();
  var timestamp = 0;
  var timestampRatio = 1 / 4;

  if (now != timestamp) {
    if (now < timestamp) {
      sequence++;
    }

    timestamp = now;
    tick = UUIDjs.randomUI04();
  } else if (Math.random() < timestampRatio && tick < 9984) {
    tick += 1 + UUIDjs.randomUI04();
  } else {
    sequence++;
  }

  var tf = UUIDjs.getTimeFieldValues(timestamp);
  var tl = tf.low + tick;
  var thav = tf.hi & 0xFFF | 0x1000;
  sequence &= 0x3FFF;
  var cshar = sequence >>> 8 | 0x80;
  var csl = sequence & 0xFF;
  return new UUIDjs().fromParts(tl, tf.mid, thav, cshar, csl, node);
};

UUIDjs.create = function (version) {
  version = version || 4;
  return this['_create' + version]();
};

UUIDjs.fromTime = function (time, last) {
  last = !last ? false : last;
  var tf = UUIDjs.getTimeFieldValues(time);
  var tl = tf.low;
  var thav = tf.hi & 0xFFF | 0x1000; // set version '0001'

  if (last === false) {
    return new UUIDjs().fromParts(tl, tf.mid, thav, 0, 0, 0);
  } else {
    return new UUIDjs().fromParts(tl, tf.mid, thav, 0x80 | UUIDjs.limitUI06, UUIDjs.limitUI08 - 1, UUIDjs.limitUI48 - 1);
  }
};

UUIDjs.firstFromTime = function (time) {
  return UUIDjs.fromTime(time, false);
};

UUIDjs.lastFromTime = function (time) {
  return UUIDjs.fromTime(time, true);
};

UUIDjs.fromURN = function (strId) {
  var r,
      p = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i;

  if (r = p.exec(strId)) {
    return new UUIDjs().fromParts(parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16), parseInt(r[4], 16), parseInt(r[5], 16), parseInt(r[6], 16));
  }

  return null;
};

UUIDjs.fromBytes = function (ints) {
  if (ints.length < 5) {
    return null;
  }

  var str = '';
  var pos = 0;
  var parts = [4, 2, 2, 2, 6];

  for (var i = 0; i < parts.length; i++) {
    for (var j = 0; j < parts[i]; j++) {
      var octet = ints[pos++].toString(16);

      if (octet.length == 1) {
        octet = '0' + octet;
      }

      str += octet;
    }

    if (parts[i] !== 6) {
      str += '-';
    }
  }

  return UUIDjs.fromURN(str);
};

UUIDjs.fromBinary = function (binary) {
  var ints = [];

  for (var i = 0; i < binary.length; i++) {
    ints[i] = binary.charCodeAt(i);

    if (ints[i] > 255 || ints[i] < 0) {
      throw new Error('Unexpected byte in binary data.');
    }
  }

  return UUIDjs.fromBytes(ints);
}; // Aliases to support legacy code. Do not use these when writing new code as
// they may be removed in future versions!


UUIDjs['new'] = function () {
  return this.create(4);
};

UUIDjs.newTS = function () {
  return this.create(1);
}; // export default UUIDjs;


module.exports = UUIDjs;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 快应用环境配置
 */
var _default = {
  hostData: {
    setHost: true,
    //配置环境（true：pro环境；false：sit环境）
    type: ["ac", "00", "ab", "ca", "b0", "db", "e2", "ea", "fa", "fc", "fd", "e1", "e3", "b8", "b6", "f1"] //支持的设备

  },
  setHeight: function setHeight() {// let that = this;
    // console.log("app参数："+JSON.stringify(that.$app))
  }
};
exports.default = _default;

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map