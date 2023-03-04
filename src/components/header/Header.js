import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav class=" px-2 px-2 py-6 bg-gray-800">
        <div className="container">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a class="flex items-center">
             <NavLink to={'/'}> <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              /></NavLink>
              <span class="self-center text-xl font-semibold whitespace-nowrap text-white font-bold">
                Store
              </span>
            </a>

            <div
              class="hidden items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <div class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <NavLink
                  to={"/"}
                  className="block py-2 pr-6 pl-6 text-white font-bold text-xl mx-2 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Product
                </NavLink>
                <NavLink
                  to={"/basket"}
                  className="block py-2 pr-6 pl-6 text-white font-bold text-xl mx-2 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Basket
                </NavLink>
                <NavLink
                  to={"/favorites"}
                  className="block py-2 pr-6 pl-6 text-white font-bold text-xl mx-2 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Favorites
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
