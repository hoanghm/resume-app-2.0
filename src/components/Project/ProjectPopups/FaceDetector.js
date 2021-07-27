import React, { Component } from 'react';
import ProjectPopupBase from "../ProjectPopupBase";
import '../ProjectPopupBase.css';
import hexapod_img from "../../../images/hexapod.jpg";
import {ReactComponent as LoadingAni} from "../../../icons/loading.svg";

class Hexapod extends Component {

    render() {

        let demo_html =
            <div>
                <h3> Demo available! Upload an image with faces to see the result. </h3>
                <form className="image-form" onSubmit={this.fileUploadHandle}>
                    <input id="image-uploader" type="file" name="file"/>
                    <input type="submit" value="Submit"/>
                </form>
                <div className="loading-container">
                    <LoadingAni/>
                    <p> Loading.. </p>
                </div>
                <div className="result-container medium center-block">
                    <img id="result-img" src="" className="large" alt="result"/>
                    <table style={{width: "100%"}}>
                    <tr>
                        <th> Person </th>
                        <th> Male </th>
                        <th> Young </th>
                        <th> Smiling </th>
                        <th> Chubby </th>
                        <th> Eyeglasses </th>
                    </tr>
                    {this.state.predictions.map(person =>
                        <tr>
                            <td> {person.id} </td>
                            <td> {person.male > 0.5 ? 'Yes':'No'} </td>
                            <td> {person.young > 0.5 ? 'Yes':'No'} </td>
                            <td> {person.smiling > 0.5 ? 'Yes':'No'} </td>
                            <td> {person.chubby > 0.5 ? 'Yes':'No'} </td>
                            <td> {person.eyeglasses > 0.5 ? 'Yes':'No'} </td>
                        </tr>
                    )}
                </table>
                </div>


            </div>;

        return (
            <ProjectPopupBase
                title = "Face Detector"
                coverImage = {hexapod_img}
                demo = {demo_html}
                description = {''}
            />
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            predictions: []
        };
        this.fileUploadHandle = this.fileUploadHandle.bind(this);
    }

    fileUploadHandle(e) {
        let self = this;
        e.preventDefault();

        // get DOM elements
        let file_field = document.getElementById("image-uploader");
        let loading_container = document.getElementsByClassName("loading-container")[0];
        let result_img_container = document.getElementsByClassName('result-container')[0];

        loading_container.style.display = "block";
        result_img_container.style.display = "none";

        // make request
        let api_link = 'http://192.168.0.207:5000/';
        let file = file_field.files[0];
        const fd = new FormData();
        fd.append('image', file);

        fetch(api_link, {
            method: 'POST',
            body: fd
        }).then(
            response => response.json()
        ).then(data => {
            let result_img_link = api_link + data.image;
            console.log(result_img_link);
            loading_container.style.display = "none";
            result_img_container.style.display = "block";
            result_img_container.children[0].src = result_img_link;
            self.setState({
                predictions: data.predictions
            });

        });
    }
}

export default Hexapod;