import { useActionState } from 'react';

//서버에서 전달받은 폼값을 이용해서 로그인 정보를 반환하는 테스트 함수
async function loginAction(prevState, formData) {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const username = formData.get('username');
	const pwd = formData.get('pwd');

	if (username === 'admin' && pwd === '1234') {
		return { message: '로그인 성공' };
	} else {
		return { message: '로그인 실패' };
	}
}

export default function App() {
	//useActionState훅을 호출시 서버응답 요청함수를 첫 번재 인수로 전달하고 응답받을 state의 초기값을 두번째 인수로 전달해서 호출
	//해당 훅은 다음의 데이터 반환 [응답받은 상태값, 폼의 내용을 전달하는 전달 함수]

	//useActionState 훅의 장점
	//많은 폼 데이터를 서버로 전달시 불필요한 state생성 필요 없음
	//서버에서 응답받은 데이터를 화면에 출력하기 위해서 useEffect 호출 필요 없음
	//useEffect안쪽에서 응답된 데이터를 다시 state에 옮겨담을 필요 없음
	const [State, formAction] = useActionState(loginAction, { message: '' });

	return (
		<>
			<form action={formAction}>
				<input type='text' name='username' placeholder='아이디' required />
				<input type='password' name='pwd' placeholder='비밀번호' required />
				<button type='submit'>로그인</button>
				<p>{State.message}</p>
			</form>
		</>
	);
}
