import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Contact = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar></Navbar>


      <section class=" body-font relative">
        <div class="absolute inset-0 bg-green-50">
          <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no"  
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.315540303!2d-74.26054823358196!3d40.697147766721685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1656264173526!5m2!1sen!2sin" 
          Style=""></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-slate-800 text-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class=" text-lg mb-1 font-medium title-font">Contact Us</h2>
            <p class="leading-relaxed mb-5 ">If you have any questions or concerns, please don't hesitate to reach out to us through our online college contact page.</p>
            


            <form action="">
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm ">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm ">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm ">Message</label>
                <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button class="text-white w-full bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </form>


          </div>
        </div>
      </section>


      <Footer></Footer>
    </div>
  );
};

export default Contact;