import React from 'react';
import './Card.css';

class Address extends React.Component {
    constructor(Props: any) {
        super(Props);
    }

    render() {
        return (
            <div className="Card">
                <label>
                    Address
                </label>
                <input type="text" />

            </div>
        );
    }
}

export default Address;