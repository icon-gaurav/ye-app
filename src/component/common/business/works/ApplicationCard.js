/*
 * @author Gaurav Kumar    
*/

import React from "react";
import Converter from "../../../utilities/Converter";
import {Button} from "react-bootstrap";

class ApplicationCard extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        let {application, work} = this.props;
        let student = application.student;
        return (
            <div className="ye-border ye-hover p-3 overflow-hidden" style={{backgroundColor:"#6cabff", color: "white"}}>
                <div className="d-flex align-items-center">
                    <img src={student.profilePic ? Converter.bufferToBase64(student.profilePic) :
                        student.gender == "Female" ? require("../../../../assets/images/avatar/female.png")
                            : require("../../../../assets/images/avatar/male.png")}
                         className="rounded-circle"
                         height={50} width={50}
                         alt="Profile pic"/>
                </div>
                <div className="pt-2">
                    {`${student.name.first} ${student.name.last}`}
                </div>
                <div className="pt-2 pb-2">
                    {this.renderRating(student)}
                </div>
                <div className="row">
                    <div className="col-4 d-flex">
                        <div className="pr-2"><i className="fa fa-mobile" aria-hidden="true"></i>
                        </div>
                        <div className="d-flex align-items-center">
                            <div style={{fontSize:"13px"}}>{student.contact.mobile}</div>
                        </div>
                    </div>
                    <div className="col-8 d-flex">
                        <div className="pr-2">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="d-flex align-items-center">
                            <div style={{fontSize:"13px"}}>{student.contact.email}</div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-6 d-flex justify-content-start">
                        <Button className="text-white" style={{backgroundColor:"#4058ff"}}>Shortlist</Button>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Button className="text-white" style={{backgroundColor:"#4058ff"}}>View Details</Button>
                    </div>
                </div>
            </div>
        );
    }

    renderRating = (student) => {
        let {rating} = student;
        let cumulativeRating = 0;
        rating.map((rate) => {
            cumulativeRating += rate;
        });
        cumulativeRating = Math.floor(cumulativeRating / rating.length);
        let items = [];
        let i = 0;
        while (i < 5) {
            if (i <= cumulativeRating) {
                items.push(<span><i className="fa fa-star" id="star1" aria-hidden="true"></i></span>);
            } else {
                items.push(<span><i className="fa fa-star-o" id="star1" aria-hidden="true"></i></span>);
            }
            i++;
        }
        return items;
    }
}

export default ApplicationCard;