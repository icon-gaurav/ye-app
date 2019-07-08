/*
 * @author Gaurav Kumar    
*/

import React from "react";
import {Link} from "react-router-dom";
import Converter from "../utilities/Converter";

class WorkLoader extends React.Component{

    render(){
        return (
            <div className="col-12 mb-3 bg-white">
                    <div className="d-flex ye-border p-2 ye-hover row bg-white">
                        <div className="col-lg-3 col-md-3 col-8 d-flex border-right align-items-center">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        className="rounded-circle ye-bg-loader" width="40px" height="40px"/>
                                </div>
                            </div>
                            <div className="d-flex pl-2 pr-2 align-items-center">
                                {/*<Link to={`/internships/${internship.work._id}`}>*/}
                                {/*    <div className="d-inline">{internship.work.profile}</div>*/}
                                {/*</Link>*/}
                                <div className=" pl-2 pr-2 flex-column align-items-center">
                                    <div className="opacity-60 ye-bg-loader"
                                         style={{fontSize: "10px", fontWeight: 300, width:"30px", height:"10px"}}>
                                    </div>
                                    <div className="ye-bg-loader mt-1"
                                        style={{lineHeight: "1em", width:"50px", height:"1em"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-4 border-right d-flex align-items-center">
                            <div className="pl-2 pr-2 flex-column align-items-center">
                                <div className="ye-bg-loader opacity-60"
                                     style={{fontSize: "10px", fontWeight: 300, width:"30px", height:"10px"}}>
                                </div>
                                <div className="ye-bg-loader mt-1" style={{fontSize: "13.5px", width:"50px", height:"13.5px"}}></div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-12 align-items-center flex-column">
                            <div className="flex-fill" style={{paddingTop: "4px"}}>
                                <div className="progress m-2 h-7">
                                    <div className="progress-bar progress-bar-success"
                                         role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: 0}}>
                                        {/*{`${progress} % Complete`}*/}
                                    </div>
                                </div>
                                <div className="m-2 d-flex" style={{fontSize: "10px"}}>
                                    <span className="ye-bg-loader" style={{width:"30px", height:"10px"}}></span><span
                                    className="justify-content-end ml-auto ye-bg-loader" style={{width:"30px", height:"10px"}}></span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default WorkLoader;