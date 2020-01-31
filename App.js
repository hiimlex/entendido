import React from "react";
import { StatusBar } from "react-native";
import Router from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#db0024" />
      <Router />
    </>
  );
}
