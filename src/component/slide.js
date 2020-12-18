import React from "react";
import "../css/slide.css"
import img1 from "./img/about.jpeg"
import img2 from "./img/background.jpg"
import img3 from "./img/profile-image1.jpg"

//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



class Slide extends React.Component{
    
    render(){
    return(
        <div id="lesson">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
    }
}
export default Slide;          