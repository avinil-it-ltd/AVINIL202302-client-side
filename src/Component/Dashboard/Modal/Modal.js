import React from 'react';

const Modal = () => {
    const handleMidResult = (e) => {};
    return (
        <div>
            <input type="checkbox" id="mid-result-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="mid-result-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class=" font-bold text-xl text-center">
            Please Input The Mid Number
          </h3>
          <p className="text-lg text-center flex justify-between my-2 mx-4">
            <span>Name</span> <span>roll</span> <span>Final Exam</span>
          </p>

          {/* update mid result modal */}

          <input type="checkbox" id="mid-result-modal" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label
                for="mid-result-modal"
                class="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 class=" font-bold text-xl text-center">
                Please Input The Mid Number
              </h3>
              <p className="text-lg text-center flex justify-between my-2 mx-4">
                <span>Name</span> <span>roll</span> <span>Final Exam</span>
              </p>

              <form action="" onSubmit={handleMidResult} className="mx-2  ">
                <div className="flex justify-between">
                  <input
                    type="text"
                    id="bengali"
                    placeholder="Enter Bengali number"
                    name="bengali"
                    class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <input
                    type="text"
                    id="english"
                    placeholder="Enter English number"
                    name="english"
                    class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="flex justify-between">
                  <input
                    type="text"
                    id="math"
                    placeholder="Enter Math number"
                    name="math"
                    class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <input
                    type="text"
                    id="physics"
                    placeholder="Enter Physics number"
                    name="physics"
                    class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="flex justify-between">
                  <input
                    type="text"
                    id="chemistry"
                    placeholder="Enter Chemistry number"
                    name="chemistry"
                    class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <input
                    type="text"
                    id="biology"
                    placeholder="Enter Biology number"
                    name="biology"
                    class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline bg-cyan-500 text-white w-full my-4"
                >
                  Update Mid Result
                </button>
              </form>
            </div>
          </div>

          {/* update final result modal */}
          <form action="" className="mx-2  ">
            <input
              type="checkbox"
              id="final-result-modal"
              class="modal-toggle"
            />
            <div class="modal">
              <div class="modal-box relative">
                <label
                  for="final-result-modal"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class=" font-bold text-xl text-center">
                  Please Input The Final Number
                </h3>
                <p className="text-lg text-center flex justify-between my-2 mx-4">
                  <span>Name</span> <span>roll</span> <span>Final Exam</span>
                </p>

                <form action="" className="mx-2  ">
                  <div className="flex justify-between">
                    <input
                      type="text"
                      id="bengali"
                      placeholder="Enter Bengali number"
                      name="bengali"
                      class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <input
                      type="text"
                      id="english"
                      placeholder="Enter English number"
                      name="english"
                      class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="flex justify-between">
                    <input
                      type="text"
                      id="math"
                      placeholder="Enter Math number"
                      name="math"
                      class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <input
                      type="text"
                      id="physics"
                      placeholder="Enter Physics number"
                      name="physics"
                      class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="flex justify-between">
                    <input
                      type="text"
                      id="chemistry"
                      placeholder="Enter Chemistry number"
                      name="chemistry"
                      class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <input
                      type="text"
                      id="biology"
                      placeholder="Enter Biology number"
                      name="biology"
                      class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button className="btn btn-outline bg-cyan-500 text-white w-full my-4">
                    Update Final Result
                  </button>
                </form>
              </div>
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                id="full-name"
                placeholder="Enter Chemistry number"
                name="full-name"
                class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="text"
                id="email"
                placeholder="Enter Biology number"
                name="email"
                class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="btn btn-outline bg-cyan-500 text-white w-full my-4">
              Update Mid Result
            </button>
          </form>
        </div>
      </div>
        </div>
    );
};

export default Modal;