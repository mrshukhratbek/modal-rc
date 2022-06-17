(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("modal/modal.component"))
    : typeof define === "function" && define.amd
    ? define(["exports", "modal/modal.component"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global["modal-react"] = {}), global.modal_component));
})(this, function (exports, modal_component) {
  "use strict";

  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }

  var modal_component__default =
    /*#__PURE__*/ _interopDefaultLegacy(modal_component);

  Object.defineProperty(exports, "Modal", {
    enumerable: true,
    get: function () {
      return modal_component__default["default"];
    },
  });

  Object.defineProperty(exports, "__esModule", { value: true });
});
