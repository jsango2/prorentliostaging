import styled from "styled-components"
import photo from "../../../static/images/formbottom.png"

export const WrapFormBottom = styled.div`
  position: relative;

  width: 100%;
  height: 800px;

  display: flex;
  overflow: hidden;
  @media screen and (max-width: 860px) {
    width: 100vw;
    height: auto;
    flex-direction: column;
  }
`
export const TextBox = styled.div`
  padding: 170px 60px 250px 130px;
  position: relative;
  background: linear-gradient(180deg, #124572 0%, #0d3151 92.62%);
  width: 50%;
  height: 100%;

  @media screen and (max-width: 860px) {
    padding: 80px 30px;

    width: 100%;
    height: auto;
  }
`
export const FormBox = styled.div`
  position: relative;
  background-image: url(${photo});
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 860px) {
    width: 100%;
    height: 625px;
  }
`
export const TwoFacts = styled.div`
  height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 60px;
  @media screen and (max-width: 768px) {
    height: 262px;

    margin-bottom: 0px;
  }
`
export const Fact = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const Title = styled.h1`
  width: 85%;
  font-family: "Roboto", sans-serif;

  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 90px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    width: 100%;

    text-align: center;
    font-size: 37px;
    line-height: 49px;
    margin: 0 auto 60px auto;
  }
`
export const IspuniPodatke = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 125% */

  color: #ffffff;
  @media screen and (max-width: 768px) {
  }
`
