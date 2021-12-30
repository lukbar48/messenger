import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SendIcon(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 44 44"
      fill="none"
      {...props}
    >
      <Path
        d="M25.538 38.551a2 2 0 003.309-.774L39.029 7.644c.53-1.569-.966-3.065-2.535-2.535L6.361 15.29a2 2 0 00-.774 3.31l6.436 6.436a2 2 0 002.502.264l4.388-2.842c1.81-1.172 3.938.956 2.766 2.766l-2.842 4.388a2 2 0 00.264 2.502l6.437 6.436z"
        fill="#5603AD"
      />
    </Svg>
  )
}

export default SendIcon
