import { useContext } from "react";
import { GlobalContext } from "./GlobalProvider";

export default function Header() {
  //자식 컴포넌트에서는 useContext로 전역 컨텍스트 값 호출 가능
  const { GlobalState, dispatch } = useContext(GlobalContext);
  console.log(GlobalState);
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}
