// components/Banner.js
import React from "react";
import { Button, Carousel, Image } from "antd";

const Banner = () => {
  return (
    <div className=" text-white relative mb-6">
      <Carousel autoplay>
        <div>
          <Image
            src="https://cdn.originpc.com/img/home/slides/2023/rts-5000x-7000x-3.jpg"
            alt="Banner 1"
            className="w-full h-auto "
          />
        </div>
        <div>
          <Image
            src="https://cdn.originpc.com/img/home/slides/2023/new-eon14-s.jpg"
            alt="Banner 2"
            className="w-full h-auto"
          />
        </div>
        <div>
          <Image
            src="https://cdn.originpc.com/img/home/slides/2023/amd-ryzen-7000-series-3d.jpg"
            alt="Banner 3"
            className="w-full h-auto"
          />
        </div>
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full flex items-center pl-8">
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Welcome to PC Builder Website
          </h1>
          <p className="text-xl">Build Your Dream PC with Ease</p>
          <button className="text-white bg-red-600 border-0 px-5 py-3 tracking-wider mt-3 hover:bg-red-700 duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
