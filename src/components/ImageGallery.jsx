import React from 'react';
import image1 from '../assets/bgimage.jpg';
import image2 from '../assets/Frame 7.svg';

function ImageGallery() {
    return (
        <>
            <style>
                {`
                .bg-scroll {
                   
                    background-size: cover;
                }

                @keyframes backgroundScroll {
                    0% { background-position: 0 0; }
                    100% { background-position: 100% 0; }
                }
                `}
            </style>

            <div
                className="w-full min-h-screen bg-center bg-no-repeat bg-scroll py-10 overflow-hidden"
                style={{ backgroundImage: `url(${image1})` }}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-center text-black px-4">
                    Your Gateway to Exceptional Destinations,
                    <br className="hidden md:block" />
                    Perfectly Managed
                </h1>

                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-10 gap-10 mb-12 rounded-2xl">
                    {/* Left Text Content */}
                    <div className="flex-1 max-w-2xl text-black text-justify md:text-center">
                        <p className="text-sm sm:text-base mb-8 leading-relaxed">
                            We curate exceptional travel experiences and flawlessly executed events throughout Europe’s most captivating destinations. With unmatched local insight, a trusted network of partners, and a passion for precision, we transform complex logistics into seamless journeys. From corporate incentives in Barcelona to luxury escapes in the Amalfi Coast, delivers unforgettable moments — designed with purpose, delivered with excellence.
                        </p>
                        <div className="flex justify-center md:justify-center">
                            <button className="bg-[#4b6e57] text-white rounded px-6 py-3 text-sm sm:text-base font-semibold shadow-md hover:bg-[#39513f] transition-colors duration-200">
                                Know More &rarr;
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center items-center w-full h-full">
                        <img
                            src={image2}
                            alt="hero-illustration"
                            className="w-full h-full max-h-[400px] object-contain md:object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageGallery;
