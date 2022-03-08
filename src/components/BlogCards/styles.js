import styled from "styled-components"

export const WrapBlogCardsSection = styled.div`
  position: relative;

  width: 100%;
  height: 550px;
  padding: 100px 130px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
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
  @media screen and (max-width: 1260px) {
    width: 100vw;
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
  /* overflow: hidden; */
  &:nth-child(1) {
    margin-right: 10px;
  }
  &:nth-child(2) {
    margin: 0 10px;
  }
  &:nth-child(3) {
    margin-left: 10px;
  }
  & .image {
    transition: transform 0.6s cubic-bezier(0.3, 0.61, 0.45, 0.94) 0s;
  }

  &:hover .image {
    transform: scale(1.051);
  }
  @media screen and (max-width: 1260px) {
    &:nth-child(1) {
      margin-right: auto;
    }
    &:nth-child(2) {
      margin: auto;
    }
    &:nth-child(3) {
      margin-left: auto;
    }
    margin: 0 auto;
  }
  @media screen and (max-width: 490px) {
    justify-content: flex-start;

    padding-top: 10px;
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
    margin-top: 20px;
    width: 80%;
  }
`
export const ImageWrap = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  height: 230px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const Image = styled.div`
  width: 100%;
  height: 100%;

  background: ${props => `url(${props.photo}) `};
  background-size: cover;

  @media screen and (max-width: 768px) {
  }
`
