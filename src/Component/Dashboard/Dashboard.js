import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { async } from "q";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const { user,state } = useContext(AuthContext);

  // console.log(state.data[0]?);
  // const item = JSON.parse(localStorage.getItem("users"));
  // console.log(item);
  // useEffect(() => {
  //   const data = async () => {
  //     let respose = await axios.get(
  //       `http://localhost:5000/api/v1/get-single-user/${user?.email}`
  //     );
  //     console.log(respose);
  //     if (respose?.status == 200) {
  //       console.log(respose?.data?.data);
  //       setDatas(respose?.data?.data);

  //       localStorage.setItem("users", JSON.stringify(respose?.data?.data));

  //       return respose;
  //     } else {
  //       console.log(respose);
  //     }
  //   };
  //   data().then((respose) => console.log(respose));
  // }, [user?.email]);
  // console.log(datas[0]);
  console.log(state.data[0]?.userType);


  // const item = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="bg-slate-900">
      <Navbar></Navbar>

      <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div class="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col items-center pt-10">
            <Outlet></Outlet>
            {/* <!-- Page content here --> */}
            {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
          </div>
          <div class="drawer-side 	">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 bg-slate-800 text-white text-lg">
              {/* profile pic  */}

              <div class="avatar mx-auto online my-5 ">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    alt=""
                    src={state?.data[0]?.imageUrl}
                  />
                </div>
              </div>

              {/* <!-- student access content here --> */}

              {((state.data[0]?.userType === "teacher" )) ? (
                <>
                  <li>
                    {/* <Link to="/dashboard/teacherProfile">My Profile</Link> */}
                    <Link to="/dashboard/studentProfile">{state.data[0]?.name ? state.data[0]?.name : "My Profile"}</Link>
                  </li>
                  {state.data[0]?.group === "Science" ? (
                    <>
                      <li>
                        <Link to="/dashboard/scienceStudent">
                          Science Student
                        </Link>
                      </li>
                    </>
                  ) : null}
                  {((state.data[0]?.group  === "Commerce" )) ? (
                    <>
                      <li>
                        <Link to="/dashboard/commerceStudent">
                          Commerce Student
                        </Link>
                      </li>
                    </>
                  ) : null}
                  {state.data[0]?.group === "Humanities" ? (
                    <>
                      <li>
                        <Link to="/dashboard/humanitiesStudent">
                          Humanities Student
                        </Link>
                      </li>
                    </>
                  ) : null}

                  <li>
                    <Link to="/dashboard/attendance">Attendance</Link>
                  </li>
                </>
              ) : (
                <>

                </>
              )}
              {state.data[0]?.userType == 'student' ? <>
                <li>
                  <Link to="/dashboard/studentProfile">My Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard/studentAttendance">My Attendance</Link>
                </li>
                <li>
                  <Link to="/dashboard/studentResult">My Result</Link>
                </li>
              </> :
                <>
                </>

              }


              {state.data[0]?.userType == "admin" ? <>


                <li>
                  <Link to="/dashboard/studentProfile">My Profile</Link>
                </li>

                <li>
                  <Link to="/dashboard/scienceStudent">
                    Science Student
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/commerceStudent">
                    Commerce Student
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/humanitiesStudent">
                    Humanities Student
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/attendance">Attendance</Link>
                </li>

                <li>
                  <Link to="/dashboard/studentAttendance">My Attendance</Link>
                </li>
                <li>
                  <Link to="/dashboard/studentResult">My Result</Link>
                </li>

              </> : null


              }
              {/* <!-- teacher access content here --> */}

              {/* <li><Link to="/dashboard/allStudent">All Student</Link></li> */}
            </ul>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
