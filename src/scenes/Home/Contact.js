import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function Contact() {
    return (
        <section className="section section-contact section-contact-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="contact-image">
                                    <img src="/assets/images/contact/phone-call.jpeg" alt="Anami Profile Pic" style={{ borderRadius: "50%", border: "black 2px solid"}}></img>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="contact-content">
                                <header className="el-heading">
                                    <h3>
                                        <span>Get in touch with me today.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">Email Me</span>
                                    </h2>
                                    <p>anami.127.0.0.1@gmail.com</p>
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">Follow Me</span>
                                    </h2>
                                    <div className="header-follow">
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/anaclopez1/" target="_blank">
                                                <i className="ti-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/anami-sf" target="_blank">
                                                <i className="ti-github"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <i className="ti-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <i className="ti-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </header>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
