import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import {MapViewState} from '@deck.gl/core';
import {LineLayer} from '@deck.gl/layers';
import mapStyle from './style.json';
import { useState, useEffect } from 'react';
import { GeoJsonLayer, TextLayer } from '@deck.gl/layers';

const INITIAL_VIEW_STATE = {
  longitude: -75.687,
  latitude: 45.425,
  zoom: 13
};

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZW1vcnV3YXRvbHUiLCJhIjoiY202MmhpZGtpMTBuOTJqcHVubmdkMWVxeiJ9.eb16GNH7W3g5T4z-NbPekg';
function ParkingMap() {

  const [geojsonData, setGeojsonData] = useState(null);

    // Load GeoJSON data
    useEffect(() => {
      fetch('/City_Parking_Lots.geojson') // Adjust the path if necessary
        .then((response) => response.json())
        .then((data) => setGeojsonData(data))
        .catch((error) => console.error('Error fetching GeoJSON:', error));
    }, []);
  
    // Create the GeoJsonLayer
    const geoJsonLayer = geojsonData
      ? new GeoJsonLayer({
          id: 'parking-lots-layer',
          data: geojsonData,
          pickable: true,
          filled: true,
          pointType: 'circle',
          getFillColor: [0, 120, 200], // Blue color for parking lots
          getRadius: 100,
          onHover: ({ object, x, y }) => {
            if (object) {
              const tooltip = `${object.properties.ADDRESS} (${object.properties.SPACES} spaces)`;
              console.log(tooltip); // Replace with tooltip rendering logic if needed
            }
          },
        })
      : null;

    const textLayer = geojsonData
      ? new TextLayer({
          id: 'text-layer',
          data: geojsonData.features, // Use features directly
          pickable: false,
          getPosition: (d) => d.geometry.coordinates, // Label position
          getText: (d) => `${d.properties.SPACES}`, // Text to display
          getSize: 16, // Font size
          getColor: [255, 255, 255], // White text
          getTextAnchor: 'middle',
          getAlignmentBaseline: 'center',
        })
      : null;


  return( 
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller
            layers={[geoJsonLayer, textLayer]}
            >
                <Map
                    mapStyle={mapStyle}
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                />
        </DeckGL>
      );
}

export default ParkingMap;