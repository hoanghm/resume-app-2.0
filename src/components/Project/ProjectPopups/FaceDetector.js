import React, { Component } from 'react';
import ProjectPopupBase from "../ProjectPopupBase";
import '../ProjectPopupBase.css';
import facedetector_img from "../../../images/facedetector.jpg";
import {ReactComponent as LoadingAni} from "../../../icons/loading.svg";

class Hexapod extends Component {

    render() {

        let demo_html =
            <div>
                <h3> Demo available! Upload an image with faces to see the result. </h3>
                <div className="server-container">
                    <span> Server status: </span>
                    <span className={this.state.serverIsUp?'good':'bad'}> {this.state.serverIsUp?'Good':'Down'} </span>
                </div>

                <form className="image-form" onSubmit={this.fileUploadHandle}>
                    <input id="image-uploader" type="file" name="file"/>
                    <input type="submit" value="Submit"/>
                </form>

                <div className="loading-container">
                    <LoadingAni/>
                    <p> Loading.. </p>
                </div>

                <div className="error-container">
                    <p> Error: {this.state.error} </p>
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

        let raw_html = `
            <h3>I. Overview</h3>
            <p>This <em>Face Detector</em> model takes an image as the input, detects the faces in the image, then classifies each face according to 5 features (with True/False values): <em>Young, Male, Smiling, Chubby, and Eyeglasses.</em></p>
            <h3>II. Details</h3>
            <ul>
            <li>The API hosting this model is running on an AWS EC2 instance and can be reached at <a href="https://hoang.work/facedetector-api">https://hoang.work/facedetector-api</a>.</li>
            <li>The source code of this model can be found <a href="https://github.com/hoanghm/Face-Detector">here</a>.</li>
            <li>Main technologies used to create this API: Tensorflow 2, OpenCV2, Matplotlib&nbsp; Flask, Gunicorn, Nginx.&nbsp;&nbsp;</li>
            <li>This model was trained on the <a href="https://www.kaggle.com/jessicali9530/celeba-dataset">Celeb A dataset.</a> Transfer Learning was applied using The <a href="https://arxiv.org/abs/1704.04861">MobileNet</a> CNN structure pretrained on the <a href="https://cocodataset.org/#home">Coco dataset</a>.&nbsp;&nbsp;</li>
            </ul>
        `;

        return (
            <ProjectPopupBase
                title = "Face Detector"
                coverImage = {facedetector_img}
                demo = {demo_html}
                description = {<div dangerouslySetInnerHTML={{__html: raw_html}}></div>}
            />
        );
    }

    constructor(props) {
        super(props);

        this.state = {
            api_link: 'https://www.hoang.work/facedetector-api',
            predictions: [],
            error: null,
            serverIsUp: false
        };
        this.fileUploadHandle = this.fileUploadHandle.bind(this);
    }

    componentDidMount() {

        // check if API is running fine
        fetch(this.state.api_link, {
            method: 'GET'
        }).then(response => {
           if (response.status === 200) {
               this.setState({
                   serverIsUp: true
               })
           }
        });
    }

    fileUploadHandle(e) {
        let self = this;
        e.preventDefault();

        // get DOM elements
        let file_field = document.getElementById("image-uploader");
        let loading_container = document.getElementsByClassName("loading-container")[0];
        let result_img_container = document.getElementsByClassName('result-container')[0];
        let error_container = document.getElementsByClassName('error-container')[0];

        // display loading animation
        error_container.style.display = "none";
        loading_container.style.display = "block";
        result_img_container.style.display = "none";

        // make request
        let api_link = this.state.api_link;
        let file = file_field.files[0];
        const fd = new FormData();
        fd.append('image', file);

        fetch(api_link, {
            method: 'POST',
            body: fd
        }).then(
            response => response.json()
        ).then(data => {
            loading_container.style.display = "none";
            if (data.error) {
                self.setState({
                    error: data.error
                });
                error_container.style.display = 'block';
            }
            else {
                // display results, cancel loading animation
                let result_img_link = api_link + data.image;
                result_img_container.style.display = "block";
                result_img_container.children[0].src = result_img_link;
                self.setState({
                    predictions: data.predictions
                });
            }
        });
    }
}

export default Hexapod;