import React, { useState } from "react"
// import "../styles/components/GoogleAdwordsServices.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GoogleAdwordsimg1 from "../assets/GoogleAdwordsimg1.svg"
import GoogleAdwordsimg2 from "../assets/GoogleAdwordsimg2.svg"

const slides = [
  {
    img: GoogleAdwordsimg1,
    title: "Competitor\nCampaign Analysis",
    description:
      "Our expert team knows how you can get the best results from your Google Adword campaigns. We offer a detailed competitor analysis to know where your competitor stands in Google rankings. Hence, accordingly, we formulate the best Google Adword campaign to get the highest ROI.",
  },
  {
    img: GoogleAdwordsimg2,
    title: "Landing Page\nCreation",
    description:
      "Our expert team understands that only investing in Google Adwords is not enough to ensure conversions. Hence, we provide unique and out of the box landing page and advertisement services to increase the conversion rate.",
  },
  {
    img: GoogleAdwordsimg2,
    title: "Landing Page\nCreation",
    description:
      "Our expert team understands that only investing in Google Adwords is not enough to ensure conversions. Hence, we provide unique and out of the box landing page and advertisement services to increase the conversion rate.",
  },
  {
    img: GoogleAdwordsimg2,
    title: "Landing Page\nCreation",
    description:
      "Our expert team understands that only investing in Google Adwords is not enough to ensure conversions. Hence, we provide unique and out of the box landing page and advertisement services to increase the conversion rate.",
  },
  
  // Add more cards here if needed
];

export default function GoogleAdwordsServices() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesPerPage = 2;
  const totalPages = Math.ceil(slides.length / slidesPerPage);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleSlides = slides.slice(
    currentSlide * slidesPerPage,
    currentSlide * slidesPerPage + slidesPerPage
  );
  return (
  <div className="google_adwords flex justify-center items-center p-4 sm:p-6">
  <div className="google_words w-full max-w-[1620px] h-auto bg-[#F5F7FB] rounded-[15px] p-4 sm:p-6 md:p-12 lg:p-20 relative">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left side content */}
      <div className="flex flex-col justify-center">
        <h2 className="w-full md:max-w-[600px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-extrabold font-Montserrat text-black mb-4 lg:mb-6 leading-snug lg:leading-tight">
          The Services we offer
          <br className="hidden lg:block" />
          under Google
          <br className="hidden lg:block" />
          Adwords
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-Montserrat text-black max-w-2xl">
          We all know that the internet is flooded with millions of websites. Hence, getting your website to be
          noticed among this huge crowd is a challenging task. But nothing is impossible. With the help from our
          Google Adword experts, you can achieve the desired traffic to your website and improve its visibility. Our
          team will assist you in creating result-oriented Google Adword campaigns that will take your business to
          the next level.
        </p>
      </div>

      {/* Right side content - Dynamic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {visibleSlides.map((slide, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <img src={slide.img} alt="Google Adwords" width="54" height="40" />
            </div>
            <h3 className="text-xl sm:text-2xl font-Montserrat text-black font-semibold mb-2 whitespace-pre-line">
              {slide.title}
            </h3>
            <p className="text-sm sm:text-base font-Montserrat text-black">
              {slide.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Navigation Arrows */}
    <div className="navv-arrows mt-6 md:mt-0 md:absolute md:bottom-8 lg:bottom-6 right-4 lg:right-12 flex gap-2 justify-center lg:justify-end">
      <button
        onClick={handlePrev}
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
      >
        <FaArrowLeft size={10} className="text-black w-6 h-4 sm:w-8" />
      </button>
      <button
        onClick={handleNext}
        className="w-10 h-10 rounded-full bg-[#157B6C] flex items-center justify-center shadow-sm"
      >
        <FaArrowRight size={10} className="text-white w-6 h-4 sm:w-8" />
      </button>
    </div>
  </div>
</div>

  )
}

