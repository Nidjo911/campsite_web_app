'use client'

import React from 'react'

import { Fragment } from 'react'
import { useState } from 'react'

import { useEffect } from 'react'
import { EventHandler } from 'react'

import '@fortawesome/fontawesome-free'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'


export default function Room() {

    const [img, setImg] = useState("");

    const changeImage = (event) => {
        const clickedImageSrc = event.target.src;
        setImg(clickedImageSrc);
    };

    return (
        <Fragment>
            <div>

{/* Add some kind of bootstrap component (the ...) */}

                <div className="space--stuff">
                    <h5 className="mt-4 mb-0">Suitability</h5>
                    <div className="grid--cards">
                        <span><FontAwesomeIcon icon={faPerson} style={{ color: 'green', width: '18px', height: '15px' }} /> Max people: 4</span>
                        <span><FontAwesomeIcon icon={faBed} style={{ color: 'green', width: '18px', height: '14px' }} />  Bedrooms: 2</span>
                        <span><i className="fa fa-fw fa-shower"></i> Shower</span>
                        <span><span className="material-icons md-18">
                            pets
                        </span> Pet friendly</span>
                        <span><i className="fa fa-fw fa-wifi"></i> WiFi</span>
                        <span><i className="fa fa-fw fa-tv"></i> TV</span>
                        <span><i className="fa fa-fw fa-cutlery"></i> Kitchen</span>
                        <span><i className="fa fa-fw fa-thermometer"></i> Air conditioning</span>
                        <span><i className="fa fa-fw fa-wheelchair"></i> Accessible</span>
                    </div>

                    <hr />
                    <h5 className="mt-4 mb-0">Description</h5>
                    <p className="m-1 m-lg-1">sample text</p>
                </div>
                <h5 className="mt-4 mb-0">Kitchen amenities</h5>
                <div className="amenities grid--amenities specials">
                    <span>refrigerator</span>
                    <span>accessories</span>
                    <span>cutting board</span>
                    <span>kitchen table</span>
                    <span>toaster</span>
                    <span>oven</span>
                    <span>dinning room</span>
                    <span>microwave</span>
                    <span>coffee machine</span>
                    <span>tea</span>
                    <span>outdoor furniture</span>
                </div>

                <h5 className="mt-4 mb-0">Bathroom</h5>
                <div className="amenities grid--amenities specials">
                    <span>bathtub or shower cabin</span>
                    <span>toilet paper</span>
                    <span>WC</span>
                    <span>free toilet accessories</span>
                </div>

                <h5 className="mt-4 mb-0">Apartment view</h5>
                <div className="amenities grid--amenities specials">
                    <span>balcony</span>
                    <span>mountain view</span>
                    <span>paved yard</span>
                    <span>sea view</span>
                </div>

                <h5 className="mt-4 mb-0">Apartment content</h5>
                <div className="amenities grid--amenities specials">
                    <span>private entrance</span>
                    <span>office table</span>
                    <span>sofa bed</span>
                    <span>board games / puzzles</span>
                    <span>towels</span>
                    <span>electrical socket by the bed</span>
                    <span>wooden floor</span>
                </div>
            </div>

            <br />

            <div id="rules" className="container-fluid container">
                <h2 className="mt-4 mb-3 text-center bg-body-tertiary">Rules</h2>
                <ul>
                    <li><i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM</li>
                    <li><i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM</li>
                    <li> Cancellation and prepayment conditions depend on the type of unit.</li>
                    <li> Children of all ages can stay in the facility.
                        Children aged 13 and over pay the adult price in this facility.</li>

                </ul>
                <span className="bigger">Smoking rule: No smoking! </span>

            </div>
        </Fragment>
    );

}