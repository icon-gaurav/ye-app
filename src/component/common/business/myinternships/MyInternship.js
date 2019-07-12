import React, { Component } from 'react'
import image from './m.jpg'
class MyInternship extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dummyArray:[
                 {
                     internshipProfile:'Web Development',
                     company:'Young Engine',
                     startDate:'02/07/19',
                     endDate:'09/08/19'
                 },
                 {
                   internshipProfile:'Android Development',
                   company:'Travel d Globe',
                   startDate:'01/07/19',
                   endDate:'09/08/19'
               },
               {
                   internshipProfile:'Full Stack Development',
                   company:'Deloitte',
                   startDate:'22/07/19',
                   endDate:'09/08/19'
               },
               {
                   internshipProfile:'MERN stack Development',
                   company:'Internshala',
                   startDate:'13/07/19',
                   endDate:'09/08/19'
               }
             ]
        }
    }
    render() {
     
     
        return (
            <div className="col-md-12 col-lg-12 col-12">
                <div className="insights mt-4 ye-border">
                    <div className="ongoing-activity-wrapper">
                        <div className="sub-header">
                            MY INTERNSHIPS
                    </div>
                        <div className="ongoing-section">
                            
                                <div className="col-12">
                                    {this.state.dummyArray.map((array,key)=>{
                                        return(
                                        <div className="d-flex ye-border mb-4 p-2 ye-hover row" key={key}>

                                        <div className="col-3 d-flex border-right align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img src={image}
                                                        className="rounded-circle" width="40px" height="40px" />
                                                </div>
                                            </div>
                                            <div className="d-flex pl-2 pr-2 align-items-center">
                                                {/*<Link to={`/internships/${internship.work._id}`}>*/}
                                                {/*    <div className="d-inline">{internship.work.profile}</div>*/}
                                                {/*</Link>*/}
                                                <div className=" pl-2 pr-2 flex-column align-items-center">
                                                    <div className="opacity-60"
                                                        style={{ fontSize: "10px", fontWeight: 300 }}>Internship Profile:
                                                    </div>
                                                    <div
                                                        style={{ lineHeight: "1em" }}>{array.internshipProfile}
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
                                        <div className="col-2 border-right d-flex align-items-center">
                                            <div className="pl-2 pr-2 flex-column align-items-center">
                                                <div className="opacity-60"
                                                    style={{ fontSize: "10px", fontWeight: 300 }}>Company:
                                                </div>
                                                <div style={{ fontSize: "13.5px" }}>{array.company}</div>
                                            </div>
                                        </div>

                                        <div className="col-7 align-items-center flex-column">
                                            <div className="flex-fill" style={{ paddingTop: "4px" }}>
                                                <div className="progress m-2 h-7">
                                                    <div className="progress-bar progress-bar-success"
                                                        role="progressbar"
                                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                        style={{ width: 70 }}>
                                                        {/*{`${progress} % Complete`}*/}
                                                    </div>
                                                </div>
                                                <div className="m-2" style={{ fontSize: "10px" }}>
                                                    <span>{array.startDate}</span><span
                                                        className="float-right">{array.endDate}</span>
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
                                        )
                                    
                                    })}
                                    
                                    
                                </div>
                                

                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyInternship
