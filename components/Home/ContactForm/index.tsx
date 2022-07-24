import { Col, Row } from "react-bootstrap"

import { Pad } from "components"

import ContactFormBody from "./ContactFormBody"
import ContactFormHeader from "./ContactFormHeader"
import ContactInfo from "./ContactInfo"

const ContactForm = () => (
  <>
    <ContactFormHeader />
    <Pad>
      <Row>
        <Col lg={{ order: 2, span: 6 }} xs={12}>
          <ContactFormBody />
        </Col>
        <Col className="d-lg-flex align-items-center justify-content-center">
          <ContactInfo />
        </Col>
      </Row>
    </Pad>
  </>
)

export default ContactForm
