import React from 'react';
import Image from 'next/image';

const MiniFooter = () => {
  return (
    <div className="bg-backgroundSkin p-0 md:p-4 border border-t-black" style={{
        "maxWidth": "1980px",
        "margin": "auto",
        "minHeight": "380px"
      }}>

        <div className="flex flex-col gap-y-8 items-center mt-20 mb-2">

            <p className="text-2xl md:text-4xl text-center font-extrabold text-boldGrey mb-4">Subscribe to our Newsletter</p>
            <div>
                <form action="" className="relative">
                    <input type="text" className="bg-white text-boldGrey px-6 w-72 h-12 md:w-96 md:h-16 rounded-full focus:ring-boldGrey focus:outline-yellow-400 border border-black" placeholder="Enter email address"/>
                    <button className="absolute top-2 md:top-3 right-4 bg-popUpPink rounded-full hover:scale-105 transform transition-transform duration-400 ease-out text-sm md:text-base px-2 py-1.5 md:px-4 md:py-2 text-white font-extrabold"
                    onMouseOver={(e) => {
                        e.target.style.boxShadow = '3px 3px 0 #333333'; 
                    }}
                    onMouseOut={(e) => {
                        e.target.style.boxShadow = 'none';
                    }}>Submit</button>
                    <Image
                    src="/emailIcon.png"
                    alt="sending mail"
                    width={70}
                    height={70}
                    className="hidden md:block md:absolute"
                    style={{"top": "-10px", "left": "-70px"}}
                    />
                </form>
            </div>
            <p className="text-boldGrey text-sm w-64 md:w-96 text-center leading-7">Subscribe to our email newsletter and unlock access to 
                <span className="font-bold"> members-only</span> content and 
                <span className="font-bold"> exclusive</span> updates.
            </p>

            {/* concluding text */}
            <div className="flex justify-start items-center gap-x-2 md:gap-x-6 mt-6 mb-4">
                <a href="" className="text-boldGrey text-sm md:text-base hover:text-popUpPink">Terms & Conditions</a>
                <div className="w-0.5 h-4 bg-gray-400"></div>
                <a href="" className="text-boldGrey text-sm md:text-base hover:text-popUpPink">Faq</a>
                <div className="w-0.5 h-4 bg-gray-400"></div>
                <a href="" className="text-boldGrey text-sm md:text-base hover:text-popUpPink">Privacy Policy</a>
            </div>

        </div>

    </div>
  )
}

export default MiniFooter;