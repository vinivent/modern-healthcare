import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import config from "./config";

const Map = ({ markers }) => {
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

  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMarkerClick = (index) => {
    setSelectedMarkerIndex(index);
  };

  const handleMarkerClose = () => {
    setSelectedMarkerIndex(null);
  };

  useEffect(() => {
    const updateMarkerAddress = async () => {
      if (selectedMarkerIndex !== null) {
        setLoading(true);

        const marker = markers[selectedMarkerIndex];
        const geocoder = new window.google.maps.Geocoder();
        const latlng = { lat: marker.lat, lng: marker.lng };

        geocoder.geocode({ location: latlng }, (results, status) => {
          setLoading(false);

          if (status === "OK" && results[0]) {
            const address = results[0].formatted_address;
            markers[selectedMarkerIndex].address = address;
            setSelectedMarkerIndex(selectedMarkerIndex); // Atualiza o estado para forçar a renderização do InfoWindow
          }
        });
      }
    };

    updateMarkerAddress();
  }, [selectedMarkerIndex, markers]);

  return (
    <div className="h-max w-full">
      <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={markers[0]} zoom={13}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              onClick={() => handleMarkerClick(index)}
            >
              {selectedMarkerIndex === index && (
                <InfoWindow onCloseClick={handleMarkerClose}>
                  <div>
                    <h2>Localização</h2>
                    {loading ? (
                      <p>Carregando endereço...</p>
                    ) : (
                      <p>Endereço: {marker.address}</p>
                    )}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
