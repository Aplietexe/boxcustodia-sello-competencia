import { Col } from "react-bootstrap"
import styled from "styled-components"

import BackgroundColor from "components/BackgroundColor"

const StyledCol = styled(Col)`
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #fff;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  p {
    text-align: center;
    padding-inline: 1rem;
  }
`

const Footer = () => (
  <BackgroundColor className="mt-5" color="var(--accent-dark)">
    <StyledCol className="p-3">
      <p>Copyright &copy; 2021 Workflow.</p>
      <p>Desarrollado por Box Custodia de Archivos S.A.</p>
    </StyledCol>
  </BackgroundColor>
)

export default Footer
