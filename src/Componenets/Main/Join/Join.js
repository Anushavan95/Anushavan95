import React from 'react';
import Login from '../../Header/Nav/Login/Login';

function Join(props) {
    return (
        <section className="join-section">

            <div className="info-join">
                <h2>
                    Միացի՛ր

                    <span className="bold-text">
                        մեզ</span>
                </h2>
                <h2>
                    Դարձի՛ր
                    <span className="bold-text">
                        մրցունակ մասնագետ</span>
                </h2>
            </div>
            <Login/>

        </section>
    )
}

export default Join;