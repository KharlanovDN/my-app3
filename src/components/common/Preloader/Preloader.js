import preloaderImg from "../../../img/preloader.gif";
import React from "react";



let Preloader = (props) => {
    return <div style={{backgroundColor: 'green'}}>
            <img src={preloaderImg} />
        </div>;
};

export default Preloader;