import styled from "styled-components"

export const WrapBlogCardsSection = styled.div`
  position: relative;

  width: 100%;
  height: 550px;
  padding: 100px 130px;
  display: flex;
  justify-content: space-between;
  & .slick-dots {
    position: absolute;
    bottom: -48px;
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
  @media screen and (max-width: 490px) {
    padding: 50px 0px 120px 0px;
    height: 550px;
    flex-direction: column;
  }
`
export const WrapBlogCard = styled.a`
  position: relative;
  cursor: pointer;
  width: 360px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 490px) {
    justify-content: center;

    padding-top: 20px;
    width: 100%;
  }
`
export const Title = styled.h4`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  /* or 130% */
  margin-top: 30px;
  /* Blue */
  width: 370px;
  color: #0d3151;
  padding: 0 10px;
  @media screen and (max-width: 490px) {
    margin-top: 0;
    width: 80%;
  }
`
export const ImageWrap = styled.div`
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.05));
  width: 387px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
