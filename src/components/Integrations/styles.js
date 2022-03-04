import styled from "styled-components"

export const WrapIntegrationsSection = styled.div`
  position: relative;
  width: 100%;
  height: 671px;
  padding-top: 180px;

  background: linear-gradient(180deg, #eaeaea 0%, #ffffff 76.18%);
  clip-path: polygon(0 0, 100% 3%, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0 0, 100% 3%, 100% 100%, 0% 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  @media screen and (max-width: 430px) {
    width: 100vw;

    height: auto;
    padding: 100px 10px 90px 10px;
  }
`
export const Logos = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  flex-wrap: wrap;
  @media screen and (max-width: 430px) {
    width: 100%;
    justify-content: center;
  }
`
export const SaznajKako = styled.div`
  position: relative;
  width: 98px;
  height: 30px;
  padding: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */
  transform: scale(1);
  text-align: center;
  transition: all 0.8s ease-in-out;
  bottom: 0;
  &:hover {
    transform: scale(1.1);
    bottom: 2px;
  }
  &:hover > div {
    width: 98px;
  }
  a {
    text-decoration: none;
  }
  /* Blue */
  cursor: pointer;
  color: #0d3151;
  @media screen and (max-width: 430px) {
    /* width: 100%;
    justify-content: center; */
  }
`

export const Linija = styled.div`
  position: relative;
  margin: 0 auto;
  width: 0px;
  height: 3px;
  background-color: #1d9ed9;
  transition: all 0.8s ease-in-out;
  border-radius: 1px;
  @media screen and (max-width: 430px) {
    /* width: 100%;
    justify-content: center; */
  }
`
export const Image = styled.div`
  img {
    width: 230px;
    height: 90px;
    object-fit: contain;
  }
  @media screen and (max-width: 430px) {
    img {
      width: 130px;
      height: 50px;
      object-fit: contain;
      margin: 0 20px;
    }
  }
`
export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 50px;
  /* identical to box height, or 139% */
  margin-bottom: 30px;
  /* Blue */
  text-align: center;
  color: #0d3151;
  width: 80%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */
  width: 600px;
  text-align: center;
  /* Blue */

  color: #0d3151;
  @media screen and (max-width: 430px) {
    width: 90%;
  }
`
