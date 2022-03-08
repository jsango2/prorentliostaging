import React, { useState, useEffect, useRef } from "react"
import { WrapClientsSection, Title, Cards } from "./styles.js"
import Murphy from "../../../static/images/murphy.png"
import Wade from "../../../static/images/Wade.png"
import Wilson from "../../../static/images/Wilson.png"
import Card from "./Card.js"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useWindowSize from "../helper/useWindowSize"

const Clients = () => {
  const size = useWindowSize()
  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 6000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
  const [current, setCurrent] = useState(1)

  const handleClick = (e, id) => {
    current === id ? setCurrent(1) : setCurrent(id)
  }
  return (
    <WrapClientsSection>
      <Title>Što naši klijenti kažu o nama?</Title>
      <Cards className="kartica">
        {size.width < 1260 ? (
          <>
            <Slider {...settings}>
              <Card
                title="Excellent experience using Rentlio for our hotel."
                text="They have amazing support, always ready to help. Product is very intuitive and well structured. Rentlio allowed us to make everything automatic"
                avatar={Murphy}
                owner="Kathryn Murphy"
                hotel="Hotel San Rocco"
              />
              <Card
                title="Using Rentlio helped me increase my business!"
                text="The software has given me more free time as it does everything for you. I used to do everything by hand and print out tons of paper, now it is all on the software."
                avatar={Wade}
                owner="Wade Warren"
                hotel="Hotel Bevanda"
              />
              <Card
                title="Super friendly and easy to use system, a lifesaver!"
                text="I cannot imagine doing it on my own. Being very satisfied with Rentlio we didn't look for any other provider. Customer support is super fast, very friendly."
                avatar={Wilson}
                owner="Jenny Wilson"
                hotel="Hotel Peteani"
              />
            </Slider>
          </>
        ) : (
          <>
            {" "}
            <Card
              title="Excellent experience using Rentlio for our hotel."
              text="They have amazing support, always ready to help. Product is very intuitive and well structured. Rentlio allowed us to make everything automatic"
              avatar={Murphy}
              owner="Kathryn Murphy"
              hotel="Hotel San Rocco"
              overlay={current === 0 ? true : false}
              // overlay={false}
              // onClick={e => handleClick(e, 0)}
              onMouseEnter={e => handleClick(e, 0)}
            />
            <Card
              title="Using Rentlio helped me increase my business!"
              text="The software has given me more free time as it does everything for you. I used to do everything by hand and print out tons of paper, now it is all on the software."
              avatar={Wade}
              owner="Wade Warren"
              hotel="Hotel Bevanda"
              // overlay={true}
              overlay={current === 1 ? true : false}
              onMouseEnter={e => handleClick(e, 1)}
            />
            <Card
              title="Super friendly and easy to use system, a lifesaver!"
              text="I cannot imagine doing it on my own. Being very satisfied with Rentlio we didn't look for any other provider. Customer support is super fast, very friendly."
              avatar={Wilson}
              owner="Jenny Wilson"
              hotel="Hotel Peteani"
              // overlay={false}
              overlay={current === 2 ? true : false}
              onMouseEnter={e => handleClick(e, 2)}
            />
          </>
        )}
      </Cards>
    </WrapClientsSection>
  )
}

export default Clients
