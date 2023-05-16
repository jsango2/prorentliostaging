import styled from "styled-components"
import bg from "../../../static/images/HeroPhoto2.png"

export const HeroWrap = styled.div`
  position: relative;
  width: 100%;
  height: 783px;
  background-image: url(${bg});
  background-color: #0a2741;
  background-position: center;
  background-size: cover;
  padding-left: 130px;
  padding-top: 96px;
  /* overflow: hidden; */
  @media screen and (max-width: 1090px) {
    width: 100vw;
    padding-left: 30px;
    /* order: 1;
    margin-bottom: 1rem; */
  }
  @media screen and (max-width: 700px) {
    padding-left: 30px;
    /* order: 1;
    margin-bottom: 1rem; */
  }
  @media screen and (max-width: 560px) {
    height: 923px;

    /* order: 1;
    margin-bottom: 1rem; */
  }
`

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    270deg,
    rgba(13, 49, 81, 0) 2.15%,
    #0d3151 70.73%
  );

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const LogoHero = styled.a`
  position: relative;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

export const HeroTitle = styled.h1`
  position: relative;
  width: 651px;
  height: auto;
  margin-top: 80px;
  margin-bottom: 28px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 94px;
  color: rgb(255, 255, 255);

  @media screen and (max-width: 620px) {
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
    /* or 117% */
    width: 90%;
    color: #ffffff;
    margin-top: 50px;
    margin-bottom: 60px;
  }
`
export const HeroSubTitle = styled.h1`
  position: relative;
  width: 730px;
  height: auto;
  margin-top: 27px;
  margin-bottom: 28px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 63px;
  line-height: 75px;
  color: rgb(255, 255, 255);

  @media screen and (max-width: 620px) {
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 63px;
    width: 90%;
    color: rgb(255, 255, 255);
    margin-top: 50px;
    margin-bottom: 60px;
  }
`

export const HeroParagraph = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */
  max-width: 572px;
  min-width: 430px;
  width: 37vw;
  height: auto;
  color: #ffffff;

  @media screen and (max-width: 430px) {
    font-size: 16px;
    line-height: 24px;
    width: 90%;
    min-width: auto;

    /* or 150% */
  }
`
export const HeroParagraph2 = styled.p`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */
  max-width: 572px;
  min-width: 430px;
  width: 37vw;
  height: auto;
  color: #ffffff;
  margin-top: 30px;
  @media screen and (max-width: 430px) {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    min-width: auto;

    font-weight: bold;
    font-size: 20px;
    /* or 150% */
  }
`
export const GradientBottomLine = styled.div`
  position: absolute;
  width: 101%;
  height: 10px;
  left: 0;
  bottom: 6px;

  /* Rentlio gradient */

  /* background: linear-gradient(
    90deg,
    #a9cf3a 0%,
    #a7cf40 5.15%,
    #a2ce52 12.91%,
    #99cd6f 22.31%,
    #8bcb92 32.97%,
    #78cabb 44.65%,
    #59c9e7 56.32%,
    #1d9ed9 99.98%
  ); */
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
