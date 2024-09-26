import { Available } from "@/assets/Icons/Available";
import { Figmaicon } from "@/assets/Icons/Figmaicon";
import { Giticon } from "@/assets/Icons/Giticon";
import { Location } from "@/assets/Icons/Location";
import { Twittericon } from "@/assets/Icons/Twittericon";

export const Section = ({ toggleDarkMode, isDark }) => {
  return (
    <div className="w-600 h-fit py-48 bg-[#fff] dark:bg-[#000]">
      <div className="flex flex-col-reverse md:flex-row justify-around gap-12 ">
        <div>
          <h1 className="md:text-6xl font-bold text-black dark:text-[#F9FAFB] mx-4 text-4xl">{`Hi, I’m Tom 👋`}</h1>
          <p className="mt-4 text-base text-gray-600 dark:text-[#D1D5DB] mx-4">
            I specialize in full stack development, particularly with React.js
            and Node.js.
            <br /> My main goal is to create exceptional digital experiences
            that are fast, visually <br /> appealing, and accessible to
            everyone. With over 7 years of experience in web <br /> development,
            I continue to find joy in crafting innovative solutions and designs.
          </p>
          <div className="mt-24 flex text-gray-600 dark:text-[#D1D5DB] text-base not-italic gap-2 mx-4">
            <Location color={isDark ? "#D1D5DB" : "#4B5563"} />
            Ulaanbatar, Mongolia
          </div>
          <div className="flex text-gray-600 dark:text-[#D1D5DB] text-base not-italic gap-2 mt-2 mx-4">
            <Available />
            Available for new projects
          </div>
          <div className="flex items-center mt-24 gap-2 mx-4">
            <Giticon color={isDark ? "#D1D5DB" : "#4B5563"} />
            <Twittericon color={isDark ? "#D1D5DB" : "#4B5563"} />
            <Figmaicon color={isDark ? "#D1D5DB" : "#4B5563"} />
          </div>
        </div>
        <div className=" h-80 w-80 bg-gray-200 dark:bg-[#374151] relative top-8 left-8 ">
          <div className="relative bottom-8 right-4 ">
            <img
              src="/tom.jpg"
              className=" border-white dark:border-[#030712] border-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
