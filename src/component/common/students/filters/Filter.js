/*
 * @author Gaurav Kumar    
*/

import React, {Component} from "react";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            region: "",
            deadline: "0",
            location: ""
        }
    }

    render() {
        let {category, region, deadline, location} = this.state;
        return (
            <div className="filter-wrapper">
                <div className="row">
                    <div className="col-xl-2 col-sm-12 pb-2">
                        <select className="form-control" value={category} onChange={this.updateCategory}>
                            <option defaultValue="">Category</option>
                            <option value="finance">Finance</option>
                            <option value="marketing">Marketing</option>
                            <option value="web">Web Tech</option>
                            <option value="design">Design</option>
                            <option value="analytics">Analytics</option>
                        </select>
                    </div>
                    {/*<div className="col-xl-2 col-sm-12 pb-2">*/}
                    {/*    <select className="form-control" value={region} onChange={this.updateRegion}>*/}
                    {/*        <option defaultValue="">Region</option>*/}
                    {/*        <option value="Delhi">Delhi</option>*/}
                    {/*        <option value="Mumbai">Mumbai</option>*/}
                    {/*        <option value="Noida">Noida</option>*/}
                    {/*        <option value="Gurugram">Gurugram</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <div className="col-xl-2 col-sm-12 pb-2">
                        <select className="form-control" value={deadline} onChange={this.updateDeadline}>
                            <option defaultValue="0">Deadline</option>
                            <option value="1">1 week</option>
                            <option value="2">2 week</option>
                            <option value="3">3 week</option>
                            <option value="7">1 month</option>
                        </select>
                    </div>
                    <div className="col-xl-2 col-sm-12 pb-2">
                        <select className="form-control" value={location} onChange={this.updateLocation}>
                            <option defaultValue="">Location</option>
                            <option value="home">Work From Home</option>
                            <option value="office">Office</option>
                            <option value="part time">Part Time</option>
                        </select>
                    </div>
                    <div className="col-xl-2 col-sm-12 pb-2">
                        <button className="btn btn-success" onClick={this.filterList}>Search</button>
                    </div>
                </div>
            </div>
        );
    }

    updateCategory = (event) => {
        this.setState({category: event.target.value})
    }

    updateRegion = (event) => {
        this.setState({region: event.target.value})
    }
    updateLocation = (event) => {
        this.setState({location: event.target.value})
    }
    updateDeadline = (event) => {
        console.log(event.target.value)
        this.setState({deadline: event.target.value})
    }

    filterList = () => {
        let {category, region, deadline, location} = this.state;
        let {workList, filter} = this.props;
        let filteredList = [];
        workList.map((work) => {
            if (work.profile.toLowerCase().includes(category)) {
                let difference = new Date().getTime() - new Date(work.duration.last).getTime();
                let weeks = Math.floor(((((difference / 1000) / 60) / 60) / 24) / 7);
                if (deadline <= weeks) {
                    if (work.location.toLowerCase().includes(location.toLowerCase())) {
                        filteredList.push(work);
                    }
                }
            }
        });
        filter(filteredList);
    }
}

export default Filter;