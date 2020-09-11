import React from 'react';
import './Card.css';

class JobTitle extends React.Component {
    constructor(Props: any) {
        super(Props);
    }

    render() {
        return (
            <div className="Card">
                <label>
                    Job Title
                </label>
                <input type="text" />

            </div>
        );
    }
}

export default JobTitle;