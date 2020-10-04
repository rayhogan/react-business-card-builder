import React from 'react';
import './Card.css';

class CompanyName extends React.Component {
    constructor(Props: any) {
        super(Props);
    }

    render() {
        return (
            <div className="Card">
                <label>
                    Company
                </label>
                <input type="text" />
                <label>
                    Department
                </label>
                <input type="text" />

            </div>
        );
    }
}

export default CompanyName;