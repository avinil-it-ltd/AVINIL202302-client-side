import axios from "axios";
import { lastDayOfMonth } from "date-fns";
import React, { useEffect, useState } from "react";

const StudentResult = () => {
    const [number,setNumber] = useState(0)
  const [items, setItems] = useState([]);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("users"));

    if (item) {
      // console.log("dsfd", item[0]._id);
      const data = async () => {
        let respose = await axios.get(
          `https://cms2023.onrender.com//api/v1/get-mark-student/${item[0]._id}`
        );

        if (respose.status == 200) {
          console.log(respose?.data?.data);
          //setDatas(respose.data.data)
          setItems(respose?.data?.data);
          return respose;
        } else {
          console.log(respose);
        }
      };
      data().then((respose) => console.log(respose));
    }
//     const propertyValues = Object.values(items);
// console.log(propertyValues);
    if(item[0]?.group=='Commerce')
    {
      let sum =0
      let mid= sum + parseInt(items[0]?.Midterm[0].bangla)*5/10 +parseInt(items[0]?.Midterm[0].finance)*5/10+parseInt(items[0]?.Midterm[0].math)*5/10+parseInt(items[0]?.Midterm[0].business)*5/10+parseInt(items[0]?.Midterm[0].english)*5/10
      setNumber(mid)
    }
    if(item[0]?.group=='Science')
    {
      let sum =0
      let mid= sum + parseInt(items[0]?.Midterm[0].bangla)*5/100 +parseInt(items[0]?.Midterm[0].chemistry)*5/100+parseInt(items[0]?.Midterm[0].math)+parseInt(items[0]?.Midterm[0].physics)*5/100+parseInt(items[0]?.Midterm[0].english)*5/100+parseInt(items[0]?.Midterm[0].biology)*5/100
      setNumber(mid)
    }
    if(item[0]?.group=='Humanities')
    {
      let sum =0
      let mid= sum + parseInt(items[0]?.Midterm[0].bangla)*5/10 +parseInt(items[0]?.Midterm[0].sociology)*5/10+parseInt(items[0]?.Midterm[0].math)*5/10+parseInt(items[0]?.Midterm[0].phychology)*5/10+parseInt(items[0]?.Midterm[0].english)*5/10
      setNumber(mid)
    }
  }, []);
  console.log(items[0]);

  return (
    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -m-4 lg:mx-20">
          <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-cyan-500 text-lg title-font font-medium mb-3">
                  Mid Result
                </h2>
                <p class="leading-relaxed text-cyan-500 text-base">
               Total GPA  : 
               {
number/5
               }
                </p>
                <a class="mt-3 text-cyan-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-cyan-500 text-lg title-font font-medium mb-3">
                  Final Result
                </h2>
                <p class="leading-relaxed  text-cyan-500 text-base">
                  Total GPA :{" "}
                </p>
                <a class="mt-3 text-cyan-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center items-center my-6">
        <button className="text-white btn bg-cyan-500 w-60 text-center">
          Download MarkSheet
        </button>
      </div>
    </section>
  );
};

export default StudentResult;
