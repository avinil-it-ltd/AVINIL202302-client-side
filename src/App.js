import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import SignIn from './Component/Authentication/SignIn';
import SignUp from './Component/Authentication/SignUp';
import NotFound from './Component/Shared/NotFound';
import Dashboard from './Component/Dashboard/Dashboard';
import Contact from './Component/Contact/Contact';
import StudentProfile from './Component/Dashboard/StudentProfile';
import StudentResult from './Component/Dashboard/StudentResult';
import StudentAttendance from './Component/Dashboard/StudentAttendance';
import TeacherProfile from './Component/Dashboard/TeacherProfile';
import ScienceStudent from './Component/Dashboard/ScienceStudent';
import CommerceStudent from './Component/Dashboard/CommerceStudent';
import HumanitiesStudent from './Component/Dashboard/HumanitiesStudent';
import AllStudent from './Component/Dashboard/AllStudent';
import Attendance from './Component/Dashboard/Attendance';

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "home", element: <Home></Home> },
    { path: "signIn", element: <SignIn></SignIn> },
    { path: "signUp", element: <SignUp></SignUp> },
    { path: "*", element: <NotFound></NotFound> },
    { path: "contact", element: <Contact></Contact> },

    {
      path:"dashboard" , 
      element: <Dashboard></Dashboard>,
      children:[
        /* student  route start here */
        {path:"/dashboard" , element: <StudentProfile></StudentProfile>},
        {path:"/dashboard/studentProfile" , element: <StudentProfile></StudentProfile>},
        {path:"/dashboard/studentResult" , element: <StudentResult></StudentResult>},
        {path:"/dashboard/studentAttendance" , element: <StudentAttendance></StudentAttendance>},

        /* student  route start here */
        {path:"/dashboard" , element: <TeacherProfile></TeacherProfile>},
        {path:"/dashboard/teacherProfile" , element: <TeacherProfile></TeacherProfile>},
        {path:"/dashboard/scienceStudent" , element: <ScienceStudent></ScienceStudent>},
        {path:"/dashboard/commerceStudent" , element: <CommerceStudent></CommerceStudent>},
        {path:"/dashboard/humanitiesStudent" , element: <HumanitiesStudent></HumanitiesStudent>},
        {path:"/dashboard/allStudent" , element: <AllStudent></AllStudent>},
        {path:"/dashboard/attendance" , element: <Attendance></Attendance>},


      ]
    },
    

    
  ])


  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
