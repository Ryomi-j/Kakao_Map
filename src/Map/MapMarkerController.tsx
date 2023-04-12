import { useEffect } from "react";
import { useMap } from "../hooks/useMap";
import MapMarker from "./MapMarker";
import { PlaceType } from "./mapTypes";

interface MapMarkerControllerProps {
	places: PlaceType[];
	selectedPlaceId?: string;
}

const MapMarkerController = (props: MapMarkerControllerProps) => {
	const map = useMap();

	useEffect(() => {
		if (props.places.length < 1) return;

        const { kakao } = window;
		const bounds = new kakao.maps.LatLngBounds();
        
		props.places.forEach((place) => {
			bounds.extend(place.position);
		});
		map.setBounds(bounds);
	}, [props.places]);

	return (
		<>
			{props.places.map((place, index) => {
				return <MapMarker key={place.id} 
                                  index={index}
                                  place={place} 
                                  showInfo={props.selectedPlaceId === place.id} />;
			})}
		</>
	);
};

export default MapMarkerController;
