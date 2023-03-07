import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"My Ongoing Activities"}
        subHeading={"Wait & Watch"}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-desc">
                    <p>
                      <i className="fa fa-quote-left" />
                      Preparing DSA for the upcoming placement classes and going
                      through the concepts on trees.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Data Structure and Algorithms using Java</h5>
                    {/* <p>IT Related</p> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Ongoing consultancy projects based on the liver tumor
                      segmentation with my team mates.This involves machine
                      learning related concepts.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>L&T India | Larsen & Toubro</h5>
                    {/* <p>IT Related</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Developed my own Portfolio using the MERN stack and has
                      posted it in the github repository.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Portfolio Website</h5>
                    {/* <p>IT Related</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      We have worked on the academic year project which is also
                      based on the machine learning related works which is the
                      segmentation of the liver from the abdomen images.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Mini-Project</h5>
                    <p>SREC</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Administer several E&P technical application from
                      Geoscience, Drilling to Production.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Application Technical Support</h5>
                    <p>E&P Related</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Multi-attribute and pore pressure analysis for several
                      field area in Indonesia
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Reservoir Analysis Project</h5>
                    <p>E&P Related</p>
                  </div>
                </div>
              </div> */}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
