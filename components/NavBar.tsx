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
  useScroll,
  useSpring
} from "framer-motion";

const scrollAnimationVariants = {
  top: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transition: {
      duration: 0.5
    }
  },
  darkTop: {
    backgroundColor: "rgba(17, 17, 17, 1)",
    transition: {
      duration: 0.5
    }
  },
  scroll: {
    backgroundColor: "rgb(255, 255, 255, 1)",
    transition: {
      duration: 0.5
    }
  },
  darkScroll: {
    backgroundColor: "rgba(17, 17, 17, 1)",
    transition: {
      duration: 0.5
    }
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
  const { scrollY, scrollYProgress } = useScroll();
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

  /*************************************************************************************************
   * 스크롤 이벤트 2
   *
   * - 스크롤 할때 진행률을 상단에 표시한다
   *************************************************************************************************/
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div
        className="fixed h-2.5 bg-red-600 origin-[0%] top-0 inset-x-0 z-10"
        style={{ scaleX }}
      ></motion.div>
      <motion.nav
        variants={scrollAnimationVariants}
        animate={navAnimation}
        initial={theme === "light" ? "top" : "darkTop"}
        className="sticky top-0 mx-auto max-w-2xl flex justify-center items-center gap-x-20 pt-4"
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
