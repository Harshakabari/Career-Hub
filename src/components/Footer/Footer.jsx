import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#060C23]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/">
                <img src={logo} className="h-10 me-3" alt="FlowBite Logo" />
              </a>
              <p className="w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, fugit sint. Accusamus eos distinctio reprehenderit.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Discover
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Home
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      About
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Find job
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Help
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Support
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:underline">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
            
              <h3 className="flex mb-2">
                <span> <i class="ri-map-pin-line"></i></span>
                Address:
                <address className="mx-3">Ahmedabad, Gujarat</address>
              </h3>

              <h3 className="flex mb-2"> 
                <span> Email: </span>
                <p className="mx-3">jobmaster1212@gmail.com</p>
              </h3>

              <h3 className="flex">
                <span> Phone: </span>
                <p className="mx-3">+91 8547963258</p>
              </h3>



            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
