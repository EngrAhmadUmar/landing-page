import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import Link from "next/link";

const markers = [
  {
    id: 1,
    name: "Gorilla Lake in Gisenyi",
    position: {lat: -1.70278, lng: 29.25639},
    image: "/sample-pic.jpeg",
  },
  {
    id: 2,
    name: "Akagera National Park",
    position: {lat: -1.6333308, lng: 30.7833302},
    image: "/akagera.jpg",
  },
  {
    id: 3,
    name: "Fazenda Sengha",
    position: {lat: -1.6154808935029508, lng: 29.945828955849198},
    image: "/fazhenda.jpg",
  },
  {
    id: 4,
    name: "Gorilla Nest",
    position: {lat: -1.3673198545680096, lng: 29.575345442511793},
    image: "/gorilla.jpg",
  }
];

function Map() {
  const { isLoaded } = useJsApiLoader({
              googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          })
  const [activeMarker, setActiveMarker] = useState(null);

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

  return isLoaded ? (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map(({ id, name, position, image }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <Link href={name}>
              <div className="flex flex-col cursor-pointer font-semibold text-[#418D89] hover:text-blue-600">
                {name} 
                {image && 
                  <Image
                    className="rounded opacity-100 pt-9"
                    width={"100%"}
                    height={"100%"}
                    objectFit="cover"
                    src={image}
                  />
                }
              </div>
              </Link>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ): <></>;
}

export default Map;

//  import React from "react";
//  import {
//    GoogleMap,
//    useLoadScript,
//    Marker,
//    InfoWindow,
//  } from "@react-google-maps/api";
//  import { formatRelative } from "date-fns";


//  const libraries = ["places"];
//  const mapContainerStyle = {
//    height: "100vh",
//    width: "100vw",
//  };

//  const center = {
//    lat: 43.6532,
//    lng: -79.3832,
//  };

//  export default function Map() {
//    const { isLoaded, loadError } = useLoadScript({
//      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//      libraries,
//    });
//    const [markers, setMarkers] = React.useState([]);
//    const [selected, setSelected] = React.useState(null);


//    const mapRef = React.useRef();
//    const onMapLoad = React.useCallback((map) => {
//      mapRef.current = map;
//    }, []);

  

//    if (loadError) return "Error";
//    if (!isLoaded) return "Loading...";

//    return (
//      <div>
//        <GoogleMap
//          id="map"
//          mapContainerStyle={mapContainerStyle}
//          zoom={3}
//          center={center}
//          onLoad={onMapLoad}
//        >
        
//            <Marker
//              position={center}
//              onMouseOver={() => {
//                setSelected();
//              }}
//              icon={{
//                origin: new window.google.maps.Point(0, 0),
//                anchor: new window.google.maps.Point(15, 15),
//                scaledSize: new window.google.maps.Size(30, 30),
//              }}
//            />
//            <Marker
//              position={{
//                lat: 43.6532,
//                lng: -79.3832,
//              }}
//              onMouseOver={() => {
//                setSelected();
//              }}
//              icon={{
//                origin: new window.google.maps.Point(0, 0),
//                anchor: new window.google.maps.Point(15, 15),
//                scaledSize: new window.google.maps.Size(30, 30),
//              }}
//            />
       

//          {selected ? (
//            <InfoWindow
//              position={center}
//              onCloseClick={() => {
//                setSelected(null);
//              }}
//            >
//              <div>
//                <h2>
//                  Alert
//                </h2>
            
//              </div>
//            </InfoWindow>
//          ) : null}
//        </GoogleMap>
//      </div>
//    );
//  }
//  import React from 'react'
//  import { useState } from 'react';
//  import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

//  const containerStyle = {
//      width: '100%',
//      height: '100vh'
//  };

//  const center = {
//      lat: -1.9441,
//      lng: 30.0619
//  };

//  function Map() {
//      const { isLoaded } = useJsApiLoader({
//          googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
//      })

//      const [map, setMap] = useState(null)
//      const [selected, setSelected] = useState(null);

//      const onLoad = React.useCallback(function callback(map) {
//          const bounds = new window.google.maps.LatLngBounds(center);
//          map.fitBounds(bounds);
//          setMap(map)
//      }, [])

//      const onUnmount = React.useCallback(function callback(map) {
//          setMap(null)
//      }, [])

//      const divStyle = {
//          background: `white`,
//          border: `1px solid #ccc`,
//          padding: 15
//        }

//      return isLoaded ? (
//          <GoogleMap
//              mapContainerStyle={containerStyle}
//              center={center}
//              zoom={10}
//              onLoad={onLoad}
//              onUnmount={onUnmount}
//          >
//              {<Marker
//                  position={center}
//                  onClick={() => {
//                      setSelected();
//                  }}
               

//              />/* Child components, such as markers, info windows, etc. */}
//              <></>
//              {selected ? (<InfoWindow
                
//                  position={center}
//              >
//                  <div style={divStyle}>
//                      <h1>InfoWindow</h1>
//                  </div>
//              </InfoWindow>) : null}
            
//          </GoogleMap>
//      ) : <></>
//  }

//  export default React.memo(Map)



