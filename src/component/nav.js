import React from "react";
import "../css/nav.css"



class Nav extends React.Component{
    
    render(){
    return(
        <div >
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "black",position: "fixed", width: "100%"}}>
                    <a className="navbar-brand" href="/" style={{color:"white"}}>Bright Mind</a>
                    <button className="navbar-toggler" type="button"   data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"   style={{backgroundColor:"white"}}></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"  style={{color:"white"}}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/question"  style={{color:"white"}}> Question</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="/" style={{color:"white"}}>About</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="/" style={{color:"white"}}>chinaza</a>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <a className="nav-link" href="/" style={{color:"white"}}>Registered</a>
                        </form>
                    </div>
                    </nav>  
        </div>
    )
    }
}
export default Nav;          