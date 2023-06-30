import { createSlice } from "@reduxjs/toolkit";

export interface IState {
    playerDeck: ICard[],
    playerCard: ICard | undefined,
    computerDeck: ICard[],
    computerCard: ICard | undefined,
    result: string,
    isGameActive: boolean
}

export const initialState: IState = {
    playerDeck: [],
    playerCard: undefined,
    computerDeck: [],
    computerCard: undefined,
    result: "",
    isGameActive: true,
}

export interface ICard {
    rank: string;
    suit: string;
}

const createDeck = () => {
    const ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ];
    const suits = ["spades", "clubs", "hearts", "diamonds"];

    const deck: {
        rank: string;
        suit: string;
    }[] = [];

    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ rank, suit });
        }
    }

    return shuffleDeck(deck);
};

const shuffleDeck = (
    deck: {
        rank: string;
        suit: string;
    }[]
) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        startGame: (state = initialState) => {
            state.playerDeck = createDeck();
            state.computerDeck = createDeck();
        },
        drawCards: (state = initialState) => {
            state.playerDeck.shift();
            state.computerDeck.shift();
        },
        setCurrentCard: (state = initialState, action) => {
            state.playerCard = action.payload
            state.computerCard = action.payload
        },
        setResult: (state = initialState, action) => {
            state.result = action.payload;
        },
        setIsGameActive: (state = initialState, action) => {
            state.isGameActive = action.payload
        },
        resetGame: () => {
            return initialState;
        }
    },
});

export const { startGame, drawCards, resetGame, setIsGameActive, setResult } = gameSlice.actions;