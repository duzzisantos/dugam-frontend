import { Marker, Popup } from "leaflet";
import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
// import { render } from "react-dom";

const StreetMaps = () => {
  const position = [6.594, 7.497];
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default StreetMaps;
