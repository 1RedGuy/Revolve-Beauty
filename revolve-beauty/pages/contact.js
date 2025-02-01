import ContactFooter from "../components/sections/ContactSections/ContactFooter";
import Header from "../components/Header";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

export default function ContactForm() {
  const { isClient } = useLanguage();
  const { t } = useTranslation();

  const renderContent = (key) => {
    if (!isClient) {
      const defaultValues = {
        'contact.getInTouch': 'Get In Touch',
        'contact.inquiry': 'Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.',
        'contact.form.name': 'Full Name',
        'contact.form.phone': 'Phone No.',
        'contact.form.email': 'Email',
        'contact.form.message': 'Write Message',
        'contact.form.submit': 'Send Message',
        'contact.email.title': 'Email us:',
        'contact.email.description': 'Email us for general queries, including marketing and partnership opportunities.',
        'contact.call.title': 'Call us:',
        'contact.call.description': 'Call us to speak to a member of our team. We are always happy to help.',
        'contact.location.title': 'Location',
        'contact.location.description': 'Feel free to stop by and visit us at our location. We look forward to welcoming you!'
      };
      return defaultValues[key];
    }
    return t(key);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xnnjvzal", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        e.target.reset();
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert(
        "There was an issue with the submission. Please check your connection and try again.",
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="mx-auto mt-10 grid max-w-6xl items-start gap-16 rounded-3xl bg-white p-8 font-[sans-serif] shadow-[0_2px_10px_-3px_rgba(253,131,208,0.7)] md:grid-cols-2">
        {/* Form Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">
            {renderContent('contact.getInTouch')}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            {renderContent('contact.inquiry')}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mt-8 space-y-4">
              <input
                type="text"
                name="name"
                placeholder={renderContent('contact.form.name')}
                required
                className="w-full border-b border-gray-300 bg-white px-2 py-3 text-sm text-gray-800 outline-none focus:border-studio_pink"
              />
              <input
                type="number"
                name="phone"
                placeholder={renderContent('contact.form.phone')}
                required
                className="w-full border-b border-gray-300 bg-white px-2 py-3 text-sm text-gray-800 outline-none focus:border-studio_pink"
              />
              <input
                type="email"
                name="email"
                placeholder={renderContent('contact.form.email')}
                required
                className="w-full border-b border-gray-300 bg-white px-2 py-3 text-sm text-gray-800 outline-none focus:border-studio_pink"
              />
              <textarea
                name="message"
                placeholder={renderContent('contact.form.message')}
                required
                className="w-full border-b border-gray-300 bg-white px-2 pt-3 text-sm text-gray-800 outline-none focus:border-studio_pink"
              />
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center rounded-md bg-studio_pink px-6 py-3 text-sm text-white hover:bg-opacity-85"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              {renderContent('contact.form.submit')}
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="relative h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.83680769475!2d23.336879111308573!3d42.65710877104659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8439aa06c4c9%3A0xa5da18b56993a130!2sStudentski%20Kompleks%2C%20ulitsa%20%22Professor%20Georgi%20Zlatarski%22%203%2C%201700%20Sofia!5e1!3m2!1sen!2sbg!4v1732539479669!5m2!1sen!2sbg"
            className="left-0 top-0 h-full w-full rounded-md"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Contact Options Below */}
      <div className="mx-auto mt-14 grid md:grid-cols-3">
        <div className="-mr-4 rounded-md p-6 text-center lg:ml-28">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-gray-300">
            <svg
              height="24"
              width="24"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
            >
              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-black">
            {renderContent('contact.email.title')}
          </h3>
          <p className="mt-2 text-lg text-gray-500">
            {renderContent('contact.email.description')}
          </p>
          <a
            href="mailto:hello@flowbite.com"
            className="mt-4 block text-studio_pink"
          >
            maryanngelia64@gmail.com
          </a>
        </div>

        <div className="rounded-md p-6 text-center lg:mx-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 w-6 text-gray-800"
            >
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-black">
            {renderContent('contact.call.title')}
          </h3>
          <p className="mt-2 text-lg text-gray-500">
            {renderContent('contact.call.description')}
          </p>
          <a href="tel:+16467865060" className="mt-4 block text-studio_pink">
            +359877183323
          </a>
        </div>

        <div className="ounded-md -ml-4 p-6 text-center lg:mr-28">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              viewBox="0 0 48 48"
              className="h-8 w-8 text-gray-800"
            >
              <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-black">
            {renderContent('contact.location.title')}
          </h3>
          <p className="mt-2 text-lg text-gray-500">
            {renderContent('contact.location.description')}
          </p>
          <a href="/support" className="mt-4 block text-studio_pink">
            3 Prof. Georgi Zlatarski St., Sofia, Bulgaria.
          </a>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}
