import { ActionType, GameAction } from './../action/index';

export interface GameState {
    board: string[];
    currentPlayer: string;
    winner: string | null;
}

const initialState: GameState = {
    // В поле board помещаем массив из 9 элементов, каждый из элементов является пустой строкой
    board: Array(9).fill(''),
    currentPlayer: 'X',
    winner: null
}

export const gameReducer = (state = initialState, action: GameAction): GameState => {
    switch (action.type) {
        case ActionType.ADD_MOVE: {
            const { index, player } = action.payload;
            const newBoard = [...state.board];
            newBoard[index] = player;

            const winningCombinations: number[][] = [
                // 0  1  2
                // 3  4  5
                // 6  7  8
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                if (
                    newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]
                ) {
                    return {
                        ...state,
                        board: newBoard,
                        winner: player
                    }
                }
            };

            if (!newBoard.includes('')) {
                return {
                    ...state,
                    board: newBoard,
                    winner: 'draw'
                }
            }

            return {
                ...state,
                board: newBoard,
                currentPlayer: player === 'X' ? 'O' : 'X'
            }
        }
        case ActionType.RESET_GAME: {
            return initialState;
        }
        default:
            return state;
    }
}