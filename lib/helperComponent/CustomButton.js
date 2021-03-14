import {
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  ColorValue,
} from "react-native";
import React from "react";

/**
 * @typedef {object} params
 * @property {boolean=} disabled
 * @property {*=} title
 * @property {*=} children
 * @property {*=} onPress
 * @property {*=} borderRadius
 * @property {*=} borderWidth
 * @property {ColorValue=} borderColor
 * @property {ColorValue=} backgroundColor
 * @property {ColorValue=} disabledbackgroundColor
 * @property {ColorValue=} textColor
 * @property {*=} titleStyle
 * @property {*=} args
 * @property {ViewStyle=} btnStyle
 */

/**
 * @param {params} param0
 */
function CustomButton({
  disabled = false,
  children = null,
  title = null,
  onPress = null,
  disabledbackgroundColor = "lightgray",
  borderRadius = 5,
  borderWidth = 2,
  borderColor = "transparent",
  backgroundColor = "blue",
  textColor = "white",
  btnStyle = {},
  titleStyle = {},
  args = {},
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        btnStyle,
        {
          backgroundColor: disabled ? disabledbackgroundColor : backgroundColor,
          paddingHorizontal: 90,
          paddingVertical: 15,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          borderColor: borderColor,
          margin: 5,
        },
      ]}
      activeOpacity={0.4}
      {...args}
    >
      {title ? (
        <Text
          style={[
            {
              color: textColor,
              fontSize: 16,
              textAlign: "center",
              textTransform: "capitalize",
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
      ) : (
        { children }
      )}
    </TouchableOpacity>
  );
}

export default CustomButton;
