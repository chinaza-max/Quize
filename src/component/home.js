import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import Nav from "./nav"
import Slide from "./slide"
import Body from "./body"
import About from "./about"
import Footer from "./footer"
class Home extends React.Component{

    
    render(){
    return(
        <div>
          <Nav/>
          <Slide/>
          <Body/>
          <About/>
          <Footer/>
        </div> 
    )
    }
}
/*
<Advert/>
<Content/>
<Filler/>
<Footer/>*/
export default Home;          