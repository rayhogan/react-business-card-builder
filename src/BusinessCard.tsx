import React from 'react';
import './Card.css';

class JobTitle extends React.Component {
    constructor(Props: any) {
        super(Props);
    }

    render() {
        return (
            <div className="BusinessCard">
                <div className="PhoneNumber">222 555 6342</div>
            </div>
        );
    }
}

export default JobTitle;