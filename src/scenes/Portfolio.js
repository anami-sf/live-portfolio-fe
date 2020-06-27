import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Slider from "react-slick"

const service = [
    {
        title: "CapX",
        description: "Crypto currency trading platform",
        tech: "Django, Python, Postgress, Bootstrap, Heroku",
        link: "https://github.com/anami-sf/capX",
        icon: "ti-image",
    },
    {
        title: "Smart Face ID",
        description: "App will find sapien faces from user uploaded images", 
        tech: "REACT, Javascript, Node.js, Express, CSS, HTML5, Heroku",
        link: "https://github.com/anami-sf/blackjack-v2",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Blackjack",
        description: "Play the popular game Blackjack. ", 
        tech: "Fully responsive, Javascript, CSS, HTML5, Heroku",
        link: "https://github.com/anami-sf/blackjack-v2",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Live Portfolio",
        description: "I share my personal background, resume and portfolio. (This website)",
        tech: "REACT, React Router, Javascript, Sass, HTML5, Heroku",
        link: "https://github.com/anami-sf/live-portfolio-fe",
        icon: "ti-paint-bucket",
    },
    {
        title: "Wiki-Code",
        description: "A community based website to create, share, and contribute to code recipes",
        tech: "Javascipt, Node.js, Express, CSS, HTML5, Heroku",
        link: "https://github.com/anami-sf/wikicode",
        icon: "ti-paint-bucket",
    },
    {
        title: "Anami Air",
        description: "Airflight scheduling platform",
        tech: "Javascipt, Node.js, Express, CSS, HTML5, Heroku",
        link: "/service-details",
        icon: "ti-brush-alt",
    },

];

function Portfolio() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: 50,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 100,
                },
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <section className="section section-service section-service-5">
            <div className="display-spacing mb-0">
                <Container>
                    <header className="el-heading el-heading-center">

                        <h3>Porfolio</h3>
                        <div className="divider divider-1-reverse divider-1-1"></div>
                        <div className="divider divider-1-reverse divider-1-2"></div>
                    </header>
                    <Slider className="el-slider el-slider-plr--15 mb-30" {...sliderSettings}>
                        {service.map((item, index) => (
                            <a href={item.link}>
                                <div className="service-wrap" key={index}>
                                    <div className="service-item">
                                        <div className="service-head">
                                            <span className={`el-icon-icon ${item.icon}`}></span>
                                        </div>
                                        <div className="service-body">
                                            <a href={item.link} ><h3>{item.title}</h3></a>
                                            <p>{item.description}</p>
                                            <p><b>Tech-stack: </b>{item.tech}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Portfolio;
