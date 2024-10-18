import React from "react";
import PropTypes from "prop-types";

import { StudentName } from "./studentName";

export function UserProfile(props) {
    console.log(props)
    return (
        <>
            <StudentName  studentname = {props.studentname} />
            <b>Age: </b><span>{props.age}</span>
            <div>
                <span>Matric: </span>
                <span>EEE/19/1354</span>
            </div>

            <section>
                <span>Favorite Lecturer:</span>
                <br />
                <ul>
                    <li>Engr Ibk</li>
                    <li>Dr T O Ale</li>
                    <li>Engr Owojori</li>
                </ul>
            </section>
        </>
    );
}

UserProfile.propTypes = {
    studentname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isLoggedIn: PropTypes.bool,
    favoriteLecturer: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),

}