import './game.css'
import Header from "../components/Header"
import Aside from '../components/Aside'
import GameMap from '../components/GameMap'

import { useState, useEffect } from 'react'

export default function GamePage() {
    const [homeScore, setHomeScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)
    const [restart, setRestart] = useState(false)

    const victoryRules = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    const [secondPassed, setSecondPassed] = useState(0)
    const [minutePassed, setMinutePassed] = useState(0)

    useEffect(() => {
        const timers = setInterval(() => {
            setSecondPassed(secondPassed => secondPassed + 1)
        }, 1000)

        return () => clearInterval(timers)
    }, [])

    useEffect(() => {
        if (secondPassed === 60) {
            setSecondPassed(0)
            setMinutePassed(minutePassed => minutePassed + 1)
        }
    }, [secondPassed])

    const handleWin = (winner) =>{
        if (winner === "cross"){
            setHomeScore(homeScore + 1)
        }
        else if (winner === "circle"){
            setAwayScore(awayScore + 1)
        }
    }

    const handleRestart = (res) =>{
        setRestart(res)
    }
    
    return (
        <>
        <Header />
        <section className="game-page">
            <Aside home={homeScore} away={awayScore} second={secondPassed} minute={minutePassed} onRestart={() => handleRestart} />
            <GameMap rules={victoryRules} onWin={handleWin} reset={restart} />
        </section>
        </>
    )
}