import { ReactNode, useEffect, useState } from "react";

const KAKAO_MAP_SECRIPT_ID = "kakao-map-script";
const KAKAO_MAP_APP_KEY = "a8a09f4ca59edaf73d046aafce30f3f6";

interface KakaoMapScriptLoaderProps {
	children: ReactNode;
}

const KakaoMapScriptLoader = (props: KakaoMapScriptLoaderProps) => {
	const [mapScriptLoaded, setMapScriptLoaded] = useState(false);

	useEffect(() => {
		// <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>
		const script = document.createElement("script");
		script.id = KAKAO_MAP_SECRIPT_ID;

		// libraries=sevices : api 호출을 위함
		script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&libraries=services&autoload=false`;
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
