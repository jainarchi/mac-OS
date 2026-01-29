import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from "./components/Nav.jsx"
import Github from "./components/windows/Github.jsx"
import Notes from "./components/windows/Notes.jsx"
import Resume from "./components/windows/Resume.jsx"


const App = () => {
  return (
    <main>
      <Nav   />
      {/* <Github /> */}
      {/* <Notes /> */}
      <Resume />

      <Dock  />


   
    </main>
  )
}

export default App
