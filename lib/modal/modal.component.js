"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("./modal.css");

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _utils = require("../utils");

var _modal2 = require("./modal.props");

var _minimize = require("./minimize");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Modal = (0, _utils.hoc)(_modal2.useModalProps, (_ref) => {
  let {
    children,
    title = "Modal title",
    open = false,
    handleClose = () => {},
    draggable = false,
    minimizeble = false,
  } = _ref;

  const [minimize, setMinimize] = _react.default.useState(false);

  const handleMinimize = () => setMinimize(true);

  const modal = /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      className: "modal-dialog",
      style: {
        display: open ? "block" : "none",
        maxWidth: "500px",
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "modal-content",
      },
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "modal-header",
        },
        /*#__PURE__*/ _react.default.createElement(
          "h5",
          {
            className: "modal-title",
            id: "exampleModalLabel",
          },
          title
        ),
        /*#__PURE__*/ _react.default.createElement(
          "div",
          null,
          minimizeble &&
            /*#__PURE__*/ _react.default.createElement(
              "button",
              {
                type: "button",
                className: "btn-close minimize-btn me-2",
                "aria-label": "Minimize",
                onClick: handleMinimize,
              },
              "\uD83D\uDDD5"
            ),
          /*#__PURE__*/ _react.default.createElement("button", {
            type: "button",
            className: "btn-close",
            "aria-label": "Close",
            onClick: handleClose,
          })
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "modal-body",
        },
        children
      ),
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "modal-footer",
        },
        /*#__PURE__*/ _react.default.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-secondary",
            "data-bs-dismiss": "modal",
          },
          "Close"
        ),
        /*#__PURE__*/ _react.default.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-primary",
          },
          "Save changes"
        )
      )
    )
  );

  const minimizeComponent = /*#__PURE__*/ _react.default.createElement(
    _minimize.Minimize,
    {
      title: title,
      handleClose: handleClose,
      minimize: minimize,
      setMinimize: setMinimize,
    }
  );

  if (draggable) {
    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      !minimize &&
        /*#__PURE__*/ _react.default.createElement(
          _reactDraggable.default,
          null,
          modal
        ),
      minimizeble && minimizeComponent
    );
  }

  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    !minimize && modal,
    " ",
    minimizeble && minimizeComponent
  );
});
var _default = Modal;
exports.default = _default;
