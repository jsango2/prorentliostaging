import React from "react"
import {
  TableSectionWrap,
  Intro,
  Table,
  Data,
  SingleData,
  Icon,
  LogoHero,
  SingleDataRentlio,
  RentlioBox,
  TradicionalanSustav,
} from "./styles.js"
import { tableData } from "./tableData.js"
import No from "../../../static/images/x.svg"
import Yes from "../../../static/images/yes.svg"
const TableSection = () => {
  return (
    <TableSectionWrap>
      <Intro>
        Hotelskim sustavima lociranima u vašim objektima istekao je rok
        trajanja. Traže velika ulaganja, nedovoljno su fleksibilni. <br />
        <br />
        Rentlio je cloud rješenje koje se prilagođava vašim hotelskim
        operacijama i potrebama, oblak u kojem je, u realnom vremenu, sigurno
        smještena vaša usluga uz sve podatke i procese.
      </Intro>
      <Table>
        <TradicionalanSustav>Tradicionalan sustav</TradicionalanSustav>
        <RentlioBox>
          <LogoHero>
            <img src="/images/RentlioLogoTamni.svg" alt="Logo" />
          </LogoHero>
          {tableData.map(data => (
            <SingleDataRentlio key={data.info}>
              <Icon>
                {data.rentlio ? (
                  <img src={Yes} alt="" />
                ) : (
                  <img src={No} alt="" />
                )}
              </Icon>
            </SingleDataRentlio>
          ))}
        </RentlioBox>
        {tableData.map(data => (
          <SingleData key={data.info}>
            <Data>{data.info}</Data>
            <Icon>
              {data.rentlio ? (
                <img src={No} alt="" />
              ) : (
                <img src={Yes} alt="" />
              )}
            </Icon>
          </SingleData>
        ))}
      </Table>
    </TableSectionWrap>
  )
}

export default TableSection
