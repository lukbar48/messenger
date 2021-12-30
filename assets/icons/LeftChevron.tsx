import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function LeftChevron(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      fill='#5603AD'
      viewBox="0 0 16 16"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
      />
    </Svg>
  )
}

export default LeftChevron
