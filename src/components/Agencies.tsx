"use client";
import React, { FC } from "react";
import AgenciesData from "~/data/AgenciesData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Agencies: FC = () => {
  SwiperCore.use([Autoplay, Pagination, A11y]);
  const swiper = useSwiper();
  return (
    <section className="overflow-hidden">
      <div className="div_container">
        <h6 className="pb-[10px] text-center text-darkgray">
          Top Digital Marketing Agencies in USA
        </h6>
        <h2 className="text-balack pb-[36px] text-center">
          Ecommerce Inside is a name of excellence, expertise, and
          efficaciousness.
        </h2>
        <p className="pb-[36px] text-center  font-semibold text-darkgray">
          We are a team of experts from marketing and tech domains who master in
          producing the results you're anticipating for.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:hidden md:hidden">
        {AgenciesData.map((agency) => (
          <div className="group relative flex flex-col items-center justify-center border bg-cover bg-center bg-no-repeat" key={agency.id}>
            <img
              src={`/images/${agency.bgIMG}`}
              alt=""
              className="object-cover"
            />
            <img
              src={`/images/${agency.clientIMG}`}
              alt=""
              className="absolute duration-150 group-hover:scale-110"
            />
          </div>
        ))}
      </div>


      
      <div className="agencies_slider w-full hidden sm:block md:block">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          pagination={{ clickable: true }}
          className="agencySlider"
        >
          {AgenciesData.map((agency) => (
            <SwiperSlide key={agency.id}>
              <div className="group relative flex flex-col items-center justify-center border bg-cover bg-center bg-no-repeat">
                <img
                  src={`/images/${agency.bgIMG}`}
                  alt=""
                  className="object-cover"
                />
                <img
                  src={`/images/${agency.clientIMG}`}
                  alt=""
                  className="absolute duration-150 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Agencies;
