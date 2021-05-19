import React from "react";
import Profile from "../../images/profile.jpg";
import "./style.css";
import Resume from "../../files/resume.pdf"


function Home() {
    return (
        <section className="container color-background">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <h2>About Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={Profile} alt="Samuel Lancaster" className="img-thumbnail" />
                        </div>
                        <div className="col-md-9">
                            <h5>
                                I like to code websites. Recently finished bootcamp graduate looking to challenge myself and aim for the stars with my career.
                                </h5>
                            <h5>
                                Feel free to look around at the different projects listed on this site. If you like what you see head over to the contact page to reach me.
                                </h5>
                        </div>
                    </div>
                </div>
                <div className="resume">
                    <a href={Resume} rel="noopener noreferrer" target="_blank" className="resume">
                        <h4>Resume</h4>
                    </a>
                </div>
            </div>
            <div className="fill"></div>
        </section >
    );
}

export default Home;