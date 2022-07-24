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

export default contactOptions
