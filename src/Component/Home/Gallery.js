import React from 'react';

// import big1 from '../../image/';
import imag1 from '../../image/cafeteria.png'
import imag2 from '../../image/library.png'
import imag3 from '../../image/banner2.jpg'
import imag4 from '../../image/basketball.png'
import imag5 from '../../image/about.jpg'
import imag6 from '../../image/certificate.jpg'
const Gallery = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-cyan-500 lg:w-1/3 lg:mb-0 mb-4">Explore Our Gallery</h1>
                        <p class="lg:pl-6 text-xl lg:w-2/3 mx-auto leading-relaxed text-white">Explore our online college gallery to see photos and videos of our campus, events, and students in action.</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={imag6} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={imag1} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={imag2} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={imag3 } />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={imag4} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={imag5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;