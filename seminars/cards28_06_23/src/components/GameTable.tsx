import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IState } from "../redux/gameSlice";
import Card from "./Card";

const GameTable = () => {
    const dispatch = useDispatch();
    const { playerDeck, computerDeck, isGameActive, result, playerCard } = useSelector((state: {game: IState }) => state.game)
    
    return (
        <div>
            <div>
                <h2>Игрок</h2>
                { playerCard && <Card rank={playerCard.rank} suit={playerCard.suit} /> }
            </div>

        </div>
    );
};

export default GameTable;
