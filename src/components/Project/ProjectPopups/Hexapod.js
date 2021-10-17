import React, { Component } from 'react';
import ProjectPopupBase from "../ProjectPopupBase";
import '../ProjectPopupBase.css';
import hexapod_img from "../../../images/hexapod.jpg";
import hexapod_poster from "../../../images/hexapod_poster.jpg";

class Hexapod extends Component {

    render() {

        const description =
            <div>
                <p> I completed this project in my Sophomore year of Juniata College (Fall 2018), where I obtained a B.S in Engineering Physics. </p>
                <p> Below is a poster detailing this project, which is still hanging somewhere on the wall in the Physics Department </p>
                <p>(Right-click and choose "<em>Open image in new tab</em>" to zoom in)</p>
                <img src={hexapod_poster} className="large" alt="hexapod poster"/>
            </div>;

        return (
            <ProjectPopupBase
                title = "Hexapod"
                coverImage = {hexapod_img}
                description = {description}
            />
        );
    }
}

export default Hexapod;