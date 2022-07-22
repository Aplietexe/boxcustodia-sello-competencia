import Image from "next/image"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import ArrowIcon from "components/ArrowIcon"
import StyledLink from "components/StyledLink"
import StyledP from "components/StyledP"
import mailIcon from "public/Home/ContactForm/mail.svg"
import phone1Icon from "public/Home/ContactForm/phone-1.svg"
import phone2Icon from "public/Home/ContactForm/phone-2.svg"

const contactOptions: {
  alt: string
  image: StaticImageData
  text: string
}[] = [
  {
    alt: "Teléfono",
    image: phone1Icon,
    text: "(+54 011) 5032 2355 Int. 2002",
  },
  {
    alt: "Teléfono",
    image: phone2Icon,
    text: "(+54 011) 15 - 37886510",
  },
  {
    alt: "mail",
    image: mailIcon,
    text: "agarcia@boxcustodia.com",
  },
]

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
            <StyledP className="m-0">{text}</StyledP>
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
