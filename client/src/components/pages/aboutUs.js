import React, { Component } from 'react';
import {Router} from "react-router-dom";

class AboutUs extends Component {
    render() {
       return (  
       <div className = "aboutUs">
        <h1>About Us</h1>
        <p className="p1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className="grid-container">
        <div class="grid-item"><img src="person.jpg" alt="icon"></img><p>Name here</p></div>
        <div class="grid-item"><img src="person.jpg" alt="icon"></img></div>
        <div class="grid-item"><img src="person.jpg" alt="icon"></img></div> 
        <div class="grid-item"><img src="person.jpg" alt="icon"></img></div>
        <div class="grid-item"><img src="person.jpg" alt="icon"></img></div>  
        <div class="grid-item"><img src="person.jpg" alt="icon"></img></div>
        <div class="grid-item"><img src="person.jpg" alt="icon"></img></div>
        <div class="grid-item"><img src="person.jpg" alt="icon"></img></div>
        <div class="grid-item"><img src="person.jpg" alt="icon"></img></div>     

        </div>
        </div>  );
    }
}

       
export default AboutUs;