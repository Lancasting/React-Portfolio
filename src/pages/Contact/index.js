import React from "react";
import "./style.css";

function Contact() {
    return (
        <section className="container container-fluid color-background">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Phone Number: (307) 248-1134</label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label> <a href="mailto:samuellancaster66@gmail.com">samuellancaster66@gmail.com</a>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Github: </label>
                    <a href="https://github.com/Lancasting" className="card-link" target="_blank" rel="noopener noreferrer">Lancasting</a>
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin">Linkedin: </label>
                    <a href="https://www.linkedin.com/in/samuellancaster" className="card-link" target="_blank" rel="noopener noreferrer">Samuel Lancaster</a>
                </div>
            </form>
        </section>
    );
}

export default Contact;