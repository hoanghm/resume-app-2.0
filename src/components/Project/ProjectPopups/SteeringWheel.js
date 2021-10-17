import React, { Component } from 'react';
import ProjectPopupBase from "../ProjectPopupBase";
import '../ProjectPopupBase.css';
import resumeapp_img from "../../../images/steeringwheel.jpg";

class SteeringWheel extends Component {

    render() {

        const raw_html =
            `
            <h2>I. Overview</h2>
            <p>This project is about creating a steering wheel made from cardboard, that is capable of control any PC racing game using objects detection and some custom-made Python modules.</p>
            <p>Main technologies used:</p>
            <ul>
            <li>Darknet framework</li>
            <li>YOLOv4</li>
            <li>OpenCV2</li>
            <li>VGamepad</li>
            </ul>
            <p>Below is a demo video:</p>
            <p><iframe style="margin: auto; display: block; border: none;" title="YouTube video player" src="https://www.youtube.com/embed/E3OYRrfl6lw" width="100%" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
            <p>&nbsp;</p>
            
            
            <h2><strong>II. Details</strong></h2>
            <h3><strong>1. Dataset</strong></h3>
            <p>The dataset was created from scratch. I took over 300 images of the paper driving wheel and label it manually. A dataset with 300 images is very small but since this is a pretty easy detection task and labeling images is cumbersome, I just decided to do this.</p>
            <p>The result turned out to be pretty well after about 2000 iterations of training with 16 images per batch.&nbsp;</p>
            <p style="text-align: center;"><img style="width:100%"  src="https://i.ibb.co/jMdNC7Y/images.jpg" alt="A portion of the dataset" /><span style="color: #5e5e5e;">Figure 1: A portion of the dataset</span></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><img style="width:100%"  src="https://i.ibb.co/6RGjFsP/labeling.jpg" alt="labeling"  /><span style="color: #5e5e5e;">Figure 2: Images were labeled manually with LabelImg</span></p>
            <p style="text-align: center;">&nbsp;</p>
            
            <h3 style="text-align: left;"><strong>2. Training</strong></h3>
            <p style="text-align: left;">Images' labels were saved in YOLOv4 format. The training process mainly used the <a href="https://pjreddie.com/darknet/">Darknet framework</a> and YOLOv4 network structure.&nbsp;</p>
            <p style="text-align: center;"><img style="width:100%"  src="https://i.ibb.co/tsj5jQT/chart.png" alt="training loss" /><span style="color: #5e5e5e;">Figure 3: Loss over iterations</span></p>
            <p style="text-align: center;">&nbsp;</p>
            <p style="text-align: center;"><span style="color: #5e5e5e;"><img src="https://i.ibb.co/YkbsvJv/demo.jpg" style="width:100%" alt="training result"/><br />Figure 4: The result of the trained module on an unseen image</span></p>
            <p style="text-align: center;">&nbsp;</p>
            
            <h3><span style="color: #333333;"><strong>3. Incorporate the Machine Learning model with a Gamepad Controller module to emulate a Driving Wheel.&nbsp;</strong></span></h3>
            <p>I wrote a module that takes in the detections from the Machine Learning model to control a virtual gamepad accordingly.</p>
            <p>From the detections (anchor, nitro, brake boxes coordinates, and labels), the angle of rotation can be calculated easily from the coordinates of the 2 blue anchors using simple linear algebra. Other states such as acceleration, nitro, brake are controlled by a dynamic Python dictionary.&nbsp;</p>
            <p style="text-align: center;"><img style="width: 100%;" src="https://i.ibb.co/8rHqxtz/demo2.jpg" alt="" /><span style="color: #5e5e5e;">Figure 4: From the coordinates of the 2 blue anchors, the center and angle of rotation can be calculated accordingly</span></p>
            <p><span style="color: #333333;">From here on, I just need to run a Python file that feeds the frames from my webcam to the Detection module, calculate the necessary states based on the detections, and emulate the signals that would come from a gamepad controller accordingly. The result is a cardboard driving wheel that can be used to play any racing game on my PC.&nbsp;</span></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            `;

        return (
            <ProjectPopupBase
                title = "Steering Wheel Simulator"
                coverImage = {resumeapp_img}
                description = {<div dangerouslySetInnerHTML={{__html: raw_html}}></div>}
            />
        );
    }
}

export default SteeringWheel;