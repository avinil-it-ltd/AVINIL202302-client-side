import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import axios from "axios";
import emailjs from "@emailjs/browser";

import { AuthContext } from "../../AuthProvider/AuthProvider";

const Attendance = () => {
  const [disabled, setDisabled] = useState('');
  const [disableds, setDisableds] = useState('');
  const [datas, setDatas] = useState('');
  const [scienceStudent, setScienceStudent] = useState([]);
  const [commerceStudent, setcommerceStudent] = useState([]);
  const [humanitiesStudent, sethumanitiesStudent] = useState([]);

  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  useEffect(() => {
    const data = async () => {
      let respose = await axios.get(

        `http://localhost:5000/api/v1/get-single-user/${user?.email}`
      );
      console.log(respose);
      if (respose.status == 200) {
        console.log("na", respose?.data?.data[0]?.group);
        setDatas(respose?.data?.data[0]?.group);
        return respose;
      } else {
        console.log(respose);
      }
    };
    data().then((respose) => console.log(respose));

    const Commerce = async () => {
      let respose = await axios.get(

        "http://localhost:5000/api/v1/get-user-by-group/Commerce"
      );
      console.log(respose);
      if (respose.status == 200) {
        console.log("asd", respose.data.data);
        setcommerceStudent(respose.data.data);
        return respose;
      } else {
        console.log(respose);
      }
    };
    Commerce().then((respose) => console.log(respose));
    const Science = async () => {
      let respose = await axios.get(

        "http://localhost:5000/api/v1/get-user-by-group/Science"
      );
      console.log(respose);
      if (respose.status == 200) {
        console.log("asd", respose.data.data);
        setScienceStudent(respose.data.data);
        return respose;
      } else {
        console.log(respose);
      }
    };
    Science().then((respose) => console.log(respose));

    const Humanities = async () => {
      let respose = await axios.get(

        "http://localhost:5000/api/v1/get-user-by-group/Humanities"
      );
      console.log(respose);
      if (respose.status == 200) {
        console.log("asd", respose.data.data);
        sethumanitiesStudent(respose.data.data);
        return respose;
      } else {
        console.log(respose);
      }
    };
    Humanities().then((respose) => console.log(respose));
  }, [user?.email]);
  console.log('sdfd', datas, scienceStudent, commerceStudent, humanitiesStudent);
  // useEffect(() => {

  // }, []);
  const handlePresent = (id) => {
    const info = {
      student: id,
      date: selected,
      isPresent: true
    }
    databaseInsert(info)
    setDisabled(id);

  }
  const databaseInsert = async (info) => {
    let respose = await axios.post(

      "http://localhost:5000/api/v1/create-attendance",
      info
    );
    if (respose.status === 200) {
      console.log(respose);

    } else {
      console.log(respose);
    }

  }
  const handleAbsent = async (id, name) => {

    emailjs.sendForm('service_i8ie5mf', 'template_avrndva', name, "OMVTrZJ8Q7HWM7UVX")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    const info = {
      student: id,
      date: selected,
      isPresent: false
    }
    let respose = await axios.post(

      'http://localhost:5000/api/v1/create-attendance',
      info
    );
    if (respose.status === 200) {
      console.log(respose);

    } else {
      console.log(respose);
    }
    setDisableds(id);



  }
  // scienceStudent?.map((i,c) => console.log(e.email));
  return (
    <div className="">
      <div className="mx-auto w-96 ">
        <DayPicker
          className="bg-white mx-auto w-full p-10 flex justify-center items-center"
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </div>

      <div class="overflow-x-auto w-full">
        <p className="text-white text-3xl text-center py-2">Today Attendance</p>
        <div>
          <table class="table w-full bg-slate-800 ">
            {/* <!-- head --> */}
            <thead>
              <tr className="bg-slate-800">

                <th>Roll</th>
                <th>Image</th>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                {/* <th>Roll</th> */}
                <th>Group</th>
                <th>Present</th>
                <th>Absent</th>
              </tr>
            </thead>

            <tbody>
              {
                datas === "Science" ? scienceStudent.map((i, c) => {
                  // const [userName, email] = i;
                  // console.log(i)
                  return (

                    <tr>
                      
                      <td>{c + 1}</td>
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

                      <td>02/01/2023</td>
                      <td>{i.userName} </td>
                      <td>{i.email} </td>
                      {/* <td>{i.userName} </td> */}
                      {/* <td>{email} </td> */}
                      {/* console.log(i.email) */}
                      {/* <td>2034129</td> */}
                      <td>Science</td>

                      <td>
                        <button disabled={disabled == i._id} onClick={() => handlePresent(i?._id)} className="btn btn-sm text-xs bg-lime-500 outline-none border-none ">
                          Present
                        </button>
                      </td>

                      <td>
                        <button disabled={disableds == i._id} onClick={() => handleAbsent(i?._id)} className="btn btn-sm text-xs bg-green-500 outline-none border-none ">
                          Absent
                        </button>
                      </td>
                    </tr>

                  )
                }


                )
                  : null
              }
              {
                datas === "Commerce" ? commerceStudent.map((i, c) => <tr>
                  <td>{c + 1}</td>
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
                  {/* <td>02/01/2023</td>
                  <td>{i.userName} </td>
                  <td>{i.email} </td>
                  {/* <td>2034129</td> */}

                  <td>02/01/2023</td>
                  <td>{i.userName} </td>
                  <td>{i.email} </td>
                  <td>Commerce</td>

                  <td>
                    <button disabled={disabled == i._id}
                      onClick={() => handlePresent(i?._id)} className="btn btn-sm text-xs bg-lime-500 outline-none border-none ">
                      Present
                    </button>
                  </td>

                  <td>
                    <button disabled={disableds == i._id} onClick={() => handleAbsent(i?._id)} className="btn btn-sm text-xs bg-green-500 outline-none border-none ">
                      Absent
                    </button>
                  </td>
                </tr>)
                  : null
              }
              {
                datas === "Humanities" ? humanitiesStudent.map((i, c) => <tr>
                  <td>{c + 1}</td>
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
                  <td>02/01/2023</td>
                  <td>{i.userName} </td>
                  <td>{i.email} </td>
                  {/* <td>2034129</td> */}
                  <td>Humanities</td>

                  <td>
                    <button disabled={disabled == i._id} onClick={() => handlePresent(i?._id)} className="btn btn-sm text-xs bg-lime-500 outline-none border-none ">
                      Present
                    </button>
                  </td>

                  <td>
                    <button disabled={disableds == i._id} onClick={() => handleAbsent(i?._id)} className="btn btn-sm text-xs bg-green-500 outline-none border-none ">
                      Absent
                    </button>
                  </td>
                </tr>)
                  : null
              }
              {datas == "admin" ?
                scienceStudent.map((i, c) => <tr>
                  <td>{c + 1}</td>
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
                  <td>02/01/2023</td>


                  <td>{i.userName} </td>
                  <td>{i.email} </td>
                  {/* <td>2034129</td> */}
                  <td>Science</td>

                  <td>
                    <button disabled={disabled == i._id} onClick={() => handlePresent(i?._id)} className="btn btn-sm text-xs bg-lime-500 outline-none border-none ">
                      Present
                    </button>
                  </td>

                  <td>
                    <button disabled={disableds == i._id} onClick={() => handleAbsent(i?._id)} className="btn btn-sm text-xs bg-green-500 outline-none border-none ">
                      Absent
                    </button>
                  </td>
                </tr>)



                : null

              }

              {datas == "admin" ?
                commerceStudent.map((i, c) => <tr>
                  <td>{c + 1}</td>
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
                  <td>02/01/2023</td>
                  <td>{i.userName} </td>
                  <td>{i.email} </td>

                  <td>Commerce</td>

                  <td>
                    <button disabled={disabled == i._id}
                      onClick={() => handlePresent(i?._id)} className="btn btn-sm text-xs bg-lime-500 outline-none border-none ">
                      Present
                    </button>
                  </td>

                  <td>
                    <button disabled={disableds == i._id} onClick={() => handleAbsent(i?._id, i?.userName)} className="btn btn-sm text-xs bg-green-500 outline-none border-none ">
                      Absent
                    </button>
                  </td>
                </tr>)



                : null

              }

              {datas == "admin" ?
                commerceStudent.map((i, c) => <tr>
                  <td>{c + 1}</td>
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
                  <td>02/01/2023</td>
                  <td>{i.userName} </td>
                  <td>{i.email} </td>

                  <td>Commerce</td>

                  <td>
                    <button disabled={disabled == i._id}
                      onClick={() => handlePresent(i?._id)} className="btn btn-sm text-xs bg-lime-500 outline-none border-none ">
                      Present
                    </button>
                  </td>

                  <td>
                    <button disabled={disableds == i._id} onClick={() => handleAbsent(i?._id)} className="btn btn-sm text-xs bg-green-500 outline-none border-none ">
                      Absent
                    </button>
                  </td>
                </tr>)



                : null

              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
