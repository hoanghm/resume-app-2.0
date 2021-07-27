import React, { Component } from 'react';
import './ProjectPopupBase.css';
import hexapod_img from "../../images/hexapod.jpg";

class ProjectPopup extends Component {

    render() {

        return (
            <div id="pj-popup-overlay">
                <div className="pj-popup">
                  <i className="fas fa-times"></i>
                  <h2> Hexapod </h2>
                  <img src={hexapod_img} alt="project cover"/>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ducimus ex impedit labore pariatur
                      quae unde, voluptatibus! Alias atque consequatur deleniti hic labore nesciunt porro sapiente! Aspernatur
                      laudantium non odio?q
                    </p>
                  </div>
                </div>
            </div>
        );
    }
}

export default ProjectPopup;