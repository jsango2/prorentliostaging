import styled from "styled-components"

export const WrapFooterSection = styled.div`
  position: relative;
  width: 100%;
  height: 816px;
  background: linear-gradient(180deg, #eaeaea 0%, #ffffff 100%);
  padding-top: 200px;
  clip-path: polygon(0 0, 100% 3%, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0 0, 100% 3%, 100% 100%, 0% 100%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 490px) {
    padding-top: 150px;

    height: auto;
  }
`
export const FirstRow = styled.div`
  position: relative;
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 490px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const Logos = styled.div`
  position: relative;
  width: 70%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  align-items: center;
  @media screen and (max-width: 490px) {
    margin-top: 50px;

    height: auto;
    flex-direction: column;
    img {
      margin: 20px auto;
    }
  }
`
export const Wrap = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 490px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }
`
export const WrapSocial = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 490px) {
    margin-top: 50px;
  }
`
export const Text = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  text-decoration: none;
  /* Blue */
  margin: 0;
  color: #0d3151;
  @media screen and (max-width: 490px) {
    margin-bottom: 30px;
  }
`
export const FollowUs = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin: 0 85px;
  /* Gray02 */
  text-transform: uppercase;
  color: #706f6f;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Line = styled.div`
  position: relative;
  width: 94px;
  height: 1px;
  background-color: #a9cf3a;
  margin-left: 30px;
  margin-right: 30px;
  @media screen and (max-width: 490px) {
    display: none;
  }
`
