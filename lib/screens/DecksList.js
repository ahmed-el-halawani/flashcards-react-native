import React, { Component } from "react";
import { View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Center from "../helperComponent/Center";
import DeckTile from "../helperComponent/DeckTile";

class DecksList extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({ title: "Decks List" });
  }

  onDeckClick = (deckId) => {
    this.props.navigation.navigate("deck", { deckId });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.onDeckClick(item.title)}>
      <DeckTile
        title={item.title}
        cardsLength={item.questions.length}
      ></DeckTile>
    </TouchableOpacity>
  );

  render() {
    const { Decks } = this.props;
    return (
      <Center>
        <FlatList
          data={Decks}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.title}
        />
      </Center>
    );
  }
}

function mapStateToParams({ Decks }, _params) {
  return {
    Decks: Decks ? Object.values(Decks) : [],
  };
}

export default connect(mapStateToParams)(DecksList);
