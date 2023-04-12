import { useLayoutEffect, useMemo } from "react";
import { PlaceType } from "./mapTypes";
import { useMap } from "../hooks/useMap";

interface MapMarkerProps {
	place: PlaceType;
}

const MapMarker = (props: MapMarkerProps) => {
	const map = useMap();

	const marker = useMemo(() => {
		const marker = new kakao.maps.Marker({
			position: props.place.position
		});

		return marker;
	}, []);

	useLayoutEffect(() => {
		marker.setMap(map); // 지도 위에 마커 표시

		return () => {
			marker.setMap(null);
		};
	}, [map]);

	return <></>;
};

export default MapMarker;
