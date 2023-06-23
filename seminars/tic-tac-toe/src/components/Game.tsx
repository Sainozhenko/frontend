import React from "react";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";
import { addMove, resetGame } from "../action";
import { GameState } from "../reducers";

interface GameProps {
    board: string[];
    currentPlayer: string;
    winner: string | null;
    addMove: (index: number, player: string) => void;
    resetGame: () => void;
}

const Game: React.FC<GameProps> = () => {
    const board = useSelector((state: GameState) => state.board);
    const currentPlayer = useSelector((state: GameState) => state.currentPlayer);
    const winner = useSelector((state: GameState) => state.winner);
    const dispatch = useDispatch();

    const handleResetClick = () => {
        dispatch(resetGame());
    };

    const handleSquareClick = (index: number) => {
        if (!winner && board[index] === "") {
            dispatch(addMove(index, currentPlayer));
        }
    };

    return (
        <div className="game">
            <Board board={board} onClick={handleSquareClick} />
            <div className="status">
                {winner ? (
                    <div>
                        {winner === "draw"
                            ? "It's a draw!"
                            : `Player ${winner} wins!`}
                    </div>
                ) : (
                    <div>Next player: {currentPlayer}</div>
                )}
                <button onClick={handleResetClick}></button>
            </div>
        </div>
    );
};

export default Game;
