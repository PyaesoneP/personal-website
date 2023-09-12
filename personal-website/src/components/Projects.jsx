const Projects = () => {
    return(
      <>
      <h2>MY Works</h2>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </>
    )
  }
  
  const ProjectCard = () => {
    return(
      <>
      <ProjectImg />
      <ProjectInfo />
      </>
    )
  }
  
  const ProjectImg = () => {
    return(
      <>
      <img></img>
      </>
    )
  }
  
  const ProjectInfo = () => {
    return(
      <>
      <h3>Project Name</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quod accusantium nemo harum tenetur perferendis, officiis, voluptatem eveniet illum eos excepturi, nesciunt aliquid fugit esse! Totam quod asperiores iste esse?</p>
      </>
    )
  }

  export default Projects;