import React from 'react';

function Main(props) {

    return (
        <section className="langauge-list">
            <img src={props.logo} alt="Language-Logo"/>
            <h2 className="programm-language-names">{props.title}</h2>

        </section>
    )
}

export default Main;