import React from "react";
import '../components/Testimony.css'


function Testimony(props){
    return( 
        <div className="testimony-container">
            <img 
                className="testimony-img"
                src={require(`../assets/testimonio-${props.img}.png`)}
                alt="emma face"
            />
            <div className="testimony-container-text">
                <p className="testimony-name">
                    <strong>{props.name}</strong> en {props.country} </p>
                <p className="testimony-position">{props.cargo} de <strong>{props.empresa}</strong> </p>
                <p className="testimony-text">"{props.Testimony}"</p>
            </div>
        </div>
    )
}

export default Testimony
