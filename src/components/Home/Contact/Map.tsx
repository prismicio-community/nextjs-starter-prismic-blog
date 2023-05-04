import React from "react";

import { compose, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const coordinates = {
  lat: 32.0723871,
  lng: 34.8140164,
};

const labelUrl =
  "https://www.google.com/maps/place/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8+%D7%9C%D7%99%D7%9B%D7%98%D7%A0%D7" +
  "%A9%D7%98%D7%99%D7%99%D7%9F+%D7%9C%D7%99%D7%9E%D7%95%D7%93+%D7%AA%D7%95%D7%A4%D7%99%D7%9D%E2%80%AD/" +
  "@32.072442,34.813721,16z/data=!4m5!3m4!1s0x0:0xc28cd9557039a526!8m2!3d32.0724757!4d34.8140216?hl=he-IL";

const MapLabel = () => (
  <div>
    <a href={labelUrl} target="_blank" rel="noopener noreferrer">
      <h4 id="firstHeading" className="firstHeading">
        הראל 19, גבעתיים
      </h4>
    </a>
  </div>
);

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen:
        ({ isOpen }) =>
        () => ({
          isOpen: !isOpen,
        }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={16} defaultCenter={coordinates}>
    <Marker position={coordinates} onClick={props.onToggleOpen}>
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <MapLabel />
        </InfoWindow>
      )}
    </Marker>
  </GoogleMap>
));

export default MapWithAMakredInfoWindow;
