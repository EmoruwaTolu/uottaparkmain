import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import {MapViewState} from '@deck.gl/core';
import {LineLayer} from '@deck.gl/layers';
import mapStyle from './style.json';
import { useState, useEffect } from 'react';
import { GeoJsonLayer, TextLayer, IconLayer } from '@deck.gl/layers';

const INITIAL_VIEW_STATE = {
  longitude: -75.687,
  latitude: 45.425,
  zoom: 13
};

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZW1vcnV3YXRvbHUiLCJhIjoiY202MmhpZGtpMTBuOTJqcHVubmdkMWVxeiJ9.eb16GNH7W3g5T4z-NbPekg';
function ParkingMap() {

  const [geojsonData, setGeojsonData] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(13); // Default zoom level

    // Load GeoJSON data
    useEffect(() => {
      fetch('/City_Parking_Lots.geojson') // Adjust the path if necessary
        .then((response) => response.json())
        .then((data) => setGeojsonData(data))
        .catch((error) => console.error('Error fetching GeoJSON:', error));
    }, []);
  
    // Create the GeoJsonLayer
    // const geoJsonLayer = geojsonData
    //   ? new GeoJsonLayer({
    //       id: 'parking-lots-layer',
    //       data: geojsonData,
    //       pickable: true,
    //       filled: true,
    //       pointType: 'circle',
    //       getFillColor: [0, 120, 200], // Blue color for parking lots
    //       getRadius: 100,
    //       onHover: ({ object, x, y }) => {
    //         if (object) {
    //           const tooltip = `${object.properties.ADDRESS} (${object.properties.SPACES} spaces)`;
    //           console.log(tooltip); // Replace with tooltip rendering logic if needed
    //         }
    //       },
    //     })
    //   : null;

      const textLayer = geojsonData
        ? new TextLayer({
            id: 'text-layer',
            data: geojsonData.features, // Use features directly
            pickable: false,
            getPosition: (d) => d.geometry.coordinates, // Label position
            getText: (d) => `${d.properties.SPACES}`, // Text to display
            getSize: () => 10, // Min 10, Max 30
            getColor: [255, 255, 255], // White text
            getTextAnchor: 'middle',
            getAlignmentBaseline: 'center',
          })
        : null;

        const iconLayer = geojsonData
        ? new IconLayer({
            id: 'parking-icon-layer',
            data: geojsonData.features, // Use the features array from your GeoJSON
            pickable: true,
            iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
            iconMapping: {
              marker: { x: 0, y: 0, width: 128, height: 128, mask: true }, // Adjust based on the atlas
            },
            getPosition: (d) => d.geometry.coordinates, // Extract coordinates from GeoJSON
            getIcon: (d) => 'marker',
            getSize: 50,
            getColor: [255, 140, 0], // Orange color for icons
            onClick: (info) => {
              if (info.object) {
                console.log(`Clicked on: ${info.object.properties.ADDRESS}`);
              }
            },
            // Add a tooltip with the number of spaces
            getTooltip: (d) => `${d.properties.SPACES} spaces`,
          })
        : null;



  return( 
        <DeckGL
            initialViewState={{
              longitude: -75.691341, // Adjust based on your data
              latitude: 45.430209,   // Adjust based on your data
              zoom: zoomLevel,
              pitch: 0,
              bearing: 0,
            }}
            controller
            layers={[iconLayer, textLayer]}
            >
                <Map
                    mapStyle={mapStyle}
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                />
        </DeckGL>
      );
}

export default ParkingMap;