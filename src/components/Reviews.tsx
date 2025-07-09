"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const reels = [
  {
    image: "/profile.png",
    review: "Hassan is the GOAT ! thanks for the job !",
    rating: 5,
  },
  {
    image: "/profile.png",
    review: "Fantastic work! Great communicator and works hard to meet all expectations",
    rating: 5,
  },
  {
    image: "/profile.png",
    review: "I have hired Hassan on multiple projects now and he always exceeds my expectations! I am very pleased with his work and I would highly recommend him to everyone, A+ experience and I will be reaching out again for any future projects.. Thank You!!",
    rating: 5,
  },
  {
    image: "/profile.png",
    review: "The second project completed by Hassan - as the first one prior to this - was done exactly how it was agreed upon, and right on time. Again, Hassan is not only quite proficient in the technical domain, but also in communication and customer service. I'm looking forward to start a third project with him. Highly recommended!",
    rating: 5,
  }
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
    <div className="bg-[#1F242D]" id="reviews">
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
                  {/* <Image
                    src={item.image}
                    alt="review"
                    height={150}
                    width={150}
                    className="rounded-full object-cover transition-transform duration-500 hover:scale-110"
                  /> */}
                  <CgProfile size={150} color="#FFFFFF" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-4"  style={{
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}}>
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
