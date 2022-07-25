import Image from "next/image"

interface PerkProps {
  image: StaticImageData
  text: string
  title: string
}

const Perk = ({ image, text, title }: PerkProps) => (
  <div className="text-md-center text-white">
    <Image alt="" src={image} />
    <h3
      css={`
        font-size: 2rem;
        font-weight: 600;
        padding-block: 1rem 1.5rem;
      `}
    >
      {title}
    </h3>
    <p
      css={`
        font-size: 1.5rem;
        font-weight: 300;
      `}
    >
      {text}
    </p>
  </div>
)

export default Perk
