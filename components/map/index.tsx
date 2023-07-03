import { Map, View } from "ol";
import Fullscreen from "ol/control/FullScreen";
import olms from "ol-mapbox-style";
import { transform } from "ol/proj";
import { useEffect, useRef } from "react";

const MapComponent = ({ mapIsReadyCallback }: { mapIsReadyCallback: any }) => {
  const mapContainer = useRef(null);
  useEffect(() => {
    const initialState = {
      lng: 107.6186,
      lat: -6.8935,
      zoom: 15,
    };

    const myAPIKey = "bac12cfd6f0a4b6cb40a061fcf72f581";
    const mapStyle = "https://maps.geoapify.com/v1/styles/positron/style.json";
    // const API_URL = `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat%3A${initialState.lng}%2C${initialState.lat}&zoom=${initialState.zoom}&marker=lonlat%3A${initialState.lng}%2C${initialState.lat}%3Btype%3Aawesome%3Bcolor%3A%23bb3f73%3Bsize%3Ax-large%3Bicon%3Apaw%7Clonlat%3A-122.29282631194182%2C47.549609195001494%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome%7Clonlat%3A-122.28726954893025%2C47.541766557545884%3Btype%3Amaterial%3Bcolor%3A%234c905a%3Bicon%3Atree%3Bicontype%3Aawesome&apiKey=${myAPIKey}`;

    const API_URL = `https://maps.geoapify.com/v1/styles/osm-liberty/style.json?apiKey=${myAPIKey}`;
    // install ol-mapbox-style plugin

    // olms(mapContainer.current!, `${mapStyle}?apiKey=${myAPIKey}`).then(
    olms(mapContainer.current!, API_URL).then((map: Map) => {
      map
        .getView()
        .setCenter(
          transform(
            [initialState.lng, initialState.lat],
            "EPSG:4326",
            "EPSG:3857"
          )
        );
      map.getView().setZoom(initialState.zoom);

      mapIsReadyCallback(map);
    });
  }, [mapContainer.current]);
  return <div className="h-screen w-screen" ref={mapContainer}></div>;
};

export default MapComponent;
