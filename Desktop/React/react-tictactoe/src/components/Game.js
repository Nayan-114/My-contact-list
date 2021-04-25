import React, { useState } from 'react';    //Creating a state in functional component with hooks
import { calculateWinner} from '../helpers'
import Board from './Board';


const Game = () => {
    const [board,setBoard] = useState(Array(9).fill(null));     //destructuring
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = () => {

    }
    const jumpTo = () =>
    {

    }
    const renderMoves = () => {

    }

    return (
        <Board squares={board} onClick={handleClick}/>
    )
}
export default Game;