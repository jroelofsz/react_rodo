import React from "react";
import Profile from "../Auth/Profile";
import { useAuth } from "../../contexts/AuthContext";
import Logout from "../Auth/Logout";
import { Jumbotron, Carousel, Container } from "react-bootstrap";
import "./Home.css";
import image2 from '../../images/todo.jpg'
import image3 from '../../images/home2.jpg'
import linkedin from '../../images/linkedin.jpg'


export default function Home() {
  const { currentUser } = useAuth();
  return (
    <section className="home">
      <Jumbotron className="jumbo">
        <h1 className="display-3">React Todo Application!</h1>
        <p className="lead">
          This is a simple react web application that can help you keep track of
          todo items in your life!
        </p>
      </Jumbotron>
      <br />
      <Container className="mb-5 h-50">
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Create your own Todos!</h3>
            <p>Only if you are me of course.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Sign in with Github!</h3>
            <p>Check the top left of your screen!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={linkedin}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Folow me on Linkedin!</h3>
            <a className="btn btn-info" href="https://www.linkedin.com/in/jacob-roelofsz/ " rel="noreferrer" target="_blank">Click Here!</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
      {currentUser && <Logout />}
    </section>
  );
}
