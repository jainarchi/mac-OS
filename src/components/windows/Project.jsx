import MacWindow from "./macWindow"
import githubData from '../../assets/github.json'
import './project.scss'


const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {

  return <div className="card">

    <img src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p>{data.description}</p>

    <div className="tags">
      {
        data.tags.map(tag => <p className="tag">{tag}</p>)
      }
    </div>

    <div className="urls">
      <a href={data.repoLink}>Repository</a>
     { data.demoLink && <a href={data.demoLink}>Demo Link</a>}
    </div>


  </div>
}



const Project = ({setWindowState , windowName}) => {
  return (
    <MacWindow setWindowState={setWindowState} windowName={windowName} >
      
      <div className="cards">
             
        {
          githubData.map((project) => {
             return <GitCard data={project}/>
          })
        }

      </div>

    </MacWindow>
  )
}

export default Project
