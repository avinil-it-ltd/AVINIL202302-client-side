import axios from "axios";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Modal = ({ userData }) => {
  const [test, setTest] = useState({})
  const { _id, group } = userData;
  console.log(_id, group);
  const handleMidResult = async (e) => {
    e.preventDefault();
    console.log(e.target)
    const form = e.target;
    if (group == "Science") {
      const data = {
        student: _id,
        Midterm: [
          {
            bangla: form.bangla.value,
            english: form.english.value,
            math: form.math.value,
            physics: form.physics.value,
            chemistry: form.chemistry.value,
            biology: form.biology.value
          },
        ],
      }
      // emailjs.sendForm('service_i8ie5mf', 'template_avrndva', data,"OMVTrZJ8Q7HWM7UVX")
      // .then((result) => {
      //   console.log(result.text);
      // }, (error) => {
      //   console.log(error.text);
      // });
      let respose = await axios.post(
        'http://localhost:5000/api/v1/create-mark',
        data
      )
      if (respose.status === 200) {
        console.log(respose);

      } else {
        console.log(respose);
      }
    }
    else if (group == "Commerce") {
      const data = {
        student: _id,
        Midterm: [
          {
            bangla: form.bangla.value,
            english: form.english.value,
            math: form.math.value,
            business: form.business.value,
            finance: form.finance.value,
          },
        ]
      }
      let respose = await axios.post(
        'http://localhost:5000/api/v1/create-mark',
        data
      )
      if (respose.status === 200) {
        console.log(respose);

      } else {
        console.log(respose);
      }

    }

    else if (group == "Humanities") {
      const data = {
        student: _id,
        Midterm: [
          {
            bangla: form.bangla.value,
            english: form.english.value,
            math: form.math.value,
            phychology: form.phychology.value,
            sociology: form.sociology.value
          },
        ],
      }
      let respose = await axios.post(
        'http://localhost:5000/api/v1/create-mark',
        data
      )
      if (respose.status === 200) {
        console.log(respose);

      } else {
        console.log(respose);
      }

    }



  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative" >
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleMidResult} className="grid grid-cols-1 gap-3">
            <input
              type="number"
              placeholder="bangla number"
              name="bangla"
              className="input input-bordered w-full "
            />

            <input
              name="english"
              type="number"
              placeholder="english number"
              className="input input-bordered w-full "
            />
            <input
              type="number"
              name="math"
              placeholder="math number"
              className="input input-bordered w-full "
            />
            {group == "Science" ? (
              <>
                <input
                  type="number"
                  name="physics"
                  placeholder="physics number"
                  className="input input-bordered w-full "
                />
                <input
                  type="number"
                  name="chemistry"
                  placeholder="chemistry number"
                  className="input input-bordered w-full "
                />
                <input
                  type="number"
                  name="biology"
                  placeholder="biology number"
                  className="input input-bordered w-full "
                />
              </>
            ) : null}
            {group == "Commerce" ? (
              <>
                <input
                  type="number"
                  name="finance"
                  placeholder="finance number"
                  className="input input-bordered w-full "
                />
                <input
                  type="number"
                  name="business"
                  placeholder="business number"
                  className="input input-bordered w-full "
                />
              </>
            ) : null}
            {group == "Humanities" ? (
              <>
                <input
                  type="number"
                  name="phychology"
                  placeholder="phychology number"
                  className="input input-bordered w-full "
                />
                <input
                  type="number"
                  name="sociology"
                  placeholder="sociology number"
                  className="input input-bordered w-full "
                />
              </>
            ) : null}

            <button
              className="input btn bg-cyan-500 input-bordered w-full "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;
