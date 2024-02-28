import ReactDOM from "react-dom";

const Dialog = ({ header, body, handleClose }) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <div class="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75"></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabIndex="-1"
          aria-hidden="false"
          class="fixed top-1/4 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl bg-white p-4 rounded-lg shadow-xl z-30 animate-none"
        >
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg  h-full w-full dark:bg-white">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-black ">
                {header}
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="overflow-auto">
              {body}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="button"
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-color: rgb(232 184 109); hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 align-middle"
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
