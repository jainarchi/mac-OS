import { Children } from 'react'
import './macWindow.scss'
import { Rnd } from "react-rnd"



const macWindow = ({children}) => {
  return (
    <Rnd>

        <div className="window">
            <div className='top'>
                <div className="dotes">
                    <div className="dot red"></div>
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

export default macWindow
