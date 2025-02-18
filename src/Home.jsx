import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import "./index.js"
import bannimg from "./images/banner-bg.jpg"
import deliVan from "./images/icons/delivery-van.svg"
import money_bck from "./images/icons/delivery-van.svg"
import service_24 from "./images/icons/delivery-van.svg" 
import category_1 from "./images/category/category-1.jpg"
import category_2 from "./images/category/category-2.jpg"
import category_3 from "./images/category/category-3.jpg"
import category_4 from "./images/category/category-4.jpg"
import category_5 from "./images/category/category-5.jpg"
import category_6 from "./images/category/category-6.jpg"
import product1 from "./images/products/product1.jpg"
import product2 from "./images/products/product2.jpg"
import product3 from "./images/products/product3.jpg"
import product4 from "./images/products/product4.jpg"
import product5 from "./images/products/product5.jpg"
import product6 from "./images/products/product6.jpg"
import product7 from "./images/products/product7.jpg"
import product8 from "./images/products/product8.jpg"
import product9 from "./images/products/product9.jpg"
import product10 from "./images/products/product10.jpg"
import product11 from "./images/products/product11.jpg"
import product12 from "./images/products/product12.jpg"
    
function Home() {
    return (

        <>
            <Header></Header>
            {/* <!-- navbar --> */}
            <nav class="bg-gray-800">
                <div class="container flex">
                    <div class="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                        <span class="text-white">
                            <i class="fa-solid fa-bars"></i>
                        </span>
                        <span class="capitalize ml-2 text-white hidden">All Categories</span>

                        {/* <!-- dropdown --> */}
                        <div
                            class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                            <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/sofa.svg" alt="sofa" class="w-5 h-5 object-contain"/>
                                    <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                            </a>
                            <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/terrace.svg" alt="terrace" class="w-5 h-5 object-contain"/>
                                    <span class="ml-6 text-gray-600 text-sm">Terarce</span>
                            </a>
                            <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/bed.svg" alt="bed" class="w-5 h-5 object-contain"/>
                                    <span class="ml-6 text-gray-600 text-sm">Bed</span>
                            </a>
                            <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/office.svg" alt="office" class="w-5 h-5 object-contain"/>
                                    <span class="ml-6 text-gray-600 text-sm">office</span>
                            </a>
                            <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/outdoor-cafe.svg" alt="outdoor" class="w-5 h-5 object-contain"/>
                                    <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                            </a>
                            <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="assets/images/icons/bed-2.svg" alt="Mattress" class="w-5 h-5 object-contain"/>
                                    <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                            </a>
                        </div>
                    </div>

                    <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
                        <div class="flex items-center space-x-6 capitalize">
                            <a href="index.html" class="text-gray-200 hover:text-white transition">Home</a>
                            <a href="pages/shop.html" class="text-gray-200 hover:text-white transition">Shop</a>
                            <a href="#" class="text-gray-200 hover:text-white transition">About us</a>
                            <a href="#" class="text-gray-200 hover:text-white transition">Contact us</a>
                        </div>
                        <a href="pages/login.html" class="text-gray-200 hover:text-white transition">Login</a>
                    </div>
                </div>
            </nav>
            {/* <!-- ./navbar --> */}

            {/* <!-- banner --> */}
            <div class="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${bannimg})`}}>
                <div class="container">
                    <h1 class="text-6xl text-gray-800 font-medium mb-4 capitalize">
                        best collection for <br/> home decoration
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br/>
                        accusantium perspiciatis, sapiente
                        magni eos dolorum ex quos dolores odio</p>
                    <div class="mt-12">
                        <a href="#" class="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
                    </div>
                </div>
            </div>
            {/* <!-- ./banner --> */}

            {/* <!-- features --> */}
            <div class="container py-16">
                <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                    <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="{deliVan}" alt="Delivery" class="w-12 h-12 object-contain"/>
                            <div>
                                <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
                                <p class="text-gray-500 text-sm">Order over $200</p>
                            </div>
                    </div>
                    <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="{money_bck}" alt="Delivery" class="w-12 h-12 object-contain"/>
                            <div>
                                <h4 class="font-medium capitalize text-lg">Money Rturns</h4>
                                <p class="text-gray-500 text-sm">30 days money returs</p>
                            </div>
                    </div>
                    <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="{service_24}" alt="Delivery" class="w-12 h-12 object-contain"/>
                            <div>
                                <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                                <p class="text-gray-500 text-sm">Customer support</p>
                            </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./features --> */}

            {/* <!-- categories --> */}
            <div class="container py-16">
                <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
                <div class="grid grid-cols-3 gap-3">
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="{category_1}" alt="category 1" class="w-full" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</a>
                    </div>
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="{category_2}" alt="category 1" class="w-full" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Mattrass</a>
                    </div>
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="{category_3}" alt="category 1" class="w-full" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Outdoor
                        </a>
                    </div>

                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="{category_4}" alt="category 1" class="w-full" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sofa</a>
                    </div>
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="{category_5}" alt="category 1" class="w-full" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Living
                            Room</a>
                    </div>
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="{category_6}" alt="category 1" class="w-full" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Kitchen</a>
                    </div>
                </div>
            </div>
            {/* <!-- ./categories --> */}

            {/* <!-- new arrival --> */}
            <div class="container pb-16">
                <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product1}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product2}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                                    King Size</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product3}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Couple Sofa</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product4}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Mattrass X</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                </div>
            </div>
            {/* <!-- ./new arrival --> */}

            {/* <!-- ads --> */}
            <div class="container pb-16">
                <a href="#">
                    <img src="assets/images/offer.jpg" alt="ads" class="w-full" />
                </a>
            </div>
            {/* <!-- ./ads --> */}

            {/* <!-- product --> */}
            <div class="container pb-16">
                <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product5}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product6}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                                    King Size</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product7}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Couple Sofa</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product8}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Mattrass X</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product9}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product10}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                                    King Size</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product11}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Couple Sofa</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                    <div class="bg-white shadow rounded overflow-hidden group">
                        <div class="relative">
                            <img src="{product12}" alt="product 1" class="w-full"/>
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                    <a href="#"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i class="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Mattrass X</h4>
                            </a>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <div class="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</a>
                    </div>
                </div>
            </div>
            {/* <!-- ./product --> */}

            <Footer></Footer>
        </>
    );
}
export default Home;