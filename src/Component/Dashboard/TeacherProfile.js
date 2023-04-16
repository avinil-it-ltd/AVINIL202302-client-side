import React from 'react';

const TeacherProfile = () => {
    return (
        <div>
            <section class="text-white bg-slate-800 mx-5  body-font">
                <div class="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <div class="avatar mx-5 md:mx-20 lg:mx-40   my-5 ">
                            <div class="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            </div>
                        </div>
                    </div>


                    <div class="lg:flex-grow pr-7 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-xl text-3xl mb-4 font-medium text-white">Name: Before they sold out</h1>                        
                       

                         <div class="flex justify-center">
                        <button class="inline-flex text-white my-2 bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update Profile</button>                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeacherProfile;