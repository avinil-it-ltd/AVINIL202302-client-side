import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {

        e.preventDefault();
        console.log(e);
        const form = e.target;
        const name = e.target[0].value;
        const email = form[1].value;
        createUser(email, 123456)
            .then(result => {

                const user = result.user;
                //navigate(from,{replace: true})
            })
            .catch(error => console.error(error))
        // const password = form.password.value;
        console.log(name, email);
    }
    return (
        <div className='bg-slate-900 '>
            <Navbar></Navbar>
            <section class="text-white body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Sign Up</h1>
                    </div>

                    <div class="lg:w-1/2 md:w-2/3 mx-auto bg-slate-800  p-16 rounded-sm">
                        {/* form code start here */}
                        <form onSubmit={handleRegister} class=" flex w-full flex-col md:flex-row lg:flex-row flex-wrap -m-2">

                            {/* name field start here */}
                            <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm ">Name</label>
                                    <input type="text" id="name" name="name_teach" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out " />
                                </div>
                            </div>
                            {/* Email field start here */}
                            <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm ">Email</label>
                                    <input type="email" id="email" name="email_teach" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <fieldset className='px-2 my-4'>
                                <span className='mr-10 md:mr-0 md:pr-10 lg:pr-10'>Select the position</span>

                                <input id="teacher" class="mr-2 peer/teacher cursor-pointer" type="radio" name="status" checked />
                                <label for="teacher" class="mr-2 md:mr-5 lg:mr-16 cursor-pointer peer-checked/teacher:text-sky-500">teacher</label>

                                <input id="student" class="mr-2 peer/student cursor-pointer" type="radio" name="status" />
                                <label for="student" class="cursor-pointer peer-checked/student:text-sky-500">student</label>

                                {/* teacher block */}
                                <div class="hidden peer-checked/teacher:block w-full">
                                    <div className='flex w-full flex-col md:flex-row lg:flex-row flex-wrap'>
                                        {/* Group field start here */}
                                        <div class="py-2 pr-2 w-full md:w-1/2  lg:w-72 ">
                                            <div class="relative">
                                                <label for="group_teach" class="leading-7 text-sm ">Expertise Group</label>
                                                <select class="select w-full select-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700  px-3  py-1 transition-colors duration-200 ease-in-out">
                                                    <option disabled selected>Pick your Group</option>
                                                    <option className=' '>Commerce</option>
                                                    <option className=''>Science</option>
                                                    <option className=' '>Humanities</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* name field start here */}
                                        <div class="py-2 pr-2 w-full md:w-1/2  lg:w-72 ">
                                            <div class="relative">
                                                <label for="name" class="leading-7 text-sm ">Address</label>
                                                <input type="text" id="name" name="address_teach" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out " />
                                            </div>
                                        </div>

                                        <div class=" w-full ">
                                            <div class="relative">
                                                <label for="image_teach" class="leading-7 text-sm ">Upload Your Image</label>
                                                <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs bg-gray-100 bg-opacity-50 rounded border border-gray-300" />
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                {/* student block */}
                                <div class="hidden peer-checked/student:block ">
                                    <div className='flex w-full flex-col md:flex-row lg:flex-row flex-wrap '>
                                        {/* Roll field start here */}
                                        <div class="p-2 w-full md:w-1/2  lg:w-72">
                                            <div class="relative">
                                                <label for="email" class="leading-7 text-sm ">Roll</label>
                                                <input type="Roll" id="email" name="roll_stu" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        {/* Group field start here */}
                                        <div class="p-2 w-full md:w-1/2  lg:w-72">
                                            <div class="relative">
                                                <label for="email" class="leading-7 text-sm ">Group</label>
                                                {/* <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> */}
                                                <select class="select w-full select-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700  px-3  py-1 transition-colors duration-200 ease-in-out">
                                                    <option disabled selected>Pick your Group</option>
                                                    <option className=' '>Commerce</option>
                                                    <option className=''>Science</option>
                                                    <option className=' '>Humanities</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* Mobile number field start here */}
                                        <div class="p-2 w-full md:w-1/2  lg:w-72">
                                            <div class="relative">
                                                <label for="email" class="leading-7 text-sm ">Mobile</label>
                                                <input type="mobile_stu" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>

                                        {/* Session field start here */}
                                        <div class="p-2 w-full md:w-1/2  lg:w-72">
                                            <div class="relative">
                                                <label for="session_stu" class="leading-7 text-sm ">Session</label>
                                                <select class="select w-full select-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700  px-3  py-1 transition-colors duration-200 ease-in-out">
                                                    <option disabled selected>Pick your session year</option>
                                                    <option>2023</option>
                                                    <option>2024</option>
                                                    <option>2025</option>
                                                    <option>2026</option>
                                                    <option>2027</option>
                                                    <option>2028</option>
                                                    <option>2029</option>
                                                    <option>2030</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div class="p-2 w-full ">
                                            <div class="relative">
                                                <label for="image" class="leading-7 text-sm ">Upload Your Image</label>
                                                <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs bg-gray-100 bg-opacity-50 rounded border border-gray-300" />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </fieldset>

                            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"> </div>

                            <div class="p-2 w-full">
                                <button type='submit' class="  w-full  text-center  text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
                            </div>
                        </form>

                        <p className='text-2xl text-center  text-white mt-3'><small>If you  have an account? please <Link className='text-cyan-500 text-bolder mx-2' to="/signIn">  SignIn </Link></small></p>

                    </div>
                </div>
            </section >


            <Footer></Footer>
        </div >
    );
};

export default SignUp;