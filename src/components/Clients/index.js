import React, { useState } from "react"
import { WrapClientsSection, Title, Cards } from "./styles.js"
import Kosir from "../../../static/images/fotoGuy.png"
import Zovko from "../../../static/images/Zovko.png"
import Auero from "../../../static/images/Auero.png"

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
                title="Mi smo u hotelu promijenili tri ili četiri rezervacijska sustava."
                text="Rentlio cloud rješenje napravilo je ne samo dodatne prednosti kroz to da ne moramo toliko vremena trošiti po rezervaciji, do toga gdje mi ne trošimo previše resursa za edukaciju novih zaposlenika."
                avatar={Kosir}
                owner="Jozo Kosir"
                hotel="Hotel Jarun"
              />
              <Card
                title="Mi kao lideri smo odlučili koristiti hrvatskog lidera."
                text="Od samog početka poslovanja smo sve bazirali online i digitalno, te od starta pratimo Rentlio. Zadnjih deset godina smo koristili svjetske providere što PMS-a što channel manager-a i odlučili smo se za hrvatskog lidera."
                avatar={Zovko}
                owner="Tomislav Zovko"
                hotel="Irundo"
              />
              <Card
                title="Praktičnost, intuitivnost, podrška, preglednost."
                text="Live chat u praksi funkcionira odlično te se kvalitetan savjet i rješenje dobije u realnom vremenu. Produktivnost se povećala zbog uštede vremena pri korištenju Rentlija - automatski unos podataka o gostu je izvanredan primjer."
                avatar={Auero}
                owner="Kristian Auer"
                hotel="Vila Nepos Hotel"
              />
            </Slider>
          </>
        ) : (
          <>
            {" "}
            <Card
              title="Mi smo u hotelu promijenili tri ili četiri rezervacijska sustava."
              text="Rentlio cloud rješenje napravilo je ne samo dodatne prednosti kroz to da ne moramo toliko vremena trošiti po rezervaciji, do toga gdje mi ne trošimo previše resursa za edukaciju novih zaposlenika."
              avatar={Kosir}
              owner="Jozo Kosir"
              hotel="Hotel Jarun"
              overlay={current === 0 ? true : false}
              // overlay={false}
              // onClick={e => handleClick(e, 0)}
              onMouseEnter={e => handleClick(e, 0)}
            />
            <Card
              title="Mi kao lideri smo odlučili koristiti hrvatskog lidera."
              text="Od samog početka poslovanja smo sve bazirali online i digitalno, te od starta pratimo Rentlio. Zadnjih deset godina smo koristili svjetske providere što PMS-a što channel manager-a i odlučili smo se za hrvatskog lidera."
              avatar={Zovko}
              owner="Tomislav Zovko"
              hotel="Irundo"
              // overlay={true}
              overlay={current === 1 ? true : false}
              onMouseEnter={e => handleClick(e, 1)}
            />
            <Card
              title="Praktičnost, intuitivnost, podrška, preglednost."
              text="Live chat u praksi funkcionira odlično te se kvalitetan savjet i rješenje dobije u realnom vremenu. Produktivnost se povećala zbog uštede vremena pri korištenju Rentlija - automatski unos podataka o gostu je izvanredan primjer."
              avatar={Auero}
              owner="Kristian Auer"
              hotel="Vila Nepos Hotel"
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
