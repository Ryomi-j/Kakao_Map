import { createContext, useContext } from "react";

// createContext 함수를 사용하여 KakaoMapContext라는 새로운 컨텍스트를 생성
// 이 컨텍스트는 kakao.maps.Map 객체나 null 값을 포함할 수 있다.
// 이렇게 생성된 컨텍스트는 KakaoMapContext.Provider 컴포넌트로 하위 컴포넌트에 컨텍스트 값을 제공
export const KakaoMapContext = createContext<kakao.maps.Map | null>(null);

export const useMap = () => {
	const kakaoMap = useContext(KakaoMapContext);

	if (!kakaoMap) {
		throw new Error("kakaoMap not found");
	}

	return kakaoMap;
};
