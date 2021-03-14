import React, { Component } from "react";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DecksList from "./DecksList";
import { handleInitData } from "../actions/Decks";
import AddDeck from "./AddDeck";
import * as icons from "@expo/vector-icons";

class Main extends Component {
  componentDidMount() {
    this.props.handleInitData();
  }
  render() {
    const tabNavigator = createBottomTabNavigator();

    return (
      <tabNavigator.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 16,
          },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            switch (route.name) {
              case "Decks":
                iconName = focused ? "cards" : "cards-outline";
                break;
              case "Add Deck":
                iconName = focused ? "card-plus" : "card-plus-outline";
                break;
            }
            return (
              <icons.MaterialCommunityIcons
                // @ts-ignore
                name={iconName}
                color={focused ? "blue" : "black"}
                style={{
                  fontSize: 25,
                }}
              ></icons.MaterialCommunityIcons>
            );
          },
        })}
      >
        <tabNavigator.Screen
          component={DecksList}
          name="Decks"
        ></tabNavigator.Screen>
        <tabNavigator.Screen
          component={AddDeck}
          name="Add Deck"
        ></tabNavigator.Screen>
      </tabNavigator.Navigator>
    );
  }
}

function mapStateToParams(_store, _params) {
  return {};
}

const mapDispatchToParams = { handleInitData };

export default connect(mapStateToParams, mapDispatchToParams)(Main);
