import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Select from "react-select";
// import { useForm } from "react-hook-form";
import axios from "axios";
import SweetAlert from "react-swal";

const SignUp = () => {
  const [imageurls, setUrl] = useState('')
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let test  = process.env.REACT_APP_IMG_KEY
  console.log(test)
  console.log("hello",process.env.REACT_APP_IMG_KEY)
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const userName = e.target.Username.value;

    const userPass = e.target.password.value;
    const userType = e.target.type.value; //student or teacher
    /// const imageUrl = e.image;
    // const roll = e.target.roll.value;
    const group = e.target.subject.value;
    // const session = e.target.session.value;
    const phone = e.target.phone.value;
    console.log(phone);
    const address = e.target.address.value;
    // const qualification = e.target.qualification.value;

    // console.log(imageHostKey);
    const image = e.target.img.files[0];
    const formData = new FormData()
    formData.append('image', image)
    console.log("first")
    console.log("hello",process.env.REACT_APP_IMG_KEY)
    let  img_key = "dc93277713c4fada975cf1d234c5d0a0"
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_key}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imageData => {
        console.log(imageData)
        if (imageData.success) {
          console.log(imageData.data.url)
          setUrl(imageData.data.url)
          const info = {
            email: email,
            userName: userName,
            userPass: userPass,
            userType: userType,
            // roll: roll,
            mobile: phone,
            imageUrl: imageData.data.url,
            group: group,
            // session: session,
            address: address,
            // qualification: qualification,
          };
          createUser(email, userPass)
            .then((result) => {
              const user = result.user;
              databaseInsert(info);
              navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
        }
      })


    // console.log(info);
    // // console.log(name,email,password)
    // createUser(email, userPass)
    //   .then((result) => {
    //     const user = result.user;
    //     databaseInsert(info);
    //     navigate(from, { replace: true });
    //   })
    //   .catch((error) => console.error(error));
  }
  const databaseInsert = async (info) => {
    let respose = await axios.post(

      "https://cms2023.onrender.com/api/v1/create-user",
      info
    );

    if (respose.status == 200) {
      console.log(respose.data);
      // localStorage.setItem("users", JSON.stringify(respose.data));
    } else {
      console.log(respose);
    }
  };

  return (
    <div className="bg-slate-900 ">
      <Navbar></Navbar>
      <section class="text-white body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Sign Up
            </h1>
          </div>

          <div class="lg:w-1/2 md:w-2/3 mx-auto bg-slate-800  p-16 rounded-sm">
            {/* form code start here */}
            <form
              //   onSubmit={handleRegister}
              // onSubmit={handleRegister}
              onSubmit={handleSubmit}
              class=" flex w-full flex-col md:flex-row lg:flex-row flex-wrap -m-2"
            >
              {/* <input {...register("radio")} type="radio" value="A" />
            <input {...register("radio")} type="radio" value="B" />
            <input {...register("radio")} type="radio" value="C" /> */}
              {/* name field start here */}
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Username"
                    placeholder="Enter Your Name"
                    class="w-full bg-white text-black  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              {/* Email field start here */}
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    class="w-full bg-white text-black rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="phone" class="leading-7 text-sm ">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    class="w-full bg-white  text-black rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="" class="leading-7 text-sm pe-2 ">
                    Group
                  </label>

                  <select
                    name="subject"
                    class="select w-full select-sm bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  text-gray-700  px-3  py-1 transition-colors duration-200 ease-in-out"
                  >
                    <option disabled selected>
                      Pick your Group
                    </option>
                    <option className=" ">Commerce</option>
                    <option className="">Science</option>
                    <option className=" ">Humanities</option>
                  </select>
                </div>
              </div>

              {/* name field start here */}
              <div class="p-2  w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="address" class="leading-7 text-sm ">
                    Address
                  </label>
                  <input
                    placeholder="Enter Address"
                    type="text"
                    id="address"
                    name="address"
                    class="w-full text-black  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  px-3 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>

              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="password" class="leading-7 text-sm ">
                    password
                  </label>
                  <input
                    placeholder="Enter Password"
                    type="password"
                    id="password"
                    name="password"
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="" class="leading-7 text-sm pe-2 ">
                    Select the position
                  </label>
                  <select
                    name="type"
                    class="select p-2 w-full select-sm bg-white text-black rounded border    text-base outline-none   py-1  transition-colors duration-200 ease-in-out"
                  >
                    <option disabled selected>
                      Select the position
                    </option>
                    <option className="text-black" value="teacher">
                      Teacher
                    </option>
                    <option className="" value="student">
                      Student
                    </option>
                  </select>
                </div>
              </div>
              <div class="p-2 w-full md:w-1/2  lg:w-72 ">
                <div class="relative">
                  <label for="file" class=" leading-7 text-sm pe-2 ">
                    Upload Your Image
                  </label>
                  <input type="file" name='img' className="file-input  text-black file-input-sm file-input-bordered file-input-cyan-500 w-full max-w-xs" />

                </div>
              </div>

              <div class="p-2 w-full md:w-1/2  lg:w-72"></div>

              <div class="p-2 w-full pr-14">
                <button
                  type="submit"
                  class="  w-full  text-center  text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-2xl text-center  text-white mt-3">
              <small>
                If you have an account? please{" "}
                <Link className="text-cyan-500 text-bolder mx-2" to="/signIn">
                  {" "}
                  Sign In{" "}
                </Link>
              </small>
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default SignUp;
