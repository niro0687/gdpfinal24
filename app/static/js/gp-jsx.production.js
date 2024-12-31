"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var reload_me = document.querySelector('#reload-me');
var homeDOM = document.querySelector("#home");
var inboxDOM = document.querySelector("#inbox");
var mytasksDOM = document.querySelector("#my-tasks");
var myWorkspaceDOM = document.querySelector("#my-workspace");
var addNewProjectDOM = document.querySelector("#add-new-project-box .container-add-project");
var sectionGlobalTaskDOM = document.querySelector("#add-new-global-task #section-global-task");
var searchDOM = document.querySelector(".search-bar");
var profileDOM = document.querySelector("#profile");
var projectListDOM = document.querySelector("#place-here-all-project");
var projectVisualisationDOM = document.querySelector("#project-visualisation");
var profilepicDOM = document.querySelector(".user-option-box #my-pic");
var profileOnHeaderDOM = document.querySelector(".user-option #profile-on-header");
var mynoteDOM = document.querySelector("#my-note");
var allTaskOtpionDOM = document.querySelector("#all-task-option");
var allTaskVisualDOM = document.querySelector("#all-task-visual");
var taskManagerDOM = document.querySelector("#my-space");
var myFinanceDOM = document.querySelector("#my-finance .main-finance");
var notificationDOM = document.querySelector(".notif-box .all-notif-list");
var settingDOM = document.querySelector("#settings-box .its-container .profils");
var inviteToJoinDOM = document.querySelector("#invite-to-join-pro");
var invoicePaperDOM = document.querySelector('.invoice-paper');
var rapportDOM = document.querySelector("#reporting");
var objectifDOM = document.querySelector("#goal");
var portfolioDOM = document.querySelector("#portfolio");
var mainPageLoadDOM = document.querySelector("#main-page-load");
var changePasswordFormDOM = document.querySelector('.change-password-box');
var changePasswordForm = ReactDOM.createRoot(changePasswordFormDOM);
var home = ReactDOM.createRoot(homeDOM);
var inbox = ReactDOM.createRoot(inboxDOM);
var mytasks = ReactDOM.createRoot(mytasksDOM);
var addproject = ReactDOM.createRoot(addNewProjectDOM);
var sectionGlobalTask = ReactDOM.createRoot(sectionGlobalTaskDOM);
var search = ReactDOM.createRoot(searchDOM);
var profile = ReactDOM.createRoot(profileDOM);
var myWorkspace = ReactDOM.createRoot(myWorkspaceDOM);
var projectList = ReactDOM.createRoot(projectListDOM);
var profilepic = ReactDOM.createRoot(profilepicDOM);
var profileOnHeader = ReactDOM.createRoot(profileOnHeaderDOM);
var mynote = ReactDOM.createRoot(mynoteDOM);
var taskManager = ReactDOM.createRoot(taskManagerDOM);
var myFinance = ReactDOM.createRoot(myFinanceDOM);
var notification = ReactDOM.createRoot(notificationDOM);
var setting = ReactDOM.createRoot(settingDOM);
var inviteToJoin = ReactDOM.createRoot(inviteToJoinDOM);
var invoicePaper = ReactDOM.createRoot(invoicePaperDOM);
var rapport = ReactDOM.createRoot(rapportDOM);
var objectif = ReactDOM.createRoot(objectifDOM);
var portfolio = ReactDOM.createRoot(portfolioDOM);
var mainPageLoad = ReactDOM.createRoot(mainPageLoadDOM);
mainPageLoad.render(/*#__PURE__*/React.createElement(XLoading, {
  w: 100,
  color: 'white'
}));
var COLOR = ["#0095FF", "#FF8600", "#00FF78", "#70C6FF", "#CF0069", "#7700FF", "#617CFF", "#FF3000", "#2B848C", "#E3DB00", "#FF0074"];
var preparation = document.querySelector("#preparation");
var createNoteBoxDOM = document.querySelector("#create-new-note-box");
var editNoteBoxDOM = document.querySelector("#edit-note-box");
var detailedFileDOM = document.querySelector("#detailed-file");
var ALL_CREATE_NOTE_BOX = [];
var ALL_CREATE_NOTE_BOX_ID = [];
var ALL_EDIT_NOTE_BOX = [];
var ALL_EDIT_NOTE_BOX_ID = [];
var NOTE_FAKE_ID = 1;
var ALL_FILE_OPENED_ID = [];
var ALL_FILE_OPENED = [];
var fileMessageDOM = document.querySelector('.visual-file-message');
var containerFileMessageDOM = fileMessageDOM.querySelector('.container-visual-message-file');
var closeMessageFileDOM = fileMessageDOM.querySelector('.close-file-message-visual');
var containerFileMessage = ReactDOM.createRoot(containerFileMessageDOM);
$(closeMessageFileDOM).on('click', function (e) {
  fileMessageDOM.style.display = 'none';
});
var InvoiceData = /*#__PURE__*/function () {
  function InvoiceData() {
    _classCallCheck(this, InvoiceData);
    this.file = null;
  }
  return _createClass(InvoiceData, [{
    key: "setFile",
    value: function setFile(file) {
      this.file = file;
    }
  }]);
}();
var INVOICE_DATA = new InvoiceData();
function VisualFileMessage(_ref) {
  var data = _ref.data;
  var content = React.useMemo(function () {
    if (data.image) {
      return /*#__PURE__*/React.createElement("img", {
        src: data.image
      });
    } else if (data.video) {
      return /*#__PURE__*/React.createElement("video", {
        src: data.video,
        controls: true
      });
    }
  });
  return content;
}
function ChangePasswordForm(_ref2) {
  _objectDestructuringEmpty(_ref2);
  var _React$useState = React.useState({
      old_pass: '',
      new_pass: '',
      confirm_pass: '',
      wrong_pass: false
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    values = _React$useState2[0],
    setValues = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    load = _React$useState4[0],
    setLoad = _React$useState4[1];
  var handleChangeOldPassword = function handleChangeOldPassword(val) {
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        old_pass: val,
        wrong_pass: false
      });
    });
  };
  var handleChangeNewPassword = function handleChangeNewPassword(val) {
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        new_pass: val
      });
    });
  };
  var handleChangeConfirmPassword = function handleChangeConfirmPassword(val) {
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        confirm_pass: val
      });
    });
  };
  var disabled = React.useMemo(function () {
    if (values.old_pass.length > 7 && values.new_pass.length > 7 && values.confirm_pass.length > 7) {
      if (values.new_pass == values.confirm_pass) {
        return false;
      }
      return true;
    }
    return true;
  }, [values]);
  var requestChange = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url, send, form, req;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            url = '/change_password/';
            send = {
              old_pass: values.old_pass,
              new_pass: values.new_pass,
              confirm_pass: values.confirm_pass,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form = __.getFormData(send);
            _context.next = 5;
            return __.layoutRequest.post(url, form, 'json');
          case 5:
            req = _context.sent;
            if (req.isSuccess) {
              if (req.data.wrong_password) {
                setValues(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    wrong_pass: true
                  });
                });
                setLoad(false);
              } else {
                reload_me.click();
              }
            } else {
              setLoad(false);
              __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
            }
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestChange() {
      return _ref3.apply(this, arguments);
    };
  }();
  var change = function change() {
    setLoad(true);
    requestChange();
  };
  var cancel = function cancel() {
    closeChangePasswordBox();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container-change-pass x-shadow"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "xtealce"
  }, "Changer le mots de passe"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xtealce xmato10 xmabo40"
  }, "Vous pouvez changer votre mots de passe \xE0 tout moment"), /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '90%',
      marginTop: '10px'
    },
    value: values.old_pass,
    onChange: handleChangeOldPassword,
    icon: "fa fa-lock",
    center: true,
    type: "password"
  }, "Ancien mots de passe"), values.wrong_pass ? /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo x-text-danger xmato10 xmale20"
  }, "Mots de passe incorrect") : null, /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '90%',
      marginTop: '10px'
    },
    value: values.new_pass,
    onChange: handleChangeNewPassword,
    icon: "fa fa-lock",
    center: true,
    type: "password"
  }, "Nouveau mots de passe"), /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '90%',
      marginTop: '10px'
    },
    value: values.confirm_pass,
    icon: "fa fa-lock",
    onChange: handleChangeConfirmPassword,
    center: true,
    type: "password"
  }, "Confirmer le mots de passe"), /*#__PURE__*/React.createElement("div", {
    className: "xdigr xmato30 change-pass-confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-pointer",
    onClick: cancel
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-low-emphasis xfowebo"
  }, "Annuler le changement")), /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: {
      width: '150px'
    },
    load: load,
    disabled: disabled,
    onClickFunc: change,
    br: 30
  }, "Valider")));
}
function PortefeuilleForm(_ref4) {
  var projetsExistants = _ref4.projetsExistants,
    user = _ref4.user;
  var _React$useState5 = React.useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    selectedProjects = _React$useState6[0],
    setSelectedProjects = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    load = _React$useState8[0],
    setLoad = _React$useState8[1];
  var _React$useState9 = React.useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    portefeuilles = _React$useState10[0],
    setPortefeuilles = _React$useState10[1];
  var socket = null;
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/portfolio/' + user.id + '/');
    socket.onopen = function (e) {};
    socket.onclose = function (e) {};
    socket.onmessage = function (e) {
      var response = JSON.parse(e.data);
      if (Array.isArray(response)) {
        setPortefeuilles(response);
      } else {
        setPortefeuilles(function (prev) {
          return [].concat(_toConsumableArray(prev), [response]);
        });
      }
    };
    return function () {
      return socket.close();
    };
  }, []);
  var handleProjectClick = function handleProjectClick(pro) {
    if (selectedProjects.some(function (u) {
      return u.id === pro.id;
    })) {
      setSelectedProjects(selectedProjects.filter(function (u) {
        return u.id !== pro.id;
      }));
    } else {
      setSelectedProjects([].concat(_toConsumableArray(selectedProjects), [pro]));
    }
  };
  var _React$useState11 = React.useState(''),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    nom = _React$useState12[0],
    setNom = _React$useState12[1];
  var _React$useState13 = React.useState(''),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    description = _React$useState14[0],
    setDescription = _React$useState14[1];
  var request = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var url, form_data, to_send, req;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            url = '/create_new_portfolio/';
            form_data = new FormData();
            to_send = {
              title: nom,
              description: description,
              csrfmiddlewaretoken: PAGE_TOKEN,
              projects_ids: Array(selectedProjects.map(function (u) {
                return u.id;
              }))
            };
            Object.entries(to_send).forEach(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                key = _ref7[0],
                val = _ref7[1];
              form_data.append(key, val);
            });
            _context2.next = 6;
            return __.layoutRequest.post(url, form_data, 'json');
          case 6:
            req = _context2.sent;
            if (req.isSuccess) {
              setDescription('');
              setNom('');
              setLoad(false);
              setSelectedProjects([]);
              setPortefeuilles(function (prev) {
                return [].concat(_toConsumableArray(prev), [req.data]);
              });
            } else {
              __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayer plus tard.', 'danger');
              setLoad(false);
            }
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function request() {
      return _ref5.apply(this, arguments);
    };
  }();
  var disabled = React.useMemo(function () {
    if (selectedProjects.length > 0 && nom.trim().length != 0 && description.trim().length != 0) {
      return false;
    }
    return true;
  }, [selectedProjects, nom, description]);
  var create = function create() {
    setLoad(true);
    request();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "por-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "por-title xmato20 xmabo20 xtealce"
  }, "Portefeuille"), /*#__PURE__*/React.createElement("div", {
    className: "por-container-block xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "por-form"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmale20 xmabo5"
  }, "Nouvel portefeuille"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi12 xmale20 xfowebo xmabo20"
  }, "Cr\xE9er une nouvelle portefeuille"), /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '90%'
    },
    value: nom,
    onChange: function onChange(val) {
      return setNom(val);
    },
    center: true
  }, "Nom du portefeuille"), /*#__PURE__*/React.createElement(XTextarea, {
    style: {
      width: '90%'
    },
    className: 'xmato15 xmabo15',
    value: description,
    onChange: function onChange(val) {
      return setDescription(val);
    },
    center: true
  }, "Description"), /*#__PURE__*/React.createElement("p", {
    className: "project-asc xmale20 xmabo10 xfosi15 xfowebo"
  }, "Project associ\xE9s:"), projetsExistants.map(function (pro) {
    return /*#__PURE__*/React.createElement("div", {
      className: "xdifl xwi86per xalitce xmale20 xpato10 xpabo10 xpale10 xmato5 x-pointer",
      key: pro.id,
      onClick: function onClick() {
        return handleProjectClick(pro);
      },
      style: {
        borderRadius: "10px",
        marginRight: "20px",
        backgroundColor: selectedProjects.some(function (u) {
          return u.id === pro.id;
        }) ? '#3E93FF' : 'white'
      }
    }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
      name: pro.name,
      fontSize: 12,
      imageURL: pro.photo,
      width: 40
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo xmale10"
    }, pro.name), /*#__PURE__*/React.createElement("p", {
      className: "x-low-emphasis xmale10 xfosi9 xmato3"
    }, "Cr\xE9e par ", pro.admin.lastName, " ", pro.admin.firstName)));
  }), /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: {
      width: '90%',
      marginTop: '15px'
    },
    onClickFunc: create,
    load: load,
    disabled: disabled,
    center: true
  }, "Cr\xE9er")), /*#__PURE__*/React.createElement("div", {
    className: "all-port-exists"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xtealce xfowebo"
  }, "Portefeuilles existants"), portefeuilles.map(function (port) {
    return /*#__PURE__*/React.createElement("div", {
      className: "each-portfolio xpa20 xbora10 x-shadow xwi88per x-center xmato20",
      key: port.id
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi20 xfowebo"
    }, port.title), /*#__PURE__*/React.createElement("p", {
      className: "x-low-emphasis xmato10 xfosi13"
    }, port.description), /*#__PURE__*/React.createElement("p", {
      className: "xfosi17 xfowebo xmato20"
    }, "Projet associ\xE9s"), /*#__PURE__*/React.createElement("div", {
      className: "port-table-title xdigr xalitce xmato10"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Nom du projet")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Administrateur")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Status")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Progression"))), port.projects.map(function (pro) {
      return /*#__PURE__*/React.createElement("div", {
        className: "each-project-asc xmato15 xdigr xalitce",
        key: pro.id
      }, /*#__PURE__*/React.createElement("div", {
        className: "pro-profile xdifl xalitce"
      }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
        name: pro.name,
        imageURL: pro.photo,
        fontSize: 13,
        width: 45
      }), /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xfowebo xmale10"
      }, pro.name)), /*#__PURE__*/React.createElement("div", {
        className: "pro-profile xdifl xalitce"
      }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
        name: pro.admin.lastName,
        imageURL: pro.admin.photo,
        fontSize: 13,
        width: 40
      }), /*#__PURE__*/React.createElement("p", {
        className: "xfosi11 xfowebo xmale10"
      }, pro.admin.lastName, " ", pro.admin.firstName)), /*#__PURE__*/React.createElement("div", {
        className: pro.status == 'En cours' ? "pro-status xdifl pro-en-cours" : "pro-status xdifl pro-termine"
      }, /*#__PURE__*/React.createElement("p", {
        className: "xfosi11 xfowebo"
      }, pro.status)), /*#__PURE__*/React.createElement("div", {
        className: "pro-pro"
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: pro.progression + '%'
        }
      })));
    }), /*#__PURE__*/React.createElement("p", {
      className: "x-low-emphasis xmato10 xfosi11"
    }, "Portefeuille cr\xE9e le: ", getFormatDateTime(port.datetime)));
  }))));
}
;
function Objectif(_ref8) {
  var data = _ref8.data,
    user = _ref8.user;
  var _React$useState15 = React.useState(''),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    title = _React$useState16[0],
    setTitle = _React$useState16[1];
  var _React$useState17 = React.useState(''),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    des = _React$useState18[0],
    setDes = _React$useState18[1];
  var _React$useState19 = React.useState(''),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    date = _React$useState20[0],
    setDate = _React$useState20[1];
  var _React$useState21 = React.useState([]),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    objs = _React$useState22[0],
    setObjs = _React$useState22[1];
  var socket = null;
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/obj/' + user.id + '/');
    socket.onopen = function (e) {};
    socket.onclose = function (e) {};
    socket.onmessage = function (e) {
      var response = JSON.parse(e.data);
      if (Array.isArray(response)) {
        setObjs(response);
      } else {
        setObjs(function (prev) {
          if (response.action == 'add') {
            return [].concat(_toConsumableArray(prev), [response]);
          } else if (response.action == 'vote_updated') {
            var new_data = _toConsumableArray(prev);
            new_data.forEach(function (ob) {
              if (ob.id == response.id) {
                ob.easy_progression = response.easy_progression;
                ob.easy_total = response.easy_total;
                ob.difficult_progression = response.difficult_progression;
                ob.difficult_total = response.difficult_total;
                ob.impossible_progression = response.impossible_progression;
                ob.impossible_total = response.impossible_total;
                ob.not_vote_progression = response.not_vote_progression;
                ob.not_vote_total = response.not_vote_total;
              }
            });
            return new_data;
          }
        });
      }
    };
    return function () {
      return socket.close();
    };
  }, []);
  var projects = React.useMemo(function () {
    return data.filter(function (p) {
      return p.admin.id == user.id;
    });
  }, []);
  var _React$useState23 = React.useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    load = _React$useState24[0],
    setLoad = _React$useState24[1];
  var _React$useState25 = React.useState(projects.length == 0 ? 'null' : projects[0].id),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    projectSelected = _React$useState26[0],
    setProjectSelected = _React$useState26[1];
  var handleTitleChanged = function handleTitleChanged(val) {
    setTitle(val);
  };
  var handleDesChanged = function handleDesChanged(val) {
    setDes(val);
  };
  var handleDateChanged = function handleDateChanged(val) {
    setDate(val);
  };
  var handleProjectSelected = function handleProjectSelected(e) {
    setProjectSelected(e.target.value);
  };
  var disabled = React.useMemo(function () {
    if (des.trim().length != 0 && title.trim().length != 0 && date != '' && date != undefined && date != null && projectSelected != 'null' && projectSelected != null) {
      return false;
    } else {
      return true;
    }
  }, [des, title, date, projectSelected]);
  var requestCreate = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var to_send, url, form_data, req;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            to_send = {
              project_id: projectSelected,
              title: title,
              description: des,
              date: date.toString(),
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            url = '/create_goal/';
            form_data = new FormData();
            Object.entries(to_send).forEach(function (_ref10) {
              var _ref11 = _slicedToArray(_ref10, 2),
                key = _ref11[0],
                val = _ref11[1];
              form_data.append(key, val);
            });
            _context3.next = 6;
            return __.layoutRequest.post(url, form_data, 'json');
          case 6:
            req = _context3.sent;
            if (req.isSuccess) {
              setLoad(false);
              setDes('');
              setTitle('');
            } else {
              setLoad(false);
              __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
            }
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function requestCreate() {
      return _ref9.apply(this, arguments);
    };
  }();
  var voteEasy = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      var url, to_send, form_data, req, comment;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            url = '/vote_easy/';
            to_send = {
              id: id,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form_data = __.getFormData(to_send);
            _context4.next = 5;
            return __.layoutRequest.post(url, form_data, 'json');
          case 5:
            req = _context4.sent;
            if (req.isSuccess) {
              comment = "";
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection et re-éssayez plus tard.", 'danger');
            }
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function voteEasy(_x) {
      return _ref12.apply(this, arguments);
    };
  }();
  var voteDiff = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var url, to_send, form_data, req, comment;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            url = '/vote_diff/';
            to_send = {
              id: id,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form_data = __.getFormData(to_send);
            _context5.next = 5;
            return __.layoutRequest.post(url, form_data, 'json');
          case 5:
            req = _context5.sent;
            if (req.isSuccess) {
              comment = "";
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection et re-éssayez plus tard.", 'danger');
            }
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function voteDiff(_x2) {
      return _ref13.apply(this, arguments);
    };
  }();
  var voteImpossible = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
      var url, to_send, form_data, req, comment;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            url = '/vote_impossible/';
            to_send = {
              id: id,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form_data = __.getFormData(to_send);
            _context6.next = 5;
            return __.layoutRequest.post(url, form_data, 'json');
          case 5:
            req = _context6.sent;
            if (req.isSuccess) {
              comment = "";
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection et re-éssayez plus tard.", 'danger');
            }
          case 7:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function voteImpossible(_x3) {
      return _ref14.apply(this, arguments);
    };
  }();
  var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  var create = function create() {
    setLoad(true);
    requestCreate();
  };
  var getObjectifDate = function getObjectifDate(date_value) {
    var d = new Date(date_value);
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "objectif-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xtealce xfowebo xmato20"
  }, "Objectif"), /*#__PURE__*/React.createElement("div", {
    className: "main-objectif xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "objectif-form"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmale20"
  }, "Nouvel objectif"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi13 xmale20 xmabo20 xmato4"
  }, "Cr\xE9er une nouvel objectif"), /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '90%'
    },
    value: title,
    onChange: handleTitleChanged,
    center: true
  }, "Titre"), /*#__PURE__*/React.createElement(XTextarea, {
    style: {
      width: '90%'
    },
    className: "xmato15",
    value: des,
    onChange: handleDesChanged,
    center: true
  }, "Description"), /*#__PURE__*/React.createElement("p", {
    className: "xmale20 xmato15 xfosi14 xfowebo"
  }, "Projet:"), /*#__PURE__*/React.createElement(XSelect, {
    value: projectSelected,
    onChange: handleProjectSelected,
    style: {
      width: '90%'
    },
    className: "xmato5",
    center: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "null"
  }, "---"), projects.map(function (pro) {
    return /*#__PURE__*/React.createElement("option", {
      value: pro.id,
      key: pro.id
    }, pro.name);
  })), /*#__PURE__*/React.createElement("p", {
    className: "xmale20 xmabo5 xmato15 xfosi14 xfowebo"
  }, "Date fin d'objectif:"), /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '90%'
    },
    value: date,
    onChange: handleDateChanged,
    type: "date",
    center: true
  }, "Titre"), /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: {
      width: '90%',
      height: '48px',
      marginTop: '10px'
    },
    disabled: disabled,
    load: load,
    center: true,
    onClickFunc: create
  }, "Cr\xE9er")), /*#__PURE__*/React.createElement("div", {
    className: "objectif-content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xtealce"
  }, "Objectif existant"), objs.map(function (ob) {
    return /*#__PURE__*/React.createElement("div", {
      className: "each-obj xwi88per xmato30 x-center xbora12 x-shadow xpa25 xpore",
      key: ob.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "objectif-status xpoab xto20 xri20"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ob.status)), /*#__PURE__*/React.createElement("p", {
      className: "xfosi20 xfowebo"
    }, ob.title), /*#__PURE__*/React.createElement("p", {
      className: "xfosi13 x-low-emphasis xmato7"
    }, ob.description), /*#__PURE__*/React.createElement("p", {
      className: "xmato20"
    }, "Date fin: ", /*#__PURE__*/React.createElement("strong", null, getObjectifDate(ob.date))), /*#__PURE__*/React.createElement("div", {
      className: "project-and-progression xdigr xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "project xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-circle-90 x-child-center"
    }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
      name: ob.project.name,
      fontSize: 14,
      imageURL: ob.project.photo,
      width: 60
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi14 xfowebo"
    }, ob.project.name)), /*#__PURE__*/React.createElement("div", {
      className: "project-pro-container"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi13 xmabo10 xfowebo"
    }, "Progression du projet : ", ob.progression, "%"), /*#__PURE__*/React.createElement("div", {
      className: "project-pro"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: ob.progression + '%'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: "vote xdigr xalitce well"
    }, /*#__PURE__*/React.createElement("div", {
      className: "objectif-progression"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: ob.easy_progression + '%'
      }
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi12"
    }, ob.easy_total, " personne", ob.easy_total < 2 ? ' a' : 's ont', " vot\xE9 qu'on pourra bien atteindre ce objectif")), /*#__PURE__*/React.createElement("div", {
      className: "vote xdigr xalitce difficult"
    }, /*#__PURE__*/React.createElement("div", {
      className: "objectif-progression"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: ob.difficult_progression + '%'
      }
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi12"
    }, ob.difficult_total, " personne", ob.difficult_total < 2 ? ' a' : 's ont', " vot\xE9 qu'il est un peu difficle d'atteindre ce objectif")), /*#__PURE__*/React.createElement("div", {
      className: "vote xdigr xalitce impossible"
    }, /*#__PURE__*/React.createElement("div", {
      className: "objectif-progression"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: ob.impossible_progression + '%'
      }
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi12"
    }, ob.impossible_total, " personne", ob.impossible_total < 2 ? ' a' : 's ont', " vot\xE9 qu'il est impossible d'atteindre ce objectif")), /*#__PURE__*/React.createElement("div", {
      className: "vote xdigr xalitce wait"
    }, /*#__PURE__*/React.createElement("div", {
      className: "objectif-progression"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: ob.not_vote_progression + '%'
      }
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi12"
    }, ob.not_vote_total, " personnes n'", ob.not_vote_total < 2 ? 'a' : ' ont', " pas encore vot\xE9")), /*#__PURE__*/React.createElement("div", {
      className: "option-obj xmato20 xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "vote-me xdifl xalitce xwi50per"
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-square-50 x-child-center xbora16 x-shadow x-pointer vote-for-possible",
      onClick: function onClick() {
        return voteEasy(ob.id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "far xfosi20 fa-heart"
    })), /*#__PURE__*/React.createElement("div", {
      className: "x-square-50 x-child-center xmale10 xbora16 x-shadow x-pointer vote-for-difficult",
      onClick: function onClick() {
        return voteDiff(ob.id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "far xfosi20 fa-thumbs-up"
    })), /*#__PURE__*/React.createElement("div", {
      className: "x-square-50 x-child-center xmale10 xbora16 x-shadow x-pointer vote-for-impossible",
      onClick: function onClick() {
        return voteImpossible(ob.id);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "far xfosi20 fa-thumbs-down"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "settings-obj xdifl xwi50per"
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-circle-50 x-shadow x-child-center x-pointer"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-pen"
    })), /*#__PURE__*/React.createElement("div", {
      className: "x-circle-50 xmale10 x-shadow x-child-center x-pointer"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-trash-alt"
    })))));
  }))));
}
function EachRapport(_ref15) {
  var rap = _ref15.rap;
  React.useEffect(function () {
    var body = document.body;
    var total = rap.project.tasks.length;
    var done = rap.project.tasks.filter(function (t) {
      return t.status.toLowerCase() == 'terminé';
    }).length;
    var perc = done / total * 100;
    setTimeout(function () {
      var progress = body.querySelector('#pro-progress-' + rap.id + ' span');
      progress.style.width = perc + '%';
    }, 3000);
  });
  var getPerc = React.useMemo(function () {
    var total = rap.project.tasks.length;
    var done = rap.project.tasks.filter(function (t) {
      return t.status.toLowerCase() == 'terminé';
    }).length;
    var perc = done / total * 100;
    return Number(perc.toFixed(perc, 2));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "each-rapport xwi88per x-center xbora10 x-shadow xmabo20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 title-for-rapport xfowebo"
  }, "Rapport de projet ", /*#__PURE__*/React.createElement("strong", null, rap.project.name)), /*#__PURE__*/React.createElement("p", {
    className: "xmato10 xfosi14"
  }, rap.description), /*#__PURE__*/React.createElement("p", {
    className: "xmato30 xfosi15 xmabo10"
  }, "Progression du projet: ", /*#__PURE__*/React.createElement("strong", null, getPerc, "%")), /*#__PURE__*/React.createElement("div", {
    className: "projet-progress",
    id: 'pro-progress-' + rap.id
  }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "stat xdifl xjucospev xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "each-stat xdifl xjucospev xalitce xfldico xhe90"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xfowebo"
  }, rap.project.tasks.length), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12"
  }, "Total des taches")), /*#__PURE__*/React.createElement("div", {
    className: "each-stat xdifl xjucospev xalitce xfldico xhe90"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xfowebo"
  }, rap.project.tasks.filter(function (t) {
    return t.status.toLowerCase() == 'terminé';
  }).length), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12"
  }, "Taches termin\xE9e")), /*#__PURE__*/React.createElement("div", {
    className: "each-stat xdifl xjucospev xalitce xfldico xhe90"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xfowebo"
  }, rap.project.tasks.filter(function (t) {
    return t.status.toLowerCase() == 'en cours';
  }).length), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12"
  }, "Taches en cours")), /*#__PURE__*/React.createElement("div", {
    className: "each-stat xdifl xjucospev xalitce xfldico xhe90"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xfowebo"
  }, rap.project.tasks.filter(function (t) {
    return t.status.toLowerCase() == 'en attente';
  }).length), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12"
  }, "Taches en attente"))), /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmato10"
  }, "Taches Termi\xE9e"), rap.project.tasks.filter(function (t) {
    return t.status.toLowerCase() == 'terminé';
  }).map(function (ta) {
    return /*#__PURE__*/React.createElement("div", {
      className: "each-task xdigr xmato15 x-bd-bottom x-bd-medium xpabo15",
      key: ta.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-name xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-check-circle"
    })), /*#__PURE__*/React.createElement("p", {
      className: "xmale10 xfosi14 xfowebo"
    }, ta.name)), /*#__PURE__*/React.createElement("div", {
      className: "responsable-task xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-child-center x-circle30"
    }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
      name: ta.user.lastName,
      width: 30,
      fontSize: 10,
      imageURL: ta.user.photo
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xmale10 xfowebo"
    }, ta.user.lastName, " ", ta.user.firstName)), /*#__PURE__*/React.createElement("div", {
      className: "deadline-task x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.deadline, "j")), /*#__PURE__*/React.createElement("div", {
      className: "interval-date x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.startDate, " - ", ta.endDate)), /*#__PURE__*/React.createElement("div", {
      className: "stat-task-done x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.status)));
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmato40"
  }, "Taches En cours"), rap.project.tasks.filter(function (t) {
    return t.status.toLowerCase() == 'en cours';
  }).map(function (ta) {
    return /*#__PURE__*/React.createElement("div", {
      className: "each-task xdigr xmato15 x-bd-bottom x-bd-medium xpabo15",
      key: ta.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-name xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-check-circle"
    })), /*#__PURE__*/React.createElement("p", {
      className: "xmale10 xfosi14 xfowebo"
    }, ta.name)), /*#__PURE__*/React.createElement("div", {
      className: "responsable-task xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-child-center x-circle30"
    }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
      name: ta.user.lastName,
      width: 30,
      fontSize: 10,
      imageURL: ta.user.photo
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xmale10 xfowebo"
    }, ta.user.lastName, " ", ta.user.firstName)), /*#__PURE__*/React.createElement("div", {
      className: "deadline-task x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.deadline, "j")), /*#__PURE__*/React.createElement("div", {
      className: "interval-date x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.startDate, " - ", ta.endDate)), /*#__PURE__*/React.createElement("div", {
      className: "stat-task-done x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.status)));
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmato40"
  }, "Taches En attente"), rap.project.tasks.filter(function (t) {
    return t.status.toLowerCase() == 'en attente';
  }).map(function (ta) {
    return /*#__PURE__*/React.createElement("div", {
      className: "each-task xdigr xmato15 x-bd-bottom x-bd-medium xpabo15",
      key: ta.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-name xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-check-circle"
    })), /*#__PURE__*/React.createElement("p", {
      className: "xmale10 xfosi14 xfowebo"
    }, ta.name)), /*#__PURE__*/React.createElement("div", {
      className: "responsable-task xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-child-center x-circle30"
    }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
      name: ta.user.lastName,
      width: 30,
      fontSize: 10,
      imageURL: ta.user.photo
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xmale10 xfowebo"
    }, ta.user.lastName, " ", ta.user.firstName)), /*#__PURE__*/React.createElement("div", {
      className: "deadline-task x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.deadline, "j")), /*#__PURE__*/React.createElement("div", {
      className: "interval-date x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.startDate, " - ", ta.endDate)), /*#__PURE__*/React.createElement("div", {
      className: "stat-task-done x-chil-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xfosi12 xfowebo"
    }, ta.status)));
  }), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi12 xmato20"
  }, "Rapport cr\xE9e le: ", getFormatDateTime(rap.datetime)));
}
function Rapport(_ref16) {
  var data = _ref16.data,
    user = _ref16.user;
  var _React$useState27 = React.useState(false),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    load = _React$useState28[0],
    setLoad = _React$useState28[1];
  var _React$useState29 = React.useState(""),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    des = _React$useState30[0],
    setDes = _React$useState30[1];
  var _React$useState31 = React.useState([]),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    allRepports = _React$useState32[0],
    setAllRepports = _React$useState32[1];
  var socket = null;
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/rapport/' + user.id + '/');
    socket.onopen = function (e) {};
    socket.onclose = function (e) {};
    socket.onmessage = function (e) {
      var response = JSON.parse(e.data);
      if (Array.isArray(response)) {
        setAllRepports(response);
      } else {
        setAllRepports(function (prev) {
          return [].concat(_toConsumableArray(prev), [response]);
        });
      }
    };
    return function () {
      return socket.close();
    };
  }, []);
  var project = React.useMemo(function () {
    return data;
  });
  var _React$useState33 = React.useState(project.length == 0 ? 'null' : project[0].id),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    projectSelected = _React$useState34[0],
    setProjectSelected = _React$useState34[1];
  var handleDesChanged = function handleDesChanged(val) {
    setDes(val);
  };
  var handleProjectSelect = function handleProjectSelect(e) {
    setProjectSelected(e.target.value);
  };
  var disabled = React.useMemo(function () {
    if (projectSelected != 'null' && des.trim().length > 0) {
      return false;
    } else {
      return true;
    }
  }, [des, projectSelected]);
  var requestAdd = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var url, to_send, form_data, req;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            url = '/create_repport/';
            to_send = {
              id: projectSelected,
              description: des,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form_data = new FormData();
            Object.entries(to_send).forEach(function (_ref18) {
              var _ref19 = _slicedToArray(_ref18, 2),
                key = _ref19[0],
                val = _ref19[1];
              form_data.append(key, val);
            });
            _context7.next = 6;
            return __.layoutRequest.post(url, form_data, 'json');
          case 6:
            req = _context7.sent;
            if (req.isSuccess) {
              setLoad(false);
              setDes('');
              setAllRepports(function (prev) {
                return [].concat(_toConsumableArray(prev), [req.data]);
              });
            } else {
              __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
            }
          case 8:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function requestAdd() {
      return _ref17.apply(this, arguments);
    };
  }();
  var createRapport = function createRapport() {
    setLoad(true);
    requestAdd();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rapport-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi35 xfowebo xtealce xmato20"
  }, "Rapport"), /*#__PURE__*/React.createElement("div", {
    className: "main-rapport xdigr xmato40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rapport-form"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xfosi118 xmale20"
  }, "Nouveau rapport"), /*#__PURE__*/React.createElement("p", {
    className: "xmabo20 x-low-emphasis xmale20 xmato6 xfosi12 xfowebo"
  }, "Cr\xE9er une rapport avec une simple \xE9taple."), /*#__PURE__*/React.createElement("label", {
    className: "xmale20 xfosi13 xfowebo",
    htmlFor: "select-project-rapport"
  }, "Projet:"), /*#__PURE__*/React.createElement(XSelect, {
    value: projectSelected,
    onChange: handleProjectSelect,
    style: {
      width: '90%'
    },
    className: "xmabo15",
    center: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "null"
  }, "---"), project.map(function (pro) {
    return /*#__PURE__*/React.createElement("option", {
      key: pro.id,
      value: pro.id
    }, pro.name);
  })), /*#__PURE__*/React.createElement(XTextarea, {
    style: {
      width: '90%'
    },
    center: true,
    value: des,
    className: "xmabo15",
    onChange: handleDesChanged
  }, "Description"), /*#__PURE__*/React.createElement("div", {
    className: "btn-submit-rapport"
  }, /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: {
      width: '90%',
      height: '47px'
    },
    load: load,
    onClickFunc: createRapport,
    disabled: disabled,
    center: true,
    br: 30
  }, "Cr\xE9er"))), /*#__PURE__*/React.createElement("div", {
    className: "rapport-content-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xfosi118 xtealce xmabo20"
  }, "Les rapport exsistant"), allRepports.map(function (rap) {
    return /*#__PURE__*/React.createElement(EachRapport, {
      rap: rap,
      key: rap.id
    });
  }))));
}
var TaskManager = function TaskManager(_ref20) {
  var user = _ref20.user;
  var _React$useState35 = React.useState([]),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    tasks = _React$useState36[0],
    setTasks = _React$useState36[1];
  var _React$useState37 = React.useState(''),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    title = _React$useState38[0],
    setTitle = _React$useState38[1];
  var _React$useState39 = React.useState(''),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    startDate = _React$useState40[0],
    setStartDate = _React$useState40[1];
  var _React$useState41 = React.useState(''),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    endDate = _React$useState42[0],
    setEndDate = _React$useState42[1];
  var _React$useState43 = React.useState(''),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    description = _React$useState44[0],
    setDescription = _React$useState44[1];
  var _React$useState45 = React.useState({
      'En attente': '',
      'En cours': '',
      'Terminé': ''
    }),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    searchQuery = _React$useState46[0],
    setSearchQuery = _React$useState46[1];
  var socket = null;
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/my_personal_task/' + user.id + '/');
    socket.onmessage = function (e) {
      var response = JSON.parse(e.data);
      if (Array.isArray(response)) {
        setTasks(response);
      }
    };
    socket.onopen = function (e) {};
    socket.onclose = function (e) {};
    return function () {
      return socket.close();
    };
  }, []);
  var calculateDaysBetween = function calculateDaysBetween(start, end) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var timeDiff = endDate - startDate;
    var daysDiff = timeDiff / (1000 * 3600 * 24);
    return Math.max(0, Math.floor(daysDiff));
  };
  var validateDates = function validateDates() {
    var start = new Date(startDate);
    var end = new Date(endDate);
    if (end < start) {
      __.xAlert('Erreur', "La date de fin ne peut pas être antérieure à la date de début.", 'danger');
      return false;
    }
    return true;
  };
  var addTask = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var url, deadlineDays, today, start, end, status, newTask, formData, req;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (!(!title || !startDate || !endDate || !description)) {
              _context8.next = 3;
              break;
            }
            alert('Veuillez remplir tous les champs.');
            return _context8.abrupt("return");
          case 3:
            if (validateDates()) {
              _context8.next = 5;
              break;
            }
            return _context8.abrupt("return");
          case 5:
            url = '/add_personal_task/';
            deadlineDays = calculateDaysBetween(startDate, endDate);
            today = new Date();
            start = new Date(startDate);
            end = new Date(endDate);
            status = 'En attente';
            if (today >= start && today <= end) {
              status = 'En cours';
            } else if (today > end) {
              status = 'Terminé';
            }
            newTask = {
              title: title,
              startDate: start.toLocaleDateString(),
              endDate: end.toLocaleDateString(),
              number_deadline: deadlineDays,
              deadline: "".concat(deadlineDays, "j"),
              description: description,
              status: status,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(newTask).forEach(function (_ref22) {
              var _ref23 = _slicedToArray(_ref22, 2),
                key = _ref23[0],
                val = _ref23[1];
              formData.append(key, val);
            });
            _context8.next = 17;
            return __.layoutRequest.post(url, formData, 'json');
          case 17:
            req = _context8.sent;
            if (req.isSuccess) {
              newTask.id = req.data.id;
              setTasks([].concat(_toConsumableArray(tasks), [newTask]));
              setTitle('');
              setStartDate('');
              setEndDate('');
              setDescription('');
              cancelAdd();
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection s'il vous plaît.", "danger");
            }
          case 19:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function addTask() {
      return _ref21.apply(this, arguments);
    };
  }();

  // Fonction pour filtrer les tâches par statut et par recherche
  var filterTasksByStatusAndQuery = function filterTasksByStatusAndQuery(status) {
    return tasks.filter(function (task) {
      return task.status === status;
    }).filter(function (task) {
      return task.title.toLowerCase().includes(searchQuery[status].toLowerCase());
    });
  };
  var btnStyle = {
    width: "95%"
  };
  var cancelAdd = function cancelAdd() {
    black.current.style.display = "none";
    addForm.current.style.display = "none";
  };
  var showAdding = function showAdding() {
    black.current.style.display = "block";
    addForm.current.style.display = "block";
  };
  var black = React.useRef(null);
  var addForm = React.useRef(null);
  var addingStyle = {
    width: "200px"
  };
  var taskEditForm = React.useRef(null);
  var openTaskEditForm = function openTaskEditForm() {
    taskEditForm.current.style.top = '0px';
  };
  var closeTaskEditForm = function closeTaskEditForm() {
    taskEditForm.current.style.top = '100%';
  };
  var deletePeroTask = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
      var url, to_send, form_data, req;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            url = '/delete_perso_task/';
            to_send = {
              id: id,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form_data = __.getFormData(to_send);
            _context9.next = 5;
            return __.layoutRequest.post(url, form_data, 'json');
          case 5:
            req = _context9.sent;
            if (req.isSuccess) {
              setTasks(function (prev) {
                var arc = prev.filter(function (t) {
                  return t.id != id;
                });
                return arc;
              });
            } else {
              __.xAlert('Connection error', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
            }
          case 7:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function deletePeroTask(_x4) {
      return _ref24.apply(this, arguments);
    };
  }();
  var markDone = /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
      var url, to_send, form_data, req;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            url = '/done_perso_task/';
            to_send = {
              id: id,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form_data = __.getFormData(to_send);
            _context10.next = 5;
            return __.layoutRequest.post(url, form_data, 'json');
          case 5:
            req = _context10.sent;
            if (req.isSuccess) {
              setTasks(function (prev) {
                var arc = _toConsumableArray(prev);
                arc.forEach(function (ar) {
                  if (ar.id == id) {
                    ar.status = 'Terminé';
                  }
                });
                return arc;
              });
            } else {
              __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
            }
          case 7:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return function markDone(_x5) {
      return _ref25.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "perso-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xfowebo xmato20 xmabo5 tt-my-task"
  }, "Gestion de votre t\xE2che personelle"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfowebo xfosi13 dd-my-task"
  }, "Toutes votre t\xE2ches ici sont tous des t\xE2ches qui n'ont pas li\xE9 \xE0 des projet."), /*#__PURE__*/React.createElement("div", {
    className: "x-center xwi90per xmabo20"
  }, /*#__PURE__*/React.createElement(XButton, {
    onClickFunc: showAdding,
    style: addingStyle,
    center: true
  }, "Ajouter une t\xE2ches")), /*#__PURE__*/React.createElement("div", {
    className: "black-this-add x-pointer",
    onClick: cancelAdd,
    ref: black
  }), /*#__PURE__*/React.createElement("div", {
    className: "perso-task-entry",
    ref: addForm
  }, /*#__PURE__*/React.createElement("h3", null, "Ajouter une t\xE2che personnelle"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xtealce  x-low-emphasis xmabo20"
  }, "Remplir les champs suivants pour ajouter votre t\xE2ches personelle"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    placeholder: "Titre"
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: startDate,
    onChange: function onChange(e) {
      return setStartDate(e.target.value);
    },
    placeholder: "Date de d\xE9but"
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: endDate,
    onChange: function onChange(e) {
      return setEndDate(e.target.value);
    },
    placeholder: "Date de fin"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    placeholder: "Description"
  }), /*#__PURE__*/React.createElement("div", {
    className: "xwi100per xmato10 x-center"
  }, /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: btnStyle,
    onClickFunc: addTask,
    br: 30,
    center: true
  }, "Ajouter cette t\xE2che"))), ['En attente', 'En cours', 'Terminé'].map(function (status) {
    return /*#__PURE__*/React.createElement("div", {
      key: status,
      className: "perso-task-section"
    }, /*#__PURE__*/React.createElement("h3", null, "T\xE2ches ", status), /*#__PURE__*/React.createElement("div", {
      className: "perso-search-bar"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Rechercher...",
      value: searchQuery[status],
      onChange: function onChange(e) {
        return setSearchQuery(_objectSpread(_objectSpread({}, searchQuery), {}, _defineProperty({}, status, e.target.value)));
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "perso-task-list"
    }, filterTasksByStatusAndQuery(status).map(function (task) {
      return /*#__PURE__*/React.createElement("div", {
        key: task.id,
        className: "perso-task-card"
      }, /*#__PURE__*/React.createElement("h4", null, task.title), /*#__PURE__*/React.createElement("p", {
        className: "tt-task-descri"
      }, task.description), /*#__PURE__*/React.createElement("div", {
        className: "xdifl xalitce"
      }, /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xmale10"
      }, /*#__PURE__*/React.createElement("strong", null, "Date de d\xE9but :"), " ", task.startDate), /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xmale10"
      }, /*#__PURE__*/React.createElement("strong", null, "Date de fin :"), " ", task.endDate), /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xmale10"
      }, /*#__PURE__*/React.createElement("strong", null, "Deadline :"), " ", task.deadline)), /*#__PURE__*/React.createElement("span", {
        className: "perso-status-not-in-table ".concat(task.status.toLowerCase().replace(' ', '-'))
      }, task.status), /*#__PURE__*/React.createElement("div", {
        className: "xdifl xjucospev xalitce xwi100per xmato15"
      }, /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return markDone(task.id);
        },
        className: "each-method-to-task xbora30 x-square-46 x-child-center mark-complete x-pointer"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-check-circle"
      })), /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return deletePeroTask(task.id);
        },
        className: "each-method-to-task xbora30 x-square-46 x-child-center delete x-pointer"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-trash-alt"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "perso-task-edit xpoab xwi100per xle0",
        ref: taskEditForm
      }, /*#__PURE__*/React.createElement("p", {
        className: "xfosi15 xfowebo xmale10"
      }, "Editer ce t\xE2che"), /*#__PURE__*/React.createElement("p", {
        className: "edit-task-form-message x-low-emphasis"
      }, "Vous pouvez editer ces deux champs de cette t\xE2ches"), /*#__PURE__*/React.createElement(XField, {
        style: {
          width: '90%'
        },
        center: true
      }, "Titre"), /*#__PURE__*/React.createElement("textarea", {
        placeholder: "Description"
      }), /*#__PURE__*/React.createElement("div", {
        className: "x-center xdigr perso-edit-or-cancel xwi90per xmato10 xhe60"
      }, /*#__PURE__*/React.createElement("div", {
        className: "x-child-center x-pointer",
        onClick: closeTaskEditForm
      }, /*#__PURE__*/React.createElement("button", {
        className: "x-pointer"
      }, "Annuler")), /*#__PURE__*/React.createElement(XButtonLoadable, {
        style: {
          width: '140px'
        },
        center: true,
        br: 30
      }, "Sauvegarder"))));
    })));
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Toutes les t\xE2ches"), /*#__PURE__*/React.createElement("table", {
    className: "perso-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Titre"), /*#__PURE__*/React.createElement("th", null, "Date de d\xE9but"), /*#__PURE__*/React.createElement("th", null, "Date de fin"), /*#__PURE__*/React.createElement("th", null, "Deadline"), /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, tasks.map(function (task, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: index
    }, /*#__PURE__*/React.createElement("td", null, task.title), /*#__PURE__*/React.createElement("td", null, task.startDate), /*#__PURE__*/React.createElement("td", null, task.endDate), /*#__PURE__*/React.createElement("td", null, task.deadline), /*#__PURE__*/React.createElement("td", null, task.description), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "perso-status-in-table ".concat(task.status.toLowerCase().replace(' ', '-'))
    }, task.status)));
  })))));
};
function VisualiseFileDetail(_ref26) {
  var data = _ref26.data,
    updateMe = _ref26.updateMe,
    auth_user = _ref26.auth_user,
    deleteFile = _ref26.deleteFile;
  var _React$useState47 = React.useState(data),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    fileData = _React$useState48[0],
    setFileData = _React$useState48[1];
  var _React$useState49 = React.useState(false),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    edit = _React$useState50[0],
    setEdit = _React$useState50[1];
  var handleChange = function handleChange(e) {
    setFileData(function () {
      return _objectSpread(_objectSpread({}, fileData), {}, {
        description: e.target.value
      });
    });
  };
  var fileExt = React.useMemo(function () {
    var ext = __.getFileExtension(data.fileURL);
    if (XSettings.filesFormats.indexOf(ext) != -1) {
      return XSettings.fileFormatToIcon[ext] + " xfosi40";
    } else {
      return "far fa-file xfosi40";
    }
  }, []);
  var getFileType = React.useMemo(function () {
    var ext = __.getFileExtension(data.fileURL);
    if (XSettings.filesFormats.indexOf(ext) != -1) {
      return XSettings.fileFormatToName[ext];
    } else {
      return "Fichier inconnu";
    }
  }, []);
  var editOrSave = function editOrSave() {
    if (auth_user.id == fileData.user.id) {
      if (edit) {
        updateMe(fileData);
        setEdit(false);
      } else {
        setEdit(true);
      }
    } else {
      __.xAlert('Accées non autorisé', 'Vous ne pouvez pas editer ce fichier.', 'danger');
    }
  };
  var close = function close() {
    detailedFileDOM.style.display = "none";
  };
  var toDownload = React.useRef(null);
  var download = function download() {
    toDownload.current.click();
  };
  var deleteOwnFile = function deleteOwnFile() {
    deleteFile(fileData.id);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xtealce x-low-emphasis xfowebo xmabo10 xfosi12"
  }, "Detail d'une fichier"), /*#__PURE__*/React.createElement("div", {
    className: "xdigr xalitce more-file-detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-100 x-child-center xbora30 x-deep-shadow"
  }, /*#__PURE__*/React.createElement("i", {
    className: fileExt
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xmabo2"
  }, fileData.fileURL), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-low-emphasis xfowebo"
  }, getFileType, " - ", fileData.size), /*#__PURE__*/React.createElement("p", {
    className: "file-datetime xfosi11 x-low-emphasis xmato2"
  }, getFormatDateTime(fileData.date)))), edit ? null : /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xmato20 xfosi13 x-low-emphasis"
  }, fileData.description), edit ? /*#__PURE__*/React.createElement("textarea", {
    id: "edit-des",
    onChange: handleChange,
    value: fileData.description,
    placeholder: "Description...",
    className: "xfowebo xmato20 xfosi13 xlihe2 x-low-emphasis"
  }) : null, /*#__PURE__*/React.createElement("p", {
    className: "xmato20 xfosi12"
  }, "Uploader par ", /*#__PURE__*/React.createElement("strong", null, fileData.user.lastName, " ", fileData.user.firstName)), /*#__PURE__*/React.createElement("a", {
    href: fileData.realFileURL,
    ref: toDownload,
    download: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "more-option-file xdigr xmato30 xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: editOrSave,
    className: "x-child-center xhe50 edit-file xbora30 x-pointer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "xfowebo"
  }, edit ? "Sauvegarder" : "Editer", " ")), /*#__PURE__*/React.createElement("div", {
    className: "x-circle-50 x-child-center x-pointer",
    onClick: download
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-arrow-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-circle-50 x-child-center x-pointer",
    onClick: deleteOwnFile
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-trash-alt"
  }))), /*#__PURE__*/React.createElement("p", {
    onClick: close,
    className: "cancel-this-box xtealce xmabo10 x-low-emphasis x-pointer xmato40 xfosi14 xfowebo"
  }, "Fermer"));
}
var FILE_ID = 0;
function ProjectFiles(_ref27) {
  var data = _ref27.data,
    projectID = _ref27.projectID,
    auth_user = _ref27.auth_user;
  var _React$useState51 = React.useState(data),
    _React$useState52 = _slicedToArray(_React$useState51, 2),
    allFiles = _React$useState52[0],
    setAllFiles = _React$useState52[1];
  var _React$useState53 = React.useState(false),
    _React$useState54 = _slicedToArray(_React$useState53, 2),
    uploadFormShowed = _React$useState54[0],
    setUploadFormShowed = _React$useState54[1];
  var switchShow = function switchShow() {
    setUploadFormShowed(function (c) {
      return !c;
    });
  };
  var getValues = function getValues(f, d) {
    FILE_ID = FILE_ID + 1;
    var newFile = {
      id: 'file-' + FILE_ID,
      fileURL: f.name,
      file: f,
      size: __.byteToHuman(f.size),
      description: d
    };
    setAllFiles(function (prev) {
      return [].concat(_toConsumableArray(prev), [newFile]);
    });
  };
  var onFileSent = function onFileSent(fake_id, data) {
    setAllFiles(function (prev) {
      var arc = prev.filter(function (fi) {
        return fi.id != fake_id;
      });
      return [].concat(_toConsumableArray(arc), [data]);
    });
  };
  var requestDeleteFile = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id) {
      var url, req;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            url = '/delete_project_file/' + id + '/';
            _context11.next = 3;
            return __.layoutRequest.get(url, null, 'json');
          case 3:
            req = _context11.sent;
            if (req.isSuccess) {
              setAllFiles(function (prev) {
                return prev.filter(function (fi) {
                  return fi.id != id;
                });
              });
              detailedFileDOM.style.display = "none";
            }
          case 5:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return function requestDeleteFile(_x6) {
      return _ref28.apply(this, arguments);
    };
  }();
  var deleteFile = function deleteFile(id) {
    var target = allFiles.find(function (t) {
      return t.id == id;
    });
    if (target.user.id == auth_user.id) {
      requestDeleteFile(id);
    } else {
      __.xAlert('Accées non autorisé', "Vous n'etez pas autorisé à supprimer cette fichier", 'danger');
    }
  };
  var getContent = React.useMemo(function () {
    if (allFiles.length == 0) {
      return /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xfowebo x-low-emphasis xtealce xmato80"
      }, "Aucune fichier uploader jusqu'\xE0 maintenant");
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "all-files-list xmato30 xdigr xwi100per"
      }, allFiles.map(function (fi) {
        return /*#__PURE__*/React.createElement(EachProjectFile, {
          key: fi.id,
          onFileSent: onFileSent,
          data: fi,
          deleteFile: deleteFile,
          projectID: projectID,
          auth_user: auth_user
        });
      }));
    }
  }, [allFiles]);
  return /*#__PURE__*/React.createElement("div", {
    id: "files-box",
    className: "xpore x-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xfowebo"
  }, "Fichiers"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato5 xlihe4 xfosi12"
  }, "Peut-\xEAtre avez-vous de nombreux fichiers importants li\xE9s \xE0 ce projet. Uploader ici, t\xE9l\xE9chargez chaque fois que vous en avez besoin."), /*#__PURE__*/React.createElement("div", {
    onClick: switchShow,
    className: "xwi130 x-shadow x-pointer xmato20 xbora30 xhe45 x-child-center btn-upload-new-file"
  }, /*#__PURE__*/React.createElement("button", {
    className: "xfosi12 xfowebo x-co_wh"
  }, uploadFormShowed ? " Annuler" : "Nouveau fichier")), uploadFormShowed ? /*#__PURE__*/React.createElement(UploadingForm, {
    getValues: getValues,
    cancel: switchShow
  }) : null, /*#__PURE__*/React.createElement("p", {
    className: "text-file-length xfosi18 xmato30 xfowebo"
  }, "Tous les fichiers de ce projet (", allFiles.length, ")"), getContent);
}
function EachProjectFile(_ref29) {
  var data = _ref29.data,
    projectID = _ref29.projectID,
    auth_user = _ref29.auth_user,
    deleteFile = _ref29.deleteFile,
    onFileSent = _ref29.onFileSent;
  var _React$useState55 = React.useState(data),
    _React$useState56 = _slicedToArray(_React$useState55, 2),
    fileData = _React$useState56[0],
    setFileData = _React$useState56[1];
  var update = function update(updatedValue) {
    setFileData(updatedValue);
  };
  var successUploading = function successUploading(fake_id, values) {
    setFileData(values);
    onFileSent(fake_id, values);
  };
  var getContent = React.useMemo(function () {
    if (typeof fileData.id == 'number') {
      return /*#__PURE__*/React.createElement(Uploaded, {
        data: fileData,
        updateMe: update,
        auth_user: auth_user,
        deleteFile: deleteFile
      });
    } else {
      return /*#__PURE__*/React.createElement(Uploading, {
        data: fileData,
        projectID: projectID,
        success: successUploading
      });
    }
  }, [fileData]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, getContent);
}
function UploadingForm(_ref30) {
  var cancel = _ref30.cancel,
    getValues = _ref30.getValues;
  var _React$useState57 = React.useState(""),
    _React$useState58 = _slicedToArray(_React$useState57, 2),
    description = _React$useState58[0],
    setDescription = _React$useState58[1];
  var _React$useState59 = React.useState(null),
    _React$useState60 = _slicedToArray(_React$useState59, 2),
    file = _React$useState60[0],
    setFile = _React$useState60[1];
  var input = React.useRef(null);
  var select = function select() {
    input.current.click();
  };
  var upload = function upload() {
    getValues(file, description);
    reset();
  };
  var handleChange = function handleChange(e) {
    setFile(e.target.files[0]);
  };
  var handleDes = function handleDes(e) {
    setDescription(e.target.value);
  };
  var disabled = React.useMemo(function () {
    if (file != null && file != undefined && description.trim().length > 0) {
      return false;
    }
    return true;
  }, [file, description]);
  var getFileIcon = React.useMemo(function () {
    var otherClassName = " xfosi30";
    if (file == null) {
      return "far fa-file" + otherClassName;
    } else {
      var ext = __.getFileExtension(file.name);
      if (XSettings.filesFormats.indexOf(ext) != -1) {
        return XSettings.fileFormatToIcon[ext] + otherClassName;
      } else {
        return "far fa-file" + otherClassName;
      }
    }
  }, [file]);
  var label = React.useMemo(function () {
    if (file == null) {
      return "Choisisez une fichier";
    } else {
      return file.name;
    }
  }, [file]);
  var fileDetail = React.useMemo(function () {
    if (file == null) {
      return "Le détail du fichier apparaitre ici une fois qu'une fichier est sélectionné";
    } else {
      var name = "";
      var ext = __.getFileExtension(file.name);
      if (XSettings.filesFormats.indexOf(ext) != -1) {
        name = XSettings.fileFormatToName[ext];
      } else {
        name = "Fichier inconnu";
      }
      return name + " | " + __.byteToHuman(file.size);
    }
  }, [file]);
  var reset = function reset() {
    setDescription("");
    setFile(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "xwi95per x-center xmato20 new-file-box x-bd-top x-bd-thin x-bd-bottom"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi17 xfowebo"
  }, "Nouveau fichier"), /*#__PURE__*/React.createElement("div", {
    className: "xdigr xmato20 upload-new-file-form xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: select,
    className: "x-square-100 x-pointer x-child-center x-deep-shadow xbora30"
  }, /*#__PURE__*/React.createElement("i", {
    className: getFileIcon
  })), /*#__PURE__*/React.createElement("div", {
    className: "new-file-des"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-low-emphasis xmato2 xlihe2"
  }, fileDetail), /*#__PURE__*/React.createElement("textarea", {
    name: "",
    value: description,
    onChange: handleDes,
    className: "xmato10 xlihe2 xfowebo x-low-emphasis",
    placeholder: "Ecrire un description d'une fichier..."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cancel-or-upload xmato20 xdifl"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: cancel,
    className: "xhe40 xwi100 x-child-center x-pointer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "x-low-emphasis xfowebo"
  }, "Annuler")), /*#__PURE__*/React.createElement(XButton, {
    br: 30,
    onClickFunc: upload,
    disabled: disabled
  }, "Upload"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    id: "file-input",
    onChange: handleChange,
    ref: input
  })));
}
function Uploading(_ref31) {
  var data = _ref31.data,
    success = _ref31.success,
    projectID = _ref31.projectID;
  var link = "/project/upload_file/";
  var fileExt = React.useMemo(function () {
    var ext = __.getFileExtension(data.fileURL);
    if (XSettings.filesFormats.indexOf(ext) != -1) {
      return XSettings.fileFormatToIcon[ext];
    } else {
      return "far fa-file";
    }
  }, []);
  var getFileType = React.useMemo(function () {
    var ext = __.getFileExtension(data.file.name);
    if (XSettings.filesFormats.indexOf(ext) != -1) {
      return XSettings.fileFormatToName[ext];
    } else {
      return "Fichier inconnu";
    }
  }, []);
  var getFileSize = React.useMemo(function () {
    var s = __.byteToHuman(data.file.size);
    return s;
  }, []);
  var perc = React.useRef(null);
  var callback = function callback(load, total, pourcentage) {
    perc.current.innerHTML = "Uploading: " + pourcentage + "%";
  };
  var upload = /*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var formData, ext, s, forms, request;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            formData = new FormData();
            ext = __.getFileExtension(data.file.name);
            s = __.byteToHuman(data.file.size);
            forms = {
              size: s,
              file: data.file,
              fileType: XSettings.fileFormatToName[ext],
              project_id: projectID,
              description: data.description,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            Object.entries(forms).forEach(function (_ref33) {
              var _ref34 = _slicedToArray(_ref33, 2),
                key = _ref34[0],
                value = _ref34[1];
              formData.append(key, value);
            });
            _context12.next = 7;
            return __.layoutRequest.post(link, formData, 'json', callback);
          case 7:
            request = _context12.sent;
            if (request.isSuccess) {
              success(data.id, request.data);
            } else {
              __.xAlert("Connection erreur", "Verifier votre connection et re-éssayez plus tard.", 'danger');
            }
          case 9:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function upload() {
      return _ref32.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    setTimeout(function () {
      upload();
    }, 1000);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "each-file-display xbora35 x-deep-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head-file xdigr xwi90per xmale10 xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-80 xbora25 x-deep-shadow x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: fileExt
  })), /*#__PURE__*/React.createElement("div", {
    className: "file-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "filename xfosi15 xfowebo"
  }, __.getShortText(data.file.name, 10)), /*#__PURE__*/React.createElement("p", {
    className: "filesize-filetype xlihe2 xmato10 xfosi12 x-low-emphasis xfowebo"
  }, getFileType, " | ", getFileSize), /*#__PURE__*/React.createElement("p", {
    ref: perc,
    className: "xmato10 xfowebo xfosi12 x-low-emphasis"
  }, "..."))), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xmato20 xmari10 xmale15"
  }, __.getShortText(data.description, 25)), /*#__PURE__*/React.createElement("p", {
    className: "xmabo10 xmato7 xmari10 xmale15 xfosi11"
  }, "Upload\xE9 par ", /*#__PURE__*/React.createElement("strong", null, "Vous")), /*#__PURE__*/React.createElement("div", {
    className: "option-file xmato20 xdigr xwi90per x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xhe50 xbora30 x-child-center x-pointer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "xfosi13 x-co_wh xfowebo"
  }, "...")), /*#__PURE__*/React.createElement("div", {
    className: "x-circle-50 x-child-center x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-ellipsis-h"
  }))));
}
function Uploaded(_ref35) {
  var data = _ref35.data,
    updateMe = _ref35.updateMe,
    auth_user = _ref35.auth_user,
    deleteFile = _ref35.deleteFile;
  var fileExt = React.useMemo(function () {
    var ext = __.getFileExtension(data.fileURL);
    if (XSettings.filesFormats.indexOf(ext) != -1) {
      return XSettings.fileFormatToIcon[ext];
    } else {
      return "far fa-file";
    }
  }, []);
  var getFileType = React.useMemo(function () {
    var ext = __.getFileExtension(data.fileURL);
    if (XSettings.filesFormats.indexOf(ext) != -1) {
      return XSettings.fileFormatToName[ext];
    } else {
      return "Fichier inconnu";
    }
  }, []);
  var seeDetail = function seeDetail() {
    detailedFileDOM.style.display = "flex";
    var idF = "file-detailed-id-" + data.id;
    if (ALL_FILE_OPENED_ID.indexOf(idF) != -1) {
      ALL_FILE_OPENED.forEach(function (fi) {
        if (fi.id == idF) {
          fi.style.display = "block";
        } else {
          fi.style.display = "none";
        }
      });
    } else {
      var newDetailDOM = __.createElement("div", idF, "container-file-detail xbora20");
      detailedFileDOM.appendChild(newDetailDOM);
      ALL_FILE_OPENED.push(newDetailDOM);
      ALL_FILE_OPENED_ID.push(idF);
      var newDetail = ReactDOM.createRoot(newDetailDOM);
      newDetail.render(/*#__PURE__*/React.createElement(VisualiseFileDetail, {
        data: data,
        auth_user: auth_user,
        updateMe: updateMe,
        deleteFile: deleteFile
      }));
      ALL_FILE_OPENED.forEach(function (n) {
        if (n.id == idF) {
          n.style.display = "block";
        } else {
          n.style.display = "none";
        }
      });
    }
  };
  var domToDownload = React.useRef(null);
  var downloadFile = function downloadFile() {
    domToDownload.current.click();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "each-file-display xbora35 x-deep-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head-file xdigr xwi90per xmale10 xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-80 xbora25 x-deep-shadow x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: fileExt
  })), /*#__PURE__*/React.createElement("div", {
    className: "file-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "filename xfosi15 xfowebo"
  }, __.getShortText(data.fileURL, 10)), /*#__PURE__*/React.createElement("p", {
    className: "filesize-filetype xmato10 xfosi12 x-low-emphasis xfowebo xlihe2"
  }, getFileType, " | ", data.size))), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xmato20 xmari10 xmale15"
  }, __.getShortText(data.description, 25)), /*#__PURE__*/React.createElement("p", {
    className: "xmabo10 xmato7 xmari10 xmale15 xfosi11"
  }, "Upload\xE9 par ", /*#__PURE__*/React.createElement("strong", null, data.user.lastName, " ", data.user.firstName)), /*#__PURE__*/React.createElement("a", {
    href: data.realFileURL,
    className: "xop0 xwi0 xhe0",
    ref: domToDownload,
    download: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "option-file xmato20 xdigr xwi90per x-center"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: seeDetail,
    className: "xhe50 xbora30 x-child-center x-pointer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "xfosi13 x-co_wh xfowebo"
  }, "Voir plus")), /*#__PURE__*/React.createElement("div", {
    className: "x-circle-50 x-child-center x-pointer",
    onClick: downloadFile
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-arrow-down"
  }))));
}
function ProjectNotesComponent(_ref36) {
  var id = _ref36.id,
    title = _ref36.title,
    des = _ref36.des,
    data = _ref36.data,
    personal = _ref36.personal,
    auth_user = _ref36.auth_user;
  var _React$useState61 = React.useState("create-note-id-" + id),
    _React$useState62 = _slicedToArray(_React$useState61, 2),
    projectID = _React$useState62[0],
    setProjectID = _React$useState62[1];
  var _React$useState63 = React.useState(data),
    _React$useState64 = _slicedToArray(_React$useState63, 2),
    allNote = _React$useState64[0],
    setAllNote = _React$useState64[1];
  var save = function save(data_note) {
    setAllNote(function (prev) {
      return [].concat(_toConsumableArray(prev), [data_note]);
    });
  };
  var create = function create() {
    createNoteBoxDOM.style.display = "flex";
    if (ALL_CREATE_NOTE_BOX_ID.indexOf(projectID) != -1) {
      ALL_CREATE_NOTE_BOX.forEach(function (c) {
        if (c.id == projectID) {
          c.style.display = "block";
        } else {
          c.style.display = "none";
        }
      });
    } else {
      var newBox = __.createElement("div", projectID, "container-new-note xpore xbora30 xovhi");
      createNoteBoxDOM.appendChild(newBox);
      ALL_CREATE_NOTE_BOX_ID.push(projectID);
      ALL_CREATE_NOTE_BOX.push(newBox);
      var box = ReactDOM.createRoot(newBox);
      box.render(/*#__PURE__*/React.createElement(CreateNote, {
        save: save,
        projectID: id,
        personal: personal,
        auth_user: auth_user
      }));
      ALL_CREATE_NOTE_BOX.forEach(function (n) {
        if (n.id == projectID) {
          n.style.display = "block";
        } else {
          n.style.display = "none";
        }
      });
    }
  };
  var getContent = React.useMemo(function () {
    if (allNote.length == 0) {
      return /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xtealce x-low-emphasis xmato50"
      }, "Aucune note jusqu'a maintenant");
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "all-notes xdigr xwi95per x-center"
      }, allNote.map(function (note) {
        return /*#__PURE__*/React.createElement(EachNote, {
          key: note.id,
          data: note,
          auth_user: auth_user,
          personal: personal
        });
      }));
    }
  }, [allNote]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xmato20 xfowebo"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato5 xlihe4 xfosi12"
  }, des), /*#__PURE__*/React.createElement("div", {
    onClick: create,
    className: "btn-new-note x-pointer xdifl xalitce xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-70 xbora25 dashed x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  })), /*#__PURE__*/React.createElement("div", {
    className: "xmale20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "Cr\xE9er une note"))), /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmato20 xmabo20"
  }, "Tous les notes enregistrer (", allNote.length, ")"), getContent);
}
var ProjectNotes = React.memo(ProjectNotesComponent);
function EachNote(_ref37) {
  var data = _ref37.data,
    auth_user = _ref37.auth_user,
    personal = _ref37.personal;
  var _React$useState65 = React.useState(data),
    _React$useState66 = _slicedToArray(_React$useState65, 2),
    noteData = _React$useState66[0],
    setNoteData = _React$useState66[1];
  var getTitle = React.useMemo(function () {
    if (noteData.title.trim().length == 0) {
      return /*#__PURE__*/React.createElement("p", {
        className: "title-note xfosi20 xfowebo xmale15 x-low-emphasis xfostit"
      }, "Pas de titre");
    } else {
      return /*#__PURE__*/React.createElement("p", {
        className: "title-note xfosi20 xfowebo xmale15"
      }, __.getShortText(noteData.title, 15));
    }
  }, [noteData]);
  var change = function change(title, description) {
    setNoteData(function () {
      return _objectSpread(_objectSpread({}, noteData), {}, {
        title: title,
        content: description
      });
    });
  };
  var edit = function edit() {
    var noteID = "edit-note-id-" + noteData.id;
    editNoteBoxDOM.style.display = "flex";
    if (ALL_EDIT_NOTE_BOX_ID.indexOf(noteID) != -1) {
      ALL_EDIT_NOTE_BOX.forEach(function (c) {
        if (c.id == noteID) {
          c.style.display = "block";
        } else {
          c.style.display = "none";
        }
      });
    } else {
      var newBox = __.createElement("div", noteID, "container-new-note xpore xbora30 xovhi");
      editNoteBoxDOM.appendChild(newBox);
      ALL_EDIT_NOTE_BOX_ID.push(noteID);
      ALL_EDIT_NOTE_BOX.push(newBox);
      var box = ReactDOM.createRoot(newBox);
      box.render(/*#__PURE__*/React.createElement(EditNote, {
        save: change,
        data: data,
        auth_user: auth_user,
        personal: personal
      }));
      ALL_EDIT_NOTE_BOX.forEach(function (n) {
        if (n.id == noteID) {
          n.style.display = "block";
        } else {
          n.style.display = "none";
        }
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "each-note xbora5 x-deep-shadow",
    onClick: edit
  }, getTitle, /*#__PURE__*/React.createElement("p", {
    className: "des-note xmato10 xfosi13 xmale15 xmari15"
  }, __.getShortText(noteData.content, 30)), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xmato10 xmale15"
  }, "Par ", /*#__PURE__*/React.createElement("strong", null, noteData.user.lastName, " ", noteData.user.firstName)), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato3 xmale15 xfosi10"
  }, getFormatDateTime(noteData.date)));
}
function CreateNote(_ref38) {
  var save = _ref38.save,
    projectID = _ref38.projectID,
    personal = _ref38.personal;
  var style = {
    width: "100%"
  };
  var _React$useState67 = React.useState(false),
    _React$useState68 = _slicedToArray(_React$useState67, 2),
    load = _React$useState68[0],
    setLoad = _React$useState68[1];
  var _React$useState69 = React.useState({
      title: "",
      content: "",
      csrfmiddlewaretoken: PAGE_TOKEN,
      project_id: projectID
    }),
    _React$useState70 = _slicedToArray(_React$useState69, 2),
    values = _React$useState70[0],
    setValues = _React$useState70[1];
  var handleContent = function handleContent(e) {
    setValues(function () {
      return _objectSpread(_objectSpread({}, values), {}, {
        content: e.target.value
      });
    });
  };
  var handleTitle = function handleTitle(e) {
    setValues(function () {
      return _objectSpread(_objectSpread({}, values), {}, {
        title: e.target.value
      });
    });
  };
  var close = function close() {
    createNoteBoxDOM.style.display = "none";
  };
  var disabled = React.useMemo(function () {
    if (values.content.trim().length == 0) {
      return true;
    } else {
      return false;
    }
  }, [values]);
  var request = /*#__PURE__*/function () {
    var _ref39 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var url, formData, req;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            url = '';
            if (personal) {
              url = '/personal/notes/';
            } else {
              url = '/project/notes/';
            }
            formData = new FormData();
            Object.entries(values).forEach(function (_ref40) {
              var _ref41 = _slicedToArray(_ref40, 2),
                key = _ref41[0],
                value = _ref41[1];
              formData.append(key, value);
            });
            _context13.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context13.sent;
            if (req.isSuccess) {
              save(req.data);
              createNoteBoxDOM.style.display = "none";
              setLoad(false);
              setValues(function () {
                return _objectSpread(_objectSpread({}, values), {}, {
                  title: "",
                  content: ""
                });
              });
            }
          case 8:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return function request() {
      return _ref39.apply(this, arguments);
    };
  }();
  var submit = function submit() {
    setLoad(true);
    request();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "xpoab xhe50 xto5 xle15 xri5 xdigr header-note"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: values.title,
    onChange: handleTitle,
    placeholder: "Titre",
    className: "xfosi17 xfowebo"
  }), /*#__PURE__*/React.createElement("div", {
    onClick: close,
    className: "x-pointer x-circle-50 x-child-center x-deep-shadow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  }))), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Write note",
    onChange: handleContent,
    value: values.content,
    className: "xpoab xto60 xwi94per xbo60"
  }), /*#__PURE__*/React.createElement("div", {
    className: "save-note xpoab xbo10 xle10 xri10"
  }, /*#__PURE__*/React.createElement(XButtonLoadable, {
    br: 30,
    onClickFunc: submit,
    load: load,
    disabled: disabled,
    style: style
  }, "Cr\xE9er")));
}
function EditNote(_ref42) {
  var save = _ref42.save,
    data = _ref42.data,
    auth_user = _ref42.auth_user,
    personal = _ref42.personal;
  var style = {
    width: "100%"
  };
  var _React$useState71 = React.useState(false),
    _React$useState72 = _slicedToArray(_React$useState71, 2),
    load = _React$useState72[0],
    setLoad = _React$useState72[1];
  var _React$useState73 = React.useState(data),
    _React$useState74 = _slicedToArray(_React$useState73, 2),
    values = _React$useState74[0],
    setValues = _React$useState74[1];
  var handleContent = function handleContent(e) {
    setValues(function () {
      return _objectSpread(_objectSpread({}, values), {}, {
        content: e.target.value
      });
    });
  };
  var handleTitle = function handleTitle(e) {
    setValues(function () {
      return _objectSpread(_objectSpread({}, values), {}, {
        title: e.target.value
      });
    });
  };
  var close = function close() {
    editNoteBoxDOM.style.display = "none";
  };
  var disabled = React.useMemo(function () {
    if (values.user.id == auth_user.id) {
      if (values.content.trim().length == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }, [values]);
  var editRequest = /*#__PURE__*/function () {
    var _ref43 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var url, to_send, formData, req;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            url = '/edit_note/';
            to_send = {
              csrfmiddlewaretoken: PAGE_TOKEN,
              id: values.id,
              title: values.title,
              personal: personal,
              content: values.content
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref44) {
              var _ref45 = _slicedToArray(_ref44, 2),
                key = _ref45[0],
                val = _ref45[1];
              formData.append(key, val);
            });
            _context14.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context14.sent;
            if (req.isSuccess) {
              __.xAlert('Modification terminé', 'Modification de ce note est terminé avec succées.', 'success');
              save(values.title, values.content);
              editNoteBoxDOM.style.display = "none";
            } else {
              __.xAlert('Connection erreur', 'Oupps, verifiez votre connection et essayez plus tard.', 'danger');
            }
            setLoad(false);
          case 9:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return function editRequest() {
      return _ref43.apply(this, arguments);
    };
  }();
  var submit = function submit() {
    setLoad(true);
    editRequest();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "xpoab xhe50 xto5 xle15 xri5 xdigr header-note"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: values.title,
    onChange: handleTitle,
    placeholder: "Titre",
    className: "xfosi17 xfowebo"
  }), /*#__PURE__*/React.createElement("div", {
    onClick: close,
    className: "x-pointer x-circle-50 x-child-center x-deep-shadow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  }))), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Write note",
    onChange: handleContent,
    value: values.content,
    className: "xpoab xto60 xwi94per xbo60"
  }), /*#__PURE__*/React.createElement("div", {
    className: "save-note xpoab xbo10 xle10 xri10"
  }, /*#__PURE__*/React.createElement(XButtonLoadable, {
    br: 30,
    onClickFunc: submit,
    load: load,
    disabled: disabled,
    style: style
  }, "Sauvegarder")));
}
function TableRows(_ref46) {
  var data = _ref46.data,
    auth_user = _ref46.auth_user;
  var dataDerive = React.useMemo(function () {
    var d = [];
    data.forEach(function (project) {
      var pro = {};
      pro.name = project.name;
      pro.id = project.id;
      pro.tasks = [];
      project.sections.forEach(function (section) {
        section.tasks.forEach(function (task) {
          if (task.user.id == auth_user.id) {
            pro.tasks.push({
              id: task.id,
              name: task.name,
              description: task.description,
              endDate: task.endDate,
              startDate: task.startDate,
              deadline: task.deadline,
              status: task.status
            });
          }
        });
      });
      d.push(pro);
    });
    return d;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, dataDerive.map(function (p) {
    return /*#__PURE__*/React.createElement(EachTableTaskRow, {
      key: p.id,
      tasks: p.tasks,
      projectName: p.name
    });
  }));
}
function EachTableTaskRow(_ref47) {
  var tasks = _ref47.tasks,
    projectName = _ref47.projectName;
  var style = {
    background: XSettings.getColorFromChar[projectName[0].toLowerCase()]
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, tasks.map(function (task, key) {
    return /*#__PURE__*/React.createElement("div", {
      className: "each-row x-bd-bottom x-bd-thin xdifl",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-name-value xwi290 each-value xhe40 xdifl xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "xmale10 x-circle-15 x-child-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-check"
    })), /*#__PURE__*/React.createElement("p", null, task.name)), /*#__PURE__*/React.createElement("div", {
      className: "due-date-value xwi200 each-value xhe40 xdifl xdifl xalitce"
    }, /*#__PURE__*/React.createElement("p", null, task.startDate, " ", task.endDate)), /*#__PURE__*/React.createElement("div", {
      className: "project-value xwi170 each-value xhe40 xdifl xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "project-of-task xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      style: style,
      className: "x-square-15 xbora5 xmale5"
    }), /*#__PURE__*/React.createElement("p", {
      className: "xfowebo xmato2"
    }, __.getShortText(projectName, 15)))), /*#__PURE__*/React.createElement("div", {
      className: "colaborateur-value each-value xwi90 xhe40 xdifl xalitce"
    }, /*#__PURE__*/React.createElement("p", null, task.deadline, " jour", task.deadline > 1 ? 's' : '')), /*#__PURE__*/React.createElement("div", {
      className: "colaborateur-value each-value xwi100 xhe40 xdifl xalitce"
    }, /*#__PURE__*/React.createElement("p", null, task.status, " ")), /*#__PURE__*/React.createElement("div", {
      className: "colaborateur-value each-value xhe40 xdifl xalitce"
    }, /*#__PURE__*/React.createElement("p", null, task.description)));
  }));
}
function MyTask(_ref48) {
  var projects = _ref48.projects,
    user = _ref48.user;
  var _React$useState75 = React.useState(projects),
    _React$useState76 = _slicedToArray(_React$useState75, 2),
    myData = _React$useState76[0],
    setMyData = _React$useState76[1];
  var addTask = function addTask() {
    openAddNewTask();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "my-tasks-header xalitce xdifl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-profile-pic x-square-45 xmari20"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    width: 45,
    fontSize: 14,
    name: user.lastName,
    imageURL: user.photo
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "xfosi20"
  }, "Mes t\xE2ches dans les project"))), /*#__PURE__*/React.createElement("div", {
    className: "menu-of-task xdifl xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "each-menu-of-task"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-list-ul xmari5"
  }), /*#__PURE__*/React.createElement("span", null, "Liste"))), /*#__PURE__*/React.createElement("div", {
    className: "tableaux xwi100per xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-header x-bd-top x-bd-bottom x-bd-medium xdifl xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-name-header xwi290 xhe40 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", null, "Nom de la t\xE2che")), /*#__PURE__*/React.createElement("div", {
    className: "due-date-header xwi200 xhe40 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", null, "date d'\xE9ch\xE9ance")), /*#__PURE__*/React.createElement("div", {
    className: "project-header xwi170 xhe40 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", null, "Projet")), /*#__PURE__*/React.createElement("div", {
    className: "colaborateur-header xwi90 xhe40 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", null, "Deadline")), /*#__PURE__*/React.createElement("div", {
    className: "colaborateur-header xwi100 xhe40 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", null, "Status")), /*#__PURE__*/React.createElement("div", {
    className: "colaborateur-header xwi100 xhe40 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", null, "Description"))), /*#__PURE__*/React.createElement("div", {
    className: "table-values"
  }, myData.length == 0 ? /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato50 xfosi12 xtealce xfowebo"
  }, "Vous n'avez aucune t\xE2che pour le moment") : /*#__PURE__*/React.createElement(TableRows, {
    data: myData,
    auth_user: user
  }))));
}
function ProjectListed(_ref49) {
  var user = _ref49.user;
  var _React$useState77 = React.useState(null),
    _React$useState78 = _slicedToArray(_React$useState77, 2),
    data = _React$useState78[0],
    setData = _React$useState78[1];
  var _React$useState79 = React.useState(true),
    _React$useState80 = _slicedToArray(_React$useState79, 2),
    load = _React$useState80[0],
    setLoad = _React$useState80[1];
  var socket = null;
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/project_list/');
    socket.onclose = function (e) {};
    socket.onopen = function (e) {};
    socket.onmessage = function (e) {
      var message = JSON.parse(e.data);
      if (Array.isArray(message)) {
        setLoad(false);
        setData(message);
      } else {
        if (message.action == 'new') {
          setData(function (recent) {
            return [].concat(_toConsumableArray(recent), [message]);
          });
        } else if (message.action == 'delete') {
          setData(function (recent) {
            var prev = _toConsumableArray(recent);
            var to_return = prev.filter(function (p) {
              return p.id != message.id;
            });
            return to_return;
          });
          if (message.deleter_id != user.id) {
            switchMenu('home');
            var home_dim = __.dimension.getDimension("#slide-to-home");
            slideShow.style.left = home_dim.ol + 'px';
            slideShow.style.top = home_dim.ot + 'px';
            focusSlideFunc('home');
            mainPageLoadDOM.style.display = 'none';
          }
          reload_me.click();
        }
      }
    };
    return function () {
      return socket.close();
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, load ? null : data.map(function (project) {
    return /*#__PURE__*/React.createElement(EachProjectOnSideBar, {
      id: project.id,
      data: project,
      key: project.id,
      user: user
    }, project.name);
  }));
}
function CreateTaskOnProject(_ref50) {
  var addNow = _ref50.addNow,
    cancel = _ref50.cancel,
    sectionID = _ref50.sectionID;
  var _React$useState81 = React.useState(false),
    _React$useState82 = _slicedToArray(_React$useState81, 2),
    load = _React$useState82[0],
    setLoad = _React$useState82[1];
  var _React$useState83 = React.useState({
      name: "",
      description: "",
      id: sectionID,
      startDate: getTaskDate(new Date()),
      endDate: getTaskDate(new Date()),
      csrfmiddlewaretoken: PAGE_TOKEN
    }),
    _React$useState84 = _slicedToArray(_React$useState83, 2),
    values = _React$useState84[0],
    setValues = _React$useState84[1];
  var handleChangeName = function handleChangeName(e) {
    setValues(function (prec) {
      return _objectSpread(_objectSpread({}, prec), {}, {
        name: e.target.value
      });
    });
  };
  var handleDescription = function handleDescription(e) {
    setValues(function (prec) {
      return _objectSpread(_objectSpread({}, prec), {}, {
        description: e.target.value
      });
    });
  };
  var handleStart = function handleStart(e) {
    setValues(function (prec) {
      return _objectSpread(_objectSpread({}, prec), {}, {
        startDate: e.target.value
      });
    });
  };
  var handleFin = function handleFin(e) {
    setValues(function (prec) {
      return _objectSpread(_objectSpread({}, prec), {}, {
        endDate: e.target.value
      });
    });
  };
  var getDeadline = React.useMemo(function () {
    var end = new Date(values.endDate).getTime();
    var begin = new Date(values.startDate).getTime();
    var diffInMIll = end - begin;
    if (diffInMIll < 0) {
      return false;
    } else {
      diffInMIll = Math.abs(diffInMIll);
      var diff = Math.floor(diffInMIll / (1000 * 60 * 60 * 24));
      return diff;
    }
  }, [values.endDate, values.startDate, values]);
  var getStatus = React.useMemo(function () {
    var today = new Date();
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    today = new Date(today).getTime();
    var begin = new Date(values.startDate).getTime();
    if (today >= begin) {
      return 'En cours';
    } else {
      return 'En attente';
    }
  }, [values.endDate, values.startDate, values]);
  var disabled = React.useMemo(function () {
    if (values.name.trim().length > 0 && values.description.trim().length > 0 && values.startDate && values.endDate && getDeadline) {
      return false;
    }
    return true;
  }, [values]);
  var request = /*#__PURE__*/function () {
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var url, formData, req;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            url = '/add_task/';
            formData = new FormData();
            formData.append('deadline', getDeadline);
            formData.append('status', getStatus);
            Object.entries(values).forEach(function (_ref52) {
              var _ref53 = _slicedToArray(_ref52, 2),
                key = _ref53[0],
                value = _ref53[1];
              formData.append(key, value);
            });
            _context15.next = 7;
            return __.layoutRequest.post(url, formData, 'json');
          case 7:
            req = _context15.sent;
            if (req.isSuccess) {
              addNow(sectionID, req.data);
              setLoad(false);
              cancel();
            } else {
              __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
              setLoad(false);
            }
          case 9:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    return function request() {
      return _ref51.apply(this, arguments);
    };
  }();
  var save = function save() {
    setLoad(true);
    request();
  };
  var style = {
    width: "170px"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "add-task-in-section xwi86per x-center xbora10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-task xdigr xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-30 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check"
  })), /*#__PURE__*/React.createElement("input", {
    value: values.name,
    onChange: handleChangeName,
    className: "xfosi14 xfowebo",
    placeholder: "\xC9crire un nom de t\xE2che"
  })), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Description",
    onChange: handleDescription,
    value: values.description,
    className: "xmato20 xlihe3 xfowebo xwi90per x-center xhe70"
  }), /*#__PURE__*/React.createElement("div", {
    className: "xdigr date-begin-and-end xmabo20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xbora5"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    onChange: handleStart,
    value: values.startDate
  })), /*#__PURE__*/React.createElement("div", {
    className: "xbora5"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    onChange: handleFin,
    value: values.endDate
  }))), /*#__PURE__*/React.createElement("div", {
    className: "xdigr xalitce save-or-cancel-add-task"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-pointer"
  }, /*#__PURE__*/React.createElement("button", null, "Annuler")), /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: style,
    load: load,
    onClickFunc: save,
    disabled: disabled,
    br: 30
  }, "Ajouter mon t\xE2che")));
}
function ProjectSection(_ref54) {
  var children = _ref54.children,
    admin = _ref54.admin,
    tasks = _ref54.tasks,
    sectionID = _ref54.sectionID,
    markOneTaskAsDone = _ref54.markOneTaskAsDone,
    projectName = _ref54.projectName,
    addNow = _ref54.addNow,
    user = _ref54.user,
    deleted = _ref54.deleted,
    markDone = _ref54.markDone,
    projectID = _ref54.projectID,
    duplicateTask = _ref54.duplicateTask,
    deleteTask = _ref54.deleteTask;
  var _React$useState85 = React.useState(false),
    _React$useState86 = _slicedToArray(_React$useState85, 2),
    displayAddNewTask = _React$useState86[0],
    setDisplayAddNewTask = _React$useState86[1];
  var add = function add() {
    setDisplayAddNewTask(function (c) {
      return !c;
    });
  };
  var showOption = function showOption() {
    if (optionShowed) {
      option.current.style.display = 'none';
    } else {
      option.current.style.display = 'block';
    }
    setOptionShowed(function (r) {
      return !r;
    });
  };
  var deleteSection = function deleteSection() {
    if (admin.id == user.id) {
      requestDelete();
    } else {
      __.xAlert('Suppression non autorisé', "Seule l'administrateur peut supprimer les sections dans un projet", 'info');
    }
  };
  var requestDelete = /*#__PURE__*/function () {
    var _ref55 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var url, to_send, formData, req;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            url = '/delete_section/';
            to_send = {
              sectionID: sectionID,
              projectID: projectID,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref56) {
              var _ref57 = _slicedToArray(_ref56, 2),
                key = _ref57[0],
                value = _ref57[1];
              formData.append(key, value);
            });
            _context16.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context16.sent;
            if (req.isSuccess) {
              deleted(sectionID);
              showOption();
            } else {
              __.xAlert("Connection erreur", 'Verifier votre connection et re-éssayez plus tard.', 'danger');
            }
          case 8:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }));
    return function requestDelete() {
      return _ref55.apply(this, arguments);
    };
  }();
  var requestMarkDone = /*#__PURE__*/function () {
    var _ref58 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var url, to_send, formData, req;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            url = '/mark_all_task_done/';
            to_send = {
              sectionID: sectionID,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref59) {
              var _ref60 = _slicedToArray(_ref59, 2),
                key = _ref60[0],
                value = _ref60[1];
              formData.append(key, value);
            });
            _context17.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context17.sent;
            if (req.isSuccess) {
              markDone(sectionID);
              showOption();
            } else {
              __.xAlert("Connection erreur", 'Verifier votre connection et re-éssayez plus tard.', 'danger');
            }
          case 8:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }));
    return function requestMarkDone() {
      return _ref58.apply(this, arguments);
    };
  }();
  var markAllTaksAsDone = function markAllTaksAsDone() {
    if (admin.id == user.id) {
      requestMarkDone();
    } else {
      __.xAlert('Accées non autorisé', "Seule l'administrateur peut faire cette action.", 'info');
    }
  };
  var option = React.useRef(null);
  var _React$useState87 = React.useState(false),
    _React$useState88 = _slicedToArray(_React$useState87, 2),
    optionShowed = _React$useState88[0],
    setOptionShowed = _React$useState88[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "each-section x-deep-shadow xpore"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-title xdigr xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi18 xfowebo xmari20 x-low-emphasis"
  }, children), /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo"
  }, tasks.length)), /*#__PURE__*/React.createElement("div", {
    className: "xdifl xjucoflen"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: add,
    className: "x-circle-40 x-pointer x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: displayAddNewTask ? "fa fa-times" : "fa fa-plus"
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-circle-40 x-pointer xmale10 x-child-center",
    onClick: showOption
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-ellipsis-h"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "section-option xzin3 xpoab xto70 xri20 x-deep-shadow xbora10",
    ref: option
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-section-item xdigr",
    onClick: markAllTaksAsDone
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-check-circle"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Marquer les t\xE2ches comme termin\xE9es"))), /*#__PURE__*/React.createElement("div", {
    className: "settings-section-item xdigr",
    onClick: deleteSection
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-trash-alt"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Supprimer cette section"))), /*#__PURE__*/React.createElement("div", {
    className: "settings-section-item xdigr",
    onClick: showOption
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Fermer")))), /*#__PURE__*/React.createElement("div", {
    className: "display-each-task xmato20"
  }, displayAddNewTask ? /*#__PURE__*/React.createElement(CreateTaskOnProject, {
    sectionID: sectionID,
    addNow: addNow,
    cancel: add
  }) : null, tasks.map(function (task) {
    return /*#__PURE__*/React.createElement(EachTaskOnProjectVisualisation, {
      key: task.id,
      sectionName: children,
      projectName: projectName,
      data: task,
      user: user,
      deleteTask: deleteTask,
      markOneTaskAsDone: markOneTaskAsDone,
      duplicateTask: duplicateTask,
      sectionID: sectionID
    });
  }), /*#__PURE__*/React.createElement(AddTaskIfEmpty, {
    onClick: add,
    cancel: displayAddNewTask
  })));
}
function AddTaskIfEmpty(_ref61) {
  var onClick = _ref61.onClick,
    cancel = _ref61.cancel;
  var click = function click() {
    onClick();
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: click,
    className: "add-if-empty-task x-pointer xhe100 x-child-center xwi100per"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-40 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus xfosi20"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 x-low-emphasis"
  }, cancel ? "Annuler l'ajout" : 'Ajouter une tâche'));
}
var ALL_TASK_OPTION_ID = [];
var ALL_TASK_OPTION = [];
var ALL_TASK_VISUAL_ID = [];
var ALL_TASK_VISUAL = [];
function EachTaskOnProjectVisualisation(_ref62) {
  var data = _ref62.data,
    sectionName = _ref62.sectionName,
    projectName = _ref62.projectName,
    user = _ref62.user,
    deleteTask = _ref62.deleteTask,
    duplicateTask = _ref62.duplicateTask,
    sectionID = _ref62.sectionID,
    markOneTaskAsDone = _ref62.markOneTaskAsDone;
  var _React$useState89 = React.useState(false),
    _React$useState90 = _slicedToArray(_React$useState89, 2),
    showOption = _React$useState90[0],
    setShowOption = _React$useState90[1];
  var _React$useState91 = React.useState(data),
    _React$useState92 = _slicedToArray(_React$useState91, 2),
    taskData = _React$useState92[0],
    setTaskData = _React$useState92[1];
  var titleFunc = function titleFunc(val) {
    setTaskData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        name: val
      });
    });
  };
  var desFunc = function desFunc(val) {
    setTaskData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        description: val
      });
    });
  };
  var statusFunc = function statusFunc(val) {
    setTaskData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        status: val
      });
    });
  };
  var syncComment = function syncComment(val) {
    setTaskData(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        comments: val
      });
    });
  };
  var deleteThisTask = function deleteThisTask() {
    deleteTask(taskData.id, sectionID);
    close();
  };
  var duplicateThisTask = function duplicateThisTask() {
    duplicateTask(taskData.id, sectionID);
    close();
  };
  var markThisTaskAsDone = function markThisTaskAsDone() {
    markOneTaskAsDone(taskData.id, sectionID);
    setTaskData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        status: 'Terminé'
      });
    });
    close();
  };
  var rightClick = function rightClick(e) {
    e.preventDefault();
    allTaskOtpionDOM.style.display = "flex";
    var id = "tt-task-" + taskData.id;
    if (ALL_TASK_OPTION_ID.indexOf(id) != -1) {
      ALL_TASK_OPTION.forEach(function (box) {
        if (box.id == id) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    } else {
      var newTaskOptionBox = __.createElement("div", id, "task-options xbora20 xpabo15");
      allTaskOtpionDOM.appendChild(newTaskOptionBox);
      ALL_TASK_OPTION_ID.push(id);
      ALL_TASK_OPTION.push(newTaskOptionBox);
      var root = ReactDOM.createRoot(newTaskOptionBox);
      root.render(/*#__PURE__*/React.createElement(TaskOption, {
        close: close,
        open: leftClick,
        del: deleteThisTask,
        duplicate: duplicateThisTask,
        markAsDone: markThisTaskAsDone
      }));
      ALL_TASK_OPTION.forEach(function (box) {
        if (box.id == id) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    }
  };
  var leftClick = function leftClick() {
    allTaskVisualDOM.style.display = "flex";
    var id = "task-vis-id-" + taskData.id;
    if (ALL_TASK_VISUAL_ID.indexOf(id) != -1) {
      ALL_TASK_VISUAL.forEach(function (box) {
        if (box.id == id) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    } else {
      var newTaskVisBox = __.createElement("div", id, "container-task-visual xpore x-deep-shadow xbora20");
      allTaskVisualDOM.appendChild(newTaskVisBox);
      ALL_TASK_VISUAL_ID.push(id);
      ALL_TASK_VISUAL.push(newTaskVisBox);
      var root = ReactDOM.createRoot(newTaskVisBox);
      root.render(/*#__PURE__*/React.createElement(TaskVisualize, {
        projectName: projectName,
        editTitleFunc: titleFunc,
        auth_user: user,
        editStatusFunc: statusFunc,
        changeCommentsFunc: syncComment,
        editDesFunc: desFunc,
        sectionName: sectionName,
        close: closeVis,
        ndata: taskData
      }));
      ALL_TASK_VISUAL.forEach(function (box) {
        if (box.id == id) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    }
  };
  var close = function close() {
    allTaskOtpionDOM.style.display = "none";
  };
  var closeVis = function closeVis() {
    allTaskVisualDOM.style.display = "none";
  };
  var getStatusClass = React.useMemo(function () {
    ;
    if (taskData.status.trim().toLowerCase() == 'en attente') {
      return 'level task-en-attente';
    } else if (taskData.status.trim().toLowerCase() == "en cours") {
      return "level task-en-cours";
    } else if (taskData.status.trim().toLowerCase() == "terminé") {
      return "level task-termine";
    } else {
      return "level arret";
    }
  }, [taskData]);
  var getUserName = React.useMemo(function () {
    return data.user.lastName + " " + data.user.firstName;
  });
  return /*#__PURE__*/React.createElement("div", {
    onContextMenu: rightClick,
    onClick: leftClick,
    className: "each-task-to-display xovhi xpore xwi87per x-center xbora10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-task-name xalitce xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-30 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo"
  }, taskData.name)), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xmato20"
  }, taskData.description), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi10 xmato10"
  }, taskData.comments.length, " commentaire", taskData.comments.length > 1 ? "s" : ""), /*#__PURE__*/React.createElement("div", {
    className: "task-status xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: getStatusClass
  }, /*#__PURE__*/React.createElement("p", null, taskData.status))), /*#__PURE__*/React.createElement("div", {
    className: "people-project xmato20 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-people"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: getUserName,
    width: 35,
    fontSize: 14,
    imageURL: data.user.photo
  })), /*#__PURE__*/React.createElement("p", {
    className: "deadline xmale20 x-low-emphasis xfosi14 xfowebo"
  }, getUserName)), /*#__PURE__*/React.createElement("p", {
    className: "xmato20 xfosi12 x-low-emphasis"
  }, getFormatDate(taskData.startDate) + " - " + getFormatDate(taskData.endDate), " ", /*#__PURE__*/React.createElement("strong", null, "(", taskData.deadline, ")")));
}
function TaskVisualize(_ref63) {
  var ndata = _ref63.ndata,
    changeCommentsFunc = _ref63.changeCommentsFunc,
    editTitleFunc = _ref63.editTitleFunc,
    editDesFunc = _ref63.editDesFunc,
    editStatusFunc = _ref63.editStatusFunc,
    projectName = _ref63.projectName,
    sectionName = _ref63.sectionName,
    close = _ref63.close,
    auth_user = _ref63.auth_user;
  var _React$useState93 = React.useState(ndata),
    _React$useState94 = _slicedToArray(_React$useState93, 2),
    data = _React$useState94[0],
    setData = _React$useState94[1];
  var _React$useState95 = React.useState(data.comments),
    _React$useState96 = _slicedToArray(_React$useState95, 2),
    comments = _React$useState96[0],
    setComments = _React$useState96[1];
  var _React$useState97 = React.useState(false),
    _React$useState98 = _slicedToArray(_React$useState97, 2),
    allowEditTitle = _React$useState98[0],
    setAllowEditTitle = _React$useState98[1];
  var _React$useState99 = React.useState(false),
    _React$useState100 = _slicedToArray(_React$useState99, 2),
    allowEditDes = _React$useState100[0],
    setAllowEditDes = _React$useState100[1];
  var getFullName = React.useMemo(function () {
    return data.user.lastName + " " + data.user.firstName;
  }, [data]);
  var _React$useState101 = React.useState(""),
    _React$useState102 = _slicedToArray(_React$useState101, 2),
    commentValue = _React$useState102[0],
    setCommentValue = _React$useState102[1];
  var _React$useState103 = React.useState(false),
    _React$useState104 = _slicedToArray(_React$useState103, 2),
    loadComment = _React$useState104[0],
    setLoadComment = _React$useState104[1];
  var getStatusClass = React.useMemo(function () {
    if (data.status.trim().toLowerCase() == 'en attente') {
      return "vis-level task-en-attente";
    } else if (data.status.trim().toLowerCase() == "en cours") {
      return "vis-level task-en-cours";
    } else if (data.status.trim().toLowerCase() == "terminé") {
      return "vis-level task-termine";
    } else {
      return "vis-level task-arret";
    }
  }, [data]);
  var btn = {
    width: "200px"
  };
  var handleStatusChange = function handleStatusChange(e) {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, {
        status: e.target.value
      });
    });
  };
  var handleNewComment = function handleNewComment(e) {
    setCommentValue(e.target.value);
  };
  var _React$useState105 = React.useState(false),
    _React$useState106 = _slicedToArray(_React$useState105, 2),
    load = _React$useState106[0],
    setLoad = _React$useState106[1];
  var disabledNewComment = React.useMemo(function () {
    if (commentValue.trim().length == 0) {
      return true;
    }
    return false;
  }, [commentValue]);
  var getOwner = React.useMemo(function () {
    if (data.user.id == auth_user.id && data.user.email == auth_user.email) {
      return true;
    } else {
      return false;
    }
  }, []);
  var requestComment = /*#__PURE__*/function () {
    var _ref64 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var url, data_to_send, formData, req;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            url = '/post_comment/';
            data_to_send = {
              csrfmiddlewaretoken: PAGE_TOKEN,
              id: data.id,
              value: commentValue
            };
            formData = new FormData();
            Object.entries(data_to_send).forEach(function (_ref65) {
              var _ref66 = _slicedToArray(_ref65, 2),
                key = _ref66[0],
                value = _ref66[1];
              formData.append(key, value);
            });
            _context18.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context18.sent;
            if (req.isSuccess) {
              setComments(function (prev) {
                return [].concat(_toConsumableArray(prev), [req.data]);
              });
              setCommentValue("");
              setLoadComment(false);
            }
          case 8:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    }));
    return function requestComment() {
      return _ref64.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    changeCommentsFunc(comments);
  }, [comments]);
  var sendNewComment = function sendNewComment() {
    setLoadComment(true);
    requestComment();
  };
  var editTitle = function editTitle() {
    if (getOwner) {
      setAllowEditTitle(true);
    }
  };
  var editDes = function editDes() {
    if (getOwner) {
      setAllowEditDes(true);
    }
  };
  var _React$useState107 = React.useState(false),
    _React$useState108 = _slicedToArray(_React$useState107, 2),
    loadChangeTitle = _React$useState108[0],
    setLoadChangeTitle = _React$useState108[1];
  var _React$useState109 = React.useState(false),
    _React$useState110 = _slicedToArray(_React$useState109, 2),
    loadChangeDes = _React$useState110[0],
    setLoadChangeDes = _React$useState110[1];
  var _React$useState111 = React.useState(data.name),
    _React$useState112 = _slicedToArray(_React$useState111, 2),
    newTitle = _React$useState112[0],
    setNewTitle = _React$useState112[1];
  var _React$useState113 = React.useState(data.description),
    _React$useState114 = _slicedToArray(_React$useState113, 2),
    newDes = _React$useState114[0],
    setNewDes = _React$useState114[1];
  var handleChangeNewTitle = function handleChangeNewTitle(e) {
    setNewTitle(e.target.value);
  };
  var handleChangeNewDes = function handleChangeNewDes(e) {
    setNewDes(e.target.value);
  };
  var request = /*#__PURE__*/function () {
    var _ref67 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(type) {
      var data_to_send, url, formData, req;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            data_to_send = null;
            formData = new FormData();
            formData.append('csrfmiddlewaretoken', PAGE_TOKEN);
            if (type == 'title') {
              url = '/update_task_name/';
              data_to_send = {
                id: data.id,
                title: newTitle
              };
            } else if (type == 'des') {
              url = '/update_task_des/';
              data_to_send = {
                id: data.id,
                des: newDes
              };
            } else if (type == "status") {
              url = '/update_task_status/';
              data_to_send = {
                id: data.id,
                status: data.status
              };
            }
            Object.entries(data_to_send).forEach(function (_ref68) {
              var _ref69 = _slicedToArray(_ref68, 2),
                key = _ref69[0],
                value = _ref69[1];
              formData.append(key, value);
            });
            _context19.next = 7;
            return __.layoutRequest.post(url, formData, 'json');
          case 7:
            req = _context19.sent;
            if (req.isSuccess) {
              if (type == 'title') {
                setLoadChangeTitle(true);
                setData(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    name: newTitle
                  });
                });
                editTitleFunc(newTitle);
                setAllowEditTitle(false);
              } else if (type == 'des') {
                setLoadChangeDes(true);
                setData(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    description: newDes
                  });
                });
                editDesFunc(newDes);
                setAllowEditDes(false);
              } else if (type == 'status') {
                setLoadStatus(true);
                editStatusFunc(data.status);
                setLoadStatus(false);
              }
            }
          case 9:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }));
    return function request(_x7) {
      return _ref67.apply(this, arguments);
    };
  }();
  var validChangeTitle = function validChangeTitle() {
    setLoadChangeTitle(true);
    request('title');
  };
  var validChangeDes = function validChangeDes() {
    setLoadChangeDes(true);
    request('des');
  };
  var closeChangeTitle = function closeChangeTitle() {
    setAllowEditTitle(false);
  };
  var closeChangeDes = function closeChangeDes() {
    setAllowEditDes(false);
  };
  var disabledTitleChange = React.useMemo(function () {
    if (newTitle.trim().length == 0) {
      return true;
    }
    return false;
  }, [newTitle]);
  var disabledDesChange = React.useMemo(function () {
    if (newDes.trim().length == 0) {
      return true;
    }
    return false;
  }, [newTitle]);
  var _React$useState115 = React.useState(false),
    _React$useState116 = _slicedToArray(_React$useState115, 2),
    loadStatus = _React$useState116[0],
    setLoadStatus = _React$useState116[1];
  var changeStatus = function changeStatus() {
    setLoadStatus(true);
    request('status');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "box-container x-fill-parent xpore xovau"
  }, /*#__PURE__*/React.createElement("div", {
    className: "change-task-title xwi90per xalitce xdigr x-center "
  }, allowEditTitle ? /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Editer le titre",
    className: "xfosi25 xfowebo",
    value: newTitle,
    onChange: handleChangeNewTitle
  }) : /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xfowebo"
  }, data.name), /*#__PURE__*/React.createElement("div", {
    onClick: editTitle,
    className: "x-circle-50 x-child-center x-pointer x-black-01"
  }, /*#__PURE__*/React.createElement("i", {
    className: getOwner ? "fa fa-pen" : "fa fa-lock"
  }))), allowEditTitle ? /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce xmato20 xwi80per"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: closeChangeTitle,
    className: "x-low-emphasis xmale20 xmari20"
  }, "Annuler"), /*#__PURE__*/React.createElement(XButtonLoadable, {
    br: 30,
    disabled: disabledTitleChange,
    onClickFunc: validChangeTitle,
    load: loadChangeTitle
  }, "Changer")) : null, /*#__PURE__*/React.createElement("div", {
    className: "xmato25 change-task-description xwi90per x-center xdigr"
  }, allowEditDes ? /*#__PURE__*/React.createElement("textarea", {
    value: newDes,
    className: "edit-task-des xlihe3",
    onChange: handleChangeNewDes
  }) : /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xlihe3 xfowebo xmato7"
  }, data.description, " "), /*#__PURE__*/React.createElement("div", {
    onClick: editDes,
    className: "x-circle-50 x-pointer x-child-center x-black-01"
  }, /*#__PURE__*/React.createElement("i", {
    className: getOwner ? "fa fa-pen" : "fa fa-lock"
  }))), allowEditDes ? /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce xmato20 xwi80per"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: closeChangeDes,
    className: "x-low-emphasis xmale20 xmari20"
  }, "Annuler"), /*#__PURE__*/React.createElement(XButtonLoadable, {
    br: 30,
    disabled: disabledDesChange,
    onClickFunc: validChangeDes,
    load: loadChangeDes
  }, "Changer")) : null, /*#__PURE__*/React.createElement("div", {
    className: "task-of-user xmale20 xmato30 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xmari20 "
  }, "T\xE2che de"), /*#__PURE__*/React.createElement(XUserProfilePicture, {
    width: 35,
    fontSize: 13,
    imageURL: data.user.photo,
    name: getFullName
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale10 xfosi15 xfowebo"
  }, getFullName)), /*#__PURE__*/React.createElement("div", {
    className: "dead-stat xmale20  xmato20 xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi13 xmari10"
  }, "[", getFormatDate(data.startDate), " - ", getFormatDate(data.endDate), "] ", /*#__PURE__*/React.createElement("strong", null, "(", data.deadline, ")")), /*#__PURE__*/React.createElement("p", {
    className: getStatusClass
  }, data.status)), getOwner ? /*#__PURE__*/React.createElement("div", {
    className: "change-status xdifl xalitce xmato20 xmale20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "Changer le status"), /*#__PURE__*/React.createElement("select", {
    value: data.status,
    onChange: handleStatusChange,
    className: "x-deep-shadow xmari10 xmale20"
  }, /*#__PURE__*/React.createElement("option", {
    value: "En attente"
  }, "En attente"), /*#__PURE__*/React.createElement("option", {
    value: "En cours"
  }, "En cours"), /*#__PURE__*/React.createElement("option", {
    value: "Arret"
  }, "Arret"), /*#__PURE__*/React.createElement("option", {
    value: "Termin\xE9"
  }, "Termin\xE9")), /*#__PURE__*/React.createElement(XButtonLoadable, {
    type: "icon",
    onClickFunc: changeStatus,
    load: loadStatus,
    icon: "fa fa-save"
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "home-pro xmato30 xmabo20 xmale20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xmabo10"
  }, "Projet: ", /*#__PURE__*/React.createElement("strong", null, projectName)), /*#__PURE__*/React.createElement("p", {
    className: "xfosi15"
  }, "Section: ", /*#__PURE__*/React.createElement("strong", null, sectionName))), /*#__PURE__*/React.createElement("div", {
    className: "xmale20 xmato20"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: commentValue,
    onChange: handleNewComment,
    className: "x-center new-comment xmabo10 xlihe4 xbora10",
    placeholder: "Commenter en tant que Niro Henderson"
  }), /*#__PURE__*/React.createElement(XButtonLoadable, {
    br: 30,
    disabled: disabledNewComment,
    load: loadComment,
    onClickFunc: sendNewComment
  }, "Commenter")), /*#__PURE__*/React.createElement("div", {
    className: " xmale20 xmato20 all-task-comment xmabo100"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo"
  }, "Tous les Commentaire"), /*#__PURE__*/React.createElement("div", {
    className: "all-comments"
  }, comments.map(function (com) {
    return /*#__PURE__*/React.createElement(EachTaskComment, {
      key: com.id,
      com: com
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "close-and-save-change xpoab xhe60 xdigr xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: close,
    className: "x-child-center xhe50 x-pointer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "x-low-emphasis xfowebo x-pointer"
  }, "Fermer"))));
}
function EachTaskComment(_ref70) {
  var com = _ref70.com;
  return /*#__PURE__*/React.createElement("div", {
    className: "each-comment xwi90per x-bd-thin x-bd-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    imageURL: com.user.photo,
    name: com.user.lastName,
    fontSize: 15,
    width: 40
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale15 xfosi15 xfowebo"
  }, com.user.lastName, " ", com.user.firstName)), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xlihe3 xmato10 xfosi13"
  }, com.comment), /*#__PURE__*/React.createElement("p", {
    className: "xmato4 x-low-emphasis xfosi10"
  }, getFormatDateTime(com.date)));
}
function TaskOption(_ref71) {
  var close = _ref71.close,
    open = _ref71.open,
    del = _ref71.del,
    markAsDone = _ref71.markAsDone,
    duplicate = _ref71.duplicate;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xmale10 xfosi20 xmato10 xfowebo xmabo20"
  }, "Options"), /*#__PURE__*/React.createElement("div", {
    onClick: duplicate,
    className: "each-task-option xmabo10 x-pointer xalitce xdigr x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-circle-40 x-black-02"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-copy"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "Dupliquer"))), /*#__PURE__*/React.createElement("div", {
    onClick: markAsDone,
    className: "each-task-option x-pointer xmabo10 xalitce xdigr x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-circle-40 x-black-02"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "Marquer comme termin\xE9"))), /*#__PURE__*/React.createElement("div", {
    className: "each-task-option x-pointer xmabo10 xalitce xdigr x-center",
    onClick: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-circle-40 x-black-02"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-eye"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "Voir le detail"))), /*#__PURE__*/React.createElement("div", {
    onClick: del,
    className: "each-task-option x-pointer xmabo10 xalitce xdigr x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-circle-40 x-black-02"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-trash-alt"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "Supprimer"))), /*#__PURE__*/React.createElement("div", {
    onClick: close,
    className: "each-task-option x-pointer xmabo10 xalitce xdigr x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-circle-40 x-black-02"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "Fermer"))));
}
function InviteToJoinProject(_ref72) {
  var data = _ref72.data,
    close = _ref72.close;
  var _React$useState117 = React.useState(data),
    _React$useState118 = _slicedToArray(_React$useState117, 2),
    project = _React$useState118[0],
    setProject = _React$useState118[1];
  var _React$useState119 = React.useState(project.length > 0 ? project[0].id : 'null'),
    _React$useState120 = _slicedToArray(_React$useState119, 2),
    projectValue = _React$useState120[0],
    setProjectValue = _React$useState120[1];
  var _React$useState121 = React.useState(""),
    _React$useState122 = _slicedToArray(_React$useState121, 2),
    value = _React$useState122[0],
    setValue = _React$useState122[1];
  var _React$useState123 = React.useState(false),
    _React$useState124 = _slicedToArray(_React$useState123, 2),
    load = _React$useState124[0],
    setLoad = _React$useState124[1];
  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };
  var disabled = React.useMemo(function () {
    if (projectValue == 'null') {
      return true;
    } else {
      if (value.trim().length == 0) {
        return true;
      } else {
        var error = false;
        var val = value.trim();
        var allEmails = val.split(" ");
        allEmails.forEach(function (email) {
          if (!__.testEmail(email)) {
            error = true;
          }
        });
        return error;
      }
    }
  }, [value, projectValue]);
  var requestInviteThem = /*#__PURE__*/function () {
    var _ref73 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var url, to_send, formData, req, message;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            url = '/invite_user_into/';
            to_send = {
              values: value,
              id: projectValue,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref74) {
              var _ref75 = _slicedToArray(_ref74, 2),
                key = _ref75[0],
                val = _ref75[1];
              formData.append(key, val);
            });
            _context20.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context20.sent;
            if (req.isSuccess) {
              message = "Vous voulez ajouter " + req.data.emails.length + " utilisateur dans ce projet. " + req.data.not_found.length + ' utilisateur non trouvé, ' + req.data.added.length + ' utilisateur ajouté. Merci pour votre confiance';
              __.xAlert('Notez que', message, 'success');
            } else {
              __.xAlert('Connecion erreur', 'Verifiez votre connection et essayez plus tard', 'danger');
            }
            setLoad(false);
          case 9:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }));
    return function requestInviteThem() {
      return _ref73.apply(this, arguments);
    };
  }();
  var addThem = function addThem() {
    setLoad(true);
    requestInviteThem();
  };
  var handleProjectChange = function handleProjectChange(e) {
    setProjectValue(e.target.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "invite-team-to-join-project xpore x-deep-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-pointer x-circle-45 x-black-02 xpoab xto10 xri10",
    onClick: close
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container-invite-to-join xpa30"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo"
  }, "Invite des co\xE9quipier"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato10 xfosi13 xfowebo xmabo20"
  }, "Pour inviter des personnes, s\xE9parer l'addresse email par des espaces."), /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo xmabo10"
  }, "Selectionner le projet:"), /*#__PURE__*/React.createElement("select", {
    onChange: handleProjectChange,
    value: projectValue,
    className: "x-pointer x-shadow xbora10"
  }, /*#__PURE__*/React.createElement("option", {
    value: "null"
  }, "---"), project.map(function (pro) {
    return /*#__PURE__*/React.createElement("option", {
      key: pro.id,
      value: pro.id
    }, pro.name);
  })), /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: handleChange,
    className: "xfowebo xmabo20 xfosi12 xlihe5",
    placeholder: "ex: example1@domaine.com example2@domaine.com"
  }), /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: {
      width: '100%',
      height: '48px'
    },
    disabled: disabled,
    load: load,
    br: 30,
    onClickFunc: addThem,
    center: true
  }, "Inviter")));
}
function InviteForProject(_ref76) {
  var close = _ref76.close,
    added = _ref76.added,
    projectName = _ref76.projectName,
    projectID = _ref76.projectID;
  var style = {
    width: "250px",
    height: "48px"
  };
  var _React$useState125 = React.useState(""),
    _React$useState126 = _slicedToArray(_React$useState125, 2),
    value = _React$useState126[0],
    setValue = _React$useState126[1];
  var _React$useState127 = React.useState(false),
    _React$useState128 = _slicedToArray(_React$useState127, 2),
    load = _React$useState128[0],
    setLoad = _React$useState128[1];
  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };
  var disabled = React.useMemo(function () {
    if (value.trim().length == 0) {
      return true;
    } else {
      var error = false;
      var val = value.trim();
      var allEmails = val.split(" ");
      allEmails.forEach(function (email) {
        if (!__.testEmail(email)) {
          error = true;
        }
      });
      return error;
    }
  }, [value]);
  var request = /*#__PURE__*/function () {
    var _ref77 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var formData, values, url, req, message;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            formData = new FormData();
            values = {
              'emails': value.trim(),
              'id': projectID,
              'csrfmiddlewaretoken': PAGE_TOKEN
            };
            Object.entries(values).forEach(function (_ref78) {
              var _ref79 = _slicedToArray(_ref78, 2),
                key = _ref79[0],
                val = _ref79[1];
              formData.append(key, val);
            });
            url = '/invite_user_to_join_project/';
            _context21.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context21.sent;
            if (req.isSuccess) {
              message = "Vous voulez ajouter " + req.data.emails.length + " utilisateur dans ce projet. " + req.data.not_found.length + ' utilisateur non trouvé, ' + req.data.added.length + ' utilisateur ajouté. Merci pour votre confiance';
              __.xAlert('Notez que', message, 'success');
              req.data.users.forEach(function (us) {
                added(us);
              });
              setLoad(false);
              setValue('');
            }
          case 8:
          case "end":
            return _context21.stop();
        }
      }, _callee21);
    }));
    return function request() {
      return _ref77.apply(this, arguments);
    };
  }();
  var addUser = function addUser() {
    setLoad(true);
    request();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xlihe4 inv-tt xfowebo"
  }, "Inviter des collaborateurs pour joindre le projet ", /*#__PURE__*/React.createElement("strong", null, projectName)), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi13 xmato7 xmabo20"
  }, "Pour inviter des personnes, s\xE9parer l'email par des espaces."), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "example1@domaine.com example2@domaine.com",
    value: value,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xmato10 xlihe3 x-low-emphasis"
  }, "Les utilisateurs invit\xE9s a le droit d'ajouter sa propre t\xE2che avec ses modifications; ils peuvent commenter aussi la t\xE2che de quelqun mais pas \xE0 modifier l'attribut du tache des autre."), /*#__PURE__*/React.createElement("div", {
    className: "invite-or-cancel xmato20 xalitce xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-pointer",
    onClick: close
  }, /*#__PURE__*/React.createElement("button", {
    className: "x-pointer"
  }, "Annuler")), /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: style,
    onClickFunc: addUser,
    br: 30,
    load: load,
    disabled: disabled
  }, "Ajouter")));
}
var allInviteForProjectDOM = document.querySelector("#all-invite-for-project");
var ALL_INVITE_FOR_PROJECT = [];
var ALL_INVITE_FOR_PROJECT_ID = [];
function ProjectEdit(_ref80) {
  var name = _ref80.name,
    photo = _ref80.photo,
    editFunc = _ref80.editFunc,
    clientInfo = _ref80.clientInfo,
    projectID = _ref80.projectID;
  var _React$useState129 = React.useState(name),
    _React$useState130 = _slicedToArray(_React$useState129, 2),
    validName = _React$useState130[0],
    setValidName = _React$useState130[1];
  var _React$useState131 = React.useState(photo),
    _React$useState132 = _slicedToArray(_React$useState131, 2),
    image = _React$useState132[0],
    setImage = _React$useState132[1];
  var _React$useState133 = React.useState(name),
    _React$useState134 = _slicedToArray(_React$useState133, 2),
    names = _React$useState134[0],
    setNames = _React$useState134[1];
  var _React$useState135 = React.useState(false),
    _React$useState136 = _slicedToArray(_React$useState135, 2),
    load = _React$useState136[0],
    setLoad = _React$useState136[1];
  var _React$useState137 = React.useState(false),
    _React$useState138 = _slicedToArray(_React$useState137, 2),
    loadClientRequest = _React$useState138[0],
    setLoadClienRequest = _React$useState138[1];
  var _React$useState139 = React.useState(false),
    _React$useState140 = _slicedToArray(_React$useState139, 2),
    profileTouched = _React$useState140[0],
    setProfileTouched = _React$useState140[1];
  var _React$useState141 = React.useState(clientInfo),
    _React$useState142 = _slicedToArray(_React$useState141, 2),
    client = _React$useState142[0],
    setClient = _React$useState142[1];
  var handleClientName = function handleClientName(val) {
    setClient(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        name: val
      });
    });
  };
  var handleClientEmail = function handleClientEmail(val) {
    setClient(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        email: val
      });
    });
  };
  var handleClientNumber = function handleClientNumber(val) {
    setClient(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        number: val
      });
    });
  };
  var handleClientAddress = function handleClientAddress(val) {
    setClient(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        address: val
      });
    });
  };
  var select = function select(e) {
    input.current.click();
  };
  var input = React.useRef(null);
  var change = function change(e) {
    setImage(e.target.files[0]);
    setProfileTouched(true);
  };
  var nameChange = function nameChange(val) {
    setNames(val);
  };
  var style = {
    width: '300px',
    height: '50px'
  };
  var disabled = React.useMemo(function () {
    if (names.length >= 2) {
      return false;
    }
    return true;
  }, [image, names]);
  var request = /*#__PURE__*/function () {
    var _ref81 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var url, newData, form, req;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            url = '/edit_project_attribute/';
            newData = {
              id: projectID,
              photo: image,
              name: names,
              touched: profileTouched
            };
            form = new FormData();
            form.append('csrfmiddlewaretoken', PAGE_TOKEN);
            Object.entries(newData).forEach(function (_ref82) {
              var _ref83 = _slicedToArray(_ref82, 2),
                key = _ref83[0],
                value = _ref83[1];
              form.append(key, value);
            });
            _context22.next = 7;
            return __.layoutRequest.post(url, form, 'json');
          case 7:
            req = _context22.sent;
            if (req.isSuccess) {
              editFunc(newData);
              setLoad(false);
            }
          case 9:
          case "end":
            return _context22.stop();
        }
      }, _callee22);
    }));
    return function request() {
      return _ref81.apply(this, arguments);
    };
  }();
  var edit = function edit() {
    setLoad(true);
    request();
  };
  var requestClientInfoSaving = /*#__PURE__*/function () {
    var _ref84 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
      var url, to_send, formData, req;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            url = '/edit_client_info/';
            to_send = {
              id: projectID,
              name: client.name,
              email: client.email,
              address: client.address,
              number: client.number,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref85) {
              var _ref86 = _slicedToArray(_ref85, 2),
                key = _ref86[0],
                val = _ref86[1];
              formData.append(key, val);
            });
            _context23.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context23.sent;
            if (req.isSuccess) {
              setLoadClienRequest(false);
              __.xAlert('Informations du client', "Merci d'avoir mis à jour l'information de votre client dans cette projet.", "info");
            } else {
              setLoadClienRequest(false);
              __.xAlert('Error', "Ouups, verifier votre connection et essayez plus tard...", "danger");
            }
          case 8:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }));
    return function requestClientInfoSaving() {
      return _ref84.apply(this, arguments);
    };
  }();
  var saveClientInfo = function saveClientInfo() {
    setLoadClienRequest(true);
    requestClientInfoSaving();
  };
  var disabledClientButton = React.useMemo(function () {
    if (client.name && client.email && client.name.trim().length > 2 && __.testEmail(client.email.trim()) && client.number) {
      return false;
    }
    return true;
  }, [client]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmato20"
  }, "Param\xE8tres"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi12 xmato3"
  }, "Cette sections contenant les informations de votre projet et le client li\xE9 \xE0 cette projet."), /*#__PURE__*/React.createElement("div", {
    className: "xdigr container-project-settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-center xwi90per xmato30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-250 x-child-center x-center"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    imageURL: image,
    fontSize: 40,
    width: 200,
    name: validName
  })), /*#__PURE__*/React.createElement("p", {
    onClick: select,
    className: "xfosi13 xmabo20 xmato40 xtealce x-text-info x-pointer"
  }, "Choisir une photo"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    onChange: change,
    className: "x-square-0 xop_0",
    ref: input,
    accept: ".jpg, .JPG, .jpeg, .JPEG, .png, .PNG"
  }), /*#__PURE__*/React.createElement(XField, {
    onChange: nameChange,
    center: true,
    value: names
  }, "Nom du projet"), /*#__PURE__*/React.createElement("div", {
    className: "xwi100per xmato20"
  }, /*#__PURE__*/React.createElement(XButtonLoadable, {
    load: load,
    center: true,
    br: 30,
    onClickFunc: edit,
    disabled: disabled,
    style: style
  }, "Editer")))), /*#__PURE__*/React.createElement("div", {
    className: "client-settings"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi16 xfowebo tt-settings"
  }, "Informations du client"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo xmabo15"
  }, "Nom du client"), /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '80%'
    },
    value: client.name,
    onChange: handleClientName
  }, "Nom du client"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo xmabo15 xmato15"
  }, "Adresse email"), /*#__PURE__*/React.createElement(XField, {
    type: "email",
    style: {
      width: '80%'
    },
    value: client.email,
    onChange: handleClientEmail
  }, "Adresse email"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo xmabo15 xmato15"
  }, "Contact"), /*#__PURE__*/React.createElement(XField, {
    type: "tel",
    style: {
      width: '80%'
    },
    value: client.number,
    onChange: handleClientNumber
  }, "Numero de t\xE9l\xE9phone"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo xmabo15 xmato15"
  }, "Adresse (facultatif)"), /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '80%'
    },
    value: client.address,
    onChange: handleClientAddress
  }, "Adresse"), /*#__PURE__*/React.createElement("div", {
    className: "xmato20"
  }, /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: {
      width: '80%'
    },
    load: loadClientRequest,
    onClickFunc: saveClientInfo,
    disabled: disabledClientButton
  }, "Ajouter")))));
}
function ProjectDashboard(_ref87) {
  var data = _ref87.data;
  var _React$useState143 = React.useState(null),
    _React$useState144 = _slicedToArray(_React$useState143, 2),
    mychart = _React$useState144[0],
    setMyChart = _React$useState144[1];
  React.useEffect(function () {
    var _getProgressionValue = getProgressionValue(),
      total = _getProgressionValue.total,
      progression = _getProgressionValue.progression,
      success = _getProgressionValue.success,
      encours = _getProgressionValue.encours,
      arret = _getProgressionValue.arret,
      attente = _getProgressionValue.attente;
    var barID = "bar-for-project-" + data.id;
    setTimeout(function () {
      var id = "#project-chart-of-" + data.id;
      var body = document.body;
      var projectChartDOM = body.querySelector(id);
      if (projectChartDOM.getAttribute('inuse') != undefined) {
        mychart.data.datasets[0].data = [progression, data.sections.length, total.length, attente.length, success.length, encours.length, arret.length, data.members.length, data.notes.length, data.files.length];
        mychart.update();
      } else {
        projectChartDOM.setAttribute('inuse', 'true');
        var projectChart = body.querySelector(id).getContext('2d');
        setMyChart(new Chart(projectChart, {
          type: "line",
          data: {
            labels: ['Progression', 'Sections', 'Taches', 'En attente', 'Succees', 'En cours', 'Arret', 'Membre', 'Notes', 'Fichiers'],
            datasets: [{
              label: 'Visualisation du courbe du projet',
              data: [progression, data.sections.length, total.length, attente.length, success.length, encours.length, arret.length, data.members.length, data.notes.length, data.files.length],
              borderWidth: 4,
              borderColor: '#00B0FF'
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                min: 0,
                max: 100
              }
            }
          }
        }));
      }
      __.updateUploadingProgress(barID, progression);
    }, 500);
  });
  var getProgressionValue = function getProgressionValue() {
    var allTasks = [];
    var attenteTask = [];
    var successTasks = [];
    var enCoursTasks = [];
    var arretTasks = [];
    data.sections.forEach(function (sec) {
      sec.tasks.forEach(function (task) {
        allTasks.push(task);
      });
    });
    allTasks.forEach(function (t) {
      if (t.status == 'En attente') {
        attenteTask.push(t);
      } else if (t.status == 'Terminé') {
        successTasks.push(t);
      } else if (t.status == "En cours") {
        enCoursTasks.push(t);
      } else {
        arretTasks.push(t);
      }
    });
    var prog = allTasks.length == 0 ? 0 : (successTasks.length / allTasks.length * 100).toFixed(2);
    return {
      total: allTasks,
      progression: Number(prog),
      success: successTasks,
      encours: enCoursTasks,
      arret: arretTasks,
      attente: attenteTask
    };
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xfowebo xmale20 xmato20"
  }, "Dashboard du projet"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi14 xmato5 xmale20"
  }, "Visualiser le projet en vue clair"), /*#__PURE__*/React.createElement("div", {
    className: "present-chart xmato20 xmabo20 xdigr xwi90per x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-chart"
  }, /*#__PURE__*/React.createElement("canvas", {
    id: "project-chart-of-" + data.id
  })), /*#__PURE__*/React.createElement("div", {
    className: "repport-chart"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xmato10 xfowebo"
  }, "Administrateur de ce project"), /*#__PURE__*/React.createElement(XUserList, {
    dataComplet: data.admin,
    name: data.admin.lastName + ' ' + data.admin.firstName,
    id: data.admin.email,
    imgSrc: data.admin.photo
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xmato10 xfowebo"
  }, "Membres (", data.members.length, ")"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi13 xmato5"
  }, "Tous les membres dans ce projets"), /*#__PURE__*/React.createElement("div", {
    className: "all-members-in-dash x-scroll-horizontal xwi100per"
  }, data.members.map(function (user, key) {
    return /*#__PURE__*/React.createElement("div", {
      className: "each-member-in-dashboard xbora20",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-center xwi100per x-child-center"
    }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
      name: user.lastName + ' ' + user.firstName,
      imageURL: user.photo,
      fontSize: 20,
      width: 70
    })), /*#__PURE__*/React.createElement("p", {
      className: ""
    }, user.lastName));
  })), /*#__PURE__*/React.createElement("div", {
    className: "xdifl xjucospev x-al-it-ce xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xwi30per"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi26 xfowebo xtealce xmabo10"
  }, data.members.length), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-low-emphasis xtealce"
  }, "Membres")), /*#__PURE__*/React.createElement("div", {
    className: "xwi30per"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi26 xfowebo xtealce xmabo10"
  }, data.notes.length), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-low-emphasis xtealce"
  }, "Notes")), /*#__PURE__*/React.createElement("div", {
    className: "xwi30per"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi26 xfowebo xtealce xmabo10"
  }, data.files.length), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-low-emphasis xtealce"
  }, "Fichiers"))))), /*#__PURE__*/React.createElement("div", {
    className: "xdigr project-db xwi95per x-center xmato50 xmabo50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-project xpore xasra1 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi40"
  }, getProgressionValue().progression, "%"), /*#__PURE__*/React.createElement("div", {
    className: "xpoab xto0 xle0"
  }, /*#__PURE__*/React.createElement(XUploadingProgress, {
    id: "bar-for-project-" + data.id,
    color: "#00FFBF",
    width: '250px',
    weight: 2
  }))), /*#__PURE__*/React.createElement("div", {
    className: "total-sections xpore x-child-center x-deep-shadow xbora10 x-deep-shadow xbora20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi70 xfowebo xmabo20"
  }, data.sections.length), /*#__PURE__*/React.createElement("div", {
    className: "title-db-sec xpoab xwi100per xbo20 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo"
  }, "Sections"))), /*#__PURE__*/React.createElement("div", {
    className: "total-tasks x-deep-shadow xbora10 x-child-center x-deep-shadow xbora20 xpore"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi70 xfowebo xmabo20"
  }, getProgressionValue().total.length), /*#__PURE__*/React.createElement("div", {
    className: "title-db-sec xpoab xwi100per xbo20 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo"
  }, "Taches"))), /*#__PURE__*/React.createElement("div", {
    className: "en-attente-tasks x-child-center xbora20 xpore"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi70 xfowebo xmabo20"
  }, getProgressionValue().attente.length), /*#__PURE__*/React.createElement("div", {
    className: "title-db-sec xpoab xwi100per xbo20 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo"
  }, "Taches en attente"))), /*#__PURE__*/React.createElement("div", {
    className: "success-tasks x-child-center xbora20 xpore"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi70 xfowebo xmabo20"
  }, getProgressionValue().success.length), /*#__PURE__*/React.createElement("div", {
    className: "title-db-sec xpoab xwi100per xbo20 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo"
  }, "Taches termin\xE9e"))), /*#__PURE__*/React.createElement("div", {
    className: "en-cours-tasks x-child-center xbora20 xpore"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi70 xfowebo xmabo20"
  }, getProgressionValue().encours.length), /*#__PURE__*/React.createElement("div", {
    className: "title-db-sec xpoab xwi100per xbo20 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo"
  }, "Taches en cours"))), /*#__PURE__*/React.createElement("div", {
    className: "arret-tasks x-child-center xbora20 xpore"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi70 xfowebo xmabo20"
  }, getProgressionValue().arret.length), /*#__PURE__*/React.createElement("div", {
    className: "title-db-sec xpoab xwi100per xbo20 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo"
  }, "Taches arret\xE9")))));
}
function ProjectLoading(_ref88) {
  var data = _ref88.data;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center xmato100 xmabo50 xwi100per"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.name,
    width: 200,
    fontSize: 40,
    imageURL: data.photo
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xfowebo xtealce"
  }, data.name), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato20 xtealce xfosi13 load-data-project"
  }, "Chargement des donn\xE9es..."));
}
function VisualiseProjectComponent(_ref89) {
  var modelData = _ref89.modelData,
    user = _ref89.user;
  var _React$useState145 = React.useState(8),
    _React$useState146 = _slicedToArray(_React$useState145, 2),
    defaultView = _React$useState146[0],
    setDefaultView = _React$useState146[1];
  var _React$useState147 = React.useState(modelData),
    _React$useState148 = _slicedToArray(_React$useState147, 2),
    data = _React$useState148[0],
    setData = _React$useState148[1];
  var _React$useState149 = React.useState(true),
    _React$useState150 = _slicedToArray(_React$useState149, 2),
    loadFirst = _React$useState150[0],
    setLoadFirst = _React$useState150[1];
  var section_socket = null;
  React.useEffect(function () {
    if (loadFirst == false) {
      section_socket = new WebSocket('ws://' + window.location.host + '/ws/section_sync/' + data.id + '/');
      section_socket.onopen = function (e) {};
      section_socket.onmessage = function (e) {
        var response = JSON.parse(e.data);
        console.log(response);
        setData(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            sections: [].concat(_toConsumableArray(prev.sections), [response])
          });
        });
      };
      section_socket.onclose = function (e) {
        console.error('connection closed');
      };
      return function () {
        return section_socket.close();
      };
    }
  }, [loadFirst]);
  var deleted = function deleted(id) {
    setData(function (recent) {
      var re = data.sections.filter(function (se) {
        return se.id != id;
      });
      return _objectSpread(_objectSpread({}, recent), {}, {
        sections: re
      });
    });
  };
  var markAllTaksAsDone = function markAllTaksAsDone(id) {
    var sec = data.sections.filter(function (se) {
      return se.id == id;
    })[0];
    sec.tasks.map(function (task) {
      return task.status = 'Terminé';
    });
    var newdata = _objectSpread({}, data);
    newdata.sections.forEach(function (section) {
      if (section.id == id) {
        section = sec;
      }
    });
    setData(newdata);
  };
  var requestData = /*#__PURE__*/function () {
    var _ref90 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
      var url, req;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            url = '/get_project_data/' + modelData.id + '/';
            _context24.next = 3;
            return __.layoutRequest.get(url, null, 'json');
          case 3:
            req = _context24.sent;
            if (req.isSuccess) {
              setData(function () {
                return _objectSpread(_objectSpread({}, data), {}, {
                  sections: req.data.sections,
                  notes: req.data.notes,
                  files: req.data.files,
                  client: req.data.client,
                  conversations: req.data.conversations
                });
              });
              setLoadFirst(false);
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection et re-éssayez plus tard.", 'danger');
            }
          case 5:
          case "end":
            return _context24.stop();
        }
      }, _callee24);
    }));
    return function requestData() {
      return _ref90.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    requestData();
  }, []);
  var focusList = function focusList(e) {
    setDefaultView(1);
  };
  var focusEdit = function focusEdit(e) {
    setDefaultView(7);
  };
  var focusDashboard = function focusDashboard(e) {
    setDefaultView(8);
  };
  var focusBoard = function focusBoard(e) {
    setDefaultView(2);
  };
  var focusCalendar = function focusCalendar(e) {
    setDefaultView(3);
  };
  var focusMessage = function focusMessage(e) {
    setDefaultView(4);
  };
  var focusFiles = function focusFiles(e) {
    setDefaultView(5);
  };
  var focusNotes = function focusNotes(e) {
    setDefaultView(6);
  };
  var show = {
    display: "block"
  };
  var hide = {
    display: "none"
  };
  var addNewSection = function addNewSection(vals) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        sections: [].concat(_toConsumableArray(recent.sections), [vals])
      });
    });
  };
  var closeInv = function closeInv() {
    allInviteForProjectDOM.style.display = "none";
  };
  var clickToInvite = function clickToInvite() {
    allInviteForProjectDOM.style.display = "flex";
    var idP = "invite-for-project-id" + data.id;
    if (ALL_INVITE_FOR_PROJECT_ID.indexOf(idP) != -1) {
      ALL_INVITE_FOR_PROJECT.forEach(function (p) {
        if (p.id == idP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    } else {
      var newProjectInvite = __.createElement("div", idP, "invite-anyone-to-this-gp xbora5 x-deep-shadow");
      allInviteForProjectDOM.appendChild(newProjectInvite);
      ALL_INVITE_FOR_PROJECT.push(newProjectInvite);
      ALL_INVITE_FOR_PROJECT_ID.push(idP);
      var projectRender = ReactDOM.createRoot(newProjectInvite);
      projectRender.render(/*#__PURE__*/React.createElement(InviteForProject, {
        close: closeInv,
        projectName: data.name,
        projectID: data.id,
        added: addColab
      }));
      ALL_INVITE_FOR_PROJECT.forEach(function (p) {
        if (p.id == idP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    }
  };
  var addColab = function addColab(val) {
    closeInv();
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        members: [].concat(_toConsumableArray(recent.members), [val])
      });
    });
  };
  var editFunc = function editFunc(d) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        name: d.name,
        photo: d.photo
      });
    });
  };
  var addNow = function addNow(sectionID, values) {
    var recent = _objectSpread({}, data);
    recent.sections.forEach(function (sec) {
      if (sec.id == sectionID) {
        sec.tasks.push(values);
      }
    });
    setData(recent);
  };
  var duplicateTask = function duplicateTask(id, sectionID) {
    duplicateRequest(id, sectionID);
  };
  var duplicateRequest = /*#__PURE__*/function () {
    var _ref91 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(id, sectionID) {
      var url, to_send, formData, req, d;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            url = '/duplicate_task/';
            to_send = {
              id: id,
              sectionID: sectionID,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref92) {
              var _ref93 = _slicedToArray(_ref92, 2),
                key = _ref93[0],
                value = _ref93[1];
              formData.append(key, value);
            });
            _context25.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context25.sent;
            if (req.isSuccess) {
              d = _objectSpread({}, data);
              d.sections.forEach(function (sec) {
                if (sec.id == sectionID) {
                  sec.tasks = [].concat(_toConsumableArray(sec.tasks), [req.data]);
                }
              });
              setData(d);
            }
          case 8:
          case "end":
            return _context25.stop();
        }
      }, _callee25);
    }));
    return function duplicateRequest(_x8, _x9) {
      return _ref91.apply(this, arguments);
    };
  }();
  var deleteRequest = /*#__PURE__*/function () {
    var _ref94 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(id, sectionID) {
      var url, to_send, formData, req, d;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            url = '/delete_task/';
            to_send = {
              id: id,
              sectionID: sectionID,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref95) {
              var _ref96 = _slicedToArray(_ref95, 2),
                key = _ref96[0],
                value = _ref96[1];
              formData.append(key, value);
            });
            _context26.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context26.sent;
            if (req.isSuccess) {
              d = _objectSpread({}, data);
              d.sections.forEach(function (sec) {
                if (sec.id == sectionID) {
                  var recent_tasks = sec.tasks.filter(function (ta) {
                    return ta.id != id;
                  });
                  sec.tasks = recent_tasks;
                }
              });
              setData(d);
            }
          case 8:
          case "end":
            return _context26.stop();
        }
      }, _callee26);
    }));
    return function deleteRequest(_x10, _x11) {
      return _ref94.apply(this, arguments);
    };
  }();
  var deleteTask = function deleteTask(id, sectionID) {
    var d = _objectSpread({}, data);
    var owner = false;
    d.sections.forEach(function (sec) {
      if (sec.id == sectionID) {
        sec.tasks.forEach(function (t) {
          if (t.id == id) {
            if (t.user.id == user.id) {
              owner = true;
            }
          }
        });
      }
    });
    if (owner) {
      deleteRequest(id, sectionID);
    } else {
      __.xAlert('Suppression non autorisé', "Vous ne pouvez pas supprimer cette tâche car ce n'est pas le votre.", "info");
    }
  };
  var markOneTaskAsDoneRequest = /*#__PURE__*/function () {
    var _ref97 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(id, sectionID) {
      var url, to_send, formData, req, d;
      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
        while (1) switch (_context27.prev = _context27.next) {
          case 0:
            url = '/mark_one_task_as_done/';
            to_send = {
              id: id,
              sectionID: sectionID,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref98) {
              var _ref99 = _slicedToArray(_ref98, 2),
                key = _ref99[0],
                value = _ref99[1];
              formData.append(key, value);
            });
            _context27.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context27.sent;
            if (req.isSuccess) {
              d = _objectSpread({}, data);
              d.sections.forEach(function (sec) {
                if (sec.id == sectionID) {
                  sec.tasks.forEach(function (t) {
                    if (t.id == id) {
                      t.status = 'Terminé';
                    }
                  });
                }
              });
              setData(d);
            }
          case 8:
          case "end":
            return _context27.stop();
        }
      }, _callee27);
    }));
    return function markOneTaskAsDoneRequest(_x12, _x13) {
      return _ref97.apply(this, arguments);
    };
  }();
  var markOneTaskAsDone = function markOneTaskAsDone(id, sectionID) {
    var d = _objectSpread({}, data);
    var owner = false;
    var model_task;
    d.sections.forEach(function (sec) {
      if (sec.id == sectionID) {
        sec.tasks.forEach(function (t) {
          if (t.id == id) {
            if (t.user.id == user.id) {
              owner = true;
              model_task = t;
            }
          }
        });
      }
    });
    if (owner) {
      if (model_task.status == 'Terminé') {
        __.xAlert('Tâche déja terminée', "Cette tâches est déja terminée.", "info");
      }
      markOneTaskAsDoneRequest(id, sectionID);
    } else {
      __.xAlert('Accées non autorisé', "Vous ne pouvez pas marquer cette tâche comme términée car ce n'est pas le votre. Seule la propriétaire du tâche peut le faire.", "info");
    }
  };
  var requestDeleteProject = /*#__PURE__*/function () {
    var _ref100 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
      var url, req, home_dim;
      return _regeneratorRuntime().wrap(function _callee28$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            url = '/delete_project/' + data.id + '/';
            _context28.next = 3;
            return __.layoutRequest.get(url, null, 'json');
          case 3:
            req = _context28.sent;
            if (req.isSuccess) {
              switchMenu('home');
              home_dim = __.dimension.getDimension("#slide-to-home");
              slideShow.style.left = home_dim.ol + 'px';
              slideShow.style.top = home_dim.ot + 'px';
              focusSlideFunc('home');
              mainPageLoadDOM.style.display = 'none';
              reload_me.click();
            }
          case 5:
          case "end":
            return _context28.stop();
        }
      }, _callee28);
    }));
    return function requestDeleteProject() {
      return _ref100.apply(this, arguments);
    };
  }();
  var _React$useState151 = React.useState(false),
    _React$useState152 = _slicedToArray(_React$useState151, 2),
    confirmDelete = _React$useState152[0],
    setConfirmDelete = _React$useState152[1];
  var deleteProject = function deleteProject() {
    setConfirmDelete(function (prev) {
      return !prev;
    });
  };
  var confirmed = function confirmed() {
    mainPageLoadDOM.style.display = 'flex';
    requestDeleteProject();
  };
  var cancelDelete = function cancelDelete() {
    setConfirmDelete(function (prev) {
      return !prev;
    });
  };
  var deleteAlertRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, loadFirst ? /*#__PURE__*/React.createElement(ProjectLoading, {
    data: data
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "header-project xdigr xalitce xpore"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-60 x-child-center"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.name,
    width: 60,
    fontSize: 15,
    imageURL: data.photo
  })), /*#__PURE__*/React.createElement("div", {
    className: "xmale5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xfosi18 xmabo2"
  }, data.name), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Cr\xE9e par ", data.admin.lastName, " ", data.admin.firstName), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi10 xmato2"
  }, data.members.length + 1, " membre", data.members.length + 1 ? 's' : '')), /*#__PURE__*/React.createElement("div", {
    className: "project-coworkers xdifl xjucoflen"
  }, /*#__PURE__*/React.createElement(XButton, {
    onClickFunc: clickToInvite
  }, "Inviter"), data.admin.id == user.id ? /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-45 xbora15 xmale20 delete-pro-button x-pointer",
    onClick: deleteProject
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-trash-alt"
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "xmale20"
  })), confirmDelete ? /*#__PURE__*/React.createElement("div", {
    className: "delete-alert xpoab xri30 xto70 x-shadow xpa15"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi17 xfowebo xmato10"
  }, "Etez vous s\xFBr de supprimer ce projet?"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato10 xfosi12 xlihe4"
  }, "Si vous voulez bien supprimer ce projet, notez bien que tous les object li\xE9s \xE0 ce projet (notes, fichier, objectif, portefeuille, rapport, conversation, facture, etc) sont tous supprim\xE9 automatiquement avec le projet."), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato10 xfosi12 xlihe4"
  }, "Pensez alors de t\xE9l\xE9charger les donn\xE9es importantes dans le projet car il n'y pas de moyen \xE0 recup\xE9rer les donn\xE9es apres le suppression."), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato10 xfosi12 xlihe4"
  }, "La page va s'actuliaser apres le suppression."), /*#__PURE__*/React.createElement("div", {
    className: "choice xdigr xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-pointer xhe45 xbora30 x-child-center",
    onClick: cancelDelete
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Annuler")), /*#__PURE__*/React.createElement("div", {
    className: "x-pointer xhe45 xbora30 x-child-center",
    onClick: confirmed
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Supprimer quand m\xEAme")))) : null), /*#__PURE__*/React.createElement("div", {
    className: "all-project-menu x-bd-bottom x-bd-thin xdifl xalitce xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: focusDashboard,
    className: defaultView == 8 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-home"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale5"
  }, "Dashboard")), /*#__PURE__*/React.createElement("div", {
    onClick: focusList,
    className: defaultView == 1 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-list-ul"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale5"
  }, "Liste")), /*#__PURE__*/React.createElement("div", {
    onClick: focusBoard,
    className: defaultView == 2 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chalkboard"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale5"
  }, "Boards")), /*#__PURE__*/React.createElement("div", {
    onClick: focusCalendar,
    className: defaultView == 3 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-calendar"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale5"
  }, "Calendrier")), /*#__PURE__*/React.createElement("div", {
    onClick: focusMessage,
    className: defaultView == 4 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-comment"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale5"
  }, "Messages")), /*#__PURE__*/React.createElement("div", {
    onClick: focusFiles,
    className: defaultView == 5 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-file"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale5"
  }, "Fichiers")), /*#__PURE__*/React.createElement("div", {
    onClick: focusNotes,
    className: defaultView == 6 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-book"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale5"
  }, "Notes")), data.admin.id == user.id ? /*#__PURE__*/React.createElement("div", {
    onClick: focusEdit,
    className: defaultView == 7 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-cog"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale5"
  }, "Param\xE8tre")) : null), /*#__PURE__*/React.createElement("div", {
    className: "",
    style: defaultView == 1 ? show : hide
  }, /*#__PURE__*/React.createElement(ProjectList, {
    data: data,
    addNow: addNow
  })), /*#__PURE__*/React.createElement("div", {
    className: "",
    style: defaultView == 8 ? show : hide
  }, /*#__PURE__*/React.createElement(ProjectDashboard, {
    data: data
  })), /*#__PURE__*/React.createElement("div", {
    className: "",
    style: defaultView == 7 ? show : hide
  }, /*#__PURE__*/React.createElement(ProjectEdit, {
    photo: data.photo,
    name: data.name,
    editFunc: editFunc,
    projectID: data.id,
    clientInfo: data.client
  })), /*#__PURE__*/React.createElement("div", {
    className: "",
    style: defaultView == 2 ? show : hide
  }, /*#__PURE__*/React.createElement(ProjectSectionTask, {
    data: data,
    projectID: data.id,
    addNow: addNow,
    admin: data.admin,
    markAllTaksAsDone: markAllTaksAsDone,
    deleted: deleted,
    user: user,
    markOneTaskAsDone: markOneTaskAsDone,
    duplicateTask: duplicateTask,
    deleteTask: deleteTask,
    addNewSection: addNewSection
  })), /*#__PURE__*/React.createElement("div", {
    className: "",
    style: defaultView == 3 ? show : hide
  }, /*#__PURE__*/React.createElement(ProjectCalendar, {
    data: data
  })), /*#__PURE__*/React.createElement("div", {
    className: "xwi100per",
    style: defaultView == 4 ? show : hide
  }, /*#__PURE__*/React.createElement("div", {
    className: "xmato30 xbora15 xovhi x-center box-for-project-conversation-list"
  }, /*#__PURE__*/React.createElement(ProjectMessage, {
    allConvs: data.conversations,
    projectID: data.id,
    auth_user: user,
    projectAdmin: data.admin,
    userSug: data.members
  }))), /*#__PURE__*/React.createElement("div", {
    className: "",
    style: defaultView == 5 ? show : hide
  }, /*#__PURE__*/React.createElement(ProjectFiles, {
    data: data.files,
    auth_user: user,
    projectID: data.id
  })), /*#__PURE__*/React.createElement("div", {
    className: "",
    style: defaultView == 6 ? show : hide
  }, /*#__PURE__*/React.createElement(ProjectNotes, {
    id: data.id,
    title: "Notes",
    data: data.notes,
    personal: false,
    auth_user: user,
    des: "Les notes dans ce projet"
  }))));
}
var VisualiseProject = React.memo(VisualiseProjectComponent);
function ProjectSectionTask(_ref101) {
  var data = _ref101.data,
    addNow = _ref101.addNow,
    admin = _ref101.admin,
    addNewSection = _ref101.addNewSection,
    projectID = _ref101.projectID,
    markOneTaskAsDone = _ref101.markOneTaskAsDone,
    user = _ref101.user,
    deleted = _ref101.deleted,
    markAllTaksAsDone = _ref101.markAllTaksAsDone,
    deleteTask = _ref101.deleteTask,
    duplicateTask = _ref101.duplicateTask;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "section-tasks xmato50 xbora5 x-scroll-horizontal"
  }, data.sections.map(function (sec) {
    return /*#__PURE__*/React.createElement(ProjectSection, {
      key: sec.id,
      addNow: addNow,
      sectionID: sec.id,
      projectName: data.name,
      markDone: markAllTaksAsDone,
      user: user,
      deleteTask: deleteTask,
      duplicateTask: duplicateTask,
      projectID: projectID,
      deleted: deleted,
      admin: admin,
      markOneTaskAsDone: markOneTaskAsDone,
      tasks: sec.tasks
    }, sec.name);
  }), /*#__PURE__*/React.createElement(AddSection, {
    addNewSection: addNewSection,
    projectID: projectID
  })));
}
function ProjectCalendar(_ref102) {
  var data = _ref102.data;
  var _React$useState153 = React.useState(1),
    _React$useState154 = _slicedToArray(_React$useState153, 2),
    active = _React$useState154[0],
    setActive = _React$useState154[1];
  var show = {
    display: "block"
  };
  var hide = {
    display: "none"
  };
  var focusMonth = function focusMonth(e) {
    setActive(1);
  };
  var focusWeek = function focusWeek(e) {
    setActive(2);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xmato20 xfowebo"
  }, "Calendrier"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi12 xmato3"
  }, "Obtenir une vue sous forme des Calendrier"), /*#__PURE__*/React.createElement("div", {
    className: "nav-calendar xmabo20 xdifl xalitce xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: focusMonth,
    className: active == 1 ? "active x-child-center xhe45 x-pointer" : "x-child-center xhe45 x-pointer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "per-month"
  }, "Par Mois")), /*#__PURE__*/React.createElement("div", {
    onClick: focusWeek,
    className: active == 2 ? "active x-child-center xhe45 x-pointer" : "x-child-center xhe45 x-pointer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "per-month"
  }, "Par Semaine"))), /*#__PURE__*/React.createElement("div", {
    className: "sec-for-month",
    style: active == 1 ? show : hide
  }, /*#__PURE__*/React.createElement(CalendarPerMonth, {
    data: data
  })), /*#__PURE__*/React.createElement("div", {
    className: "sec-for-week",
    style: active == 2 ? show : hide
  }, /*#__PURE__*/React.createElement(CalendarPerWeek, {
    data: data
  })));
}
var statusColors = {
  "en cours": '#00B6FF',
  "terminé": '#00FF65',
  "arrêté": '#FF0001',
  "en attente": "#767777"
};
function CalendarPerMonth(_ref103) {
  var data = _ref103.data;
  var tasks = React.useMemo(function () {
    var to_return = [];
    data.sections.forEach(function (section) {
      section.tasks.forEach(function (task) {
        var t_stat = null;
        if (task.status == 'Terminé') {
          t_stat = 'terminé';
        } else {
          t_stat = task.status.toLowerCase();
        }
        var t = {
          id: task.id,
          name: task.name,
          startDate: task.startDate,
          endDate: task.endDate,
          status: t_stat
        };
        to_return.push(t);
      });
    });
    return to_return;
  });
  var _React$useState155 = React.useState(new Date()),
    _React$useState156 = _slicedToArray(_React$useState155, 2),
    currentDate = _React$useState156[0],
    setCurrentDate = _React$useState156[1];
  var formatMonthYear = function formatMonthYear(date) {
    return date.toLocaleString('fr-FR', {
      month: 'long',
      year: 'numeric'
    });
  };
  var renderCalendar = function renderCalendar() {
    var monthDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Nombre de jours dans le mois
    var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // Premier jour du mois

    // Créer les cellules de jours
    var daysCells = [];
    for (var i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      daysCells.push(/*#__PURE__*/React.createElement("div", {
        className: "ch-day",
        key: "empty-".concat(i)
      }));
    }
    var _loop = function _loop(day) {
      var dayCell = /*#__PURE__*/React.createElement("div", {
        className: "ch-day",
        key: day
      }, /*#__PURE__*/React.createElement("p", {
        className: "xmato10 xmale10 xfowebo"
      }, day), tasks.map(function (task, index) {
        var taskStartDate = new Date(task.startDate);
        var taskEndDate = new Date(task.endDate);
        var currentTaskDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

        // Si la date actuelle est dans la plage de la tâche
        if (currentTaskDate >= taskStartDate && currentTaskDate <= taskEndDate) {
          return /*#__PURE__*/React.createElement("div", {
            key: index,
            className: "ch-task",
            style: {
              backgroundColor: statusColors[task.status]
            }
          }, /*#__PURE__*/React.createElement("p", {
            className: "xfosi11 xfowebo"
          }, task.name), /*#__PURE__*/React.createElement("p", {
            className: "x-low-emphasis xfosi10 xmato2"
          }, task.status));
        }
        return null;
      }));
      daysCells.push(dayCell);
    };
    for (var day = 1; day <= monthDays; day++) {
      _loop(day);
    }
    return daysCells;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ch-header"
  }, /*#__PURE__*/React.createElement("button", {
    className: "x-pointer",
    onClick: function onClick() {
      return setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    }
  }, "Mois Pr\xE9c\xE9dent"), /*#__PURE__*/React.createElement("h2", {
    id: "current-month"
  }, formatMonthYear(currentDate)), /*#__PURE__*/React.createElement("button", {
    className: "x-pointer",
    onClick: function onClick() {
      return setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    }
  }, "Mois Suivant")), /*#__PURE__*/React.createElement("div", {
    className: "ch-days-container"
  }, renderCalendar()));
}
function CalendarPerWeek(_ref104) {
  var data = _ref104.data;
  var _React$useState157 = React.useState(new Date()),
    _React$useState158 = _slicedToArray(_React$useState157, 2),
    currentWeek = _React$useState158[0],
    setCurrentWeek = _React$useState158[1];
  var tasks = React.useMemo(function () {
    var to_return = [];
    data.sections.forEach(function (section) {
      section.tasks.forEach(function (task) {
        var t_stat = null;
        if (task.status == 'Terminé') {
          t_stat = 'termine';
        } else if (task.status == 'Arret') {
          t_stat = 'arret';
        } else {
          t_stat = task.status.toLowerCase();
          t_stat = t_stat.split(' ');
          t_stat = t_stat.join('-');
        }
        var t = {
          id: task.id,
          name: task.name,
          startDate: task.startDate,
          endDate: task.endDate,
          deadline: task.deadline,
          status: t_stat,
          user: {
            id: task.user.id,
            lastName: task.user.lastName,
            firstName: task.user.firstName
          }
        };
        to_return.push(t);
      });
    });
    return to_return;
  });

  // Fonction pour obtenir les dates de la semaine
  var getWeekDates = function getWeekDates(date) {
    var startOfWeek = new Date(date.setDate(date.getDate() - date.getDay()));
    var week = [];
    for (var i = 0; i < 7; i++) {
      var day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  // Formate la date en "Mois Jour"
  var formatDate = function formatDate(date) {
    var options = {
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleDateString('fr-FR', options);
  };
  var weekDates = getWeekDates(new Date(currentWeek));

  // Fonctions pour changer de semaine
  var nextWeek = function nextWeek() {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)));
  };
  var previousWeek = function previousWeek() {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ca2-calendar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca2-controls"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: previousWeek
  }, "Pr\xE9c\xE9dente"), /*#__PURE__*/React.createElement("h2", null, "Semaine du ", formatDate(weekDates[0])), /*#__PURE__*/React.createElement("button", {
    onClick: nextWeek
  }, "Suivant")), /*#__PURE__*/React.createElement("div", {
    className: "ca2-week"
  }, weekDates.map(function (date, index) {
    return /*#__PURE__*/React.createElement(DayColumn, {
      key: index,
      date: date,
      formatDate: formatDate
    });
  })), /*#__PURE__*/React.createElement("div", {
    id: "ca2-tasks-container"
  }, tasks.map(function (task) {
    return /*#__PURE__*/React.createElement(TaskRow, {
      key: task.id,
      task: task,
      weekDates: weekDates
    });
  })));
}
;

