import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const StudentAttendance = () => {
  const [items, setItems] = useState([]);
  const [s, setS] = useState([]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("users"));
    if (item) {
      setS(item);
      console.log("dsfd", item[0]._id);
      const data = async () => {
        let respose = await axios.get(
<<<<<<< HEAD
<<<<<<< HEAD
          `https://cms2023.onrender.com//api/v1/get-attendance-id/${item[0]._id}`
=======
          `http://localhost:5000/api/v1/get-attendance-id/${item[0]._id}`
>>>>>>> 06e9ed40ceb361f2af81a05fdf1942571de5a245
=======
          `https://cms2023.onrender.com/api/v1/get-attendance-id/${item[0]._id}`
>>>>>>> 79627e6fb9b159cab1b8457995f0833f44f9b287
        );

        if (respose.status == 200) {
          console.log(respose?.data?.data);
          //setDatas(respose.data.data)
          setItems(respose?.data?.data);
          return respose;
        } else {
          console.log(respose);
        }
      };
      data().then((respose) => console.log(respose));
    }
  }, []);
//   console.log(s[0]?.userName);
  return (
    <div>
      <div class="overflow-x-auto w-full">
        <p className="text-white text-3xl text-center py-2">
          Your Attendance Status
        </p>
        <table class="table w-full bg-slate-800 ">
          {/* <!-- head --> */}
          <thead>
            <tr className="bg-slate-800">
              <th>Image</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Date</th>
              <th>Session</th>
              <th>Present</th>
              {/* <th>Mid Result</th>
                            <th>Final Result</th>
                            <th>Action</th> */}
            </tr>
          </thead>

          <tbody>
            {items?.map((i) => (
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

                <td>{s[0]?.userName}</td>
                <td></td>
                <td>{i.date}</td>
                <td>2023</td>
                <td>{i.isPresent?"YES":"NO"}</td>

                {/* <td><label for="attendance-modal" className='btn btn-sm text-xs bg-cyan-500 outline-none border-none ' >Update Attendance</label></td> */}

                {/* <td><label for="mid-result-modal" className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Update Mid Result</label></td> */}

                {/* <td><label for="final-result-modal" className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Update Final Result</label></td> */}

                {/* <td><button className='btn btn-sm text-xs bg-rose-500 outline-none border-none '>Delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAttendance;
