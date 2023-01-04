import React from "react"
import Navigation from "../components/navigation/Navigation"
import Languages from "../components/knowledges/Languages"
import Experience from "../components/knowledges/Experience"
import Hobbies from "../components/knowledges/Hobbies"
import OtherSkills from "../components/knowledges/OtherSkills"

function Knowledges() {

    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    )
}

export default Knowledges