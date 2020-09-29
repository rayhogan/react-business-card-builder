import React from 'react';
import './Card.css';

class Name extends React.Component {
    constructor(Props: any) {
        super(Props);
    }

    render() {
        return (
            <div className="Card">
                <label>
                    Name
                </label>
                <input type="text" />

            </div>
        );
    }
}

export default Name;