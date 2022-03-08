import React from "react"
import { WrapBlogCardsSection } from "./styles"
import p1 from "../../../static/images/blogcard1.jpeg"
import p2 from "../../../static/images/blogcard2.jpeg"
import p3 from "../../../static/images/blogcard3.jpeg"
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
      {size.width < 1260 ? (
        <>
          {" "}
          <Slider {...settings}>
            <BlogCard
              photo={p1}
              photoUrl="http://cms.rentl.io/wp-content/uploads/2021/02/annie-spratt-qyAka7W5uMY-unsplash.jpg"
              title="Samo je jedan trend u turizmu – digitalna transformacija"
              link="https://www.rentl.io/1"
            />
            <BlogCard
              photo={p2}
              photoUrl="http://cms.rentl.io/wp-content/uploads/2021/02/fran-hogan-VPci0fN-7t4-unsplash.jpg"
              title="Kada je pravo vrijeme za promjenu PMS-a i channel managera?"
              link="https://www.rentl.io/2"
            />

            <BlogCard
              photo={p3}
              photoUrl="http://cms.rentl.io/wp-content/uploads/2021/07/christopher-gower-m_HRfLhgABo-unsplash-2.jpg"
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
