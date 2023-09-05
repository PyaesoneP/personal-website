import { useState } from 'react'
import './App.css'

const Hero = () => {
  return(
    <div>
      <HeroImg />
      <AboutMe />
    </div>
  )
}

const HeroImg = () => {
  return (
    <img/>
  )
}

const AboutMe = () => {
  return(
    <>
    <h1>About Me</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio vitae, commodi architecto reprehenderit explicabo ipsa mollitia sapiente expedita, atque voluptates deleniti reiciendis dolores, provident delectus autem accusamus asperiores quidem!</p>
    <div></div>
    </>
  )
}

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

const Contact = () => {
  return(
    <>
    <ContactInfo />
    <ContactImg />
    </>
  )
}

const ContactInfo = () => {
  return(
    <>
    <h2>Contact Me</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sequi iure omnis porro excepturi totam nostrum, ad numquam illo provident a, vel voluptatem nam fugit tempore eius labore aliquid quidem?</p>
    </>
  )
}

const ContactImg = () => {
  return(
    <>
    <img></img>
    </>
  )
}

function App() {
return(
  <>
  <Hero />
  <Projects />
  <Contact />
  </>
)
}

export default App
