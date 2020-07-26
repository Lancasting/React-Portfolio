import React from "react";

function Contact() {
    return (
        <section className="container container-fluid color-background">
            <form>
                <div className="form-group">
                    <label for="name">Phone Number: (307) 248-1134</label>
                </div>
                <div className="form-group">
                    <label for="email">Email: </label> <a href="mailto:samuellancaster66@gmail.com">samuellancaster66@gmail.com</a>
                </div>
                <div className="form-group">
                    <label for="message">Github: </label>
                    <a href="https://github.com/Lancasting" className="card-link" target="_blank">Lancasting</a>
                </div>
                <div className="form-group">
                    <label for="linkedin">Linkedin: </label>
                    <a href="https://www.linkedin.com/in/samuellancaster" className="card-link" target="_blank">Samuel Lancaster</a>
                </div>
            </form>
        </section>
    );
}

export default Contact;