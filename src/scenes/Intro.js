import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container, Row, Col, Hidden } from "react-grid-system";
import { Link } from "react-router-dom";

function Intro() {
  //45494d
  //323c5a
    return (
        <section className="section section-hero section-hero-1 overlay-image" style={{ backgroundColor: '#45494d' }}>
            <Hidden xs sm><Particles
                params={{
                  particles: {
                    number: {
                        value: 100
                    },
                    size: {
                        value: 3
                    },
                    move: {
                      direction: "right"
                  },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                    }
                }
              }}
            /></Hidden>
            
            <div className="display-center">
                <Container>
                <Row style = {{ backgroundColor: "#45494d"}}>
                    <Col md={5} lg={5} xl={5} xxl={5}  style = {{justifyContent: "center"}}>
                        <div className="el-heading" style={{ textAlign: "center", padding: "30px"}}>
                            <img src="/assets/images/about/books-blue.jpg" alt="Anami's Profile Photo" width="300" style={{ borderRadius: '50%',  }}/>
                        </div>
                    </Col>
                    <Col md={7} lg={7} xl={7} xxl={7}>
                        <div className="el-heading" style={{ padding: '30px', maxWidth:'480px'}} >
                            <h1>Hello! I'm Anami</h1>
                            <h2>
                                I'm a{" "}
                                <TextLoop>
                                    <span>Software Engineer</span>
                                    <span>Full-Stack Developer</span>
                                    <span>Nerd</span>
                                </TextLoop>
                                <br />
                                Based in San Francisco
                            </h2>
                            <Link to="//about">
                              <button className="button button-lg button-primary">
                                  <span className="wave"></span>
                                  <span className="text">About Me</span>
                              </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
