import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';

const Profile = () => {
    const [datas,setDatas] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    useEffect(()=>{
      const data = async()=>{
          let respose =await axios.get(
              `http://localhost:5000/api/v1/get-single-user/${user?.email}`
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
        
  
    },[user?.email])
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
                    <div class="lg:flex-grow  md:w-1/2 lg:pl-24 md:pl-16 flex flex-col  md:items-start md:text-left text-start ">
                    <p>Name:{datas[0]?.userName}</p>
                    
                      {
                        datas[0]?.userType==='teacher'?
                        <> 
                        
                        </>
                        :<>
                         <p>Roll: {datas[0]?.roll}</p>
                         <p>Fathers Name: {datas[0]?.fatherName}</p>
                        <p>Mothers name: {datas[0]?.motherName}</p>
                        </>

                      }
                      <p>group: {datas[0]?.group}</p>
                      
                     <p>Address: {datas[0]?.address}</p>   
                    <p>Contact number: {datas[0]?.mobile}</p>
                        

                        
                    </div>
                </div>
            </section>
        </div>
        
    );
};

export default Profile;