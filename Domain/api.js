import AsyncStorage from "@react-native-async-storage/async-storage";

const createDeck = (oldDecks, title) => {
  return JSON.stringify({
    ...oldDecks,
    [title]: {
      title: title,
      questions: [],
    },
  });
};

export async function getDeck(id) {
  return getAllDecks()[id];
}

export async function getAllDecks() {
  return AsyncStorage.getItem("Decks").then((Decks) => {
    return JSON.parse(Decks);
  });
}

export async function addDeck(title) {
  return getAllDecks().then((oldDecks) => {
    if (title != "") {
      if (!oldDecks[title]) {
        return AsyncStorage.setItem("Decks", createDeck(oldDecks, title));
      } else {
        throw new Error("deck already exist");
      }
    } else {
      throw new Error("deck title must not be empty");
    }
  });
}

export async function removeDeck(id) {
  return getAllDecks().then((Decks) => {
    delete Decks[id];
    return AsyncStorage.setItem("Decks", JSON.stringify(Decks));
  });
}

export async function addCard(deckId, question, answer) {
  return getAllDecks().then((Decks) => {
    if (question != "" && answer != "") {
      const newDecks = {
        ...Decks,
        [deckId]: {
          ...Decks[deckId],
          questions: [
            ...Decks[deckId].questions,
            {
              question: question,
              answer: answer,
            },
          ],
        },
      };
      return AsyncStorage.setItem("Decks", JSON.stringify(newDecks));
    } else {
      throw new Error("card question or answer must not be empty");
    }
  });
}
