import styled from "styled-components"

export const FormWrap = styled.div`
  position: absolute;
  width: 480px;
  height: 668px;
  background: #ffffff;
  /* Gray04 */
  overflow: hidden;
  top: 510px;
  right: 130px;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  z-index: 2;
  @media screen and (max-width: 1150px) {
    max-width: 480px;
    width: 95%;
    top: 732px;
    right: 50%;
    transform: translate(50%, 0);
  }
  @media screen and (max-width: 430px) {
    width: 95%;
    top: 732px;
    right: 50%;
    transform: translate(50%, 0);
  }
`

export const FormBehind = styled.div`
  position: absolute;
  width: 440px;
  height: 370px;
  right: 155px;
  bottom: -114px;
  z-index: 1;
  /* Gray04 */

  background: #eaeaea;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  @media screen and (max-width: 1150px) {
    top: 723px;
    right: 50%;
    transform: translate(50%, 0);
  }
  @media screen and (max-width: 500px) {
    width: 85%;
  }
`
export const FormOverlay = styled.div`
  position: absolute;
  width: 440px;
  height: 646px;
  right: 150px;
  bottom: -406px;
  z-index: 2;
  background: #ffff;
  /* box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15); */
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #0d3151;
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1150px) {
    max-width: 480px;
    width: 95%;
    top: 732px;
    right: 50%;
    transform: translate(50%, 0);
  }
  @media screen and (max-width: 430px) {
    height: 661px;

    width: 95%;
    top: 732px;
    right: 50%;
    transform: translate(50%, 0);
  }
`
export const WrapPipe = styled.div`
  /* & input {
    border: 2px solid red !important;
  } */
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
  width: 632px;
  height: 326px;
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
  width: 100%;
  height: 10px;
  left: 0;
  bottom: 0;

  /* Rentlio gradient */

  background: linear-gradient(
    90deg,
    #a9cf3a 0%,
    #a7cf40 5.15%,
    #a2ce52 12.91%,
    #99cd6f 22.31%,
    #8bcb92 32.97%,
    #78cabb 44.65%,
    #59c9e7 56.32%,
    #1d9ed9 99.98%
  );
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const FormTitle = styled.div`
  margin: 30px 20px 30px 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #0d3151;

  @media screen and (max-width: 430px) {
    margin-left: 20px;
    margin-right: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    /* identical to box height, or 214% */

    /* Blue */

    color: #0d3151;
  }
`
export const FieldsWrap = styled.div`
  margin: 0 30px 40px 30px;
  height: 615px;
  width: 420px;

  & input {
    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    padding-left: 20px;
    background: #ffffff;
    /* Gray04 */

    border: 1px solid #eaeaea;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 187% */
    /* Gray01 */
    color: #2f2f2f;
  }
  & input:focus {
    border: 1px solid #1d9ed9;
    box-sizing: border-box;
    /* Blue shadow */
    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 133, 255, 0.2);
    border-radius: 8px;
  }
  & input[type="submit"] {
    width: 100%;
    height: 80px;
    padding-left: 0;
    background: linear-gradient(180deg, #ff4000 0%, #be3202 100%);
    /* Blue */

    border: 1px solid #0d3151;
    box-sizing: border-box;
    /* Blue shadow */

    box-shadow: 0px 4px 10px rgba(0, 133, 255, 0.2);
    border-radius: 16px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 167% */
    cursor: pointer;
    color: #ffffff;
  }
  & button {
    width: 100%;
    height: 80px;
    padding-left: 0;
    background: linear-gradient(180deg, #ff4000 0%, #be3202 100%);
    /* Blue */

    border: 1px solid #0d3151;
    box-sizing: border-box;
    /* Blue shadow */
    margin-top: 20px;
    box-shadow: 0px 4px 10px rgba(0, 133, 255, 0.2);
    border-radius: 16px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 167% */
    cursor: pointer;
    color: #ffffff;
  }
  @media screen and (max-width: 1150px) {
    margin: 0 30px 40px 20px;
    width: 90%;
    & input {
      width: 100%;
      height: 60px;
      margin-bottom: 10px;
      padding-left: 20px;
    }
  }
`