// Composant pour chaque jour de la semaine
var DayColumn = function DayColumn(_ref105) {
  var date = _ref105.date,
    formatDate = _ref105.formatDate;
  return /*#__PURE__*/React.createElement("div", {
    className: "ca2-day"
  }, formatDate(date));
};

// Composant pour chaque ligne de tâche
function TaskRow(_ref106) {
  var task = _ref106.task,
    weekDates = _ref106.weekDates;
  var taskStartDate = new Date(task.startDate);
  var taskEndDate = new Date(task.endDate);
  var weekStartDate = weekDates[0];
  var weekEndDate = weekDates[6];
  var startIndex = taskStartDate >= weekStartDate ? weekDates.findIndex(function (date) {
    return date.toISOString().slice(0, 10) === task.startDate;
  }) : 0;
  var endIndex = taskEndDate <= weekEndDate ? weekDates.findIndex(function (date) {
    return date.toISOString().slice(0, 10) === task.endDate;
  }) : 6;
  if (startIndex !== -1 && endIndex !== -1) {
    var taskWidth = (endIndex - startIndex + 1) * 14;
    var taskMarginLeft = startIndex * 14;
    return /*#__PURE__*/React.createElement("div", {
      className: "ca2-task-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ca2-task ".concat(task.status),
      style: {
        width: "".concat(taskWidth, "%"),
        marginLeft: "".concat(taskMarginLeft, "%")
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "xmale10 xfosi15 x-co_wh xfowebo"
    }, task.name), /*#__PURE__*/React.createElement("p", {
      className: "xmale10 xmato5 x-co_wh xfosi10"
    }, "T\xE2che de ", /*#__PURE__*/React.createElement("strong", {
      className: "x-co_wh"
    }, task.user.lastName, " ", task.user.firstName)), /*#__PURE__*/React.createElement("p", {
      className: "x-co_wh xfosi10 xmato2 xmale10"
    }, "Deadline: ", task.deadline, "js | Status: ", task.status)));
  }
  return null;
}
;
var ALL_CONV_ID = [];
var ALL_CONV = [];
var ALL_CREATE_CONV_ID = [];
var ALL_CREATE_CONV = [];
var ALL_START_CONV_ID = [];
var ALL_START_CONV = [];
var ALL_CREATE_GROUP_ID = [];
var ALL_CREATE_GROUP = [];
var allConvBoxDOM = document.querySelector("#all-conversations-box-opened");
var allCreateConvBoxDOM = document.querySelector("#all-create-conv-box");
var allStartConvBoxDOM = document.querySelector("#all-start-conv-box");
var allCreateGroupBoxDOM = document.querySelector("#all-create-group-conv");
var MESSAGES = [{
  id: "message-id-01",
  isMyMessage: false,
  status: "sent",
  text: "Bonjour",
  datetime: "2024-10-22 15:23:11",
  user: {
    id: "user-id-01",
    lastName: "Niro",
    firstName: "Henderson",
    photo: null
  }
}, {
  id: "message-id-01",
  isMyMessage: true,
  status: "sent",
  text: "Bonjour, que puis-je Vous aider?",
  datetime: "2024-10-22 15:23:11",
  user: {
    id: "user-id-01",
    lastName: "Niro",
    firstName: "Henderson",
    photo: null
  }
}];
var ALL_ROOT = [];
var messagePopDOM = document.querySelector('#message-pop-sound');
var newMessageDOM = document.querySelector('#new-message-sound');
function ProjectMessage(_ref107) {
  var allConvs = _ref107.allConvs,
    projectID = _ref107.projectID,
    userSug = _ref107.userSug,
    auth_user = _ref107.auth_user,
    projectAdmin = _ref107.projectAdmin;
  var getNameFunc = function getNameFunc(data) {
    if (data.type == "private") {
      return data.user.lastName + " " + data.user.firstName;
    } else {
      return data.name;
    }
  };
  var create_conv_url = '/create_conversation/';
  var _React$useState159 = React.useState([]),
    _React$useState160 = _slicedToArray(_React$useState159, 2),
    allConv = _React$useState160[0],
    setAllConv = _React$useState160[1];
  var notifNewMessage = function notifNewMessage() {
    newMessageDOM.play();
  };
  var notifMessagePop = function notifMessagePop() {
    messagePopDOM.play();
  };
  var removeThisRoom = function removeThisRoom(c) {
    setAllConv(function (recent) {
      var arc = _toConsumableArray(recent);
      return arc.filter(function (f) {
        return f.id != c.id;
      });
    });
  };
  var socket = null;
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/sync_conversation/' + projectID + '/');
    socket.onclose = function (e) {};
    socket.onopen = function (e) {};
    socket.onmessage = function (e) {
      var obj = JSON.parse(e.data);
      if (Array.isArray(obj)) {
        setAllConv(obj);
      } else {
        setAllConv(function (prev) {
          var focus_conv = prev.find(function (conv) {
            return conv.crypted_id == obj.crypted_id;
          });
          if (focus_conv == undefined) {
            return [].concat(_toConsumableArray(prev), [obj]);
          } else {
            var prev_conv = prev.filter(function (conv) {
              return conv.crypted_id != focus_conv.crypted_id;
            });
            prev_conv = [].concat(_toConsumableArray(prev_conv), [obj]);
            return prev_conv;
          }
        });
      }
    };
    return function () {
      return socket.close();
    };
  }, []);
  var close = function close() {
    allConvBoxDOM.style.display = "none";
  };
  var closeCreateGroup = function closeCreateGroup() {
    allCreateGroupBoxDOM.style.display = "none";
  };
  var getUserName = function getUserName(data) {
    return data.lastName + " " + data.firstName;
  };
  var closeStart = function closeStart() {
    allStartConvBoxDOM.style.display = "none";
  };
  var created = function created(val) {
    allCreateGroupBoxDOM.style.display = "none";
    setAllConv(function (prev) {
      return [].concat(_toConsumableArray(prev), [val]);
    });
  };
  var getConversationDate = function getConversationDate(conversation) {
    if (conversation.type == 'group' && conversation.empty) {
      return conversation.datetime;
    } else if (conversation.type == 'private' && conversation.lastMessage) {
      return conversation.lastMessage.datetime;
    } else if (conversation.lastMessage) {
      return conversation.lastMessage.datetime;
    }
    return null;
  };
  var sortedConv = allConv.sort(function (a, b) {
    var dateA = new Date(getConversationDate(a));
    var dateB = new Date(getConversationDate(b));
    return dateB - dateA;
  });
  var createGroup = function createGroup() {
    allCreateConvBoxDOM.style.display = "none";
    setTimeout(function () {
      allCreateGroupBoxDOM.style.display = "flex";
      var idCG = "create-gp-conv-for-project" + projectID;
      if (ALL_CREATE_GROUP_ID.indexOf(idCG) != -1) {
        ALL_CREATE_GROUP.forEach(function (fi) {
          if (fi.id == idCG) {
            fi.style.display = "block";
          } else {
            fi.style.display = "none";
          }
        });
      } else {
        var convBoxDOM = __.createElement("div", idCG, "create-gp-conv-for-project x-deep-shadow xbora10");
        allCreateGroupBoxDOM.appendChild(convBoxDOM);
        ALL_CREATE_GROUP.push(convBoxDOM);
        ALL_CREATE_GROUP_ID.push(idCG);
        var convBox = ReactDOM.createRoot(convBoxDOM);
        convBox.render(/*#__PURE__*/React.createElement(XCreateGroupConv, {
          users: userSug,
          projectID: projectID,
          close: closeCreateGroup,
          getName: getUserName,
          created: created,
          token: {
            csrfmiddlewaretoken: PAGE_TOKEN
          }
        }));
        ALL_CREATE_GROUP.forEach(function (n) {
          if (n.id == idCG) {
            n.style.display = "block";
          } else {
            n.style.display = "none";
          }
        });
      }
    }, 1000);
  };
  var getNewConv = function getNewConv() {
    allStartConvBoxDOM.style.display = "none";
  };
  var getConvs = React.useCallback(function () {
    return allConv;
  }, [allConv]);
  var getToken = function getToken(user) {
    return {
      user_id: user.id,
      project_id: projectID,
      csrfmiddlewaretoken: PAGE_TOKEN
    };
  };
  var select = React.useCallback(function (data) {
    allCreateConvBoxDOM.style.display = "none";
    var id = "p-" + projectID + "-conv-box-id-for-" + data.id;
    var alreadyIn = false;
    allConv.forEach(function (conv) {
      if (conv.type == "private" && conv.user.id == data.id) {
        alreadyIn = true;
      }
    });
    if (alreadyIn) {
      setTimeout(function () {
        open(data);
      }, 200);
    } else {
      setTimeout(function () {
        allStartConvBoxDOM.style.display = "flex";
        var idE = "p-" + projectID + "-start-conv-id-with-" + data.id;
        if (ALL_START_CONV_ID.indexOf(idE) != -1) {
          ALL_START_CONV.forEach(function (fi) {
            if (fi.id == idE) {
              fi.style.display = "block";
            } else {
              fi.style.display = "none";
            }
          });
        } else {
          var convBoxDOM = __.createElement("div", idE, "container-start-conv-box");
          allStartConvBoxDOM.appendChild(convBoxDOM);
          ALL_START_CONV.push(convBoxDOM);
          ALL_START_CONV_ID.push(idE);
          var convBox = ReactDOM.createRoot(convBoxDOM);
          var userData = {
            name: data.lastName + " " + data.firstName,
            id: data.email,
            realID: data.id,
            photo: data.photo,
            firstName: data.firstName,
            lastName: data.lastName
          };
          convBox.render(/*#__PURE__*/React.createElement(XStartConvBox, {
            close: closeStart,
            url: create_conv_url,
            token: getToken(data),
            getConversationJustCreated: getNewConv,
            user: userData
          }));
          ALL_START_CONV.forEach(function (n) {
            if (n.id == idE) {
              n.style.display = "block";
            } else {
              n.style.display = "none";
            }
          });
        }
      }, 1000);
    }
  }, [allConv]);
  var closeCreateGroupOrConv = function closeCreateGroupOrConv() {
    allCreateConvBoxDOM.style.display = 'none';
  };
  var createConv = function createConv() {
    allCreateConvBoxDOM.style.display = "flex";
    var idF = "create-conv-box-for-project-" + projectID;
    if (ALL_CREATE_CONV_ID.indexOf(idF) != -1) {
      ALL_CREATE_CONV.forEach(function (fi) {
        if (fi.id == idF) {
          fi.style.display = "block";
          userSug = [].concat(_toConsumableArray(userSug), [projectAdmin]);
          userSug = userSug.filter(function (user) {
            return user.id != auth_user.id;
          });
          var usersNotInConversations = userSug.filter(function (user) {
            return !getConvs().some(function (conv) {
              return conv.type == "private" && conv.user && conv.user.id == user.id;
            });
          });
          ALL_ROOT.forEach(function (root) {
            if (root.id == idF) {
              root.root.render(/*#__PURE__*/React.createElement(XDisplayUserToCreateConversation, {
                getName: getUserName,
                center: true,
                close: closeCreateGroupOrConv,
                userSug: usersNotInConversations,
                createGroupClick: createGroup,
                onSelectUser: select
              }));
            }
          });
        } else {
          fi.style.display = "none";
        }
      });
    } else {
      var convBoxDOM = __.createElement("div", idF, "each-container-conversation-box x-deep-shadow xbora20 xpore");
      allCreateConvBoxDOM.appendChild(convBoxDOM);
      ALL_CREATE_CONV.push(convBoxDOM);
      ALL_CREATE_CONV_ID.push(idF);
      var convBox = ReactDOM.createRoot(convBoxDOM);
      var newRoot = {
        id: idF,
        root: convBox
      };
      ALL_ROOT.push(newRoot);
      userSug = [].concat(_toConsumableArray(userSug), [projectAdmin]);
      userSug = userSug.filter(function (user) {
        return user.id != auth_user.id;
      });
      var usersNotInConversations = userSug.filter(function (user) {
        return !getConvs().some(function (conv) {
          return conv.type == "private" && conv.user && conv.user.id == user.id;
        });
      });
      convBox.render(/*#__PURE__*/React.createElement(XDisplayUserToCreateConversation, {
        getName: getUserName,
        center: true,
        close: closeCreateGroupOrConv,
        userSug: usersNotInConversations,
        createGroupClick: createGroup,
        onSelectUser: select
      }));
      ALL_CREATE_CONV.forEach(function (n) {
        if (n.id == idF) {
          n.style.display = "block";
        } else {
          n.style.display = "none";
        }
      });
    }
  };
  var makeSeenThisMessage = /*#__PURE__*/function () {
    var _ref108 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(conv) {
      return _regeneratorRuntime().wrap(function _callee29$(_context29) {
        while (1) switch (_context29.prev = _context29.next) {
          case 0:
          case "end":
            return _context29.stop();
        }
      }, _callee29);
    }));
    return function makeSeenThisMessage(_x14) {
      return _ref108.apply(this, arguments);
    };
  }();
  var handleConversationClick = function handleConversationClick(clickedConversation) {
    if (!clickedConversation.empty && clickedConversation.lastMessage && !clickedConversation.lastMessage.isMyMessage && clickedConversation.lastMessage.status == "sent") {
      var updatedConversations = allConv.map(function (conversation) {
        if (conversation.id == clickedConversation.id) {
          return _objectSpread(_objectSpread({}, conversation), {}, {
            lastMessage: _objectSpread(_objectSpread({}, conversation.lastMessage), {}, {
              status: "seen"
            })
          });
        }
        return conversation;
      });
      setAllConv(updatedConversations);
      makeSeenThisMessage(clickedConversation);
    }
  };
  var sync = function sync(convId, message) {
    setAllConv(function (recent) {
      recent.forEach(function (re) {
        if (re.id == convId) {
          re.lastMessage = message;
          if (re.empty) {
            re.empty = false;
          }
        }
      });
      return _toConsumableArray(recent);
    });
  };
  var visual = function visual(data) {
    fileMessageDOM.style.display = 'block';
    containerFileMessage.render(/*#__PURE__*/React.createElement(VisualFileMessage, {
      data: data
    }));
  };
  var open = function open(data) {
    allConvBoxDOM.style.display = "flex";
    var idF = "p-" + projectID + "-conv-box-id-for-" + data.id;
    var convHeader = {
      status: "Online"
    };
    handleConversationClick(data);
    if (data.type == "private") {
      convHeader.name = data.user.lastName + " " + data.user.firstName;
      convHeader.img = data.user.photo;
    } else {
      convHeader.name = data.name;
      convHeader.img = data.photo;
    }
    if (ALL_CONV_ID.indexOf(idF) != -1) {
      ALL_CONV.forEach(function (fi) {
        if (fi.id == idF) {
          fi.style.display = "block";
        } else {
          fi.style.display = "none";
        }
      });
    } else {
      var convBoxDOM = __.createElement("div", idF, "each-container-conversation-box x-deep-shadow xbora20 xpore");
      allConvBoxDOM.appendChild(convBoxDOM);
      ALL_CONV.push(convBoxDOM);
      ALL_CONV_ID.push(idF);
      var conversation_token = {
        crypted_id: data.crypted_id,
        csrfmiddlewaretoken: PAGE_TOKEN
      };
      var convBox = ReactDOM.createRoot(convBoxDOM);
      convBox.render(/*#__PURE__*/React.createElement(XOpenConversation, {
        header: convHeader,
        convID: data.id,
        element: convBoxDOM,
        removeThisRoom: removeThisRoom,
        parent: allConvBoxDOM,
        projectID: projectID,
        convCryptedID: data.crypted_id,
        conversationData: data,
        token: conversation_token,
        urlSending: '/send_message/',
        close: close,
        visual: visual,
        messages: [],
        sentSound: notifMessagePop,
        newMessageSound: notifNewMessage
      }));
      ALL_CONV.forEach(function (n) {
        if (n.id == idF) {
          n.style.display = "block";
        } else {
          n.style.display = "none";
        }
      });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(XConversationList, {
    data: sortedConv,
    open: open,
    removeThisRoom: removeThisRoom,
    createConvURL: create_conv_url,
    createConvClick: createConv,
    getName: getNameFunc
  }));
}
function ProjectList(_ref109) {
  var data = _ref109.data,
    addNow = _ref109.addNow;
  // Données préchargées

  var btnAddSectionStyle = {
    width: "140px"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ch-project-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xfowebo xmato25"
  }, "Liste"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi12 xmato3"
  }, "Obtenir le vue de cette projet sous forme des listes"), /*#__PURE__*/React.createElement("div", {
    className: "ch-sections-container xmabo20"
  }, data.sections.map(function (section) {
    return /*#__PURE__*/React.createElement(EachSectionInProjectList, {
      key: section.id,
      name: section.name,
      sectionID: section.id,
      addNow: addNow,
      tasks: section.tasks
    });
  })));
}
;
function AddSectionInListForm(_ref110) {
  var getValues = _ref110.getValues;
  var _React$useState161 = React.useState(""),
    _React$useState162 = _slicedToArray(_React$useState161, 2),
    name = _React$useState162[0],
    setName = _React$useState162[1];
  var _React$useState163 = React.useState(false),
    _React$useState164 = _slicedToArray(_React$useState163, 2),
    load = _React$useState164[0],
    setLoad = _React$useState164[1];
  var getValue = function getValue(val) {
    setName(val);
  };
  var btn = {
    height: "47px"
  };
  var field = {
    margin: "0px 10px 0px 0px",
    width: "300px"
  };
  var request = function request() {
    setTimeout(function () {
      setLoad(false);
      getValues(name);
    }, 1000);
  };
  var send = function send() {
    setLoad(true);
    request();
  };
  var disabled = React.useMemo(function () {
    if (name.trim().length > 0) {
      return false;
    }
    return true;
  }, [name]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmabo5 xmale15"
  }, "Nouvel section"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi11 xmabo10 xmale15"
  }, "Definie le nom d'une section"), /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce xmale15"
  }, /*#__PURE__*/React.createElement(XField, {
    onChange: getValue,
    style: field,
    value: name
  }, "Nom du section"), /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: btn,
    disabled: disabled,
    load: load,
    br: 30,
    onClickFunc: send
  }, "Ajouter")));
}
function EachSectionInProjectList(_ref111) {
  var tasks = _ref111.tasks,
    name = _ref111.name,
    addNow = _ref111.addNow,
    sectionID = _ref111.sectionID;
  var btnAddSectionStyle = {
    width: "140px"
  };
  var _React$useState165 = React.useState(false),
    _React$useState166 = _slicedToArray(_React$useState165, 2),
    add = _React$useState166[0],
    setAdd = _React$useState166[1];
  var _React$useState167 = React.useState({
      name: '',
      endDate: '',
      startDate: '',
      description: '',
      id: sectionID,
      csrfmiddlewaretoken: PAGE_TOKEN
    }),
    _React$useState168 = _slicedToArray(_React$useState167, 2),
    values = _React$useState168[0],
    setValues = _React$useState168[1];
  var _React$useState169 = React.useState(false),
    _React$useState170 = _slicedToArray(_React$useState169, 2),
    load = _React$useState170[0],
    setLoad = _React$useState170[1];
  var handleName = function handleName(val) {
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        name: val
      });
    });
  };
  var handleEnd = function handleEnd(val) {
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        endDate: val
      });
    });
  };
  var handleStart = function handleStart(val) {
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        startDate: val
      });
    });
  };
  var handleDes = function handleDes(val) {
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        description: val
      });
    });
  };
  var switchCase = function switchCase() {
    setAdd(function (s) {
      return !s;
    });
  };
  var validateDates = function validateDates() {
    var start = new Date(values.startDate);
    var end = new Date(values.endDate);
    if (end < start) {
      __.xAlert('Erreur', "La date de fin ne peut pas être antérieure à la date de début.", 'danger');
      return false;
    }
    return true;
  };
  var getDeadline = React.useMemo(function () {
    var end = new Date(values.endDate).getTime();
    var begin = new Date(values.startDate).getTime();
    var diffInMIll = end - begin;
    if (diffInMIll < 0) {
      return false;
    } else {
      diffInMIll = Math.abs(diffInMIll);
      var diff = Math.floor(diffInMIll / (1000 * 60 * 60 * 24));
      return diff;
    }
  }, [values.endDate, values.startDate, values]);
  var getStatus = React.useMemo(function () {
    var today = new Date();
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    today = new Date(today).getTime();
    var begin = new Date(values.startDate).getTime();
    if (today >= begin) {
      return 'En cours';
    } else {
      return 'En attente';
    }
  }, [values.endDate, values.startDate, values]);
  var disabled = React.useMemo(function () {
    if (values.name.trim().length > 1 && values.description.trim().length > 1 && values.startDate && values.endDate) {
      return false;
    }
    return true;
  }, [values]);
  var request = /*#__PURE__*/function () {
    var _ref112 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
      var url, formData, req;
      return _regeneratorRuntime().wrap(function _callee30$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
            url = '/add_task/';
            formData = new FormData();
            formData.append('deadline', getDeadline);
            formData.append('status', getStatus);
            Object.entries(values).forEach(function (_ref113) {
              var _ref114 = _slicedToArray(_ref113, 2),
                key = _ref114[0],
                value = _ref114[1];
              formData.append(key, value);
            });
            _context30.next = 7;
            return __.layoutRequest.post(url, formData, 'json');
          case 7:
            req = _context30.sent;
            if (req.isSuccess) {
              addNow(sectionID, req.data);
              setLoad(false);
              switchCase();
            } else {
              __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
              setLoad(false);
            }
          case 9:
          case "end":
            return _context30.stop();
        }
      }, _callee30);
    }));
    return function request() {
      return _ref112.apply(this, arguments);
    };
  }();
  var create = function create() {
    if (!validateDates()) {
      return;
    }
    setLoad(true);
    request();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ch-section x-center x-deep-shadow"
  }, /*#__PURE__*/React.createElement("h2", null, name), /*#__PURE__*/React.createElement("table", {
    className: "ch-task-table xmabo20"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Nom"), /*#__PURE__*/React.createElement("th", null, "Titulaire"), /*#__PURE__*/React.createElement("th", null, "D\xE9lai"), /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Statut"))), /*#__PURE__*/React.createElement("tbody", null, tasks.map(function (task, taskIndex) {
    return /*#__PURE__*/React.createElement("tr", {
      key: taskIndex
    }, /*#__PURE__*/React.createElement("td", null, task.name), /*#__PURE__*/React.createElement("td", null, task.user.lastName, " ", task.user.firstName), /*#__PURE__*/React.createElement("td", null, task.deadline), /*#__PURE__*/React.createElement("td", null, task.description), /*#__PURE__*/React.createElement("td", null, task.status));
  }))), add ? /*#__PURE__*/React.createElement("div", {
    className: "add-task-inline-box x-shadow"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo"
  }, "Nouvelle t\xE2ches"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo x-low-emphasis xmato5"
  }, "Remplir tous les chmaps pour ajouter une nouvelle t\xE2ches"), /*#__PURE__*/React.createElement("div", {
    className: "xdigr add-task-in-list-inline xmato20"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(XField, {
    style: {
      width: '93%',
      marginBottom: '20px'
    },
    value: values.name,
    onChange: handleName,
    center: true
  }, "Nom du taches"), /*#__PURE__*/React.createElement("div", {
    className: "xdifl xjucospev xalitce"
  }, /*#__PURE__*/React.createElement(XField, {
    type: "date",
    style: {
      width: '45%'
    },
    value: values.startDate,
    onChange: handleStart
  }), /*#__PURE__*/React.createElement(XField, {
    type: "date",
    style: {
      width: '45%'
    },
    value: values.endDate,
    onChange: handleEnd
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(XTextarea, {
    style: {
      width: '90%'
    },
    value: values.description,
    onChange: handleDes,
    center: true
  }, "Description du t\xE2ches"))), /*#__PURE__*/React.createElement(XButtonLoadable, {
    style: {
      width: '250px',
      marginLeft: '20px'
    },
    load: load,
    disabled: disabled,
    onClickFunc: create
  }, "Ajouter")) : null, add == false ? /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-text-info xmato10 x-pointer xfowebo",
    onClick: switchCase
  }, "Ajouter une nouvelle t\xE2ches") : /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-text-danger xmato10 x-pointer xfowebo",
    onClick: switchCase
  }, "Annuler l'ajout"));
}
function getTaskDate(date) {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString();
  var day = date.getDate().toString();
  return year + "-" + month + "-" + day;
}
function AddSection(_ref115) {
  var addNewSection = _ref115.addNewSection,
    projectID = _ref115.projectID;
  var _React$useState171 = React.useState(""),
    _React$useState172 = _slicedToArray(_React$useState171, 2),
    value = _React$useState172[0],
    setValue = _React$useState172[1];
  var _React$useState173 = React.useState(false),
    _React$useState174 = _slicedToArray(_React$useState173, 2),
    aboutToAdd = _React$useState174[0],
    setAboutToAdd = _React$useState174[1];
  var _React$useState175 = React.useState(false),
    _React$useState176 = _slicedToArray(_React$useState175, 2),
    load = _React$useState176[0],
    setLoad = _React$useState176[1];
  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };
  var disabled = React.useMemo(function () {
    if (value.trim().length >= 2) {
      return false;
    }
    return true;
  }, [value]);
  var activeAdd = function activeAdd() {
    setAboutToAdd(true);
  };
  var turnAway = function turnAway() {
    setAboutToAdd(false);
  };
  var request = /*#__PURE__*/function () {
    var _ref116 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
      var url, obj, formData, req;
      return _regeneratorRuntime().wrap(function _callee31$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            url = '/add_section/';
            obj = {
              name: value.trim(),
              id: projectID,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(obj).forEach(function (_ref117) {
              var _ref118 = _slicedToArray(_ref117, 2),
                key = _ref118[0],
                value = _ref118[1];
              formData.append(key, value);
            });
            _context31.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context31.sent;
            if (req.isSuccess) {
              addNewSection(req.data);
              setLoad(false);
              setAboutToAdd(false);
              setValue("");
            } else {
              __.xAlert("Conneciton erreur", "Erreur lors ajout d'une nouvel section. Verifiez votre connection et ressayez plus tard. Merci beaucoup", 'danger');
              setLoad(false);
            }
          case 8:
          case "end":
            return _context31.stop();
        }
      }, _callee31);
    }));
    return function request() {
      return _ref116.apply(this, arguments);
    };
  }();
  var createSection = function createSection() {
    setLoad(true);
    request();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "add-section x-deep-shadow"
  }, aboutToAdd ? /*#__PURE__*/React.createElement("div", {
    className: "xwi100per add-section-form"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xfowebo xmato10 xmabo20"
  }, "Nouvel section"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: value,
    onChange: handleChange,
    placeholder: "Nom du section",
    className: "xfosi15 xfowebo xwi100per"
  }), /*#__PURE__*/React.createElement("div", {
    className: "xdifl xwi100per xmato20 xalitce xhe60 two-method"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cancel-add-section xwi50per xdifl x-pointer"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: turnAway,
    className: "x-low-emphasis xfowebo x-pointer"
  }, "Annuler")), /*#__PURE__*/React.createElement("div", {
    className: "valid-add-section xdifl xwi50per xjucoflen"
  }, /*#__PURE__*/React.createElement(XButtonLoadable, {
    disabled: disabled,
    onClickFunc: createSection,
    load: load,
    className: "x-pointer"
  }, "Ajouter")))) : /*#__PURE__*/React.createElement("div", {
    onClick: activeAdd,
    className: "add-sec-title x-pointer xdifl xwi100per xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-50 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xmale10 xfowebo x-low-emphasis"
  }, "Ajouter un section")));
}
function PeopleInHome(_ref119) {
  var peoples = _ref119.peoples;
  var invite = function invite() {
    openInviteTeam();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "people xbora10 xpato25"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title-people-home xfosi20 xfowebo xmale25"
  }, "Collaborateurs"), /*#__PURE__*/React.createElement("div", {
    className: "invite-people xmato20 xdigr xwi90per x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invite-btn xdigr xalitce x-pointer",
    onClick: invite
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-60 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo"
  }, "Inviter")), peoples.map(function (people) {
    return /*#__PURE__*/React.createElement(EachPeopleInHome, {
      data: people,
      key: people.id
    });
  })));
}
function EachPeopleInHome(_ref120) {
  var data = _ref120.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "invited xdigr xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-60 x-child-center"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.lastName,
    width: 60,
    fontSize: 20,
    imageURL: data.photo
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo"
  }, __.getShortText(data.lastName + " " + data.firstName, 8)));
}
function ProjectHome(_ref121) {
  var data = _ref121.data,
    user = _ref121.user;
  var openAddPro = function openAddPro() {
    openAddNewProject();
  };
  var _React$useState177 = React.useState(data),
    _React$useState178 = _slicedToArray(_React$useState177, 2),
    pros = _React$useState178[0],
    setPros = _React$useState178[1];
  var socket = null;
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/sync_project_home/');
    socket.onclose = function (e) {
      console.error('Connection close on project home sync');
    };
    socket.onopen = function (e) {};
    socket.onmessage = function (e) {
      var response = JSON.parse(e.data);
      if (response.action == 'new') {
        setPros(function (recent) {
          return [].concat(_toConsumableArray(recent), [response]);
        });
      } else if (response.action == 'delete') {
        setPros(function (recent) {
          var prev = _toConsumableArray(recent);
          return prev.filter(function (f) {
            return f.id != response.id;
          });
        });
      }
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "projects-home xbora10 xpato25 xovau"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title-project-home xfosi20 xfowebo xmale25"
  }, "Projects"), /*#__PURE__*/React.createElement("div", {
    onClick: openAddPro,
    className: "create-project xmato20 xalitce xwi90per x-center xdigr x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-60 x-child-center xbora15"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo"
  }, "Cr\xE9er un nouveau projet")), pros.map(function (project) {
    return /*#__PURE__*/React.createElement(ExistingProject, {
      user: user,
      data: project,
      key: project.id
    });
  }));
}
function ExistingProject(_ref122) {
  var data = _ref122.data,
    user = _ref122.user;
  var open = function open() {
    focusSlideFunc('null');
    switchMenu("project-visualisation");
    var idP = "project-visual-id-" + data.id;
    if (ALL_PROJECT_OPENED_ID.indexOf(idP) != -1) {
      ALL_PROJECT_OPENED.forEach(function (p) {
        if (p.id == idP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    } else {
      var newProjectSection = __.createElement("div", idP, "");
      projectVisualisationDOM.appendChild(newProjectSection);
      ALL_PROJECT_OPENED.push(newProjectSection);
      ALL_PROJECT_OPENED_ID.push(idP);
      var projectRender = ReactDOM.createRoot(newProjectSection);
      projectRender.render(/*#__PURE__*/React.createElement(VisualiseProject, {
        modelData: data,
        user: user
      }));
      ALL_PROJECT_OPENED.forEach(function (p) {
        if (p.id == idP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "existing-project xmato20 xalitce xwi90per x-center xdigr x-pointer",
    onClick: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-60 x-child-center"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.name,
    fontSize: 20,
    imageURL: data.photo,
    width: 60
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo"
  }, data.name), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xmato3 x-low-emphasis"
  }, data.members.length + 1, " membre", data.members.length + 1 > 1 ? 's' : '')));
}
function MyTaskInHome(_ref123) {
  var data = _ref123.data,
    user = _ref123.user;
  var _React$useState179 = React.useState('tous'),
    _React$useState180 = _slicedToArray(_React$useState179, 2),
    filter = _React$useState180[0],
    setFilter = _React$useState180[1];
  var values = [{
    val: 'tous',
    name: 'Tous'
  }, {
    val: 'en attente',
    name: 'En attente'
  }, {
    val: 'en cours',
    name: 'En cours'
  }, {
    val: 'terminé',
    name: 'Terminé'
  }, {
    val: 'arret',
    name: 'Arret'
  }];
  var handleFilterChange = function handleFilterChange(e) {
    setFilter(e.target.value);
  };
  var dataDerive = React.useMemo(function () {
    var d = [];
    data.forEach(function (project) {
      var pro = {};
      pro.name = project.name;
      pro.tasks = [];
      project.sections.forEach(function (section) {
        section.tasks.forEach(function (task) {
          if (task.user.id == user.id) {
            if (filter == 'tous') {
              pro.tasks.push({
                name: task.name,
                deadline: task.deadline,
                status: task.status,
                endDate: task.endDate,
                startDate: task.startDate
              });
            } else {
              if (task.status.toLowerCase() == filter.toLowerCase()) {
                pro.tasks.push({
                  name: task.name,
                  deadline: task.deadline,
                  endDate: task.endDate,
                  status: task.status,
                  startDate: task.startDate
                });
              }
            }
          }
        });
      });
      d.push(pro);
    });
    return d;
  }, [filter]);
  var addTask = function addTask() {
    openAddNewTask();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "my-task-home xwi100per xmato30 xpato20 xbora10 xovau"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xmale20 xwi90per x-center x-bd-bottom x-bd-thin xpabo20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-profile-pic x-square-40"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: user.lastName,
    imageURL: user.photo,
    fontSize: 14,
    width: 40
  })), /*#__PURE__*/React.createElement("div", {
    className: "xmale15 xmato5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xmabo20"
  }, /*#__PURE__*/React.createElement("p", {
    className: " xfosi20 xfowebo xmari10"
  }, "Mes t\xE2ches dans mes projets"), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-lock xmato5"
  })), /*#__PURE__*/React.createElement(XSelect, {
    value: filter,
    onChange: handleFilterChange
  }, values.map(function (v, key) {
    return /*#__PURE__*/React.createElement("option", {
      value: v.val,
      key: key
    }, v.name);
  })))), dataDerive.length == 0 ? /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi13 xtealce xmato40 xfowebo"
  }, "Vous n'avez aucune t\xE2che pour le moment") : dataDerive.map(function (p, key) {
    return /*#__PURE__*/React.createElement(EachTaskInHome, {
      key: key,
      tasks: p.tasks,
      projectName: p.name
    });
  }));
}
function EachTaskInHome(_ref124) {
  var projectName = _ref124.projectName,
    tasks = _ref124.tasks;
  var style = {
    background: XSettings.getColorFromChar[projectName[0].toLowerCase()]
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, tasks.map(function (task, key) {
    return /*#__PURE__*/React.createElement("div", {
      className: "xmato10 x-bd-top x-bd-thin each-task-home xdigr xpato10 xwi90per x-center",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-name xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon-task-name xmari10 x-circle-23 x-child-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-check"
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi14"
    }, task.name)), /*#__PURE__*/React.createElement("div", {
      className: "project-task xdifl xalitce xjucoflen"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xbora3",
      style: style
    }, __.getShortText(projectName, 10)), /*#__PURE__*/React.createElement("p", {
      className: "xmale10 x-low-emphasis xfosi12 filtered-task"
    }, task.startDate, " - ", task.endDate, " (", task.deadline, "js) ", /*#__PURE__*/React.createElement("strong", {
      className: task.status.toLowerCase().split(' ').join('-')
    }, task.status))));
  }));
}
function Home(_ref125) {
  var user = _ref125.user,
    data = _ref125.data;
  var _React$useState181 = React.useState(true),
    _React$useState182 = _slicedToArray(_React$useState181, 2),
    load = _React$useState182[0],
    setLoad = _React$useState182[1];
  var getProfileCompleted = React.useMemo(function () {
    if (user.email && user.jobTitle && user.description) {
      return true;
    }
    return false;
  }, []);
  var _React$useState183 = React.useState(1),
    _React$useState184 = _slicedToArray(_React$useState183, 2),
    stepSelected = _React$useState184[0],
    setStepSelected = _React$useState184[1];
  var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  var one = function one() {
    setStepSelected(1);
  };
  var two = function two() {
    setStepSelected(2);
  };
  var three = function three() {
    setStepSelected(3);
  };
  var getStepContent = React.useMemo(function () {
    if (stepSelected == 0) {
      return /*#__PURE__*/React.createElement("div", {
        className: "xwi200 xasra1 xdifl xjucospev xalitce xfldico"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-bars xfosi30"
      }), /*#__PURE__*/React.createElement("p", {
        className: "xfosi13 x-low-emphasis"
      }, "Completer touts les etapes."));
    } else if (stepSelected == 1) {
      return /*#__PURE__*/React.createElement(CreateFirstProjectStep, null);
    } else if (stepSelected == 2) {
      return /*#__PURE__*/React.createElement(ManageTeamStep, null);
    } else if (stepSelected == 3) {
      return /*#__PURE__*/React.createElement(CompleteProfileStep, null);
    } else {
      return null;
    }
  }, [stepSelected]);
  var getThisMonth = React.useMemo(function () {
    var date = new Date();
    return months[date.getMonth()];
  }, []);
  var getThisDay = React.useMemo(function () {
    var date = new Date();
    return date.getDate();
  }, []);
  var getDayName = React.useMemo(function () {
    var date = new Date();
    return days[date.getDay()];
  });
  var getFinishedTask = React.useMemo(function () {
    var tasksFinished = [];
    data.forEach(function (project) {
      project.sections.forEach(function (section) {
        section.tasks.forEach(function (task) {
          if (task.user.id == user.id) {
            if (task.status == 'Terminé') {
              tasksFinished.push(task);
            }
          }
        });
      });
    });
    return tasksFinished.length;
  }, []);
  var getColabs = React.useMemo(function () {
    var colabs = [];
    var _final = [];
    var idPushed = [];
    data.forEach(function (project) {
      if (idPushed.indexOf(project.admin.id) == -1) {
        colabs.push(project.admin);
        idPushed.push(project.admin.id);
      }
      project.members.forEach(function (member) {
        if (idPushed.indexOf(member.id) == -1) {
          colabs.push(member);
          idPushed.push(member.id);
        }
      });
    });
    colabs.forEach(function (m) {
      if (m.id != user.id) {
        _final.push(m);
      }
    });
    return _final;
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: ""
  }, "Accueil"), /*#__PURE__*/React.createElement("p", {
    className: "date-today xtealce xmato20 xfosi17"
  }, getDayName, ", ", getThisMonth, " ", getThisDay), /*#__PURE__*/React.createElement("p", {
    className: "greeting xtealce xfowebo xmato10 xfosi30"
  }, "Bonjour, ", user.lastName), /*#__PURE__*/React.createElement("div", {
    className: "tbs x-center xmato30 x-child-center xhe60 xbora30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xwi50per xhe40 x-child-center x-bd-right x-bd-thin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center xmari10"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12"
  }, /*#__PURE__*/React.createElement("strong", null, getFinishedTask), " t\xE2ches termin\xE9e", getFinishedTask > 1 ? 's' : '')), /*#__PURE__*/React.createElement("div", {
    className: "xwi50per xhe40 x-child-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center xmari10"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-users"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12"
  }, /*#__PURE__*/React.createElement("strong", null, getColabs.length), " colaborateur"))), /*#__PURE__*/React.createElement("div", {
    className: "setup x-deep-shadow x-center xbora10 xovhi xdigr xmato50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "all-steps"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: one,
    className: "x-pointer each-step xalitce xhe40 xbora10 xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: data.length != 0 ? "statut-step done x-circle-35 x-child-center" : "statut-step wait x-circle-35 x-child-center"
  }, data.length != 0 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check"
  }) : /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "1")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xmato2 xfowebo"
  }, "Cr\xE9ez votre premier projet"))), /*#__PURE__*/React.createElement("div", {
    onClick: two,
    className: "x-pointer each-step xmato15 xalitce xhe40 xbora10 xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: " statut-step wait x-circle-35 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "2")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xmato2 xfowebo"
  }, "G\xE9rer votre \xE9quipe"))), /*#__PURE__*/React.createElement("div", {
    onClick: three,
    className: "x-pointer each-step xmato15 xalitce xhe40 xbora10 xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: getProfileCompleted ? "statut-step done x-circle-35 x-child-center" : "statut-step wait x-circle-35 x-child-center"
  }, getProfileCompleted ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check"
  }) : /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "3")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xmato2 xfowebo"
  }, "Completer votre profile")))), /*#__PURE__*/React.createElement("div", {
    className: "appears-each-step x-child-center"
  }, getStepContent)), /*#__PURE__*/React.createElement(MyTaskInHome, {
    data: data,
    user: user
  }), /*#__PURE__*/React.createElement("div", {
    className: "people-and-projects x-center xmato50"
  }, /*#__PURE__*/React.createElement(ProjectHome, {
    data: data,
    user: user
  }), /*#__PURE__*/React.createElement(PeopleInHome, {
    data: data,
    peoples: getColabs
  })));
}
function CreateFirstProjectStep() {
  var add = function add() {
    openAddNewProject();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "each-step-content x-fill-parent xdifl xalitce xjucospev xfldico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-rocket xfosi50"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo"
  }, "Cr\xE9er votre premier projet"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo xlihe3 x-low-emphasis"
  }, "Commencer votre premier projet."), /*#__PURE__*/React.createElement("div", {
    onClick: add,
    className: "x-pointer xwi50per x-deep-shadow xhe45 xbora30 x-child-center"
  }, /*#__PURE__*/React.createElement("button", null, "Cr\xE9er")));
}
function ManageTeamStep() {
  var add = function add() {
    openInviteTeam();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "each-step-content x-fill-parent xdifl xalitce xjucospev xfldico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-users xfosi50"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo"
  }, "G\xE9rer votre \xE9quipe"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo xlihe3 x-low-emphasis"
  }, "Vous pouvez G\xE9rer votre \xE9quipe par l'ajout ou suppression."), /*#__PURE__*/React.createElement("div", {
    onClick: add,
    className: "x-pointer xwi50per x-deep-shadow xhe45 xbora30 x-child-center"
  }, /*#__PURE__*/React.createElement("button", null, "G\xE9rer")));
}
function CompleteProfileStep() {
  var completer = function completer() {
    openSettings();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "each-step-content x-fill-parent xdifl xalitce xjucospev xfldico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-user-circle xfosi50"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo"
  }, "Completer votre profile"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo xlihe3 x-low-emphasis"
  }, "Completer votre profile. Vous pouvez remplir quelques informations."), /*#__PURE__*/React.createElement("div", {
    onClick: completer,
    className: "x-pointer xwi50per x-deep-shadow xhe45 xbora30 x-child-center"
  }, /*#__PURE__*/React.createElement("button", null, "Completer")));
}
function EachWMember(_ref126) {
  var data = _ref126.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "other-members xdifl xalitce x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-50 x-child-center"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.lastName,
    width: 50,
    fontSize: 20,
    imageURL: data.photo
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xmale10"
  }, __.getShortText(data.lastName, 8)));
}
function WMembers(_ref127) {
  var data = _ref127.data,
    user = _ref127.user;
  var invite = function invite() {
    openInviteTeam();
  };
  var members = React.useMemo(function () {
    var colabs = [];
    var _final2 = [];
    var idPushed = [];
    data.forEach(function (project) {
      if (idPushed.indexOf(project.admin.id) == -1) {
        colabs.push(project.admin);
        idPushed.push(project.admin.id);
      }
      project.members.forEach(function (member) {
        if (idPushed.indexOf(member.id) == -1) {
          colabs.push(member);
          idPushed.push(member.id);
        }
      });
    });
    colabs.forEach(function (m) {
      if (m.id != user.id) {
        _final2.push(m);
      }
    });
    return _final2;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-members xhe250 xbora10 x-deep-shadow"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmale20 xmabo20"
  }, "Members (", members.length + 1, ")"), /*#__PURE__*/React.createElement("div", {
    className: "all-members x-center xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-inv xdifl xalitce x-pointer",
    onClick: invite
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-50 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xmale10 xfowebo"
  }, "Inviter")), members.map(function (m) {
    return /*#__PURE__*/React.createElement(EachWMember, {
      data: m,
      key: m.id
    });
  })));
}
function WTemplate() {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-templates x-deep-shadow xbora10 xmato15"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmale20 xmabo20"
  }, "Templates"), /*#__PURE__*/React.createElement("div", {
    className: "xdifl x-bd-bottom xhe80 x-bd-thin xwi90per x-center xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-55 dashed xbora15 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xmale20 xfowebo"
  }, "Nouvelle template")), /*#__PURE__*/React.createElement("div", {
    className: "xdifl xhe80 xwi90per x-center xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-55 dashed xbora15 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-cube"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xmale20 xfowebo"
  }, "D\xE9couvrez plus de mod\xE8les")));
}
function WProject(_ref128) {
  var data = _ref128.data,
    user = _ref128.user;
  var add = function add() {
    openAddNewProject();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "w-project x-deep-shadow xmato15 xpore xbora10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmale20 xmabo20"
  }, "Project"), /*#__PURE__*/React.createElement("div", {
    onClick: add,
    className: "w-new-pro x-pointer xbora5 xpoab xri20 xto15"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Nouveau projet")), /*#__PURE__*/React.createElement("div", {
    className: "w-table-header xmato30 x-bd-thin x-bd-bottom x-center xhe25 xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-head-tab-name"
  }, /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis"
  }, "Nom")), /*#__PURE__*/React.createElement("div", {
    className: "w-head-tab-members"
  }, /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis"
  }, "Membres"))), data.length == 0 ? /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi13 xtealce xmato30 xfowebo"
  }, "Vous n'avez aucun projet pour le moment") : data.map(function (project, key) {
    return /*#__PURE__*/React.createElement(EachWProject, {
      key: key,
      data: project,
      user: user
    }, project.name);
  }));
}
function EachWProject(_ref129) {
  var data = _ref129.data,
    children = _ref129.children,
    user = _ref129.user;
  var style = {
    background: XSettings.getColorFromChar[children[0].toLowerCase()]
  };
  var getMembers = React.useMemo(function () {
    var colabs = [];
    var _final3 = [];
    var idPushed = [];
    if (idPushed.indexOf(data.admin.id) == -1) {
      colabs.push(data.admin);
      idPushed.push(data.admin.id);
    }
    data.members.forEach(function (member) {
      if (idPushed.indexOf(member.id) == -1) {
        colabs.push(member);
        idPushed.push(member.id);
      }
    });
    colabs.forEach(function (m) {
      if (m.id != user.id) {
        _final3.push(m);
      }
    });
    return _final3;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-table-values x-center xhe40 xmato5 xdigr x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-pro-name xdifl xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-30 xbora10 x-child-center",
    style: style
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xfosi11"
  }, children[0].toLowerCase())), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xmale10 xfowebo"
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: "w-pro-members xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo"
  }, getMembers.length, " membres")));
}
function MyWorkspace(_ref130) {
  var data = _ref130.data,
    user = _ref130.user;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: "xmabo20"
  }, "Mon espace de travail"), /*#__PURE__*/React.createElement("div", {
    className: "xdigr xwi100per w-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-one"
  }, /*#__PURE__*/React.createElement(WMembers, {
    data: data,
    user: user
  }), /*#__PURE__*/React.createElement(WProject, {
    data: data,
    user: user
  }), /*#__PURE__*/React.createElement(WTemplate, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-two"
  }, /*#__PURE__*/React.createElement(WAboutUs, null), /*#__PURE__*/React.createElement(WKey, null))));
}
function WAboutUs() {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-about-us x-deep-shadow"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmale20 xmabo20"
  }, "\xC4 propos de nous"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis x-pointer xfosi13 xmale20 xmato30 xfowebo xmabo30"
  }, "Cliquez pour ajouter la description de l'\xE9quipe..."), /*#__PURE__*/React.createElement("div", {
    className: "x-pointer x-center xbora5 xhe35 x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xmato2 xfosi13"
  }, "Draft Description")));
}
function WKey() {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-key-rec x-deep-shadow xpore xmato15"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmale20 xmabo20"
  }, "Key resources"), /*#__PURE__*/React.createElement("div", {
    className: "w-add x-pointer xbora5 xpoab xri20 xto15"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Ajouter")), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi13 xmale20 xmato30 xmari20 xlihe3 xfowebo xmabo30"
  }, "Ajoutez des ressources de soutien telles que Portofolio ou un lien vers des documents externes."), /*#__PURE__*/React.createElement("div", {
    className: "xdifl w-block-file xbora5 xhe70 xwi90per x-center xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-60 xmale10 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far x-low-emphasis fa-file xfosi40"
  })), /*#__PURE__*/React.createElement("div", {
    className: "xmale20 w-file-des "
  }, /*#__PURE__*/React.createElement("div", {
    className: "xwi150 xhe15 xbora2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "xmato10 xwi120 xhe11 xbora2"
  }))));
}
function WGoal() {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-goals x-deep-shadow xmato15 xpore"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmale20 xmabo20"
  }, "Objectif"), /*#__PURE__*/React.createElement("div", {
    className: "xfowebo xfosi14 xmale20 xmari20 xmato30 xmabo10"
  }, "Cette \xE9quipe a encore \xE9t\xE9 cr\xE9\xE9e des objectifs"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis x-bd-bottom x-bd-thin xfowebo xmari20 xmale20 xfosi12 xpabo30"
  }, "Ajoutez des objectifs afin que l'\xE9quipe puisse voir ce que vous esp\xE9rez atteindre l'objectif"), /*#__PURE__*/React.createElement("div", {
    className: "xmale20 xmato20 xwi120 w-tt-goal xhe15 xbora5 xmabo10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "xwi80per xmale20 w-des-goal xhe10 xbora5 xmabo25"
  }), /*#__PURE__*/React.createElement("div", {
    className: "xdifl xmale20 xhe20 xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-10 w-des-goal"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale10 xmato2 xfosi11 xfowebo"
  }, "On track (10%) \u2022 "), /*#__PURE__*/React.createElement("div", {
    className: "xwi80 xmale10 xhe15 xbora5 w-tt-goal"
  })));
}
function MyTaskInProfile(_ref131) {
  var data = _ref131.data,
    auth_user = _ref131.auth_user;
  var _React$useState185 = React.useState('tous'),
    _React$useState186 = _slicedToArray(_React$useState185, 2),
    filter = _React$useState186[0],
    setFilter = _React$useState186[1];
  var values = [{
    val: 'tous',
    name: 'Tous'
  }, {
    val: 'en attente',
    name: 'En attente'
  }, {
    val: 'en cours',
    name: 'En cours'
  }, {
    val: 'terminé',
    name: 'Terminé'
  }, {
    val: 'arret',
    name: 'Arret'
  }];
  var handleFilterChange = function handleFilterChange(e) {
    setFilter(e.target.value);
  };
  var dataDerive = React.useMemo(function () {
    var d = [];
    data.forEach(function (project) {
      var pro = {};
      pro.name = project.name;
      pro.tasks = [];
      project.sections.forEach(function (section) {
        section.tasks.forEach(function (task) {
          if (task.user.id == auth_user.id) {
            if (filter == 'tous') {
              pro.tasks.push({
                name: task.name,
                deadline: task.deadline,
                status: task.status,
                startDate: task.startDate,
                endDate: task.endDate
              });
            } else {
              if (task.status.toLowerCase() == filter.toLowerCase()) {
                pro.tasks.push({
                  name: task.name,
                  deadline: task.deadline,
                  status: task.status,
                  startDate: task.startDate,
                  endDate: task.endDate
                });
              }
            }
          }
        });
      });
      d.push(pro);
    });
    return d;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "my-task-home xwi100per xpato20 xbora10 xovau"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xmale20 xmato15"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xmale10 xfosi20 xfowebo xmabo10 xmari10"
  }, "Mes t\xE2ches"), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-lock"
  })), /*#__PURE__*/React.createElement(XSelect, {
    style: {
      marginLeft: '20px',
      marginBottom: '10px'
    },
    value: filter,
    onChange: handleFilterChange
  }, values.map(function (v, key) {
    return /*#__PURE__*/React.createElement("option", {
      value: v.val,
      key: key
    }, v.name);
  })), dataDerive.map(function (p, key) {
    return /*#__PURE__*/React.createElement(EachTaskInProfile, {
      key: key,
      tasks: p.tasks,
      projectName: p.name
    });
  }));
}
function EachTaskInProfile(_ref132) {
  var tasks = _ref132.tasks,
    projectName = _ref132.projectName;
  var style = {
    background: XSettings.getColorFromChar[projectName[0].toLowerCase()]
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, tasks.map(function (task, key) {
    return /*#__PURE__*/React.createElement("div", {
      className: "xmato10 x-bd-top x-bd-thin each-task-home xdigr xpato10 xwi90per x-center",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-name xdifl xalitce"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon-task-name xmari10 x-circle-23 x-child-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-check"
    })), /*#__PURE__*/React.createElement("p", {
      className: "xfosi14"
    }, task.name)), /*#__PURE__*/React.createElement("div", {
      className: "project-task xdifl xalitce xjucoflen"
    }, /*#__PURE__*/React.createElement("p", {
      className: "xbora3",
      style: style
    }, __.getShortText(projectName, 10)), /*#__PURE__*/React.createElement("p", {
      className: "xmale10 x-low-emphasis xfosi12 filtered-task"
    }, task.startDate, " - ", task.endDate, " (", task.deadline, ") |  ", /*#__PURE__*/React.createElement("strong", {
      className: task.status.toLowerCase().split(' ').join('-')
    }, task.status), " ")));
  }));
}
function MyRecentProject(_ref133) {
  var projects = _ref133.projects,
    user = _ref133.user;
  return /*#__PURE__*/React.createElement("div", {
    className: "my-recent-project x-deep-shadow xbora10 xovau"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xmale20 xmato5 xfowebo"
  }, "Mon projet r\xE9cent"), /*#__PURE__*/React.createElement("div", {
    className: "display-my-projects xmato20"
  }, projects.map(function (pro) {
    return /*#__PURE__*/React.createElement(EachProjectOnRecentProject, {
      data: pro,
      key: pro.id,
      user: user
    }, pro.name);
  })));
}
function EachProjectOnRecentProject(_ref134) {
  var data = _ref134.data,
    children = _ref134.children,
    user = _ref134.user;
  var open = function open() {
    focusSlideFunc('null');
    switchMenu("project-visualisation");
    var idP = "project-visual-id-" + data.id;
    if (ALL_PROJECT_OPENED_ID.indexOf(idP) != -1) {
      ALL_PROJECT_OPENED.forEach(function (p) {
        if (p.id == idP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    } else {
      var newProjectSection = __.createElement("div", idP, "");
      projectVisualisationDOM.appendChild(newProjectSection);
      ALL_PROJECT_OPENED.push(newProjectSection);
      ALL_PROJECT_OPENED_ID.push(idP);
      var projectRender = ReactDOM.createRoot(newProjectSection);
      projectRender.render(/*#__PURE__*/React.createElement(VisualiseProject, {
        modelData: data,
        user: user
      }));
      ALL_PROJECT_OPENED.forEach(function (p) {
        if (p.id == idP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "each-recent-project xwi90per x-center xdigr xalitce x-pointer",
    onClick: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-60"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.name,
    imageURL: data.photo,
    fontSize: 20,
    width: 60
  })), /*#__PURE__*/React.createElement("div", {
    className: "title-p"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo"
  }, children), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 x-low-emphasis xmato5"
  }, "Cr\xE9er par ", data.admin.lastName, " ", data.admin.firstName)));
}
function FrequentColaborateur(_ref135) {
  var data = _ref135.data;
  var invite = function invite() {
    openInviteTeam();
  };
  var removeDuplicate = function removeDuplicate(col) {
    var all_id = [];
    var to_return = [];
    col.forEach(function (u) {
      if (all_id.indexOf(u.id) == -1) {
        all_id.push(u.id);
        to_return.push(u);
      }
    });
    return to_return;
  };
  var getColab = React.useMemo(function () {
    var true_colabs = [];
    var all_user_id = [];
    data.forEach(function (project) {
      if (all_user_id.indexOf(project.admin.id) == -1) {
        all_user_id.push(project.admin.id);
        true_colabs.push(project.admin);
      }
      project.members.forEach(function (member) {
        if (all_user_id.indexOf(member.id) == -1) {
          all_user_id.push(project.admin.id);
          true_colabs.push(member);
        }
      });
    });
    return removeDuplicate(true_colabs);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "frequent-colaborateur xbora10 xovau"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xmale5 xmato15"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmari10"
  }, "Frequent colaborateur"), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-lock"
  })), /*#__PURE__*/React.createElement("div", {
    className: "invite-team-btn xmato20 xdigr xalitce x-pointer",
    onClick: invite
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-60 x-child-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo"
  }, "Inviter des co\xE9quipiers")), getColab.map(function (colab) {
    return /*#__PURE__*/React.createElement(EachFrequentColaborateur, {
      data: colab,
      key: colab.id
    });
  }));
}
function EachFrequentColaborateur(_ref136) {
  var data = _ref136.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "invited-co xmato15 xdigr xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-60 x-child-center"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.lastName,
    imageURL: data.photo,
    width: 60,
    fontSize: 20
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo"
  }, data.lastName, " ", data.firstName));
}
function MyGoalInProfile() {
  var add = function add() {
    openAddNewGoal();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "my-goals xbora10 xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title-goals xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title-g xdifl xalitce"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo xmari10"
  }, "Mon objectifs"), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-lock"
  })), /*#__PURE__*/React.createElement("div", {
    className: "add-my-own-goal xdifl xjucoflen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-add-it x-pointer xbora5",
    onClick: add
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi11 xfowebo"
  }, "Add goals")))), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xmato30"
  }, "You don't own yet any goals"), /*#__PURE__*/React.createElement("small", {
    className: "x-low-emphasis xmato5 xfosi11"
  }, "Ajoutez un objectif afin que l'\xE9quipe puisse voir ce que vous esp\xE9rez atteindre"), /*#__PURE__*/React.createElement("div", {
    className: "xmato20 xhe12 xbora10 xwi60per tt-goal"
  }), /*#__PURE__*/React.createElement("div", {
    className: "goal-progress xhe12 xwi80per xmato10 one-goal-progress"
  }, /*#__PURE__*/React.createElement("span", {
    className: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "xdifl x-bd-bottom x-bd-thin xhe40 xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-10 on-track-point"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xmato2 xmale10"
  }, "On Track")), /*#__PURE__*/React.createElement("div", {
    className: "xmato20 xhe12 xbora10 xwi50per tt-goal"
  }), /*#__PURE__*/React.createElement("div", {
    className: "goal-progress xhe12 xwi80per xmato10 two-goal-progress"
  }, /*#__PURE__*/React.createElement("span", {
    className: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "xdifl x-bd-bottom x-bd-thin xhe40 xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-circle-10 at-risk-point"
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xmato2 xmale10"
  }, "At risk")));
}
function Profile(_ref137) {
  var profileData = _ref137.profileData,
    projects = _ref137.projects;
  var _React$useState187 = React.useState(projects),
    _React$useState188 = _slicedToArray(_React$useState187, 2),
    myData = _React$useState188[0],
    setMyData = _React$useState188[1];
  var edit = function edit() {
    openSettings();
  };
  var getProfileName = React.useMemo(function () {
    return profileData.lastName + " " + profileData.firstName;
  }, []);
  var getJobTitle = React.useMemo(function () {
    if (profileData.jobTitle && profileData.jobTitle != "") {
      return profileData.jobTitle;
    } else {
      return "...";
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xwi120 xasra1 x-child-center"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: getProfileName,
    imageURL: profileData.photo,
    fontSize: 40,
    width: 120
  })), /*#__PURE__*/React.createElement("div", {
    className: "my-info xmale20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi23 xfowebo"
  }, profileData.lastName, " ", profileData.firstName), /*#__PURE__*/React.createElement("div", {
    className: "my-fonction xdifl xmato5 xalitce"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-business-time"
  }), /*#__PURE__*/React.createElement("p", {
    className: "fonction xfosi12 xmale10"
  }, getJobTitle)), /*#__PURE__*/React.createElement("div", {
    onClick: edit,
    className: "xmato10 x-pointer btn-edit-profile xbora5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi11"
  }, "Edit profile")))), /*#__PURE__*/React.createElement("div", {
    className: "section-profile xmato50 xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-left"
  }, /*#__PURE__*/React.createElement(MyTaskInProfile, {
    data: myData,
    auth_user: profileData
  }), /*#__PURE__*/React.createElement(MyRecentProject, {
    projects: myData,
    user: profileData
  })), /*#__PURE__*/React.createElement("div", {
    className: "section-right"
  }, /*#__PURE__*/React.createElement(FrequentColaborateur, {
    data: myData
  }))));
}
function SearchBox() {
  var _React$useState189 = React.useState(""),
    _React$useState190 = _slicedToArray(_React$useState189, 2),
    searchValue = _React$useState190[0],
    setSearchValue = _React$useState190[1];
  var _React$useState191 = React.useState({
      projects: [],
      colaborateurs: []
    }),
    _React$useState192 = _slicedToArray(_React$useState191, 2),
    response = _React$useState192[0],
    setResponse = _React$useState192[1];
  var url = '/search/';
  var request = /*#__PURE__*/function () {
    var _ref138 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
      var data_to_send, formData, req;
      return _regeneratorRuntime().wrap(function _callee32$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            setLoad(true);
            data_to_send = {
              key: searchValue,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(data_to_send).forEach(function (_ref139) {
              var _ref140 = _slicedToArray(_ref139, 2),
                key = _ref140[0],
                val = _ref140[1];
              formData.append(key, val);
            });
            _context32.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context32.sent;
            if (req.isSuccess) {
              setLoad(false);
              setResponse(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  projects: req.data[0],
                  colaborateurs: req.data[1]
                });
              });
            }
          case 8:
          case "end":
            return _context32.stop();
        }
      }, _callee32);
    }));
    return function request() {
      return _ref138.apply(this, arguments);
    };
  }();
  var _React$useState193 = React.useState(false),
    _React$useState194 = _slicedToArray(_React$useState193, 2),
    load = _React$useState194[0],
    setLoad = _React$useState194[1];
  var handleChange = function handleChange(val) {
    setSearchValue(val);
  };
  React.useEffect(function () {
    $(".draft-search").val(searchValue);
    if (searchValue.length != 0) {
      request();
    }
  }, [searchValue]);
  var style = {
    width: "100%"
  };
  var getContent = React.useMemo(function () {
    if (load) {
      return /*#__PURE__*/React.createElement("div", {
        className: "xwi100per xhe150 x-child-center"
      }, /*#__PURE__*/React.createElement(XLoading, {
        w: 30,
        weight: 6,
        color: "#007BFF"
      }));
    } else {
      if (searchValue.length == 0) {
        return /*#__PURE__*/React.createElement("p", {
          className: "xfosi12 xmato30 x-low-emphasis xfowebo xtealce"
        }, "Taper pour rechercher");
      } else {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DisplayProjectSearched, {
          projects: response.projects,
          val: searchValue
        }), /*#__PURE__*/React.createElement(DisplayUserSearched, {
          users: response.colaborateurs,
          val: searchValue
        }));
      }
    }
  }, [response, searchValue, load]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "search-input-react"
  }, /*#__PURE__*/React.createElement(XSearch, {
    value: searchValue,
    style: style,
    onChange: handleChange,
    className: "real-input"
  }, "Rechercher...")), /*#__PURE__*/React.createElement("div", {
    className: "result-and-sug xmato10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recents xmato20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi18 xmabo15 xfowebo"
  }, "Results"), getContent)));
}
function DisplayProjectSearched(_ref141) {
  var projects = _ref141.projects,
    val = _ref141.val;
  var content = function () {
    if (projects.length == 0) {
      return /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xmato30 x-low-emphasis xfowebo xtealce"
      }, "Pas trouv\xE9 '", val, "'");
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, projects.map(function (pro) {
        return /*#__PURE__*/React.createElement(SearchProjectResult, {
          key: pro.id,
          data: pro
        }, pro.name);
      }));
    }
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmabo15 xfowebo"
  }, "Project"), content);
}
function DisplayUserSearched(_ref142) {
  var users = _ref142.users,
    val = _ref142.val;
  var content = function () {
    if (users.length == 0) {
      return /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xmato30 x-low-emphasis xfowebo xtealce"
      }, "Pas trouv\xE9 '", val, "'");
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, users.map(function (user) {
        return /*#__PURE__*/React.createElement(SearchUserResult, {
          key: user.id,
          data: user
        }, user.pseudo);
      }));
    }
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmabo10 xmato15 xmabo10 xfowebo"
  }, "Collaborateurs"), content);
}
function SearchProjectResult(_ref143) {
  var data = _ref143.data,
    children = _ref143.children;
  var click = function click() {
    switchMenu(null, "project-visualisation");
    projectVisualisation.render(/*#__PURE__*/React.createElement(VisualiseProject, {
      data: data
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "project-sug xmato10 xdifl xalitce x-pointer"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.name,
    width: 30,
    fontSize: 12,
    imageURL: data.photo
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale15 xfosi13 xfowebo"
  }, children));
}
function SearchUserResult(_ref144) {
  var children = _ref144.children,
    data = _ref144.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "people-sug xdifl xmato10 xalitce"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: data.lastName,
    width: 30,
    fontSize: 12,
    imageURL: data.photo
  }), /*#__PURE__*/React.createElement("p", {
    className: "xmale15 xfosi13 xfowebo"
  }, data.lastName, " ", data.firstName));
}
function Settings() {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}
function SectionAddGlobalTask() {
  var fs = {
    width: "200px"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Task name",
    className: "xfosi18 xfowebo xwi85per xmale30  xmabo20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "for-people xmabo20 xmale30 xdifl xalitce xhe40"
  }, /*#__PURE__*/React.createElement("label", {
    className: "xfosi15 xfowebo",
    htmlFor: "select-people"
  }, "For: "), /*#__PURE__*/React.createElement("select", {
    name: "select-people",
    className: "x-shadow xbora10 xwi65per xmale10",
    id: "select-people"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ste1"
  }, "Moi"), /*#__PURE__*/React.createElement("option", {
    value: "id"
  }, "bigrocket@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    className: "in-project xmabo25 xmale30 xdifl xalitce xhe40"
  }, /*#__PURE__*/React.createElement("label", {
    className: "xfosi15 xfowebo",
    htmlFor: "select-project"
  }, "In project: "), /*#__PURE__*/React.createElement("select", {
    name: "select-project",
    className: "x-shadow xbora10 xwi65per xmale10",
    id: "select-project"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ste1"
  }, "Web dev"), /*#__PURE__*/React.createElement("option", {
    value: "id"
  }, "Graphic design"))), /*#__PURE__*/React.createElement("p", {
    className: "xmale30 xfosi15 xfowebo choose-section"
  }, /*#__PURE__*/React.createElement("span", null, "Web dev"), " has 3 section"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmale30 xmato5 xfosi12 xfowebo"
  }, "Choose one section to create new task."), /*#__PURE__*/React.createElement("select", {
    name: "",
    id: "select-section",
    className: "xmato20 xwi80per xbora10 xmale30 x-deep-shadow"
  }, /*#__PURE__*/React.createElement("option", {
    value: "sjs"
  }, "To do"), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Doing"), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Do later")), /*#__PURE__*/React.createElement("textarea", {
    className: "task-des xlihe3 xfowebo x-bd-bottom x-bd-thin",
    placeholder: "Add task description"
  }), /*#__PURE__*/React.createElement(XButtonLoadable, {
    className: "xmato10",
    br: 30,
    center: true,
    style: fs,
    disabled: false
  }, "Create task"));
}
function Inbox() {
  return /*#__PURE__*/React.createElement("p", null, "Home");
}
var ALL_PROJECT_OPENED_ID = [];
var ALL_PROJECT_OPENED = [];
function EachProjectOnSideBar(_ref145) {
  var id = _ref145.id,
    children = _ref145.children,
    data = _ref145.data,
    user = _ref145.user;
  var click = function click() {
    focusSlideFunc('null');
    switchMenu("project-visualisation");
    var idP = "project-visual-id-" + id;
    if (ALL_PROJECT_OPENED_ID.indexOf(idP) != -1) {
      ALL_PROJECT_OPENED.forEach(function (p) {
        if (p.id == idP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    } else {
      var newProjectSection = __.createElement("div", idP, "");
      projectVisualisationDOM.appendChild(newProjectSection);
      ALL_PROJECT_OPENED.push(newProjectSection);
      ALL_PROJECT_OPENED_ID.push(idP);
      var projectRender = ReactDOM.createRoot(newProjectSection);
      projectRender.render(/*#__PURE__*/React.createElement(VisualiseProject, {
        modelData: data,
        user: user
      }));
      ALL_PROJECT_OPENED.forEach(function (p) {
        if (p.id == idP) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "x-square-50 each-project-arrow-on-side x-pointer",
    onClick: click
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: children,
    width: 50,
    fontSize: 15,
    imageURL: data.photo
  }));
}
var PAGE_TOKEN = document.querySelector("#page-token input").value;
function AddNewProject(_ref146) {
  var allProjects = _ref146.allProjects;
  var _React$useState195 = React.useState(""),
    _React$useState196 = _slicedToArray(_React$useState195, 2),
    projectName = _React$useState196[0],
    setProjectName = _React$useState196[1];
  var _React$useState197 = React.useState(false),
    _React$useState198 = _slicedToArray(_React$useState197, 2),
    load = _React$useState198[0],
    setLoad = _React$useState198[1];
  var _React$useState199 = React.useState(allProjects),
    _React$useState200 = _slicedToArray(_React$useState199, 2),
    allP = _React$useState200[0],
    setAllP = _React$useState200[1];
  var _React$useState201 = React.useState(""),
    _React$useState202 = _slicedToArray(_React$useState201, 2),
    sectionValue = _React$useState202[0],
    setSectionValue = _React$useState202[1];
  var fieldStyle = {
    width: "100%"
  };
  var getValue = function getValue(val) {
    setProjectName(val);
  };
  var getSectionValue = function getSectionValue(val) {
    setSectionValue(val);
  };
  var disabled = React.useMemo(function () {
    if (projectName.length > 3 && sectionValue.length >= 2) {
      return false;
    }
    return true;
  }, [projectName, sectionValue]);
  var request = /*#__PURE__*/function () {
    var _ref147 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
      var url, d, formData, req;
      return _regeneratorRuntime().wrap(function _callee33$(_context33) {
        while (1) switch (_context33.prev = _context33.next) {
          case 0:
            url = '/create_new_project/';
            d = {
              name: projectName.trim(),
              section: sectionValue.trim(),
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            formData = new FormData();
            Object.entries(d).forEach(function (_ref148) {
              var _ref149 = _slicedToArray(_ref148, 2),
                key = _ref149[0],
                value = _ref149[1];
              formData.append(key, value);
            });
            _context33.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context33.sent;
            if (req.isSuccess) {
              setAllP(function (recent) {
                return [].concat(_toConsumableArray(recent), [req.data]);
              });
              setProjectName("");
              setLoad(false);
              setSectionValue("");
            } else {
              setLoad(false);
            }
          case 8:
          case "end":
            return _context33.stop();
        }
      }, _callee33);
    }));
    return function request() {
      return _ref147.apply(this, arguments);
    };
  }();
  var create = function create() {
    setLoad(true);
    request();
  };
  React.useEffect(function () {
    setTimeout(function () {
      $("#add-new-project-box").hide();
    }, 200);
  }, [allP]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi25 xfowebo xmabo30"
  }, "Nouveau projet"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "",
    className: "xfosi13 xfowebo"
  }, "Nom du projet:"), /*#__PURE__*/React.createElement(XField, {
    value: projectName,
    onChange: getValue,
    center: true,
    shadow: true,
    className: "xmato15 xmabo15 x-deep-shadow",
    style: fieldStyle
  }, "eg: Bill on"), /*#__PURE__*/React.createElement("div", {
    className: "add-new-section xmato20 xpato15 x-bd-thin x-bd-top"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo"
  }, "Premier section"), /*#__PURE__*/React.createElement("p", {
    className: "xmato10 xfosi10 xfowebo xlihe3 x-low-emphasis"
  }, "Apres avoir cr\xE9er un nouveau projet, vous pouvez ajouter une autre section. Mais pour le moment, nous pouvons vous offrir cette premier section. Cre\xE9r le"), /*#__PURE__*/React.createElement(XField, {
    value: sectionValue,
    onChange: getSectionValue,
    center: true,
    shadow: true,
    className: "xmato15 xmabo15 x-deep-shadow",
    style: fieldStyle
  }, "eg: To do")), /*#__PURE__*/React.createElement(XButtonLoadable, {
    disabled: disabled,
    load: load,
    shadow: true,
    onClickFunc: create,
    className: "xmato20",
    style: fieldStyle
  }, "Cr\xE9er maintenant"));
}
function FormulaireAjoutFacture(_ref150) {
  var ajouterFacture = _ref150.ajouterFacture,
    clients = _ref150.clients;
  var _React$useState203 = React.useState(""),
    _React$useState204 = _slicedToArray(_React$useState203, 2),
    dateEcheance = _React$useState204[0],
    setDateEcheance = _React$useState204[1];
  var _React$useState205 = React.useState(""),
    _React$useState206 = _slicedToArray(_React$useState205, 2),
    montantTotal = _React$useState206[0],
    setMontantTotal = _React$useState206[1];
  var _React$useState207 = React.useState("impayé"),
    _React$useState208 = _slicedToArray(_React$useState207, 2),
    statut = _React$useState208[0],
    setStatut = _React$useState208[1];
  var _React$useState209 = React.useState(clients),
    _React$useState210 = _slicedToArray(_React$useState209, 2),
    projects = _React$useState210[0],
    setProjects = _React$useState210[1];
  var _React$useState211 = React.useState(projects[0]),
    _React$useState212 = _slicedToArray(_React$useState211, 2),
    projectSelected = _React$useState212[0],
    setProjectSelected = _React$useState212[1];
  var _React$useState213 = React.useState(projectSelected.client ? projectSelected.client.email : ''),
    _React$useState214 = _slicedToArray(_React$useState213, 2),
    clientEmail = _React$useState214[0],
    setClientEmail = _React$useState214[1];
  var _React$useState215 = React.useState(projectSelected.client ? projectSelected.client.number : ''),
    _React$useState216 = _slicedToArray(_React$useState215, 2),
    clientNumber = _React$useState216[0],
    setClientNumber = _React$useState216[1];
  var _React$useState217 = React.useState(projectSelected.client ? projectSelected.client.name : ''),
    _React$useState218 = _slicedToArray(_React$useState217, 2),
    nomClient = _React$useState218[0],
    setNomClient = _React$useState218[1];
  var url = '/add_invoice/';
  var handleSubmit = /*#__PURE__*/function () {
    var _ref151 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(e) {
      var nouvelleFacture, to_send, form_data, response;
      return _regeneratorRuntime().wrap(function _callee34$(_context34) {
        while (1) switch (_context34.prev = _context34.next) {
          case 0:
            e.preventDefault();
            if (!(!nomClient || !dateEcheance || !montantTotal)) {
              _context34.next = 4;
              break;
            }
            __.xAlert('Erreur', "Veuillez remplir tous les champs s'il vous plaît...", 'danger');
            return _context34.abrupt("return");
          case 4:
            nouvelleFacture = {
              id: Date.now().toString(),
              // Génère un ID unique
              client: {
                name: nomClient,
                email: clientEmail,
                number: clientNumber
              },
              project: {
                name: projectSelected.name,
                photo: projectSelected.photo
              },
              amount: montantTotal,
              date: dateEcheance,
              paid: statut == 'payé' ? true : false
            };
            to_send = {
              timestamp: nouvelleFacture.id,
              amount: montantTotal,
              date: dateEcheance,
              paid: statut == 'payé' ? true : false,
              client_name: nomClient,
              client_email: clientEmail,
              client_number: clientNumber,
              project_id: projectSelected.id,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form_data = new FormData();
            Object.entries(to_send).forEach(function (_ref152) {
              var _ref153 = _slicedToArray(_ref152, 2),
                key = _ref153[0],
                val = _ref153[1];
              form_data.append(key, val);
            });
            _context34.next = 10;
            return __.layoutRequest.post(url, form_data, 'json');
          case 10:
            response = _context34.sent;
            if (response.isSuccess) {
              ajouterFacture(nouvelleFacture);
              setNomClient("");
              setDateEcheance("");
              setMontantTotal("");
              setStatut("impayé");
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection internet et re-essayer plus tard.", 'danger');
            }
          case 12:
          case "end":
            return _context34.stop();
        }
      }, _callee34);
    }));
    return function handleSubmit(_x15) {
      return _ref151.apply(this, arguments);
    };
  }();
  var handleProjectSelected = function handleProjectSelected(e) {
    var id = e.target.value;
    var project = projects.filter(function (project) {
      return project.id == id;
    });
    project = project[0];
    if (project.client != null && project.client != undefined) {
      setNomClient(project.client.name);
      setClientNumber(project.client.number);
      setClientEmail(project.client.email);
    } else {
      setNomClient('');
      setClientNumber('');
      setClientEmail('');
    }
    setProjectSelected(project);
  };
  var handleClientNumber = function handleClientNumber(e) {
    setClientNumber(e.target.value);
  };
  var handleClientEmail = function handleClientEmail(e) {
    setClientEmail(e.target.value);
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "container-invoice-form"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "xtealce xmabo20"
  }, "Ajouter une Nouvelle Facture"), /*#__PURE__*/React.createElement("div", {
    className: "container-form xdifl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "client-form"
  }, /*#__PURE__*/React.createElement("select", {
    value: projectSelected.id,
    onChange: handleProjectSelected
  }, projects.map(function (project, key) {
    return /*#__PURE__*/React.createElement("option", {
      value: project.id,
      key: key
    }, project.name);
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo xmabo15 xmato20"
  }, "Informations du client"), /*#__PURE__*/React.createElement("div", {
    className: "input-invoice"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: nomClient,
    placeholder: "Nom du client",
    onChange: function onChange(e) {
      return setNomClient(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-invoice"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Email du client",
    value: clientEmail,
    onChange: handleClientEmail
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-invoice"
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: "Tel du client",
    value: clientNumber,
    onChange: handleClientNumber
  }))), /*#__PURE__*/React.createElement("div", {
    className: "facture-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo xmabo15"
  }, "Date de facture"), /*#__PURE__*/React.createElement("div", {
    className: "input-invoice"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: dateEcheance,
    onChange: function onChange(e) {
      return setDateEcheance(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo xmabo15"
  }, "Montant total"), /*#__PURE__*/React.createElement("div", {
    className: "input-invoice"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "Montant total",
    value: montantTotal,
    onChange: function onChange(e) {
      return setMontantTotal(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xfowebo xmabo15"
  }, "Status"), /*#__PURE__*/React.createElement("div", {
    className: "input-voice xmabo20"
  }, /*#__PURE__*/React.createElement("select", {
    value: statut,
    onChange: function onChange(e) {
      return setStatut(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "impay\xE9"
  }, "Impay\xE9"), /*#__PURE__*/React.createElement("option", {
    value: "pay\xE9"
  }, "Pay\xE9"))))), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Ajouter la Facture"));
}

// Composant pour afficher la liste des factures
function ListeFactures(_ref154) {
  var factures = _ref154.factures,
    modifierStatutFacture = _ref154.modifierStatutFacture,
    deleteFacture = _ref154.deleteFacture,
    auth_user = _ref154.auth_user;
  var _React$useState219 = React.useState(""),
    _React$useState220 = _slicedToArray(_React$useState219, 2),
    recherche = _React$useState220[0],
    setRecherche = _React$useState220[1];
  var filtrerFactures = factures.filter(function (facture) {
    return facture.client.name.toLowerCase().includes(recherche.toLowerCase());
  });
  var handleStatutChange = function handleStatutChange(id, newStatut) {
    modifierStatutFacture(id, newStatut);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xmabo20 xtealce xfowebo"
  }, "Liste des Factures ( ", filtrerFactures.length, " )"), /*#__PURE__*/React.createElement(XSearch, {
    onChange: function onChange(val) {
      return setRecherche(val);
    },
    value: recherche,
    style: {
      width: '50%'
    },
    center: true
  }, "Rechercher par nom du client"), /*#__PURE__*/React.createElement("div", {
    className: "table-invoice-title xbora20 x-deep-shadow xmato20 xmabo20 xhe65 xdigr xalitce x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoice-id"
  }, /*#__PURE__*/React.createElement("p", null, "ID")), /*#__PURE__*/React.createElement("div", {
    className: "client-side"
  }, /*#__PURE__*/React.createElement("p", null, "Client")), /*#__PURE__*/React.createElement("div", {
    className: "project-info"
  }, /*#__PURE__*/React.createElement("p", null, "Projet")), /*#__PURE__*/React.createElement("div", {
    className: "invoice-amount"
  }, /*#__PURE__*/React.createElement("p", null, "Montant")), /*#__PURE__*/React.createElement("div", {
    className: "invoice-status"
  }, /*#__PURE__*/React.createElement("p", null, "Status")), /*#__PURE__*/React.createElement("div", {
    className: "invoice-date"
  }, /*#__PURE__*/React.createElement("p", null, "Date")), /*#__PURE__*/React.createElement("div", {
    className: "invoice-method"
  }, /*#__PURE__*/React.createElement("p", null, "Options"))), filtrerFactures.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xtealce xmato50 xmabo50 xfosi13"
  }, "Aucune facture trouv\xE9e.") : filtrerFactures.map(function (facture) {
    return /*#__PURE__*/React.createElement(EachInvoice, {
      key: facture.id,
      data: facture,
      onDelete: deleteFacture,
      auth_user: auth_user
    });
  }));
}
function EachInvoice(_ref155) {
  var data = _ref155.data,
    onDelete = _ref155.onDelete,
    auth_user = _ref155.auth_user;
  var _React$useState221 = React.useState(data),
    _React$useState222 = _slicedToArray(_React$useState221, 2),
    invoice = _React$useState222[0],
    setInvoice = _React$useState222[1];
  var _React$useState223 = React.useState(false),
    _React$useState224 = _slicedToArray(_React$useState223, 2),
    loadSeding = _React$useState224[0],
    setLoadSeding = _React$useState224[1];
  var sendEmail = function sendEmail() {
    setLoadSeding(true);
    var func = function func(file_outpout) {
      return file_outpout;
    };
    invoicePaper.render(/*#__PURE__*/React.createElement(InvoicePaper, {
      data: data,
      sender: auth_user,
      callback: func,
      method: 'send'
    }));
    setTimeout(function () {
      request();
    }, 1000);
  };
  var request = /*#__PURE__*/function () {
    var _ref156 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
      var url, to_send, pdf_name, form_data, req, text;
      return _regeneratorRuntime().wrap(function _callee35$(_context35) {
        while (1) switch (_context35.prev = _context35.next) {
          case 0:
            url = '/send_invoice_email/';
            to_send = {
              csrfmiddlewaretoken: PAGE_TOKEN,
              id: invoice.id
            };
            pdf_name = 'inv_' + invoice.id + '.pdf';
            form_data = __.getFormData(to_send);
            form_data.append('pdf', INVOICE_DATA.file, pdf_name);
            _context35.next = 7;
            return __.layoutRequest.post(url, form_data, 'json');
          case 7:
            req = _context35.sent;
            if (req.isSuccess) {
              text = "Bonjour, le facture " + invoice.id + " est envoyé par email à " + invoice.client.email + " (" + invoice.client.name + ") avec succées. Merci pour votre confiance.";
              __.xAlert('Facture envoyé', text, 'success');
              setLoadSeding(false);
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection essayez plus tard.", 'danger');
              setLoadSeding(false);
            }
          case 9:
          case "end":
            return _context35.stop();
        }
      }, _callee35);
    }));
    return function request() {
      return _ref156.apply(this, arguments);
    };
  }();
  var genererPDF = function genererPDF() {
    invoicePaper.render(/*#__PURE__*/React.createElement(InvoicePaper, {
      data: data,
      sender: auth_user,
      callback: function callback() {},
      method: 'save'
    }));
  };
  var deleteInvoice = function deleteInvoice() {
    onDelete(invoice.id);
  };
  var changeStatus = /*#__PURE__*/function () {
    var _ref157 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
      var url, form, to_send, req;
      return _regeneratorRuntime().wrap(function _callee36$(_context36) {
        while (1) switch (_context36.prev = _context36.next) {
          case 0:
            url = '/change_invoice_status/';
            form = new FormData();
            to_send = {
              id: invoice.id,
              paid: !data.paid,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            Object.entries(to_send).forEach(function (_ref158) {
              var _ref159 = _slicedToArray(_ref158, 2),
                key = _ref159[0],
                val = _ref159[1];
              form.append(key, val);
            });
            _context36.next = 6;
            return __.layoutRequest.post(url, form, 'json');
          case 6:
            req = _context36.sent;
            if (req.isSuccess) {
              setInvoice(function (lastStatus) {
                return _objectSpread(_objectSpread({}, lastStatus), {}, {
                  paid: !lastStatus.paid
                });
              });
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection internet et re-essayer plus tard.", 'danger');
            }
          case 8:
          case "end":
            return _context36.stop();
        }
      }, _callee36);
    }));
    return function changeStatus() {
      return _ref157.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "each-invoice xbora20 x-deep-shadow xmato20 xmabo20 xdigr xalitce x-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoice-id-value x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, invoice.id)), /*#__PURE__*/React.createElement("div", {
    className: "client-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "client-name"
  }, invoice.client.name), /*#__PURE__*/React.createElement("p", {
    className: "client-email"
  }, invoice.client.email), /*#__PURE__*/React.createElement("p", {
    className: "client-number-phone"
  }, invoice.client.number)), /*#__PURE__*/React.createElement("div", {
    className: "project-info-value xpale10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: invoice.project.name,
    imageURL: invoice.project.photo,
    width: 45,
    fontSize: 16
  }), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo xmale10"
  }, invoice.project.name))), /*#__PURE__*/React.createElement("div", {
    className: "invoice-amount-value x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo"
  }, "$", invoice.amount)), /*#__PURE__*/React.createElement("div", {
    className: "invoice-status-value x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: invoice.paid ? "xfosi15 xfowebo paid" : "xfosi15 xfowebo not-paid"
  }, invoice.paid ? 'Payé' : 'Impayé')), /*#__PURE__*/React.createElement("div", {
    className: "invoice-date-value x-child-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo xtealice"
  }, invoice.date)), /*#__PURE__*/React.createElement("div", {
    className: "invoice-method-actions xdifl xjucospev xalitce"
  }, invoice.paid ? /*#__PURE__*/React.createElement("div", {
    className: "x-square-50 x-pointer x-child-center xbora30 not-paid",
    onClick: changeStatus
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  })) : /*#__PURE__*/React.createElement("div", {
    className: "x-square-50 x-pointer x-child-center xbora30 done",
    onClick: changeStatus
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check-circle"
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-square-50 x-pointer x-child-center xbora30 not-paid",
    onClick: deleteInvoice
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-trash-alt"
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-square-50 x-pointer x-child-center xbora30 pdf",
    onClick: genererPDF
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-file-pdf"
  })), /*#__PURE__*/React.createElement(XButtonLoadable, {
    type: "icon",
    style: {
      width: '50px',
      height: '50px'
    },
    onClickFunc: sendEmail,
    load: loadSeding,
    br: 30,
    icon: 'fa fa-paper-plane'
  }))));
}

