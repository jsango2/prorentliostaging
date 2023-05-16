import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  UserLogosWrap,
  SanRocco,
  Martinis,
  Bevanda,
  Prijeko,
  Verdi,
  Cittar,
  Palace,
  Republika,
  Scalini,
  Puntjar,
  Jarun,
  Vista,
} from "./styles.js"

const settings = {
  // dots: false,
  // infinite: true,
  // slidesToShow: 2,
  // slidesToScroll: 1,
  // autoplay: true,
  // speed: 2000,
  // autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  cssEase: "cubic-bezier(.43,.39,.33,.94)",
  className: "testimonialSlider",
  speed: 1500,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "cubic-bezier(.43,.39,.33,.94)",
        className: "testimonialSlider",
        speed: 1500,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        rows: 2,
        slidesPerRow: 2,
        cssEase: "cubic-bezier(.43,.39,.33,.94)",
        className: "testimonialSlider",
        speed: 1500,
      },
    },
  ],
}

const UserLogos = () => {
  return (
    <UserLogosWrap>
      <Slider {...settings}>
        <SanRocco />
        <Martinis />
        <Bevanda />
        <Prijeko />
        <Verdi />
        <Cittar />
        <Palace />
        <Republika />
        <Scalini />
        <Puntjar />
        <Jarun />
        <Vista />
      </Slider>
    </UserLogosWrap>
  )
}

export default UserLogos
