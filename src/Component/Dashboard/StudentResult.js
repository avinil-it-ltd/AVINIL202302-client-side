import axios from "axios";
import { lastDayOfMonth } from "date-fns";
import React, { useEffect, useState,useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const StudentResult = () => {
  const { user,state } = useContext(AuthContext);

  const [number, setNumber] = useState(0);
  const [midGPA, setMidGpa] = useState(0);
  const [finaGPA, setFinalGpa] = useState(0);
  const [marksMid, setMarksMid] = useState([]);
  const [marksFinal, setMarksFinal] = useState([]);
  const [items, setItems] = useState([]);
  let mGPA = 'F';
  let fGPA = 'F';
  const [itemsFinal, setItemsFinal] = useState([]);
  const [userData, setUserData] = useState();
  const [self, setSelf] = useState({});
  
console.log(state.data);
  useEffect(() => {
    setSelf(user);
    if (user) {
      // console.log("dsfd", item[0]._id);
      const data = async () => {
        let respose = await axios.get(

          `https://cms2023.onrender.com/api/v1/get-mark-student/${state?.data[0]?._id}`
        );

        if (respose.status == 200) {
          console.log(respose?.data?.data[0])
          
          setMarksMid(respose?.data?.data[0].Midterm[0]);
          console.log(marksMid, "hello");
          setMarksFinal(respose?.data?.data[1].FinalTerm[0]);
          console.log(marksFinal, "hello");
         
         
          return respose;
        } else {
          console.log(respose);
        }
      };
      data().then((respose) => console.log(respose));
    }
   // setUserData(item[0])
    
  
  }, []);
  console.log(marksMid)


  let getGpa = percentage => {
    console.log(percentage)
    percentage = parseInt(percentage)
    let grades = "F";
    if (percentage <= 100 && percentage >= 80) {
      console.log(percentage)
      grades = "A+";
    }
    else if (percentage <= 79 && percentage >= 70) {
      console.log(percentage)
      grades = "A";
    }

    else if (percentage <= 69 && percentage >= 60) {
      console.log(percentage)
      grades = "A-";
    }
    else if (percentage <= 59 && percentage >= 50) {
      console.log(percentage)
      grades = "B";
    }
    else if (percentage <= 49 && percentage >= 40) {
      console.log(percentage)
      grades = "C";
    }
    else if (percentage <= 40 && percentage >= 33) {
      console.log(percentage)
      grades = "D";
    }
    else {
      console.log("Hello",percentage)
      grades = "F";
    }

    return grades;
  }

console.log(userData?.group);
  //GPA For Mid
  if (userData?.group == 'Commerce') {
    const midmarks = items[0]?.Midterm[0]
    let sum = 0
    console.log(marksMid?.bangla)
    console.log((sum + parseInt(marksMid?.bangla) + parseInt(marksMid?.finance) + parseInt(marksMid?.math) + parseInt(marksMid?.business) + parseInt(marksMid?.english)))
    
    let mid = getGpa((sum + parseInt(marksMid?.bangla) + parseInt(marksMid?.finance) + parseInt(marksMid?.math) + parseInt(marksMid?.business) + parseInt(marksMid?.english)) / 5)
    console.log(mid);
    mGPA = mid;
  
  }
  else if (userData?.group == 'Science') {
    let sum = 0
    let mid = getGpa((sum + parseInt(marksMid?.bangla) + parseInt(marksMid?.chemistry) + parseInt(marksMid?.math) + parseInt(marksMid?.physics) + parseInt(marksMid?.english) + parseInt(marksMid?.biology)) / 6)
    console.log(mid);
    mGPA = mid;
  }
  else if (userData?.group == 'Humanities') {
    let sum = 0
    let mid = getGpa(sum + (parseInt(marksMid?.bangla) + parseInt(marksMid?.sociology) + parseInt(marksMid?.math) + parseInt(marksMid?.phychology) + parseInt(marksMid?.english)) / 5)

    console.log(mid);
    mGPA = mid;
  }


  // GPA For Final
  if (userData?.group == 'Commerce') {
    const midmarks = items[0]?.FinalTerm[0]
    let sum = 0
    // let mid = sum + parseInt(items[0]?.Midterm[0].bangla) * 5 / 10 + parseInt(items[0]?.Midterm[0].finance) * 5 / 10 + parseInt(items[0]?.Midterm[0].math) * 5 / 10 + parseInt(items[0]?.Midterm[0].business) * 5 / 10 + parseInt(items[0]?.Midterm[0].english) * 5 / 10
    let final = getGpa((sum + parseInt(marksFinal?.bangla) + parseInt(marksFinal?.finance) + parseInt(marksFinal?.math) + parseInt(marksFinal?.business) + parseInt(marksFinal?.english)) / 5)
    console.log(final);
    fGPA = final;
  }
  else if (userData?.group == 'Science') {
    let sum = 0
    let final = getGpa((sum + parseInt(marksFinal?.bangla) + parseInt(marksFinal?.chemistry) + parseInt(marksFinal?.math) + parseInt(marksFinal?.physics) + parseInt(marksFinal?.english) + parseInt(marksFinal?.biology)) / 6)
    console.log(final);
    fGPA = final;
  }
  else if (userData?.group == 'Humanities') {
    let sum = 0
    let final = getGpa(sum + (parseInt(marksFinal?.bangla) + parseInt(marksFinal?.sociology) + parseInt(marksFinal?.math) + parseInt(marksFinal?.phychology) + parseInt(marksFinal?.english)) / 5)

    fGPA = final;
  }
  
  return (
    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -m-4 lg:mx-20">
        <div class="p-4 lg:w-96 md:w-full w-80 ">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">

              <div class="flex-grow">
                <h2 class="text-cyan-500 text-xl text-center title-font font-medium mb-3">
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

                   

                  }
                </div>
                <p class="leading-relaxed text-green-500 text-base">
                  Total GPA  : {"   "}
                  {
                    mGPA
                  }
                </p>
                
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-96 md:w-full w-80 ">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
             <div class="flex-grow">
                <h2 class="text-cyan-500 text-xl text-center title-font font-medium mb-3">
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

                       

                      }
                    </div>

                  }

                </div>
                <p class="leading-relaxed  text-green-500 text-base">
                  Total GPA : {" "} {fGPA}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentResult;
