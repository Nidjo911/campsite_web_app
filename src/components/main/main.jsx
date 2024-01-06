import React from 'react'

import '@fortawesome/fontawesome-free'

import { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'

import Sample1 from '../../media/cover/Sample1.jpg'
import Sample2 from '../../media/cover/Sample2.jpg'
import Sample3 from '../../media/cover/Sample3.jpg'

export default function Main() {

    return (
        <Fragment>
            <div>
                <img src={Sample1.src} alt="mainImg" style={{ maxWidth: '800px' }} />

                <div id="coverRight">
                    <div>
                        <span className=''>Lorem ipsum
                        </span>
                    </div>
                </div>
            </div>

            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sed, molestiae saepe eos quaerat explicabo natus temporibus minima omnis repudiandae, dicta soluta! Ipsa velit numquam officiis, voluptatum blanditiis minus totam.</p>

            </div>

            <section>
                <hr />
                <div className="custom--row">
                    <div className="custom--card">
                        <div className="custom--card-image"><img src={Sample1.src} alt="photo" /></div>
                        <div className="custom--card-description">
                            <p className="custom--text-body">Experience an inspiring view</p>
                        </div>
                    </div>
                    <div className="custom--card">
                        <div className="custom--card-image"><img src={Sample2.src} alt="photo" /></div>
                        <div className="custom--card-description">
                            <p className="custom--text-body">Immerse into the sea</p>
                        </div>
                    </div>
                    <div className="custom--card">
                        <div className="custom--card-image"><img src={Sample3.src} alt="photo3" /></div>
                        <div className="custom--card-description">
                            <p className="custom--text-body">Enjoy</p>
                        </div>
                    </div>

                </div>

                <hr />

            </section>


            <div className="flex">
                <div className="container container-sm">
                    <h2 className="text-center mb-lg-5 mt-5 ch-2">Where are we located?</h2>

                    <div className="d-flex d-md-flex flex-row bd-highlight mb-3">

                        <div className="map col-sm-12 col-md-8 col-lg-8 text-center mb-5">
{/*                             <iframe
                                width="600"
                                height="450"
                                style="border:0"
                                loading="lazy"
                                allowfullscreen
                                referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed/v1/place?key=
                                    &q=Space+Needle,Seattle+WA">

                            </iframe> */}
                        </div>
                        <div className="text-center mt-3">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, aliquam.</p>
                        </div>

                    </div>

                </div>
            </div>

            <h2 className="text-center mb-lg-5 mt-5 ch-2">Find out what we have nearby</h2>

            <h2 className="ch-2">Nature</h2>
            <div className="custom--row">
                <div><span><FontAwesomeIcon icon={faTree} style={{ color: 'green', width: '18px' }} /> Nature park - 1 km</span></div>
            </div>

            <h2 className="ch-2">Beaches</h2>
            <div className="custom--row">
                <div><span><FontAwesomeIcon icon={faUmbrellaBeach} style={{ color: '#C4A484', width: '18px' }} /> First - 250 m</span></div>

            </div>

            <h2 className="ch-2">Restaurants</h2>
            <div className="custom--row">
                <div><span><FontAwesomeIcon icon={faUmbrellaBeach} style={{ color: '#C4A484', width: '18px' }} /> Beach - 250 m</span></div>
            </div>


            <h2 className="ch-2">Transport</h2>
            <div className="custom--row">
                <div><span> Bus station in town - 2 km</span></div>
            </div>

        </Fragment>
    );

}