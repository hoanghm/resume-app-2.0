import React, { Component } from 'react';
import './ProjectPopupBase.css';
import {ReactComponent as CloseIcon} from "../../icons/close.svg";

class ProjectPopupBase extends Component {

    render() {

        return (
            <div>
                <div className="pj-popup-container fadingUp" id={"popup " + this.props.title}>
                    <div className="pj-popup">
                        <h2> {this.props.title} </h2>
                        <img src={this.props.coverImage} alt="project cover"/>
                        <div className="demo">
                            {this.props.demo}
                        </div>
                        <div className="description">
                            {this.props.description}
                        </div>
                    </div>

                    <CloseIcon className={"closeIcon"} fill={"gray"} onClick={this.closeProject}/>
                </div>

            </div>
        );
    }

    closeProject() {
        let popupOverlay = document.getElementById("pj-popup-overlay");
        popupOverlay.style.display = "none";
        let projectPopups = document.getElementsByClassName("pj-popup-container");
        for(let popup of projectPopups) {
            if (popup.style.display !== "none") {
                popup.style.display = "none"
            }
        }
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }

}

export default ProjectPopupBase;