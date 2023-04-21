import React from 'react';
import Contact from '../Contact/Contact';
import Navbar from '../Shared/Navbar';
import Courses from './Courses';
import Footer from '../Shared/Footer';
import Principals from './Principals';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Evaluation from './Evaluation';

const Home = () => {
    return (
        <div className='bg-slate-900'>
            <Navbar></Navbar>
            {/* <a href="https://ibb.co/4THcw4D"><img src="https://i.ibb.co/jMSd93x/background.jpg" alt="background" border="0"></a> */}

            <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/dDP6P37/banner.png")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="min-w-md">
                        <h1 class="mb-5 text-5xl text-black font-bold">Welcome to our online college!</h1>
                        {/* <p class="mb-5 text-lg text-black ">Welcome to our online college! We're excited to have you join our community of learners and are committed to providing you with a high-quality educational experience.</p> */}
                        <Link to="/signIn" class="btn bg-cyan-500 text-white border-none outline-none hover:bg-indigo-500">Join Now</Link>
                    </div>
                </div>
            </div>

            </div>


            <Courses></Courses>

            {/* <Principals> </Principals> */}
             

            {/* <Contact></Contact> */}

            <Gallery></Gallery>

            <Evaluation></Evaluation>

            <Footer></Footer>
        </div>
    );
};

export default Home;