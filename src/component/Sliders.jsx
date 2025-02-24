import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import giwon from "../assets/images/bots/giwon.png";
import rimon from "../assets/images/bots/rimon.png";
import zillion from "../assets/images/bots/zillion.png";

const images = [giwon, rimon, zillion];

const Sliders = () => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Auto-slide speed (ms)
    arrows: false // Show next/prev arrows
  };

  return (
    <div className="w-full   my-10">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full  h-68 rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
