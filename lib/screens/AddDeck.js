import React, { Component, useState } from "react";
import { Text, TextInput, Dimensions } from "react-native";
import { connect } from "react-redux";
import Center from "../helperComponent/Center";
import CustomButton from "../helperComponent/CustomButton";
import { handleAddDeck } from "../actions/Decks";

function AddDeck(props) {
  const [deckTitle, setDeckTitle] = useState("");
  return (
    <Center>
      <TextInput
        placeholder="Deck Title"
        style={{
          paddingVertical: 15,
          borderWidth: 2,
          borderRadius: 3,
          width: Dimensions.get("screen").width - 30,
          textAlign: "center",
          fontSize: 20,
        }}
        value={deckTitle}
        onChangeText={setDeckTitle}
      />
      <CustomButton
        title="Submit"
        titleStyle={{ fontSize: 20 }}
        onPress={() => {
          props.handleAddDeck(deckTitle);
          setDeckTitle("");
          props.navigation.navigate("Decks");
        }}
      ></CustomButton>
    </Center>
  );
}

function mapStateToParams(_state, _params) {
  return {};
}

const mapDispatchToParams = { handleAddDeck };

export default connect(mapStateToParams, mapDispatchToParams)(AddDeck);
