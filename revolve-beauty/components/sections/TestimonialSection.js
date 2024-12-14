import React from 'react';

const TestimonialSection = () => {
    return (
        <section className="py-12 bg-gradient-to-l from-studio_pink/25 to-transparent sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-xl font-medium text-gray-600"> Many Customers gave their <span className="text-pink-400 italic">Feedback</span> </p>
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">We care about our customer's <span className="text-pink-400 italic">experience</span></h2>
                </div>

                <div className="mt-8 text-center md:mt-16">
                    <a href="#" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600">
                        Check all of our reviews
                    </a>
                </div>

                <div className="relative mt-10 md:mt-24">
                    <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                        <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
                    </div>

                    <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                        {/* Testimonial 1 */}
                        <div className="flex flex-col overflow-hidden shadow-xl bg-white rounded-lg">
                            <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.181 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-lg font-medium text-gray-900">
                                        "Amazing service, highly recommend to everyone looking for reliable and excellent quality."
                                    </p>
                                    <p className="mt-6 text-base font-medium text-gray-600">John Doe</p>
                                    <p className="text-base font-medium text-gray-400">CEO, Rareblocks</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex flex-col overflow-hidden shadow-xl bg-white rounded-lg">
                            <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.181 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-lg font-medium text-gray-900">
                                        "A fantastic experience. Their team went above and beyond to ensure our needs were met."
                                    </p>
                                    <p className="mt-6 text-base font-medium text-gray-600">Jane Smith</p>
                                    <p className="text-base font-medium text-gray-400">Product Manager, Rareblocks</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="flex flex-col overflow-hidden shadow-xl bg-white rounded-lg">
                            <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.181 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-lg font-medium text-gray-900">
                                        "Rareblocks helped us scale our business to new heights. Their attention to detail is unmatched."
                                    </p>
                                    <p className="mt-6 text-base font-medium text-gray-600">Sam Wilson</p>
                                    <p className="text-base font-medium text-gray-400">Marketing Director, Rareblocks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;