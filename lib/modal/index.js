"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _modal = require("./modal.component");

Object.keys(_modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _modal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modal[key];
    },
  });
});
