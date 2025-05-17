import { useState, useTransition } from "react";

export default function App() {
  const [InputValue, setInputValue] = useState("");
  const [MovieData, setMovieData] = useState([]);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInputValue(e.target.value);

    // 우선순위를 낮춰야 되는 상태 변경로직 자체를 startTransition에 콜백함수 형태로 전달
    // 해당 콜백 안쪽에 있는 상태 업데이트 로직은 우선순위가 낮게 설정됨
    // 화면에 긴급하게 반영해야되는 상태 변경에 영향을 미치지 않음
    startTransition(() => {
      const newData = [];
      for (let i = 0; i < 3000000; i++) {
        newData.push(i);
      }

      setMovieData(newData);
    });
  };

  return (
    <>
      <h1>useTransition</h1>

      <input type="text" value={InputValue} onChange={handleChange} />
      <p>{isPending ? "연산 처리중..." : "연산 완료"}</p>
    </>
  );
}

/*
  useTransition
  - 리액트 컴포넌트에 state값의 변경처리의 우선순위를 차등해서 긴급한 상태변경과, 덜 긴급한 상태변경사항을 관리하는 훅
  - useTransition으로 상태 업데이트의 순서의 우선 순위를 차등 적용해야 되는 사례
  - 폼요소에 입력값을 바탕으로 실시간으로 서버 데이터 호출 및 렌더링 해야될때

  - 작업순서1-인풋에 검색어 입력 -> 인풋요소에 입력하고 있는 검색내용이 출력됨
  - 작업순서2-인풋에 반영되고 있는 상태값에 따라 서버 데이터 fetching이나 기타 무거운 로직 수행
  - 작업순서3로직수행이 완료되면 완료된 데이터를 다시 새로운 상태에 담아서 화면에 출력

  위와 같은 순서의 작업을 할때 상태값이 2개 필요 (input출력용 상태값, 수행완료된 서버데이터를 화면에 출력용 상태값)
  -input용 상태값은 로직처리가 무겁지 않고 화면에 바로바로 반영해야 되는 데이터 (Urgent Update) 긴급 변경필요 데이터
  -서버 데이터 출력용 상태값은 로직처리가 무겁과 화면에 바로바로 출력할 필요가 없는 데이터 (Not Urgent Update) 비긴급 변경필요 데이터

  [강제로우선순위를 낮추 상태값의 변경완료유무, 특정 상태값의 우선순위를 낮추는 함수] = useTransition
  const [isPending, startTransition] = = useTransition()
*/
