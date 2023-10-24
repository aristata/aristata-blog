"use client"

import Link from "next/link"
import ThemeIcon from "./ThemeIcon"
import HomeSVG from "./svgs/Home"
import IdentificationSVG from "./svgs/Identification"
import InboxesSVG from "./svgs/Inboxes"
import { useEffect, useState } from "react"

const NavBar = () => {
  /*************************************************************************************************
   * 테마
   *************************************************************************************************/
  const [theme, setTheme] = useState("light")
  const setDarkTheme = () => {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    setTheme("dark")
  }
  const setLightTheme = () => {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
    setTheme("light")
  }
  useEffect(() => {
    const localTheme = localStorage.getItem("theme")
    if (
      localTheme === "dark" ||
      (localTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  }, [])
  const handleTheme = () => {
    if (theme === "dark") {
      setLightTheme()
    } else {
      setDarkTheme()
    }
  }

  return (
    <>
      <header className="sticky top-0 mx-auto max-w-2xl flex justify-center items-center gap-x-20 mt-10">
        {/* 로고 */}
        <Link href={"/"}>
          <div className="p-4">
            <HomeSVG />
          </div>
        </Link>
        {/* 네비 메뉴 */}
        <Link href={"/profile"}>
          <div className="p-4">
            <IdentificationSVG />
          </div>
        </Link>
        <Link href={"/posts"}>
          <div className="p-4">
            <InboxesSVG />
          </div>
        </Link>

        {/* 테마 */}
        <button onClick={handleTheme} className="p-4">
          <ThemeIcon theme={theme} />
        </button>
      </header>
    </>
  )
}

export default NavBar
