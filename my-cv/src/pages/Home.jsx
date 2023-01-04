import React from "react"
import Navigation from "../components/navigation/Navigation"

function Home() {

    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1> Lorenzo Benitez</h1>
                    <h2>Développeur Front-end</h2>
                    <div className="pdf">
                        <a href="./media/Capture3.PNG" target="_blank">
                            Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home