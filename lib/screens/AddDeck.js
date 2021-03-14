import React, { Component, useState } from "react";
import { Text, TextInput, Dimensions } from "react-native";
import { connect } from "react-redux";
import Center from "../helperComponent/Center";
import CustomButton from "../helperComponent/CustomButton";
import { handleAddDeck } from "../actions/Decks";

class AddDeck extends Component {
  state = {
    deckTitle: "",
  };
  render() {
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
          value={this.state.deckTitle}
          onChangeText={(text) => {
            this.setState({ deckTitle: text });
          }}
        />
        <CustomButton
          title="Submit"
          titleStyle={{ fontSize: 20 }}
          onPress={() => {
            this.props.handleAddDeck(this.state.deckTitle);
            this.setState({ deckTitle: "" });
            this.props.navigation.navigate("Decks");
          }}
        ></CustomButton>
      </Center>
    );
  }
}

function mapStateToParams(_state, _params) {
  return {};
}

const mapDispatchToParams = { handleAddDeck };

export default connect(mapStateToParams, mapDispatchToParams)(AddDeck);
