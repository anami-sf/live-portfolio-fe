import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function Contact() {
    return (
        <section className="section section-contact section-contact-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <header className="el-heading">
                                <h3>
                                    <span>Get in touch with me today</span>
                                </h3>
                                <div className="divider divider-1"></div>
                            </header>
                        </Col>
                        <Col lg={5} xl={5} xxl={5}>
                                <div className="contact-image" style={{textAlign: "center"}}>
                                    <img src="/assets/images/contact/phone-call.jpeg" alt="Anami Profile Pic" width="200" style={{ borderRadius: "50%", border: "black 2px solid"}}></img>
                                </div>
                        </Col>
                        <Col>
                            <h2 className="el-icon">
                                <span className="el-icon-title">Email me</span>
                            </h2>
                            <div >
                            <ul>
                                <li>
                                    <a href = "mailto: anami.127.0.0.1@gmail.com" style={{ color: "blue", textDecorationLine: "underline"}}>anami.127.0.0.1@gmail.com</a>
                                </li>
                            </ul>
                            </div>
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
