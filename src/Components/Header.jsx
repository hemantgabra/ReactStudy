import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GiNinjaStar } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaGift } from "react-icons/fa";
import { TbGiftCardFilled } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loginDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);

  // Question About This Const
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // document.addEventListener("mousedown", handleClickOutside);
    // return () => {
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
  }, []);

  return (
  
      <div className="shadow-md">
        <div className="flex justify-around items-center px-3 py-2 bg-blue-600">
          <div className="py-1">
            <img src="images/Logoimage/Logo.svg" width="200" alt="Logo" />
          </div>

          <div className="border border-gray-300 flex items-center gap-3 px-4 w-[30rem] py-[0.5rem] bg-slate-100">
            <IoSearch className="text-2xl text-gray-500" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full h-full  border-none outline-none text-gray-700"
            />
          </div>

          {/* Dropdown Menu */}
          <div className="relative" ref={loginDropdownRef}>
            <button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="text-blue-600 bg-white px-[1rem] py-[0.4rem] rounded-lg focus:outline-none 
              flex justify-center items-center gap-[0.5rem] text-[1.1rem] font-medium "
            >
              <FaRegUserCircle />
              Login
              <FaChevronDown className="text-[0.6rem] transaction-transform hover:rotate-180 duration-300" />
            </button>

            {isLoginOpen && (
              <div className="absolute right-[-5]  w-[15rem] bg-white text-black border rounded-lg shadow-lg z-10">
                <ul className="">
                  <li className="px-4 py-3 border-b-2 border-grey-400 hover:bg-gray-100 cursor-pointer flex justify-between flex-row">
                    <a href="#">New Customer ?</a>
                    <a href="#">Sign In</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      {" "}
                      <FaRegUserCircle></FaRegUserCircle> Profile
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <GiNinjaStar />
                      Flipkart Plus Zone
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <FaBoxOpen /> Orders{" "}
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <CiHeart /> Wishlist{" "}
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <FaGift /> Rewards
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <TbGiftCardFilled />
                      Gift Card
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <nav className="flex p-3 justify-center items-center gap-10 text-[1rem] font-medium text-white">
            <Link
              to="/"
              className="gap-[0.5rem] flex items-center justify-center flex-row"
            >
              <IoCartOutline className="text-[1.6rem] font-medium" />
              Cart
            </Link>

            <Link
              to="/aboutus"
              className="gap-[0.5rem] flex items-center justify-center flex-row "
            >
              <BsShop className="text-[1.3rem] font-medium " />
              Become a Seller
            </Link>
            {/* <Link to="/contact" className="hover:text-blue-500">Contact</Link> */}
          </nav>

          <div className="relative" ref={menuDropdownRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white px-[0.7rem] py-[0.6rem] rounded-lg focus:outline-none 
              flex justify-center items-center gap-[0.1rem] text-[1.2rem] font-medium"
            >
              <CiMenuKebab />
            </button>

            {isMenuOpen && (
              <div className="absolute left-[-10rem]  w-[17rem] bg-white text-black border rounded-lg shadow-lg">
                <ul className="">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <IoIosNotificationsOutline className="text-[1.2rem]" />
                      Notificaiton Preference
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <FaHeadphonesAlt className="text-[1.1rem]" />
                      24*7 Customer Care
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <MdOutlineAutoGraph className="text-[1.3erm]" /> Adverties{" "}
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer felx items-center justify-center flex-row">
                    <Link to="/" className="flex items-center gap-[0.5rem]">
                      <FiDownload className="text-[1.3rem]" /> Download App
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
  
  );
}

export default Header;
