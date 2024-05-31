import React, { useState } from 'react';

const testimonials = [
  {
    text: "This API has accelerated our data processing and analysis. The ease of data integration, which enables us to provide more personalized services to our customers, is invaluable. It has made a significant contribution to our company's data-driven strategy.",
    author: "Robert Fox",
    position: "Founder & CEO"
  },
  {
    text: "The integration process was seamless, and the support team was extremely responsive. Our team is now able to focus on core tasks without worrying about data inconsistencies.",
    author: "Jane Doe",
    position: "CTO"
  },
  {
    text: "We've seen a dramatic improvement in our workflow since integrating this solution. It's user-friendly and highly effective.",
    author: "John Smith",
    position: "COO"
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='flex justify-between items-center w-full max-w-screen-lg bg-opacity-0 p-1 rounded px-10'>
        <div className="relative w-full py-10 bg-gray-900 text-white">
      <h2 className="text-center text-4xl font-bold mb-6">Discover what our customers </h2>
      <h2 className='text-center text-4xl font-bold mb-6'>have to say about our SaaS solution</h2>
      <p className='text-center'>Explore the testimonials and feedback from our valued customers to gain insights into their</p>
      <p className='text-center'>experiences and satisfaction with our SaaS solution.</p>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
          >
            <div className="flex justify-center items-center h-full">
              <div className="w-80 bg-gray-800 rounded-lg p-6">
                <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-700 rounded-full"></div>
                  <div className="ml-4">
                    <p className="text-base font-semibold">{testimonial.author}</p>
                    <p className="text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevTestimonial}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextTestimonial}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
