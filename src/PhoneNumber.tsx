import React from 'react';
import './Card.css';

class PhoneNumber extends React.Component {
    constructor(Props: any) {
        super(Props);
    }

    render() {
        return (
            <div className="Card">
                <label>
                    Phone Number
                </label>
                <input type="text" />

            </div>
        );
    }
}

export default PhoneNumber;