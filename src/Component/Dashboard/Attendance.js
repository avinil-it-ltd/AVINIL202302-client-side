import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const Attendance = () => {
    const [selected, setSelected] = useState();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div>




         <div className='mx-auto w-96'> 
         <DayPicker
                className='bg-white mx-auto w-full p-10 flex justify-center items-center'
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
         </div>



            <div class="overflow-x-auto w-full">
                <p className='text-white text-3xl text-center py-2'>Today Attendance</p>
                <div>
                    <table class="table w-full bg-slate-800 ">
                        {/* <!-- head --> */}
                        <thead >
                            <tr className='bg-slate-800'>
                                <th>Image</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Roll</th>
                                <th>Group</th>
                                <th>Present</th>
                                <th>Absent</th>
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
                                <td>02/01/2023</td>
                                <td>Avishek Debnath  </td>
                                <td>2034129</td>
                                <td>Science</td>

                                <td><button className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Present</button></td>

                                <td><button className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Absent</button></td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                        </div>
                                    </div>
                                </td>
                                <td>02/01/2023</td>
                                <td>Avishek Debnath  </td>
                                <td>2034129</td>
                                <td>Science</td>

                                <td><button className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Present</button></td>

                                <td><button className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Absent</button></td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                        </div>
                                    </div>
                                </td>
                                <td>02/01/2023</td>
                                <td>Avishek Debnath  </td>
                                <td>2034129</td>
                                <td>Science</td>

                                <td><button className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Present</button></td>

                                <td><button className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Absent</button></td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                        </div>
                                    </div>
                                </td>
                                <td>02/01/2023</td>
                                <td>Avishek Debnath  </td>
                                <td>2034129</td>
                                <td>Science</td>

                                <td><button className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Present</button></td>

                                <td><button className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Absent</button></td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                        </div>
                                    </div>
                                </td>
                                <td>02/01/2023</td>
                                <td>Avishek Debnath  </td>
                                <td>2034129</td>
                                <td>Science</td>

                                <td><button className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Present</button></td>

                                <td><button className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Absent</button></td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                        </div>
                                    </div>
                                </td>
                                <td>02/01/2023</td>
                                <td>Avishek Debnath  </td>
                                <td>2034129</td>
                                <td>Science</td>

                                <td><button className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Present</button></td>

                                <td><button className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Absent</button></td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                        </div>
                                    </div>
                                </td>
                                <td>02/01/2023</td>
                                <td>Avishek Debnath  </td>
                                <td>2034129</td>
                                <td>Science</td>

                                <td><button className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Present</button></td>

                                <td><button className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Absent</button></td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img alt='' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                        </div>
                                    </div>
                                </td>
                                <td>02/01/2023</td>
                                <td>Avishek Debnath  </td>
                                <td>2034129</td>
                                <td>Science</td>

                                <td><button className='btn btn-sm text-xs bg-lime-500 outline-none border-none '>Present</button></td>

                                <td><button className='btn btn-sm text-xs bg-green-500 outline-none border-none '>Absent</button></td>

                            </tr>
                        </tbody>

                    </table>




                </div>
            </div>
        </div>
    );
};

export default Attendance;