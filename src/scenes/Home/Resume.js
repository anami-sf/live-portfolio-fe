import React from "react";
import { Container, Row, Col } from "react-grid-system";

const education = [
    {
        title: "General Assembly",
        subtitle: "Software Engineering Immersive | San Francisco, CA",
        date: "(July 2019 - Sept 2019)",
        icon: "ti-crown",
    },
    {
        title: "San Jose State University",
        subtitle: "Economics M.A. | San Jose, CA",
        description: "Blah consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        date: "(August 2015 - May 2017)",
        icon: "ti-cup",
    },
];
const experience = [
    {
        title: "Software Engineer",
        subtitle: "Hint Health | San Francisco, CA",
        description: "Built back-end features with with Ruby on Rails. Built front-end features with with Angular. Researched and Fixed bugs. Drove projects to completion within tight deadlines and with attention to detail",
        date: "January 2020 - April 2020",
        icon: "ti-pencil-alt",
    },
    {
        title: "Software Engineer",
        subtitle: "Neyborly | Oakland, CA",
        description: "Built website features from scratch to include our homepage, FAQ page with search and filters, integrated third party chat application. Developed front-end with React, Redux and bootstrap.Implemented emails and invoices among other features through our Rails backend.",
        date: "(September 2019 - December 2019)",
        icon: "ti-heart",
    },
    {
        title: "Technical Support Engineer​ ",
        subtitle: "Luma Health | San Francisco, CA",
        description: "Solved technical support tickets. Identified and triaged system-wide platform issues. Collaborated with the engineering team in escalating complex issues Communicated with customers with a focus on helping them learn",
        date: "(February 2019 - July 2018)",
        icon: "ti-paint-bucket",
    },
    {
        title: "Investor Relations Associate ",
        subtitle: "RealtyShares | San Francisco, CA",
        description: "Built website features from scratch to include our homepage, FAQ page with search and filters, integrated third party chat application. Developed front-end with React, Redux and bootstrap.Implemented emails and invoices among other features through our Rails backend.",
        date: "(Febraury 2017 - October 2019)",
        icon: "ti-heart",
    },
    {
        title: "Financial Planner",
        subtitle: "Waddell & Reed | Concord, CA",
        description: "Advise clients in selection of financial strategies. Meet clients regularly to review portfolios and maintain a high level of engagement. Identify most profitable sources of revenue with advanced Excel reports.",
        date: "(February 2019 - July 2018)",
        icon: "ti-paint-bucket",
    },
];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Experience & Education</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>{item.subtitle}</h6>
                                                    <h6>{item.date}</h6>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Resume;
