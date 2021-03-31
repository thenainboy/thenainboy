import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"
const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src="https://github.com/thenainboy/thenainboy/blob/master/src/images/tnblogo.png" alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
