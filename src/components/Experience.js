import { Upwork } from "@/assets/Icons/Upwork";

export const Experience = ({ toggleDarkMode }) => {
  return (
    <div className="bg-gray-50 dark:bg-[#111827]">
      <div>
        <div className="text-center pt-40 ">
          <button className=" text-gray-600 dark:text-[#D1D5DB] bg-gray-200 dark:bg-[#374151] px-8 py-1 rounded-xl">
            Experience
          </button>
        </div>
        <div className="mt-8 text-center  text-gray-600 dark:text-[#D1D5DB] ">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="py-16 ">
          <div className="md:w-224 md:h-72 w-279 h-308 rounded-xl bg-white dark:bg-[#1F2937] md:mx-96 md:my-12 md:flex md:justify-around py-16 shadow-xl mx-4 mb-10">
            <div className="mx-10 my-2">
              <Upwork />
            </div>
            <div className="grid gap-1 relative left-6">
              <h1 className="font-semibold text-xl text-gray-900 dark:text-[#F9FAFB] mx-4">
                Sr. Frontend Developer
              </h1>
              <div className="text-gray-600 dark:text-[#D1D5DB] text-base mx-4">
                <li>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo <br />{" "}
                  semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </li>
              </div>
            </div>
            <div className="text-gray-700 dark:text-[#F9FAFB]">
              <p>Nov 2021 - Present</p>
            </div>
          </div>
          <div className="md:w-224 md:h-72 w-279 h-308 rounded-xl bg-white dark:bg-[#1F2937] md:mx-96 md:my-12 md:flex md:justify-around py-16 shadow-xl mx-4 mb-10">
            <div className="mx-10 my-2">
              <Upwork />
            </div>
            <div className="grid gap-1 relative left-6">
              <h1 className="font-semibold text-xl text-gray-900 dark:text-[#F9FAFB] mx-4">
                Sr. Frontend Developer
              </h1>
              <div className="text-gray-600 dark:text-[#D1D5DB] text-base mx-4">
                <li>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo <br />{" "}
                  semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </li>
              </div>
            </div>
            <div className="text-gray-700 dark:text-[#F9FAFB]">
              <p>Nov 2021 - Present</p>
            </div>
          </div>
          <div className="md:w-224 md:h-72 w-279 h-308 rounded-xl bg-white dark:bg-[#1F2937] md:mx-96 md:my-12 md:flex md:justify-around py-16 shadow-xl mx-4 mb-10">
            <div className="mx-10 my-2">
              <Upwork />
            </div>
            <div className="grid gap-1 relative left-6">
              <h1 className="font-semibold text-xl text-gray-900 dark:text-[#F9FAFB] mx-4">
                Sr. Frontend Developer
              </h1>
              <div className="text-gray-600 dark:text-[#D1D5DB] text-base mx-4">
                <li>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo <br />{" "}
                  semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </li>
              </div>
            </div>
            <div className="text-gray-700 dark:text-[#F9FAFB]">
              <p>Nov 2021 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
