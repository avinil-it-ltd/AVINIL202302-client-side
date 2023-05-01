













//OLD_VERSION
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const StudentAttendance = () => {
  const [items, setItems] = useState([]);
  const [s, setS] = useState([]);
  // const item = JSON.parse(localStorage.getItem("users"));
  // setS(item);
  // console.log("dsfd", item[0]._id);
  const { user, state } = useContext(AuthContext);
  console.log(state?.data[0].imageUrl)
  
  useEffect(() => {
    // const item = JSON.parse(localStorage.getItem("users"));
    // if (item) {
    //   setS(item);
    setS(user);
    if (user) {
      console.log("dsfd", state?.data[0]?._id);
      const data = async () => {
        let respose = await axios.get(

          `http://localhost:5000/api/v1/get-attendance-id/${state?.data[0]?._id}`
        );

        if (respose?.status == 200) {
          console.log(respose?.data?.data[0])

          // const data = async () => {
          //   let respose = await axios.get(

          //     `http://localhost:5000/api/v1/get-attendance-id/${state?.data[0]?._id}`
          //   );

          // console.log(respose)
          // if (respose.status) {
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
    }, [state?.data]);
  console.log(state?.data[0]?.userName);
  let name = state?.data[0]?.userName;

  // console.log(items[0]?.date.slice(0,10))
  // let date = items[0]?.date.slice(0,10)
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
                        // src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        src={state?.data[0].imageUrl}
                      />
                    </div>
                  </div>
                </td>

                <td>{name}</td>
                <td>1</td>
                <td>{i.date.slice(0,10)}</td>
                <td>2023</td>
                <td>{i.isPresent ? "YES" : "NO"}</td>

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