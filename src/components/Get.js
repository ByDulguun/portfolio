import {
  Call,
  Copy,
  Figmaicon,
  Giticon,
  Message,
  Twittericon,
} from "@/asests/Icons";

export const Get = ({ toggleDarkMode, isDark }) => {
  return (
    <div className="grid gap-8 bg-white dark:bg-[#030712]">
      <div className="text-center pt-40 ">
        <button className=" text-gray-600 dark:text-[#D1D5DB] bg-gray-200 dark:bg-[#374151] px-8 py-1 rounded-xl">
          Get in touch
        </button>
      </div>
      <div className="mt-8 text-center text-gray-600 dark:text-[#D1D5DB] text-base">
        <p>
          What’s next? Feel free to reach out to me if you're looking for <br />{" "}
          a developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex gap-2 justify-center ">
        <Message color={isDark ? "#D1D5DB" : "#4B5563"} />
        <h1 className="text-gray-900 dark:text-[#F9FAFB] text-4xl font-semibold">
          tom@pinecone.mn
        </h1>
        <Copy color={isDark ? "#D1D5DB" : "#4B5563"} />
      </div>
      <div className="flex gap-2 justify-center">
        <Call color={isDark ? "#D1D5DB" : "#4B5563"} />
        <h1 className="text-gray-900 dark:text-[#F9FAFB] text-4xl font-semibold">
          +976 88112233
        </h1>
        <Copy color={isDark ? "#D1D5DB" : "#4B5563"} />
      </div>

      <p className="text-center text-gray-600 dark:text-[#D1D5DB] text-base">
        You may also find me on these platforms!
      </p>
      <div className="flex justify-center text-baseline items-center">
        <Giticon color={isDark ? "#D1D5DB" : "#4B5563"} />
        <Twittericon color={isDark ? "#D1D5DB" : "#4B5563"} />
        <Figmaicon color={isDark ? "#D1D5DB" : "#4B5563"} />
      </div>
    </div>
  );
};
