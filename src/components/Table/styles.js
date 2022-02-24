import styled from "styled-components"

export const TableSectionWrap = styled.div`
  position: relative;
  z-index: 1;
  top: -50px;
  width: 100%;
  height: 1500px;
  background: linear-gradient(180deg, #ececec 0%, #ffffff 100%);
  padding-top: 258px;
  padding-left: 130px;
  padding-right: 130px;
  padding-bottom: 130px;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Intro = styled.div`
  width: 1000px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  /* or 125% */

  text-align: center;

  /* Blue */

  color: #0d3151;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Table = styled.div`
  position: relative;
  margin-top: 350px;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Ghost = styled.div`
  position: absolute;
  z-index: 10;
  height: 60px;
  width: 1186px;
  border-radius: 12px;
  border: transparent;

  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    /* order: 1;
  margin-bottom: 1rem; */
  }
`
export const SingleData = styled.div`
  position: relative;
  height: 60px;
  width: 1186px;
  border-radius: 12px;
  border: transparent;

  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  color: red;
  padding-left: 30px;
  padding-right: 30px;
  /* z-index: 3; */
  transition: all 0.8s ease-in-out;

  &:nth-child(2n) {
    background: linear-gradient(
      270deg,
      rgba(247, 247, 247, 0) 16.99%,
      #f7f7f7 58.86%
    );
  }
  &:nth-child(2n):hover {
    background: #f5f5f5;
  }

  background: linear-gradient(
    270deg,
    #f7f7f7 71.36%,
    rgba(247, 247, 247, 0) 100%
  );

  @media screen and (max-width: 768px) {
    /* order: 1;
  margin-bottom: 1rem; */
  }
`

export const SingleDataRentlio = styled.div`
  height: 60px;
  width: 91%;
  background: #f7f7f780;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    /* order: 1;
  margin-bottom: 1rem; */
  }
`
export const Data = styled.div`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  width: 120px;
  /* Gray01 */

  color: #2f2f2f;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapRows = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapTable = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TradicionalanSustav = styled.div`
  position: absolute;
  top: -93px;
  left: 879px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #000000;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const RentlioBox = styled.div`
  position: absolute;

  z-index: 4;
  width: 500px;
  height: 860px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(112, 111, 111, 0.15);
  border-radius: 40px;
  top: -221px;
  left: 500px;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  align-items: center;
  padding-top: 75px;
  padding-bottom: 40px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const RentlioBoxBack = styled.div`
  position: absolute;

  z-index: 0;
  width: 500px;
  height: 860px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(112, 111, 111, 0.15);
  border-radius: 40px;
  top: -221px;
  left: 42%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  align-items: center;
  padding-top: 75px;
  padding-bottom: 40px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Icon = styled.h4`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray01 */

  color: #2f2f2f;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const RentlioDataBackc = styled.div`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 420px;
  margin-left: 54px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray01 */

  color: #2f2f2f;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TraditionalData = styled(Icon)`
  width: 360px;
  font-size: 12px;
  line-height: 18px;
  /* or 150% */

  text-align: center;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const LogoHero = styled.div`
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
