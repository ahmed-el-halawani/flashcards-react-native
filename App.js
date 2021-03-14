import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./lib/reducers/index";
import applyMiddleware from "./lib/middlewares/index";
import { NavigationContainer } from "@react-navigation/native";
import Route from "./services/route";

const CustomStatusBar = () => (
  <View
    style={{
      height: Constants.statusBarHeight,
      backgroundColor: "violet",
    }}
  >
    <StatusBar translucent backgroundColor="blue" style="light" />
  </View>
);

function App(props) {
  return (
    <NavigationContainer>
      <Provider store={createStore(combineReducers, applyMiddleware)}>
        <View style={styles.container}>
          <CustomStatusBar></CustomStatusBar>
          <Route></Route>
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
