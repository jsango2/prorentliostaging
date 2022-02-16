import styled from "styled-components"

export const WrapBlogCardsSection = styled.div`
  position: relative;

  width: 100%;
  height: 550px;
  padding: 100px 130px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapBlogCard = styled.a`
  position: relative;
  cursor: pointer;
  width: 360px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
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
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const ImageWrap = styled.div`
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.05));
  width: 360px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
