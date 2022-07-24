import Image from "next/image"
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"

import { AccentButton, ColoredP, StyledH2 } from "components"
import { SidePadding } from "lib/context/Home"
import { lg } from "lib/cssHelpers"
import image from "public/Home/Header/image.webp"

const Header = () => {
  const sidePadding = useContext(SidePadding)

  return (
    <Row
      className="my-4 pt-xl-4"
      css={`
        ${lg/* css */ `
          padding-inline: ${sidePadding};
        `}
      `}
    >
      <Col xl={{ order: 2, span: 6 }} xs={12} xxl={{ order: 2, span: 7 }}>
        <Image
          alt="Imagen del encabezado"
          layout="responsive"
          priority
          sizes={`(min-width:1200px) calc((100vw - ${sidePadding} * 2) * (7 / 12) - 1.5rem),
                  calc(100vw - ${sidePadding} * 2 - 1.5rem)`}
          src={image}
        />
      </Col>
      <Col
        className="align-items-xl-center d-xl-flex"
        css={`
          padding-inline: ${sidePadding};

          ${lg`
            padding-inline: 0;
          `}
        `}
        xl={{ order: 1, span: 6 }}
        xs={12}
        xxl={{ order: 1, span: 5 }}
      >
        <Row>
          <Col xs={12}>
            <StyledH2 className="pb-3">Sello de Competencia</StyledH2>
          </Col>
          <Col className="mb-4" xs={12}>
            <ColoredP>
              Es un sello que acompaña a la firma digital de una persona física
              y a su vez estampa la matrícula profesional con la información del
              Colegio/ Consejo/ Entidad/ Persona Jurídica en el cual está
              matriculado.
            </ColoredP>
          </Col>
          <Col xs={6}>
            <AccentButton href="#contact-form">Consultar servicio</AccentButton>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