// Composant pour ajouter une charge financière
function FormulaireCharge(_ref160) {
  var ajouterCharge = _ref160.ajouterCharge;
  var _React$useState225 = React.useState(""),
    _React$useState226 = _slicedToArray(_React$useState225, 2),
    description = _React$useState226[0],
    setDescription = _React$useState226[1];
  var _React$useState227 = React.useState(""),
    _React$useState228 = _slicedToArray(_React$useState227, 2),
    montant = _React$useState228[0],
    setMontant = _React$useState228[1];
  var _React$useState229 = React.useState(""),
    _React$useState230 = _slicedToArray(_React$useState229, 2),
    projetLie = _React$useState230[0],
    setProjetLie = _React$useState230[1];
  var _React$useState231 = React.useState(""),
    _React$useState232 = _slicedToArray(_React$useState231, 2),
    titre = _React$useState232[0],
    setTitre = _React$useState232[1];
  var _React$useState233 = React.useState(""),
    _React$useState234 = _slicedToArray(_React$useState233, 2),
    date = _React$useState234[0],
    setDate = _React$useState234[1];
  var url = '/add_charge_finance/';
  var handleSubmit = /*#__PURE__*/function () {
    var _ref161 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(e) {
      var charge, form, response;
      return _regeneratorRuntime().wrap(function _callee37$(_context37) {
        while (1) switch (_context37.prev = _context37.next) {
          case 0:
            e.preventDefault();
            charge = {
              id: Date.now(),
              titre: titre,
              date: date,
              description: description,
              montant: montant,
              projetLie: projetLie,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form = new FormData();
            Object.entries(charge).forEach(function (_ref162) {
              var _ref163 = _slicedToArray(_ref162, 2),
                key = _ref163[0],
                val = _ref163[1];
              form.append(key, val);
            });
            _context37.next = 6;
            return __.layoutRequest.post(url, form, 'json');
          case 6:
            response = _context37.sent;
            if (response.isSuccess) {
              charge.id = response.data.id, ajouterCharge(charge);
              setDescription("");
              setMontant("");
              setProjetLie("");
              __.xAlert('Requete', "Une nouvelle charge financiere ajouté", 'success');
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection internet et re-essayer plus tard.", 'danger');
            }
          case 8:
          case "end":
            return _context37.stop();
        }
      }, _callee37);
    }));
    return function handleSubmit(_x16) {
      return _ref161.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "container-add-charge"
  }, /*#__PURE__*/React.createElement("h2", null, "Ajouter une Charge Financi\xE8re"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo xmabo10"
  }, "Titre"), /*#__PURE__*/React.createElement("div", {
    className: "input-data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: titre,
    placeholder: "Titre",
    onChange: function onChange(e) {
      return setTitre(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo xmabo10"
  }, "Description"), /*#__PURE__*/React.createElement("div", {
    className: "input-data"
  }, /*#__PURE__*/React.createElement("textarea", {
    type: "text",
    placeholder: "Description",
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo xmabo10"
  }, "Montant ($)"), /*#__PURE__*/React.createElement("div", {
    className: "input-data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: montant,
    placeholder: "Montant",
    onChange: function onChange(e) {
      return setMontant(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo xmabo10"
  }, "Project ou activit\xE9"), /*#__PURE__*/React.createElement("div", {
    className: "input-data"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Project ou activit\xE9",
    type: "text",
    value: projetLie,
    onChange: function onChange(e) {
      return setProjetLie(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo xmabo10"
  }, "Date"), /*#__PURE__*/React.createElement("div", {
    className: "input-data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: date,
    placeholder: "Montant",
    onChange: function onChange(e) {
      return setDate(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "btn-data x-child-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Ajouter la charge"))));
}

// Composant pour afficher la liste des charges
function ListeCharges(_ref164) {
  var charges = _ref164.charges,
    addNewCharge = _ref164.addNewCharge;
  return /*#__PURE__*/React.createElement("div", {
    className: "container xmabo50"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "xtealce xmato30 xmabo20"
  }, "Liste des Charges Financi\xE8res ( ", charges.length, " )"), /*#__PURE__*/React.createElement("div", {
    className: "charges-lists x-scroll-horizontal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xbora20 x-child-center x-pointer add-charge",
    onClick: addNewCharge
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus"
  })), charges.map(function (charge) {
    return /*#__PURE__*/React.createElement("div", {
      key: charge.id,
      className: "charge-item"
    }, /*#__PURE__*/React.createElement("p", {
      className: "charge-title"
    }, charge.titre), /*#__PURE__*/React.createElement("p", {
      className: "charge-amount"
    }, "$", charge.montant), /*#__PURE__*/React.createElement("p", {
      className: "charge-des"
    }, charge.description), /*#__PURE__*/React.createElement("p", {
      className: "charge-project-linked"
    }, /*#__PURE__*/React.createElement("strong", null, "Projet/Activit\xE9 Li\xE9(e) :"), " ", charge.projetLie), /*#__PURE__*/React.createElement("p", {
      className: "x-low-emphasis charge-date"
    }, charge.date));
  })));
}

// Composant principal

function MyFinance(_ref165) {
  var projects = _ref165.projects,
    auth_user = _ref165.auth_user;
  var _React$useState235 = React.useState([]),
    _React$useState236 = _slicedToArray(_React$useState235, 2),
    factures = _React$useState236[0],
    setFactures = _React$useState236[1];
  var _React$useState237 = React.useState([]),
    _React$useState238 = _slicedToArray(_React$useState237, 2),
    charges = _React$useState238[0],
    setCharges = _React$useState238[1];
  var delete_url = '/delete_invoice/';
  var socket = null;
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/finance/');
    socket.onopen = function (e) {};
    socket.onclose = function (e) {};
    socket.onmessage = function (e) {
      var response = JSON.parse(e.data);
      if (Array.isArray(response)) {
        var response_facture = response[0];
        var response_charge = response[1];
        setFactures(response_facture);
        setCharges(response_charge);
      }
    };
    return function () {
      return socket.close();
    };
  }, []);
  var ajouterFacture = function ajouterFacture(facture) {
    setFactures([].concat(_toConsumableArray(factures), [facture]));
    closeAdd();
  };
  var modifierStatutFacture = function modifierStatutFacture(id) {
    setFactures(factures.map(function (fac) {
      return fac.id === id ? _objectSpread(_objectSpread({}, fac), {}, {
        statut: fac.statut === "payé" ? "impayé" : "payé"
      }) : fac;
    }));
  };
  var _React$useState239 = React.useState(false),
    _React$useState240 = _slicedToArray(_React$useState239, 2),
    addInvoiceForm = _React$useState240[0],
    setAddInvoiceForm = _React$useState240[1];
  var _React$useState241 = React.useState(false),
    _React$useState242 = _slicedToArray(_React$useState241, 2),
    addCharge = _React$useState242[0],
    setAddCharge = _React$useState242[1];
  var ajouterCharge = function ajouterCharge(charge) {
    setCharges([].concat(_toConsumableArray(charges), [charge]));
    closeAdd();
  };
  var getReadyForCharge = function getReadyForCharge() {
    black.current.style.display = "block";
    setAddCharge(true);
  };
  var getReadyForAdd = function getReadyForAdd() {
    black.current.style.display = "block";
    setAddInvoiceForm(true);
  };
  var deleteFacture = /*#__PURE__*/function () {
    var _ref166 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(f_id) {
      var d, form, req, newList;
      return _regeneratorRuntime().wrap(function _callee38$(_context38) {
        while (1) switch (_context38.prev = _context38.next) {
          case 0:
            d = {
              id: f_id,
              csrfmiddlewaretoken: PAGE_TOKEN
            };
            form = new FormData();
            Object.entries(d).forEach(function (_ref167) {
              var _ref168 = _slicedToArray(_ref167, 2),
                key = _ref168[0],
                val = _ref168[1];
              form.append(key, val);
            });
            _context38.next = 5;
            return __.layoutRequest.post(delete_url, form, 'json');
          case 5:
            req = _context38.sent;
            if (req.isSuccess) {
              newList = factures.filter(function (fa) {
                return fa.id != f_id;
              });
              setFactures(newList);
              __.xAlert('Facture supprimée', 'Vous venez de supprimez une facture.', 'info');
            } else {
              __.xAlert('Connection erreur', 'Verifier votre connection et re-essayez plus tard', 'danger');
            }
          case 7:
          case "end":
            return _context38.stop();
        }
      }, _callee38);
    }));
    return function deleteFacture(_x17) {
      return _ref166.apply(this, arguments);
    };
  }();
  var closeAdd = function closeAdd() {
    black.current.style.display = "none";
    setAddInvoiceForm(false);
    setAddCharge(false);
  };
  var black = React.useRef(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: black,
    className: "black-facture-form x-black-02",
    onClick: closeAdd
  }), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi15 x-pointer xfowebo xtealce xmato10 xmabo30",
    onClick: getReadyForAdd
  }, "Cliquer ici pour ajouter une nouvelle facture..."), /*#__PURE__*/React.createElement("div", null, addInvoiceForm ? /*#__PURE__*/React.createElement(FormulaireAjoutFacture, {
    ajouterFacture: ajouterFacture,
    clients: projects
  }) : null, /*#__PURE__*/React.createElement(ListeFactures, {
    factures: factures,
    modifierStatutFacture: modifierStatutFacture,
    deleteFacture: deleteFacture,
    auth_user: auth_user
  }), addCharge ? /*#__PURE__*/React.createElement(FormulaireCharge, {
    ajouterCharge: ajouterCharge
  }) : null, /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi15 x-pointer xfowebo xtealce xmato50 xmabo30",
    onClick: getReadyForCharge
  }, "Cliquer ici pour ajouter une charge financiere..."), /*#__PURE__*/React.createElement(ListeCharges, {
    charges: charges,
    addNewCharge: getReadyForCharge
  })));
}
window.jsPDF = window.jspdf.jsPDF;
function InvoicePaper(_ref169) {
  var data = _ref169.data,
    sender = _ref169.sender,
    method = _ref169.method,
    callback = _ref169.callback;
  React.useEffect(function () {
    setTimeout(function () {
      var qrcode = new QRCode('write-qrcode', {
        text: "".concat(data.id, ": ").concat(data.paid ? 'Payé' : 'Impayé'),
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });
    }, 200);
  });
  React.useEffect(function () {
    setTimeout(function () {
      var el = document.querySelector('.invoice-paper');
      var elementWidth = el.scrollWidth;
      var elementHeight = el.scrollHeight;
      var pdfWidth = 210;
      var pdfHeight = 297;
      var pdfAspectRatio = pdfWidth / pdfHeight;
      var elementAspectRatio = elementWidth / elementHeight;
      var finalWidth = pdfWidth;
      var finalHeight = pdfHeight;
      if (elementAspectRatio > pdfAspectRatio) {
        finalHeight = pdfWidth / elementAspectRatio;
      } else {
        finalWidth = pdfHeight * elementAspectRatio;
      }
      html2canvas(el, {
        scale: 1.1,
        width: elementWidth,
        height: elementHeight
      }).then(function (canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, "PNG", 0, 0, finalWidth, finalHeight);
        if (method == 'send') {
          var pdfBlob = pdf.output('blob');
          INVOICE_DATA.setFile(pdfBlob);
          callback(pdfBlob);
          setTimeout(function () {
            var qrcode_el = document.querySelector('#write-qrcode');
            qrcode_el.innerHTML = '';
          }, 1000);
        } else {
          pdf.save("document".concat(Date.now().toString()));
        }
      });
    }, 400);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "xdigr header-invoice-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-logo xdifl xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-icon xmari20"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-file-pdf xfosi23"
  })), /*#__PURE__*/React.createElement("div", {
    className: "logo-name"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "IMMONIVO"))), /*#__PURE__*/React.createElement("div", {
    className: "paper-name"
  }, /*#__PURE__*/React.createElement("p", null, "FACTURE"))), /*#__PURE__*/React.createElement("div", {
    className: "invoice-destinator xdigr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dest"
  }, /*#__PURE__*/React.createElement("p", {
    className: "name xfowebo"
  }, "\xC2:"), /*#__PURE__*/React.createElement("p", {
    className: "name xfowebo"
  }, data.client.name), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xmato3"
  }, data.client.email), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xmato3"
  }, data.client.number), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xmato3"
  }, data.client.address)), /*#__PURE__*/React.createElement("div", {
    className: "invoice-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "De:"), /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, sender.lastName, " ", sender.firstName), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo x-low-emphasis"
  }, sender.email))), /*#__PURE__*/React.createElement("p", {
    className: "xmato50"
  }, "Facture ID: ", /*#__PURE__*/React.createElement("strong", null, data.id)), /*#__PURE__*/React.createElement("p", {
    className: "xmato6 xfosi13"
  }, "Date de facture: ", /*#__PURE__*/React.createElement("strong", null, data.date)), /*#__PURE__*/React.createElement("p", {
    className: "xmato6 xfosi13"
  }, "Status: ", /*#__PURE__*/React.createElement("strong", null, data.paid ? 'Payé' : 'Impayé')), /*#__PURE__*/React.createElement("div", {
    className: "invoice-table x-bd-top x-bd-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quant"
  }, /*#__PURE__*/React.createElement("p", null, "Quantit\xE9")), /*#__PURE__*/React.createElement("div", {
    className: "projet-name"
  }, /*#__PURE__*/React.createElement("p", null, "Nom de projet")), /*#__PURE__*/React.createElement("div", {
    className: "montant"
  }, /*#__PURE__*/React.createElement("p", null, "Montant")), /*#__PURE__*/React.createElement("div", {
    className: "total"
  }, /*#__PURE__*/React.createElement("p", null, "Total"))), /*#__PURE__*/React.createElement("div", {
    className: "invoice-values"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quant"
  }, /*#__PURE__*/React.createElement("p", null, "1")), /*#__PURE__*/React.createElement("div", {
    className: "projet-name"
  }, /*#__PURE__*/React.createElement("p", null, data.project.name)), /*#__PURE__*/React.createElement("div", {
    className: "montant"
  }, /*#__PURE__*/React.createElement("p", null, "$", data.amount)), /*#__PURE__*/React.createElement("div", {
    className: "total"
  }, /*#__PURE__*/React.createElement("p", null, "$", data.amount))), /*#__PURE__*/React.createElement("div", {
    className: "invoice-total"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "sous-total xfosi14 x-low-emphasis"
  }, "Sous-total: $", data.amount), /*#__PURE__*/React.createElement("p", {
    className: "xfosi14 xmato4 x-low-emphasis"
  }, "TVA (0%): $0"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xmato15"
  }, "TOTAL: $", data.amount))), /*#__PURE__*/React.createElement("div", {
    className: "qrcode-and-ref xmato90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-qrcode",
    id: "write-qrcode"
  })), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi12 xtealce xmato50"
  }, "Scanner le code QR ci-dessus"));
}
function SetupProfile(_ref170) {
  var data = _ref170.data;
  var name = React.useMemo(function () {
    return data.lastName + " " + data.firstName;
  }, []);
  React.useEffect(function () {
    var email = document.querySelector("#my-email-on-side-bar");
    email.innerHTML = data.email;
  }, []);
  return /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: name,
    imageURL: data.photo,
    width: 90,
    fontSize: 30
  });
}
function ProfileOnHeader(_ref171) {
  var data = _ref171.data;
  var name = React.useMemo(function () {
    return data.lastName + " " + data.firstName;
  }, []);
  return /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: name,
    imageURL: data.photo,
    width: 35,
    fontSize: 14
  });
}
function Notification(_ref172) {
  var data = _ref172.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "each-notif xpore xpabo10 xpato10 x-bd-thin x-bd-bottom x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge-if-not-seen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-50"
  }, /*#__PURE__*/React.createElement("i", {
    className: data.icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "notif-texto xmato10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi11 xlihe3"
  }, data.text), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi10 xmato3"
  }, getFormatDateTime(data.datetime))));
}
var notificationBagdeDOM = document.querySelector('.notif-bull .notif-bagde p');
var notifDisplay = document.querySelector('.new-notif-display');
var notifDipslayText = notifDisplay.querySelector('p');
function AllNotifications(_ref173) {
  _objectDestructuringEmpty(_ref173);
  var _React$useState243 = React.useState(true),
    _React$useState244 = _slicedToArray(_React$useState243, 2),
    load = _React$useState244[0],
    setLoad = _React$useState244[1];
  var _React$useState245 = React.useState([]),
    _React$useState246 = _slicedToArray(_React$useState245, 2),
    data = _React$useState246[0],
    setData = _React$useState246[1];
  var notificationSocket = null;
  var newNotSound = function newNotSound() {
    messagePopDOM.play();
  };
  React.useEffect(function () {
    notificationSocket = new WebSocket('ws://' + window.location.host + '/ws/notification/');
    notificationSocket.onmessage = function (e) {
      var response = JSON.parse(e.data);
      if (Array.isArray(response)) {
        setLoad(false);
        setData(response);
      } else {
        notifDisplay.style.display = 'inline-block';
        notifDipslayText.innerHTML = response.text;
        newNotSound();
        setData(function (recent) {
          return [].concat(_toConsumableArray(recent), [response]);
        });
        setTimeout(function () {
          notifDisplay.style.display = 'none';
        }, 4000);
      }
    };
    notificationSocket.onopen = function (e) {};
    notificationSocket.onclose = function (e) {};
    return function () {
      return notificationSocket.close();
    };
  }, []);
  React.useEffect(function () {
    notificationBagdeDOM.innerHTML = data.length;
  }, [load, data]);
  var content = React.useMemo(function () {
    if (!load) {
      if (data.length == 0) {
        return /*#__PURE__*/React.createElement("p", {
          className: "xtealce xmato50 x-low-emphasis xfosi13 xmabo50"
        }, "Vous n'avez aucune notification pour le moment");
      } else {
        return /*#__PURE__*/React.createElement(React.Fragment, null, data.map(function (notif) {
          return /*#__PURE__*/React.createElement(Notification, {
            data: notif,
            key: notif.id
          });
        }));
      }
    } else {
      return null;
    }
  }, [load, data]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, load ? /*#__PURE__*/React.createElement("p", {
    className: "xtealce xmato50 x-low-emphasis xfosi13 xmabo50"
  }, "Chargement des notifications...") : content);
}
function ProfileSettings(_ref174) {
  var profile = _ref174.profile;
  var _React$useState247 = React.useState({
      photoTouched: false,
      photo: profile.photo,
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      jobTitle: profile.jobTitle,
      description: profile.description,
      username: profile.username,
      csrfmiddlewaretoken: PAGE_TOKEN
    }),
    _React$useState248 = _slicedToArray(_React$useState247, 2),
    data = _React$useState248[0],
    setData = _React$useState248[1];
  var _React$useState249 = React.useState(false),
    _React$useState250 = _slicedToArray(_React$useState249, 2),
    load = _React$useState250[0],
    setLoad = _React$useState250[1];
  var _React$useState251 = React.useState(false),
    _React$useState252 = _slicedToArray(_React$useState251, 2),
    errorUsername = _React$useState252[0],
    setErrorUsername = _React$useState252[1];
  var _React$useState253 = React.useState(profile.lastName),
    _React$useState254 = _slicedToArray(_React$useState253, 2),
    lastestLastName = _React$useState254[0],
    setLatestLastName = _React$useState254[1];
  var input = React.useRef(null);
  var handlePhotoChange = function handlePhotoChange(e) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        photo: e.target.files[0],
        photoTouched: true
      });
    });
  };
  var handleEmailChange = function handleEmailChange(val) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        email: val
      });
    });
  };
  var request = /*#__PURE__*/function () {
    var _ref175 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
      var formData, url, req, message;
      return _regeneratorRuntime().wrap(function _callee39$(_context39) {
        while (1) switch (_context39.prev = _context39.next) {
          case 0:
            formData = new FormData();
            Object.entries(data).forEach(function (_ref176) {
              var _ref177 = _slicedToArray(_ref176, 2),
                key = _ref177[0],
                value = _ref177[1];
              formData.append(key, value);
            });
            url = '/update_profile/';
            _context39.next = 5;
            return __.layoutRequest.post(url, formData, 'json');
          case 5:
            req = _context39.sent;
            message = '';
            if (req.isSuccess) {
              message = 'Bonjour ' + data.lastName + ', votre profile a été mis à jour. Merci beaucoup!';
              __.xAlert('Informations editée', message, 'success');
              setLoad(false);
            } else {
              message = 'Oupps, quelques choses ne va pas bien. Verifiez votre connection et essayez plus tard.';
              __.xAlert('Error!', message, 'danger');
              setLoad(false);
            }
          case 8:
          case "end":
            return _context39.stop();
        }
      }, _callee39);
    }));
    return function request() {
      return _ref175.apply(this, arguments);
    };
  }();
  var validChange = function validChange() {
    setLoad(true);
    request();
  };
  var handleLastNameChange = function handleLastNameChange(val) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        lastName: val
      });
    });
  };
  var handleFirstNameChange = function handleFirstNameChange(val) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        firstName: val
      });
    });
  };
  var handleUsernameChange = function handleUsernameChange(val) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        username: val
      });
    });
    setErrorUsername(false);
  };
  var handleJobTitleChange = function handleJobTitleChange(val) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        jobTitle: val
      });
    });
  };
  var handleDescriptionChange = function handleDescriptionChange(e) {
    setData(function (recent) {
      return _objectSpread(_objectSpread({}, recent), {}, {
        description: e.target.value
      });
    });
  };
  var choosePhoto = function choosePhoto() {
    input.current.click();
  };
  var disabled = React.useMemo(function () {
    if (__.testEmail(data.email.trim()) && data.lastName.trim().length >= 2 && data.firstName.trim().length >= 2 && __.testUsername(data.username.trim())) {
      return false;
    }
    return true;
  }, [data]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo"
  }, "Param\xE8tre de profile"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xmato10 xfosi12"
  }, "Completez votre profile si neccessaire pour mieux votre conna\xEEtre qui vous \xEAtez ..."), /*#__PURE__*/React.createElement("div", {
    className: "section-settings xdigr xmato30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-photo-settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center xmabo50"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: lastestLastName,
    fontSize: 30,
    width: 190,
    imageURL: data.photo
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi13 xfowebo x-text-info xtealce x-pointer xmabo30",
    onClick: choosePhoto
  }, "Cliquer pour ", data.photo != null ? 'changer le' : 'choisir un', " photo"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    onChange: handlePhotoChange,
    name: "",
    id: "",
    className: "x-square-0 xop0",
    ref: input
  }), /*#__PURE__*/React.createElement(XField, {
    type: 'email',
    center: true,
    style: {
      width: '90%'
    },
    value: data.email,
    onChange: handleEmailChange
  }, "Email")), /*#__PURE__*/React.createElement("div", {
    className: "others-info-settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name-settings xdifl xjucospev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "last-name-settings xwi45per"
  }, /*#__PURE__*/React.createElement(XField, {
    center: true,
    style: {
      width: '100%'
    },
    value: data.lastName,
    onChange: handleLastNameChange
  }, "Pr\xE9nom")), /*#__PURE__*/React.createElement("div", {
    className: "last-name-settings xwi45per"
  }, /*#__PURE__*/React.createElement(XField, {
    center: true,
    style: {
      width: '100%'
    },
    value: data.firstName,
    onChange: handleFirstNameChange
  }, "Nom"))), /*#__PURE__*/React.createElement("div", {
    className: "name-settings xdifl xjucospev xmato30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "last-name-settings xwi45per"
  }, /*#__PURE__*/React.createElement(XField, {
    type: 'email',
    center: true,
    style: {
      width: '100%'
    },
    value: data.username,
    onChange: handleUsernameChange
  }, "Nom d'utilisateur"), errorUsername ? /*#__PURE__*/React.createElement("p", {
    className: "x-text-danger xmato8 xfowebo xfosi11"
  }, "Nom d'utilisateur d\xE9ja exist\xE9") : null), /*#__PURE__*/React.createElement("div", {
    className: "last-name-settings xwi45per"
  }, /*#__PURE__*/React.createElement(XField, {
    center: true,
    style: {
      width: '100%'
    },
    value: data.jobTitle,
    onChange: handleJobTitleChange
  }, "Titre: eg (D\xE9veloppeur web)"))), /*#__PURE__*/React.createElement("div", {
    className: "des-settings xwi90per x-center xmato20"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "xlihe5",
    value: data.description,
    onChange: handleDescriptionChange,
    placeholder: "Descriptez-vous ici en quelques mots..."
  })), /*#__PURE__*/React.createElement("div", {
    className: "xmato20"
  }, /*#__PURE__*/React.createElement(XButtonLoadable, {
    center: true,
    style: {
      width: '90%',
      height: '48px'
    },
    onClickFunc: validChange,
    load: load,
    disabled: disabled,
    br: 30
  }, "Engresitrer")))));
}
var PROJECTS_LIST_PROD;
var USER_AUTHENTIFIED_INFO_PROD;
function getUserInfo() {
  return _getUserInfo.apply(this, arguments);
}
function _getUserInfo() {
  _getUserInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
    var url, request;
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          url = "/my_info/";
          _context40.next = 3;
          return __.layoutRequest.get(url, null, 'json');
        case 3:
          request = _context40.sent;
          if (request.isSuccess) {
            USER_AUTHENTIFIED_INFO_PROD = request.data;
          } else {
            USER_AUTHENTIFIED_INFO_PROD = {};
          }
          getMyAllProjects();
        case 6:
        case "end":
          return _context40.stop();
      }
    }, _callee40);
  }));
  return _getUserInfo.apply(this, arguments);
}
function getMyAllProjects(_x18) {
  return _getMyAllProjects.apply(this, arguments);
}
function _getMyAllProjects() {
  _getMyAllProjects = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(userID) {
    var url, request;
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          url = '/get_my_projects/';
          _context41.next = 3;
          return __.layoutRequest.get(url, null, 'json');
        case 3:
          request = _context41.sent;
          if (request.isSuccess) {
            PROJECTS_LIST_PROD = request.data;
          } else {
            PROJECTS_LIST_PROD = [];
          }
          getMyNotes();
        case 6:
        case "end":
          return _context41.stop();
      }
    }, _callee41);
  }));
  return _getMyAllProjects.apply(this, arguments);
}
var MY_NOTES = null;
function getMyNotes() {
  return _getMyNotes.apply(this, arguments);
} // render all JSX
function _getMyNotes() {
  _getMyNotes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
    var url, request;
    return _regeneratorRuntime().wrap(function _callee42$(_context42) {
      while (1) switch (_context42.prev = _context42.next) {
        case 0:
          url = '/get_my_notes/';
          _context42.next = 3;
          return __.layoutRequest.get(url, null, 'json');
        case 3:
          request = _context42.sent;
          if (request.isSuccess) {
            MY_NOTES = request.data;
          } else {
            MY_NOTES = [];
          }
          renderAll();
        case 6:
        case "end":
          return _context42.stop();
      }
    }, _callee42);
  }));
  return _getMyNotes.apply(this, arguments);
}
function renderAll() {
  preparation.innerHTML = "Vous êtez presque...";
  mynote.render(/*#__PURE__*/React.createElement(ProjectNotes, {
    personal: true,
    data: MY_NOTES,
    auth_user: USER_AUTHENTIFIED_INFO_PROD,
    title: "Mes notes",
    des: "Votre notes personelles. Non lié à des projets...",
    id: "my-note-id-" + USER_AUTHENTIFIED_INFO_PROD.id
  }));
  inviteToJoin.render(/*#__PURE__*/React.createElement(InviteToJoinProject, {
    data: PROJECTS_LIST_PROD,
    close: hideBlack
  }));
  profilepic.render(/*#__PURE__*/React.createElement(SetupProfile, {
    data: USER_AUTHENTIFIED_INFO_PROD
  }));
  addproject.render(/*#__PURE__*/React.createElement(AddNewProject, {
    allProjects: PROJECTS_LIST_PROD
  }));
  sectionGlobalTask.render(/*#__PURE__*/React.createElement(SectionAddGlobalTask, null));
  search.render(/*#__PURE__*/React.createElement(SearchBox, null));
  profile.render(/*#__PURE__*/React.createElement(Profile, {
    profileData: USER_AUTHENTIFIED_INFO_PROD,
    projects: PROJECTS_LIST_PROD
  }));
  myWorkspace.render(/*#__PURE__*/React.createElement(MyWorkspace, {
    data: PROJECTS_LIST_PROD,
    user: USER_AUTHENTIFIED_INFO_PROD
  }));
  profileOnHeader.render(/*#__PURE__*/React.createElement(ProfileOnHeader, {
    data: USER_AUTHENTIFIED_INFO_PROD
  }));
  home.render(/*#__PURE__*/React.createElement(Home, {
    user: USER_AUTHENTIFIED_INFO_PROD,
    data: PROJECTS_LIST_PROD
  }));
  projectList.render(/*#__PURE__*/React.createElement(ProjectListed, {
    user: USER_AUTHENTIFIED_INFO_PROD
  }));
  mytasks.render(/*#__PURE__*/React.createElement(MyTask, {
    projects: PROJECTS_LIST_PROD,
    user: USER_AUTHENTIFIED_INFO_PROD
  }));
  taskManager.render(/*#__PURE__*/React.createElement(TaskManager, {
    user: USER_AUTHENTIFIED_INFO_PROD
  }));
  myFinance.render(/*#__PURE__*/React.createElement(MyFinance, {
    projects: PROJECTS_LIST_PROD,
    auth_user: USER_AUTHENTIFIED_INFO_PROD
  }));
  notification.render(/*#__PURE__*/React.createElement(AllNotifications, null));
  setting.render(/*#__PURE__*/React.createElement(ProfileSettings, {
    profile: USER_AUTHENTIFIED_INFO_PROD
  }));
  rapport.render(/*#__PURE__*/React.createElement(Rapport, {
    data: PROJECTS_LIST_PROD,
    user: USER_AUTHENTIFIED_INFO_PROD
  }));
  portfolio.render(/*#__PURE__*/React.createElement(PortefeuilleForm, {
    projetsExistants: PROJECTS_LIST_PROD,
    user: USER_AUTHENTIFIED_INFO_PROD
  }));
  objectif.render(/*#__PURE__*/React.createElement(Objectif, {
    user: USER_AUTHENTIFIED_INFO_PROD,
    data: PROJECTS_LIST_PROD
  }));
  changePasswordForm.render(/*#__PURE__*/React.createElement(ChangePasswordForm, null));
  setTimeout(function () {
    $("#page-loading").fadeOut(300);
  }, 2000);
}
getUserInfo();
