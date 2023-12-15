import * as React from "react";
import Svg, { Rect } from "react-native-svg";
export const SVGIFPE = ({ props }: { props?: any }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 124 124"
    fill="none"
    {...props}
  >
    <Rect width={124} height={124} rx={24} fill="#35972E" />
    <Rect width={12} height={12} x={42} y={32} rx={20} ry={220} fill="red" />
    <Rect width={12} height={12} x={56} y={32} rx={2} ry={2} fill="#FFFF" />
    <Rect width={12} height={12} x={70} y={32} rx={2} ry={2} fill="#FFFF" />
    <Rect width={12} height={12} x={42} y={46} rx={2} ry={2} fill="#FFFF" />
    <Rect width={12} height={12} x={56} y={46} rx={2} ry={2} fill="#FFFF" />
    <Rect width={12} height={12} x={42} y={60} rx={2} ry={2} fill="#FFFF" />
    <Rect width={12} height={12} x={56} y={60} rx={2} ry={2} fill="#FFFF" />
    <Rect width={12} height={12} x={70} y={60} rx={2} ry={2} fill="#FFFF" />
    <Rect width={12} height={12} x={42} y={74} rx={2} ry={2} fill="#FFFF" />
    <Rect width={12} height={12} x={56} y={74} rx={2} ry={2} fill="#FFFF" />
  </Svg>
);
