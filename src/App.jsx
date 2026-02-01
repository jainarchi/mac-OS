import { useState } from "react"
import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from "./components/Nav.jsx"
import Notes from "./components/windows/Notes.jsx"
import Resume from "./components/windows/Resume.jsx"
import Cli from "./components/windows/Cli.jsx"
import Links from "./components/windows/SocialLinks.jsx"
import Project from "./components/windows/Project.jsx"

const App = () => {

 const [windowState, setWindowState] = useState({
  project: false,
  notes: false,
  resume: false,
  cli : false,
  socialLinks: false
 })


  return (
    <main>
      <Nav  />
      <Dock setWindowState={setWindowState} windowState={windowState}  />



     {windowState.notes && <Notes windowName='notes' setWindowState={setWindowState}  />}
     {windowState.resume && <Resume windowName='resume' setWindowState={setWindowState}  />}
     {windowState.cli && <Cli windowName='cli' setWindowState={setWindowState}  />  }
     {windowState.socialLinks && <Links windowName='socialLinks' setWindowState={setWindowState}/> }
     {windowState.project && <Project windowName='project' setWindowState={setWindowState}/> }



    
   
    </main>
  )
}

export default App
