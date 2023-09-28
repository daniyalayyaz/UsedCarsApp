import React, { useState } from "react";
import { GoogleMap, LoadScript, Rectangle } from "@react-google-maps/api";

const MapContainer = ({ zipcode }) => {
  const [bounds, setBounds] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 40.850033,
    lng: -85.6500523,
  };

  const onMapLoad = (map) => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps JavaScript API not loaded!");
      return;
    }
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: zipcode }, (results, status) => {
      if (status === "OK") {
        console.log("see results by zipcode ", results);
        setBounds(results[0].geometry.bounds);
        map.fitBounds(results[0].geometry.bounds);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAMPIB7N3g5CHZq7C3O-d-1oCGOgxuX9Vw"
      id="8d2ffab78a939178"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        // zoom={10}
        onLoad={onMapLoad}
      >
        {bounds && (
          <Rectangle
            bounds={bounds}
            options={{
              fillColor: "#FF0000",
              fillOpacity: 0.35,
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 1,
              zIndex: 1,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
