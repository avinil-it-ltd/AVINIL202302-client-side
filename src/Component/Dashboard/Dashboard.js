import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Dashboard = () => {
    const { logOut, user } = useContext(AuthContext);
    return (
        <div className='bg-slate-900'>
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
                                    <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                </div>
                            </div>


                            {/* <!-- student access content here --> */}
                            <li><Link to="/dashboard/studentProfile">My Profile</Link></li>
                            <li><Link to="/dashboard/studentAttendance">My Attendance</Link></li>
                            <li><Link to="/dashboard/studentResult">My Result</Link></li>

                            {/* <!-- teacher access content here --> */}
                            <li><Link to="/dashboard/teacherProfile">My Profile</Link></li>
                            <li><Link to="/dashboard/scienceStudent">Science Student</Link></li>
                            <li><Link to="/dashboard/commerceStudent">Commerce Student</Link></li>
                            <li><Link to="/dashboard/humanitiesStudent">Humanities Student</Link></li>
                            <li><Link to="/dashboard/attendance">Attendance</Link></li>
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