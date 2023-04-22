import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';

const Profile = () => {
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
            <div class="avatar mx-5 md:mx-10 lg:mx-20   my-5 ">
              <div class="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt=""
                  src={datas[0]?.imageUrl}
                />                            </div>
            </div>
          </div>
          <div class="lg:flex-grow  md:w-1/2  lg:w-full lg:pl-20 lg:pr-32 md:pl-16 flex flex-col  md:items-start md:text-left text-start ">
            <p>Name :  <span className='ml-2'> {datas[0]?.userName}</span></p>

            {
              datas[0]?.userType === 'teacher' ?
                <>

                </>
                : <>
                  <p>Roll : <span className='ml-2'>{datas[0]?.roll}</span></p>
                  <p>Fathers Name :  <span className='ml-2'>{datas[0]?.fatherName}</span> </p>
                  <p>Mothers name :  <span className='ml-2'>{datas[0]?.motherName}</span> </p>
                </>

            }
            <p>group :  <span className='ml-2'> {datas[0]?.group}</span></p>

            <p>Address :  <span className='ml-2'>{datas[0]?.address}</span></p>
            <p>Contact number :  <span className='ml-2'>{datas[0]?.mobile}</span> </p>



          </div>
        </div>
      </section>
    </div>

  );
};

export default Profile;