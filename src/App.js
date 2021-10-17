import React, { Component } from 'react'
import './App.css';
import Greetings from "./components/Greetings/Greetings";
import SkillEle from "./components/SkillElement/SkillElement";
import Project from "./components/Project/Project";
import LongJob from "./components/Job/LongJob";
import MobileNav from "./components/MobileNav/MobileNav";

import {ReactComponent as LogoAI} from "./icons/AI.svg";
import {ReactComponent as LogoPY} from "./icons/python.svg";
import {ReactComponent as LogoCV} from "./icons/computer-vision.svg";
import {ReactComponent as LogoJV} from "./icons/java.svg";
import {ReactComponent as LogoWD} from "./icons/web-dev.svg";
import {ReactComponent as LogoEL} from "./icons/circuit.svg";

import main_logo from './images/main-logo.png'
import washu_logo from './icons/washu.png'
import juniata_logo from './icons/juniata.svg'

import hexapod_img from './images/hexapod.jpg'
import facedetector_img from './images/facedetector.jpg'
import resumeapp_img from "./images/resume-app.PNG";
import steeringwheel_img from "./images/steeringwheel.jpg";

import emailjs, {init} from 'emailjs-com'
import {Checkmark} from 'react-checkmark'

import smoothscroll from 'smoothscroll-polyfill'

import HexapodPopup from "./components/Project/ProjectPopups/Hexapod"
import FaceDetectorPopup from "./components/Project/ProjectPopups/FaceDetector"
import ResumeAppPopup from "./components/Project/ProjectPopups/ResumeApp"
import SteeringWheel from "./components/Project/ProjectPopups/SteeringWheel"


class App extends Component {

