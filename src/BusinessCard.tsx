import React from 'react';
import './Card.css';

class JobTitle extends React.Component {
    constructor(Props: any) {
        super(Props);
    }

    render() {
        return (
            <div className="BusinessCard">
                <div className="Row clearFix">
                    <div className="PhoneNumber">222 555 6342</div>

                    <div className="CompanyName">
                        <p>Pierce and Pierce</p>
                        <p>Mergers and Acquisitions</p>
                    </div>
                </div>
                <div className="Row">
                    <div className="UserName">Patrick Bateman</div>
                    <div className="JobTitle">Vice President</div>
                </div>
                <div className="Row"></div>
            </div>
        );
    }
}

export default JobTitle;