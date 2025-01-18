import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import {MapViewState} from '@deck.gl/core';
import {LineLayer} from '@deck.gl/layers';
import mapStyle from './style.json';

const INITIAL_VIEW_STATE = {
  longitude: -75.687,
  latitude: 45.425,
  zoom: 13
};

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZW1vcnV3YXRvbHUiLCJhIjoiY202MmhpZGtpMTBuOTJqcHVubmdkMWVxeiJ9.eb16GNH7W3g5T4z-NbPekg';
function ParkingMap() {

  return( 
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller>
                <Map
                    mapStyle={mapStyle}
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                />
        </DeckGL>
      );
}

export default ParkingMap;