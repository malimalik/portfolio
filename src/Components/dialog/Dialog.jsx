import ReactDOM from "react-dom";
const Dialog = ({ header, body, handleClose}) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75 transition-opacity opacity-100">
          {/* Background overlay */}
        </div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabIndex="-1"
          aria-hidden="false"
          className="fixed bg-slate-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-11/12 max-w-2xl max-h-[90vh] text-inherit p-4 border-yellow-600 border-2 
          rounded-lg shadow-xl z-30 overflow-auto fadeIn transition-all 
          duration-300 ease-in-out"
          >
          {/* Modal content */}
          <div className="relative h-full">
            {/* Modal header */}
            <div className="flex justify-center p-4 md:p-5 rounded-t text-center">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-black">
                {header}
              </h3>
            </div>
            {/* Modal body */}
            <div className="overflow-auto">{body}</div>
            {/* Modal footer */}
            <div className="flex justify-center p-4 md:p-5 border-gray-200">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 mt-6 border-none gap-2 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg"
                onClick={handleClose}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default Dialog;
