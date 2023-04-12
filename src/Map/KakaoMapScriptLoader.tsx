import { ReactNode, useEffect, useState } from "react";

const KAKAO_MAP_SCRIPT_ID = "kakao-map-script";
const KAKAO_MAP_APP_KEY = process.env.KAKAO_MAP_KEY

interface KakaoMapScriptLoaderProps {
	children: ReactNode;
}

const KakaoMapScriptLoader = (props: KakaoMapScriptLoaderProps) => {
	const [mapScriptLoaded, setMapScriptLoaded] = useState(false);
	
	useEffect(() => {
		// 이미 지도가 로드된 경우 처리
		const mapScript = document.getElementById(KAKAO_MAP_SCRIPT_ID);
		if (mapScript && !window.kakao) return;
		
		// <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>
		const script = document.createElement("script");
		script.id = KAKAO_MAP_SCRIPT_ID;
		
		// libraries=services : api 호출을 위함
		script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&libraries=services&autoload=false`
		console.log(script)
		script.onload = () => {
			window.kakao.maps.load(() => {
				setMapScriptLoaded(true);
			});
		};
		script.onerror = () => {
			setMapScriptLoaded(false);
		};

		document.getElementById("root")?.appendChild(script);
	}, []);
	return <>{mapScriptLoaded ? props.children : <div>지도를 가져오는 중입니다.</div>}</>;
};

export default KakaoMapScriptLoader;
