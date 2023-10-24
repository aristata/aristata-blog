"use client"
import MoonSVG from "./svgs/Moon"
import SunSVG from "./svgs/Sun"

interface ThemeIconProps {
  theme?: string
}

const ThemeIcon = ({ theme }: ThemeIconProps) => {
  return <>{theme && theme === "light" ? <MoonSVG /> : <SunSVG />}</>
}

export default ThemeIcon
