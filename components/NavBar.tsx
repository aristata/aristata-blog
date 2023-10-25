"use client";

import Link from "next/link";
import ThemeIcon from "./ThemeIcon";
import HomeSVG from "./svgs/Home";
import IdentificationSVG from "./svgs/Identification";
import InboxesSVG from "./svgs/Inboxes";
import { useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll
} from "framer-motion";

const scrollAnimationVariants = {
  top: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  darkTop: {
    backgroundColor: "rgba(17, 17, 17, 1)"
  },
  scroll: {
    backgroundColor: "rgb(255, 255, 255, 1)"
  },
  darkScroll: {
    backgroundColor: "rgba(17, 17, 17, 1)"
  }
};

const NavBar = () => {
  /*************************************************************************************************
   * 테마
   *************************************************************************************************/
  const [theme, setTheme] = useState("light");
  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };
  const setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (
      localTheme === "dark" ||
      (localTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);
  const handleTheme = () => {
    if (theme === "dark") {
      setLightTheme();
      navAnimation.start("top");
    } else {
      setDarkTheme();

      navAnimation.start("darkTop");
    }
  };

  /*************************************************************************************************
   * 스크롤 이벤트
   *
   * - useAnimation 을 사용해서 navAnimation 만들기
   * - useViewportScroll 을 사용해서 scrollY 값 가져오기
   *   - useViewportScroll 은 deprecated 되었다
   *   - useScroll 을 사용할 것
   *************************************************************************************************/
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("scrollY: " + latest);
    // console.log("theme: " + theme);
    if (latest > 0) {
      if (theme === "light") {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("darkScroll");
      }
    } else {
      if (theme === "light") {
        navAnimation.start("top");
      } else {
        navAnimation.start("darkTop");
      }
    }
  });
  return (
    <>
      <motion.nav
        variants={scrollAnimationVariants}
        animate={navAnimation}
        initial={theme === "light" ? "top" : "darkTop"}
        className="sticky top-0 mx-auto max-w-2xl flex justify-center items-center gap-x-20 mt-10"
      >
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
      </motion.nav>
    </>
  );
};

export default NavBar;
