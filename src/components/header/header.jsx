import React from 'react'

export default function Header() {

    return (
        <>
            <header>
                <nav className="navbar navbar-light justify-content-center">
                    <a className="navbar-brand" href="/home">Home</a>
                    <a className="navbar-brand" href="/camp">Camp sites</a>
                    <a className="navbar-brand" href="#kontakt">Contact</a>
                </nav>

                <div className="headline">
                    <p><span>Camp site</span></p>
                    <p><span>Enjoy the nature</span></p>
                </div>
            </header>

        </>
    );

}