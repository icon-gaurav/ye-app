import React, { Component } from 'react'
import './CompletedInternship.css'
import Background  from './Mobile5.png'
import ApiAction from "../../../../actions/ApiAction";
class CompletedInternship extends Component {
    constructor(props){
        super(props);
        this.state={
            works:[]
        }
    }
    componentWillMount() {
        ApiAction.getAllWork()
            .then((response)=>{
                console.log(response)
                this.setState({works:response.data.workList})
            })
    }

    render() {
        let {works} = this.state;
        return (
            
                <div className="Block1">
                        <h1 className="h1tag1">Completed Internships</h1>
                    {works.map((work, key)=>{
                        return (
                            <div key={key}>
                                <div className="Block3">
                                    <img className="imgclass1" src={Background} width="100px" height="90px"/>
                                    <h1 className="profileclass"><strong>Front End Web Development</strong></h1>
                                    <p className="opacity-75">Company:</p>
                                    <p className="float-right pr-4"><strong>End Date</strong><span className="opacity-50">:12/12/19</span></p>
                                    <p><strong>Start Date</strong><span className="opacity-50">:2/5/19</span></p>
                                </div>
                                <div className="Block3">
                                    <img className="imgclass1" src={Background} width="100px" height="90px"/>
                                    <h1 className="profileclass"><strong>Front End Web Development</strong></h1>
                                    <p className="opacity-75">Company:</p>
                                    <p className="float-right pr-4"><strong>End Date</strong><span className="opacity-50">:12/12/19</span></p>
                                    <p><strong>Start Date</strong><span className="opacity-50">:2/5/19</span></p>
                                </div>
                                <div className="Block3">
                                    <img className="imgclass1" src={Background} width="100px" height="90px"/>
                                    <h1 className="profileclass"><strong>Front End Web Development</strong></h1>
                                    <p className="opacity-75">Company:</p>
                                    <p className="float-right pr-4"><strong>End Date</strong><span className="opacity-50">:12/12/19</span></p>
                                    <p><strong>Start Date</strong><span className="opacity-50">:2/5/19</span></p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            
        )
    }
}

export default CompletedInternship
