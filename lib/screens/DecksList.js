import React, { useEffect } from "react";
import { View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Center from "../helperComponent/Center";
import DeckTile from "../helperComponent/DeckTile";

const DecksList = ({ navigation, Decks, route }) => {
  useEffect(() => {
    return () => {
      navigation.setOptions({ title: "Decks List" });
    };
  }, []);

  const onDeckClick = (deckId) => {
    navigation.navigate("deck", { deckId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onDeckClick(item.title)}>
      <DeckTile
        title={item.title}
        cardsLength={item.questions.length}
      ></DeckTile>
    </TouchableOpacity>
  );

  return (
    <Center>
      <FlatList
        data={Decks}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </Center>
  );
};

function mapStateToParams({ Decks }, _params) {
  return {
    Decks: Decks ? Object.values(Decks) : [],
  };
}

export default connect(mapStateToParams)(DecksList);
