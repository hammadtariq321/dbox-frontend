// components/Map.js
'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
    const [isMounted, setIsMounted] = useState(false);

    // Load React-Leaflet dynamically
    const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
    const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
    const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
    const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div>
            <MapContainer
                center={[30.3753, 69.3451]}  // Coordinates of Pakistan
                zoom={6}
                style={{ height: "500px", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[33.6844, 73.0479]}>  {/* Coordinates of Islamabad */}
                    <Popup>
                        Islamabad, Pakistan
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapView;
