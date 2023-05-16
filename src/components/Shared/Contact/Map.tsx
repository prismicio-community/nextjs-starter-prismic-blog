import React from "react";

import { compose, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { KeyTextField, LinkField, NumberField } from "@prismicio/types";

const coordinates = {
  lat: 32.0723871,
  lng: 34.8140164,
};

const labelUrl =
  "https://www.google.com/maps/place/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8+%D7%9C%D7%99%D7%9B%D7%98%D7%A0%D7" +
  "%A9%D7%98%D7%99%D7%99%D7%9F+%D7%9C%D7%99%D7%9E%D7%95%D7%93+%D7%AA%D7%95%D7%A4%D7%99%D7%9D%E2%80%AD/" +
  "@32.072442,34.813721,16z/data=!4m5!3m4!1s0x0:0xc28cd9557039a526!8m2!3d32.0724757!4d34.8140216?hl=he-IL";

const MapLabel: React.FC<
  Pick<MapProps, "map_label_link" | "map_label_text">
> = ({ map_label_link, map_label_text }) => (
  <div>
    <a
      href={"url" in map_label_link ? map_label_link.url : ""}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4 id="firstHeading" className="firstHeading">
        {map_label_text}
      </h4>
    </a>
  </div>
);

type MapProps = {
  onToggleOpen: () => void;
  isOpen: boolean;
  map_label_link: LinkField;
  map_label_text: KeyTextField;
  map_lat: NumberField;
  map_lng: NumberField;
};

const MapWithAMakredInfoWindow = compose<MapProps, MapProps>(
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
)((props) => {
  const {
    isOpen,
    onToggleOpen,
    map_label_link,
    map_label_text,
    map_lat,
    map_lng,
  } = props;
  return (
    // @ts-ignore
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: map_lat, lng: map_lng }}>
      {/* @ts-ignore */}
      <Marker position={coordinates} onClick={onToggleOpen}>
        {/* @ts-ignore */}
        {isOpen && (
          /* @ts-ignore */
          <InfoWindow onCloseClick={onToggleOpen}>
            <MapLabel
              map_label_link={map_label_link}
              map_label_text={map_label_text}
            />
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
});

export default MapWithAMakredInfoWindow;
