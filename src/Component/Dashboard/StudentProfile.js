import React from 'react';

const Profile = () => {
    return (
        <div>

            {/* here modal code */}


            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>


            <section class="text-white bg-slate-800 mx-5  body-font">
                <div class="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <div class="avatar mx-5 md:mx-20 lg:mx-40   my-5 ">
                            <div class="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            </div>
                        </div>
                    </div>
                    <div class="lg:flex-grow  md:w-1/2 lg:pl-24 md:pl-16 flex flex-col  md:items-start md:text-left text-start ">
                        <p>Name: Nilima </p>
                        <p>Roll: 52145</p>
                        <p>Fathers Name: nayan</p>
                        <p>Mothers name: nayantara</p>
                        <p>Contact number: 32165498463</p>
                        <p>GPA: 5.00</p> <div class="flex justify-center">
                        <label for="my-modal-3" class="inline-flex my-3 cursor-pointer text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update Profile</label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;