"use client"

import { useState } from "react"

const Career = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen((prev) => {
      return !prev
    })
  }
  return (
    <>
      <div className="flex flex-row space-x-2 items-center mb-2">
        {isOpen ? <span>📖</span> : <span>📒</span>}
        <h1
          className="text-4xl font-bold hover:cursor-pointer"
          onClick={onClickHandler}
        >
          나의 커리어
        </h1>
      </div>
      {isOpen ? (
        <>
          <h1 className="text-2xl font-bold">학력사항</h1>
          <ul className="list-disc px-6">
            <li>2006.03 ~ 2013.08, 부산대학교</li>
            <ul className="list-disc px-6">
              <li>경제학 전공, 국제무역학 부전공</li>
              <li>학점 3.2/4.5</li>
            </ul>
            <li>2003.03 ~ 2006.02, 경원 고등학교</li>
          </ul>
          <hr className="m-1" />
          <h1 className="text-2xl font-bold">경력사항</h1>
          <ul className="list-disc px-6">
            <li>2021.10 ~ 현재, 옵타움플랫폼, PG 서비스 회사</li>
            <li>2021.07 ~ 2021.09, 앤디소프트</li>
            <li>2016.12 ~ 2021.02, 이멕스, 물류 서비스 회사</li>
          </ul>
          <hr className="m-1" />
          <h1 className="text-2xl font-bold">직업훈련 이수 이력</h1>
          <ul className="list-disc px-6">
            <li>2019.08 ~ 2019.08, 부산정보산업진흥원, Python Programming</li>
            <li>2018.03 ~ 2018.03, 부산정보산업진흥원, 리눅스 서버(기초)</li>
            <li>
              2017.01 ~ 2017.01, 부산정보산업진흥원, Node.js 활용 웹
              어플리케이션 개발
            </li>
            <li>
              2016.02 ~ 2016.12, 부산인재개발원 부산IT교육센터,
              NFC&amp;지능형센서응용
              <ul className="list-disc px-6">
                <li>
                  <strong>주요내용:</strong> Java, Android, JSP, Spring, PHP
                  학습
                </li>
              </ul>
            </li>
            <li>
              2015.01 ~ 2015.02, 그린컴퓨터아카데미 부산, 회계관리
              <ul className="list-disc px-6">
                <li>
                  <strong>주요내용:</strong> 재무회계 및 세무회계
                </li>
                <li>회계관리 1급 자격증 취득</li>
              </ul>
            </li>
            <li>
              2014.11 ~ 2014.12, 그린컴퓨터아카데미 부산, 경리회계
              <ul className="list-disc px-6">
                <li>
                  <strong>주요내용:</strong> 전산회계 및 전산세무 자격증 취득
                  과정
                </li>
                <li>전산회계 1, 2급 자격증 취득</li>
              </ul>
            </li>
          </ul>
        </>
      ) : null}
    </>
  )
}

export default Career
