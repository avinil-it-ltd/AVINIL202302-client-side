import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='bg-slate-900'>
            <Navbar></Navbar>
            <section class="text-white body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl ">Please sign in to access your online college account and begin your educational journey with us.</h1>
                        <p class="leading-relaxed text-lg mt-4">As an online college student, we wish you success and fulfillment in achieving your academic goals and pursuing your passions.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-slate-800 rounded-lg p-16 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class=" text-lg font-medium title-font mb-5">Sign In</h2>
                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm ">Email</label>
                            <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm ">password</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button class="text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p className='text-xl text-center text-white mt-3'><small>If you don't have an account? please <Link className='text-cyan-500 text-bolder' to="/signUp"> SignUp </Link></small></p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default SignIn;