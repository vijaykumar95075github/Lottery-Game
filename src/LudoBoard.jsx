import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

    const incrementMove = (color) => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1
        }));
    };

    return (
        <div>
          <p>Game Begin!</p>
          <div className="board">
            <p>Blue moves = {moves.blue}</p>
            <button onClick={() => incrementMove('blue')} style={{backgroundColor:"blue"}}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button onClick={() => incrementMove('yellow')} style={{backgroundColor:"yellow"}}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button onClick={() => incrementMove('green')} style={{backgroundColor:"green"}}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button onClick={() => incrementMove('red')} style={{backgroundColor:"red"}}>+1</button>
          </div>
        </div>
    );
}
