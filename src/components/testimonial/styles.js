import styled from "styled-components"

export const TestimonialWrap = styled.div`
  position: relative;
  width: 100%;
  height: 483px;
  background: #ffffff;
  padding-top: 100px;
  padding-left: 130px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1150px) {
    height: 1100px;
    padding-left: 30px;
    padding-bottom: 100px;
    justify-content: flex-end;
  }
  @media screen and (max-width: 490px) {
    width: 100vw;

    height: 1080px;
    padding-left: 30px;
  }
`
export const ContentWrap = styled.div`
  position: relative;
  width: 557px;
  height: 254px;
  @media screen and (max-width: 1150px) {
    margin: 0 auto;
    /* position: absolute; */
    /* bottom: 109px; */
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 430px) {
    height: 268px;

    margin: 0 auto;
    position: absolute;
    bottom: 109px;
    width: 90%;
  }
`
export const Stars = styled.div`
  position: relative;
  width: 155px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Title = styled.div`
  width: 37vw;
  max-width: 577px;
  min-width: 430px;
  min-height: 48px;
  height: auto;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-top: 20px;

  /* Blue */

  color: #0d3151;
  @media screen and (max-width: 430px) {
    width: 95%;
    min-width: auto;
    height: auto;
    font-size: 20px;
    line-height: 36px;
  }
`
export const Paragraph = styled.div`
  width: 557px;
  height: 47px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 50px;

  /* or 150% */

  /* Blue */

  color: #0d3151;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const AvatarContent = styled.div`
  width: 339px;
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapNameCredential = styled.div`
  width: 229px;
  height: 47px;
  margin-left: 30px;
  @media screen and (max-width: 430px) {
    width: 56vw;
  }
`

export const Name = styled.h3`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  /* Blue */

  color: #0d3151;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Credential = styled.h4`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
  /* identical to box height */

  /* Gray02 */

  color: #706f6f;

  @media screen and (max-width: 430px) {
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
  /* overflow: hidden; */
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
  @media screen and (max-width: 430px) {
    width: 401%;
  }
`
