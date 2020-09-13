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
                        <p className="Small">Mergers and Acquisitions</p>
                    </div>
                </div>
                <div className="Row">
                    <div className="UserName">Patrick Bateman</div>
                    <div className="JobTitle">Vice President</div>
                </div>
                <div className="Row Small">
                358 Exchange Place New York, NY. 10099 Fax 212 555 6390 Telex 10 4534
                </div>
            </div>
        );
    }
}

export default JobTitle;