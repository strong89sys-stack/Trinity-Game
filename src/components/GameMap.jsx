import './../style/map.css'
import { GiCrossedSabres } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";

import { useState, useEffect } from 'react'

export default function GameMap({rules, onWin, reset, propsTurn}){

    const [cells, setCells] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(true)
    const [winner, setWinner] = useState(null)
    
    const handleClick = (index) =>{
        if (cells[index] || winner) return
        
        const newCells = [...cells]
        newCells[index] = turn ? "cross" : "circle"

        setCells(newCells)
        setTurn(!turn)
        propsTurn(turn)

        // Vérification de la victoire à ce coup
        const winResult = checkWinner(newCells)
        if (winResult) {
            setWinner(winResult)
            onWin(winResult) // On remonte l'info au parent !
            propsTurn(false)
        } else {
            setTurn(!turn)
        }
    }

    useEffect(() => {
        if (reset){
            resetGame
        }
    }, [reset])

    const checkWinner = (board) =>{
        for (let combo of rules){
            const [a, b, c] = combo
            if (board[a] && board[a] === board[b] && board[a] === board[c]){
                return board[a]
            }
        }
        return null
    }

    const resetGame = () => {
        setCells(Array(9).fill(null))
        setWinner(null)
        setTurn(true)
    }
    const isDraw = !winner && cells.every(cell => cell !== null)

    return (
        <>
        <section className="map">
            <div className="area">
                {(winner || isDraw) && (
                    <div className="status">
                        {winner && <h2>Victoire de {winner === "cross" ? "Home" : "Away"} !</h2>}
                        {isDraw && <h2>Égalité !</h2>}
                        <button onClick={resetGame}>Rejouer</button>
                    </div>
                )}
                <div className="area-content">
                    {
                        cells.map((cell, index) => (
                            <button onClick={() => handleClick(index)} key={index} >
                                {cell == "cross" && <span className='red'><GiCrossedSabres /></span>}
                                {cell == "circle" && <span><FaRegCircle /></span>}
                            </button>
                        ))
                    }
                </div>
            </div>
        </section>
        </>
    )
}