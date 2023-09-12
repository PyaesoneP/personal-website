import './Projects.css'

const Projects = () => {
    return(
      <section>
      <h2>MY Works</h2>
      <div className='projects'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
      </div>
      </section>
    )
  }
  
  const ProjectCard = () => {
    return(
      <div className='project-card'>
      <ProjectImg />
      <ProjectInfo />
      </div>
    )
  }
  
  const ProjectImg = () => {
    return(
      <img></img>
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