import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-grid-system";

const service = [
    {
        title: "Front-End",
        subtitle: "React, Redux, Angular, Bootstrap",
        link: "/service-details",
        icon: "ti-paint-bucket",
    },
    {
        title: "Backend",
        subtitle: "Django, Rails, NodeJS, Express",
        icon: "ti-ruler-alt-2",
    },

    {
        title: "Databases​ ",
        subtitle: "PostgreSQL, NoSql, MongoDB, Redis",
        icon: "ti-image",
    },
    {
        title: "WEB DESIGN",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit incididunt ut labore et dolore",
        link: "/service-details",
        icon: "ti-paint-bucket",
    },
    {
        title: "GRAPHIC DESIGN",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit incididunt ut labore et dolore",
        link: "/service-details",
        icon: "ti-brush-alt",
    },
];

function Service() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
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
    };

    return (
        <section className="section section-service section-service-5">
            <div className="display-spacing mb-0">
                <Container>
                    <header className="el-heading el-heading-center">

                        <h3>Skills</h3>
                        <div className="divider divider-1-reverse divider-1-1"></div>
                        <div className="divider divider-1-reverse divider-1-2"></div>
                    </header>
                    <Slider className="el-slider el-slider-plr--15 mb-30" {...sliderSettings}>
                        {service.map((item, index) => (
                            <div className="service-wrap" key={index}>
                                <div className="service-item">
                                    <div className="service-head">
                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                    </div>
                                    <div className="service-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Service;
