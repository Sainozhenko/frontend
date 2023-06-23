export enum ActionType {
    ADD_MOVE = 'ADD_MOVE',
    RESET_GAME = 'RESET_GAME'
}

interface AddMoveAction {
    type: ActionType.ADD_MOVE,
    payload: {
        index: number;
        player: string;
    }
}

interface ResetGameAction {
    type: ActionType.RESET_GAME
}

export type GameAction = AddMoveAction | ResetGameAction;

export const addMove = (index: number, player: string): AddMoveAction => ({
    type: ActionType.ADD_MOVE,
    payload: { index, player }
})

export const resetGame = (): ResetGameAction => ({
    type: ActionType.RESET_GAME
})