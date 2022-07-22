import Image from "next/image"
import { useCallback, useContext } from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import Pad from "components/Pad"
import { SidePadding } from "lib/context/Home"
import type { SetState } from "lib/types"
import burgerIcon from "public/Home/Navbar/burger-icon.svg"
import loginIcon from "public/Home/Navbar/login-icon.svg"
import workflowLogo from "public/Home/Navbar/workflow-logo.svg"

const NavLinks = styled(Col)`
  justify-content: end;
  align-items: center;
  gap: 2rem;

  padding-inline: 2rem;

  a {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-color, var(--accent-dark));

    text-decoration: none;

    transition: all 0.4s;

    &:hover {
      transform: scale(1.05);
    }
  }
`

const ContactLink = styled.a`
  border-radius: var(--border-radius);
  background-color: var(--accent-light);
  --text-color: #fff;

  padding: 0.75rem 2rem;

  &:hover {
    background-color: var(--accent-dark);
  }
`

interface NavbarProps {
  setIsSidebarOpen: SetState<boolean>
}

const Navbar = ({ setIsSidebarOpen }: NavbarProps) => {
  const sidePadding = useContext(SidePadding)

  const handleBurgerClick = useCallback(() => {
    setIsSidebarOpen(true)
  }, [setIsSidebarOpen])

  return (
    <Pad>
      <Row className="pt-5">
        <Col className="d-flex align-items-end fs-1 ps-4 pb-2 d-xl-none" xs={2}>
          <Image
            alt="Abrir menú"
            layout="fixed"
            onClick={handleBurgerClick}
            role="button"
            src={burgerIcon}
          />
        </Col>
        <Col
          className="d-flex justify-content-center justify-content-xl-start"
          xl={5}
          xs={8}
        >
          <div
            css={`
              width: min(342px, 100%);
              height: auto;
            `}
          >
            <a href="#root">
              <Image
                alt="Workflow"
                layout="responsive"
                sizes={`(max-width: 593px) calc((100vw - ${sidePadding} * 2) * (2 / 3)),
                342w`}
                src={workflowLogo}
              />
            </a>
          </div>
        </Col>
        <Col
          className="d-flex align-items-end justify-content-end pe-4 pb-2 d-xl-none"
          xs={2}
        >
          <div
            css={`
              width: 2rem;
              cursor: pointer;
            `}
          >
            <Image alt="Ícono" layout="fixed" src={loginIcon} />
          </div>
        </Col>
        <NavLinks className="d-none d-xl-flex" xl={7}>
          <a href="#root">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#company">Nosotros</a>
          <ContactLink href="#contact-form">Contacto</ContactLink>
        </NavLinks>
      </Row>
    </Pad>
  )
}

export default Navbar
