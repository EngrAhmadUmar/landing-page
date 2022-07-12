import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import Image from "next/image";
import Link from "next/link";

const markers = [
  {
    id: 1,
    name: "Gorilla Lake in Gisenyi",
    position: {lat: -1.70278, lng: 29.25639},
    image: "/sample-pic.jpeg",
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }, 
  {
    id: 2,
    name: "Akagera National Park",
    position: {lat: -1.6333308, lng: 30.7833302},
    image: "/akagera.jpg",
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "

  },
  {
    id: 3,
    name: "Fazenda Sengha",
    position: {lat: -1.6154808935029508, lng: 29.945828955849198},
    image: "/fazhenda.jpg",
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

  },
  {
    id: 4,
    name: "Gorilla Nest",
    position: {lat: -1.3673198545680096, lng: 29.575345442511793},
    image: "/gorilla.jpg",
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."

  }
];

function Map() {
  const { isLoaded } = useJsApiLoader({
              googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
              libraries:["places"]
          })
  const [activeMarker, setActiveMarker] = useState(null);

  // const [places, setPlaces] = useState([]);

  // const [refs, setRefs] = useState({});

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  // const onSearchBoxMounted = (ref) => {
  //   // setRefs({searchBox: ref})
  //   refs.searchBox = ref;
  // };

  // const onPlacesChanged = () => {
  //   setPlaces(refs.searchBox.getPlaces())
  // };

  return isLoaded ? (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "100vh" }}
    >

      
      {markers.map(({ id, name, position, image, short_description }) => (
          
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          
          {activeMarker === id ? (
            <InfoWindow
            onCloseClick={() => setActiveMarker(null)}>
              <Link href={name}>
              <div className="flex flex-col w-32 cursor-pointer font-semibold text-center text-[#418D89] hover:text-blue-600">
                {name && <div className="w-32 pb-2">{name}</div>} 
                {image && 
                  <Image
                    className="rounded"
                    width={"100%"}
                    height={"100%"}
                    objectFit="cover"
                    src={image}
                  />
                }
                {short_description &&
                  <div className="text-black text-left font-normal w-32 pt-2">
                    {short_description}
                  </div>
                }
              </div>
              </Link>
            </InfoWindow>
          ): null}
        </Marker>
        
      ))}
  {/* <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={onSearchBoxMounted}
      onPlacesChanged={onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          top: `0`,
          right: `5`,
          position: `absolute`
        }}
      />
    </StandaloneSearchBox>
    <ol>
      {places.map(
        ({ place_id, formatted_address, geometry: { location } }) => (
          <li key={place_id}>
            {formatted_address}
            {" at "}
            ({location.lat()}, {location.lng()})
          </li>
        )
      )}
    </ol>
    </div> */}
    </GoogleMap>
  ): null;
}

export default Map;
