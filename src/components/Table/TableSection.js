import React, { useRef, useState, useEffect } from "react"
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
  RentlioBoxBack,
  TradicionalanSustav,
  TraditionalData,
  WrapTable,
  RentlioDataBackc,
  WrapRows,
  Ghost,
} from "./styles.js"
import { tableData } from "./tableData.js"
import No from "../../../static/images/x.svg"
import Yes from "../../../static/images/yes.svg"
const TableSection = () => {
  return (
    <TableSectionWrap>
      <Intro>Zašto reći da cloudu, a ne tradicionalnom sustavu?</Intro>
      <Table>
        <TradicionalanSustav>Tradicionalan sustav</TradicionalanSustav>

        <WrapRows>
          <RentlioBox>
            <LogoHero>
              <img src="/images/RentlioLogoTamni.svg" alt="Logo" />
            </LogoHero>
            {tableData.map(data => (
              <SingleDataRentlio key={data.info}>
                <Icon>{data.rentlio}</Icon>
              </SingleDataRentlio>
            ))}
          </RentlioBox>
          <WrapTable>
            {tableData.map(data => (
              <>
                <Ghost className="ghost" />
                <SingleData key={data.info} className="singleData">
                  <Data>{data.info}</Data>
                  <RentlioDataBackc>{data.rentlio}</RentlioDataBackc>
                  <TraditionalData>{data.traditional}</TraditionalData>
                </SingleData>
              </>
            ))}
          </WrapTable>
        </WrapRows>
      </Table>
    </TableSectionWrap>
  )
}

export default TableSection
