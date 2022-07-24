import one from "public/Home/Process/1.svg"
import two from "public/Home/Process/2.svg"
import three from "public/Home/Process/3.svg"
import four from "public/Home/Process/4.svg"
import five from "public/Home/Process/5.svg"

const steps: {
  alt: string
  color?: string
  image: StaticImageData
  text: JSX.Element
}[] = [
  {
    alt: "Uno",
    color: "#76C04F",
    image: one,

    text: (
      <>
        <strong>Alta masiva</strong> de los matriculados/ profesionales.
      </>
    ),
  },
  {
    alt: "Dos",
    color: "#2D81C0",
    image: two,

    text: (
      <>
        <strong>Log in</strong> de los matriculados/ profesionales.
      </>
    ),
  },
  {
    alt: "Tres",
    color: "#EA2F64",
    image: three,

    text: (
      <>
        <strong>Solicitud</strong> de Sello de Competencia.
      </>
    ),
  },
  {
    alt: "Cuatro",
    color: "#FBA440",
    image: four,

    text: (
      <>
        <strong>Aprobación</strong> de la solicitud.
      </>
    ),
  },
  {
    alt: "Cinco",
    image: five,

    text: (
      <>
        ¡Listos para <strong>firmar y sellar</strong>!
      </>
    ),
  },
]

export default steps
