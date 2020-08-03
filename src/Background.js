import React, { useEffect, useState } from "react";

function Background() {
    
	let desktopImage = "http://source.unsplash.com/ewzHvxHl-Ak";
    let mobileImage = "http://source.unsplash.com/ygxq7srZJF0";
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    
    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}></div>
    );
};

export default Background;