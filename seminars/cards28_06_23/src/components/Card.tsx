import React from "react";

const Card: React.FC<{ rank: string, suit: string }> = ({ rank, suit }) => {
    return (
        <div>
            <span>{rank}</span>
            <span>{suit}</span>
        </div>
    );
};

export default Card;
