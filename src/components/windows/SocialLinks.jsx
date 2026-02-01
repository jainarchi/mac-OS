import MacWindow from './macWindow'
import './links.scss'

const links = ({windowName , setWindowState}) => {
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState}>
            <div className="mainContent">
                <div className="social-grid">

                    <div>
                        <a href="https://www.linkedin.com/in/archi-jain-70233b273" target="_blank" className="social-item">
                            <img src="/doc_icons/note.svg" alt="LinkedIn" />
                            <span>LinkedIn</span>
                        </a>
                    </div>



                    <div>
                        <a href="#" target="_blank" className="social-item">
                            <img src="/doc_icons/note.svg" alt="LeetCode" />
                            <span>LeetCode</span>
                        </a>
                    </div>

                    <div>
                        <a href="https://x.com/ajain96756" target="_blank" className="social-item">
                            <img src="/doc_icons/note.svg" alt="Twitter" />
                            <span>Twitter</span>
                        </a>
                    </div>


                </div>
            </div>
        </MacWindow>
    )
}

export default links
