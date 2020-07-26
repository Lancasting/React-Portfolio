import React from "react";


function Portfolio() {

    return (
        <div className="row">
            <div className="col-sm-4 mb-2 mx-auto">
                <div className="card" style="width: 18rem;">
                    <img src="../images/Swell Dwell.png" className="card-img-top" alt="Swell Dwell" />
                    <div className="card-body">
                        <h5 className="card-title">Swell Dwell</h5>
                        <h6 className="card-subtitle mb-2 text-muted">A team of us created this website. Our main focus was the API
                        calls. Our team really loved the idea of the website and if we had more time we would have added a lot
                        more functionality.</h6>
                        <a href="https://lancasting.github.io/Project-1/" className="card-link" target="_blank">Swell Dwell</a>
                        <a href="https://github.com/Lancasting/Project-1" className="card-link" target="_blank">Github repo</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 mb-2 mx-auto">
                <div className="card" style="width: 18rem;">
                    <img src="../images/MovieLover.png" className="card-img-top" alt="Swell Dwell" />
                    <div className="card-body">
                        <h5 className="card-title">Movie Lover</h5>
                        <h6 className="card-subtitle mb-2 text-muted">This is what we did for project 2 of our Bootcamp. My team really excelled in communicating what we were working on and if
                        anyone needed help we all jumped in to lend a hand. The main focus was the CRUD operations of our SQL database.
                        </h6>
                        <a href="https://projectdash.herokuapp.com/" className="card-link" target="_blank">Movie Lover</a>
                        <a href="https://github.com/Robbie2497/Project-2" className="card-link" target="_blank">Github repo</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 mb-2 mx-auto">
                <div className="card" style="width: 18rem;">
                    <img src="../images/Burger-log.png" className="card-img-top" alt="Weather App" />
                    <div className="card-body">
                        <h5 className="card-title">Burger Log</h5>
                        <h6 className="card-subtitle mb-2 text-muted">This is basic burger logger I created. Emphasizing using some of the CRUD operations.</h6>
                        <a href="https://stormy-hollows-97400.herokuapp.com/" className="card-link" target="_blank">Burger Log</a>
                        <a href="https://github.com/Lancasting/Burger_Log" className="card-link" target="_blank">Github repo</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 mb-2 mx-auto">
                <div className="card" style="width: 18rem;">
                    <img src="../images/Employee-tracker.png" className="card-img-top" alt="Weather App" />
                    <div className="card-body">
                        <h5 className="card-title">Employee Tracker</h5>
                        <h6 className="card-subtitle mb-2 text-muted">This is a simple employee tracker that you run through node. Basic SQL CRUD operations managing a database of employees</h6>
                        <a href="https://github.com/Lancasting/Employee-Tracker" className="card-link" target="_blank">Github repo</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 mb-2 mx-auto">
                <div className="card" style="width: 18rem;">
                    <img src="../images/Weather App.png" className="card-img-top" alt="Weather App" />
                    <div className="card-body">
                        <h5 className="card-title">Weather App</h5>
                        <h6 className="card-subtitle mb-2 text-muted">I created a basic weather app. Mainly focused on the interworkings
                        of the API calls</h6>
                        <a href="https://lancasting.github.io/Weather-App/" className="card-link" target="_blank">Weather app</a>
                        <a href="https://github.com/Lancasting/Weather-App" className="card-link" target="_blank">Github repo</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 mb-2 mx-auto">
                <div className="card" style="width: 18rem;">
                    <img src="../images/Formula 1 quiz.png" className="card-img-top" alt="F1-Quiz" />
                    <div className="card-body">
                        <h5 className="card-title">Quiz</h5>
                        <h6 className="card-subtitle mb-2 text-muted">A Formula 1 quiz I created. Javascript was the main focus of this.
            </h6>
                        <a href="https://lancasting.github.io/F1-Quiz/" className="card-link" target="_blank">Quiz</a>
                        <a href="https://github.com/Lancasting/F1-Quiz" className="card-link" target="_blank">Github repo</a>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Portfolio;