import axios from "axios";
import { lastDayOfMonth } from "date-fns";
import React, { useEffect, useState } from "react";

const StudentResult = () => {
  const [number, setNumber] = useState(0);
  const [midGPA, setMidGpa] = useState(0);
  const [finaGPA, setFinalGpa] = useState(0);
  const [marksMid, setMarksMid] = useState([]);
  const [marksFinal, setMarksFinal] = useState([]);
  const [items, setItems] = useState([]);

  const [itemsFinal, setItemsFinal] = useState([]);
  const [userData, setUserData] = useState();

  let getGpa = percentage => {
    let grades = "F";
    if (percentage <= 100 && percentage >= 80) {
      grades = "A+";
    }
    else if (percentage <= 79 && percentage >= 70) {
      grades = "A";
    }

    else if (percentage <= 69 && percentage >= 60) {
      grades = "A-";
    }
    else if (percentage <= 59 && percentage >= 50) {
      grades = "B";
    }
    else if (percentage <= 49 && percentage >= 40) {
      grades = "C";
    }
    else if (percentage <= 40 && percentage >= 33) {
      grades = "D";
    }
    else {
      grades = "F";
    }

    return grades;
  }

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("users"));

    if (item) {
      // console.log("dsfd", item[0]._id);
      const data = async () => {
        let respose = await axios.get(

          `https://cms2023.onrender.com/api/v1/get-mark-student/${item[0]._id}`
        );

        if (respose.status == 200) {
          console.log(respose?.data?.data)
          //   console.log(respose?.data?.data[0].Midterm[0].bangla );
          //   console.log(respose?.data?.data[1].FinalTerm[0].bangla );
          //  const midBool = respose?.data?.data[0].marksFinal[0].bangla> "0"  || false;
          //  const finalBool = respose?.data?.data[1].FinalTerm[0].bangla> "0" ;
          setMarksMid(respose?.data?.data[0].Midterm[0]);
          console.log(marksMid, "hello");
          setMarksFinal(respose?.data?.data[1].FinalTerm[0]);
          console.log(marksFinal, "hello");
          //  if (midBool){
          //   setMarksMid(respose?.data?.data[0].Midterm[0]);
          //   console.log(marksMid,"hello");
          //  }
          //  if (finalBool){
          //   setMarksFinal ( respose?.data?.data[1].FinalTerm[0]);
          //   console.log(marksFinal,"hello");
          //  }
          //setDatas(respose.data.data)
          const datas = respose?.data?.data;
          setItems(...items, datas[0]);
          console.log(items)
          return respose;
        } else {
          console.log(respose);
        }
      };
      data().then((respose) => console.log(respose));
    }
    //     const propertyValues = Object.values(items);
    // console.log(propertyValues);
    console.log(item[0]?.group)
    setUserData(item[0])
    //GPA For Mid
    if (item[0]?.group == 'Commerce') {
      const midmarks = items[0]?.Midterm[0]
      let sum = 0
      // let mid = sum + parseInt(items[0]?.Midterm[0].bangla) * 5 / 10 + parseInt(items[0]?.Midterm[0].finance) * 5 / 10 + parseInt(items[0]?.Midterm[0].math) * 5 / 10 + parseInt(items[0]?.Midterm[0].business) * 5 / 10 + parseInt(items[0]?.Midterm[0].english) * 5 / 10
      let mid = getGpa((sum + parseInt(marksMid?.bangla) + parseInt(marksMid?.finance) + parseInt(marksMid?.math) + parseInt(marksMid?.business) + parseInt(marksMid?.english)) / 5)
      console.log(mid);
      setMidGpa(mid)
    }
    else if (item[0]?.group == 'Science') {
      let sum = 0
      let mid = getGpa((sum + parseInt(marksMid?.bangla) + parseInt(marksMid?.chemistry) + parseInt(marksMid?.math) + parseInt(marksMid?.physics) + parseInt(marksMid?.english) + parseInt(marksMid?.biology)) / 6)
      console.log(mid);
      setMidGpa(mid)
    }
    else if (item[0]?.group == 'Humanities') {
      let sum = 0
      let mid = getGpa(sum + (parseInt(marksMid?.bangla) + parseInt(marksMid?.sociology) + parseInt(marksMid?.math) + parseInt(marksMid?.phychology) + parseInt(marksMid?.english)) / 5)

      setMidGpa(mid)
      // setNumber(mid)
    }


    //GPA For Final
    if (item[0]?.group == 'Commerce') {
      const midmarks = items[0]?.FinalTerm[0]
      let sum = 0
      // let mid = sum + parseInt(items[0]?.Midterm[0].bangla) * 5 / 10 + parseInt(items[0]?.Midterm[0].finance) * 5 / 10 + parseInt(items[0]?.Midterm[0].math) * 5 / 10 + parseInt(items[0]?.Midterm[0].business) * 5 / 10 + parseInt(items[0]?.Midterm[0].english) * 5 / 10
      let final = getGpa((sum + parseInt(marksFinal?.bangla) + parseInt(marksFinal?.finance) + parseInt(marksFinal?.math) + parseInt(marksFinal?.business) + parseInt(marksFinal?.english)) / 5)
      console.log(final);
      setFinalGpa(final)
    }
    else if (item[0]?.group == 'Science') {
      let sum = 0
      let final = getGpa((sum + parseInt(marksFinal?.bangla) + parseInt(marksFinal?.chemistry) + parseInt(marksFinal?.math) + parseInt(marksFinal?.physics) + parseInt(marksFinal?.english) + parseInt(marksFinal?.biology)) / 6)
      console.log(final);
      setFinalGpa(final)
    }
    else if (item[0]?.group == 'Humanities') {
      let sum = 0
      let final = getGpa(sum + (parseInt(marksFinal?.bangla) + parseInt(marksFinal?.sociology) + parseInt(marksFinal?.math) + parseInt(marksFinal?.phychology) + parseInt(marksFinal?.english)) / 5)

      setFinalGpa(final)
      // setNumber(mid)
    }
  }, [items]);
  // console.log(items[0].Midterm[0]);
  // console.log(items[0].Midterm[0]);

  return (
    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -m-4 lg:mx-20">
          <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              {/* <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"> */}
              {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
              {/* </div> */}
              <div class="flex-grow">
                <h2 class="text-cyan-500 text-lg title-font font-medium mb-3">
                  Mid Result
                </h2>
                <div>
                  {" \n"}
                  {
                    userData?.group == 'Commerce' ? <>
                      <p class="text-white text-md title-font font-medium mb-3">bangla : {" "} {marksMid?.bangla}</p>
                      <p class="text-white text-md title-font font-medium mb-3">english : {" "} {marksMid?.english}</p>
                      <p class="text-white text-md title-font font-medium mb-3">math : {" "} {marksMid?.math}</p>
                      <p class="text-white text-md title-font font-medium mb-3">business : {" "} {marksMid?.business}</p>
                      <p class="text-white text-md title-font font-medium mb-3">finance : {" "} {marksMid?.finance}</p>

                    </> : null

                  }


                  {
                    userData?.group == 'Humanities' ? <>
                      <p class="text-white text-md title-font font-medium mb-3">bangla : {" "} {marksMid?.bangla}</p>
                      <p class="text-white text-md title-font font-medium mb-3">english : {" "} {marksMid?.english}</p>
                      <p class="text-white text-md title-font font-medium mb-3">math : {" "} {marksMid?.math}</p>
                      <p class="text-white text-md title-font font-medium mb-3">sociology : {" "} {marksMid?.sociology}</p>
                      <p class="text-white text-md title-font font-medium mb-3">phychology : {" "} {marksMid?.phychology}</p>

                    </> : null

                  }

                  {
                    userData?.group == 'Science' ? <>
                      <p class="text-white text-md title-font font-medium mb-3">bangla : {" "} {marksMid?.bangla}</p>
                      <p class="text-white text-md title-font font-medium mb-3">english : {" "} {marksMid?.english}</p>
                      <p class="text-white text-md title-font font-medium mb-3">math : {" "} {marksMid?.math}</p>
                      <p class="text-white text-md title-font font-medium mb-3">physics : {" "} {marksMid?.physics}</p>
                      <p class="text-white text-md title-font font-medium mb-3">chemistry : {" "} {marksMid?.chemistry}</p>
                      <p class="text-white text-md title-font font-medium mb-3">biology : {" "} {marksMid?.biology}</p>

                    </> : null

                  }
                  {" \n"}
                  {

                    // else if (userData?.group == 'Humanities') {
                    //   let sum = 0
                    // let mid = getGpa(sum + (parseInt(marksMid.bangla) + parseInt(marksMid.sociology) + parseInt(marksMid.math) + parseInt(marksMid.phychology) + parseInt(marksMid.english)) / 5)

                    // setMidGpa(mid)
                    //     // setNumber(mid)
                    //   }

                  }
                </div>
                <p class="leading-relaxed text-green-500 text-base">
                  Total GPA  : {"   "}
                  {
                    midGPA
                  }
                </p>
                {/* <a class="mt-3 text-cyan-500 inline-flex items-center">
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
                </a>*/}
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              {/* <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"> */}
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
              {/* </div> */}
              <div class="flex-grow">
                <h2 class="text-cyan-500 text-lg title-font font-medium mb-3">
                  Final Result
                </h2>
                <div>
                  {
                    <div>
                      {" \n"}
                      {
                        userData?.group == 'Commerce' ? <>
                          <p class="text-white text-md title-font font-medium mb-3">bangla : {" "} {marksFinal?.bangla}</p>
                          <p class="text-white text-md title-font font-medium mb-3">english : {" "} {marksFinal?.english}</p>
                          <p class="text-white text-md title-font font-medium mb-3">math : {" "} {marksFinal?.math}</p>
                          <p class="text-white text-md title-font font-medium mb-3">business : {" "} {marksFinal?.business}</p>
                          <p class="text-white text-md title-font font-medium mb-3">finance : {" "} {marksFinal?.finance}</p>

                        </> : null

                      }


                      {
                        userData?.group == 'Humanities' ? <>
                          <p class="text-white text-md title-font font-medium mb-3">bangla : {" "} {marksFinal?.bangla}</p>
                          <p class="text-white text-md title-font font-medium mb-3">english : {" "} {marksFinal?.english}</p>
                          <p class="text-white text-md title-font font-medium mb-3">math : {" "} {marksFinal?.math}</p>
                          <p class="text-white text-md title-font font-medium mb-3">sociology : {" "} {marksFinal?.sociology}</p>
                          <p class="text-white text-md title-font font-medium mb-3">phychology : {" "} {marksFinal?.phychology}</p>

                        </> : null

                      }

                      {
                        userData?.group == 'Science' ? <>
                          <p class="text-white text-md title-font font-medium mb-3">bangla : {" "} {marksFinal?.bangla}</p>
                          <p class="text-white text-md title-font font-medium mb-3">english : {" "} {marksFinal?.english}</p>
                          <p class="text-white text-md title-font font-medium mb-3">math : {" "} {marksFinal?.math}</p>
                          <p class="text-white text-md title-font font-medium mb-3">physics : {" "} {marksFinal?.physics}</p>
                          <p class="text-white text-md title-font font-medium mb-3">chemistry : {" "} {marksFinal?.chemistry}</p>
                          <p class="text-white text-md title-font font-medium mb-3">biology : {" "} {marksFinal?.biology}</p>

                        </> : null

                      }
                      
                      {

                        // else if (userData?.group == 'Humanities') {
                        //   let sum = 0
                        // let mid = getGpa(sum + (parseInt(marksMid.bangla) + parseInt(marksMid.sociology) + parseInt(marksMid.math) + parseInt(marksMid.phychology) + parseInt(marksMid.english)) / 5)

                        // setMidGpa(mid)
                        //     // setNumber(mid)
                        //   }

                      }
                    </div>

                  }

                </div>
                <p class="leading-relaxed  text-green-500 text-base">
                  Total GPA : {" "} {finaGPA}
                </p>
                {/* <a class="mt-3 text-cyan-500 inline-flex items-center">
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
                </a> */}
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
