import React from "react"
import { NavLink } from "react-router-dom"
import ImageProfil from "../media/Capture3.PNG"

function Navigation () {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={ImageProfil} alt="Profil de Lorenzo Benitez" width={150} height={150} />
                    <h3>Lorenzo Benitez</h3>
                </div>
            </div>
            
            <div className="navigation">
                <ul>
                    <li>
                   <NavLink exact="true" to="/" activeclassname="active">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                    </NavLink>
                    </li> 

                    <li>
                   <NavLink exact="true" to="/competences" activeclassname="active">
                    <i className="fas fa-mountain"></i>
                    <span>Compétences</span>
                    </NavLink>
                    </li> 

                    <li>
                   <NavLink exact="true" to="/portfolio" activeclassname="active">
                    <i className="fas fa-images"></i>
                    <span>Portfolio</span>
                    </NavLink>
                    </li> 

                    <li>
                   <NavLink exact="true" to="/contact" activeclassname="active">
                    <i className="fas fa-address-book"></i>
                    <span>Contact</span>
                    </NavLink>
                    </li> 
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                        rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i></a>
                    </li>

                    <li>
                        <a href="https://www.google.com" target="_blank"
                        rel="noopener noreferrer">
                            <i className="fab fa-github"></i></a>
                    </li>

                    <li>
                        <a href="https://www.google.com" target="_blank"
                        rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i></a>
                    </li>

                    <li>
                        <a href="https://www.google.com" target="_blank"
                        rel="noopener noreferrer">
                            <i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
                
                <div className="signature">
                    <p>fromLorenzoBenitez - 2023</p>
                </div>
            </div>

        </div>

        
    )
}

export default Navigation