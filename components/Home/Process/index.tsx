import styled from "styled-components"

import { Pad, StyledH2 } from "components"
import { xl } from "lib/cssHelpers"

import Step from "./Step"
import steps from "./steps"

const StepsWrapper = styled.div`
  display: flex;
  gap: 10px 1.4vw;

  flex-direction: column;

  ${xl`
    flex-direction: row;
  `}

  & > div {
    flex: 1 1 20%;
  }

  & > div:last-child {
    flex-basis: 13%;
  }
`

const Process = () => (
  <Pad>
    <StyledH2 className="my-3 py-5 text-center">
      Cómo funciona nuestro proceso
    </StyledH2>
    <StepsWrapper className="mb-5 pb-5">
      {steps.map((step) => (
        <div key={step.alt}>
          <Step {...step} />
        </div>
      ))}
    </StepsWrapper>
  </Pad>
)

export default Process
