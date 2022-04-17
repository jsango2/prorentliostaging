import React from "react"

import {
  CookieWrapper,
  CookieContent,
  CookieIcon,
  Text,
  CloseButton,
} from "./styles"

const CookieBar = ({ handleSetCookie }) => {
  return (
    <CookieWrapper>
      <CookieContent>
        <Text>
          <CookieIcon />
          <p>
            <span>cookie content </span>
            <a href="www.rentl.io">link</a>
          </p>
        </Text>
        <CloseButton onClick={handleSetCookie}>close</CloseButton>
      </CookieContent>
    </CookieWrapper>
  )
}

export default CookieBar
