import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import arrow from '../../image/couses-icon/left.png'
const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="flex items-center justify-center h-screen">
                <div class="flex-col space-y-4 text-left px-6">
                    <div class="text-7xl font-bold text-violet-700">Page is not Found</div>
                    <div class="text-stone-500 font-medium">Oops, you still haven't found what you looking for?</div>
                    <div class="flex space-x-4 items-center justify-start">
                        <Link className="w-32 "to="/"><div class="px-4 py-1 text-white font-medium cursor-pointer"> <img src={arrow} alt="" /> </div></Link>
                        <div class="text-xl font-medium text-stone-500">Back to Home Page</div>
                    </div>
                </div>
            </div>



   
            <Footer></Footer>
        </div>
    );
};

export default NotFound;