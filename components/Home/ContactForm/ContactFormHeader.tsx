import Image from "next/image"
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"

import { BackgroundImage, Pad, StyledH2, StyledP } from "components"
import { SidePadding } from "lib/context/Home"
import backgroundImage from "public/Home/ContactForm/background.webp"
import header from "public/Home/ContactForm/header.webp"

const ContactFormHeader = () => {
  const sidePadding = useContext(SidePadding)

  return (
    <Row className="py-5" id="contact-form">
      <Col className="position-relative">
        <BackgroundImage src={backgroundImage} />
        <Pad>
          <Col className="text-center py-4" xs={12}>
            <div
              css={`
                display: inline-block;
                width: min(359px, 100%);
                height: auto;
              `}
            >
              <Image
                alt="Retratos"
                layout="responsive"
                sizes={`(max-width: 406px) calc(100vw - ${sidePadding} * 2),359w`}
                src={header}
              />
            </div>
          </Col>
          <Col className="text-center py-4" xs={12}>
            <StyledH2 className="mb-4">¿Cómo podemos ayudarlo?</StyledH2>
            <StyledP>Llene el formulario</StyledP>
          </Col>
        </Pad>
      </Col>
    </Row>
  )
}

export default ContactFormHeader
