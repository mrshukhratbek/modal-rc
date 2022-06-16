import React from 'react';
import { Modal } from './modal';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setOpen(true)}
      >
        Launch demo modal
      </button>
      text
      <Modal
        title="More info"
        open={open}
        handleClose={handleClose}
        draggable={true}
        minimizeble={true}
      >
        Content
      </Modal>
    </div>
  );
}

export default App;
