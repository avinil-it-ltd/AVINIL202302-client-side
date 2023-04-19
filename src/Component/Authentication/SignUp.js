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

    const { createUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const userName = e.target.name.value;
        console.log(email);
        const userPass = e.target.password.value;
        const userType = e.target.type.value; //student or teacher
        const imageUrl = e.image;
        // const roll = e.target.roll.value || 0;
        const group = e.target.subject.value;
        // const session = e.target.session.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        // const qualification = e.target.qualification.value;
        const info = {
            email: email,
            userName: userName,
            userPass: userPass,
            userType: userType,
            // roll: roll,
            phone: phone,
            group: group,
            // session: session,
            address: address,
            // qualification: qualification,
        };
        console.log(info);
        // console.log(name,email,password)
        createUser(email, userPass)
            .then(result => {

                const user = result.user;
                navigate(from, { replace: true })




            })
            .catch(error => console.error(error))



    }


  

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
                            
                            onSubmit={handleSubmit}
                            class=" flex w-full flex-col md:flex-row lg:flex-row flex-wrap -m-2"
                        >
                            
                            <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm ">
                                        Name
                                    </label>
                                    <input
                                        placeholder="Enter name"
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="w-full text-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  px-3 leading-8 transition-colors duration-200 ease-in-out "
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
                                        placeholder="Enter email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="w-full text-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none   px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="phone" class="leading-7 text-sm ">
                                        Phone
                                    </label>
                                    <input
                                        placeholder="Enter Number"
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        class="w-full text-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none px-3 leading-8 transition-colors duration-200 ease-in-out "
                                    />
                                </div>
                            </div>
                            <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="subject" class="leading-7 text-sm ">
                                        Group
                                    </label>

                                    <select
                                        name="subject"
                                        class="select w-full select-sm text-black bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none    px-3  py-1  duration-200 ease-in-out"
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
                            <div class="p-2  w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="address" class="leading-7 text-sm ">
                                        Address
                                    </label>
                                    <input
                                        placeholder="Enter Address"
                                        type="text"
                                        id="address"
                                        name="address"
                                        class="w-full text-black  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  px-3 leading-8 transition-colors duration-200 ease-in-out "
                                    />
                                </div>
                            </div>


                            <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="password" class="leading-7 text-sm ">
                                        password
                                    </label>
                                    <input
                                        placeholder="Enter Password"
                                        type="password"
                                        id="password"
                                        name="password"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>


                            <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="" class="leading-7 text-sm pe-2 ">
                                        Select the position
                                    </label>
                                    <select name="type" class="select p-2 w-full select-sm bg-white text-black rounded border    text-base outline-none   py-1  transition-colors duration-200 ease-in-out">
                                        <option disabled selected>
                                            Select the position
                                        </option>
                                        <option className="text-black" value="teacher">
                                            Teacher
                                        </option>
                                        <option className="" value="student">
                                            Student
                                        </option>
                                    </select>
                                </div>
                            </div>





                            <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="file" class="leading-7 text-sm pe-2 ">
                                        Upload Your Image
                                    </label>
                                    <input
                                        type="file"
                                        class="file-input file-input-bordered file-input-sm w-full max-w-xs bg-white "
                                    />
                                </div>
                            </div>
                            <div class="p-2 w-full md:w-1/2  lg:w-72"></div>

                            
                                <button
                                    type="submit"
                                    class="  w-full   text-center  text-white bg-cyan-500 border-0 py-2 ml-2 s  lg:mr-14  focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                >
                                    Sign Up
                                </button>
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
