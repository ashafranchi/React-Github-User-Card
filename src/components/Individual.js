import React from "react";
import "./index.css"
import styled from "styled-components";
const Box = styled.div
`
border: 1px solid black;
`

const Individual = props =>{
    return(
        <div>
            <Box>
                <div className="individual-text">
                    <h1>Name: {props.name}</h1>
                    <h1>Repositories: {props.repositories}</h1>
                </div>
            </Box>
    </div>
    )
}

export default Individual;