import Button from "./Button.tsx";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function App() {
  return (
    <>
      <div className="grid grid-rows-10">
        <div className="row-span-1">
          <div className="grid grid-cols-2 w-full content-center">
            <div className="w-full"></div>
            <div className="w-full mr-auto ml-auto">
              <div
                className=""
                id="navbar-solid-bg"
              >
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-9">
          <div className="grid grid-cols-2 w-full h-screen content-center">
            <div className="w-full ml-auto mr-auto h-full px-32">
              <h4>
                <span className="text-xs text-C1 font-JBM">Hi, my name is</span>
                <div className="text-4xl font-Poppins">
                  <h2>Yousif Al-Janabi</h2>
                  <h2>I do things for the web</h2>
                </div>

                <p className="font-JBM text-C3 text-sm py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris runt mollit anim id est laborum.
                </p>

                <Button>Get In Touch</Button>
                <IconContext.Provider
                  value={{ className: "text-4xl mr-4 my-8" }}
                >
                  <div className="flex">
                    <FaGithub />
                    <FaLinkedin />
                  </div>
                </IconContext.Provider>
              </h4>
            </div>
            <div className="w-full ml-auto mr-auto h-full px-32">
              <div className="grid grid-cols-6">
                <div className="col-span-2">
                  <p className=" font-JBM text-sm text-C3	h-full">
                    Feb 2022 - Present
                  </p>
                </div>
                <div className="col-span-4">
                  <p className="text-sm font-Poppins">
                    Django Developer - TwoAbstracts
                  </p>
                  <p className="text-sm font-Poppins text-C3">
                    Junior Developer - Internship
                  </p>
                  <div>
                    <p className="font-JBM text-C3 text-xs py-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris runt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
