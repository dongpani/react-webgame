import React, { Component } from 'react';

const Try = ({ tryInfo }) => {
    return (
        <li> 
            <b> {tryInfo.try} </b> - {tryInfo.result}
        </li>
    );
    
}

export default Try;