import MacWindow from './macWindow'
import './resume.scss'

const Resume = () => {
  return (
    <MacWindow   >

       <div className='resumeWindow'>
         <iframe src="/resume.pdf" frameborder="0"></iframe>

       </div>
    </MacWindow>


  )
}

export default Resume
