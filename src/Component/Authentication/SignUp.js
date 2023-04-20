import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Select from "react-select";
import { useForm } from "react-hook-form";
import axios from "axios";
import SweetAlert from "react-swal";

const SignUp = () => {
  
  const {createUser}= useContext(AuthContext)
   
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        const email = e.target.email.value;
        const userName = e.target.Username.value;
    
        const userPass = e.target.password.value;
        const userType = e.target.type.value; //student or teacher
        const imageUrl = e.image;
        const roll = e.target.roll.value;
        const group = e.target.subject.value;
         const session = e.target.session.value;
        const phone = e.target.phone.value;
        console.log(phone);
        const address = e.target.address.value;
        // const qualification = e.target.qualification.value;
        
        const info = {
          email: email,
          userName: userName,
          userPass: userPass,
          userType: userType,
          roll: roll,
          mobile:phone,
          group: group,
          session:session,
          address: address,
          // qualification: qualification,
        };
        console.log(info);
       // console.log(name,email,password)
       createUser(email,userPass)
        .then(result=>{

            const user=result.user;
            databaseInsert(info)
            navigate(from,{replace: true})
            

            


        })
        .catch(error=>console.error(error))



    }
    const databaseInsert = async (info)=>{
      let respose = await axios.post(
            "http://localhost:5000/api/v1/create-user",
            info
          );
          if (respose.status === 2000) {
            console.log(respose);
            
          } else {
            console.log(respose);
          }

    }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e);
   
  //   createUser(email,userPass);
  //   console.log(user);
  //   let respose = await axios.post(
  //     "http://localhost:5000/api/v1/create-user",
  //     info
  //   );
  //   if (respose.status === 2000) {
  //     console.log(respose);
      
  //   } else {
  //     console.log(respose);
  //   }
  // };

  return (
    <div className="bg-slate-900 ">
      <Navbar></Navbar>
      <section class="text-white body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Sign Up
            </h1>
          </div>

          <div class="lg:w-1/2 md:w-2/3 mx-auto bg-slate-800  p-16 rounded-sm">
            {/* form code start here */}
            <form
              //   onSubmit={handleRegister}
              // onSubmit={handleRegister}
              onSubmit={handleSubmit}
              class=" flex w-full flex-col md:flex-row lg:flex-row flex-wrap -m-2"
            >
              {/* <input {...register("radio")} type="radio" value="A" />
              <input {...register("radio")} type="radio" value="B" />
              <input {...register("radio")} type="radio" value="C" /> */}
              {/* name field start here */}
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Username"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              {/* Email field start here */}
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="phone" class="leading-7 text-sm ">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div class="py-2 pr-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="" class="leading-7 text-sm ">
                    Group
                  </label>

                  <select
                    name="subject"
                    class="select w-full select-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700  px-3  py-1 transition-colors duration-200 ease-in-out"
                  >
                    <option disabled selected>
                      Pick your Group
                    </option>
                    <option className=" ">Commerce</option>
                    <option className="">Science</option>
                    <option className=" ">Humanities</option>
                  </select>
                </div>
              </div>

              {/* name field start here */}
              <div class="py-2 pr-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="address" class="leading-7 text-sm ">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div class="py-2 pr-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="password" class="leading-7 text-sm ">
                    password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <select name="type" class="select w-full select-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700  px-3  py-1 transition-colors duration-200 ease-in-out">
                <option disabled selected>
                  Select the position
                </option>
                <option className="" value="teacher">
                  Teacher
                </option>
                <option className="" value="student">
                  Student
                </option>
              </select>
              <fieldset className="px-2 my-4">
                <span className="mr-10 md:mr-0 md:pr-10 lg:pr-10">
                  Select the position
                </span>

                <input
                  value="teacher"
                  id="teacher"
                  class="mr-2 peer/teacher cursor-pointer"
                  type="radio"
                  name="status"
                  // onChange={handleType}
                />

                <label
                  for="teacher"
                  class="mr-2 md:mr-5 lg:mr-16 cursor-pointer peer-checked/teacher:text-sky-500"
                >
                  teacher
                </label>

                <input
                  // {...register({"student":true})}

                  id="student"
                  value="student"
                  // onChange={handleType}
                  class="mr-2 peer/student cursor-pointer"
                  type="radio"
                  name="status"
                />
                <label
                  for="student"
                  class="cursor-pointer peer-checked/student:text-sky-500"
                >
                  student
                </label>

                {/* teacher block */}
                <div class="hidden peer-checked/teacher:block w-full">
                  <div className="flex w-full flex-col md:flex-row lg:flex-row flex-wrap">
                    {/* Group field start here */}
                    {/* <div class="py-2 pr-2 w-full md:w-1/2  lg:w-72 ">
                      <div class="relative">
                        <label for="" class="leading-7 text-sm ">
                          Expertise Group
                        </label>
                  
                        <select {...register("group_t")} class="select w-full select-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700  px-3  py-1 transition-colors duration-200 ease-in-out">
                          <option disabled selected>
                            Pick your Group
                          </option>
                          <option className=" ">Commerce</option>
                          <option className="">Science</option>
                          <option className=" ">Humanities</option>
                        </select>
                      </div>
                    </div>

                    {/* name field start here */}
                    <div class="py-2 pr-2 w-full md:w-1/2  lg:w-72 ">
                      <div class="relative">
                        <label for="address" class="leading-7 text-sm ">
                          Qualification
                        </label>
                        <input
                          // {...register("qualification")}

                          type="text"
                          id="qualification"
                          name="qualification"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out "
                        />
                      </div>
                    </div>

                    {/* <div class=" w-full ">
                      <div class="relative">
                        <label for="image" class="leading-7 text-sm ">
                          Upload Your Image
                        </label>
                        <input
                          {...register("image_t")}
                          type="file"
                          class="file-input file-input-bordered file-input-sm w-full max-w-xs bg-gray-100 bg-opacity-50 rounded border border-gray-300"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* student block */}
                <div class="hidden peer-checked/student:block ">
                  <div className="flex w-full flex-col md:flex-row lg:flex-row flex-wrap ">
                    {/* Roll field start here */}
                    <div class="p-2 w-full md:w-1/2  lg:w-72">
                      <div class="relative">
                        <label for="roll" class="leading-7 text-sm ">
                          Roll
                        </label>
                        <input
                          type="number"
                          id="roll"
                          name="roll"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  
                    <div class="p-2 w-full md:w-1/2  lg:w-72">
                      <div class="relative">
                        <label for="email" class="leading-7 text-sm ">
                          Session
                        </label>

                        {/* target 1 */}
                        <select name="session" class="select w-full select-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700  px-3  py-1 transition-colors duration-200 ease-in-out">
                          <option value="none"  disabled selected>
                            Pick your session year
                          </option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                          <option value="2030">2030</option>
                          {/* {

                          options.map((option,key) =>{ 
                            return <option key={key}>{option}</option>

                          })
                          } */}
                        </select>
                        {/* <Select options={options}  autoFocus={true}  onChange={handle_Session_Change} class="text-black bg-white" ></Select> */}
                      </div>
                    </div>

                    {/* <div class="p-2 w-full ">
                      <div class="relative">
                        <label for="email" class="leading-7 text-sm ">
                          Upload Your Image
                        </label>
                        <input
                          {...register("image")}
                          type="file"
                          class="file-input file-input-bordered file-input-sm w-full max-w-xs bg-gray-100 bg-opacity-50 rounded border border-gray-300"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </fieldset>
              <div class="p-2 w-full ">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm pe-2 ">
                    Upload Your Image
                  </label>
                  <input
                    type="file"
                    class="file-input file-input-bordered file-input-sm w-full max-w-xs bg-gray-100 bg-opacity-50 rounded border border-gray-300"
                  />
                </div>
              </div>
              <div class="p-2 w-full md:w-1/2  lg:w-72"></div>

              <div class="p-2 w-full">
                <button
                  type="submit"
                  class="  w-full  text-center  text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-2xl text-center  text-white mt-3">
              <small>
                If you have an account? please{" "}
                <Link className="text-cyan-500 text-bolder mx-2" to="/signIn">
                  {" "}
                  Sign In{" "}
                </Link>
              </small>
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default SignUp;
