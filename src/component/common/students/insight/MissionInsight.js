/*
 * @author Gaurav Kumar    
*/

import React from "react";
import Converter from "../../../utilities/Converter";
import MissionTask from "./MissionTask";
import Fade from "react-bootstrap/Fade";
import {Collapse} from "react-bootstrap";

class MissionInsight extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
        }
    }

    render() {
        let {mission} = this.props;
        let ms = new Date().getTime() - new Date(mission.work.duration.start).getTime();
        let days = ((((ms / 1000) / 60) / 60) / 24);
        let expectedDays = mission.work.duration.weeks * 7;
        let progress = Math.ceil((days * 100) / expectedDays);
        let {expand} = this.state;
        return (
            <div className={`ye-border ye-hover mb-4 ${expand ? "ye-box-shadow" : ""}`}>
                <button
                    className={`transparent-button p-2 ${expand ? "outline-none" : ""} w-100`}
                    onClick={() => this.setState({expand: !expand})}
                    aria-controls={`${mission._id}-fade`}
                    aria-expanded={expand}>
                    <div className="d-flex">
                        <div className="col-3 d-flex border-right align-items-center">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img src={Converter.bufferToBase64(mission.company.logo)}
                                         className="rounded-circle" width="40px" height="40px"/>
                                </div>
                            </div>
                            <div className="d-flex pl-2 pr-2 align-items-center">
                                {/*<Link to={`/internships/${internship.work._id}`}>*/}
                                {/*    <div className="d-inline">{internship.work.profile}</div>*/}
                                {/*</Link>*/}
                                <div className=" pl-2 pr-2 flex-column align-items-center text-left">
                                    <div className="opacity-60"
                                         style={{fontSize: "10px", fontWeight: 300}}>Mission
                                        Profile:
                                    </div>
                                    <div
                                        style={{lineHeight: "1em"}}>{mission.work.profile} Development
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-flex border-right align-items-center">
                            <div className="pl-2 pr-2 flex-column align-items-center text-left">
                                <div className="opacity-60"
                                     style={{fontSize: "10px", fontWeight: 300}}>Company:
                                </div>
                                <div style={{fontSize: "13.5px"}}>{mission.company.name}</div>
                            </div>
                        </div>

                        <div className="col-7 align-items-center flex-column">
                            <div className="flex-fill" style={{paddingTop: "4px"}}>
                                <div className="progress m-2 h-7">
                                    <div className="progress-bar progress-bar-success"
                                         role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: progress}}>
                                        {/*{`${progress} % Complete`}*/}
                                    </div>
                                </div>
                                <div className="m-2 text-left" style={{fontSize: "10px"}}>
                                    <span>{mission.work.duration.start.split("T")[0]}</span>
                                    <span className="float-right">{mission.work.duration.end.split("T")[0]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                <Collapse in={expand} appear={true} timeout={75}>
                    <div className={`col-12`} id={`${mission._id}-fade`}>
                        <div className="border-top pb-4">
                            {mission.tasks.map((task, key) => {
                                return (
                                    <div className="" key={key} style={{paddingLeft: "15px", paddingTop: "11px"}}>
                                        <div className="d-flex">
                                            <div className="pr-2">
                                                {task.status == "completed" ?
                                                    <i className="fas fa-check-circle"
                                                       style={{color: "rgba(0,123,255,1)"}}></i>
                                                    :
                                                    <i className="fa fa-circle-o"></i>}
                                            </div>
                                            <div
                                                className={task.status == "completed" ? "text-strike" : ""}>{task.title}</div>
                                        </div>
                                        <div className={`pl-4 ${key > 0 ? "d-none" : "d-block"} opacity-75`}
                                             style={{fontSize: "13px", marginTop: "-3px"}}>Lorem Ipsum is simply dummy
                                            text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                            an
                                            unknown printer took a galley of type and scrambled it to make a type
                                            specimen
                                            book.
                                            It has survived not only five centuries
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default MissionInsight;