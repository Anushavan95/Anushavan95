/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const NewInfo = props => (

    <li className={`list-info-li ${props.show
        ? 'show'
        : ''}`}>
        <img src={props.icon} alt="IconList"/>

        <a
            href="#"
            onClick={(ev) => {
            ev.preventDefault();
            props.Changed(props.ind, props.show);
        }}>{props.titleinfo} {props.show}
        </a>

    </li>
);

export default NewInfo;

//  ? <p>{props.text}</p>      : null