import styled from "styled-components"
import bg4 from "../../images/bg4.png"

export const FourFactsWrap = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 2450px;
  background-image: url(${bg4});
  background-position: center;
  background-size: cover;
  padding-top: 140px;
  padding-left: 130px;
  padding-right: 130px;
  padding-bottom: 130px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 98%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 98%);

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Box = styled.div`
  position: relative;
  width: 1180px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Photo = styled.div`
  position: relative;
  width: 580px;
  height: 400px;
  background-color: azure;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TextBox = styled.div`
  position: relative;
  width: 480px;
  height: auto;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const BoxGreenTitle = styled.h5`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  /* Green */

  color: #a9cf3a;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Title = styled.h2`
  width: 100%;
  height: auto;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  margin-bottom: 30px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Paragraph = styled.h2`
  width: 493px;
  /* height: 104px; */
  font-family: "Roboto", sans-serif;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
