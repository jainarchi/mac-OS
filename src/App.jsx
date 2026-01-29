import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from "./components/Nav.jsx"
import Github from "./components/windows/Github.jsx"


const App = () => {
  return (
    <main>
      <Nav   />
      <Github />
      <Dock  />


   
    </main>
  )
}

export default App
