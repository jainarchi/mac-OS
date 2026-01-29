import { Children } from 'react'
import './macWindow.scss'
import { Rnd } from "react-rnd"



const macWindow = ({children , width="40vw" , height="60vh"}) => {
  return (
    <Rnd
    default={{
        width: width,
        height: height,
        x:300,
        y:100
    }}
    >

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
