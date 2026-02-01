import { useEffect, useState } from "react"
import Markdown from "react-markdown";
import MacWindow from "./macWindow";
import './notes.scss'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Notes = ({setWindowState , windowName}) => {
  const [md, setMd] = useState(null);

  useEffect(() => {
    fetch('/notes.txt')
      .then(res => res.text())
      .then(text => setMd(text))

  }, [])


  return (
    <MacWindow setWindowState={setWindowState} windowName={windowName}>
      <div className="note-window">
        {md ?
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {md}
          </SyntaxHighlighter>
          :
          <p>Loading...</p>}
      </div>


    </MacWindow>
  )
}

export default Notes
