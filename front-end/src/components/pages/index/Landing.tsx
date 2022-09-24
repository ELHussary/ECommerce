import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/skyblue";

import Capture from "/assets/images/Capture.png";

const Landing = () => {
  const cache: string[] = [];

  function importAll(r: any) {
    r.keys().forEach((key: any) => (cache[key] = r(key)));
  }

  importAll();

  const images = Object.entries(cache).map((module: any) => module[1].default);

  return (
    <>
      <div className="flex justify-between items-center pt-24 container mx-auto p-4 flex-wrap-reverse sm:flex-nowrap">
        <div>
          <p className="font-semibold px-1 mb-2 text-lg">
            Trending collection 🔥
          </p>
          <h1 className="text-5xl font-semibold mb-4 max-w-sm">
            Freshen Up Your Look
          </h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
          <button className="bg-indigo-500 py-3 px-8 rounded-full text-white mb-14">
            Start Shoppingg
          </button>
          <div>
            <Splide
              hasTrack={false}
              options={{ perPage: 5, gap: "1.5rem", arrows: false }}
            >
              <SplideTrack>
                {images.map((image) => (
                  <SplideSlide>
                    <img className="w-20" src={image.src} alt={image} />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
        </div>
        <div>
          <img src={Capture.src} alt="" />w
        </div>
      </div>

      <div className="bg-white container p-4">
        <div className="flex justify-around flex-wrap-reverse sm:flex-nowrap items-center gap-3">
          <div>
            <h1 className="text-5xl max-w-xl leading-snug mb-5">
              Our Product Come from Top Fashion Brand in The World
            </h1>
            <p className="text-gray-500 mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              facilis ullam esse!
            </p>

            <Splide
              hasTrack={false}
              options={{ perPage: 4, gap: "1.5rem", arrows: false }}
            >
              <SplideTrack>
                {images.map((image) => (
                  <SplideSlide>
                    <img className="w-20" src={image.src} alt={image} />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
