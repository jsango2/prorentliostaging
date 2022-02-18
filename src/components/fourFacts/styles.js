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

  @media screen and (max-width: 430px) {
    padding-top: 80px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;

    height: auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
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
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    margin-bottom: 80px;

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`
export const Photo = styled.div`
  position: relative;
  width: 580px;
  height: 400px;
  /* background-color: azure; */
  border-radius: 15px;
  overflow: hidden;
  img {
    object-fit: contain;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 62vw;
    margin-top: 69px;
  }
`
export const TextBox = styled.div`
  position: relative;
  width: 480px;
  height: auto;
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`
export const WrapTitle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  @media screen and (max-width: 430px) {
    width: 100%;
  }
  @media screen and (max-width: 390px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const BlueNumber = styled.div`
  position: relative;
  min-width: 170px;
  width: auto;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  background: linear-gradient(90deg, #0d3151 0%, #1d9ed9 99.98%);
  border-radius: 12px;

  margin-left: 30px;
  /* identical to box height */

  color: #ffffff;

  @media screen and (max-width: 430px) {
    width: auto;
    font-size: 18px;
    margin-left: 20px;
  }
  @media screen and (max-width: 390px) {
    width: auto;
    font-size: 18px;
    margin-left: 0px;
    margin-top: 10px;
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
  /* margin-bottom: 12px; */
  @media screen and (max-width: 490px) {
    margin-left: 5px;
  }
`
export const Title = styled.h2`
  width: 100%;
  height: auto;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
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
    width: 100%;
  }
`
