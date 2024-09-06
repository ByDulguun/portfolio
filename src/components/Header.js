import { Moon } from "@/asests/Icons/Moon";
import { Sun } from "@/asests/Icons/Sun";

export const Header = ({ toggleDarkMode, isDark }) => {
  return (
    <div className=" sm:flex justify-around w-screen h-full py-4 bg-[#fff] dark:bg-gray-900">
      <div className=" flex font-normal text-3xl text-gray-900 dark:text-gray-300 2xl justify-between  mx-4  ">
        <div className="  ">
          <h1>Tom</h1>
        </div>
        <div className="sm:hidden w-fit h-fit">
          <img src="/icon.jpg" height={40} width={40} />
        </div>
      </div>
      <div className=" 2xl:flex list-none gap-24 items-center font-medium hidden text-gray-600 text-base dark:text-[#D1D5DB]">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <div className="flex w-fit h-fit gap-8 items-center">
          <button onClick={toggleDarkMode}>
            {isDark ? <Sun color={isDark ? "#D1D5DB" : "#4B5563"} /> : <Moon />}
          </button>

          <button className="w-fit bg-black dark:bg-gray-100 py-2 px-4 rounded-xl text-white dark:text-black">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
