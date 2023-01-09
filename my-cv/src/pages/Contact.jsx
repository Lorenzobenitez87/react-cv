import React from "react"
import Navigation from "../components/navigation/Navigation"
import { CopyToClipboard } from 'react-copy-to-clipboard'

function Contact() {

    return (
        <div className="contact">
            <Navigation />

            <div className="contactContent">

                <div className="header"></div>

                <div className="contactBox">

                    <h1>Contactez-moi</h1>

                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Vaux-le-Pénil</span>
                        </li>

                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0782189058">
                                <span className="clickInput" onClick={
                                    () => { alert('Téléphone copié !') }
                                }>07 82 18 90 58</span>
                            </CopyToClipboard>
                        </li>

                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="lorenzobenitez87@hotmail.fr">
                                <span className="clickInput" onClick={
                                    () => { alert('E-mail copié !') }
                                }>lorenzobenitez87@hotmail.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/lorenzo-benitez-b3664723b/" target="_blank"
                            rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i></a>

                        <a href="https://github.com/Lorenzobenitez87" target="_blank"
                            rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i></a>

                        <a href="https://twitter.com/LORENZO280187" target="_blank"
                            rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i></a>

                        <a href="https://codepen.io/Lorenzobenitez87" target="_blank"
                            rel="noopener noreferrer">
                            <h4>CodePen</h4>
                            <i className="fab fa-codepen"></i></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact