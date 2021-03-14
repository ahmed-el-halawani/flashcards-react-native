import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { setNotification } from "../../services/notification";
import Center from "../helperComponent/Center";
import CustomButton from "../helperComponent/CustomButton";

class QuizScreen extends Component {
  componentDidMount() {
    setNotification();
  }

  state = {
    isQuestion: false,
    correctCounter: 0,
    questionNumber: 0,
  };

  nextQuestion = () => {
    const { questionNumber, isQuestion } = this.state;
    this.setState({ questionNumber: questionNumber + 1 });
    this.setState({ isQuestion: !isQuestion });
  };

  correct = () => {
    const { correctCounter } = this.state;

    this.setState({ correctCounter: correctCounter + 1 });
    this.nextQuestion();
  };

  restartGame = () => {
    this.setState({ isQuestion: true });
    this.setState({ correctCounter: 0 });
    this.setState({ questionNumber: 0 });
  };

  render() {
    const { navigation, deck } = this.props;
    const { questionNumber, correctCounter, isQuestion } = this.state;
    const questionsLength = deck.questions.length;
    let currentQuestion = deck.questions[questionNumber];

    if (questionNumber >= questionsLength) {
      return (
        <Center
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <Text style={[styles.text, styles.header]}>Result</Text>
          <View>
            <Text style={styles.text}>correct rate</Text>
            <Text style={[styles.text, styles.score]}>
              {((correctCounter / questionsLength) * 100).toFixed()}%
            </Text>
          </View>
          <View>
            <CustomButton
              title="Restert Quiz"
              onPress={this.restartGame}
            ></CustomButton>
            <CustomButton
              backgroundColor="transparent"
              textColor="black"
              title="Back To Deck"
              onPress={navigation.goBack}
            ></CustomButton>
          </View>
        </Center>
      );
    }

    return (
      <Center style={{ justifyContent: "space-evenly", marginHorizontal: 20 }}>
        <View style={{ alignSelf: "flex-start" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>
            {questionNumber + 1} / {questionsLength}
          </Text>
        </View>

        <Center flex={0} style={styles.card}>
          <Text style={[styles.text]}>
            {isQuestion ? currentQuestion.question : currentQuestion.answer}
          </Text>
          <CustomButton
            backgroundColor="transparent"
            textColor="red"
            title="flip card"
            onPress={() => this.setState({ isQuestion: !isQuestion })}
          ></CustomButton>
        </Center>
        <View>
          <CustomButton title="correct" onPress={this.correct}></CustomButton>
          <CustomButton
            title="in correct"
            backgroundColor="red"
            onPress={this.nextQuestion}
          ></CustomButton>
        </View>
      </Center>
    );
  }
}

function mapStateToParams({ Decks }, { route }) {
  const { deckId } = route.params;
  const deck = Decks[deckId];
  return {
    deck,
  };
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
    textTransform: "capitalize",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#09a33a",
  },
  card: {
    height: Dimensions.get("screen").height * 0.2,
    width: Dimensions.get("screen").width * 0.95,
  },
});

const mapDispatchToParams = {};

export default connect(mapStateToParams, mapDispatchToParams)(QuizScreen);
