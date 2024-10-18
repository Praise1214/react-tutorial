import React from "react";
import styles from "./styles.module.css"

export function StudentName(props) {
    console.log(props.trimmedStudentname);
    return (
        <>
        <b className = {styles.studentnamev}
            /*style = {{
                color: "red",
                fontSize : "20px",
            }}*/>Studentname: </b>
        <span>{props.studentname}</span>
      
        </>
            

    )
}