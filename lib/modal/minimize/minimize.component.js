"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Minimize = void 0;

require("./minimize.css");

var _utils = require("../../utils");

var _minimize2 = require("./minimize.props");

const Minimize = (0, _utils.hoc)(_minimize2.useMinimizeProps, (_ref) => {
  let {
    open = false,
    title = "Modal title",
    minimize = false,
    handleClose = () => {},
    setMinimize = () => {},
  } = _ref;

  const handleMaximize = () => setMinimize(false);

  const minimizeComponent = /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "minimize border",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "modal-header",
      },
      /*#__PURE__*/ React.createElement(
        "h5",
        {
          className: "modal-title",
          id: "exampleModalLabel",
        },
        title
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        null,
        /*#__PURE__*/ React.createElement(
          "button",
          {
            type: "button",
            className: "btn-close minimize-btn me-2",
            "aria-label": "Minimize",
            onClick: handleMaximize,
          },
          "\uD83D\uDDD6"
        ),
        /*#__PURE__*/ React.createElement("button", {
          type: "button",
          className: "btn-close",
          "aria-label": "Close",
          onClick: handleClose,
        })
      )
    )
  );

  if (minimize) {
    return minimizeComponent;
  }

  return null;
});
exports.Minimize = Minimize;
