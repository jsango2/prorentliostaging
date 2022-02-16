import styled from "styled-components"

export const HeroWrap = styled.div`
  position: relative;
  width: 100%;
  height: 760px;
  background-image: url("/images/HeroPhoto.png");
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

export const HeroOverlay = styled.div`
  position: absolute;
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
export const LogoHero = styled.div`
  position: relative;
  top: 68px;
  left: 130px;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

export const HeroTitle = styled.h1`
  position: relative;
  width: 651px;
  height: 195px;
  margin-top: 127px;
  margin-left: 131px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 94px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

export const HeroParagraph = styled.p`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */
  width: 572px;
  height: 170px;
  color: #ffffff;
  margin-left: 131px;
  margin-top: 28px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
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
