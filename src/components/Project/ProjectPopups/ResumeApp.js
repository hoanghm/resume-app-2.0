import React, { Component } from 'react';
import ProjectPopupBase from "../ProjectPopupBase";
import '../ProjectPopupBase.css';
import resumeapp_img from "../../../images/resume-app.PNG";

class ResumeApp extends Component {

    render() {

        const raw_html =
            `
            <p>This website was <span style="text-decoration: underline;">designed</span> and <span style="text-decoration: underline;">built</span> from scratch using <strong>React</strong> as the main library/framework. It is running on <strong>Github Pages</strong> so that it will be easier for me to upgrade/update it over time. A reverse proxy server is running on an AWS EC2 instance to hold the domain name "hoang.work" and forward traffic to this page with SSL enabled.&nbsp;&nbsp;</p>
            <p>I first built this website in 2018 using Flask as the main (micro) framework, but I just gave it a major design update this summer 2021 and use React instead of Flask.&nbsp;</p>
            <p>The source code of this website can be found <a href="https://github.com/hoanghm/resume-app-2.0">here</a>. The uses of React's 'components' and 'state' were utilized fully in the making of this website.</p>
            <p>&nbsp;</p>
            `;

        return (
            <ProjectPopupBase
                title = "This website"
                coverImage = {resumeapp_img}
                description = {<div dangerouslySetInnerHTML={{__html: raw_html}}></div>}
            />
        );
    }
}

export default ResumeApp;