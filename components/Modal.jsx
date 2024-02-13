import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" flex flex-col ">
        <button
          className="text-white text-xl place-self-end lowercase"
          onClick={() => onClose()}
        >
          {" "}
          x
        </button>
        <div className=" p-2 m-3 rounded-2xl">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
