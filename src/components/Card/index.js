import React from "react";
import  "./style.css";

export const Card = (props) => {
    return (
        <div className="col-md-5 m-3 card">
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <div className="card-title"><h2>{props.title}</h2></div>
                <div className="card-subtitle mb-2 text-muted">{props.info}</div>
                <div className="span">
                    <a href={props.site} className="links"><p>Website</p></a>
                    <a href={props.github} className="links"><p>Github Link</p></a>
                </div>
            </div>
        </div>
    );
}
