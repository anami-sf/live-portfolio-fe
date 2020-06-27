import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Container, Row, Col } from "react-grid-system";

// Components
import Headline from "../components/common/Headline";

function Service() {

    return (
        <section className="section section-portfolio section-portfolio-1">
        <div className="display-spacing">
            <Container className="container">
                <Headline label="Skills" divider_1={true} position="center" />
                <Row className="pt-30">
                                <Col xs={12} sm={12} md={6}>
                                    <div className="el-card-icon">
                                        <div className="el-icon">
                                            <span className="el-icon-icon ti-ruler-pencil"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Languages</h5>
                                            <p>Python,Ruby, C, JavaScript(ES6+)</p>
                                            
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="el-card-icon">
                                        <div className="el-icon">
                                            <span className="el-icon-icon ti-brush-alt"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Front-end</h5>
                                            <p>React with Redux, Angular</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="el-card-icon">
                                        <div className="el-icon">
                                        <span className="el-icon-icon ti-image"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Dabases</h5>
                                            <p>SQL, NoSQL, PostgreSQL, MongoDB, Redis, AWS RDS</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="el-card-icon">
                                        <div className="el-icon">
                                            <span className="el-icon-icon ti-ruler-pencil"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Backend</h5>
                                            <p>Django, Rails, NodeJS, Nginx, AWS</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="el-card-icon">
                                        <div className="el-icon">
                                            <span className="el-icon-icon ti-ruler-pencil"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Deployment & CI</h5>
                                            <p>Docker, Sidekiq, Zeus, CircleCI, Jira</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="el-card-icon">
                                        <div className="el-icon">
                                            <span className="el-icon-icon ti-mobile"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Project Management</h5>
                                            <p>Jira, Trello, Basecamp </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>           
            </Container>
        </div>
        </section>
    );
}

export default Service;
