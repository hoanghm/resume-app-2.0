import React, { Component } from 'react';
import './Greetings.css';

class Greetings extends Component {

    render() {

        //Slide the greetings to the right

        return (
            <div className="main-description">
                <div className="greetings">
                    <h3> Hoang Ha </h3>
                    <p> B.S Computer Science | B.S Eng Physics </p>
                    <p> M.S Data Analytics & Statistics </p>
                </div>

                <div className="button-line">
                    <button>
                        CONTACT ME
                    </button>

                    <button id="button-project">
                        MY PROJECTS
                    </button>
                </div>
            </div>
        );
    }
}

export default Greetings;