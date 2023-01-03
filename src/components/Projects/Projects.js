import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/tic.PNG";
import emotion from "../../Assets/Projects/portfolio.PNG";
import editor from "../../Assets/Projects/Finshare.PNG";
import chatify from "../../Assets/Projects/chat.png";
import suicide from "../../Assets/Projects/todo.PNG";
import bitsOfCode from "../../Assets/Projects/weather.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chit-Chat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with React.JS, Chakra-UI, Node.JS, Express.JS and MongoDb. Have features which allows user for realtime messaging, Emoji, Group Chat as well as supports reactions on messages."
              ghLink="https://github.com/vivsid746/Mern-Chit-Chat"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FinShare"
              description="FinShare is a file-sharing web application. Select a Random file and upload get a random link to share with your
              circle. The Users with the link will be able to download your file. Supports sending an automated email with a file link attached to it, to
              whom you want to share the file. Technology used JavaScript, NodeJS, ExpressJS, Mongo DB"
              ghLink="https://github.com/vivsid746/finshare"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather-web"
              description="Weather app fetches the current weather from OpenWeatherMap APIs for
              our city.A weather app made with React and OpenWeatherMap API. Technology used  React JS, API’s( OpenWeatherMap, Axios) ,
              Styled-Components.
              "
              ghLink="https://github.com/vivsid746/Weather_app"
              demoLink="https://weather-app-vivsid746.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              ti
              tle="Tic Tac Toe"
              description="A Simple Tic-Tac-Toe game created with React.This Tic-Tac-Toe project is a simulation of the Famous real-world Tic-Tac-Toe Game, but instead of using circles and X's you can pick from a lot of other shapes, it was built by ReactJS"
              ghLink="https://github.com/vivsid746/tic-tac-toe"
              demoLink="https://tic-tac-toe-vivsid746.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="To-Do-List"
              description="Simple todo list web app to save and manage todos, and save them to the local storage The web app has a beautiful UI design that is make it run adding todos. Technology used html, css, javascript"
              ghLink="https://github.com/vivsid746/To-do-list"
              demoLink="https://to-do-list-vivsd746.netlify.app/" 
              // <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Portfolio"
              description="A portfolio is a compilation of materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic. 
              Portfolio is a fully responsive personal portfolio website, responsive for all devices.My self coded personal website build with React.js
              "
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://viveksinghal.me/"      
              // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
