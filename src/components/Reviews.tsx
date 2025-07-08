"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import { FaStar, FaRegStar } from 'react-icons/fa';

const reels = [
  {
    image: "/profile.png",
    review: "Inspirational designs, illustrations, and graphic elements from the world's best designers.",
    rating: 4,
  },
  {
    image: "/profile.png",
    review: "Excellent service and creative output. Highly recommended for quality design solutions.",
    rating: 5,
  },
  {
    image: "/profile.png",
    review: "Very professional and fast response. Great collaboration experience.",
    rating: 3,
  },
  {
    image: "/profile.png",
    review: "Outstanding work with attention to detail. Will work again.",
    rating: 5,
  },
  {
    image: "/profile.png",
    review: "Good creativity but needs to improve communication slightly.",
    rating: 3,
  },
  {
    image: "/profile.png",
    review: "Reliable and talented designer delivering on time.",
    rating: 4,
  },
];

export default function ReelsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
centerMode: true,
centerPadding: '0px', // or '20px', '5%', etc.
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#1F242D]">
      <div className="max-w-7xl text-center mx-auto px-4 py-20">
        <h2 className="text-white text-lg font-semibold mb-8">
          My <span className="text-[#00c2f3]">Services</span>
        </h2>

        <div className="px-2">
          <Slider {...settings}>
            {reels.map((item, index) => (
              <div
                key={index}
                className="h-[450px] bg-[#323946] rounded-[10px]  transition-transform "
              >
                <div className="relative h-56 flex justify-center items-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt="review"
                    height={150}
                    width={150}
                    className="rounded-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-4">
                    {item.review}
                  </h3>
                  <div className="flex justify-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) =>
                      i < item.rating ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
