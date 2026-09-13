import './../style/header.css'

import { MdOutlineNotifications } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function Header() {
    return (
        <>
        <header className='shadow'>
            <div className="title">Trinity</div>
            <nav>
                <ul>
                    <li><a className='active' href="#">Play</a></li>
                    <li><a href="#">Stats</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <div className="items">
                <button>
                    <span><MdOutlineNotifications /></span>
                </button>
                <button>
                    <span><MdOutlineAccountCircle /></span>
                </button>
            </div>
        </header>
        </>
    )
}