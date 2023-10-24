"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const PrivateInformation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen((prev) => {
      return !prev
    })
  }
  return (
    <>
      <div className="flex flex-row space-x-2 items-center mb-2 ">
        {isOpen ? <span>📖</span> : <span>📕</span>}
        <h1
          className="text-4xl font-bold hover:cursor-pointer"
          onClick={onClickHandler}
        >
          개인 정보
        </h1>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >
          <div className="flex flex-row space-x-2">
            <span className="text-lg">이름:</span>
            <span className="text-lg">장성민</span>
          </div>
          <div className="flex flex-row space-x-2">
            <span className="text-lg">출생:</span>
            <span className="text-lg">1987년 05월 19일</span>
          </div>
          <div className="flex flex-row space-x-2">
            <span className="text-lg">MBTI:</span>
            <span className="text-lg">
              ISFJ (용감한 수호자) - 성격접합도 95%
            </span>
          </div>
          <Image
            src={"/images/me.jpg"}
            alt="myPicture"
            width={200}
            height={400}
            className="p-4"
          ></Image>
          <ul className="list-disc px-6">
            <li>
              <span>고백컨데 이 사진은 뽀샵되었음</span>
            </li>
            <li>
              <span>찍은지 10년 다되어감</span>
            </li>
            <li>
              <span>이때보다 30 kg 정도 찜 🍺</span>
            </li>
            <li>
              <span>그래서 요즘 최대 관심사는 운동 🏃‍♂️</span>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </>
  )
}

export default PrivateInformation
