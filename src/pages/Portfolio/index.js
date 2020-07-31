import React from "react";
import { Projects } from "../../utils/projects";
import { Card } from "../../components/Card";



function Portfolio() {

        return (
            <div>
            {Projects.map((project) => (<Card key={project.id} {...project}/>))}
            </div>
        )}
export default Portfolio;