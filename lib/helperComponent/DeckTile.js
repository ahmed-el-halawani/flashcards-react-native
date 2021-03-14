import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

function DeckTile({ title, cardsLength = null }) {
  return (
    <View style={styles.deckView}>
      <Text style={[styles.text, styles.deckTitle]}>{title}</Text>

      <Text style={[styles.text]}>{cardsLength} cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  deckTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  deckView: {
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    width: Dimensions.get("screen").width - 20,
  },
});

export default DeckTile;
