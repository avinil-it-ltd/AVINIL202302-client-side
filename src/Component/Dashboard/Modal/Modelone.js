import axios from "axios";
import React from "react";

const Modalone = ({ userData }) => {
  const { _id, group } = userData;
  console.log(_id, group);
  const handleMidResult = async(e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
        student:_id,
        FinalTerm: [
        {
          bangla: form.bangla.value,
          english: form.english.value,
          math: form.math.value,
        //   physics: form.physics.value,
        //   chemistry: form.chemistry.value,
        //   biology: form.biology.value,
          business: form.business.value,
          finance: form.finance.value,
        },
      ],
    };
    let respose = await axios.post(
        'http://localhost:5000/api/v1/create-mark',
        data
      );
      if (respose.status === 200) {
        console.log(respose);
  
      } else {
        console.log(respose);
      }
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleMidResult} className="grid grid-cols-1 gap-3">
            <input
              type="number"
              placeholder="bangla number"
              name="bangla"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              name="english"
              type="number"
              placeholder="english number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="math"
              placeholder="math number"
              className="input input-bordered w-full max-w-xs"
            />
            {group == "Science" ? (
              <>
                <input
                  type="number"
                  name="physics"
                  placeholder="physics number"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  name="chemistry"
                  placeholder="chemistry number"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  name="biology"
                  placeholder="biology number"
                  className="input input-bordered w-full max-w-xs"
                />
              </>
            ) : null}
            {group == "Commerce" ? (
              <>
                <input
                  type="number"
                  name="finance"
                  placeholder="finance number"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  name="business"
                  placeholder="business number"
                  className="input input-bordered w-full max-w-xs"
                />
              </>
            ) : null}
            <button
              className="input input-bordered w-full max-w-sm"
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

export default Modalone;
