import React from "react";
import prosjekt from "../Assets/icons/prosjekt.png";
import renovering from "../Assets/icons/renovering.png";
import tak from "../Assets/icons/tak.png";
import tilbygg from "../Assets/icons/tilbygg.png";
import { NavLink } from "react-router-dom";


const Tjenester = () => {
    return (
        <>
            <div className="services-header">
                <h1 className="inner-service-header">Hva trenger du hjelp med?</h1>
            </div>
            <div className="services-container">
                <div className="services-inner-conatiner">
                    <div className="icon-container">
                        <NavLink className="icon-link" to="/Tjenester">
                            <img src={prosjekt} alt="project" className="icon"/>
                            <div className="service-name">Prosjekt fra A-Å</div>
                        </NavLink>
                        <NavLink className="icon-link" to="/Tjenester">
                            <img src={tilbygg} alt="project" className="icon"/>
                            <div className="service-name">Renovering</div>

                        </NavLink>
                        <NavLink className="icon-link" to="/Tjenester">
                            <img src={tak} alt="project" className="icon"/>
                            <div className="service-name">Rehabilitering</div>
                        </NavLink>
                        <NavLink className="icon-link" to="/Tjenester">
                            <img src={renovering} alt="project" className="icon"/>
                            <div className="service-name">Rehabilitering</div>
                        </NavLink>
                    </div>            
                </div>
            </div>
        </>
    )
}
export default Tjenester

