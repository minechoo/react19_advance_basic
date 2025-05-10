import { createContext } from "react";

//초기 상태 설정
const initialState = { count: 0 };

//전역 컨텍스트 생성후 export (전역 상태)
export const GlobalContext = createContext(initialState);

//전역 컨텍스트값을 컴포넌트에 전달해주는 Wrapping형태의 Provider export
export function GlobalProvider({ children }) {
  return (
    <GlobalContext.Provider value={initialState}>
      {children}
    </GlobalContext.Provider>
  );
}
