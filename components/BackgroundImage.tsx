import Image from "next/image"

interface BackgroundImageProps {
  src: StaticImageData
}

const BackgroundImage = ({ src }: BackgroundImageProps) => (
  <Image
    alt=""
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    quality={100}
    src={src}
    style={{ zIndex: -1 }}
  />
)

export default BackgroundImage
