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

  export default Hero;