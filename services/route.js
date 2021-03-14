import React from "react";
import AddDeck from "../lib/screens/AddDeck";
import Main from "../lib/screens/Main";
import Deck from "../lib/screens/Deck";
import { createStackNavigator } from "@react-navigation/stack";
import AddCard from "../lib/screens/AddCard";
import QuizScreen from "../lib/screens/QuizScreen";

function Route() {
  const stack = createStackNavigator();

  return (
    <stack.Navigator
      initialRouteName="main"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <stack.Screen
        component={Main}
        name="main"
        options={{
          title: "Flash Cards App",
        }}
      ></stack.Screen>
      <stack.Screen
        component={AddDeck}
        options={{
          title: "Add Deck",
        }}
        name="addDeck"
      ></stack.Screen>
      <stack.Screen
        component={Deck}
        options={({ route }) => ({ title: route.params["deckId"] })}
        name="deck"
      ></stack.Screen>
      <stack.Screen
        component={QuizScreen}
        options={({ route }) => ({ title: route.params["deckId"] + " quiz" })}
        name="quiz"
      ></stack.Screen>
      <stack.Screen
        component={AddCard}
        options={() => ({ title: "Add Card" })}
        name="addCard"
      ></stack.Screen>
    </stack.Navigator>
  );
}

export default Route;
