import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Submission = () => {
    return (
        <div>
            <h4>
                Thank you for your Submission
            </h4>
            <p> Your Query has been submitted successfully!!!</p>

            <NavLink to="/home"><Button type="submit" variant="warning">Back to Home</Button></NavLink>
        </div>
    );
};

export default Submission;