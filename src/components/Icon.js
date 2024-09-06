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
    <div className="text-gray-600 md:grid md:grid-cols-8 grid grid-cols-3 md:mt-12 md:ml-28 md:mb-18 gap-x-10 gap-y-10 mx-4 ">
      <div>
        <Javascript />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Javascript</p>
      </div>
      <div>
        <Typescript />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Typescript</p>
      </div>
      <div>
        <React />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">React</p>
      </div>
      <div>
        <Next />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Next.js</p>
      </div>
      <div>
        <Node />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Node.js</p>
      </div>
      <div>
        <Express color={isDark ? "#4B5563" : "#D1D5DB"} />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Express.js</p>
      </div>
      <div>
        <Nest />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Nest.js</p>
      </div>
      <div>
        <Socked color={isDark ? "#000" : "#fff"} />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Socked.io</p>
      </div>
      <div>
        <Git />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">PostgreSQL</p>
      </div>
      <div>
        <Mongo />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">MongoDB</p>
      </div>
      <div>
        <Sass />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Sass/Scss </p>
      </div>
      <div>
        <Tailwindcss />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Tailwindcss</p>
      </div>
      <div>
        <Figma />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Figma</p>
      </div>
      <div>
        <Cypress color={isDark ? "#fff" : "#000"} />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Cypress</p>
      </div>
      <div>
        <Storybook />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24">Storybook</p>
      </div>
      <div>
        <Git />
        <p className="text-gray-600 dark:text-[#D1D5DB] mr-24 ">Git</p>
      </div>
    </div>
  );
};
