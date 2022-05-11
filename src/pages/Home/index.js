import React from "react";
import Profile from "../../images/profile.jpg";
import "./style.css";
import Resume from "../../files/resume.pdf"


function Home() {
    return (
        <section className="container color-background">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-header">
                        <h2>About Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={Profile} alt="Samuel Lancaster" className="img-thumbnail" />
                        </div>
                        <div className="col-md-9">
                            <h5>
                                I like to code websites. I am looking to further my career in the web development world. Currently I have been coding websites on the side with a few colleagues I met through the development bootcamp.
                                </h5>
                            <h5>
                                Feel free to look around at the different projects listed on this site. If you like what you see, head over to the contact page to reach me.
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
            {/* <div className="fill"></div> */}
        </section >
    );
}

export default Home;