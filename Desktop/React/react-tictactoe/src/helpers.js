export function calculateWinner(squares){ //Here squares parameter is the current board state
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0;i < lines.length; i++)
    {
        const [a,b,c] = lines[i];   //destructuring
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]; //check if the values matches in the given indexes and return
        }
    }
    return null;
}




const squares = [
    null,null,null,
    'x','x','o',
    null,null,null
];

console.log(calculateWinner(squares));