import * as React from "react"
import Svg, { Circle, Mask, G, Path, SvgProps } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      {...props}
    >
      <Circle cx={32} cy={32} r={32} fill="#E9EAEE" />
      <Mask
        id="a"
        x={0}
        y={0}
        width={64}
        height={64}
      >
        <Circle cx={32} cy={32} r={32} fill="#E9EAEE" />
      </Mask>
      <G mask="url(#a)" fill="#BFC1CC">
        <Path d="M32 32c6.627 0 12-5.373 12-12S38.627 8 32 8s-12 5.373-12 12 5.373 12 12 12zM32 32c19.33 0 35 15.67 35 35s-15.67 35-35 35S-3 86.33-3 67s15.67-35 35-35z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
