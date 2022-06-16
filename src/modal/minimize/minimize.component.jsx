import './minimize.css';
import { hoc } from '../../utils';
import { useMinimizeProps } from './minimize.props';

export const Minimize = hoc(
  useMinimizeProps,
  ({
    open = false,
    title = 'Modal title',
    minimize = false,
    handleClose = () => {},
    setMinimize = () => {},
  }) => {
    const handleMaximize = () => setMinimize(false);

    const minimizeComponent = (
      <div className="minimize border">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {title}
          </h5>
          <div>
            <button
              type="button"
              className="btn-close minimize-btn me-2"
              aria-label="Minimize"
              onClick={handleMaximize}
            >
              &#128470;
            </button>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
        </div>
      </div>
    );

    if (minimize) {
      return minimizeComponent;
    }
    return null;
  }
);
