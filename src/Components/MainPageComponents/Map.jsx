import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const center = { lat: -1.9441, lng: 30.0619 };
const containerStyle = {
  width: "100%",
  height: "100vh"
};

function Map() {

  return (<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>

    <GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle}>
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
  );

}

export default Map;

