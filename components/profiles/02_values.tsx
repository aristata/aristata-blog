"use client"

import { useState } from "react"

const Belief = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen((prev) => {
      return !prev
    })
  }
  return (
    <>
      <div className="flex flex-row space-x-2 items-center mb-2">
        {isOpen ? <span>📖</span> : <span>📙</span>}
        <h1
          className="text-4xl font-bold hover:cursor-pointer"
          onClick={onClickHandler}
        >
          개발자로서 가치관
        </h1>
      </div>
      {isOpen ? (
        <ul className="list-disc px-6">
          <li>
            디테일이 명품을 만든다
            <ul className="list-disc px-6">
              <li>이왕 만드는거 잘 만들고 싶다</li>
              <li>잘 만들어서 돈도 많이 벌고 싶다</li>
            </ul>
          </li>
          <li>
            칭찬은 고래도 춤추게 한다
            <ul className="list-disc px-6">
              <li>남에게 인정받는 걸 좋아한다</li>
            </ul>
          </li>
          <li>
            아 다르고 어 다르다
            <ul className="list-disc px-6">
              <li>말투는 그 사람의 지문이다</li>
            </ul>
          </li>
          <li>
            둥글게 모나게
            <ul className="list-disc px-6">
              <li>무의미한 다툼은 피하고 본다</li>
              <li>유의미한 다툼은 피하지 않는다</li>
            </ul>
          </li>
          <li>
            어차피 사람이 한다
            <ul className="list-disc px-6">
              <li>사람이 하는 일을 대체하는 서비스를 만드는 사람이지만,</li>
              <li>이 일 하는것은 사람이고,</li>
              <li>이 서비스를 사용하는 것도 사람이다</li>
              <li>
                사람 냄새 나게 개발하자
                <ul className="list-disc px-6">
                  <li>적당히 타협할 줄도 알아야 하고</li>
                  <li>소신을 지킬줄도 알아야 하며</li>
                  <li>결국 중용이 미덕 이더라</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      ) : null}
    </>
  )
}

export default Belief
