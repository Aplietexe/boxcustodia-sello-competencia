import styled from "styled-components"

import { xl } from "lib/cssHelpers"

const BarsWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: end;

  ${xl`
    justify-content: end;
    align-items: center;
    height: auto;
  `}
`

const GrayBar = styled.div`
  position: absolute;
  background-color: #707070;
  height: 100%;
  width: 2px;

  ${xl`
    height: 2px;
    width: 100%;
  `}
`

interface WithColor {
  color: string
}

const ColorBar = styled.div<WithColor>`
  position: absolute;
  background-color: ${({ color }) => color};
  height: 42px;
  width: 10px;
  border-radius: 6px;

  ${xl`
    height: 10px;
    width: 60%;
  `}
`

const Bars = ({ color }: WithColor) => (
  <BarsWrapper>
    <GrayBar />
    <ColorBar color={color} />
  </BarsWrapper>
)

export default Bars
