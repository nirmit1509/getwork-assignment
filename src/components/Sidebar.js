import React from 'react';
import './Sidebar.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import SchoolIcon from '@material-ui/icons/School';
import TelegramIcon from '@material-ui/icons/Telegram';
import ApartmentIcon from '@material-ui/icons/Apartment';
import WorkIcon from '@material-ui/icons/Work';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar__content" id="items">
                <li><DashboardIcon /> Dashboard</li>
                    <br />
                <li><DescriptionIcon /> Branches/Courses</li>
                <li><p>Colleges</p>
                    <ul id="items">
                        <li><ApartmentIcon /> All</li>
                        <li><TelegramIcon /> Send Invitation</li>
                        <li><SchoolIcon /> Add College</li>
                    </ul>
                </li>
                <li><p>Companies</p>
                    <ul id="items">
                        <li><ApartmentIcon /> All</li>
                    </ul>
                </li>
                <li><p>Students</p>
                    <ul id="items">
                        <li><SchoolIcon /> All</li>
                        <li><TelegramIcon /> Add Student</li>
                    </ul>
                </li>
                <li><p>My Jobs</p>
                    <ul id="items">
                        <li><WorkIcon /> All Jobs</li>
                        <li><WorkIcon /> Open Jobs</li>
                        <li><WorkIcon /> Application Status</li>
                        <li><WorkIcon /> Closed Jobs</li>
                    </ul>
                </li>
                <li><p>Data</p>
                    <ul id="items">
                        <li><DescriptionIcon /> Generate Report</li>
                        <li><TelegramIcon /> Update Youtube Links</li>
                        <li><TelegramIcon /> Update Blog Links</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
