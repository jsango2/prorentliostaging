import styled from "styled-components"
import photo from "../../../public/images/formbottom.png"

export const WrapFormBottom = styled.div`
  position: relative;

  width: 100%;
  height: 800px;

  display: flex;
  @media screen and (max-width: 430px) {
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

  @media screen and (max-width: 430px) {
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
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 625px;
  }
`
export const ThreeFacts = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
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
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 59px;
  margin-bottom: 90px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 45px;
  }
`
