import Link from "next/link"
import MailSVG from "./svgs/Mail"
import GithubSVG from "./svgs/Github"

const Footer = () => {
  return (
    <>
      <footer className="mx-auto max-w-3xl font-mono flex flex-col justify-center items-center pt-10 pb-6 transition duration-500 bg-white dark:bg-[#111111] dark:text-white text-black">
        <div className="flex justify-center gap-4 items-center pt-4 border-t-2 w-36">
          <Link
            href="mailto:aristatait@gmail.com"
            className="hover:scale-110 transition-transform duration-500 hover:text-green-500 hover:fill-green-500 dark:fill-white dark:hover:fill-green-500"
          >
            <MailSVG />
          </Link>
          <Link
            href="https://github.com/aristata"
            className="hover:scale-110 transition-transform duration-500 hover:text-green-500 hover:fill-green-500 dark:fill-white dark:hover:fill-green-500"
          >
            <GithubSVG />
          </Link>
        </div>
        <div className="text-sm mt-2">Copyright © 2023 Aristata Jang</div>
      </footer>
    </>
  )
}

export default Footer
