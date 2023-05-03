import React from "react";
import { banner } from "../../assests/data/data";

const Banner = () => {
  return (
    <>
      <section className="lg:pt-14">
        <div className="grid grid-cols-2 mx-20 gap-10">
          {banner.map((items) => (
            <div className="post" key={items.id}>
              <div className="relative">
                <div className="img">
                  <img src={items.cover} alt="" />
                </div>
                <div className="absolute top-0 left-0 pt-5 pl-5 w-[100%] h-[100%] text-xl font-semibold text-gray-100 leading-8 tracking-widest">
                  <h2 className="">{items.title1}</h2>
                  <h2 className="">{items.title2}</h2>
                  <p className="text-sm font-normal text-gray-200 pt-4">{items.desc}</p>
                  <button className="text-xs bg-red-400 hover:bg-red-500 mt-6 px-7 py-2 rounded-2xl">SHOP NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;
