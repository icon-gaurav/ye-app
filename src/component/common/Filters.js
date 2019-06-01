import React from "react";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import "../../assets/stylesheet/Filters.css";
import Collapse from "react-bootstrap/Collapse";

class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            catAcdOpen: false,
            workAcdOpen: false,
            cityAcdOpen: false,
        }
    }


    render() {
        let {catAcdOpen, workAcdOpen, cityAcdOpen} = this.state;
        return (
            <div className="filters container-fluid">
                <div className="row filter-header">Filters</div>

                <div className="row categories-panel panel panel-default">
                    <a className={catAcdOpen?"accordion expanded":"accordion unexpanded"}
                       onClick={() => {
                        this.setState({catAcdOpen: !catAcdOpen})
                    }} aria-controls="categories-list" aria-expanded={catAcdOpen}>Categories</a>
                    <Collapse in={catAcdOpen}>
                        <div className="panel" id="categories-list">
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="finance" id="finance"/>
                                <label htmlFor="finance">Finance</label>
                            </div>
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="strategy" id="strategy"/>
                                <label htmlFor="strategy">Strategy</label>
                            </div>
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="marketing and sales" id="marketing and sales"/>
                                <label htmlFor="marketing and sales">Marketing & Sales</label>
                            </div>
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="science" id="science"/>
                                <label htmlFor="science">Science</label>
                            </div>
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="engineering and technology"
                                       id="engineering and technology"/>
                                <label htmlFor="engineering and technology">Engineering & Technology</label>
                            </div>
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="analytics" id="analytics"/>
                                <label htmlFor="analytics">Analytics</label>
                            </div>
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="design" id="design"/>
                                <label htmlFor="design">Design</label>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className="row work-location-panel">
                    <a className={workAcdOpen?"accordion expanded":"accordion unexpanded"}
                       onClick={() => {
                        this.setState({workAcdOpen: !workAcdOpen})
                    }} aria-controls="work-location-list" aria-expanded={workAcdOpen}>Work Location</a>
                    <Collapse in={workAcdOpen}>
                        <div className="panel" id="work-location-list">
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="home" id="home"/>
                                <label htmlFor="home">Work From Home</label>
                            </div>
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="part-time" id="part-time"/>
                                <label htmlFor="part-time">Part Time</label>
                            </div>
                            <div className="dropdown-input-wrapper">
                                <input type="checkbox" name="office" id="office"/>
                                <label htmlFor="office">Office</label>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className="row city-search-panel">
                    <a className={cityAcdOpen?"accordion expanded":"accordion unexpanded"}
                       onClick={() => {
                        this.setState({cityAcdOpen: !cityAcdOpen})
                    }} aria-controls="city-search" aria-expanded={cityAcdOpen}>City</a>
                    <Collapse in={cityAcdOpen}>
                        <div className="dropdown-input-wrapper panel" id={"city-search"}>
                            <FormGroup className="search-input-wrapper">
                                <FormLabel>Select city</FormLabel>
                                <FormControl type="text" placeholder="Type a city.."/>
                            </FormGroup>
                        </div>
                    </Collapse>
                </div>
                <div className="row formatting-stuff"></div>

                {/*        <div className="panel panel-default">*/}
                {/*            <div className="panel-heading" role="tab">*/}
                {/*                <div className="panel-title">*/}
                {/*                    <a href="#" role="button">Categories<img*/}
                {/*                        src={require("../../assets/images/icons/chevron-down.svg")} width="15px"*/}
                {/*                        height="8px" alt=""/></a>*/}
                {/*                </div>*/}
                {/*                <div className="panel-collapse" role="tab-panel">*/}
                {/*                    <div className="panel-body">*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="finance" id="finance"/>*/}
                {/*                            <label htmlFor="finance">Finance</label>*/}
                {/*                        </div>*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="strategy" id="strategy"/>*/}
                {/*                            <label htmlFor="strategy">Strategy</label>*/}
                {/*                        </div>*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="marketing and sales" id="marketing and sales"/>*/}
                {/*                            <label htmlFor="marketing and sales">Marketing & Sales</label>*/}
                {/*                        </div>*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="science" id="science"/>*/}
                {/*                            <label htmlFor="science">Science</label>*/}
                {/*                        </div>*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="engineering and technology"*/}
                {/*                                   id="engineering and technology"/>*/}
                {/*                            <label htmlFor="engineering and technology">Engineering & Technology</label>*/}
                {/*                        </div>*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="analytics" id="analytics"/>*/}
                {/*                            <label htmlFor="analytics">Analytics</label>*/}
                {/*                        </div>*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="design" id="design"/>*/}
                {/*                            <label htmlFor="design">Design</label>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div className="work-location-panel">*/}
                {/*        <div className="panel panel-default">*/}
                {/*            <div className="panel-heading" role="tab">*/}
                {/*                <div className="panel-title">*/}
                {/*                    <a href="#" role="button">Work Location<img*/}
                {/*                        src={require("../../assets/images/icons/chevron-down.svg")} width="15px"*/}
                {/*                        height="8px" alt=""/></a>*/}
                {/*                </div>*/}
                {/*                <div className="panel-collapse" role="tab-panel">*/}
                {/*                    <div className="panel-body">*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="home" id="home"/>*/}
                {/*                            <label htmlFor="home">Work From Home</label>*/}
                {/*                        </div>*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="part-time" id="part-time"/>*/}
                {/*                            <label htmlFor="part-time">Part Time</label>*/}
                {/*                        </div>*/}
                {/*                        <div className="dropdown-input-wrapper">*/}
                {/*                            <input type="checkbox" name="office" id="office"/>*/}
                {/*                            <label htmlFor="office">Office</label>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="city-search-wrapper">*/}
                {/*        <img src={require("../../assets/images/icons/cancel-music.png")} alt=""*/}
                {/*             className="cross"/>*/}
                {/*        <FormGroup className="search-input-wrapper">*/}
                {/*            <FormLabel>Select city</FormLabel>*/}
                {/*            <FormControl type="text" placeholder="Type a city.."/>*/}
                {/*        </FormGroup>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Filters;