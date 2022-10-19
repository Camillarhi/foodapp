import React from 'react';
import { Container } from 'react-bootstrap';
import app_store from "../images/app_store.png";
import google_play from "../images/google_play.png";


export default function Footer() {
    return (
        <div className='bg-black py-3 '>
            <Container className='d-md-flex justify-content-around'>
                <div>
                    <h5 className='my-5'>Company</h5>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h5 className='my-5'>Support</h5>
                    <p>Help Center</p>
                    <p>Safety Center</p>
                </div>
                <div>
                    <h5 className='my-5'>Legal</h5>
                    <p>Cookies Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Dispute resolution</p>
                </div>
                <div className='d-flex flex-column'>
                    <h5 className='my-5'>Install App</h5>
                    <img alt={google_play} src={google_play} className="img-fluid" style={{ width: "150px" }} />
                    <img alt={app_store} src={app_store} className="img-fluid" style={{ width: "150px" }} />
                </div>
            </Container>
            <hr />
            <Container className='d-md-flex justify-content-between px-5'>
                <p className='mx-5'>© 2021 LILIES, All rights reserved</p>
                <div>
                    <i className="bi bi-instagram mx-5"></i>
                    <i class="bi bi-twitter mx-5"></i>
                    <i class="bi bi-youtube mx-5"></i>
                </div>
            </Container>
        </div>
    )
}
