export default function Home() {
  return (
    <>
      <div>
        <span className="text-3xl font-bold">{`"안녕하세요"`}</span>
      </div>
      <div className="mt-4 text-lg">
        <p>{`"반갑습니다", "좋은 하루 되세요", "오늘도 수고하셨습니다"`}</p>
        <p>제가 좋아 하는 말입니다</p>
        <p>세상은 혼자서 살아가기에 너무 혼란스러운 곳입니다</p>
        <p>그래서 나누고 교감하고 서로 보듬으며 그렇게 살고자 합니다</p>
        <p>이 블로그를 통해 많은 것을 나눌 수 있으면 좋겠습니다</p>
      </div>
      <div className="flex mt-4 ">
        <span className="text-xl">- 장성민, Aristata</span>
      </div>
      <hr className="h-1 m-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-300">
          <h3>a</h3>
        </div>
        <div className="bg-green-300">
          <h4>b</h4>
        </div>
      </div>
    </>
  );
}
