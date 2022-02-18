import React from "react"
import { WrapBlogCardsSection } from "./styles"
import p1 from "../../../static/images/blogcard1.png"
import p2 from "../../../static/images/blogcard2.png"
import p3 from "../../../static/images/blogcard3.png"
import BlogCard from "./blogCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useWindowSize from "../helper/useWindowSize"

const BlogCards = () => {
  const size = useWindowSize()
  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 800,
    autoplaySpeed: 6000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // responsive: [
    //   {
    //     breakpoint: 450,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: false,
    //       speed: 500,
    //     },
    //   },
    // ],
  }
  return (
    <WrapBlogCardsSection>
      {size.width < 490 ? (
        <>
          {" "}
          <Slider {...settings}>
            <BlogCard
              photo={p1}
              title="Samo je jedan trend u turizmu – digitalna transformacija"
              link="https://www.rentl.io/1"
            />
            <BlogCard
              photo={p2}
              title="Kada je pravo vrijeme za promjenu PMS-a i channel managera?"
              link="https://www.rentl.io/2"
            />

            <BlogCard
              photo={p3}
              title="Važnost dvosmjerne veze PMS sustava"
              link="https://www.rentl.io/3"
            />
          </Slider>
        </>
      ) : (
        <>
          {" "}
          <BlogCard
            photo={p1}
            title="Samo je jedan trend u turizmu – digitalna transformacija"
            link="https://www.rentl.io/1"
          />
          <BlogCard
            photo={p2}
            title="Kada je pravo vrijeme za promjenu PMS-a i channel managera?"
            link="https://www.rentl.io/2"
          />
          <BlogCard
            photo={p3}
            title="Važnost dvosmjerne veze PMS sustava"
            link="https://www.rentl.io/3"
          />
        </>
      )}
    </WrapBlogCardsSection>
  )
}

export default BlogCards
