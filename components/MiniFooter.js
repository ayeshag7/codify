import Image from 'next/image';
import Link from 'next/link';

const MiniFooter = () => {
  return (
    <div className="bg-footerGrey dark:bg-black mt-12 mx-0 p-0 md:p-4 border-t dark:border-gray-600 border-t-black" style={{
        "maxWidth": "1980px",
        "minHeight": "380px"
      }}>

        <div className="flex flex-col gap-y-8 items-center mt-12 mb-2">
            
            <div>
                <p className="text-xl md:text-2xl text-center font-extrabold text-boldGrey dark:text-offWhite mb-4">Like what you read?</p>
                <p className="text-xl md:text-4xl text-center font-extrabold text-boldGrey dark:text-offWhite mb-4">Subscribe to our Newsletter</p>
            </div>
            
            <div>
                <form action="" className="relative">
                    <input type="text" className="bg-white text-boldGrey px-6 w-72 h-12 md:w-96 md:h-16 rounded-full focus:ring-boldGrey dark:focus:ring-gray-400 focus:outline-yellow-400 dark:focus:outline-yellow-400 border border-black dark:border-gray-400" placeholder="Enter email address"/>
                    <button className="absolute top-2 md:top-3 right-4 bg-logoPurple rounded-full hover:scale-105 transform transition-transform duration-400 ease-out text-sm md:text-base px-2 py-1.5 md:px-4 md:py-2 text-white font-extrabold"
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
            <p className="text-boldGrey dark:text-offWhite text-sm w-64 md:w-96 text-center leading-7">Subscribe to our email newsletter and unlock access to 
                <span className="font-bold"> members-only</span> content and 
                <span className="font-bold"> exclusive</span> updates.
            </p>

            {/* concluding text */}
            <div className="flex justify-start items-center gap-x-2 md:gap-x-6 mt-4 mb-4">
                <Link href="/" className="text-boldGrey dark:text-offWhite text-sm md:text-base dark:hover:text-logoPurple hover:text-logoPurple">Terms & Conditions</Link>
                <div className="w-0.5 h-4 bg-gray-400"></div>
                <Link href="/" className="text-boldGrey dark:text-offWhite text-sm md:text-base dark:hover:text-logoPurple hover:text-logoPurple">Faq</Link>
                <div className="w-0.5 h-4 bg-gray-400"></div>
                <Link href="/" className="text-boldGrey dark:text-offWhite text-sm md:text-base dark:hover:text-logoPurple hover:text-logoPurple">Privacy Policy</Link>
            </div>

        </div>

    </div>
  )
}

export default MiniFooter;
