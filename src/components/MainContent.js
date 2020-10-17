import React, {useState, useEffect} from 'react';
import './MainContent.css';
import Table from './Table';

function MainContent() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => res.json())
            .then(json => {
                let tmpArray = []
                for (var i = 0; i < json.data.length; i++) {
                    let obj = {
                        id: parseInt(json.data[i].id),
                        employee_name: json.data[i].employee_name,
                        employee_age: parseInt(json.data[i].employee_age),
                        employee_salary: parseInt(json.data[i].employee_salary),
                        profile_image: json.data[i].profile_image,
                    }
                    tmpArray.push(obj)
                }
                setData(tmpArray);
            })
    }, []);

    console.log(data);

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
            
            {/* <div className="search__option">
                <input placeholder="Search"></input>
                <button id="secondary">Score With AI</button>
            </div> */}
            
            <div className="table">
                <Table rows={data} />
            </div>
        </div>
    )
}

export default MainContent;
