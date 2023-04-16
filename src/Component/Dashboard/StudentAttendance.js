import React from 'react';

const StudentAttendance = () => {
    return (
        <div>
            <div class="overflow-x-auto w-full">
                <p className='text-white text-3xl text-center py-2'>Your Attendance Status</p>
                <table class="table w-full bg-slate-800 ">
                    {/* <!-- head --> */}
                    <thead >
                        <tr className='bg-slate-800'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Date</th>
                            <th>Session</th>
                            <th>Status</th>
                            {/* <th>Mid Result</th>
                            <th>Final Result</th>
                            <th>Action</th> */}
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td>
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                    </div>
                                </div>
                            </td>

                            <td>Avishek Debnath  </td>
                            <td>2034129</td>
                            <td>20/10/2023</td>
                             <td>2023</td>
                            <td>Present</td>
                           
                            {/* <td><label for="attendance-modal" className='btn btn-sm text-xs bg-cyan-500 outline-none border-none ' >Update Attendance</label></td> */}

                            {/* <td><label for="mid-result-modal" className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Update Mid Result</label></td> */}

                            {/* <td><label for="final-result-modal" className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Update Final Result</label></td> */}

                            {/* <td><button className='btn btn-sm text-xs bg-rose-500 outline-none border-none '>Delete</button></td> */}
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default StudentAttendance;