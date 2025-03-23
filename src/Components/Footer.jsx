<<<<<<< HEAD
function Footer() {
    return <div>Footer code will come here</div>;
}

export default Footer;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { IoSearch } from "react-icons/io5";
// import { FaChevronDown } from "react-icons/fa";



// function Header() {

//   // const [isOpen, setIsOpen] = useState(false);

//   return <div>
//     <BrowserRouter>
//       <div className="shadow-md">
//         <div className="flex justify-between items-center sm:flex-col md:flex-row px-3 py-2">
//           <div className="py-1"><img src="images/Logoimage/Logo.svg" width="200" /></div>
//           <div className=" border border-black-500 flex items-center  gap-[1rem] px-[1rem] w-[30rem] h-[2.5rem] rounded-3xl ">
//             <IoSearch className="text-[1.6rem]" />
//             <input type="text" placeholder="Search for Products, Brands and More"
//               className="w-[100%] h-[100%] rounded-3xl flex items-center justify-center border-none outline-none "></input>
//           </div>

//           <div className="">

//             <nav className="flex shadow-lg p-3 justify-center items-center text-[1.4rem] gap-10 relative">
//               <button className="flex items-center gap-[0.8rem] rounded-lg px-2 py-[0.2rem] text-white bg-blue-700">Login
//                 <FaChevronDown className="text-[1rem]" />
//               </button>




//               <Link to="/">Home</Link> |<Link to="/aboutus">About</Link> |
//               <Link to="/contact">Contact</Link>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>


//   </div>;
// }

// export default Header;
=======
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return <div>


        <footer class=" rounded-lg shadow-sm m-4 dark:bg-gray-800" style={{backgroundColor: '#212121'}}>
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-white">
                <div className='text-gray-400'>
                    ABOUT
                    <ul className="mt-2 text-white" style={{fontSize:'12px'}}>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Flipkart Stories</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Corporate information</a></li>
                    </ul>
                </div>
                <div className="pb-14 text-gray-400">
                    GROUP COMPANIES
                    <ul className="mt-2 text-white" style={{fontSize:'12px'}}>
                        <li><a href="#">Myntra</a></li>
                        <li><a href="#">Cleartrip</a></li>
                        <li><a href="#">Shopsy</a></li>
                    </ul>
                </div>
                <div className="pb-7 text-gray-400">
                    HELP
                    <ul className="mt-4 text-white" style={{fontSize:'12px'}}>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Cancellation & Returns</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="mt-5 text-gray-400">
                    CONSUMER POLICY
                    <ul className="mt-4 text-white" style={{fontSize:'12px'}}>
                        <li><a href="#">Cancellation & Returns</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Grievance Redressal</a></li>
                        <li><a href="#">EPR Compliance</a></li>
                    </ul>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 mt-16 text-gray-400">
                    Mail:Us
                    <p className="mt-4 text-white" style={{fontSize:'12px'}}>Flipkart Internet Private Limited, <br />
                        Buildings Alyssa, Begonia & <br />
                        Clove Embassy Tech Village, <br />
                        Outer Ring Road, Devarabeesanahalli Village, <br />
                        Bengaluru, 560103, <br />
                        Karnataka, India
                    </p>
                    <div className='text-gray-400'>
                        Social :
                        <ul className="w-40 p-4 md:flex md:items-center md:justify-between text-white text-lg">
                        <li><FaFacebook></FaFacebook></li>
                        <li><FaTwitter></FaTwitter></li>
                        <li><FaInstagram></FaInstagram></li>
                        <li><FaYoutube></FaYoutube></li>
                        </ul>
                        </div>
                </div>
                <div className="mt-5 text-gray-400">
                    Registered office Address
                    <p className="mt-4 text-white" style={{fontSize:'12px'}}>
                        Flipkart Internet Private Limited, <br />
                        Buildings Alyssa, Begonia & <br />
                        Clove Embassy Tech Village,<br />
                        Outer Ring Road, Devarabeesanahalli Village <br />
                        Bengaluru, 560103, <br />
                        Karnataka, India <br />
                        CIN : U51109KA2012PTC066107 <br />
                        Telephone: 044-45614700 / 044-67415800
                    </p>
                </div>
                
            </div>
            <div className='border-t-2 border-gray-700 w-full p-4 md:flex md:items-center md:justify-around text-white text-sm'>
                    <div>
                        Become a Seller
                    </div>
                    <div>
                        Advertise
                    </div>
                    <div>
                        Gift Cards
                    </div>
                    <div>
                        Help Center
                    </div>
                    <div>
                    ©2007-2025 Flipcart.com
                    </div>
                    <div>
                        <img src="" alt="payment" />
                    </div>
                </div>
        </footer>

    </div>;
}

export default Footer;
>>>>>>> saurav-project1
