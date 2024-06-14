import React from "react";
import worker from "../Assets/norsk-hus.jpg"

const Banner = () => {
    return (
        <>
            <div className="banner-container">
                <div className="banner">
                    <img src={worker} alt="banner-image" className="banner-image"/>
                </div>
            </div>
        </>
    )
}
export default Banner