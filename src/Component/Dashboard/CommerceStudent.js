import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import Modalone from "./Modal/Modelone";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const CommerceStudent = () => {
  const [student, setStudent] = useState([]);
  const {user } = useContext(AuthContext);  
  const [userData, setUserData] = useState({});
  const [finalData, setfinalData] = useState({});
  useEffect(() => {
    const data = async () => {
      let respose = await axios.get(

        "http://localhost:5000/api/v1/get-user-by-group/Commerce"
      );
      console.log(respose);
      if (respose.status == 200) {
       
        setStudent(respose.data.data);
        return respose;
      } else {
        
      }
    };
    data().then((respose) => console.log(respose));
  }, []);
  const handleMidCommerce = (data) => {
    console.log(userData);
    setUserData(data);
  };
  const handleFinalCommerce = (data) => {
    console.log(userData);
    setfinalData(data);
  };
  
  return (
    <div>
      {/* update mid result modal */}
      <Modal userData={userData} />
      <Modalone userData={finalData} />

      <div class="overflow-x-auto w-full">
        <p className="text-white text-3xl text-center py-2">
          All Commerce Student Here
        </p>
        <table class="table w-full bg-slate-800 ">
          {/* <!-- head --> */}
          <thead>
            <tr className="bg-slate-800">
              <th>Image</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Group</th>
              <th>Session</th>
              {/* <th>Attendance</th> */}
              <th>Mid Result</th>
              <th>Final Result</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {student?.map((i, index) => (
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
                <td>{index + 1}</td>
                <td>{i?.group}</td>
                <td>2023</td>
                {/* <td><label for="attendance-modal" className='btn btn-sm text-xs bg-cyan-500 outline-none border-none ' >Update Attendance</label></td> */}

                <td>
                  <label
                    onClick={() => handleMidCommerce(i)}
                    htmlFor="my-modal-3"
                    className="btn btn-sm text-xs bg-lime-500 outline-none border-none "
                  >
                    Update Mid Result
                  </label>
                </td>

                <td>
          
                <label
                    onClick={() => handleFinalCommerce(i)}
                    htmlFor="my-modal-4"
                    className="btn btn-sm text-xs bg-blue-500 outline-none border-none "
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

export default CommerceStudent;
