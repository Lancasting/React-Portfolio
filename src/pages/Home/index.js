import React from "react";
import Profile from "../../images/profile.jpg";


function Home() {
    return (
        <section className="container color-background">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <h1>About Me</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={Profile} alt="Samuel Lancaster" className="img-thumbnail" />
                        </div>
                        <div className="col-md-9">
                            <h5>
                                Originally from Wyoming and I have been in Utah for 9 years. I have been working in the Information
                                technology field for 7 years now. I am very much looking forward to switching things up in the development
                                world.
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="Resume">
                    <a href="./assets/files/resume.pdf" rel="nofollow noreferrer" target="_blank" className="resume">
                        <h2>Resume</h2>
                    </a>
                </div>
            </div>
        </section >
    );
}

export default Home;