import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
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
          latitudeDelta: 0.15,
          longitudeDelta: 0.15
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
      >
        <Marker
          coordinate={{
            longitude: -38.6119012,
            latitude: -3.8067477
          }}
        >
          <Callout>
            <View style={styles.callout}>
              <Text style={styles.apoioName}>Casa Transformar</Text>
              <Text style={styles.apoioDesc}>
                Casa de apoio para comunidade LGBTQI+
              </Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            longitude: -38.5128337,
            latitude: -3.7197276
          }}
        >
          <Callout>
            <View style={styles.callout}>
              <Text style={styles.apoioName}>Praia dos Crush</Text>
              <Text style={styles.apoioDesc}>
                Trecho da Praia de Iracema ocupado por pessoas em sua maioria
                LGBT
              </Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            longitude: -38.5391173,
            latitude: -3.7381919
          }}
        >
          <Callout>
            <View style={styles.callout}>
              <Text style={styles.apoioName}>The Lights</Text>
              <Text style={styles.apoioDesc}>
                Música e Drinks em espaço alternativo
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  callout: {
    width: 260
  },

  apoioName: {
    fontWeight: "bold",
    fontSize: 16
  },

  apoioDesc: {
    color: "#666",
    marginTop: 5
  }
});

export default Apoio;
