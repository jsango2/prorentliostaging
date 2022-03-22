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
  TraditionalData,
  WrapTable,
  RentlioDataBackc,
  WrapRows,
  Ghost,
  TableMobWrap,
  LeftMob,
  RightMob,
  LogoMob,
  TraditionalTitle,
  WrapMobRentlioBox,
  RentlioTitleMob,
  RentlioTextMob,
  TraditionalTextMob,
  WrapTraditionalBox,
} from "./styles.js"
import { tableData } from "./tableData.js"

import useWindowSize from "../helper/useWindowSize"

const TableSection = () => {
  const size = useWindowSize()
  return (
    <>
      {size.width > 1208 ? (
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
                  <React.Fragment key={data.info}>
                    <Ghost className="ghost" />
                    <SingleData className="singleData">
                      <Data>{data.info}</Data>
                      <RentlioDataBackc>{data.rentlio}</RentlioDataBackc>
                      <TraditionalData>{data.traditional}</TraditionalData>
                    </SingleData>
                  </React.Fragment>
                ))}
              </WrapTable>
            </WrapRows>
          </Table>
        </TableSectionWrap>
      ) : (
        <TableSectionWrap>
          <Intro>Zašto reći da cloudu, a ne tradicionalnom sustavu?</Intro>

          <TableMobWrap>
            <LeftMob>
              <LogoMob>
                <img src="/images/RentlioLogoTamni.svg" alt="Logo" />
              </LogoMob>
              {tableData.map(data => (
                <React.Fragment key={data.info}>
                  <WrapMobRentlioBox>
                    <RentlioTitleMob>{data.info}</RentlioTitleMob>

                    <RentlioTextMob>{data.rentlio}</RentlioTextMob>
                  </WrapMobRentlioBox>
                </React.Fragment>
              ))}
            </LeftMob>
            <RightMob>
              <TraditionalTitle>Tradicionalni sustavi</TraditionalTitle>
              {tableData.map(data => (
                <React.Fragment key={data.info}>
                  <WrapTraditionalBox>
                    <RentlioTitleMob style={{ opacity: "0" }}>
                      {data.info}
                    </RentlioTitleMob>

                    <TraditionalTextMob>{data.traditional}</TraditionalTextMob>
                  </WrapTraditionalBox>
                </React.Fragment>
              ))}{" "}
            </RightMob>
          </TableMobWrap>
        </TableSectionWrap>
      )}
    </>
    // <TableSectionWrap>
    //   <Intro>Zašto reći da cloudu, a ne tradicionalnom sustavu?</Intro>
    //   {size.width > 768 ? (
    //     <Table>
    //       <TradicionalanSustav>Tradicionalan sustav</TradicionalanSustav>

    //       <WrapRows>
    //         <RentlioBox>
    //           <LogoHero>
    //             <img src="/images/RentlioLogoTamni.svg" alt="Logo" />
    //           </LogoHero>
    //           {tableData.map(data => (
    //             <SingleDataRentlio key={data.info}>
    //               <Icon>{data.rentlio}</Icon>
    //             </SingleDataRentlio>
    //           ))}
    //         </RentlioBox>
    //         <WrapTable>
    //           {tableData.map(data => (
    //             <React.Fragment key={data.info}>
    //               <Ghost className="ghost" />
    //               <SingleData className="singleData">
    //                 <Data>{data.info}</Data>
    //                 <RentlioDataBackc>{data.rentlio}</RentlioDataBackc>
    //                 <TraditionalData>{data.traditional}</TraditionalData>
    //               </SingleData>
    //             </React.Fragment>
    //           ))}
    //         </WrapTable>
    //       </WrapRows>
    //     </Table>
    //   ) : (
    //     <TableMobWrap>
    //       <LeftMob>
    //         <LogoMob>
    //           <img src="/images/RentlioLogoTamni.svg" alt="Logo" />
    //         </LogoMob>
    //         {tableData.map(data => (
    //           <React.Fragment key={data.info}>
    //             <WrapMobRentlioBox>
    //               <RentlioTitleMob>{data.info}</RentlioTitleMob>

    //               <RentlioTextMob>{data.rentlio}</RentlioTextMob>
    //             </WrapMobRentlioBox>
    //           </React.Fragment>
    //         ))}
    //       </LeftMob>
    //       <RightMob>
    //         <TraditionalTitle>Tradicionalni sustavi</TraditionalTitle>
    //         {tableData.map(data => (
    //           <React.Fragment key={data.info}>
    //             <WrapTraditionalBox>
    //               <TraditionalTextMob>{data.traditional}</TraditionalTextMob>
    //             </WrapTraditionalBox>
    //           </React.Fragment>
    //         ))}{" "}
    //       </RightMob>
    //     </TableMobWrap>
    //   )}
    // </TableSectionWrap>
  )
}

export default TableSection