  render() {
    // let LOGO_COLOR = "#db1a57";
    let LOGO_COLOR = "rgb(255, 94, 31)";
    let resume_link = "https://drive.google.com/file/d/1pdUiCdqH1s_wjecRcxyPD_VkFxI9EkmD/view?usp=sharing";
    return (
    <div className="App">

      <MobileNav/>
      <div onClick={function(){
        document.getElementById("sidebar").classList.remove("active");
      }}>
      {/*MAIN BACKGROUND*/}
      <div className="main-background">
        <div className="logo-container">
          <a href="/"> <img src={main_logo} className="main-logo"/> </a>
        </div>

        <div className="nav-bar" id="window-nav-bar">
          <ul id="nav-bar-options">
            <li><a href="#about-me-section"> about me </a></li>
            <li><a href="#skills-section"> skills </a></li>
            <li><a href="#projects-section"> projects </a></li>
            <li><a href="#experience-section"> experience </a></li>
            <li><a href={resume_link} target="_blank"> resume </a></li>
            <li><a href="#contact-anchor"> contact </a></li>
          </ul>
        </div>

        <Greetings/>
      </div>

      {/*ABOUT ME SECTION*/}
      <div className="section" id="about-me-section">
        <div className="sub-section">
          <h1 className="section-title fadeOnScroll"> ABOUT ME </h1>
          <div className="about-me ">
            <div className="pic-container fadeOnScroll fadeFromLeft">
              <img src="./images/profile-pic.jpg"/>
              <div>
                <a href="https://www.facebook.com/minh.hoang.7505" target="_blank"> <i className="fab fa-facebook-square"></i> </a>
                <a href="https://github.com/hoanghm" target="_blank"> <i className="fab fa-github-square"></i> </a>
                <a href="https://www.linkedin.com/in/hoangha98/" target="_blank"> <i className="fab fa-linkedin"></i> </a>
              </div>
            </div>

            <ul className="fadeOnScroll fadeFromRight">
              <li>
                I received a <strong>B.S in Engineering Physics</strong> from <a href="">Juniata College</a> in May 2021 where I made Dean's List evevery semester achieved a final GPA of <strong>3.96</strong>/4.00.
              </li>
              <li>
                  I am pursuing a <strong>B.S in Computer Science</strong> and a <strong>M.S in Data Analytics Statistics</strong> at <a
                  href="">Washington University in Saint Louis</a> (Current GPA: <strong>4.00</strong>/4.00). My expected graduation date is May 2023.
              </li>
              <li>  I have a strong background in Computer Science, Mathematics, and Physics. </li>
              <li>  My goal is to become a <strong>Machine Learning Engineer</strong>, though I am also interested in Robotics. </li>
              <li> I'm looking for an internship that focuses on the filed of Data Science/ Machine Learning next summer 2022.</li>
              <li>
                <a href={resume_link} target="_blank"> <button className="sub-button"><i className="far fa-file"></i> Resume </button> </a>
                <a href="./documents/WashUtranscript.pdf" target="_blank"> <button className="sub-button"><i className="far fa-file"></i> Transcript WU </button> </a>
                <a href="./documents/JCtranscript.pdf" target="_blank"> <button className="sub-button"><i className="far fa-file"></i> Transcript JC </button> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/*SKILLS SECTION*/}
      <div className="section skill-section">
        <div className="sub-section" id="skills-section">
          <h1 className="section-title fadeOnScroll"> SKILLS </h1>
          <p className="section-intro fadeOnScroll"> I'm always in the process of learning something new, but below are my main skills :) </p>
          <div className="skill-line">
              <SkillEle
                title = {"Machine Learning"}
                description = {
                    <div>
                        As a Data Analytics & Statistics graduate student who focuses on Machine Learning, I have <hl>strong theoretical knowledge</hl> about
                        the ideas of Machine Learning. I also have a lot of hands-on experience in <hl>developing</hl> and <hl>deploying</hl> Machine Learning models.
                    </div>
                }
                logo = {<LogoAI fill={LOGO_COLOR}/>}
              />

              <SkillEle
                title = {"Python"}
                description = {
                    <div>
                        I have over <hl>4+ years</hl> of programming in Python. I understand and know how to use a lot of Python
                        libraries and frameworks effectively, including those related to Machine Learning <hl>(Tensorflow, Keras, Scikit-learn)</hl>,
                        Web Developing <hl>(Flask, Django)</hl>, or just General Purpose <hl>(Numpy, Pandas, etc.)</hl> libraries.
                    </div>
                }
                logo = {<LogoPY fill={LOGO_COLOR}/>}
              />
          </div>



          <div className="skill-line">
              <SkillEle
                title = {"Computer Vision"}
                description = {
                    <div>
                        Computer Vision is my favorite subset of <hl>Deep Learning</hl>. Apart from a strong background
                        in the theories of how Computer Vision works, I have a lot of experience working with
                        <hl> OpenCV, TensorFlow</hl> (both 1 and 2) <hl>, Keras, YOLO V3+V4</hl>. My most recent project
                        <hl> Facial Detector </hl> is mentioned below.
                    </div>
                }
                logo = {<LogoCV fill={LOGO_COLOR}/>}
              />

              <SkillEle
                title = {"Java"}
                description = {
                    <div>
                        I have over <hl>3+ years</hl> of working on numerous projects, tutoring, and being a T.A for C.S classes taught in Java (and <hl>C++</hl>).
                        I am confident to say I understand the <hl>Object Oriented Programming</hl> characteristic of Java very well, thanks to constant
                        review opportunities given by my tutoring and T.A positions every semester.
                    </div>
                }
                logo = {<LogoJV fill={LOGO_COLOR}/>}
              />
          </div>

          <div className="skill-line">
              <SkillEle
                title = {"Web Development"}
                description = {
                    <div>
                        I am fluent in the main front-end languages <hl>JavaScript, HTMl, CSS</hl>. I have experience working with many
                        popular web frameworks including <hl>React</hl> (what this website is built on), <hl>Flask</hl> (for Machine Learning APIs), <hl>Django</hl>,
                        and <hl>Node.js</hl>. I also have experience with <hl>Heroku</hl> and <hl>Amazon AWS EC2</hl> for hosting web applications with databases and APIs.
                    </div>
                }
                logo = {<LogoWD fill={LOGO_COLOR}/>}
              />

              <SkillEle
                title = {"Electronics"}
                description = {
                    <div>
                        After getting my first hands-on experience on the Arduino by building a Bluetooth RC car 4 years ago, I have worked
                        on quite a few electronics projects using <hl>Arduino variants</hl> and <hl>Raspberry Pi</hl> as the main control unit,
                        including the fairly complex project <hl>"Hexapod"</hl> mentioned below.
                    </div>
                }
                logo = {<LogoEL fill={LOGO_COLOR}/>}
              />
          </div>

        </div>
      </div>



      {/*PROJECTS SECTION*/}
      <div className="project-section section">
        <div className="projects" id="projects-section">
          <h1 className="section-title fadeOnScroll"> PROJECTS </h1>
          <p className="section-intro fadeOnScroll">
            Below are my most mention-worthy personal projects. I will keep this list updated.
          </p>

          <div className="project-line">
              <Project
              img={steeringwheel_img}
              title={"Steering Wheel Simulator"}
              description={"A Steering Wheel made from cardboard that is capable of controlling any PC racing game"}
            />
              <Project
              img={facedetector_img}
              title={"Face Detector"}
              description={"A Face Detector model that has a live API running on AWS EC2."}
            />

          </div>

          <div className="project-line">
            <Project
              img={resumeapp_img}
              title={"This website"}
              description={"This portfolio website that you are viewing."}
            />
            <Project
              img={hexapod_img}
              title={"Hexapod"}
              description={"A 3D-printed hexapod with 18 DOF build from scratch using RaspberryPi 3 Model B as the main control unit."}
            />
          </div>

        </div>
      </div>


      {/*Experience Section*/}
      <div className="section experience-section" id="experience-section">
        <div className="experience">
          <h1 className="section-title fadeOnScroll"> WORK EXPERIENCE </h1>
          <p className="section-intro fadeOnScroll"> I have a lot of experience working with other people to reach the same goal. </p>

          <LongJob
            toggle = {this.jobToggle}
            img = {washu_logo}
            company = {"Washington University in St. Louis"}
            title = {"Teaching Assistant Positions"}
            sub_positions = {[
              {title: 'Analysis of Algorithms', date: 'Jan 2021 - May 2021',
                  description:`This class introduces techniques for the mathematical analysis of algorithms, including randomized 
                  algorithms and non-worst-case analyses such as amortized and competitive analysis. Introduces the 
                  standard paradigms of divide-and-conquer, greedy, and dynamic programming algorithms, as well as reductions.`},
              {title: 'Data Structures & Algorithms', date: 'Jun 2021 - Jul 2021',
                  description:`This class is about the study of fundamental algorithms, data structures, and their effective use in a 
                  variety of applications. Emphasizes importance of data structure choice and implementation for obtaining the 
                  most efficient algorithm for solving a given problem.`},
              {title: 'Intro to CS', date: 'Sep 2020 - Dec 2020',
                  description:`An introduction to software concepts and implementation, emphasizing problem solving through 
                  abstraction and decomposition. Introduces processes and algorithms, procedural abstraction, 
                  data abstraction, encapsulation, and object-oriented programming.`}
            ]}
          />

          <LongJob
            toggle = {this.jobToggle}
            img = {juniata_logo}
            company = {"Juniata College"}
            title = {"T.A and Tutor Positions"}
            sub_positions = {[
              {title: 'Physics Lab I and II Teaching Assistant', date: 'Aug 2018 - Apr 2020',
                  description: `Assist and supervise students with their physics lab work.`},
              {title: 'Computer Science I and II Tutor', date: 'Feb 2018 - Apr 2020',
                  description: `These classes are mainly about basic data structures and how to implement, use them through games, modules, and other projets in Java.`},
              {title: 'Calculus I, II, and III Tutor', date: 'Feb 2018 - Apr 2020',
                  description: `This series of 3 calculus classes cover all college-level knowledge about Calculus.`},
              {title: 'Physics I and II Tutor', date: 'Feb 2018 - Apr 2020',
                  description: `These two calculus-based classes cover the fundamental knowledge about Physics, including Principle of Mechanics, Thermodynamics, Electromagnetic Waves, etc.`}
            ]}
          />

        </div>
      </div>


      {/*Contact Section*/}
      <div className="ending">
        <div className="contact-section">
            <h1 className="contact-title fadeOnScroll" id="contact-anchor"> Contact Me </h1>
            <p className="contact-line fadeOnScroll"> Reach out for any inquiry or just to say hello :) </p>

