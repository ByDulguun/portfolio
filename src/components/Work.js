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
            src="https://s3-alpha-sig.figma.com/img/f7f4/1fb2/9978d6752a84190b8a3ff63dfa2ce73a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pB9QbQhOe19LxC9mW6SIdUMyTrCFpcqZDrAKGXQMDoX9wRMXpm42eFTGeNkd0siv8TP6tIOfMCkihtlBaynm1hs69g-0XbMdQD1I8Y0Ea5X4ocgnkSzMiMusQlUJCWNXyU5hTSEHG~MuxBSE3MBRh8da7m8iZV93WcGEwUxRDqneE6rl5plLbAN2nbqvZl0O-LL-PYSTjHWTwEj8aOZ1HhVj9gy25BvBeksoM5ovfrTtlPNZ-U5LwnKbVG9qu5tUcVkamGc33wt8msSPWVmisWQzcNN~YTi0Trw3Cu40ZMgJ0AlAarfqQhrEWL9yHCVGQ3-IMpCmAUVcjpW2Zx75Qg__"
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
            src="https://s3-alpha-sig.figma.com/img/600f/0a53/ec233eeec30acb72a718cce9a3c1c7dc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPMgXdDGXjBK3RST9PZkcBq-l3tO8SRkOGyoT0ZhBGZ~b5vrPKNxtVHVLqd0DnxL7f5t-lOhW3u17lInh9i1L6NyoTwANkTeyM4XqmfSxyz9oGDGiwbx23E9z8-1ktEGzt~mvWAeewaMITBXwnvKVLPAYBJNRG1J0XJaGItnTdt5btuHTRDbJxG3tTGBmeR6Hux~O5l4oVMeBZAspKBMDK9ykpGXHvx2kITdAhwTLqf3LP6iQWrzb3t~1hQ8CZ07ImEz1z3sCPoykbNgW8RAbRC0OKGY-of4GI6e5SxBZudwXEma~dUZp82TD7-JIb9SwZMV-KDZPJGX7mJANrD5Gg__"
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
