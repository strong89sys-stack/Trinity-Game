import './../style/aside.css'

import { RiArrowGoBackFill } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";

import { useEffect } from 'react';

export default function Aside({home, away, second, minute, onRestart}){

    return (
        <>
        <aside>
            <div className="score-board">
                <div className="chrono">
                    <span className='name'>Match</span>
                    {
                        <span className='temp'>{minute}:{second}</span>
                    }
                </div>
                <div className="score">
                    <div className="home">
                        <span>You</span>
                        <span>{home}</span>
                    </div>
                    <div className="mid">-</div>
                    <div className="away">
                        <span>AI</span>
                        <span>{away}</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="content">Your Turn</div>
                </div>
            </div>

            <div className="controls">
                <span>Controls</span>
                <button className='active'>
                    <RiArrowGoBackFill />Undo Move
                </button>
                <button onClick={onRestart(true)}>
                    <VscDebugRestart />Restart Match
                </button>
                <button>
                    <FaPlus />New Game
                </button>
            </div>

            <div className="difficulty">
                <span>AI Difficulty</span>
                <select defaultValue="medium">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="impossible">Impossible</option>
                </select>
            </div>
        </aside>
        </>
    )
}