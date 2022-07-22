import Image from "next/image"
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import AccentButton from "components/AccentButton"
import StyledH2 from "components/StyledH2"
import { SidePadding } from "lib/context/Home"
import { useBreakpoints } from "lib/hooks"
import image from "public/Home/Header/image.webp"

const Paragraph = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.563rem;
  font-weight: 400;
  color: var(--gray-dark);
`

const Header = () => {
  const sidePadding = useContext(SidePadding)

  const { breakpointSizes } = useBreakpoints

  return (
    <Row
      className="my-4 pt-xl-4"
      css={`
        @media (min-width: ${breakpointSizes.lg}px) {
          padding-inline: ${sidePadding};
        }
      `}
    >
      <Col xl={{ order: 2, span: 6 }} xs={12}>
        <Image
          alt="Imagen del encabezado"
          layout="responsive"
          priority
          sizes={`(max-width:1199px) calc(100vw - ${sidePadding} * 2 - 1.5rem),
                calc(50vw - ${sidePadding} - 0.75rem)`}
          src={image}
        />
      </Col>
      <Col
        className="align-items-xl-center d-xl-flex"
        css={`
          padding-inline: ${sidePadding};

          @media (min-width: ${breakpointSizes.lg}px) {
            padding-inline: 0;
          }
        `}
        xl={{ order: 1, span: 6 }}
        xs={12}
      >
        <Row>
          <Col xs={12}>
            <StyledH2 className="pb-3">
              Modernizar tu negocio puede ser fácil
            </StyledH2>
          </Col>
          <Col className="mb-4" xs={12}>
            <Paragraph>
              A través de esta herramienta podrás aumentar la productividad de
              tu negocio eliminando la gestión manual de documentos, tareas o
              información que va pasando de persona a persona.
            </Paragraph>
          </Col>
          <Col xs={6}>
            <AccentButton href="#contact-form">
              Solicitar cotización
            </AccentButton>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
