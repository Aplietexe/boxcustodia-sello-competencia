import bank from "public/Home/Perks/bank.png"
import identity from "public/Home/Perks/identity.png"
import stamp from "public/Home/Perks/stamp.png"
import verification from "public/Home/Perks/verification.png"

const perks: {
  image: StaticImageData
  text: string
  title: string
}[] = [
  {
    image: identity,
    text: "Secuencia única de letras y números que vincula al firmante con un documento electrónico.",
    title: "Identidad digital",
  },
  {
    image: verification,
    text: "Permite la fácil identificación del autor y verificar si ese documento fue alterado.",
    title: "Fácil verificación",
  },
  {
    image: bank,
    text: "A través de este servicio, podrás realizar todo tipo de trámites con entidades públicas y privadas.",
    title: "Múltiples usos",
  },
  {
    image: stamp,
    text: "Permite la fácil identificación de la matricula/rol/cargo del autor y verificar si está o no habilitado para actuar.",
    title: "Sello Competencia",
  },
]

export default perks
