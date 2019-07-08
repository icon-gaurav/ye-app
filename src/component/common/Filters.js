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
            categories: [],
            locations: []
        }

    }

    componentWillMount() {
        // this.filterList();
    }


    render() {
        let {catAcdOpen, workAcdOpen, cityAcdOpen} = this.state;
        return (
            <div className="filters container-fluid ye-border bg-white">
                <div className="row filter-header border-bottom">FILTERS</div>

                <div className="row categories-panel panel panel-default">
                    <a className={catAcdOpen ? "accordion expanded font-15" : "accordion unexpanded font-15"}
                       onClick={() => {
                           this.setState({catAcdOpen: !catAcdOpen})
                       }} aria-controls="categories-list" aria-expanded={catAcdOpen}>Categories</a>
                    <Collapse in={catAcdOpen}>
                        <div className="panel" id="categories-list">
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="finance" id="finance"
                                           onChange={this.updateCategoryFilter}
                                           className="opacity-75"
                                    />
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="finance" className="font-14 mb-0 opacity-75">Finance</label>
                                </div>
                            </div>
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="strategy" id="strategy"
                                           onChange={this.updateCategoryFilter}
                                           height={11}
                                    className="opacity-75"/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="strategy" className="font-14 mb-0 opacity-75">Strategy</label>
                                </div>
                            </div>
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="marketing and sales" id="marketing and sales"
                                           onChange={this.updateCategoryFilter}
                                           height={11}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="marketing and sales" className="font-14 mb-0 opacity-75">Marketing & Sales</label>
                                </div>
                            </div>
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="science" id="science"
                                           onChange={this.updateCategoryFilter}
                                           height={11}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="science" className="font-14 mb-0 opacity-75">Science</label>
                                </div>
                            </div>
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="engineering and technology"
                                           id="engineering and technology"
                                           onChange={this.updateCategoryFilter}
                                           height={11}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="engineering and technology" className="font-14 mb-0 opacity-75">Engineering &
                                        Technology</label>
                                </div>
                            </div>
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="analytics" id="analytics"
                                           onChange={this.updateCategoryFilter}
                                           height={11}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="analytics" className="font-14 mb-0 opacity-75">Analytics</label>
                                </div>
                            </div>
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="design" id="design"
                                           onChange={this.updateCategoryFilter}
                                           height={11}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="design" className="font-14 mb-0 opacity-75">Design</label>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className="row work-location-panel">
                    <a className={workAcdOpen ? "accordion expanded font-15" : "accordion unexpanded font-15"}
                       onClick={() => {
                           this.setState({workAcdOpen: !workAcdOpen})
                       }} aria-controls="work-location-list" aria-expanded={workAcdOpen}>Work Location</a>
                    <Collapse in={workAcdOpen}>
                        <div className="panel" id="work-location-list">
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="home" id="home" onChange={this.updateLocationFilter}
                                           height={11}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="home" className="font-14 mb-0 opacity-75">Work From Home</label>
                                </div>
                            </div>
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="part-time" id="part-time"
                                           onChange={this.updateLocationFilter}
                                           height={11}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="part-time" className="font-14 mb-0 opacity-75">Part Time</label>
                                </div>
                            </div>
                            <div className="dropdown-input-wrapper d-flex">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="office" id="office"
                                           onChange={this.updateLocationFilter}
                                           height={11}/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="office" className="font-14 mb-0 opacity-75">Office</label>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className="row city-search-panel d-none">
                    <a className={cityAcdOpen ? "accordion expanded" : "accordion unexpanded"}
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

    updateCategoryFilter = (event) => {
        let categories = this.state.categories;
        let index = -1;
        categories.map((cat, key) => {
            if (cat == event.target.name) {
                index = key;
            }
        });
        if (index > 0) {
            categories.splice(index, 1);
        } else {
            categories.push(event.target.name);
        }
        this.setState({categories: categories})
    }

    updateLocationFilter = (event) => {
        let locations = this.state.locations;
        let index = -1;
        locations.map((loc, key) => {
            if (loc == event.target.name) {
                index = key;
            }
        });
        if (index > 0) {
            locations.splice(index, 1);
        } else {
            locations.push(event.target.name);
        }

        this.setState({locations: locations});
    }

    filterList() {
        let {workList, filter} = this.props;
        let filteredList = [];
        let categories = this.state.categories;
        let locations = this.state.locations;
        workList.map((work) => {
            if (categories.indexOf(work.category.toLowerCase()) >= 0) {
                if (locations.indexOf(work.location.toLowerCase()) >= 0) {
                    filteredList.push(work);
                }
            }
        });
        filter(filteredList);
    }
}

export default Filters;