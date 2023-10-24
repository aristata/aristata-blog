"use client"

import { useState } from "react"

const Project = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen((prev) => {
      return !prev
    })
  }
  return (
    <>
      <div className="flex flex-row space-x-2 items-center mb-2">
        {isOpen ? <span>📖</span> : <span>📗</span>}
        <h1
          className="text-4xl font-bold hover:cursor-pointer"
          onClick={onClickHandler}
        >
          참여 프로젝트 및 기술사항
        </h1>
      </div>
      {isOpen ? (
        <>
          <h3 className="text-2xl font-bold">옵타움 플랫폼</h3>
          <ul className="list-disc px-6">
            <li>
              2023.02 ~ 2023.05, <strong>코인 P2P 거래소 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: nextjs, swr, react-hook-form, recoil, mui, web3js,
                  solidity
                </li>
                <li>
                  허가받은 Seller 들을 등록하고, 불특정 다수의 Buyer 들에게 P2P
                  거래를 할 수 있는 사이트 개발
                </li>
                <li>
                  aws, docker, hobor, teamcity 등을 활용하여 개발 환경을 직접
                  구축함
                </li>
                <li>
                  awm, route53, loadbalancer 를 사용하여 도메인 획득 및 SSL 인증
                  처리까지 AtoZ 1인 개발
                </li>
                <li>04월 마지막 주 부터 프론트 팀원 2인 합류</li>
              </ul>
            </li>
            <li>
              2022.10 ~ 2023.02, <strong>국내 결제 솔루션 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: reactjs, react-query, react-hook-form, recoil, mui
                </li>
                <li>하기 개발 목록들은 본인이 직접 개발한 부분만 기술함</li>
                <li>어드민 청구금 관리 페이지 개발</li>
                <li>
                  어드민 알림 관리 페이지 및 클라이언트 알림 팝업, 페이지 개발
                </li>
                <li>
                  23년 1월: 가맹 계약서 레이아웃(HTML) 작업 및 PDF 변환,
                  다운로드 기능 개발
                </li>
              </ul>
            </li>
            <li>
              2022.10 ~ 현재, <strong>프론트엔드 프로젝트 유지보수</strong>
              <ul className="list-disc px-6">
                <li>
                  2022년 09월 부터 <strong>프론트엔드 파트장</strong>을 맡게
                  되어 사내 프론트엔드 프로젝트들에 대해 총괄하게 됨
                </li>
                <li>
                  해외 결제 솔루션
                  <ul className="list-disc px-6">
                    <li>Vuejs v2 기반의 정산 및 관리 솔루션</li>
                  </ul>
                </li>
                <li>
                  국내 결제 솔루션
                  <ul className="list-disc px-6">
                    <li>React 18 기반의 정산 및 관리 솔루션</li>
                    <li>개발 중</li>
                  </ul>
                </li>
                <li>
                  회사 홈페이지
                  <ul className="list-disc px-6">
                    <li>NextJs 기반의 홈페이지</li>
                  </ul>
                </li>
                <li>
                  블록체인 프로젝트
                  <ul className="list-disc px-6">
                    <li>NextJs, Web3, Binance 네트워크, Solidity</li>
                    <li>회사 보유 토큰관리</li>
                    <li>메타마스크 지갑연동 기능 및 지갑생성 기능</li>
                    <li>신규 토큰 및 토큰 결제 모듈 스마트컨트랙트</li>
                    <li>dynamoDB 를 사용한 결제 이력 저장 기능</li>
                    <li>정산 솔루션</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2022.09 ~ 2022.10, <strong>신입 사원 OJT 교육</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: reactjs, react-query, react-hook-form, react-table,
                  nextjs, prisma
                </li>
                <li>
                  상기 기술들의 사용법 교육 및 교보재로 활용할 샘플 프로젝트들
                  작성
                </li>
                <li>출석부 (CRUD)</li>
                <li>상품 관리 사이트 (CRUD + 테이블 및 페이징)</li>
                <li>영화 포스터 조회 사이트 (API 통신)</li>
                <li>
                  교육은 안했지만 추가로 GraphQL, Recoil 샘플 프로젝트도 만듦
                </li>
              </ul>
            </li>
            <li>
              2022.08, <strong>국내 결제 솔루션 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: reactjs, react-query, react-hook-form, recoil, mui
                </li>
                <li>매입 내역 목록 및 상세 조회 페이지</li>
                <li>정산 캘리더</li>
              </ul>
            </li>
            <li>
              2022.06, <strong>Domex payment 정산 솔루션 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: reactjs, nextjs, AWS DynamoDB, teamcity, web3
                </li>
                <li>
                  Domex payment 모듈을 사용하여 발생한 결제 히스토리를 조회하고,
                  수수료 관리, 정산 인보이스 다운로드 기능 등을 제공하는 솔루션
                </li>
              </ul>
            </li>
            <li>
              2022.04 ~ 2022.05,{" "}
              <strong>Domexcoin 및 DomexTransfer 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  BEP20 기반 사내 토큰 domexcoin 개발, domexcoin 을 사용하여
                  결제하는 DApp 개발
                </li>
                <li>
                  사용 기술: solidity, truffle, reactjs, nextjs, AWS DynamoDB,
                  web3
                </li>
                <li>팬케이크 스왑에 domex 토큰 등록</li>
                <li>팬케이크 스왑에 domex 토큰 풀 생성</li>
                <li>DomexTransfer 는 도맥스 코인으로 결제시 사용하는 DApp</li>
              </ul>
            </li>
            <li>
              2022.02 ~ 2022.04, <strong>블록체인 결제 시스템 개발</strong>
              <ul className="list-disc px-6">
                <li>블록체인을 활용한 결제 시스템 개발 시작</li>
                <li>기획 및 블록체인 환경 연구 및 공유</li>
                <li>솔라나 기반 → 클레이튼 기반</li>
                <li>토큰 개발 및 간단한 BApp 개발</li>
              </ul>
            </li>
            <li>
              2022.01, <strong>국내 결제 시스템 개발</strong>
              <ul className="list-disc px-6">
                <li>국내 결제 시스템 개발 참여</li>
                <li>사용 기술: kotlin, spring boot, postgreSQL, vuejs</li>
              </ul>
            </li>
            <li>
              2021.12 ~ 2022.01,{" "}
              <strong>PG 솔루션(해외 결제 솔루션) 3차 개선 작업</strong>
              <ul className="list-disc px-6">
                <li>사내 솔루션 피드백에 대한 개선 작업 처리</li>
                <li>
                  사용 기술: kotlin, spring boot, postgreSQL, spring rest docs,
                  vuejs
                </li>
              </ul>
            </li>
            <li>
              2021.12, <strong>정산 지급 일괄 처리 서비스 개선</strong>
              <ul className="list-disc px-6">
                <li>
                  사내 솔루션 정산 지급 서비스 로직이 건별 처리만 가능하도록
                  되어 있었는데, 일괄 처리가 가능하도록 수정하며 해당 페이지를
                  개편함
                </li>
                <li>
                  디비 테이블 부터 전부 수정이 되어야 하는 상황이기 때문에 최신
                  데이터와 과거 데이터의 테이블을 분리하여 작업함
                </li>
                <li>
                  사용 기술: kotlin, spring boot, postgreSQL, spring rest docs,
                  vuejs
                </li>
                <li>2인 개발, PL, 업무 관리는 노션, 공유는 대면</li>
                <li>
                  문서 자동화 기술 (spring rest docs, swagger) 테스트 도입 후
                  장단점 개발팀 공유
                </li>
              </ul>
            </li>
            <li>
              2021.11, <strong>Transaction Audit 서비스 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  매입사 데이터, 우리회사 데이터, Visa 결제 데이터 등을 상호
                  비교하여 데이터를 검증 하는 서비스 개발
                </li>
                <li>사용 기술: postgreSQL, spring boot, spring scheduler</li>
              </ul>
            </li>
            <li>
              2021.11, <strong>Visa cybersource API 연동 서비스 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  visa 카드 솔루션과 api 연동을 하여 매일 결제 정보를 가져오는
                  서비스 개발
                </li>
                <li>사용 기술: postgreSQL, spring boot, spring scheduler</li>
                <li>단독 개발</li>
                <li>개발 및 테스트 기간 2주</li>
              </ul>
            </li>
            <li>
              2021.10, <strong>해외결제 시스템 로그 수집 서비스 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  솔루션 프로그램에서 발생하는 request 를 인터셉트하여 디비에
                  데이터를 축적하고, 시스템 에러를 감지하여 사내 메신저 및
                  이메일로 전달하는 서비스 개발
                </li>
                <li>
                  사용 기술: mongoDB, spring aspect, spring reactive web,
                  docker, teams &amp; email webhook
                </li>
                <li>단독 개발</li>
                <li>개발 및 테스트 기간 2주</li>
              </ul>
            </li>
          </ul>
          <hr className="m-2" />
          <h3 className="text-2xl font-bold">엔디소프트</h3>
          <ul className="list-disc px-6">
            <li>
              2021.07 ~ 2021.09, 모바일 SNS 개발 참여
              <ul className="list-disc px-6">
                <li>서비스 내용: 회사내 차세대 머신러닝 SNS 개발 참여</li>
                <li>
                  특이 사항:
                  <ul className="list-disc px-6">
                    <li>
                      백엔드 담당으로 취업하였으나 약 3개월간 기획 및 테스트
                      업무를 맡음
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <hr className="m-2" />
          <h3 className="text-2xl font-bold">이멕스</h3>
          <ul className="list-disc px-6">
            <li>
              2020.12 ~ 2021.02, <strong>사내 모든 프로젝트 유지 보수</strong>
              <ul className="list-disc px-6">
                <li>회사내에서 서비스하는 모든 프로젝트의 유지보수 전담</li>
                <li>
                  특이 사항:
                  <ul className="list-disc px-6">
                    <li>
                      회사 경영 악화로 나와 부사수, 총원 2인으로 유지보수 작업
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2020.10 ~ 2020.11, <strong>쉬핑맨 직접배송 관리 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용기술: VueJs, BootstrapVue, AWS eb, AWS s3, Java, Kotlin,
                  SpringBoot, Spring5 MVC, Spring5 WebFlux, JPA
                </li>
                <li>
                  서비스 내용: 고객이 우리 배송 대행 서비스를 이용하지 않고,
                  나머지 시스템만 사용하고 싶은 경우를 위해 shippingman 에 추가
                  기능을 개발
                </li>
                <li>
                  특이 사항:
                  <ul className="list-disc px-6">
                    <li>프로젝트 리딩</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2019.07 ~ 2021.02,{" "}
              <strong>
                Simple Global 사 Billing 자동화 시스템 고도화 및 운영
              </strong>
              <ul className="list-disc px-6">
                <li>특이 사항: 빌링 파트 유지보수 혼자서 전담</li>
                <li>
                  주로 하는 업무:
                  <ul className="list-disc px-6">
                    <li>성능개선, 잘못된 로직 수정 등</li>
                    <li>주기적으로 인보이스 생성 및 출력, 회계팀에 전달</li>
                    <li>
                      미국, 인도네시아 등 simple global 사 IT, 회계팀과 업무
                      협력 창구
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2020.07 ~ 2020.09,{" "}
              <strong>crossborders 배송 대행 프론트엔드 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: VueJs, BootstrapVue, AWS eb, AWS s3, Java, Kotlin,
                  SpringBoot, Spring5 MVC, Spring5 WebFlux, JPA
                </li>
                <li>
                  서비스 개요: 화면없이 백엔드만 존재했던 shippingman 의
                  프론트엔드 개발
                </li>
                <li>
                  특이 사항:
                  <ul className="list-disc px-6">
                    <li>프로젝트 리딩</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2020.05 ~ 2020.07, <strong>crossborders 요금 설정 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS eb, AWS s3, Kotlin, SpringBoot, Spring5
                  WebFlux, JPA, VueJs, BootstrapVue
                </li>
                <li>
                  서비스 개요: billingman 에서 요금 계산의 근거가 되는 요금표를
                  등록, 수정, 관리할 수 있는 종합적인 서비스 개발
                </li>
                <li>
                  특이 사항:
                  <ul className="list-disc px-6">
                    <li>프로젝트 리딩</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2020.02 ~ 2020.05, <strong>crossborders billingman 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS eb, AWS s3, Kotlin, SpringBoot, Spring5
                  WebFlux, JPA, VueJs, BootstrapVue
                </li>
                <li>
                  서비스 개요: 정산 집계, 인보이스 이의제기, PG 연동 등
                  정산시스템 개발
                </li>
                <li>
                  특이 사항:
                  <ul className="list-disc px-6">
                    <li>프로젝트 리딩</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2019.10 ~ 2020.02,{" "}
              <strong>Delibird(~man) 서비스 고도화 작업</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS eb, AWS s3, Kotlin, SpringBoot, Spring5
                  WebFlux, JPA, VueJs, BootstrapVue
                </li>
                <li>
                  서비스 개요: 그동안 개발했던 delibird 서비스들의 문제점들을
                  해결하고, refactoring 이 필요한 코드들을 수정하는 프로젝트
                </li>
              </ul>
            </li>
            <li>
              2019.10 ~ 2019.10, <strong>Delibird fileman 서비스 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS eb, AWS s3, Kotlin, SpringBoot, Spring5
                  WebFlux, JPA
                </li>
                <li>
                  서비스 개요: 각 서비스 마다 반복적으로 사용되는 파일 업로드
                  기능을 분리하여 api 를 통해 파일업로드를 쉽게 할 수 있도록
                  만든 서비스
                </li>
                <li>특이사항: 1인 개발</li>
              </ul>
            </li>
            <li>
              2019.09 ~ 2019.09, <strong>firebear 서비스 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: VueJs, BootstrapVue, AWS eb, AWS s3, Kotlin,
                  SpringBoot, Spring5 WebFlux, JPA
                </li>
                <li>서비스 개요: 러시아 물류 대행 서비스 개발</li>
                <li>
                  특이사항:
                  <ul className="list-disc px-6">
                    <li>
                      회사에 기획팀이 생겨서 기획팀이 작성한 스토리 보드를
                      바탕으로 개발을 진행
                    </li>
                    <li>백엔드 보다 프론트엔드의 비중이 높았던 프로젝트</li>
                    <li>신규 직원 2인을 교육하면서 개발에 참여</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2019.07 ~ 2019.08, <strong>Delibird Label 서비스 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS eb, AWS s3, Kotlin, SpringBoot, Spring5
                  WebFlux, JPA
                </li>
                <li>
                  서비스 개요: 각각의 운송사 api 와 연동하여 실제 배송에서
                  사용할 수 있는 라벨을 생성 하고, 출력할 수 있는 서비스 개발
                </li>
                <li>
                  특이사항:
                  <ul className="list-disc px-6">
                    <li>
                      scala 언어로 이미 개발이 되어 있었던 프로젝트를 kotlin
                      언어로 converting 하는 작업이 대부분
                    </li>
                    <li>refactoring 에 초점이 맞추어진 프로젝트</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2019.04 ~ 2019.06, <strong>Delibird Crowdman 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS eb, AWS s3, AWS sqs, Kotlin, SpringBoot,
                  Spring5 WebFlux, JPA, VueJs, BootstrapVue
                </li>
                <li>
                  서비스 개요: Crowd 펀딩 참가자들에게 생산 상태 및 배송 상태
                  정보를 추적, 보여주는 시스템
                </li>
                <li>
                  특이사항:
                  <ul className="list-disc px-6">
                    <li>주로 백엔드 개발을 담당</li>
                    <li>
                      Freshdesk 와 연동하여 고객과 채팅(반쯤 실시간)을 할 수
                      있는 기능 개발
                    </li>
                    <li>Buyerportalman 프로젝트와 동시 진행</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2019.04 ~ 2019.06, <strong>Delibird Buyerportalman 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS elastic beanstalk, AWS s3, AWS sqs, Kotlin,
                  SpringBoot, Spring5 WebFlux, JPA, VueJs, BootstrapVue
                </li>
                <li>
                  서비스 개요: 상품 구매자가 보는 주문 상세 페이지를 상품
                  판매자가 커스터 마이징 한대로 자동으로 만들어 주는 시스템
                </li>
                <li>
                  특이사항:
                  <ul className="list-disc px-6">
                    <li>주로 백엔드 개발을 담당</li>
                    <li>VueJs 를 사용한 프론트엔드 개발 일부 참여</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2019.02 ~ 2019.03, <strong>Delibird Billingman 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS elastic beanstalk, AWS s3, Kotlin, SpringBoot,
                  Spring5 WebFlux, JPA
                </li>
                <li>
                  서비스 개요: 레이블 생성 시 개별 요금 계산 및 청구서 작성
                  시스템
                </li>
                <li>
                  특이사항:
                  <ul className="list-disc px-6">
                    <li>백엔드 전담</li>
                    <li>마이크로 서비스 적용</li>
                    <li>
                      화면은 청구서 목록만 보여주고, 백엔드에서 청구서만
                      주기적으로 생성되도록 하는 임시적인 프로젝트
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2018.12 ~ 2019.01,{" "}
              <strong>OnePortal Shipment Register 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS elastic beanstalk, Kotlin, SpringBoot, Spring
                  Data Rest, VueJs, JPA
                </li>
                <li>
                  서비스 개요: 연동되지 않은 타 캐리어에서 레이블 출력 시
                  수동으로 One Portal 에 Shipment 를 등록하는 기능
                </li>
                <li>
                  특이사항:
                  <ul className="list-disc px-6">
                    <li>1인 개발</li>
                    <li>네덜란드 창고 및 부산 창고 전용 기능</li>
                    <li>VueJs 처음으로 사용</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2018.08 ~ 2018.09,{" "}
              <strong>Simple Global 사 Billing Invoice Generator 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS elastic beanstalk, AWS s3, Kotlin, SpringBoot,
                  JPA
                </li>
                <li>
                  서비스 개요: 빌링 계산 결과물들을 각 셀러별, 종목별로
                  이합집산하여 엑셀 파일의 인보이스를 생성하는 시스템
                </li>
              </ul>
            </li>
            <li>
              2018.04 ~ 2018.06,{" "}
              <strong>Simple Global 사 Billing 자동화 시스템 개발</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: AWS elastic beanstalk, AWS s3, Kotlin, SpringBoot,
                  Spring Data Rest, RestTemplate, JPA
                </li>
                <li>
                  서비스 개요: 축적된 shipment 정보를 기반으로 요금을 계산하는
                  시스템
                </li>
                <li>
                  특이 사항:
                  <ul className="list-disc px-6">
                    <li>백엔드 전담</li>
                    <li>회사에 최초로 kotlin, JPA 도입</li>
                    <li>선행 학습 후 개발기간 중 팀원들에게 스킬 공유</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2017.04 ~ 2018.03, <strong>One Portal 유지 보수</strong>
              <ul className="list-disc px-6">
                <li>
                  사용 기술: Java, Spring, JSP, Scala, Scalatags, Thymeleaf
                </li>
                <li>
                  서비스 개요: 회사 내 핵심 서비스인 One Portal 의 유지보수
                  팀에서 일을 함
                </li>
                <li>
                  내가 담당했던 주요 이슈들:
                  <ul className="list-disc px-6">
                    <li>
                      스트러츠 기반의 기존 코드들을 스프링으로 변환하는 작업
                    </li>
                    <li>자바 코드들을 스칼라 코드로 변환하는 작업</li>
                    <li>물류 창고 이슈 처리</li>
                    <li>데이터베이스 데이터 기반 리포트 조회 및 문서화 작업</li>
                    <li>신규 고객 세팅</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              2017.01 ~ 2017.03,{" "}
              <strong>TMS (Truck Management System) 개발</strong>
              <ul className="list-disc px-6">
                <li>사용 기술: Java, Spring, Spring Security, Google Map</li>
                <li>
                  서비스 개요: 위치 추적 장치의 데이터를 기반으로 현재 트럭의
                  위치, 도착 순서 등을 관리하는 시스템 개발
                </li>
                <li>
                  내가 맡은 파트:
                  <ul className="list-disc px-6">
                    <li>로그인 및 권한 설정 기능 개발</li>
                    <li>대시보드 페이지 및 얼럿 기능 개발</li>
                    <li>구글 맵을 이용하여 현재 위치 추적 기능 개발</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </>
      ) : null}
    </>
  )
}

export default Project
