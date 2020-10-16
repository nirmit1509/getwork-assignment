import React from 'react';
import './Main.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Main() {
    return (
        <div className="main">
            <Sidebar />
            <MainContent />       
        </div>
    )
}

export default Main;