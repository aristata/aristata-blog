"use client"

import { useState } from "react"

const License = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen((prev) => {
      return !prev
    })
  }
  return (
    <>
      <div className="flex flex-row space-x-2 items-center mb-2">
        {isOpen ? <span>📖</span> : <span>📘</span>}
        <h1
          className="text-4xl font-bold hover:cursor-pointer"
          onClick={onClickHandler}
        >
          보유 자격면허
        </h1>
      </div>
      {isOpen ? (
        <>
          <ul className="list-disc px-6">
            <li>정보처리기사, 한국산업인력공단, 2016.11.18</li>
            <li>워드프로세서 2, 3급, 대한상공회의소</li>
            <li>회계관리1급, 삼일회계법인</li>
            <li>전산회계1급, 한국세무사회</li>
            <li>전산회계2급, 한국세무사회</li>
            <li>자동차운전면허1종보통, 부산지방경찰청</li>
            <li>MCAS 2007 Master, Microsoft</li>
          </ul>
        </>
      ) : null}
    </>
  )
}

export default License
