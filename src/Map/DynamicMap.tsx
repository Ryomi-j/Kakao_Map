import styled from "@emotion/styled";
import { ReactNode, useEffect, useRef, useState } from "react";
import { KakaoMapContext } from "../hooks/useMap";

interface DynamicMapProps {
	children: ReactNode;
}

const DynamicMap = (props: DynamicMapProps) => {
	const [map, setMap] = useState<kakao.maps.Map>();
	const kakaoMapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!kakaoMapRef.current) return;

		const { kakao } = window;

		const targetPoint = new kakao.maps.LatLng(33.450701, 126.570667);
		const options = {
			center: targetPoint,
			level: 3,
		};

		setMap(new window.kakao.maps.Map(kakaoMapRef.current, options));
	}, []);

	// DynamicMap 하위 컴포넌트는 map 객체에 접근 가능
	return (
		<>
			<Container>
				<Map ref={kakaoMapRef} />
			</Container>
			{map 
			? (
				<KakaoMapContext.Provider value={map}>
					{props.children}
					</KakaoMapContext.Provider>) 
			: (
				<div>지도 정보를 가져오지 못했습니다</div>
			)}
		</>
	);
};

const Container = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;

const Map = styled.div`
	position: static;
	width: 100%;
	height: 100%;
`;

export default DynamicMap;
