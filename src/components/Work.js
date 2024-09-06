import { Gromit } from "./Gromit";
import { Share } from "./Share";

export const Work = ({ toggleDarkMode, isDark }) => {
  return (
    <div className="w-full h-full bg-white dark:bg-[#030712]">
      <div className="text-center pt-40 ">
        <button className=" text-gray-600 dark:text-[#D1D5DB] bg-gray-200 dark:bg-[#374151] px-8 py-1 rounded-xl">
          Work
        </button>
      </div>
      <div className="mt-8 text-center text-gray-600  dark:text-[#D1D5DB] text-base">
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      <div className="py-0 md:px-96 flex  md:justify-center mt-12  ">
        <div className="bg-gray-50 dark:bg-[#374151] flex-1 rounded-l-lg shadow-xl">
          <img
            src="/unelgee.jpg
            "
            className="w-fit h-fit py-24 md:px-28 "
          />
        </div>
        <div className="flex-1 rounded-r-lg shadow-xl pl-8  bg-white dark:bg-[#1F2937]">
          <h1 className="my-12  text-gray-900 dark:text-[#F9FAFB] font-semibold text-xl ">
            UBCab
          </h1>
          <p className="text-base text-gray-600 dark:text-[#D1D5DB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
            <br /> ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia <br /> curae.
          </p>
          <div className="my-12">
            <Gromit />
          </div>

          <Share color={isDark ? "#D1D5DB" : "#4B5563"} />
        </div>
      </div>
      <div className="py-0 px-96 flex  justify-center mt-12  ">
        <div className="flex-1 rounded-r-lg shadow-xl pl-8  bg-white dark:bg-[#1F2937]">
          <h1 className="my-12 text-gray-900 dark:text-[#F9FAFB] font-semibold text-xl">
            MentorHub
          </h1>
          <p className="text-base text-gray-600 dark:text-[#D1D5DB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
            <br /> ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia <br /> curae.
          </p>
          <div className="my-12">
            <Gromit />
          </div>

          <Share color={isDark ? "#D1D5DB" : "#4B5563"} />
        </div>
        <div className="bg-gray-50 dark:bg-[#374151] flex-1 rounded-l-lg shadow-xl pl-14 rounded-xl">
          <img
            src="/task.jpg"
            className="w-fit h-fit py-24 px-28 rounded-xl "
          />
        </div>
      </div>
      <div className="py-0 px-96 flex  justify-center mt-12  ">
        <div className="bg-gray-50 dark:bg-[#374151] flex-1 rounded-l-lg shadow-xl ">
          <img
            src="/toim.jpg "
            className="w-fit h-fit py-24 px-28 rounded-xl "
          />
        </div>
        <div className="flex-1 rounded-r-lg shadow-xl pl-8 bg-white dark:bg-[#1F2937]">
          <h1 className="my-12  text-gray-900 dark:text-[#F9FAFB] font-semibold text-xl">
            Itoim
          </h1>
          <p className="text-base text-gray-600 dark:text-[#D1D5DB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
            <br /> ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia <br /> curae.
          </p>
          <div className="my-12">
            <Gromit />
          </div>

          <Share color={isDark ? "#D1D5DB" : "#4B5563"} />
        </div>
      </div>
    </div>
  );
};
