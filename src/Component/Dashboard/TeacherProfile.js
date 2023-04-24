import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';

const TeacherProfile = () => {
    const [datas, setDatas] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    useEffect(() => {
        const data = async () => {
            let respose = await axios.get(

                `https://cms2023.onrender.com/api/v1/get-single-user/${user?.email}`
            );
            console.log(respose);
            if (respose.status == 200) {
                console.log(respose.data.data);
                setDatas(respose.data.data)
                return respose

            } else {
                console.log(respose);
            }
        }
        data()
            .then(respose => console.log(respose))


    }, [user?.email])
    return (
        <div>
            <section class="text-white bg-slate-800 mx-5  body-font">
                <div class="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <div class="avatar mx-5 md:mx-20 lg:mx-40   my-5 ">
                            <div class="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    alt=""
                                    src={datas[0]?.imageUrl}
                                />                            </div>
                        </div>
                    </div>


                    <div class="lg:flex-grow pr-7 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-xl text-3xl mb-4 font-medium text-white">Name: {datas[0]?.userName}</h1>


                        <div class="flex justify-center">
                            <button class="inline-flex text-white my-2 bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update Profile</button>                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeacherProfile;