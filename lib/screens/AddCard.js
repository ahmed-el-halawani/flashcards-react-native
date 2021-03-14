import React, { Component, useState } from "react";
import { Text, TextInput, Dimensions } from "react-native";
import { connect } from "react-redux";
import Center from "../helperComponent/Center";
import CustomButton from "../helperComponent/CustomButton";
import { handleAddCard } from "../actions/Decks";

function AddCard(props) {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");
  return (
    <Center>
      <TextInput
        placeholder="Question"
        style={{
          paddingVertical: 15,

          borderWidth: 2,
          borderRadius: 3,
          width: Dimensions.get("screen").width - 30,
          textAlign: "center",
          fontSize: 20,
        }}
        value={question}
        onChangeText={setquestion}
      />
      <TextInput
        placeholder="Answer"
        style={{
          paddingVertical: 15,

          borderWidth: 2,
          borderRadius: 3,
          width: Dimensions.get("screen").width - 30,
          textAlign: "center",
          fontSize: 20,
          marginVertical: 10,
        }}
        value={answer}
        onChangeText={setanswer}
      />

      <CustomButton
        title="Submit"
        titleStyle={{ fontSize: 20 }}
        onPress={() => {
          props.handleAddCard(props.deckId, question, answer);
          props.navigation.goBack();
        }}
      />
    </Center>
  );
}

function mapStateToParams(_state, { route }) {
  return {
    deckId: route.params.deckId,
  };
}

const mapDispatchToParams = { handleAddCard };

export default connect(mapStateToParams, mapDispatchToParams)(AddCard);
