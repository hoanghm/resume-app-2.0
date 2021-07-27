import React, { Component } from 'react';
import './Project.css';

class Project extends Component {

    render() {
        return (
            <div className="project-element fadeOnScroll" id={this.props.title}
                 style={{backgroundImage: "url(" + this.props.img + ")"}}>
                <div className="overlay">
                    <h3 className="project-element-title" onClick={this.openProject}> {this.props.title} </h3>
                    <div className="project-element-description"> &nbsp;
                        {this.props.description}
                    </div>
                    <button onClick={this.openProject}> LEARN MORE </button>
                </div>
            </div>
        );
    }

    openProject(event) {
        let pj_title = event.target.parentElement.parentElement.id; // project title
        let pj_details = document.getElementById("popup " + pj_title);
        let popupOverlay = document.getElementById("pj-popup-overlay");
        if (pj_details !== null) {
          popupOverlay.style.display = "block";
          pj_details.style.display = "block";
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }
    }

}

export default Project;