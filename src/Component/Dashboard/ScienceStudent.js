import axios from "axios";
import React, { useEffect, useState } from "react";

const ScienceStudent = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    const data = async () => {
      let respose = await axios.get(
        "http://localhost:5000/api/v1/get-user-by-group/Science"
      );
      console.log(respose);
      if (respose.status == 200) {
        console.log(respose.data.data);
        setStudent(respose.data.data);
        return respose;
      } else {
        console.log(respose);
      }
    };
    data().then((respose) => console.log(respose));
  }, []);
  return (
    <div>
      {/* attendance modal */}
      {/* <input type="checkbox" id="attendance-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="attendance-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations It is attendance modal</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div> */}

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
                id="text"
                placeholder="Enter English number"
                name="text"
                class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                id="full-name"
                placeholder="Enter Math number"
                name="full-name"
                class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="text"
                id="email"
                placeholder="Enter Physics number"
                name="email"
                class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
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

      {/* update final result modal */}
      <input type="checkbox" id="final-result-modal" class="modal-toggle" />
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
                id="text"
                placeholder="Enter English number"
                name="text"
                class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                id="full-name"
                placeholder="Enter Math number"
                name="full-name"
                class="w-full mx-2 my-2   rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="text"
                id="email"
                placeholder="Enter Physics number"
                name="email"
                class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
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
                placeholder="Enter Bio number"
                name="email"
                class="w-full mx-2 my-2  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="btn btn-outline bg-cyan-500 text-white w-full my-4">
              Update Final Result
            </button>
          </form>
        </div>
      </div>

      <div class="overflow-x-auto w-full">
        <p className="text-white text-3xl text-center py-2">
          All Science Student Here
        </p>
        <table class="table w-full bg-slate-800 ">
          {/* <!-- head --> */}
          <thead>
            <tr className="bg-slate-800">
              <th>Image</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Group</th>
              {/* <th>Session</th> */}
              <th>Attendance</th>
              <th>Mid Result</th>
              <th>Final Result</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {student?.map((i) => (
              <tr>
                <td>
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      />
                    </div>
                  </div>
                </td>

                <td>{i?.userName} </td>
                <td>2034129</td>
                <td>{i?.group}</td>
                <td>2023</td>
                {/* <td><label for="attendance-modal" className='btn btn-sm text-xs bg-cyan-500 outline-none border-none ' >Update Attendance</label></td> */}

                <td>
                  <label
                    for="mid-result-modal"
                    className="btn btn-sm text-xs bg-lime-500 outline-none border-none "
                  >
                    Update Mid Result
                  </label>
                </td>

                <td>
                  <label
                    for="final-result-modal"
                    className="btn btn-sm text-xs bg-green-500 outline-none border-none "
                  >
                    Update Final Result
                  </label>
                </td>

                <td>
                  <button className="btn btn-sm text-xs bg-rose-500 outline-none border-none ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScienceStudent;
