export default function HeroSection() {
  return (
    <section className="relative bg-white flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-20 py-12">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-right lg:pr-20">
        <h2 className="text-pink-500 text-sm uppercase font-semibold mb-2">
          Beauty Salon
        </h2>
        <h1 className="text-gray-900 text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Glow Your Face & Vitality <br />
          With Our Best Service
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="size-5 inline fill-pink-200"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              clip-rule="evenodd"
            />
          </svg>
          Facials and skin care treatments, hair-cutting. <br />
          waxing and other forms of hair removal, nail treatments. <br />
          and complementary care such as aromatherapy and massages.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <button className="bg-pink-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition">
            Book Appointment
          </button>
          <button className="bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
            Know Our Services
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex">
        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
          <img
            src="google.png"
            alt="Beauty Salon"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
