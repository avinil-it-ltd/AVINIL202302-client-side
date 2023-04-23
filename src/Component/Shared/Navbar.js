import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import logo from '../../image/logo1.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false)
    const location = useLocation();
    const from = "/";

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    let userData = [];

    console.log("bbv", user)
    let item = JSON.parse(localStorage.getItem("users"));
    console.log(item);
    if (item) {
        console.log("yes")
        userData = item[0];
        console.log(userData)
    }
    else {
        console.log(item);
    }
    const handleLogOut = () => {
        // navigate(from, { replace: true })
        // location.reload()
        logOut()
        navigate('/')
    }
    // console.log("hello",process.env.REACT_APP_IMG_KEY)
    return (
        <header class="text-gray-600 body-font bg-slate-900">
            <div class="container mx-auto ">

                <div>
                    <>
                        <Drawer
                            style={{ backgroundColor: "#0F172A", color: "white" }}
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='left'
                            className='bla bla bla pt-4'
                        >
                            <Link to="/home" className='text-center  font-bold text-xl  flex'> <img className='w-16 mr-2' src={logo} alt="" />Online College</Link>
                            <ul class="menu  px-1">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>


                                {
                                    user && user?.uid ? <>

                                        <div class="collapse">
                                            <input type="checkbox" class="peer" />
                                            <div class="flex collapse-title  ">
                                                <Link to="/dashboard">Dashboard</Link>
                                            </div>
                                            <div class="collapse-content ">
                                                {userData?.userType == "student" ? <>

                                                    <li className='py-0 my-0  text-sm'><Link className='py-0 my-1 ' to="/dashboard/studentProfile">My Profile</Link></li>
                                                    <li className='py-0 my-0  text-sm'><Link className='py-0 my-1 ' to="/dashboard/studentAttendance">My Attendance</Link></li>
                                                    <li className='py-0 my-0  text-sm'><Link className='py-0 my-1 ' to="/dashboard/studentResult">My Result</Link></li>

                                                </> : null

                                                }


                                                {userData?.userType == "teacher" ? <>
                                                    <li className='py-0 my-0  text-sm'><Link className='py-0 my-1 ' to="/dashboard/teacherProfile">My Profile</Link></li>

                                                    {userData.group == "Science" && <li className='py-0 my-0  text-sm'><Link className='py-0 my-1 ' to="/dashboard/scienceStudent">Science Student</Link></li>}
                                                    {userData.group == "Commerce" && <li className='py-0 my-0  text-sm'><Link className='py-0 my-1 ' to="/dashboard/commerceStudent">Commerce Student</Link></li>}
                                                    {userData.group == "Humanities" && <li className='py-0 my-0  text-sm'><Link className='py-0 my-1 ' to="/dashboard/humanitiesStudent">Humanities Student</Link></li>}
                                                    <li className='py-0 my-0  text-sm'><Link className='py-0 my-1 ' to="/dashboard/attendance">Attendance</Link></li>
                                                </> : null}




                                                {/* <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="dashboard/allStudent">All Student</Link></li> */}
                                            </div>
                                        </div>

                                    </> :
                                        <>

                                        </>
                                }








                                <li ><Link to="/contact">Contact</Link></li>

                                {
                                    user && user?.uid ? <>
                                        <li><Link to='/dashboard'> DashBoard </Link></li>


                                        <li><Link
                                            to="/"
                                            onClick={handleLogOut}
                                        >LogOut</Link></li>

                                    </> :
                                        <>
                                            <li><Link to='/signIn'>Login</Link></li>
                                        </>


                                }

                            </ul>
                        </Drawer>
                    </>





                    <div class="navbar shadow-lg   bg-slate-900  py-5 text-white justify-between">
                        <div class="navbar-start">
                            <Link to="/home" class="normal-case text-xl flex  " > <img className='w-16 mr-2' src={logo} alt="" /> Online College</Link>
                        </div>


                        <div class="navbar-end hidden lg:flex">
                            <ul class="menu menu-horizontal px-1">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>

                                {/* <li tabindex="0"> */}
                                {/* <Link to="/dashboard">Dashboard</Link> */}
                                {/* <ul class=" bg-slate-900">
                                        <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Android Development</Link></li>
                                        <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Web Design</Link></li>
                                        <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Web Development</Link></li>
                                        <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Artificial intelligence</Link></li>
                                    </ul> */}
                                {/* </li> */}

                                <li ><Link to="/contact">Contact</Link></li>
                                {
                                    user && user?.uid ? <>
                                        <li><Link to='/dashboard'> Dashboard </Link></li>


                                        <li><Link
                                            to='/'
                                            onClick={handleLogOut}

                                        >LogOut</Link></li>

                                    </> :
                                        <>
                                            <li><Link to='/signIn'>Login</Link></li>
                                            {/* <li><Link to='/signUp'>Register</Link></li> */}
                                        </>


                                }

                                {
                                    userData?.userType == "admin" && user?.uid ? <>
                                        <li><Link to='/'> DashBoard </Link></li>


                                        <li><Link
                                            to='/'
                                            onClick={handleLogOut}

                                        >LogOut</Link></li>


                                        <li><Link to='/signIn'>Login</Link></li>
                                        {/* <li><Link to='/signUp'>Register</Link></li> */}
                                    </> : null


                                }
                            </ul>
                        </div>


                        <button className='lg:hidden ' onClick={toggleDrawer}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;