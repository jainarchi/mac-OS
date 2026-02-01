import MacWindow from './macWindow'
import './resume.scss'

const Resume = ({setWindowState , windowName}) => {
  return (
    <MacWindow setWindowState={setWindowState} windowName={windowName} >

       <div className='resumeWindow'>
         <iframe src="/resume.pdf" frameborder="0"></iframe>

       </div>
    </MacWindow>


  )
}

export default Resume
