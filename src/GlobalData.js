import { createContext } from "react";

//createContext메서드로 전역으로 관리하 데이터 객체를 생성
const GlobalContext = createContext("기본 데이터");

//전역 데이터 객체를 내보냄
export default GlobalContext;
