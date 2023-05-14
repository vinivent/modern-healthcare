import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import config from "./config"

const Map = ({ latitude, longitude }) => {
    const mapContainerStyle = {
        margin: "0 auto",
        marginTop: "20px",
        marginBottom: "5px",
        border: "1px solid #5dada5",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        height: "40vh",
        width: "80%",
        maxWidth: "800px",
      };
      
      

  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };

  return (
    <div className="h-max w-full">
      <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
    
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
