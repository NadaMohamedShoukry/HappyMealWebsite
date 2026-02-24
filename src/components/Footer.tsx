import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.jpeg";
export default function Footer() {
  return (
    <footer className="  bg-[#acd8a7] dark:bg-[#8bca84] mt-15 px-20 py-10">
      <div className="flex flex-col gap-5 sm:flex-row justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex gap-5 items-center">
            <img alt="logo" src={Logo} className="w-20 h-20 rounded-full" />
            <h1 className="font-semibold text-3xl text-gray-800">Happy Meal</h1>
          </div>
          <p
            className="font-bold text-2xl font-noto sm:w-1/2
       text-left text-gray-700 "
          >
            Discover delicious meals crafted to satisfy your cravings and fit
            your lifestyle!
          </p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="text-lg text-gray-800  font-semibold mb-3">
              Quick Links
            </p>
            <ul>
              <li className="hover:underline text-[15px] text-gray-700">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:underline text-gray-700">
                <NavLink to="/">Best Meals</NavLink>
              </li>
              <li className="hover:underline text-gray-700">
                <NavLink to="/">Contact Us</NavLink>
              </li>
              <li className="hover:underline text-gray-700">
                <NavLink to="/">FAQs</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg text-gray-800  font-semibold mb-3">
              Follow Us
            </p>
            <ul>
              <li className="hover:underline text-[15px] text-gray-700">
                <NavLink to="/">Facebook</NavLink>
              </li>
              <li className="hover:underline text-gray-700">
                <NavLink to="/">Instagram</NavLink>
              </li>
              <li className="hover:underline text-gray-700">
                <NavLink to="/">Youtube</NavLink>
              </li>
              <li className="hover:underline text-gray-700">
                <NavLink to="/">TikTok</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="text-gray-700 w-full text-center mt-10 " />
      <p className="text-gray-700 mt-5 text-lg font-medium text-center">
        All Rights Reserved. Created by Nada Shoukry{" "}
      </p>
    </footer>
  );
}
