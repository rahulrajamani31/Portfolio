import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Frameworks & Tools", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Area of Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 100 },
    { skill: "JavaScript", ratingPercentage: 100 },
    { skill: "C", ratingPercentage: 100 },
    { skill: "C++", ratingPercentage: 100 },
    { skill: "Python", ratingPercentage: 100 },
    { skill: "Dart", ratingPercentage: 100 },
    // { skill: "SQL Server", ratingPercentage: 90 },
    // { skill: "HTML", ratingPercentage: 60 },
    // { skill: "CSS", ratingPercentage: 65 },
    // { skill: "Django", ratingPercentage: 65 },
    // { skill: "ArcGIS Model Builder", ratingPercentage: 75 },
    // { skill: "Kafka", ratingPercentage: 65 },
    // { skill: "MySQL", ratingPercentage: 75 },
  ];

  const applicationSkillsDetails = [
    { skill: "React js", ratingPercentage: 100 },
    { skill: "Flutter", ratingPercentage: 100 },
    { skill: "QT", ratingPercentage: 100 },
    { skill: "MongoDB", ratingPercentage: 100 },
    { skill: "mySQL", ratingPercentage: 100 },
    { skill: "Firebase", ratingPercentage: 100 },
    { skill: "Node js", ratingPercentage: 100 },
    { skill: "JIRA", ratingPercentage: 100 },
    { skill: "Github", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    {
      title: "MedLifePro",
      duration: { fromDate: "Nov 2022", toDate: "Present" },
      description:
        "With this project we developed an mobile app user interface between the patient and the doctor who can have an online conversation and book appoinment andalso we developed an ml model to predict the type of disease using symptoms and was integrated inside the application.",
      subHeading: "Technologies Used: MongoDB, Node JS, Flutter ,Express Js.",
    },
    {
      title: "X-Ray Image Viewer and Editer ",
      duration: { fromDate: "Oct 2022", toDate: "Dec 2022" },
      description:
        "In this project we developed a Desktop Application using Qt software where in the application is used to view the dicom images in a 3D view and thus providing a easy way for the doctors to view and analyze the dicom images and gather the information of the patient’s Condition. ",
      subHeading: "Technologies Used:  Qt,Cmake,VTK.",
    },
    {
      title: "FarmBook",
      duration: { fromDate: "Jan 2021", toDate: "Mar 2021" },
      description:
        "Farm book is a Flutter Application with a lot of farming features and also used to set a constant crop rate over the region by providing the crop cultivation rate.Not only monitoring a crop cultivation rate but also used to monitor the plants growth as well as soil condition.",
      subHeading: "Technologies Used: Flutter, Nodejs, Expressjs, MongoDB",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Sri Ramakrishna Engineering College"}
        subHeading={"Bachelor of Engineering (Computer Science)"}
        fromDate={"2020"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"Premier Vidyaa Vikash Matriculation Higher Secondary School"}
        subHeading={"HSC"}
        fromDate={"2019"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Premier Vidyaa Vikash Matriculation Higher Secondary School"}
        subHeading={"SSLC"}
        fromDate={"2017"}
        toDate={"2018"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"L&T India | Larsen & Toubro"}
          subHeading={"Consultancy Project"}
          fromDate={"Coimbatore,India |November 2022"}
          toDate={"January 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked on Qt C++ Software. We developed a Desktop Application using
            Qt software where in the application is used to view the dicom
            images in a 3D view and thus providing a easy way for the doctors to
            view and analyze the dicom images and gather the information of the
            patient’s Condition.
          </span>
        </div>
        {/* <div className="experience-description">
          <span className="resume-description-text">
            - Developed end-to-end data management system for G&G technical data
            using GIS Framework and Application
          </span>
          <br />
          <span className="resume-description-text">
            - Developed API and real-time monitoring for production and facility
            data.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed ETL tools to digitize multi-document format into
            semi-automated services and database.
          </span>
          // <br />
        </div> */}
      </div>
      <br></br>
      <div className="experience-container">
        <ResumeHeading
          className="Heading01"
          heading={"L&T India | Larsen & Toubro"}
          subHeading={"Consultancy Project"}
          fromDate={"Coimbatore,India | June 2022"}
          toDate={"October 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked on Deep learning - AI - Monai - Medical Related.This Project
            is based on the segmentation of the liver and analyze them in a 3D
            View.For this project we used Monai for this project where in the
            liver images .
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Application SKILLS */
    <div
      className="resume-screen-container application-skills-container"
      key="application-skills"
    >
      {applicationSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Hybrid Application Development"
        description="Built Several Applications on Flutter such as FarmBook,MedLifePro"
      />
      <ResumeHeading
        heading="Web Development"
        description="Built My own portfolio website using react js and node js.As well as Medical Website"
      />
      <ResumeHeading
        heading="Data Structures and Algorithms"
        description="Started to Learn DSA on my third year of my college and still continuing on my learning"
      />
      <ResumeHeading
        heading="Networking"
        description="Had interest in networking and learnt several basic concepts such as network design"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
