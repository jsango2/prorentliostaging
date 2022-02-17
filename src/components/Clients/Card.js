import React, { useState, useEffect } from "react"
import {
  CardWrap,
  CardTitle,
  CardText,
  Avatar,
  Owner,
  Hotel,
  Stars,
  CardOverlay,
} from "./styles.js"
import stars from "../../../static/images/5stars.svg"

const Card = ({ title, text, avatar, owner, hotel, overlay, onClick }) => {
  return (
    <CardWrap onClick={onClick}>
      <CardTitle>"{title}"</CardTitle>
      <Stars>
        <img src={stars} alt="stars" />
      </Stars>
      <CardText>{text}</CardText>
      <Avatar>
        {" "}
        <img src={avatar} alt="avatar" width="80px" />
      </Avatar>
      <Owner>{owner}</Owner>
      <Hotel>{hotel}</Hotel>
      {overlay && <CardOverlay />}
    </CardWrap>
  )
}

export default Card
