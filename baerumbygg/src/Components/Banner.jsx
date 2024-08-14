import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import house from "../Assets/norsk-hus.jpg";
import workers from "../Assets/construction-site.jpg";

const Banner = () => {
    const [image, setImage] = useState(workers); // Initialize with default image
    const location = useLocation(); // Access the entire location object

    useEffect(() => {
        const currentPath = location.pathname; // Get the pathname from the location object
        console.log("Location changed to:", currentPath); // Debug log to ensure location is changing

        switch (currentPath) {
            case '/Tjenester':
                setImage(workers);
                break;
            case '/':
            case '/About':
                setImage(house);
                break;
            default:
                setImage(workers); // Default image if route doesn't match
                break;
        }
    }, [location.pathname]); // Run effect when location.pathname changes

    return (
        <div className="banner-container">
            <div className="banner">
                <img src={image} alt="banner" className="banner-image" />
            </div>
        </div>
    );
};

export default Banner;
