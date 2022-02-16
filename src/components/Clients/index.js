import React, { useState, useEffect } from "react"
import { WrapClientsSection, Title, Cards } from "./styles.js"
import Murphy from "../../../public/images/murphy.png"
import Wade from "../../../public/images/Wade.png"
import Wilson from "../../../public/images/Wilson.png"
import Card from "./Card.js"
const Clients = () => {
  const [current, setCurrent] = useState(1)

  const handleClick = (e, id) => {
    current === id ? setCurrent(1) : setCurrent(id)
    console.log("klinuto", id)
  }
  return (
    <WrapClientsSection>
      <Title>Što naši klijenti kažu o nama?</Title>
      <Cards>
        <Card
          title="Excellent experience using Rentlio for our hotel."
          text="They have amazing support, always ready to help. Product is very intuitive and well structured. Rentlio allowed us to make everything automatic"
          avatar={Murphy}
          owner="Kathryn Murphy"
          hotel="Hotel San Rocco"
          overlay={current == 0 ? true : false}
          onClick={e => handleClick(e, 0)}
        />
        <Card
          title="Using Rentlio helped me increase my business!"
          text="The software has given me more free time as it does everything for you. I used to do everything by hand and print out tons of paper, now it is all on the software."
          avatar={Wade}
          owner="Wade Warren"
          hotel="Hotel Bevanda"
          overlay={current == 1 ? true : false}
          onClick={e => handleClick(e, 1)}
        />
        <Card
          title="Super friendly and easy to use system, a lifesaver!"
          text="I cannot imagine doing it on my own. Being very satisfied with Rentlio we didn't look for any other provider. Customer support is super fast, very friendly."
          avatar={Wilson}
          owner="Jenny Wilson"
          hotel="Hotel Peteani"
          overlay={current == 2 ? true : false}
          onClick={e => handleClick(e, 2)}
        />
      </Cards>
    </WrapClientsSection>
  )
}

export default Clients
