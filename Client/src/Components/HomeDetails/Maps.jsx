import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
} from "react-map-gl";

const Maps = ({ house }) => {
  return (
    <div className="overflow-hidden">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiMTdhcHB1IiwiYSI6ImNsZ3E4eWFhcDBuNTAzZm1tY3pvdWo4MnMifQ.HHNhvBk9_47ueK0ECAzRUA"
        style={{
          width: "99vw",
          height: "100vh",
          overflow: "hidden",
        }}
        initialViewState={{
          longitude: house.lng,
          latitude: house.lat,
          zoom: 6,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={house.lng} latitude={house.lat} />
        <NavigationControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default Maps;
