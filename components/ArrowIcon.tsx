import Image from "next/image"

import arrowIcon from "public/Home/arrow-icon.svg"

interface ArrowIconProps {
  word: string
}

const ArrowIcon = ({ word }: ArrowIconProps) => (
  <span
    css={`
      white-space: nowrap;
    `}
  >
    {word}
    <div
      css={`
        display: inline-block;
        margin-left: 1rem;

        span {
          vertical-align: middle;
          top: -2px;
        }
      `}
    >
      <Image alt="Flecha" layout="fixed" src={arrowIcon} />
    </div>
  </span>
)

export default ArrowIcon
