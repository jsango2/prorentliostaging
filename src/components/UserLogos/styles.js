import styled from "styled-components"
import sanrocco from "../../../static/images/sanrocco.png"
import martins from "../../../static/images/martins.png"
import bevanda from "../../../static/images/bevanda.png"
import prijeko from "../../../static/images/prijeko.png"
import verdi from "../../../static/images/verdi.png"
import cittar from "../../../static/images/cittar.png"
import palace from "../../../static/images/palace.png"
import republika from "../../../static/images/republika.png"
import scalini from "../../../static/images/scalini.png"
import puntjar from "../../../static/images/puntijar.png"
import jarun from "../../../static/images/jarun.png"
import vista from "../../../static/images/vista.png"

export const UserLogosWrap = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  background: white;
  padding-top: 200px;
  /* padding-top: 200px;
  padding-bottom: 200px;
  padding-left: 195px;
  padding-right: 195px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 70px;
  justify-items: center; */
  @media screen and (max-width: 900px) {
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 50px; */
  }
  @media screen and (max-width: 1100px) {
    width: 100vw;
    height: 880px;
    overflow: hidden;
    padding-top: 610px;
    /* grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 20px;
    padding-right: 20px; */
  }
  @media screen and (max-width: 400px) {
    /* grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 50px; */
  }
`
export const SanRocco = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${sanrocco});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  width: 130px;
  height: 100px;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 80px;
  }
`
export const Martinis = styled.div`
  /* grid-area: 1 / 2 / 2 / 3; */
  background-image: url(${martins});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  width: 130px;
  height: 100px;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 80px;
  }
`
export const Bevanda = styled.div`
  /* grid-area: 1 / 3 / 2 / 4; */
  background-image: url(${bevanda});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;
  @media screen and (max-width: 500px) {
    margin-top: 40px;
    width: 50px;
    height: 35px;
  }
`
export const Prijeko = styled.div`
  /* grid-area: 1 / 4 / 2 / 5; */
  background-image: url(${prijeko});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 35px;
  }
`
export const Verdi = styled.div`
  /* grid-area: 2 / 1 / 3 / 2; */
  background-image: url(${verdi});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 500px) {
    width: 100px;
    height: 80px;
  }
`
export const Cittar = styled.div`
  /* grid-area: 2 / 2 / 3 / 3; */
  background-image: url(${cittar});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 500px) {
    width: 100px;
    height: 80px;
  }
`
export const Palace = styled.div`
  /* grid-area: 2 / 3 / 3 / 4; */
  background-image: url(${palace});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 400px) {
    width: 30vw;
  }
`
export const Republika = styled.div`
  /* grid-area: 2 / 4 / 3 / 5; */
  background-image: url(${republika});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 400px) {
    width: 30vw;
  }
`
export const Scalini = styled.div`
  /* grid-area: 3 / 1 / 4 / 2; */
  background-image: url(${scalini});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 400px) {
    width: 30vw;
  }
`
export const Puntjar = styled.div`
  /* grid-area: 3 / 2 / 4 / 3; */
  background-image: url(${puntjar});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 400px) {
    width: 30vw;
  }
`
export const Jarun = styled.div`
  /* grid-area: 3 / 3 / 4 / 4; */
  background-image: url(${jarun});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 400px) {
    width: 100px;
    height: 80px;
  }
`
export const Vista = styled.div`
  /* grid-area: 3 / 4 / 4 / 5; */
  background-image: url(${vista});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 100px;

  @media screen and (max-width: 400px) {
    width: 100px;
    height: 80px;
  }
`
