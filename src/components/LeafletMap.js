import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/map.css';
import { useEffect, useState } from 'react';

function LeafletMap() {
  const [position, setPosition] = useState();
  console.log(position);

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      setPosition(crd);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  if (!position) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <MapContainer
        id='map'
        center={[position.latitude, position.longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[position.latitude, position.longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default LeafletMap;
