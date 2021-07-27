import React, { Component } from 'react';
import './SkillElement.css';

class SkillElement extends Component {
    render() {
        return(
            <div className="skill-element fadeOnScroll">
                <div className="skill-title">
                    {this.props.logo}
                    <h3> {this.props.title} </h3>
                </div>
                <div className="skill-element-description">
                  {this.props.description}
                </div>
            </div>
        );
    }
}

export default SkillElement;
