import { useContext } from "react"
import { Col } from "react-bootstrap"

import { BackgroundColor } from "components"
import { SidePadding } from "lib/context/Home"
import { md } from "lib/cssHelpers"

import Perk from "./Perk"
import perks from "./perks"

const Perks = () => {
  const sidePadding = useContext(SidePadding)

  return (
    <BackgroundColor
      color="var(--accent-dark)"
      css={`
        padding-block: 3rem;

        padding-inline: ${sidePadding};

        ${md`
          padding-inline: 3.5vw;
        `}
      `}
      isSingleRow
    >
      {perks.map((perk) => (
        <Col className="my-5" key={perk.title} md={6} xl={3} xs={12}>
          <Perk {...perk} />
        </Col>
      ))}
    </BackgroundColor>
  )
}

export default Perks
