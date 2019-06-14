import React, { Component } from 'react'
import image from './rock.png'
import './TotalEarnings.css'
const containerStyle={
    backgroundColor:'#f5f5f0'
}
const textColor={
    color:'red'
}
class TotalEarnings extends Component {
    render() {
        return (
            
        <div className="container" style={containerStyle}>
            <div className="row pl-3 pr-3 pt-1 pb-1  ">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12   pr-2 p-2 ">
                <strong>Today,29-09-19</strong>
                </div>
            </div>
        <div className="row pl-3 pr-3 pt-1 pb-1  ">
            <div className="col-lg-2 col-md-2 col-sm-3 col-3 pr-2 p-2 borderdiv1">
               <img src={image} width="100px" height="100px" className="img-fluid" alt="Responsive image"/>
            </div>
            <div className=" col-lg-8 col-md-8 col-sm-6 col-6  borderdiv2" >
                Text Here:Bootstrap's grid system is responsive, and the columns will re-arrange depending on the screen size: On a big screen it might look better with the content organized in three columns, but on a small screen it would be better if the content items were stacked on top of each other.
            <div className="row pr-5 pl-0 pt-2 pb-2">
            <div className=" small col-lg-6 col-md-6 col-sm-12 col-12 opacity-75">
                    9:32 AM
                </div>
                <div className="container small col-lg-6 col-md-6 col-sm-12 col-12 ">
                    Closing Balance:<span className="opacity-75">&#x20B9; 82</span>
                </div>
            </div>
            </div>
            <div className=" col-lg-2 col-md-2 col-sm-3 col-3 b borderdiv3" style={textColor}>
                    <strong>-124.5</strong> 
                </div>
        </div>
        <div className="row pl-3 pr-3 pt-1 pb-1  ">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12   pr-2 p-2 ">
                <strong>Today,29-09-19</strong>
                </div>
            </div>
        <div className="row pl-3 pr-3 pt-1 pb-1  ">
            <div className="col-lg-2 col-md-2 col-sm-3 col-3 pr-2 p-2 borderdiv1">
               <img src={image} width="100px" height="100px" className="img-fluid" alt="Responsive image"/>
            </div>
            <div className=" col-lg-8 col-md-8 col-sm-6 col-6  borderdiv2" >
            Text Here:Bootstrap's grid system is responsive, and the columns will re-arrange depending on the screen size: On a big screen it might look better with the content organized in three columns, but on a small screen it would be better if the content items were stacked on top of each other. 
            <div className="row pr-5 pl-0 pt-2 pb-2">
                <div className=" small col-lg-6 col-md-6 col-sm-12 col-12 opacity-75">
                    9:32 AM
                </div>
                <div className="container small col-lg-6 col-md-6 col-sm-12 col-12 ">
                    Closing Balance:<span className="opacity-75">&#x20B9; 82</span>
                </div>
            </div>
            </div>
            <div className=" col-lg-2 col-md-2 col-sm-3 col-3 b borderdiv3" style={textColor}>
                    <strong>-124.5</strong> 
                </div>
        </div>
        <div className="row pl-3 pr-3 pt-1 pb-1  ">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12   pr-2 p-2 ">
                <strong>Today,29-09-19</strong>
                </div>
            </div>
        <div className="row pl-3 pr-3 pt-1 pb-1  ">
            <div className="col-lg-2 col-md-2 col-sm-3 col-3 pr-2 p-2 borderdiv1">
               <img src={image} width="100px" height="100px" className="img-fluid" alt="Responsive image"/>
            </div>
            <div className=" col-lg-8 col-md-8 col-sm-6 col-6  borderdiv2" >
                Text Here:Bootstrap's grid system is responsive, and the columns will re-arrange depending on the screen size: On a big screen it might look better with the content organized in three columns, but on a small screen it would be better if the content items were stacked on top of each other.
            <div className="row pr-5 pl-0 pt-2 pb-2">
            <div className=" small col-lg-6 col-md-6 col-sm-12 col-12 opacity-75">
                    9:32 AM
                </div>
                <div className="container small col-lg-6 col-md-6 col-sm-12 col-12 ">
                    Closing Balance:<span className="opacity-75">&#x20B9; 82</span>
                </div>
            </div>
            </div>
            <div className=" col-lg-2 col-md-2 col-sm-3 col-3 b borderdiv3" style={textColor}>
                    <strong>-124.5</strong> 
                </div>
        </div>
    </div>
            
        )
    }
}

export default TotalEarnings
