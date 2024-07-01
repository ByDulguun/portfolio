import { Icon } from "./Icon";

export const Skills = ({ toggleDarkMode, isDark }) => {
  return (
    <div className="pt-8 pb-8 bg-white dark:bg-[#030712]">
      <div className="md:px-48 pb-12 text-center">
        <div className="md:text-center pt-12 ">
          <button className=" text-gray-600 dark:text-[#D1D5DB] bg-gray-200 dark:bg-[#374151]  px-6 py-1 rounded-xl">
            Skills
          </button>
        </div>
        <p className="mt-6 md:text-center text-gray-600 dark:text-[#D1D5DB] text-xl">
          The skills, tools and technologies I am really good at:
        </p>
        <Icon />
      </div>
    </div>
  );
};
