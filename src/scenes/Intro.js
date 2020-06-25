import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <section className="section section-hero section-hero-1 overlay-image" style={{ backgroundColor: '#45494d' }}>
            <Particles
                params={{
                    "particles": {
                    "number": {
                      "value": 80,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 125,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 6,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 150,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                }}
            />
            
            <div className="display-center">
                <Container>
                <Row>
                    <Col md={5} lg={5} xl={5} xxl={5}  style = {{ backgroundColor: "#45494d", justifyContent: "center"}}>
                        <div className="el-heading" style={{ textAlign: 'center', padding: '30px', backgroundColor: '#45494d' }}>
                            <img src="/assets/images/hero/profile-livermore-1920-1280.jpg" alt="Anami's Profile Photo" width="200" height="200" style={{ borderRadius: '50%' }}/>
                        </div>
                    </Col>
                    <Col md={7} lg={7} xl={7} xxl={7} style = {{ backgroundColor: '#45494d'}} >
                        <div className="el-heading" style={{ padding: '30px', maxWidth:'480px', backgroundColor: '#45494d'}} >
                            <h2>Hello! I'm Anami</h2>
                            <h4>
                                I'm a{" "}
                                <TextLoop>
                                    <span>Software Engineer</span>
                                    <span>Full-Stack Developer</span>
                                    <span>Nerd</span>
                                </TextLoop>
                                <br />
                                Based in San Francisco
                            </h4>
                            <Link to="/about">
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
