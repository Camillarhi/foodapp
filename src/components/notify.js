import React from 'react'
import { Container } from 'react-bootstrap'

export default function Notify() {
    return (
        <Container className='mt-5 d-md-flex justify-content-between py-5'>
            <div className='mt-5 py-5'>
                <h3 className='fw-bolder' style={{ color: "#FBDDBB" }}>Get notified when we update!</h3>
                <p>Get notified when we add new items to our specials menu,</p>
                <p>update our price list of have promos!</p>
            </div>
            <div className='mt-5 py-5'>
                <form>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mx-2 rounded"
                        />

                        <button
                            style={{ backgroundColor: "#FBDDBB" }}
                            className="btn rounded"
                        >
                            Get notified
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    )
}
