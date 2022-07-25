"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _hoc = require("./hoc");

Object.keys(_hoc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hoc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hoc[key];
    },
  });
});
