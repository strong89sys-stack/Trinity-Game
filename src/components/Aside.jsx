import './../style/aside.css'

import { RiArrowGoBackFill } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";

import { useEffect } from 'react';

export default function Aside({home, away, second, minute, onRestart, propsTurn}){

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
                        <span>Joueur 1</span>
                        <span>{home}</span>
                    </div>
                    <div className="mid">-</div>
                    <div className="away">
                        <span>Joueur 2</span>
                        <span>{away}</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className='content' style={{ background: propsTurn ? '#4d8eff' : '#ff4d4d' }}>À vous</div>
                </div>
            </div>

            <div className="controls">
                <span>Controls</span>
                <button className='active'>
                    <RiArrowGoBackFill />Revenir
                </button>
                <button onClick={() => onRestart(true)}>
                    <VscDebugRestart />Recommencer
                </button>
                <button>
                    <FaPlus />Nouvelle Partie
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