import { deckActions } from "../actions/Decks";

export default function Decks(state = {}, action) {
  switch (action.type) {
    case deckActions.INIT_DATA:
      return action.data;
    case deckActions.ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
        },
      };
    case deckActions.REMOVE_DECK:
      const newDeck = {
        ...state,
        [action.deckId]: undefined,
      };
      delete newDeck[action.deckId];
      return newDeck;
    case deckActions.ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
            ...state[action.deckId].questions,
            {
              question: action.question,
              answer: action.answer,
            },
          ],
        },
      };
    default:
      return state;
  }
}
