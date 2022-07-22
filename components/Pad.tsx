import type { ReactNode } from "react"
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"

import { SidePadding } from "lib/context/Home"

interface PadProps {
  children: ReactNode
}

const Pad = ({ children }: PadProps) => {
  const sidePadding = useContext(SidePadding)

  return (
    <Row>
      <Col
        css={`
          padding-inline: ${sidePadding};
        `}
      >
        {children}
      </Col>
    </Row>
  )
}

export default Pad
