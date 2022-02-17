import React from "react"
import {
  WrapFooterSection,
  FirstRow,
  Logos,
  Text,
  Line,
  Wrap,
  FollowUs,
  WrapSocial,
} from "./styles"
import facebook from "../../../public/images/Facebook.svg"
import Instagram from "../../../public/images/Instagram.svg"
import Youtube from "../../../public/images/Youtube.svg"
import Twitter from "../../../public/images/Twitter.svg"
import Linkedin from "../../../public/images/Linkedin@2x.svg"
import captera from "../../../public/images/captera.png"
import booking from "../../../public/images/bookingcom.svg"
import pref from "../../../public/images/prefcust.svg"
import expedia from "../../../public/images/expedia.svg"

const Footer = () => {
  return (
    <WrapFooterSection>
      <FirstRow>
        <Wrap>
          <Text href="https://rentl.io/izjava-o-privatnosti" target="_blank">
            Privacy Policy
          </Text>
          <Line />
          <Text href="https://rentl.io/uvjeti" target="_blank">
            Terms and Conditions
          </Text>
        </Wrap>
        <Wrap>
          <FollowUs>Follow us on</FollowUs>
          <WrapSocial>
            <a href="https://www.facebook.com/rentlio" target="_blank">
              <img
                src={facebook}
                alt="social facebook"
                style={{ margin: "0 15px" }}
              />
            </a>
            <a href="https://www.instagram.com/rentlio" target="_blank">
              <img
                src={Instagram}
                alt="social instagram"
                style={{ margin: "0 15px" }}
              />
            </a>
            <a href="https://twitter.com/rentlio" target="_blank">
              <img
                src={Twitter}
                alt="social twitter"
                style={{ margin: "0 15px" }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCxe9C197-bFD13nY86XbrEA"
              target="_blank"
            >
              <img
                src={Youtube}
                alt="social Youtube"
                style={{ margin: "0 15px" }}
              />
            </a>
            <a href="https://hr.linkedin.com/company/rentlio" target="_blank">
              <img
                src={Linkedin}
                alt="social Linkedin"
                style={{ margin: "0 15px" }}
              />
            </a>
          </WrapSocial>
        </Wrap>
      </FirstRow>
      <Logos>
        <a href="https://www.booking.com" target="_blank">
          <img src={booking} alt="booking.com" />
        </a>
        <a href="https://www.airbnb.com" target="_blank">
          <img src={pref} alt="preffered customer" />{" "}
        </a>
        <a href="https://www.expedia.com" target="_blank">
          <img src={expedia} alt="espedia.com" />{" "}
        </a>
        <a href="https://www.capterra.com" target="_blank">
          <img src={captera} alt="captera.com" width={110} />
        </a>
      </Logos>
    </WrapFooterSection>
  )
}

export default Footer
