const AboutSection = () => {
  return (
    <section class="overflow-hidden bg-gray-50 pt-10 sm:pt-16 md:pt-0 2xl:pt-16 dark:bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Hello, I am Dr. Maryann
            </h2>
            <p class="mt-3 max-w-lg text-xl leading-relaxed text-gray-600 md:mt-8 dark:text-gray-300">
            As a passionate specialist in aesthetic medicine, I’ve dedicated my career to helping individuals feel confident in their own skin. At Revolve Beauty, we combine advanced techniques with a personalized approach to bring out your natural beauty. 
            </p>

            <p class="mt-4 text-xl text-gray-600 md:mt-8 dark:text-gray-300">
              <span class="relative inline-block">
                <span class="absolute bottom-0.5 inline-block h-2 w-full bg-yellow-300 dark:bg-gray-900"></span>
                <span class="relative"> Have a question? </span>
              </span>
              <a
                href="#"
                title=""
                class="text-sky-500 transition-all duration-200 hover:text-sky-600 hover:underline dark:text-sky-400 dark:hover:text-sky-500"
              >
                {" "}
                Contact me
              </a>
            </p>
          </div>

          <div class="relative">
            <img
              class="absolute inset-x-0 bottom-0 left-1/2 -mb-48 -translate-x-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <img
              class="relative w-full xl:mx-auto xl:max-w-lg 2xl:origin-bottom 2xl:scale-110"
              src="asd.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
