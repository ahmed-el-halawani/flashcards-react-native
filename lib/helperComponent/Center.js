import React from "react";
import { View, ViewStyle } from "react-native";

/**
 * @typedef {object} Center
 * @property {*=} children
 * @property {ViewStyle=} style
 * @property {number=} flex
 */
/**
 *
 * @param {Center} param0
 */
function Center({ children = null, flex = 1, style = {} }) {
  return (
    <View
      style={[
        {
          flex: flex,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export default Center;
