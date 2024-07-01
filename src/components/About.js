export const About = ({ toggleDarkMode }) => {
  return (
    <div className="bg-gray-50 dark:bg-[#111827] ">
      <div className="">
        <div className="text-center pt-40 ">
          <button className=" text-gray-600 dark:text-[#D1D5DB] bg-gray-200 dark:bg-[#374151] px-8 py-1 rounded-xl">
            About me
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-12 mt-12 ">
          <div className=" h-fit w-fit bg-gray-200 dark:bg-[#374151] relative top-8 right-6">
            <div className="relative bottom-8 left-6">
              <img
                src="/tom2.jpg"
                width={400}
                height={480}
                className="dark:border-[#111827] border-8"
              />
            </div>
          </div>

          <div>
            <h1 className="text-gray-900 dark:text-[#F9FAFB] text-3xl font-semibold mx-4">
              Curious about me? Here you have it:
            </h1>
            <p className="mt-4 text-base text-gray-600 dark:text-[#D1D5DB] mx-4">
              I'm a designer turned full stack developer, passionate about
              React.js and <br /> Node.js. I excel in blending technical and
              visual aspects to craft exceptional <br /> digital products,
              prioritizing user experience, precise design, and optimized <br />{" "}
              code.
            </p>
            <p className="mt-4 text-base text-gray-600 dark:text-[#D1D5DB] mx-4">
              Since starting my web development journey in 2015, I've embraced{" "}
              <br />
              challenges and kept up with the latest tech trends. Now in my
              early thirties,
              <br /> seven years in, I'm building cutting-edge web apps using
              Next.js, TypeScript,
              <br /> Nestjs, Tailwindcss, Supabase, and more.
            </p>
            <p className="mt-4 text-base text-gray-600 dark:text-[#D1D5DB] mx-4">
              With a progressive mindset, I enjoy the entire product development
              process,
              <br /> from ideation to execution. Off duty, you'll find me on
              Twitter, tracking <br /> startup journeys, or unwinding. Follow me
              for tech insights and public <br /> project updates on Twitter or
              GitHub.
            </p>
            <p className="mt-4 text-base text-gray-600 dark:text-[#D1D5DB] mx-4">
              Finally, some quick bits about me.
            </p>
            <div className="flex gap-8 mt-4 text-base text-gray-600 dark:text-[#D1D5DB] mx-4">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
            </div>
            <li className="mt-4 text-base text-gray-600 dark:text-[#D1D5DB] mx-4">
              Full time freelancer
            </li>
            <p className="mt-4 mb-40 text-base text-gray-600 dark:text-[#D1D5DB] mx-4">
              One last thing, I'm available for freelance work, so feel free to
              reach out and <br /> say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
