import * as api from "../../Domain/api";

export const deckActions = {
  INIT_DATA: "INIT_DATA",
  ADD_DECK: "ADD_DECK",
  REMOVE_DECK: "REMOVE_DECK",
  ADD_CARD: "ADD_CARD",
};

const testData = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

export function initData(data) {
  return {
    type: deckActions.INIT_DATA,
    data,
  };
}

export const addDeck = (title) => ({
  type: deckActions.ADD_DECK,
  title,
});

export const removeDeck = (deckId) => ({
  type: deckActions.REMOVE_DECK,
  deckId,
});

export const addCard = (deckId, question, answer) => ({
  type: deckActions.ADD_CARD,
  deckId,
  question,
  answer,
});

export function handleAddCard(deckId, question, answer) {
  return (dispatch) => {
    return api
      .addCard(deckId, question, answer)
      .then(() => {
        dispatch(addCard(deckId, question, answer));
      })
      .catch((e) => {
        alert(e.message);
      });
  };
}

export function handleAddDeck(title) {
  return (dispatch) => {
    api.getAllDecks().then((i) => {
      console.log("asyncDecks", i);
    });
    return api
      .addDeck(title)
      .then(() => {
        dispatch(addDeck(title));
      })
      .catch((e) => {
        alert(e.message);
      });
  };
}
export function handleRemoveDeck(deckId) {
  return (dispatch) => {
    return api
      .removeDeck(deckId)
      .then(() => {
        dispatch(removeDeck(deckId));
      })
      .catch((e) => {
        alert("deck not removed. try again");
      });
  };
}
export function handleInitData() {
  return (dispatch) => {
    return api.getAllDecks().then((data) => {
      console.log("data", data);
      dispatch(initData(data));
    });
  };
}
