import React, { useState } from 'react';    //Creating a state in functional component with hooks
import { calculateWinner} from '../helpers'
import Board from './Board';

const styles = {
    width:'200px',
    margin:'20px auto'
};

const Game = () => {
    const [board,setBoard] = useState(Array(9).fill(null));     //destructuring
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];     //shallow copy of board state

        //If user click an occupied square or if game is won,return
        if(winner || boardCopy[i]) return

        //Put an x or an 0 in the clicked square
        boardCopy[i] = xIsNext ? 'x' : 'o';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    const jumpTo = () =>
    {

    }
    const renderMoves = () => {
        return <button onClick={()=> setBoard(Array(9).fill(null))}>
                    Start Game
               </button>
    }

    return (
        <>  
            <Board squares={board} onClick={handleClick} />
            <div style = {styles}>
                <p>
                    {/* check the winner or the next player i.e: 'x' or 'o' */}
                    {winner ? 'Winner:' + winner : 'Next Player:' + (xIsNext ? 'X' : 'O')}
                </p>
                {renderMoves()}
            </div>
        </>
    )
}
export default Game;