            <form id="contact-form" onSubmit={this.submitMessage}>
                <input className="form-control fadeOnScroll" id="email" name="email" placeholder="Your email..." required type="text"/>
                <input className="form-control fadeOnScroll" id="subject" name="subject" placeholder="Subject..." required type="text"/>
                <textarea className="form-control no-resize fadeOnScroll" cols="30" id="message" name="message" placeholder="Message..." required rows="10"/>
                <div style={{width: "100%", height: "20px"}}/>
                <input className="form-control btn contact-button fadeOnScroll" id="submit" name="submit" type="submit" value="SUBMIT"/>
            </form>
            <div id="checkmark-container">
              <Checkmark size="100px"/>
              <p className="fadingUp"> Message received. I will reply to you within 1-2 days. </p>
            </div>
            <p className="fadeOnScroll"> ...Or you can send me a direct email to <a href="mailto:hoanghm4@gmail.com">hoanghm4@gmail.com</a></p>
        </div>
      </div>

        <div id="pj-popup-overlay">
          <HexapodPopup/>
          <FaceDetectorPopup/>
          <ResumeAppPopup/>
          <SteeringWheel/>
        </div>

    </div>
      </div>
  );
  }

  constructor(props) {
    super(props);
    this.state = {};
    init("user_YxZJf3n1ighabNMYePJTK"); //email server
    smoothscroll.polyfill();  //smooth scroll for all browsers
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    // window.onbeforeunload = function () {
    //   window.scrollTo(0, 0);
    // }
  }

  submitMessage(event) {
    let self = this;
    event.preventDefault();
    let form = document.getElementById("contact-form");
    //send email
    emailjs.sendForm("service_pkcvv1n","template_zste8j8", event.target);
    console.log("email sent");
    //clear form
    form.email.value = "";
    form.subject.value = "";
    form.message.value = "";

    self.callInCheckmark();

  }

  callInCheckmark() {
    let form = document.getElementById("contact-form");
    let check_container = document.getElementById("checkmark-container");

    check_container.style.display = "inline-block";
    check_container.style.height = form.offsetHeight.toString() + "px";
    check_container.style.width = form.offsetWidth.toString() + "px";
    check_container.style.paddingTop = 0.5*form.offsetHeight - 100 + "px";

    form.style.display = "none";

  }

}

export default App;
