import Image from "next/image"
import styled from "styled-components"

import { ColoredP } from "components"
import { xl } from "lib/cssHelpers"

import Bars from "./Bars"

const StepWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 10px 40px;

  ${xl`
    flex-direction: column;
    align-items: stretch;
  `}
`

const IconsWrapper = styled.div`
  display: flex;
  width: 134px;
  gap: 11px;
  flex-direction: column;

  ${xl`
    width: 100%;
    gap: 1.4vw;
    flex-direction: row;
  `}
`

const NumberWrapper = styled.div`
  width: 134px;
  height: 130px;

  ${xl`
    width: calc(134px * 0.55);
    height: calc(130px * 0.55);
  `}
`

const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 130px;

  ${xl`
    min-height: auto;
  `}
`

interface StepProps {
  alt: string
  color?: string
  image: StaticImageData
  text: JSX.Element
}

const Step = ({ alt, color, image, text }: StepProps) => (
  <StepWrapper>
    <IconsWrapper>
      <NumberWrapper>
        <Image alt={alt} src={image} />
      </NumberWrapper>
      {color && <Bars color={color} />}
    </IconsWrapper>
    <ParagraphWrapper>
      <ColoredP>{text}</ColoredP>
    </ParagraphWrapper>
  </StepWrapper>
)

export default Step
