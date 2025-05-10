import { createContext, useReducer } from "react";

//초기 상태 설정
const initialState = { count: 0 };

//전역 컨텍스트를 변형시키는 리듀서 함수 생성
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error(`알수없는 액션: ${action.type}`);
  }
}

//빈 전역 컨텍스트 생성
const GlobalContext = createContext();

//전역 컨텍스트값을 컴포넌트에 전달해주는 Wrapping형태의 Provider export
export function GlobalProvider({ children }) {
  // const [변경된 전역상태값, 전역상태 변경함수] = useReducer(리듀서함수, 전역상태에 담길 초기값)
  const [GlobalState, dispatch] = useReducer(reducer, initialState);
  return (
    //해당 컴포넌트로 루트 컴포넌트인 App을 감싸면 value를 통해
    //useReducer가 반환하는 전역상태값과, 전역상태 변경전용함수를 다시 객체로 묶어서 하위 컴포넌트에 전달
    <GlobalContext.Provider value={{ GlobalState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

// 추가적으로 전역 컨텍스트를 자식 컴포넌트에서 자유롭게 호출 가능하도록 export
export { GlobalContext };
