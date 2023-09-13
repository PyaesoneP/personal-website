import './Projects.css'
import tictactoe from '../assets/Web capture_13-2-2023_23127_pyaesonep.github.io.jpeg'
import bookStore from '../assets/Web capture_10-2-2023_125022_pyaesonep.github.io.jpeg'
import inputForm from '../assets/Web capture_10-2-2023_124843_pyaesonep.github.io.jpeg'
import etchaSketch from '../assets/Web capture_10-2-2023_12534_pyaesonep.github.io.jpeg'

const Projects = () => {
  const ticTacToeImg = tictactoe;
  const bookStoreImg = bookStore;
  const form = inputForm;
  const etchASketch = etchaSketch;
    return(
      <section>
      <h2>MY Works</h2>
      <div className='projects'>
          <ProjectCard imgSrc = {ticTacToeImg}/>
          <ProjectCard imgSrc = {bookStoreImg}/>
          <ProjectCard imgSrc = {form}/>
          <ProjectCard imgSrc = {etchASketch}/>
          <ProjectCard />
          <ProjectCard />
      </div>
      </section>
    )
  }
  
  const ProjectCard = (props) => {
    const src = props.imgSrc;
    return(
      <div className='project-card'>
      <ProjectImg src = {src} />
      <ProjectInfo />
      </div>
    )
  }
  
  const ProjectImg = (props) => {
    return(
      <img src = {props.src}></img>
    )
  }
  
  const ProjectInfo = () => {
    return(
      <div className='project-info'>
      <h3>Project Name</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod accusantium nemo harum tenetur perferendis, officiis, voluptatem eveniet illum eos excepturi, nesciunt aliquid fugit esse! Totam quod asperiores iste esse?</p>
      </div>
    )
  }

  export default Projects;