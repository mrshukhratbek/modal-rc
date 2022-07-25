"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.hoc = void 0;

require("core-js/modules/es.object.assign.js");

function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}

const hoc = (hook, Component, displayName) => {
  Component.displayName = displayName || Component.name;

  const HocResult = (props) => {
    const hookProps = hook(props);
    return /*#__PURE__*/ React.createElement(
      Component,
      _extends({}, hookProps, props)
    );
  };

  HocResult.hook = hook;
  HocResult.Original = Component;
  return HocResult;
};

exports.hoc = hoc;
