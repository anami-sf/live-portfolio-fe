import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2>
                                        <span>Hello! I'm Anami</span>
                                    </h2>
                                    <div className="divider divider-1"></div>
                                </header>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <img src="/assets/images/about/livermore-round.png" alt="Anami Profile Pic" width="250" style={{ borderRadius: "50%", border: "black 2px solid"}}></img>
                            </div>
                            
                        </Col>
                        <Col>
                            <h2 className="el-icon">
                                    <span className="el-icon-title">Growing Up</span>
                            </h2>                                    
                            <p>I grew up in Mexico and I’m the oldest of 4 kids. Growing up in a big family taught me to get along with many different personalities and feel comfortable in just about any environment.</p>

                            <p>I came to the U.S. with my family when I was 14 but did not speak any English. I had to be quick on my feet in order to adapt to life in a new country and learn a new language. I was ranked 11th in my high school graduating class of about 500 students. What I loved most from my new life in the U.S. was the diversity of people I came to meet and learning so much from them.</p>
                            <h2 className="el-icon">
                                    <span className="el-icon-title">Education & Career</span>
                            </h2>                                    
                            <p>Before plunging into software engineering I earned a Masters degree in Applied Economics and worked as a Financial Planner. It was a great experience from which I learned the value of good work ethics, critical thinking, and building relationships.</p>
                            <p>After a while I realized I wasn’t completely fulfilled in this field. So after much soul searching and research I decided to enroll in an Immersive Software Engineering program. It was the best decision I have ever made!</p>
                            <p>I was the first student to start a job as a software engineer out of my cohort and love full stack development.</p>
                            <h2 className="el-icon">
                                    <span className="el-icon-title">Interests and Hobbies</span>
                            </h2> 
                            <p>I make an effort to have a positive impact on the people and world around me by staying tuned in to social justice issues and volunteering opportunities. Last year I volunteered as an organizer for WaffleJS which raises funds for Black Girls Code.</p>
                            <p>For fun I like concerts, cooking, painting, playing piano, and salsa dancing. I love to stay active and my daily routine includes yoga, running, swimming and strength training. I also love kayaking and skiing when in season.</p>
                            <h2 className="el-icon">
                                    <span className="el-icon-title">Oh the Places I’ll Go!</span>
                            </h2> 
                            <p>I’m actively working to develop my leadership skills and hope to go into management as I move up in my career. I'm always excited to take on a new challenge, especially solving and debugging complex problems. I cuntinously work on sharpening my technical knowledge by staying on top of new technologies and trends.  </p>
                            <p>At work it is important to me to have a positive and tangible impact toward the growth and success of the company as well as my teammates</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;
