import React from 'react';
import './style.css'
import dipta from "./photos/dipta.jpg"
import hindra from "./photos/hindra.jpg"
import zefanya from "./photos/zefanya.jpg"

const About = () => {
    return (
        <div class="container">
        <h1 class="heading"><span>meet</span>Our Team</h1>
        <div class="profile-container">
          <div class="profiles">
            <div class="profile">
              <img src={dipta} class="profile-img" />
              
              <h3 class="user-name">Adipta M.</h3>
              <h5>Managing Partner</h5>
              <p>Our business partner in this project</p>
            </div>
          
    
            <div class="profile">
              <img src={hindra} class="profile-img" />
              
              <h3 class="user-name">Hindra Pangadi Test</h3>
              <h5>Project Manager</h5>
              <p>Our manager and director for the project</p>
            </div>
          
      
            <div class="profile">
              <img src={zefanya} class="profile-img" />
              
              <h3 class="user-name">Zefanya</h3>
              <h5>Creative Director</h5>
              <p>Our creative director in this project</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;