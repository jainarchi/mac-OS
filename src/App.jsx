import { useState } from "react"
import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from "./components/Nav.jsx"
import Github from "./components/windows/Github.jsx"
import Notes from "./components/windows/Notes.jsx"
import Resume from "./components/windows/Resume.jsx"
import Cli from "./components/windows/Cli.jsx"


const App = () => {

 const [windowState, setWindowState] = useState({
  github: false,
  notes: false,
  resume: false,
  cli : false
 })


  return (
    <main>
      <Nav  />
      <Dock setWindowState={setWindowState} windowState={windowState}  />


     {windowState.github && <Github windowName='github' setWindowState={setWindowState} />}
     {windowState.notes && <Notes windowName='notes' setWindowState={setWindowState}  />}
     {windowState.resume && <Resume windowName='resume' setWindowState={setWindowState}  />}
     {windowState.cli && <Cli windowName='cli' setWindowState={setWindowState}  />  }
    
   
    </main>
  )
}

export default App
