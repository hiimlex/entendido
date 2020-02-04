import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

import Navbar from "../components/Navbar";

function Apoio() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08
        });
      }
    }

    loadInitialPosition();
  }, []);

  function handleRegionChange(region) {
    setCurrentRegion(region);
  }

  return (
    <>
      <Navbar />
      <MapView
        style={styles.map}
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}
      />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default Apoio;
