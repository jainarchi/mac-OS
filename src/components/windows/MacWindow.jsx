import { useState } from 'react'
import { Rnd } from "react-rnd"
import './macWindow.scss'

const MacWindow = ({children, width="40vw", height="60vh", setWindowState, windowName}) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true); // Pehle animation start karo
        setTimeout(() => {
            setWindowState(state => ({...state, [windowName]: false})); // Phir DOM se hatao
        }, 500); // 500ms animation ka time hai
    };

    return (
        <Rnd
            default={{ width, height, x: 300, y: 100 }}
            enableResizing={!isClosing} // Animation ke waqt resize band
            disableDragging={isClosing}
        >
            <div className={`window ${isClosing ? 'is-closing' : ''}`}>
                <div className='top'>
                    <div className="dotes">
                        <div onClick={handleClose} className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <p>archijain - zsh</p>
                </div>
                <div className="mainContent">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow;