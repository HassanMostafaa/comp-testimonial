"use client";
import React, { type FunctionComponent } from "react";
import styles from "./styles/Testimonials.module.css";
import { TestimonialCard } from "../testimonial-card/TestimonialCard";
import { ArrowRight } from "@/icons/ArrowRight";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Testimonials: FunctionComponent = () => {
  const slides = [1, 2, 3, 4];
  const navigationStyles: StyleSheet | any = {
    "--swiper-pagination-color": "#333",
  };

  const navButtons = {
    border: 0,
    outline: 0,
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop
        style={navigationStyles}
        pagination={{ clickable: true, el: ".custom_pagination" }}
        modules={[Navigation, Pagination]}
      >
        {slides &&
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                title={`TERRY IVANS ${slide}`}
                role={"Project manager"}
              />
            </SwiperSlide>
          ))}
        <div className="custom_pagination" />
        <div className={styles.spacer} />
        <button style={navButtons} className="prev">
          <ArrowLeft color="#333" />
        </button>
        <button style={navButtons} className="next">
          <ArrowRight color="#333" />
        </button>
      </Swiper>
    </div>
  );
};
