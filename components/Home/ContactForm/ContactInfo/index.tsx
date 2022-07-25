import Image from "next/image"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import { ArrowIcon, MutedP, StyledLink } from "components"

import contactOptions from "./contactOptions"

const OptionStyles = styled(Col)`
  display: flex;
  gap: 10px;
  align-items: center;

  & > span {
    width: 1.25em;
  }
`

const ContactInfo = () => (
  <Row className="mb-5 pb-5 p-lg-0 m-lg-0">
    <Col className="d-flex justify-content-center">
      <div>
        {contactOptions.map(({ alt, image, text }) => (
          <OptionStyles className="mb-3" key={text}>
            <Image alt={alt} layout="fixed" src={image} />
            <MutedP className="m-0">{text}</MutedP>
          </OptionStyles>
        ))}
        <StyledLink className="mt-3" href="#contact-form-body">
          Ponerse en contacto con <ArrowIcon word="comercial" />
        </StyledLink>
      </div>
    </Col>
  </Row>
)

export default ContactInfo
