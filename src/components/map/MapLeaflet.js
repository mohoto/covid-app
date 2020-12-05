import React from 'react'
import './MapLeaflet.css'
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapLeaflet({ center, zoom }) {
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
}
