import React from "react";
import ListingCard from "../common/ListingCard";
import image from './Mobile2.png';
import './ListingContainer.css'
class ListingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
       let workList = [{
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            buttonTitle:'BOOK NOW'
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            _id:"ferkj",
            mode:"internship",
            company:{
                name:"youngengine"
            },
            profile:"work-profile",
            duration:{
                start:new Date().toString(),
                last:new Date().toString(),
                end:new Date().toString(),
                weeks:5,
            },
            vacancy:3,
            stipend:500,
        },
        {
            buttonTitle:'BOOK NOW'
        }];
        let arr = [0, 1, 2, 3, 4, 5];
        let stylesheet = {
            paddingTop: 10,
            borderRadius: 10,
        };
        // let {workList} = this.props;
        var workcard=workList.map((work,index) => {
              if((index+1)%8===0){

                 return <div className="text-white text-center listing-card-wrapper col-md-3 col-xs-12 heightclass">
                 <img className="card-img" src={image}  alt="Card image"/>
                 <div className="card-img-overlay col-lg-4 col-md-4">
                   <button className="button-class"><strong>{work.buttonTitle}</strong></button>
                 </div>
               </div>
              }
              else{
                return <div key={index} className="col-md-3 col-xs-12">
                  <ListingCard work={work}/>
              </div>;
              }
                    
        })
        return (
            <div className="row list-wrapper" style={stylesheet}>
                
            {workcard}
            </div>
        );
    }
}

export default ListingContainer;