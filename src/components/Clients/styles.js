import styled from "styled-components"

export const WrapClientsSection = styled.div`
  position: relative;

  width: 100%;
  height: 789px;
  padding-top: 60px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
  /* overflow: hidden; */
  @media screen and (max-width: 490px) {
    width: 100vw;

    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Cards = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 90%;
  justify-content: space-around;
  margin: 150px auto 0 auto;
  & .slick-dots {
    position: absolute;
    bottom: 15px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  & .slick-dots li button:before {
    font-size: 16px;
  }
  & .slick-dots li.slick-active button:before {
    color: #1d9ed9;
  }
  @media screen and (max-width: 1260px) {
    margin: 80px auto 0 auto;

    flex-direction: column;
    -webkit-box-orient: vertical;
  }
`
export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  /* identical to box height, or 125% */

  /* Blue */

  color: #0d3151;
  @media screen and (max-width: 430px) {
    margin: 0 auto;
    font-size: 40px;
    line-height: 50px;
    width: 90%;
  }
`
export const CardTitle = styled.h1`
  position: relative;
  z-index: 2;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  /* or 150% */

  text-align: center;

  /* Blue */
  margin-bottom: 20px;
  color: #0d3151;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const CardText = styled.p`
  position: relative;
  z-index: 2;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  text-align: center;

  /* Blue */
  margin-bottom: 40px;
  color: #0d3151;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const CardWrap = styled.div`
  position: relative;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  align-items: center;
  width: 360px;
  height: 502px;
  cursor: pointer;
  margin: 0 auto;
  @media screen and (max-width: 490px) {
    width: 95%;

    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Stars = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Avatar = styled.div`
  position: relative;
  z-index: 2;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Hotel = styled.p`
  position: relative;
  z-index: 2;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  text-align: center;

  /* Gray02 */

  color: #706f6f;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Owner = styled.h4`
  position: relative;
  z-index: 2;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Blue */

  color: #0d3151;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const CardOverlay = styled.div`
  position: absolute;
  z-index: 1;
  top: -62px;
  width: 410px;
  height: 600px;
  background: #ffffff;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
