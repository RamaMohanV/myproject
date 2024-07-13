import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import emotion from "../../Assets/Projects/emotion.png";
import employee from "../../Assets/Projects/employee.png";
import login from "../../Assets/Projects/login.png";
import suicide from "../../Assets/Projects/suicide.png";
import weather from "../../Assets/Projects/weather.png";

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
              imgPath={login}
              isBlog={false}
              title="Dynamic Login Pages"
              description="Dynamic Login Page This project is a simple implementation of a dynamic login page using HTML, CSS, and JavaScript. It provides a user-friendly interface for users to input their credentials and demonstrates how to handle form validation and dynamic UI updates using JavaScript."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Report"
              description="A weather report application project can provide users with accurate and timely weather information to help them make informed decisions about their day-to-day activities. The application can use real-time and historical weather data to provide current weather conditions and predictions for a specific date and time. It can also display visualizations of weather conditions, temperature changes, and humidity changes over time. By using HTML,Css,Javascript,React-js "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Management System"
              description="An employee management system facilitates efficient HR operations by managing employee profiles, attendance, payroll, and performance evaluations. It integrates payroll calculations, training programs, and compliance tracking, ensuring data security and scalability for organizational needs. The system enhances HR processes with intuitive interfaces, robust analytics, and ongoing maintenance for optimal functionality. By using HTML,CSS,Bootstrap, Javascript, React-Js, Java, SpringBoot,Mysql."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Booking Application"
              description="A hotel booking application allows users to search, view details, and book accommodations online. It typically features real-time availability, pricing, and reviews for hotels, along with secure payment options. Users can customize search criteria, manage bookings, and receive confirmations via email or app notifications, enhancing convenience and transparency in travel planning. By using HTML,CSS,Bootstrap, MUI, Javascript,React-Js, Java, SpringBoot,Mysql,SQL."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
