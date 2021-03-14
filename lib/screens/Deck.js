import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Center from "../helperComponent/Center";
import CustomButton from "../helperComponent/CustomButton";
import DeckTile from "../helperComponent/DeckTile";
import { handleAddDeck, handleRemoveDeck } from "../actions/Decks";
import { setNotification } from "../../services/notification";

function Deck({ title, cardsLength, navigation, ...props }) {
  return (
    <Center>
      <DeckTile title={title} cardsLength={cardsLength}></DeckTile>

      <View>
        <CustomButton
          borderColor="black"
          backgroundColor="transparent"
          textColor="black"
          title="Add Card"
          onPress={() => {
            navigation.navigate("addCard", { deckId: title });
          }}
        />
        <CustomButton
          borderWidth={0}
          disabled={cardsLength == 0 && true}
          title="Start Quiz"
          onPress={() => {
            navigation.navigate("quiz", { deckId: title });
          }}
        />

        <CustomButton
          borderWidth={0}
          backgroundColor="transparent"
          textColor="red"
          title="remove deck"
          onPress={() => {
            console.log(props.dispatch);
            navigation.goBack();
            props.dispatch(handleRemoveDeck(title));
          }}
        />
      </View>
    </Center>
  );
}

function mapStateToParams(state, { route, navigation }) {
  const title = route.params.deckId;
  const deck = title ? state.Decks[title] : "";
  const cardsLength = deck ? deck.questions.length : 0;
  return {
    title,
    cardsLength,
    navigation,
  };
}

export default connect(mapStateToParams)(Deck)