import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import { Container } from "react-bootstrap"

import {
  Authorities,
  Company,
  ContactForm,
  Footer,
  Header,
  Homologation,
  Navbar,
  Sidebar,
} from "components/Home"
import { SidePadding } from "lib/context/Home"

const Home: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Sello competencia</title>
        <meta
          content="Es un sello que acompaña a la firma digital de una persona física y a su vez estampa la matrícula profesional con la información del Colegio/ Consejo/ Entidad/ Persona Jurídica en el cual está matriculado."
          name="description"
        />
      </Head>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <SidePadding.Provider value="5.8vw">
        <Container fluid>
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
          <Header />
          <Homologation />
          <Authorities />
          <Company />
          <ContactForm />
          <Footer />
        </Container>
      </SidePadding.Provider>
    </>
  )
}

export default Home
