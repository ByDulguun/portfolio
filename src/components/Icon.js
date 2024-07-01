import {
  Cypress,
  Express,
  Figma,
  Git,
  Javascript,
  Mongo,
  Nest,
  Next,
  Node,
  React,
  Sass,
  Socked,
  Storybook,
  Tailwindcss,
  Typescript,
} from "@/asests/Icons";

export const Icon = ({ isDark }) => {
  return (
    <div className="text-gray-600 md:grid md:grid-cols-8 grid grid-cols-3 mt-12 md:ml-28 md:mb-18 gap-x-10 gap-y-10 mx-4">
      <div>
        <Javascript />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Javascript</p>
      </div>
      <div>
        <Typescript />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Typescript</p>
      </div>
      <div>
        <React />
        <p className="text-gray-600 dark:text-[#D1D5DB]">React</p>
      </div>
      <div>
        <Next />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Next.js</p>
      </div>
      <div>
        <Node />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Node.js</p>
      </div>
      <div>
        <Express color={isDark ? "#4B5563" : "#D1D5DB"} />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Express.js</p>
      </div>
      <div>
        <Nest />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Nest.js</p>
      </div>
      <div>
        <Socked color={isDark ? "#000" : "#fff"} />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Socked.io</p>
      </div>
      <div>
        <Git />
        <p className="text-gray-600 dark:text-[#D1D5DB]">PostgreSQL</p>
      </div>
      <div>
        <Mongo />
        <p className="text-gray-600 dark:text-[#D1D5DB]">MongoDB</p>
      </div>
      <div>
        <Sass />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Sass/Scss </p>
      </div>
      <div>
        <Tailwindcss />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Tailwindcss</p>
      </div>
      <div>
        <Figma />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Figma</p>
      </div>
      <div>
        <Cypress color={isDark ? "#fff" : "#000"} />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Cypress</p>
      </div>
      <div>
        <Storybook />
        <p className="text-gray-600 dark:text-[#D1D5DB]">Storybook</p>
      </div>
      <div>
        <Git />
        <p className="text-gray-600 dark:text-[#D1D5DB] ">Git</p>
      </div>
    </div>
  );
};
