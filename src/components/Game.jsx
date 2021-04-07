import React, { useState } from 'react'
import { winnerCheck } from '../helper';
import Board from './Board'

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setXIsNext] = useState(true);
    const winner = winnerCheck(squares);

    const handleClick = (i) => {
        const currentStateOfSquares = squares;
        if (winner || squares[i]) return;

        currentStateOfSquares[i] = isXNext ? 'X' : 'O';
        setSquares(currentStateOfSquares);
        setXIsNext(!isXNext);
    }
    return (
        <>
            <Board squares={squares} onClick={handleClick} />
            <div>
                {winner ? "Winner: " + winner : "Next Player: " + (isXNext ? 'X' : 'O')}
            </div>
        </>
    )
}
