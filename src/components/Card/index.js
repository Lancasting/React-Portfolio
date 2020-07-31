import React from "react";

export const Card = (props) => {
    return (
        <div>
            <img src={props.image} class="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.info}</h6>
                <a href={props.site} className="card-link" target="_blank">Website</a>
                <a href={props.github} className="card-link" target="_blank">Github repo</a>
            </div>
        </div>
    );
}
