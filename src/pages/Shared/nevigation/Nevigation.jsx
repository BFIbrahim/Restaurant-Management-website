import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Nevigation = () => {
    return (
        <div>
            <div className="navbar  fixed z-10 max-w-5xl mx-auto bg-gray-600 bg-opacity-25 text-white uppercase">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bestro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li className="hover:text-[#EEFF25]"><a>Home</a></li>
                        <li className="hover:text-[#EEFF25]"><a>Contact Us</a></li>
                        <li className="hover:text-[#EEFF25]"><a>Dashboard</a></li>
                        <li className="hover:text-[#EEFF25]"><a>Our menu</a></li>
                        <li className="hover:text-[#EEFF25]"><a>Our Shop</a></li>
                    </ul>
                </div>

                <div>
                    <Link><FaShoppingCart /></Link>
                    
                </div>

            </div>
        </div>
    );
};

export default Nevigation;