import React, {useState, useEffect} from "react";
import "./index.css";
import Individual from "./Individual";

const Users = props => {
console.log(props);
    return(
        <div className="container">
            <ul>
                {props.users.map((props) => <Individual key={props.created} name={props.name}/>)}
            </ul>
        </div>
    )
    }

export default Users;