import React from "react";
import img1 from "../pictures/Screenshot 1.png";
import img2 from "../pictures/Screenshot 2.png";
import img3 from "../pictures/Screenshot 3.png";
import img4 from "../pictures/Screenshot 4.png";
import img5 from "../pictures/Screenshot 5.png";
const Sidebar = () => {
    const pictures = [img1, img2, img3, img4, img5];
    return (
        <div className='side-bar'>
            { pictures.map((picture) => (
                <img src={ picture } key={ picture.toString() } />
            )) }
        </div>
    );
};

export default Sidebar;
