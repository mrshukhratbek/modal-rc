"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _minimize = require("./minimize.component");

Object.keys(_minimize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _minimize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _minimize[key];
    },
  });
});
