import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return <div>


        <footer class="dark:bg-gray-800" style={{backgroundColor: '#212121'}}>
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
