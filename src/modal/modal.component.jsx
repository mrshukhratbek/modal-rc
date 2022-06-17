import "./modal.css";
import Draggable from "react-draggable";
import { hoc } from "../utils";
import { useModalProps } from "./modal.props";
import { Minimize } from "./minimize";
import React from "react";

const Modal = hoc(
  useModalProps,
  ({
    children,
    title = "Modal title",
    open = false,
    handleClose = () => {},
    draggable = false,
    minimizeble = false,
  }) => {
    const [minimize, setMinimize] = React.useState(false);
    const handleMinimize = () => setMinimize(true);

    const modal = (
      <div
        className="modal-dialog"
        style={{ display: open ? "block" : "none", maxWidth: "500px" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <div>
              {minimizeble && (
                <button
                  type="button"
                  className="btn-close minimize-btn me-2"
                  aria-label="Minimize"
                  onClick={handleMinimize}
                >
                  &#128469;
                </button>
              )}
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    );

    const minimizeComponent = (
      <Minimize
        title={title}
        handleClose={handleClose}
        minimize={minimize}
        setMinimize={setMinimize}
      />
    );

    if (draggable) {
      return (
        <>
          {!minimize && <Draggable>{modal}</Draggable>}
          {minimizeble && minimizeComponent}
        </>
      );
    }

    return (
      <>
        {!minimize && modal} {minimizeble && minimizeComponent}
      </>
    );
  }
);

export default Modal;
