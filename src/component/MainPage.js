import React, { Component } from 'react'
import '../style/App.css'

// IMAGES IMPORTED
import about from '../image/about.jpg'
import mytinerary from '../image/MYtineraryLogo.jpg'
import bookstore from '../image/books.jpg'
import tgif from '../image/TGIF_Logo_ok.jpg'
import nysl from '../image/nysl_logo.jpg'
import playButton from '../image/videoplay.png'

import ReactPlayer from "react-player"
import Modal from 'react-bootstrap/Modal'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class MainPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            personSkill1: ['Fast learner', 'Proactive', 'Team player'],
            personSkill2: ['Well organized', 'Working under pressure','Objective oriented'],
            techSkill: ['HTML5', 'CSS3', 'Java Script', 'Bootstrap', 'ReactJS', 'VUE.JS',
            'MongoDB', 'Node.JS', 'Express'],
            skillPercent: [95, 94, 85, 84, 80, 70, 80, 80, 80],
            skillFilled: false,
            showJob1: false,
            showJob2: false,
            showJob3: false,
            showVideo: false,
        }
        this.changeNavbar = this.changeNavbar.bind(this)
    }

    componentDidMount () {
        setTimeout(this.writeJob, 500)
        window.addEventListener('scroll', this.changeNavbar)
        window.addEventListener('scroll', this.chargeSkills)
        window.addEventListener('resize', this.changeNavBar2)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.changeNavbar); 
    }

    changeNavBar2 = () => {
        if (window.innerWidth >= 551 && window.innerWidth <= 555) {

        var navBar = document.getElementById('navBar')
        var test = window.getComputedStyle(navBar)

        if (test.getPropertyValue('display') === "none") {
        navBar.style.display = "flex"
        } else {
            return
        }
        }
        
    }

    changeNavbar = () => {
        var i = 0
        const navBar = document.getElementById('navigationBar')
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 50) {
            navBar.style.backgroundColor = "white"
            navBar.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            for(i=0; i < 5; i++) {
                document.getElementsByClassName('linkText')[i].style.color = "#030303"
            }
            document.getElementById('navBarButton').style.backgroundColor = "black"
            
          } else {
            navBar.style.backgroundColor = null
            navBar.style.boxShadow = null
            for(i=0; i < 5; i++) {
                document.getElementsByClassName('linkText')[i].style.color = null
            }
            document.getElementById('navBarButton').style.backgroundColor = ""
          }
    }

    async writeJob() {
        var job = document.getElementById('headersJob')
        var i = 0
        var timeUpdate = 700
        for (i = 1; i < 25; i++) { 
            timeUpdate = timeUpdate + 130
            test2(i, timeUpdate)
        }

        function test2 (i, timeUpdate) {
            var text = 'Full Stack Web Developer'.slice(0, i) + "|"

            setTimeout(function() {
                job.innerHTML = text
            }, timeUpdate) 
       }  
    }

    chargeSkills = () => {
        if (document.documentElement.scrollTop > 1300 && this.state.skillFilled === false && document.documentElement.scrollTop < 1630) {
            
            this.state.skillPercent.forEach((percent, index)=>{
            var i = 0
            this.setState({ skillFilled: true }) 
            if (i === 0) {
                i = 1;
                var elem = document.getElementById("myBar" + index);
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                  if (width >= percent) {
                    clearInterval(id);
                    i = 0;
                  } else {
                    width++;
                    elem.style.width = width + "%";
                  }
                }
              } 
            })
        }
    }

    openMenu = () => {
        var navBar = document.getElementById('navBar')
        var test = window.getComputedStyle(navBar)

        if (test.getPropertyValue('display') === "none") {
        navBar.style.display = "flex"
        } else {
            navBar.style.display = "none"
        }
    }

    render() {
        
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 1
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };

        return (
            <div className="App">
                {/* start headers area */ }
                <div id='headers'>
                    <div id="navigationBar">
                        <div className="d-flex justify-content-end" id="navBarButtonSpace" onClick={()=>{this.openMenu()}}>
                            <i id="navBarButton" className="fas fa-bars"></i>
                        </div>
                        <ul className="mb-0" id="navBar">
                            <li><a href="#headers" className="linkText">Home</a></li>
                            <li><a href="#about" className="linkText">About</a></li>
                            <li><a href="#skills" className="linkText">Skills</a></li>
                            <li><a href="#experiences" className="linkText">Experiences</a></li>
                            <li><a href="#education" className="linkText">Education</a></li>
                        </ul>
                    </div>
                    <div className="headersText d-flex flex-column justify-content-center">
                        <h1>Eric Pereira</h1>
                        <h2 id="headersJob">|</h2>
                    </div>
                    <div className="ancor" id="about"></div>
                </div>
                {/* start about section */}
                <div id="aboutArea" >
                    <h2 className="sectionTitle mb-0">About Me</h2>
                    <div id="aboutSection" className="d-flex flex-wrap align-items-center justify-content-around">
                        <div id="aboutLeft">
                            <div className="aboutDet">
                                <i className="fab fa-font-awesome-flag"></i>
                                <p className="mb-0">21 de Novembro de 1988</p>
                            </div>
                            <div className="aboutDet">
                                <i className="fas fa-envelope" />
                                <p className="mb-0">eric_pereira04@hotmail.com</p>
                            </div>
                            <div className="aboutDet">
                                <i className="fas fa-mobile-alt" />
                                <p className="mb-0">+351 91 292 0287</p>
                            </div>
                            <div className="aboutDet">
                                <i className="fas fa-map-marker-alt" />
                                <p className="mb-0">Calçada Cruz da Pedra, Lote N, Lisbon, Portugal</p>
                            </div>
                            <div id="aboutIcons" className="d-flex justify-content-center align-items-end mt-4">
                                <a href="https://www.linkedin.com/in/ericlibardi/" target="_blank" 
                                    rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
                                <a href="https://github.com/ericlibardi" target="_blank" 
                                    rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                            </div>
                        </div>
                        <div id="aboutRight" className="d-flex align-items-center">
                            <img className="aboutImage" src={about} alt="about"></img>
                            <div id="aboutmeText" className="d-flex align-items-center">
                                <p>Junior Full Stack Web Developer who is passionate for coding and technologies. 
                                My background in marketing provides me a good basis for User Experience and for 
                                building a more friendly platform, while my recent experiences allowed me to grow 
                                as a Web Developer and become a better professional. I'm eager to join a company 
                                so I can continue expanding my knowledge and building a successful career.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* video section */}
                <div id="videoSection" className="d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <img id="playImage" src={playButton} alt="play" onClick={()=> {this.setState({showVideo: true})}}></img>
                        <p>Video Presentation</p>
                    </div>
                        <Modal centered show={this.state.showVideo} onHide={()=> {this.setState({ showVideo: false})}}>                            
                            <Modal.Body>
                                <ReactPlayer
                                width="100%"
                                url="https://youtu.be/LvuyF4-EvJ0"
                                />
                            </Modal.Body>
                        </Modal>
                </div>
                <div className="ancor" id="skills"></div>
                {/* start skills section */}
                <div id="skillsArea">
                    <h2 className="sectionTitle mb-0">Skills</h2>
                    <div className="d-flex flex-wrap justify-content-around">
                        <div>
                            {/* start skills - personal skills section */}
                            <div id="personalSkills" className="mx-2 my-2">
                                <h2 className="skillTitle">Personal Skill</h2>
                                <div className="d-flex">
                                    <div>
                                        {this.state.personSkill1.map((skill, index)=>{
                                            const perSkill = 
                                            <div className="d-flex mx-2 my-2" key={index}>
                                                <i className="fas fa-check" />
                                                <p className="ml-2 mb-0">{skill}</p>
                                            </div>
                                            return perSkill})}
                                    </div>
                                    <div>
                                        {this.state.personSkill2.map((skill, index)=>{
                                            const perSkill = 
                                            <div className="d-flex mx-2 my-2" key={index}>
                                                <i className="fas fa-check" />
                                                <p className="ml-2 mb-0">{skill}</p>
                                            </div>
                                            return perSkill})}
                                    </div>
                                </div>
                            </div>
                            {/* start skills - language skills section */}
                            <div id="skillLanguage" className="mx-2 my-4">
                                <h2 className="skillTitle">Languages</h2>
                                <div>
                                    <div className="languageSkills">
                                        <p className="mb-1">Portuguese</p>
                                        <i className="fas fa-circle" /><i className="fas fa-circle" />
                                        <i className="fas fa-circle" /><i className="fas fa-circle" />
                                        <i className="fas fa-circle" /><i className="fas fa-circle" />
                                    </div>
                                    <div className="languageSkills">
                                        <p className="mb-1">English</p>
                                        <i className="fas fa-circle" /><i className="fas fa-circle" />
                                        <i className="fas fa-circle" /><i className="fas fa-circle" />
                                        <i className="fas fa-circle" /><i className="far fa-circle" />
                                    </div>
                                    <div className="languageSkills">
                                        <p className="mb-1">Spanish</p>
                                        <i className="fas fa-circle" /><i className="fas fa-circle" />
                                        <i className="fas fa-circle" /><i className="far fa-circle" />
                                        <i className="far fa-circle" /><i className="far fa-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* start skills - techskills section */}
                        <div id="techSkills" className="mx-2 my-2">
                            <h2 className="skillTitle">Technical Skills</h2>
                            {this.state.techSkill.map((skill, index)=>{
                                const perSkill = 
                                <div className="skill d-flex" key={index}>
                                    <p className="mb-0">{skill}</p>
                                    <div className="myProgress">
                                        <div id={'myBar' + index} className="myBar"></div>
                                    </div>
                                </div>
                                return perSkill
                            })}
                            
                        </div>
                    </div>
                </div>
                <div className="ancor" id="experiences"></div>
                {/* Start Experience section */}
                <div id="experiencesArea">
                    <h2 className="sectionTitle mb-0">Experiences</h2>
                    <div className="d-flex justify-content-around align-items-start flex-wrap">
                        <div id="experienceLeft">
                            <h4>Job experiences</h4>
                                <div className="experienceCard mx-1 my-2">
                                    <div className="mx-2 mt-2">
                                        <h5>Junior Full Stack Web Developer</h5>
                                        <p className="mb-2">Ubiqum Code Academy, Portugal | 2020</p>
                                    </div>
                                    <p onClick={()=> {this.setState({ showJob1: true}) }} className="mb-1 moreInfobtn"><i>more info</i></p>
                                </div>
                                <div id="secondCard" className="d-flex justify-content-end">
                                    <div className="experienceCard mx-1 my-2">
                                        <div className="mx-2 mt-2">
                                            <h5>Account Representative (mkt) for Facebook</h5>
                                            <p className="mb-2">Teleperformance, Portugal | current job</p>
                                        </div>
                                        <p onClick={()=> {this.setState({ showJob2: true}) }} className="mb-1 moreInfobtn"><i>more info</i></p>
                                    </div>
                                </div>
                                <div id="thirdExperienceCard" className="experienceCard mx-1 my-2">
                                    <div className="mx-2 mt-2">
                                        <h5>Project Manager - Digital Products</h5>
                                        <p className="mb-2">Bradesco Cartões Bank, Brazil | 2015</p>
                                    </div>
                                    <p onClick={()=> {this.setState({ showJob3: true}) }} className="mb-1 moreInfobtn"><i>more info</i></p>
                                </div>
                        </div>
                        {/* Jobs Modals section */}
                        <div>
                            <Modal centered show={this.state.showJob1} onHide={()=> {this.setState({ showJob1: false})}}>
                                <div className="modalHeaders">
                                <Modal.Header closeButton >
                                    <div className="d-flex flex-column">
                                        <Modal.Title><b>Junior Full Stack Web Developer</b></Modal.Title>
                                        <Modal.Title>Ubiqum Code Academy, Portugal | 2020</Modal.Title>
                                    </div>
                                </Modal.Header>
                                </div>
                                <Modal.Body>Part-time 6 months coding bootcamp structured as an Agile work environment,
                                    utilizing “Learn by Doing” methodology and focusing on: CSS3, HTML5, Vue.js, 
                                    JavaScript, Bootstrap, MERN (MongoDB, Express, React.js and Node.js).</Modal.Body>
                            </Modal>
                            <Modal centered show={this.state.showJob2} onHide={()=> {this.setState({ showJob2: false})}}>
                                <div className="modalHeaders">
                                <Modal.Header closeButton >
                                    <div className="d-flex flex-column">
                                        <Modal.Title><b>Account Representative (mkt) for Facebook</b></Modal.Title>
                                        <Modal.Title>Teleperformance, Portugal | current job</Modal.Title>
                                    </div>
                                </Modal.Header>
                                </div>
                                <Modal.Body>Manage assigned Facebook Advertisers with their Business Strategies, 
                                concerns, and queries, by either providing advices on how to improve their 
                                campaigns or routing to other specialized teams.</Modal.Body>
                            </Modal>
                            <Modal centered show={this.state.showJob3} onHide={()=> {this.setState({ showJob3: false})}}>
                                <div className="modalHeaders">
                                <Modal.Header closeButton >
                                    <div className="d-flex flex-column">
                                        <Modal.Title><b>Project Manager - Digital Products</b></Modal.Title>
                                        <Modal.Title>Bradesco Cartões Bank, Brazil | 2015</Modal.Title>
                                    </div>
                                </Modal.Header>
                                </div>
                                <Modal.Body className="pb-0">-Management of new digital projects in the finance area, following all the 
                                steps of the project steps, from the conception until the implementation.</Modal.Body>
                                <Modal.Body>
                                -Elaboration of reports and presentations of those projects for impacted areas and higher management.</Modal.Body>
                            </Modal>
                        </div>
                        {/* Projects section */}
                        <div id="experienceRight" >
                            <h4 id="projectsTitle">Projects</h4>
                            <Carousel autoPlay="true" infinite="true" autoPlaySpeed="6000" responsive= {responsive}>
                                <div className="carouselCardProject">
                                    <div>
                                        <img style={{width: "100%"}} src={mytinerary} alt="MYtinerary"></img>
                                        <h5>Mytinerary</h5>
                                        <p>Responsive web app to create, post and comment for city itineraries. Made with 
                                        React.js/ Redux, MongoDB, Node.js, Javascript, HTML5, CSS3, Bootstrap.</p>
                                    </div>
                                    <div className="d-flex justify-content-center projectLinks">
                                        <a href="https://github.com/ericlibardi/My-tinerary" target="_blank" 
                                        rel="noopener noreferrer"><i>code</i></a>
                                    </div>
                                </div>
                                <div className="carouselCardProject">
                                    <div>
                                        <img style={{width: "100%"}} src={bookstore} alt="Bookstore"></img>
                                        <h5>Bookstore</h5>
                                        <p>Website which presents a list of Books and its details. Two versions, first made with: HTML5, CSS3 and Javascript,
                                            second made with React.js, Javascript, HTML5, CSS3</p>
                                    </div>
                                    <div className="d-flex justify-content-center projectLinks">
                                        <a href="https://ubiqumbook.netlify.app/" target="_blank" 
                                        rel="noopener noreferrer"><i>website</i></a>
                                        <p>/</p>
                                        <a href="https://github.com/ericlibardi/bookstore" target="_blank" 
                                        rel="noopener noreferrer"><i>code v1</i></a>
                                        <p>/</p>
                                        <a href="https://github.com/ericlibardi/bookstore-2" target="_blank" 
                                        rel="noopener noreferrer"><i>code v2</i></a>
                                    </div>
                                </div>
                                <div className="carouselCardProject">
                                    <div>
                                        <img style={{width: "100%"}} src={tgif} alt="tgif"></img>
                                        <h5>TGIF</h5>
                                        <p>Web for the US government, which filters the info and statistics of politicians. Two versions, first made with: Javascript, HTML5, CSS3, Bootstrap, 
                                        second made with: Vue.js, HTML5, CSS3, Bootstrap</p>
                                    </div>
                                    <div className="d-flex justify-content-center projectLinks">
                                        <a href="https://tgifsite.netlify.app/" target="_blank" 
                                        rel="noopener noreferrer"><i>website</i></a>
                                        <p>/</p>
                                        <a href="https://github.com/ericlibardi/tgif" target="_blank" 
                                        rel="noopener noreferrer"><i>code v1</i></a>
                                        <p>/</p>
                                        <a href="https://github.com/ericlibardi/TGIF-in-Vue" target="_blank" 
                                        rel="noopener noreferrer"><i>code v2</i></a>
                                    </div>
                                </div>
                                <div className="carouselCardProject">
                                    <div>
                                        <img style={{width: "100%"}} src={nysl} alt="nysl"></img>
                                        <h5>NYSL</h5>
                                        <p>Responsive website made to follow a football league's events. Made with: HTML5, CSS3</p>
                                    </div>
                                    <div className="d-flex justify-content-center projectLinks">
                                        <a href="https://nyslteam.netlify.app/" target="_blank" 
                                        rel="noopener noreferrer"><i>website</i></a>
                                        <p>/</p>
                                        <a href="https://github.com/ericlibardi/NYLS-Website" target="_blank" 
                                        rel="noopener noreferrer"><i>code</i></a>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="ancor" id="education"></div>
                {/* Education Section */}
                <div id="educationArea">
                    <h2 className="sectionTitle mb-0">Education</h2>
                    <div className="d-flex justify-content-around align-items-start flex-wrap">
                        <div id="educationLeft" className="mx-2 my-2">
                            <div className="d-flex" id="educationLeftTitle">
                                <i className="fas fa-university"></i>
                                <h4 className="mb-2">Graduation and Post-graduation</h4>
                            </div>
                            <div className="educationDetails">
                                <h5>Post-Graduation in Prospection, Innovation and Strategy</h5>
                                <p className="educationTextForm1">Lisbon School of Economics {'\ufe60'} Management, Portugal | 2019</p>
                                <p className="educationTextForm2">ISEG, Portugal | 2019</p>
                            </div>
                            <div className="educationDetails">
                                <h5>Post-Graduation in Business Management</h5>
                                <p className="educationTextForm1">Escola Superior de Propaganda e Marketing, Brazil | 2015</p>
                                <p className="educationTextForm2">ESPM, Brazil | 2015</p>
                            </div>
                            <div className="educationDetails">
                                <h5>Bachelor's in social communication: qualification in marketing</h5>
                                <p className="educationTextForm1">Escola Superior de Propaganda e Marketing, Brazil | 2012</p>
                                <p className="educationTextForm2">ESPM, Brazil | 2015</p>
                            </div>
                        </div>
                        <div id="educationRight" className="mx-2 my-2">
                            <div className="d-flex" id="educationRightTitle">
                                <i className="fas fa-book-reader"></i>
                                <h4 className="mb-2">Extra courses</h4>
                            </div>
                            <div className="educationDetails">
                                <p>Digit Marketing, Illinois University | 2018</p>
                                <p>Certificated in Google Analytics | 2015</p>
                                <p>Digital Marketing Strategies | 2015</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footbar Section */}
                <div id="footer" className="d-flex justify-content-center align-items-center">
                    <p className="mb-1">©Copyright | Eric 2020. All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default MainPage
