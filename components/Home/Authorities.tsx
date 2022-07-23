import Image from "next/image"
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"

import { BackgroundColor, ColoredP, Pad } from "components"
import { SidePadding } from "lib/context/Home"
import image from "public/Home/Authorities/image.png"

const Authorities = () => {
  const sidePadding = useContext(SidePadding)

  return (
    <BackgroundColor color="#d7dbe4">
      <Pad>
        <Row className="align-items-center py-5 mb-4">
          <Col className="d-flex justify-content-center" xl={6} xs={12}>
            <div
              css={`
                width: min(692px, 100%);
                height: min-content;
              `}
            >
              <Image
                alt="Ventanas"
                layout="responsive"
                sizes={`(max-width: 782px) calc(100vw - ${sidePadding} * 2 - 1.5rem),
                        (max-width: 1199px) 692w,
                        (max-width: 1592px) calc((100vw - ${sidePadding} * 2) / 2 - 1.5rem),
                        692w`}
                src={image}
              />
            </div>
          </Col>
          <Col xl={6} xs={12}>
            <ColoredP className="text-center text-xl-start">
              Las <strong>Autoridades de Sello de Competencia</strong>, Consejos
              /Colegios /Entidades /Personas Jurídicas, son exclusivamente
              responsable de la administración, acreditación, inhabilitación y
              revocación de las competencias, roles, funciones o relaciones
              laborales del titular de un certificado de firma digital.
            </ColoredP>
          </Col>
        </Row>
      </Pad>
    </BackgroundColor>
  )
}

export default Authorities
