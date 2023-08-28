import * as React from "react"
import Svg, { SvgProps, G, Circle, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CircularBorder = ({color="#0F6", ...props}: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 46 46"
    {...props}
  >
    <G filter="url(#a)">
      <Circle
        cx={23}
        cy={23}
        r={22}
        stroke={color}
        strokeDasharray="22 2.93"
        strokeLinecap="round"
        strokeWidth={2}
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default CircularBorder;
