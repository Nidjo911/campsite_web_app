import React from 'react'
import { Fragment } from 'react'

import '../../app/normalize.css'
import '../../app/style.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    return (
        <Fragment>
            <footer id="kontakt" className="footer mt-4 mt-lg-4 mt-md-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md col-sm-12  col-12 col">
                            <h5>Contact us</h5>
                            <p><FontAwesomeIcon icon={faArrowRight} style={{ color: '#C4A484', width: '18px' }} /> 9878/25 sec 9 rohini 35 </p>
                            <p><FontAwesomeIcon icon={faPhone} style={{ color: '#C4A484', width: '18px' }} /> +91-9999878398 </p>
                            <p><FontAwesomeIcon icon={faEnvelope} style={{ color: '#C4A484', width: '18px' }} /> info@example.com </p>
                        </div>
                        <div className="container">
                            <p className="text-center">Copyright @2023 | Designed by Johnny</p>
                        </div>
                    </div>
                </div>

            </footer>
        </Fragment>
    )
}