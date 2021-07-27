import React, { Component } from 'react';
import './LongJob.css';
import dropdown from "../../icons/drop-down.svg";

class LongJob extends Component {

    render() {

        return (
            <div className="job fadeOnScroll">
                <div className="job-title" onClick={this.jobToggle}>
                    <img className="job-logo" src={this.props.img} alt={this.props.company + " logo" }/>
                    <span>
                        <h2> {this.props.company} </h2>
                        <h3> {this.props.title} </h3>
                    </span>
                    <img className="dropdown" src={dropdown} alt="dropdown"/>
                </div>

                <div className="job-description">
                    {this.props.sub_positions.map((pos) =>
                        <div className="sub-position">
                            <h4> {pos.title} </h4>
                            <hr/>
                            <span> {pos.date} </span>
                            <p>
                                {pos.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    jobToggle(event) {
        // hide/show job description on click
        let jobTitleEle = event.target;
        while (jobTitleEle.className !== "job-title") {
          jobTitleEle = jobTitleEle.parentElement;
        }
        let jobDescriptionEle = jobTitleEle.nextElementSibling;
        if (!jobDescriptionEle)
          return;
        if (!jobDescriptionEle.classList.value.includes("expand")) {  //open description
          jobTitleEle.children[2].style.transform = "rotate(-180deg)"; // dropdown icon
          jobDescriptionEle.classList.add("expand");
          jobDescriptionEle.style.height = jobDescriptionEle.scrollHeight + 20 + "px";
        }
        else {                                                      //close description
          jobTitleEle.children[2].style.transform = "rotate(0)";
          jobDescriptionEle.classList.remove("expand");
          jobDescriptionEle.style.height = 0;
        }
      }
}

export default LongJob;