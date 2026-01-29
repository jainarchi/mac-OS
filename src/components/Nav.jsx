import './nav.scss'
import DateAndTime from './DateAndTime.jsx'

const Nav = () => {
    return (
        <div>
            <nav>
                <div className="left">
                    <div className='nav-items' >
                        <img src="/navbar_icons/apple_icon.svg" alt="" />
                    </div>

                    <div className='nav-items'>
                        <p>Archi Jain</p>
                    </div>
                    <div className='nav-items'>
                        <p>File</p>
                    </div>
                    <div className='nav-items'>
                        <p>Window</p>
                    </div>
                    <div className='nav-items'>
                        <p>Terminal</p>
                    </div>

                </div>





                <div className="right">
                    <div className='nav-items'>
                        <img src="/navbar_icons/wifi.svg" alt="" />
                    </div>
                    <div className='nav-items'>
                        <DateAndTime />
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Nav
