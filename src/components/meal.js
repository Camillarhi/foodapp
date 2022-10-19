import React from 'react'
import { Container } from 'react-bootstrap';
import pasta from '../images/pasta.png';
import meatball from '../images/meatballs.png';
import burger from '../images/burger.png';

export default function Meal() {
    return (
        <Container>
            <div className='d-md-flex justify-content-between'>
                <div className='d-flex flex-column align-items-center mt-5'>
                    <img alt={pasta} src={pasta} className="img-fluid w-50" />
                    <h4 style={{ color: "#FBDDBB" }} className="fw-bolder mt-4">Stir fry Pasta</h4>
                    <p>Stir fry pasta yada yada yada</p>
                    <p> because of Sesan</p>
                </div>
                     <div className='d-flex flex-column align-items-center mt-5'>
                    <img alt={meatball} src={meatball} className="img-fluid w-50" />
                    <h4 style={{ color: "#FBDDBB" }} className="fw-bolder mt-4">Meat Balls</h4>
                    <p>Stir fry pasta yada yada yada</p>
                    <p> because of Sesan</p>
                </div>
                     <div className='d-flex flex-column align-items-center mt-5'>
                    <img alt={burger} src={burger} className="img-fluid w-50" />
                    <h4 style={{ color: "#FBDDBB" }} className="fw-bolder mt-4">Burger Meal</h4>
                    <p>Stir fry pasta yada yada yada</p>
                    <p> because of Sesan</p>
                </div>
            </div>
        </Container>
    )
}
