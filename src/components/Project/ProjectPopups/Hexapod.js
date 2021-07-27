import React, { Component } from 'react';
import ProjectPopupBase from "../ProjectPopupBase";
import '../ProjectPopupBase.css';
import hexapod_img from "../../../images/hexapod.jpg";

class Hexapod extends Component {

    render() {

        const raw_html = `
            <div><p>Hi, this is a test description.</p>
            <p>In bold: <strong>something in bold</strong></p>
            <p>In itatic: <em>something in italic</em></p>
            <p><em>center alligned:&nbsp;</em></p>
            <p style="text-align: center;"><em>something&nbsp; center-algined</em></p>
            <p style="text-align: left;"><em>An image:&nbsp;</em></p>
            <p style="text-align: left;"><em><img style="display: block; margin-left: auto; margin-right: auto;" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg" alt="" width="220" height="220" /></em></p>
            <p style="text-align: left;"><em>a table:</em></p>
        `;
        console.log(raw_html);

        return (
            <ProjectPopupBase
                title = "Hexapod"
                coverImage = {hexapod_img}
                description = {<div dangerouslySetInnerHTML={{__html: raw_html}}></div>}
            />
        );
    }
}

export default Hexapod;