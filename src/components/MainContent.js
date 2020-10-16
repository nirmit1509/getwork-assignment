import React from 'react';
import './MainContent.css';

function MainContent() {
    return (
        <div className="main__content">
            <div className="main__content__top">
                <h2>THIS JOB IS FOR TESTING PURPOSE @ Company</h2>
                <button id="danger">Close Job</button>
            </div>

            <div className="job__status">
                <button className="status" id="active">1</button>
                <span><b> Pending(College)</b></span> <hr />
                <button className="status">2</button>
                <span> Pending(Company)</span> <hr />
                <button className="status">3</button>
                <span> Shortlisted(Company)</span> <hr />
                <button className="status">4</button>
                <span> Hired</span> <hr />
                <button className="status">5</button>
                <span> Rejected</span>
            </div>
            
            <div className="search__option">
                <input placeholder="Search"></input>
                <button id="secondary">Score With AI</button>
            </div>
            
            <div className="table">

            </div>
        </div>
    )
}

export default MainContent;
