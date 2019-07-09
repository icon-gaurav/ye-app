import React, { Component } from 'react'
import image from './m.jpg'
class MyInternship extends Component {
    render() {
        return (
            <div>
            <div className="pl-5">
                <div className="header pl-0">My Internships</div>
                <div className="row">
                    <div className="col-lg-9">
                        
                        <div className="insight-item ye-border bg-white"
                             style={{padding: "15px 30px 15px 30px"}}>
                            <h2 className="mb-0" style={{color: "rgb(26, 96, 92)"}}>Current Internships</h2>
                            <div className="col-12 insight-item " >
                                {/* <Link to={`${internship.work.mode}/${internship.work._id}/report`} onClick={() => this.setState({selectedWork: internship})} className="text-dark"> */}
                                    <div className="d-flex ye-border p-2 ye-hover row" >
                                        <div className="col-lg-3 col-md-3 col-8 d-flex border-right align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img
                                                        src={image} alt="heyy"
                                                        className="rounded-circle" width="40px" height="40px"/>
                                                </div>
                                            </div>
                                            <div className="d-flex pl-2 pr-2 align-items-center">
                                                {/*<Link to={`/internships/${internship.work._id}`}>*/}
                                                {/*    <div className="d-inline">{internship.work.profile}</div>*/}
                                                {/*</Link>*/}
                                                <div className=" pl-2 pr-2 flex-column align-items-center">
                                                    <div className="opacity-60"
                                                         style={{fontSize: "10px", fontWeight: 300}}>Internship Profile:
                                                    </div>
                                                    <div
                                                        style={{lineHeight: "1em",fontSize: "13px"}}>
                                                        Internship Profile
                                                    </div>
                                                </div>
                                                <div className="dropdown float-right d-none">
                                                    <button className="btn btn-sm dropdown-toggle" type="button"
                                                            id="dropdownMenuButton" data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                                    </button>
                                                    <div className="dropdown-menu"
                                                         aria-labelledby="dropdownMenuButton">
                                                        {/*<a className="dropdown-item" href="#">a</a>*/}
                                                        {/*<a className="dropdown-item" href="#">b</a>*/}
                                                        {/*<a className="dropdown-item" href="#">c</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-4 border-right d-flex align-items-center">
                                            <div className="pl-2 pr-2 flex-column align-items-center">
                                                <div className="opacity-60"
                                                     style={{fontSize: "10px", fontWeight: 300}}>Company:
                                                </div>
                                                <div style={{fontSize: "13.5px"}}>Young Engine</div>
                                            </div>
                                        </div>

                                        <div className="col-lg-7 col-md-7 col-12 align-items-center flex-column">
                                            <div className="flex-fill" style={{paddingTop: "4px"}}>
                                                <div className="progress m-2 h-7">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: 290}}>
                                                        {/*{`${progress} % Complete`}*/}
                                                    </div>
                                                </div>
                                                <div className="m-2" style={{fontSize: "10px"}}>
                                                    <span>3 Selected</span><span
                                                    className="float-right">2 Positions</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*</div>*/}
                                        {/*// <div className="progress m-2 d-none">*/}
                                        {/*//     <div className="progress-bar progress-bar-success progress-bar-striped"*/}
                                        {/*//          role="progressbar"*/}
                                        {/*//          aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"*/}
                                        {/*//          style={{width: progress}}>*/}
                                        {/*//         {`${progress} % Complete`}*/}
                                        {/*//     </div>*/}
                                        {/*// </div>*/}
                                        {/*// <div className="m-2 d-none" style={{fontSize: "10px"}}>*/}
                                        {/*//     <span>{internship.work.duration.start.split("T")[0]}</span><span*/}
                                        {/*//     className="float-right">{internship.work.duration.end.split("T")[0]}</span>*/}
                                        {/*// </div>*/}
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                        
                    </div>
                   

                </div>
            </div>
        )
            </div>
        )
    }
}

export default MyInternship
