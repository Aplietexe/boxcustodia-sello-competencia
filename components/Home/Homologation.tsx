import { Col, Row } from "react-bootstrap"

import { ColoredP, Pad } from "components"
import ArrowIcon from "components/ArrowIcon"
import StyledLink from "components/StyledLink"
import { useBreakpoints } from "lib/hooks"

const Homologation = () => {
  const breakpoints = useBreakpoints()

  const link = (
    <StyledLink className="mt-5">
      Ver <ArrowIcon word="homologación" />
    </StyledLink>
  )

  return (
    <Pad>
      <Row className="py-5 my-5">
        <Col className="mb-5" xl={5} xs={12}>
          <div
            css={`
              font-family: "Poppins", sans-serif;
              font-size: 3.375rem;
              font-weight: 400;
              color: var(--accent-dark);
              line-height: 1;

              & > div {
                margin-top: 1rem;

                span {
                  line-height: 1.5;
                  background-color: var(--accent-dark);
                  color: #fff;
                  padding-inline: 0.75rem;
                  box-decoration-break: clone;
                }
              }
            `}
          >
            Estamos homologados por <br />
            <div>
              <span>Jefatura de Gabinete de Ministros</span>
            </div>
          </div>
          {breakpoints.xl && link}
        </Col>
        <Col xl={7} xs={12}>
          <ColoredP className="ps-xl-4">
            Box Custodia de Archivos S.A,{" "}
            <strong>Certificador Licenciado</strong>, tiene en su política 4.1
            aprobada la generación de certificados de Sello de Atributos y/o
            Competencia.
            <br />
            <br />
            El <strong>Sello de Atributo y/o Competencia</strong>, consiste en
            un archivo adicional &quot;certificado&quot; en la firma digital del
            Profesional o Funcionario, que en el mismo momento de su firma, la
            misma es acompañada con la información del Colegio o Consejo en el
            cual está matriculado. Dicha información de aquellas instituciones
            (Colegios y/o Consejos), es sobre la validez del título invocado,
            evitando de esa manera, cualquier adulteración al respecto, con la
            ventaja que el tercero que recepciona el instrumento tiene la
            seguridad que el mismo está firmado por un profesional habilitado.
          </ColoredP>
          {!breakpoints.xl && link}
        </Col>
      </Row>
    </Pad>
  )
}

export default Homologation
