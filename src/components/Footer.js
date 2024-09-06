import { C } from "@/assets/Icons/C";

export const Footer = ({ toggleDarkMode, isDark }) => {
  return (
    <div className="bg-gray-50  dark:bg-[#030712] flex justify-center h-20 items-center">
      <C color={isDark ? "#D1D5DB" : "#4B5563"} />
      <p className="text-gray-600 dark:text-[#D1D5DB] text-sm">
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </p>
    </div>
  );
};
