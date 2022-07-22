import { useCallback } from "react"
import { stack as Menu } from "react-burger-menu"

import type { SetState } from "lib/types"

import Styles from "./styles"

interface SidebarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: SetState<boolean>
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const handleClose = useCallback(() => {
    setIsSidebarOpen(false)
  }, [setIsSidebarOpen])

  return (
    <Styles>
      <Menu isOpen={isSidebarOpen} onClose={handleClose}>
        <a href="#root" onClick={handleClose}>
          Inicio
        </a>
        <a href="#services" onClick={handleClose}>
          Servicios
        </a>
        <a href="#company" onClick={handleClose}>
          Nosotros
        </a>
        <a className="inverted" href="#contact-form" onClick={handleClose}>
          Contacto
        </a>
      </Menu>
    </Styles>
  )
}
export default Sidebar
