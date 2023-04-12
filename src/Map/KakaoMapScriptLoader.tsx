import { useEffect } from "react";

const KAKAO_MAP_SECRIPT_ID = "kakao-map-script";
const KAKAO_MAP_APP_KEY = 'a8a09f4ca59edaf73d046aafce30f3f6'

const KakaoMapScriptLoader = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.id = KAKAO_MAP_SECRIPT_ID;
		script.src = `https://dapi.kakao.com/v2/maps/sdk.js?apikey=${KAKAO_MAP_APP_KEY}f&libraries=sevices&autoload=false`;
        script.onload = () => {
            window.kakao.maps.load(() => {})
        }
        script.onerror = () => {}

        document.getElementById('root')?.appendChild(script)
	}, []);
	return <div>앱</div>;
};

export default KakaoMapScriptLoader;
